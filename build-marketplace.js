#!/usr/bin/env node
/**
 * build-marketplace.js
 *
 * Generates one repository that is simultaneously
 *   - a Claude Code plugin marketplace  (.claude-plugin/marketplace.json)
 *   - a Codex plugin marketplace        (.agents/plugins/marketplace.json)
 *
 * from the l11-engineering-stack catalog (catalog/, vendor/, skills/).
 *
 * Output: plugins/<name>/ shared by both marketplaces.
 *   finem-core          coordinator skill + the capability base originals
 *   finem-<extension>   one entry skill + that pack's originals
 *
 * Only entry skills are native. Upstream originals are copied byte for byte
 * into <plugin>/upstream/<source>/ and opened on demand.
 *
 * Usage:  node build-marketplace.js --catalog <path-to-extracted-package> [--out <repo-root>]
 *
 * No dependencies. Node >= 18.
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

// ---------------------------------------------------------------------------
// Branding. Changing these regenerates every manifest, skill and install
// command; nothing else in this file hard-codes a name.
// ---------------------------------------------------------------------------

const BRAND = 'Finem';
const PREFIX = 'finem';
const MARKETPLACE = 'finem';
const CORE = `${PREFIX}-core`;
const COORDINATOR = `${PREFIX}-engineering`;
const REPO_SLUG = 'Finem-Group/Engineering';
const REPO_URL = `https://github.com/${REPO_SLUG}`;
const OWNER = { name: 'Finem Group', url: 'https://github.com/Finem-Group' };
// Marketplace fixes can be released independently of the pinned L11 catalog.
const PLUGIN_VERSION = '0.5.0';
const CODEX_CATEGORY = 'Developer Tools';
const CODEX_POLICY = { installation: 'AVAILABLE', authentication: 'ON_USE' };

/** Directory the l11 CLI writes into a project. Presence of it selects CLI mode. */
const CLI_STATE_DIR = '.l11';
/** The CLI binary name referenced by the coordinator's CLI-mode instructions. */
const CLI_BIN = 'l11';

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) out[key] = true;
    else { out[key] = next; i++; }
  }
  return out;
}

const readJSON = file => JSON.parse(fs.readFileSync(file, 'utf8'));

function writeJSON(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text.endsWith('\n') ? text : text + '\n');
}

const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

/** Copy a directory tree verbatim, preserving bytes and mode bits. */
function copyTree(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyTree(src, dest);
    else if (entry.isSymbolicLink()) fs.symlinkSync(fs.readlinkSync(src), dest);
    else { fs.copyFileSync(src, dest); fs.chmodSync(dest, fs.statSync(src).mode & 0o777); }
  }
}

function rmrf(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

/** Sentence-case an id such as `backend-hono` for prose. */
const titleize = id => id.replace(/[-:]/g, ' ').replace(/^./, c => c.toUpperCase());

/** One line, no trailing period duplication — frontmatter descriptions must stay single-line. */
const oneLine = text => text.replace(/\s+/g, ' ').trim();

/** Shorten to `max` characters on a word boundary rather than mid-word. */
function clip(text, max) {
  const line = oneLine(text);
  if (line.length <= max) return line;
  const cut = line.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,;:.\s]+$/, '') + '…';
}

// ---------------------------------------------------------------------------
// Catalog model
// ---------------------------------------------------------------------------

function loadCatalog(root) {
  const stack = readJSON(path.join(root, 'catalog', 'stack.json'));
  const upstream = readJSON(path.join(root, 'catalog', 'upstream-sources.json'));
  const lock = readJSON(path.join(root, 'catalog', 'upstream.lock.json'));

  const sources = new Map(upstream.sources.map(s => [s.id, s]));
  const lockBySource = new Map(lock.sources.map(s => [s.id, s]));
  const capabilities = new Map(stack.capabilities.map(c => [c.id, c]));

  /** skill id -> { source, path } */
  const skills = new Map();
  for (const source of upstream.sources) {
    for (const skill of source.skills ?? []) {
      if (skills.has(skill.id)) throw new Error(`Duplicate skill id: ${skill.id}`);
      skills.set(skill.id, { source: source.id, path: skill.path });
    }
  }
  return { root, stack, sources, lockBySource, capabilities, skills, version: PLUGIN_VERSION };
}

/** Include supporting repositories even when they expose no native skill. */
function resolveSources(catalog, selected) {
  const done = new Set();
  const visiting = new Set();
  function visit(id) {
    if (visiting.has(id)) throw new Error(`Source dependency cycle at ${id}`);
    if (done.has(id)) return;
    const source = catalog.sources.get(id);
    if (!source || !catalog.lockBySource.has(id)) throw new Error(`Unknown or unlocked source dependency: ${id}`);
    visiting.add(id);
    for (const dependency of source.dependencies ?? []) visit(dependency);
    visiting.delete(id);
    done.add(id);
  }
  for (const id of selected) visit(id);
  return [...done].sort();
}

function locate(catalog, skillId) {
  const found = catalog.skills.get(skillId);
  if (!found) throw new Error(`Unknown skill referenced by the catalog: ${skillId}`);
  return found;
}

/** Build the entrypoint records for a list of skill ids, grouped by capability. */
function entrypoints(catalog, skillIds) {
  return skillIds.map(id => {
    const { source, path: rel } = locate(catalog, id);
    return { skill: id, source, path: `upstream/${source}/${rel}` };
  });
}

// ---------------------------------------------------------------------------
// Plugin descriptors
// ---------------------------------------------------------------------------

function describeCore(catalog) {
  const caps = [];
  for (const capability of catalog.stack.capabilities) {
    caps.push({
      id: capability.id,
      title: capability.title,
      phase: capability.phase,
      requires: capability.requires ?? [],
      connectors: capability.connectors ?? [],
      coverage: capability.coverage,
      replace: false,
      entrypoints: entrypoints(catalog, capability.upstream ?? []),
    });
  }
  const sources = new Set();
  for (const cap of caps) for (const e of cap.entrypoints) sources.add(e.source);

  return {
    name: CORE,
    kind: 'core',
    displayName: `${BRAND} Engineering core`,
    description: oneLine(`The ${BRAND} engineering coordinator and the base original skills for all
      ${catalog.stack.capabilities.length} capabilities. Every ${PREFIX} technology pack depends on it.`),
    shortDescription: oneLine(`Coordinates ${catalog.stack.capabilities.length} engineering capabilities;
      every ${PREFIX} pack builds on it.`),
    dependencies: [],
    capabilities: caps,
    sources: resolveSources(catalog, sources),
    skillCount: new Set(caps.flatMap(c => c.entrypoints.map(e => e.skill))).size,
  };
}

function describePack(catalog, extension) {
  const caps = (extension.mappings ?? []).map(mapping => {
    const capability = catalog.capabilities.get(mapping.capability);
    if (!capability) throw new Error(`Extension ${extension.id} maps unknown capability ${mapping.capability}`);
    return {
      id: capability.id,
      title: capability.title,
      phase: capability.phase,
      requires: capability.requires ?? [],
      connectors: capability.connectors ?? [],
      coverage: capability.coverage,
      replace: Boolean(mapping.replace),
      entrypoints: entrypoints(catalog, mapping.skills ?? []),
    };
  });
  const sources = new Set();
  for (const cap of caps) for (const e of cap.entrypoints) sources.add(e.source);

  return {
    name: `${PREFIX}-${extension.id}`,
    kind: 'pack',
    extension: extension.id,
    displayName: `${BRAND} ${titleize(extension.id)}`,
    description: oneLine(extension.description),
    shortDescription: clip(extension.description, 120),
    conflicts: (extension.conflicts ?? []).map(id => `${PREFIX}-${id}`),
    exclusiveGroup: extension.exclusiveGroup ?? null,
    dependencies: [CORE, ...(extension.requires ?? []).map(id => `${PREFIX}-${id}`)],
    capabilities: caps,
    sources: resolveSources(catalog, sources),
    skillCount: new Set(caps.flatMap(c => c.entrypoints.map(e => e.skill))).size,
  };
}

function describeAll(catalog) {
  return [describeCore(catalog), ...catalog.stack.extensions.map(e => describePack(catalog, e))];
}

// ---------------------------------------------------------------------------
// Skill bodies
// ---------------------------------------------------------------------------

function frontmatter(name, description) {
  return `---\nname: ${name}\ndescription: ${JSON.stringify(oneLine(description))}\n---\n`;
}

/**
 * The coordinator. It runs in two modes because the same catalog ships both as
 * an npm CLI that writes `.l11/` into a project and as these plugins.
 */
function coordinatorSkill(catalog, core) {
  const capabilityCount = catalog.stack.capabilities.length;
  const packCount = catalog.stack.extensions.length;
  const skillTotal = [...catalog.skills.keys()].length;
  const sourceCount = catalog.sources.size;

  return frontmatter(
    COORDINATOR,
    `Use when coordinating engineering work in this project: selecting which original upstream skill to
     follow for discovery, architecture, frontend, backend, data, infrastructure, testing, security,
     release or operations work, and resolving its original file paths and tools.`
  ) + `
# ${BRAND} engineering workflow

${BRAND} coordinates the task. Implementation guidance comes from the actual original Git skills shipped
with these plugins. User and host instructions retain priority. This workflow neither replaces specialist
expertise nor disables existing global hooks.

## Decide which mode applies

Check whether \`${CLI_STATE_DIR}/config.json\` exists in the project root.

- **Present — project mode.** The project was installed with the \`${CLI_BIN}\` CLI. Read
  \`${CLI_STATE_DIR}/config.json\`, \`${CLI_STATE_DIR}/capabilities.json\` and \`${CLI_STATE_DIR}/tools.json\`,
  and resolve originals under \`${CLI_STATE_DIR}/upstream/<source>/\`. The CLI owns the selection; follow
  "Project mode" below.
- **Absent — plugin mode.** Selection comes from which ${PREFIX} plugins are installed. Follow
  "Plugin mode" below. Do not invent a \`${CLI_STATE_DIR}/\` directory and do not run \`${CLI_BIN}\`
  commands; they are not installed in this mode.

Both modes select the same originals and obey the same limits. Only the location of the map and of the
source bundles differs.

## Plugin mode

This plugin root is \`\${CLAUDE_PLUGIN_ROOT}\` when the host sets it; otherwise it is the directory two
levels above this \`SKILL.md\` (\`<plugin root>/skills/${COORDINATOR}/SKILL.md\`). Resolve every relative
path below against that root.

Read \`capabilities.json\` in this plugin root. It lists all ${capabilityCount} capabilities with their
phase, \`requires\` edges, connectors and the base \`entrypoints\` — the original \`SKILL.md\` files that
cover the capability without any technology pack.

Installed technology packs are available plugins, not automatically active project choices. Each carries
its own \`capabilities.json\` and \`upstream/\`. Find their actual roots from the host's available skill
paths; caches can put plugins under separate version directories, so do not guess sibling paths.

Select active packs from the user's task, the current module's manifests, lockfiles and configuration.
For example, if Vue and Svelte are both installed but this module uses Vue, select only Vue. Resolve
heterogeneous monorepo modules separately. If evidence leaves the framework ambiguous, ask for that
choice before applying framework-specific replacements; continue unrelated work in the meantime.

Read selected packs' \`dependencies\`, \`conflicts\` and \`exclusiveGroup\`. Dependencies must also be
installed and active; report missing plugins instead of silently installing them. Reject a conflict or
more than one active pack in an exclusive group. Installing packs for different projects is allowed;
activating incompatible packs in one module is not. \`${CORE}\` alone owns coordination.

Use this plugin's read-only selection helper (Node 18+) to check the selection and obtain original file
paths. Pass this core's actual root, one \`--pack\` per available pack root, and a comma-separated list
of explicitly selected names. For example, substituting the discovered absolute paths:

\`\`\`text
node "<core root>/scripts/resolve-packs.js" --core "<core root>" --pack "<vue root>" --pack "<nuxt root>" --select ${PREFIX}-nuxt
\`\`\`

The helper includes installed dependencies, rejects incompatible selections, applies at most one
replacement per capability, then adds specialists in stable order. Only its \`active\` plugins and
resolved \`capabilities\` apply to this module. Unselected installed packs remain inactive. It neither
installs plugins nor writes project state. If Node is unavailable, apply those same metadata checks
manually and state that automated selection validation was not run. Never interpret a missing helper
or an error as permission to apply every installed pack.

Choose the capabilities relevant to the user's outcome, open the resolved original \`SKILL.md\` files and
the references, examples or helpers they require. Do not substitute a summary for reading the source. If a
relevant technology has no pack installed, say which pack covers it rather than improvising from a
neighbouring framework's guidance.

## Project mode

Choose capabilities relevant to the user's outcome. Their ordered \`entrypoints\` name the active original
upstream \`SKILL.md\` files. Use \`${CLI_BIN} inventory --category CAPABILITY\`, \`--source SOURCE\` or
\`--extension PACK\` to inspect available originals and exact paths without loading every skill body. Add
\`--selected\` to show only the configured project's active subset. Inventory reads catalog metadata;
\`doctor\` separately verifies source bytes. The project's profile and optional extensions select its
active subset; required packs appear in \`resolvedExtensions\`, while config preserves requested choices.

## Select packs from evidence, not from trigger text

Choose framework/provider packs from explicit project choices and evidence such as manifests, lockfiles and
existing configuration. A specialist's broad trigger text is not a reason to add its provider to an
unrelated project. Match runtime and framework versions before using examples. Vue, Nuxt, Svelte, Angular
and native UI selections replace web-React guidance; migrations such as Prisma SQL v7 and MongoDB need
distinct provider paths. Source caveats describe known version, support and license limits. Optional
cross-skill references do not activate a new global workflow; required references must be present and
loaded within the selected task.

Capability \`requires\` edges provide installed coverage and prerequisites; they do not require repeating
discovery for every fix. Work at the task's current phase, reuse existing artifacts and authorization, and
continue useful independent inspection while a configuration change is pending. A session-expiry fix may
use frontend, auth, testing and browser QA without unrelated infrastructure or analytics work.

## Keep one task coordinator and browser backend

Only ${BRAND} is registered as the native workflow. Upstream routers, hooks, installation examples and
agent metadata inside \`upstream/\` are inert source. Do not install or activate their global entrypoints.
Invoke a selected specialist within the current task, then return its findings, changes and evidence here.

When the \`${PREFIX}-browser-playwright\` pack is active for this module, use the Playwright browser-QA entrypoint.
In project mode, follow the browser-QA entrypoints selected by the CLI capability map.
gstack source may remain present for discovery, engineering review or shipping roles; that does not make its
browser QA active. Do not silently build a second browser stack or switch backend because another bundle
happens to be present. If a required behavior is unavailable, report the concrete limitation.

## Resolve original paths without rewriting source

Resolve a relative reference from the directory of the upstream file containing it. Distinguish these roots:

- \`{baseDir}\`, \`\${baseDir}\` or \`\${CLAUDE_SKILL_DIR}\` inside a selected original means the absolute
  directory containing that original \`SKILL.md\`, not this plugin's \`skills/\` directory.
- An upstream repository installation root maps to the absolute \`<plugin root>/upstream/<source>/\` path
  (project mode: \`${CLI_STATE_DIR}/upstream/<source>/\`).
- A plugin-root placeholder inside an original maps to that original's preserved subdirectory within its
  source; it is not automatically the repository or skill root, and it is not this ${BRAND} plugin's root.

For the supply-chain auditor, \`{baseDir}/scripts/collect.py\` resolves to
\`upstream/trailofbits/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor/scripts/collect.py\`;
\`render.py\`, \`model.py\` and \`sources.py\` remain alongside it. Use quoted absolute helper paths when
working directories differ or paths contain spaces. Templates such as \`{baseDir}\` are instructions to
resolve, not literal shell variables to leave unexpanded.

For gstack, map \`~/.claude/skills/gstack\` or \`.claude/skills/gstack\` to the absolute
\`upstream/gstack\` path in this plugin. Use explicit helper paths because upstream discovery does not
search plugin directories. \`GSTACK_HOME\` changes state storage, not executable discovery. Never assume the
host supplied another skill's root variable to this workflow.

Vercel's web guideline document has a pinned local copy at \`upstream/web-guidelines/command.md\`. Use it
for offline work and retrieve current documentation when the task requires freshness.

## Tools are separate from source

Source availability, runtime availability and successful execution are separate things. Read the source
caveats in \`capabilities.json\` before promising a check.

In plugin mode these plugins install **no** runtimes and register **no** tool registry: there is no
\`${CLI_BIN} tools\` command and no \`${CLI_STATE_DIR}/toolchain\`. Use the project's own scripts and the
tools already available in the environment, and name the concrete missing requirement when an original
expects a runtime that is absent. Original third-party instructions to install global packages do not
authorise a global installation; prefer the project's local devDependencies. Do not rewrite source bodies to
change their examples.

In project mode the managed registry exists: \`${CLI_BIN} tools\` lists availability, \`${CLI_BIN} tools
install --only ID,ID\` installs a chosen subset into \`${CLI_STATE_DIR}/toolchain\`, and \`${CLI_BIN} tools
run ID -- ARGUMENTS\` forwards arguments without a shell and preserves exit status. An \`available\` status
or a successful version probe is not a functional test; availability results report
\`functionalTested: false\`.

Original supply-chain collection uses standard-library Python 3.11+. Retain its refusal when sources are
unavailable; do not interpret an unassessable run as clean. Its Windows ownership caveat and the documented
upstream POSIX test assumptions remain visible. Other specialists can require gstack builds, the Impeccable
engine, language libraries, native Expo tooling or live provider services. Report unrun checks and missing
requirements. Never run a setup script merely to register another router or bypass authorization.

## Deliver evidence and limits

Run relevant checks and resolve blocking findings. Distinguish passed, failed and unrun checks; record
actual commands, inputs and results. Successfully reading a skill does not establish working browser
sessions, passing application checks, authenticated cloud access or connected MCP servers.

Connector names in \`capabilities.json\` are desired integrations, not connections. Complete OAuth in the
host and discover actual tools and scope before use. Keep secrets out of configuration and reports.

Respect upstream licensing and notices when sharing source or adaptations. These plugins carry
${skillTotal} original skills from ${sourceCount} pinned Git sources across ${packCount} technology packs;
see \`NOTICE.md\` in each plugin. The library includes MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 material;
${BRAND}'s own MIT terms do not replace upstream licenses. A \`coverage: partial\` capability remains a real
limitation: retirement composes deprecation, data handling and cost guidance rather than a complete
universal decommissioning procedure.
`;
}

/** One native entry skill per technology pack. */
function packSkill(catalog, pack) {
  const capabilityList = pack.capabilities.map(c => c.title.toLowerCase()).join(', ');
  const sourceList = pack.sources.join(', ');

  const description = `Use when this project's work involves ${pack.description.replace(/\.$/, '')} —
    covers ${capabilityList}. Loads the original ${sourceList} skills bundled with this pack.`;

  const sections = pack.capabilities.map(cap => {
    const mode = cap.replace
      ? `Replaces the ${CORE} base for this capability.`
      : `Adds to the ${CORE} base for this capability.`;
    const rows = cap.entrypoints
      .map(e => `- \`${e.skill}\` → \`${e.path}\``)
      .join('\n');
    return `### ${cap.title}\n\n${mode}\n\n${rows}`;
  }).join('\n\n');

  const dependsOn = pack.dependencies.map(d => `\`${d}\``).join(', ');
  const conflicts = pack.conflicts.length
    ? `\nDo not combine with ${pack.conflicts.map(c => `\`${c}\``).join(', ')}; they cover the same capability differently.\n`
    : '';

  return frontmatter(pack.name, description) + `
# ${pack.displayName}

${pack.description}

This is an entry skill. It names originals; it does not restate them. Before opening originals, let
\`${CORE}\` select this pack for the current project's task and validate its dependencies, conflicts
and exclusive group. Installation or a matching trigger alone does not activate a pack. In CLI project
mode follow the existing \`${CLI_STATE_DIR}/config.json\` selection. If this pack is inactive, return to
the coordinator without applying its replacements. Once active, open the listed \`SKILL.md\` files and
the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — \`\${CLAUDE_PLUGIN_ROOT}\` when the host sets it, otherwise
the directory two levels above this \`SKILL.md\`. Inside an original, \`{baseDir}\` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

${sections}

## Coordination

${BRAND}'s \`${COORDINATOR}\` skill in \`${CORE}\` owns capability selection, evidence and limits. Depends
on: ${dependsOn}.${conflicts}
Upstream sources bundled here: ${sourceList}. Their licenses and pinned revisions are recorded in
\`NOTICE.md\` and \`upstream.lock.json\` in this plugin root.
`;
}

// ---------------------------------------------------------------------------
// Per-plugin files
// ---------------------------------------------------------------------------

function noticeFile(catalog, plugin) {
  const blocks = plugin.sources.map(id => {
    const source = catalog.sources.get(id);
    const files = (source.licenseFiles ?? []).map(f => `\`upstream/${id}/${f}\``).join(', ') || '—';
    const caveat = source.caveat ? `\n\n  ${source.caveat}` : '';
    return `## ${id}\n\n- Repository: ${source.repository}\n- Revision: \`${source.revision}\`\n` +
      `- License: ${source.license}\n- License files: ${files}\n- Reviewed: ${source.verifiedAt}${caveat}`;
  }).join('\n\n');

  return `# Third-party notices — ${plugin.name}

Everything under \`upstream/\` is unmodified original source from the repositories below, pinned to the
recorded revision. ${BRAND}'s own files in this plugin are MIT licensed; that does not replace the licenses
below. \`upstream.lock.json\` records a SHA-256 for every bundled file.

${blocks}
`;
}

const MIT_TEXT = `MIT License

Copyright (c) ${new Date().getFullYear()} ${OWNER.name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

/**
 * Plugin-level licence. The MIT text covers the generated files only; the
 * bundled originals under upstream/ keep their own licences, so the scope note
 * goes above the licence body rather than inside it.
 */
const pluginLicense = () =>
  `This licence covers the files ${BRAND} generates in this plugin: the manifests, the entry\n` +
  `skill, capabilities.json, upstream.lock.json and the documentation. Everything under\n` +
  `upstream/ is third-party source under its own licence — see NOTICE.md.\n\n${MIT_TEXT}`;

function claudeManifest(catalog, plugin) {
  const manifest = {
    name: plugin.name,
    version: catalog.version,
    description: plugin.description,
    author: OWNER,
    homepage: REPO_URL,
    repository: REPO_URL,
    license: 'MIT',
    keywords: [PREFIX, 'engineering', ...plugin.capabilities.map(c => c.id)].slice(0, 12),
    skills: './skills',
  };
  if (plugin.dependencies.length) manifest.dependencies = plugin.dependencies;
  return manifest;
}

function codexManifest(catalog, plugin) {
  const prompts = plugin.kind === 'core'
    ? [
        'Plan this change and name the capabilities it touches.',
        'Review this diff against the engineering quality gates.',
        'Prepare a release candidate and a rollback plan.',
      ]
    : [
        `Use the ${plugin.displayName} guidance for this change.`,
        `Review this code against ${plugin.sources.join(' and ')} practice.`,
      ];

  return {
    name: plugin.name,
    version: catalog.version,
    description: plugin.description,
    author: OWNER,
    homepage: REPO_URL,
    repository: REPO_URL,
    license: 'MIT',
    keywords: [PREFIX, 'engineering', ...plugin.capabilities.map(c => c.id)].slice(0, 12),
    skills: './skills/',
    interface: {
      displayName: plugin.displayName,
      shortDescription: plugin.shortDescription,
      longDescription: plugin.kind === 'core'
        ? oneLine(`Coordinates ${catalog.stack.capabilities.length} engineering capabilities and the base
            original skills behind them. Technology packs plug into this core; every ${PREFIX} pack depends
            on it. Originals stay unmodified under upstream/ and are opened on demand.`)
        : oneLine(`${plugin.description} Bundles the original ${plugin.sources.join(', ')} skills
            unmodified and activates them for ${plugin.capabilities.map(c => c.title.toLowerCase()).join(', ')}.
            Requires ${plugin.dependencies.join(', ')}.`),
      developerName: OWNER.name,
      category: CODEX_CATEGORY,
      // Skill-only plugins: they read project files and the bundled originals,
      // and guide edits. Matches how OpenAI's own skill-only plugins declare it.
      capabilities: ['Interactive', 'Read', 'Write'],
      defaultPrompt: prompts.map(p => p.slice(0, 128)).slice(0, 3),
    },
  };
}

function capabilitiesFile(catalog, plugin) {
  return {
    schemaVersion: 1,
    plugin: plugin.name,
    kind: plugin.kind,
    version: catalog.version,
    dependencies: plugin.dependencies,
    ...(plugin.kind === 'pack' ? { extension: plugin.extension, conflicts: plugin.conflicts, exclusiveGroup: plugin.exclusiveGroup } : {}),
    capabilities: plugin.capabilities,
    sources: plugin.sources.map(id => {
      const s = catalog.sources.get(id);
      return {
        id: s.id,
        repository: s.repository,
        revision: s.revision,
        license: s.license,
        verifiedAt: s.verifiedAt,
        caveat: s.caveat ?? null,
      };
    }),
  };
}

function lockSubset(catalog, plugin) {
  return {
    schemaVersion: 1,
    plugin: plugin.name,
    sources: plugin.sources.map(id => {
      const s = catalog.lockBySource.get(id);
      if (!s) throw new Error(`No lock entry for source ${id}`);
      return { ...s, root: `upstream/${id}` };
    }),
  };
}

function pluginReadme(catalog, plugin) {
  const capRows = plugin.capabilities
    .filter(c => c.entrypoints.length)
    .map(c => `| ${c.title} | ${c.replace ? 'replaces base' : plugin.kind === 'core' ? 'base' : 'adds to base'} | ${c.entrypoints.length} |`)
    .join('\n');

  const codexInstall = [...plugin.dependencies, plugin.name]
    .map(n => `codex plugin add ${n}@${MARKETPLACE}`)
    .join('\n');

  const depends = plugin.dependencies.length
    ? oneLine(`**Depends on** ${plugin.dependencies.map(d => `\`${d}\``).join(', ')}. Claude Code installs
        those automatically; Codex does not resolve dependencies, so the Codex commands above install them
        in order.`) + '\n\n'
    : '';

  const bundled = oneLine(`Native skills: 1. Bundled originals: ${plugin.skillCount} from
    ${plugin.sources.length} source ${plugin.sources.length === 1 ? 'repository' : 'repositories'}
    (${plugin.sources.join(', ')}), unmodified under \`upstream/\`. See \`NOTICE.md\` for licenses and
    pinned revisions.`);

  return `# ${plugin.displayName}

${plugin.description}

**Claude Code**

\`\`\`bash
claude plugin install ${plugin.name}@${MARKETPLACE}
\`\`\`

**Codex**

\`\`\`bash
${codexInstall}
\`\`\`

${depends}| Capability | Role | Originals |
| --- | --- | --- |
${capRows}

${bundled}
`;
}

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------

function writePlugin(catalog, plugin, outRoot) {
  const root = path.join(outRoot, 'plugins', plugin.name);
  rmrf(root);
  fs.mkdirSync(root, { recursive: true });

  for (const id of plugin.sources) {
    copyTree(path.join(catalog.root, 'vendor', id), path.join(root, 'upstream', id));
  }

  const skillName = plugin.kind === 'core' ? COORDINATOR : plugin.name;
  const body = plugin.kind === 'core' ? coordinatorSkill(catalog, plugin) : packSkill(catalog, plugin);
  writeText(path.join(root, 'skills', skillName, 'SKILL.md'), body);

  writeJSON(path.join(root, '.claude-plugin', 'plugin.json'), claudeManifest(catalog, plugin));
  writeJSON(path.join(root, '.codex-plugin', 'plugin.json'), codexManifest(catalog, plugin));
  writeJSON(path.join(root, 'capabilities.json'), capabilitiesFile(catalog, plugin));
  writeJSON(path.join(root, 'upstream.lock.json'), lockSubset(catalog, plugin));
  writeText(path.join(root, 'NOTICE.md'), noticeFile(catalog, plugin));
  writeText(path.join(root, 'README.md'), pluginReadme(catalog, plugin));
  writeText(path.join(root, 'LICENSE'), pluginLicense());
  if (plugin.kind === 'core') {
    writeText(path.join(root, 'scripts', 'resolve-packs.js'), fs.readFileSync(path.join(__dirname, 'scripts', 'resolve-packs.js'), 'utf8'));
  }
  return root;
}

function writeMarketplaces(catalog, plugins, outRoot) {
  writeJSON(path.join(outRoot, '.claude-plugin', 'marketplace.json'), {
    name: MARKETPLACE,
    owner: OWNER,
    description: oneLine(`${BRAND} engineering: one coordinator plus ${catalog.stack.extensions.length}
      technology packs carrying ${catalog.skills.size} original skills from ${catalog.sources.size} pinned
      Git sources.`),
    version: catalog.version,
    plugins: plugins.map(p => ({
      name: p.name,
      source: `./plugins/${p.name}`,
      description: p.description,
      version: catalog.version,
      author: OWNER,
      homepage: REPO_URL,
      license: 'MIT',
      category: p.kind === 'core' ? 'workflow' : 'technology',
      keywords: [PREFIX, ...(p.kind === 'pack' ? [p.extension] : ['core'])],
    })),
  });

  writeJSON(path.join(outRoot, '.agents', 'plugins', 'marketplace.json'), {
    name: MARKETPLACE,
    interface: { displayName: `${BRAND} Engineering` },
    plugins: plugins.map(p => ({
      name: p.name,
      source: { source: 'local', path: `./plugins/${p.name}` },
      policy: CODEX_POLICY,
      category: CODEX_CATEGORY,
    })),
  });
}

function rootReadme(catalog, plugins) {
  const packs = plugins.filter(p => p.kind === 'pack');
  const rows = packs
    .map(p => `| \`${p.name}\` | ${p.description} | ${p.sources.join(', ')} |`)
    .join('\n');

  return `# ${BRAND} Engineering

A plugin marketplace for **Claude Code** and **Codex**: one engineering coordinator plus
${packs.length} technology packs, carrying ${catalog.skills.size} original skills from
${catalog.sources.size} pinned Git sources across ${catalog.stack.capabilities.length} capabilities.

Originals are bundled **unmodified** under each plugin's \`upstream/\`. Only the entry skills are native,
so installing a pack exposes the coordinator and that pack's entry; original specialists load on demand.

## Install

### Claude Code

\`\`\`bash
claude plugin marketplace add ${REPO_SLUG}
claude plugin install ${CORE}@${MARKETPLACE}
\`\`\`

Then add the packs the project actually uses. Packs declare \`${CORE}\` as a dependency, so Claude Code
pulls it — and any required sibling pack — in automatically:

\`\`\`bash
claude plugin install ${PREFIX}-vue@${MARKETPLACE}
claude plugin install ${PREFIX}-nuxt@${MARKETPLACE}    # also installs ${PREFIX}-vue and ${CORE}
\`\`\`

### Codex

\`\`\`bash
codex plugin marketplace add ${REPO_SLUG}
codex plugin add ${CORE}@${MARKETPLACE}
\`\`\`

**Codex does not resolve plugin dependencies.** \`codex plugin add\` installs exactly the plugin you name.
Install \`${CORE}\` yourself, plus any pack listed under *Depends on* in the pack's README — without the
coordinator a pack's entry skill has nothing to hand its findings back to:

\`\`\`bash
codex plugin add ${CORE}@${MARKETPLACE}
codex plugin add ${PREFIX}-vue@${MARKETPLACE}
codex plugin add ${PREFIX}-nuxt@${MARKETPLACE}
\`\`\`

## What is in here

| Plugin | Covers | Upstream |
| --- | --- | --- |
| \`${CORE}\` | The coordinator and the base originals for all ${catalog.stack.capabilities.length} capabilities | ${plugins[0].sources.join(', ')} |
${rows}

## Layout

\`\`\`
.claude-plugin/marketplace.json     Claude Code marketplace
.agents/plugins/marketplace.json    Codex marketplace
plugins/<name>/
  .claude-plugin/plugin.json        Claude Code manifest (with dependencies)
  .codex-plugin/plugin.json         Codex manifest
  skills/<name>/SKILL.md            the one native skill
  capabilities.json                 capability -> original entrypoints
  upstream.lock.json                SHA-256 per bundled file
  upstream/<source>/...             unmodified originals
  NOTICE.md                         licenses and pinned revisions
\`\`\`

Both marketplace files point at the same \`plugins/\` directory, so the two hosts install identical bytes.

## Known limits

${catalog.sources.has('xylex') ? 'The three optional XYLEX packs and their ten complete original skills are documented in\n[XYLEX integration](docs/xylex-integration.md), including source provenance, prerequisites and web/native scope.\n' : ''}

- **Codex has no dependency resolution.** See the install section — install \`${CORE}\` and any required
  pack explicitly.
- **Windows path length.** The deepest bundled original is ~192 characters below the repository root.
  Clone or install under a short path, and enable long paths if a checkout fails:
  \`git config --global core.longpaths true\`.
- **These plugins install no runtimes.** They carry source, not a toolchain. An original that expects
  Playwright, uv, Terraform or a provider CLI will say so; the coordinator reports the missing requirement
  rather than installing it. The \`${CLI_BIN}\` npm CLI is what provides a managed toolchain.
- **Installed is not active.** The coordinator selects packs for the current project/module, checks
  dependencies, conflicts and exclusive groups, and leaves other installed frameworks inactive. Its
  bundled Node helper validates selection without installing anything or writing project state.
- **Bundled originals are pinned snapshots.** \`upstream.lock.json\` records the commit and a SHA-256 per
  file. They do not track their upstream repositories; regenerate from an updated catalog to move them.

## Regenerating

\`\`\`bash
node build-marketplace.js --catalog <path-to-l11-engineering-stack> --out .
\`\`\`

The generator is the source of truth: \`plugins/\`, both marketplace files and this table are derived from
the catalog. Edit the catalog, \`build-marketplace.js\` or the canonical helper under \`scripts/\`, never
the generated tree. \`PLUGIN_VERSION\` versions this marketplace independently of the upstream catalog.

## Validation

Node 18+ and Python 3.11+ are required for the checks:

\`\`\`bash
python -m pip install -r requirements-test.txt
python -m unittest discover -s tests -v
\`\`\`

Tests parse every native YAML header, check both marketplaces and original hashes, exercise the generator
with small standalone catalogs, and test project selection with incompatible installed frameworks.
GitHub Actions runs these checks on Windows and Linux. Original upstream scripts are not executed by
these checks. Native interactive discovery and real provider/tool execution remain separate checks.

## Licensing

${BRAND}'s own files are MIT. Bundled originals keep their own licenses — MIT, Apache-2.0, CC-BY-SA-4.0 and
MPL-2.0 — recorded per plugin in \`NOTICE.md\` with repository and pinned revision.
`;
}

// ---------------------------------------------------------------------------
// Verification
// ---------------------------------------------------------------------------

function verify(catalog, plugins, outRoot) {
  const problems = [];
  let checked = 0;
  const execBits = [];

  for (const plugin of plugins) {
    const root = path.join(outRoot, 'plugins', plugin.name);

    for (const id of plugin.sources) {
      const lock = catalog.lockBySource.get(id);
      for (const entry of lock.files) {
        const file = path.join(root, 'upstream', id, entry.path);
        if (!fs.existsSync(file)) { problems.push(`missing ${plugin.name}/upstream/${id}/${entry.path}`); continue; }
        const actual = sha256(file);
        if (actual !== entry.sha256) problems.push(`hash mismatch ${plugin.name}/upstream/${id}/${entry.path}`);
        if (entry.mode & 0o111) execBits.push(`plugins/${plugin.name}/upstream/${id}/${entry.path}`);
        checked++;
      }
    }

    // Every entrypoint the manifests promise must exist.
    for (const cap of plugin.capabilities) {
      for (const e of cap.entrypoints) {
        if (!fs.existsSync(path.join(root, e.path))) problems.push(`missing entrypoint ${plugin.name}/${e.path}`);
      }
    }

    // Declared dependencies must resolve inside this marketplace.
    const names = new Set(plugins.map(p => p.name));
    for (const dep of plugin.dependencies) {
      if (!names.has(dep)) problems.push(`${plugin.name} depends on unknown plugin ${dep}`);
    }
  }

  return { problems, checked, execBits };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.catalog) {
    console.error('usage: node build-marketplace.js --catalog <path-to-l11-engineering-stack> [--out <repo-root>]');
    process.exit(2);
  }
  const catalogRoot = path.resolve(String(args.catalog));
  const outRoot = path.resolve(String(args.out ?? process.cwd()));

  const catalog = loadCatalog(catalogRoot);
  const plugins = describeAll(catalog);
  const xylexDoc = catalog.sources.has('xylex')
    ? fs.readFileSync(path.join(catalogRoot, 'docs/xylex-integration.md'), 'utf8') : null;

  rmrf(path.join(outRoot, 'plugins'));
  for (const plugin of plugins) {
    writePlugin(catalog, plugin, outRoot);
    process.stdout.write(`  ${plugin.name.padEnd(34)} ${String(plugin.skillCount).padStart(3)} originals  ${plugin.sources.join(', ')}\n`);
  }

  writeMarketplaces(catalog, plugins, outRoot);
  writeText(path.join(outRoot, 'README.md'), rootReadme(catalog, plugins));
  if (xylexDoc !== null) writeText(path.join(outRoot, 'docs/xylex-integration.md'), xylexDoc);
  // Pure MIT text at the root so GitHub's licence detection picks it up; the
  // per-plugin copies carry the scope note about upstream/.
  writeText(path.join(outRoot, 'LICENSE'), MIT_TEXT);

  const { problems, checked, execBits } = verify(catalog, plugins, outRoot);
  fs.writeFileSync(path.join(outRoot, '.exec-bits'), execBits.join('\n') + '\n');

  console.log(`\n${plugins.length} plugins written to ${path.join(outRoot, 'plugins')}`);
  console.log(`${checked} bundled files verified against upstream.lock.json`);
  console.log(`${execBits.length} files need the git executable bit (see .exec-bits)`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):`);
    for (const p of problems.slice(0, 40)) console.error(`  ${p}`);
    process.exit(1);
  }
  console.log('OK');
}

main();
