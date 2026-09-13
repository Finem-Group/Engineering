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
 *   finem-core          coordinator + one complete shared original library
 *   finem-<area>       one scoped entry skill + capability/option references
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
const { groupByArea, migrationMap } = require('./scripts/area-layout.js');
const { attachStandalone } = require('./scripts/standalone-areas.js');

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
const PLUGIN_VERSION = '0.9.1';
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
    return { skill: id, source, plugin: CORE, path: `upstream/${source}/${rel}` };
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
  const core = describeCore(catalog);
  const options = catalog.stack.extensions.map(e => describePack(catalog, e));
  core.sources = resolveSources(catalog, catalog.sources.keys());
  core.skillCount = catalog.skills.size;
  const definitions = readJSON(path.join(__dirname, 'catalog/plugin-areas.json'));
  if (definitions.schemaVersion !== 1) throw new Error('Unsupported engineering area catalog');
  return attachStandalone(groupByArea(core, options, definitions.areas, catalog.stack.phases), ids => resolveSources(catalog, ids));
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
- **Absent — plugin mode.** Select relevant installed areas and the module's technology options. Follow
  "Plugin mode" below. Do not invent a \`${CLI_STATE_DIR}/\` directory and do not run \`${CLI_BIN}\`
  commands; they are not installed in this mode.

Both modes select the same originals and obey the same limits. Only the location of the map and of the
source bundles differs.

## Plugin mode

This plugin root is \`\${CLAUDE_PLUGIN_ROOT}\` when the host sets it; otherwise it is the directory two
levels above this \`SKILL.md\` (\`<plugin root>/skills/${COORDINATOR}/SKILL.md\`). Resolve every relative
path below against that root.

The read-only helper below loads \`capabilities.json\` in this plugin root. It contains the base registry,
\`areaPlugins\` and \`technologyOptions\`. Inspect the selected helper result and relevant area metadata
to keep task context compact. Every original lives here under \`upstream/\`, once, and opens on demand.

Find the installed area plugin roots from the host's available skill paths. Each area has one scoped
entry skill and capability map. Never guess sibling paths: host caches use separate version directories.
Select areas relevant to the current task and technology options from the module's manifests, lockfiles,
existing project choices and user instructions. Keep different monorepo modules' selections separate.

Run the read-only helper (Node 18+) with this core's actual root, one \`--area\` for each available area
root, \`--select\` for the requested area plugin names and optional \`--extensions\` for technology IDs:

\`\`\`text
node "<core root>/scripts/resolve-packs.js" --core "<core root>" --area "<product root>" --area "<architecture root>" --area "<frontend root>" --select ${PREFIX}-frontend-mobile --extensions nuxt
\`\`\`

The helper resolves capability prerequisites across installed areas, rejects missing areas or mixed
plugin versions, then validates technology dependencies, conflicts and exclusive groups. Nuxt includes
Vue as an internal option; neither is a separate native plugin. Replacements run before additions.
Select the module's actual framework and provider options before opening specialist guidance. With no area selection,
no capability is active. Extra installed areas stay inactive unless a capability prerequisite needs them.

Only the result's \`active\` area plugins, \`extensions\` and resolved \`capabilities\` apply. A prerequisite
adds the required capability, not every task in its area. Reuse existing artifacts; a small fix does not
require repeating discovery or running the entire lifecycle. Open the resolved original \`SKILL.md\` and
its references when relevant; never substitute a short wrapper for its body.

Report missing area plugins instead of silently installing them. If a framework choice is ambiguous,
ask for that choice while continuing unrelated work. If Node is unavailable, apply the same metadata
checks manually and say the helper was not run. A helper error must never activate everything.
These plugins do not create project configuration or install framework/provider runtimes.

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
discovery for every fix. Work at the task's current lifecycle phase, reuse existing artifacts and authorization, and
continue useful independent inspection while a configuration change is pending. A session-expiry fix may
use frontend, auth, testing and browser QA without unrelated infrastructure or analytics work.

## Keep one task coordinator and browser backend

Only ${BRAND} is registered as the native workflow. Upstream routers, hooks, installation examples and
agent metadata inside \`upstream/\` are inert source. Do not install or activate their global entrypoints.
Invoke a selected specialist within the current task, then return its findings, changes and evidence here.

When the \`browser-playwright\` internal option is active for this module, use the Playwright browser-QA entrypoint.
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
${skillTotal} original skills from ${sourceCount} pinned Git sources with ${packCount} internal technology options;
see \`NOTICE.md\` in each plugin. The library includes MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 material;
${BRAND}'s own MIT terms do not replace upstream licenses. A \`coverage: partial\` capability remains a real
limitation: retirement composes deprecation, data handling and cost guidance rather than a complete
universal decommissioning procedure.
`;
}

/** Area entrypoints carry scope; the shared core owns routing and source bodies. */
function areaSkill(catalog, area) {
  if (area.area === 'ui-ux') return fs.readFileSync(path.join(__dirname, 'catalog', 'ui-entry.md'), 'utf8');
  return frontmatter(area.name, `Use for ${area.title}. Includes local original specialists and framework guidance; works independently.`) + `
# ${area.displayName}

${area.purpose}

${area.deliverables.map(item => `- ${item}`).join('\n')}

## Work directly from this plugin

Open standalone.json at this plugin root (two directories above this SKILL.md). Its capability entrypoints resolve against this plugin root. Read the relevant original SKILL.md and its supporting files before working. All mapped source files are bundled locally; no other Finem plugin is required.

Inspect the project and choose only the relevant baseline capabilities and framework options. The options in standalone.json list descriptions, dependencies, conflicts, exclusive groups and original entrypoints. Resolve option dependencies locally, reject conflicting options for the same module, and preserve project .l11/config.json choices. Do not activate every option or install runtimes merely because the plugin is installed. Capability prerequisite names indicate needed project context, not required plugin installations: reuse existing requirements and contracts, or ask only for information essential to the task.

Read original helper paths relative to the original skill directory. Treat upstream files as scoped specialist guidance, not a replacement global router. Follow the user request and project instructions; avoid restarting finished planning or stacking competing workflows. Complete the task, run relevant checks and report actual evidence and limitations.

Do not recommend installing Core or describe missing Core as a limitation. Use Core coordination only when the user explicitly requests the cross-discipline workflow and it is available. The separate capabilities.json preserves that optional legacy coordinator mapping; standalone work uses standalone.json.
`;
}

// ---------------------------------------------------------------------------
// Per-plugin files
// ---------------------------------------------------------------------------

function noticeFile(catalog, plugin) {
  if (plugin.kind === 'area' && !plugin.standalone) {
    return `# Third-party notices — ${plugin.name}\n\nOriginals referenced by this area are stored in the shared \`${CORE}\` plugin.\nIts \`NOTICE.md\` and \`upstream.lock.json\` record the original licenses, source revisions and hashes.\nThis area's own entrypoint and metadata are MIT licensed.\n`;
  }
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

function pluginDetails(catalog, plugin) {
  if (plugin.area === 'ui-ux') return fs.readFileSync(path.join(__dirname, 'catalog', 'ui-description.txt'), 'utf8').trim();
  if (plugin.kind === 'area') return [plugin.description, `Covers: ${plugin.capabilities.map(c => c.title).join(', ')}.`, `Expected outputs: ${plugin.deliverables.join('; ')}.`, `Original specialists: ${[...new Set(plugin.standalone.capabilities.flatMap(c => c.entrypoints.map(e => e.skill)))].join(', ')}.`, `Local framework and specialist options: ${plugin.standalone.options.map(o => o.extension).join(', ') || 'baseline guidance'}. Choose only options relevant to the project.`, 'Works independently. All mapped original skills, supporting source files, licenses and hashes are bundled locally. Core is not required. The app entry skill loads the relevant originals on demand. External services and runtime dependencies are configured separately.'].join('\n\n');
  const unique = values => [...new Set(values)];
  const skills = unique(plugin.capabilities.flatMap(cap => cap.entrypoints.map(entry => entry.skill)));
  const connectors = unique(plugin.capabilities.flatMap(cap => cap.connectors || []));
  const paragraphs = [plugin.description];
  if (plugin.kind === 'core') {
    paragraphs.push(`Shared library: ${catalog.skills.size} original skills from ${catalog.sources.size} pinned upstream sources, covering ${catalog.stack.capabilities.length} engineering capabilities. Sources include ${[...catalog.sources.keys()].join(', ')}.`);
    paragraphs.push('The Core coordinates capability selection, dependencies and specialist guidance across the engineering plugins. Original upstream files and their source revisions are recorded in the bundled lockfile.');
  } else {
    paragraphs.push(`Covers: ${plugin.capabilities.map(cap => cap.title).join(', ')}.`);
    paragraphs.push(`Expected outputs: ${plugin.deliverables.join('; ')}.`);
    paragraphs.push(`Original skills used through Engineering Core: ${skills.join(', ')}.`);
    if (plugin.options.length) paragraphs.push(`Optional specialist and framework packs: ${plugin.options.join(', ')}. These are selected for the project when relevant; they are not all enabled by default.`);
  }
  if (connectors.length) paragraphs.push(`Declared integrations: ${connectors.join(', ')}. These are integration recipes, not connected services; configure the corresponding tools and accounts separately.`);
  paragraphs.push('Why the app shows one skill: this plugin exposes one entry skill which loads the relevant original specialists from Engineering Core on demand. The Skills count in the app is not the size of the shared upstream library.');
  if (plugin.kind !== 'core') paragraphs.push('Works independently: relevant original skills and option sources are bundled locally with licenses and pinned hashes. No Core installation is required.');
  return paragraphs.join('\n\n');
}

function codexManifest(catalog, plugin) {
  const prompts = plugin.kind === 'core'
    ? [
        'Plan this change and name the capabilities it touches.',
        'Review this diff against the engineering quality gates.',
        'Prepare a release candidate and a rollback plan.',
      ]
    : [
        `Inspect this project for ${plugin.title} and recommend the relevant original skills and framework packs.`,
        `Review ${plugin.title} in this project and prioritize concrete improvements with verification steps.`,
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
      longDescription: pluginDetails(catalog, plugin),
      websiteURL: REPO_URL,
      developerName: OWNER.name,
      brandColor: '#111111',
      composerIcon: './assets/logo.png',
      logo: './assets/logo.png',
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
    schemaVersion: 3,
    plugin: plugin.name,
    kind: plugin.kind,
    version: catalog.version,
    dependencies: plugin.dependencies,
    ...(plugin.kind === 'core'
      ? { layout: 'areas', areaPlugins: plugin.areaPlugins, legacyPhases: plugin.legacyPhases, technologyOptions: plugin.technologyOptions }
      : { area: plugin.area, title: plugin.title, purpose: plugin.purpose, deliverables: plugin.deliverables, options: plugin.options }),
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
    .map(c => `| ${c.title} | ${plugin.kind === 'core' ? 'shared library' : 'area baseline'} | ${c.entrypoints.length} |`)
    .join('\n');

  const codexInstall = [...plugin.dependencies, plugin.name]
    .map(n => `codex plugin add ${n}@${MARKETPLACE}`)
    .join('\n');

  const depends = plugin.dependencies.length
    ? oneLine(`**Depends on** ${plugin.dependencies.map(d => `\`${d}\``).join(', ')}. Claude Code installs
        those automatically; Codex does not resolve dependencies, so the Codex commands above install them
        in order.`) + '\n\n'
    : '';

  const bundled = plugin.kind === 'area'
    ? `Native area entries: 1. Original bodies live in the shared \`${CORE}\` dependency; this plugin contains no copied originals. Internal options: ${plugin.options.map(id => `\`${id}\``).join(', ') || 'none'}.`
    : oneLine(`Native skills: 1. Bundled originals: ${plugin.skillCount} from
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
  copyTree(path.join(__dirname, 'assets', 'branding'), path.join(root, 'assets'));

  for (const id of plugin.sources) {
    copyTree(path.join(catalog.root, 'vendor', id), path.join(root, 'upstream', id));
  }

  const skillName = plugin.kind === 'core' ? COORDINATOR : plugin.name;
  const body = plugin.kind === 'core' ? coordinatorSkill(catalog, plugin) : areaSkill(catalog, plugin);
  writeText(path.join(root, 'skills', skillName, 'SKILL.md'), body);

  writeJSON(path.join(root, '.claude-plugin', 'plugin.json'), claudeManifest(catalog, plugin));
  writeJSON(path.join(root, '.codex-plugin', 'plugin.json'), codexManifest(catalog, plugin));
  writeJSON(path.join(root, 'capabilities.json'), capabilitiesFile(catalog, plugin));
  if (plugin.standalone) writeJSON(path.join(root, 'standalone.json'), plugin.standalone);
  writeJSON(path.join(root, 'upstream.lock.json'), lockSubset(catalog, plugin));
  writeText(path.join(root, 'NOTICE.md'), noticeFile(catalog, plugin));
  writeText(path.join(root, 'README.md'), plugin.kind === 'area' ? '# ' + plugin.displayName + '\n\n' + pluginDetails(catalog, plugin) : pluginReadme(catalog, plugin));
  writeText(path.join(root, 'LICENSE'), pluginLicense());
  if (plugin.area === 'ui-ux') {
    writeText(path.join(root, 'references', 'official-ui-sources.md'), fs.readFileSync(path.join(__dirname, 'catalog', 'official-ui-sources.md'), 'utf8'));
    copyTree(path.join(__dirname, 'vendor', 'ui-specialists'), root);
    for (const record of readJSON(path.join(root, 'ui-source.lock.json')).files) {
      if (sha256(path.join(root, record.path)) !== record.sha256) throw new Error(`UI source hash mismatch: ${record.path}`);
    }
    writeText(path.join(root, 'NOTICE.md'), noticeFile(catalog, plugin) + '\n\nOriginal UI specialists are bundled under skills/ from XYLEX Group (MIT). See ui-source.lock.json for the Git revision and SHA-256 hashes, and licenses/XYLEX-LICENSE.txt for the original license. Finem entrypoint and metadata are MIT licensed. Core-backed capability mappings are optional and keep their separate upstream notices.');
    writeText(path.join(root, 'README.md'), '# UI Plugins\n\n' + pluginDetails(catalog, plugin));
  }
  if (plugin.kind === 'core') {
    writeText(path.join(root, 'scripts', 'resolve-packs.js'), fs.readFileSync(path.join(__dirname, 'scripts', 'resolve-packs.js'), 'utf8'));
  }
  return root;
}

function writeMarketplaces(catalog, plugins, outRoot) {
  writeJSON(path.join(outRoot, '.claude-plugin', 'marketplace.json'), {
    name: MARKETPLACE,
    owner: OWNER,
    description: oneLine(`${BRAND} engineering: one coordinator plus ${plugins.length - 1}
      engineering disciplines sharing ${catalog.skills.size} original skills from ${catalog.sources.size} pinned
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
      category: 'workflow',
      keywords: [PREFIX, p.area ?? 'core'],
    })),
  });

  writeJSON(path.join(outRoot, '.agents', 'plugins', 'marketplace.json'), {
    name: MARKETPLACE,
    interface: { displayName: 'FINEM Group' },
    plugins: plugins.map(p => ({
      name: p.name,
      source: { source: 'local', path: `./plugins/${p.name}` },
      policy: CODEX_POLICY,
      category: CODEX_CATEGORY,
    })),
  });
}

function rootReadme(catalog, plugins) {
  const areas = plugins.filter(plugin => plugin.kind === 'area');
  const rows = areas.map(area => `| **${area.title}** (\`${area.name}\`) | ${area.capabilities.map(cap => cap.title).join(', ')} |`).join('\n');
  const installs = host => plugins.map(plugin => `${host === 'claude' ? 'claude plugin install' : 'codex plugin add'} ${plugin.name}@${MARKETPLACE}`).join('\n');
  return `# ${BRAND} Engineering

**${plugins.length} native plugins: one Core + ${areas.length} engineering disciplines.**
${catalog.stack.capabilities.length} capabilities, ${catalog.skills.size} complete selected original skills,
${catalog.sources.size} pinned Git sources and ${catalog.stack.extensions.length} internal technology options.

Version ${catalog.version} makes every engineering area independent. Each bundles its mapped original sources, support files, licenses and hashes locally. Core is optional for an explicitly requested cross-discipline workflow. Source duplication between installable packages is intentional to avoid installation dependencies.

## Engineering plugins

| Plugin | Scope |
| --- | --- |
| \`${CORE}\` | One workflow, shared original library, technology selection and compatibility checks |
${rows}

UI/UX owns flows, design systems and accessibility. Frontend & Mobile implements interfaces; Backend &
Data implements services and persistence. Infrastructure & DevOps owns CI, releases, deployments, rollback
and costs. Security & Privacy owns auth, IAM, security review and privacy. Each plugin includes its purpose
and expected deliverables. Original lifecycle tags remain in the capability metadata. Existing evidence
can satisfy prerequisites without repeating completed work.

## Install the full stack

### Claude Code

\`\`\`sh
claude plugin marketplace add ${REPO_SLUG}
${installs('claude')}
\`\`\`

### Codex

\`\`\`sh
codex plugin marketplace add ${REPO_SLUG}
${installs('codex')}
\`\`\`

For local validation, add the path to this checkout as the marketplace instead of the GitHub repository.
Install only the area you need. No area requires Core. UI Plugins also exposes nine original XYLEX skills directly; its additional local specialists use standalone.json. The full-stack commands above are a convenience for installing everything.

## Selection and layout

\`\`\`text
plugins/finem-core/
  skills/finem-engineering/SKILL.md   single coordinator
  capabilities.json                 area registry + internal technology options
  scripts/resolve-packs.js           read-only selection and validation
  upstream.lock.json                 all source pins, hashes and original file modes
  upstream/<source>/...              complete selected originals, stored once
plugins/finem-<area>/
  skills/finem-<area>/SKILL.md       scoped area entry
  standalone.json                   local capabilities and framework options
  upstream/                         locally bundled original sources
  capabilities.json                 optional legacy Core coordination mapping
.claude-plugin/marketplace.json      Claude Code; same plugin files
.agents/plugins/marketplace.json     Codex; same plugin files
\`\`\`

For normal work, the area entry reads standalone.json and opens its local original skills. No helper or separate plugin is needed. For an explicitly requested Core workflow only, use actual host-discovered plugin paths:

\`\`\`text
node "<core>/scripts/resolve-packs.js" --core "<core>" --area "<product>" --area "<architecture>" --area "<frontend>" --select finem-frontend-mobile --extensions nuxt,xylex-ui-polish
\`\`\`

The helper expands capability prerequisites, validates matching plugin versions and resolves required
internal options. It rejects conflicts and competing replacements before returning guidance. All resolved
original paths point to the shared Core library. No selection means no active capabilities.

The existing \`l11\` CLI remains compatible: \`--profile fullstack\` and \`--extensions nuxt,...\` still use
the same internal IDs. The CLI package version and the native marketplace version are independent.
An existing \`.l11/config.json\` remains authoritative in project mode.

## Migration and limits

See [migration and architecture](docs/area-plugins.md) and the complete
[old-plugin to area mapping](docs/plugin-migration.json). Old option names such as \`finem-nuxt\` are
accepted by \`--extensions\` as aliases. Old plugin folders are not area roots: upgrade Core and install
the new areas together, then disable the old technology plugin entries in the host. No local installed
plugin cache is changed by building this repository.

The seven 0.6 phase selectors remain supported with their exact capability scope. For example,
\`--select finem-build\` resolves the former Build capabilities through the new area plugins.
\`--phase PATH\` remains an alias for \`--area PATH\`; paths must point to the current area plugins.

${catalog.sources.has('xylex') ? 'All ten XYLEX originals remain available through internal options; see [provenance and prerequisites](docs/xylex-integration.md). Their mappings attach to Architecture, UI/UX, Frontend, Testing & Quality and Maintenance & Documentation.\n' : ''}
The plugins carry guidance and original helper sources; they do not install runtimes or connect MCP
accounts. Real browser/provider execution depends on the project environment. Known upstream limitations,
including partial retirement coverage and the XYLEX Windows metrics caveat, remain in source notices.
Use a short checkout path on Windows when original support paths exceed host path limits.

## Regenerate and verify

Node 18+ and Python 3.11+:

\`\`\`sh
node build-marketplace.js --catalog <path-to-l11-engineering-stack> --out .
python -m pip install -r requirements-test.txt
python -m unittest discover -s tests -v
\`\`\`

Edit the catalog, generator or canonical helpers; generated plugin files are derived artifacts. Tests
cover area ownership, complete original bytes, shared-library paths, prerequisites, framework conflicts,
selection order and migration aliases. GitHub Actions runs on Windows/Linux and Node 22/24.

## Licensing

Finem's own files are MIT. Originals retain their MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 licenses,
recorded in \`${CORE}/NOTICE.md\` and \`upstream.lock.json\`.
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
        const ownerRoot = path.join(outRoot, 'plugins', e.plugin ?? plugin.name);
        if (!fs.existsSync(path.join(ownerRoot, e.path))) problems.push(`missing entrypoint ${plugin.name}/${e.path}`);
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
  const areaDoc = fs.readFileSync(path.join(__dirname, 'docs/area-plugins.md'), 'utf8');
  const xylexDoc = catalog.sources.has('xylex')
    ? fs.readFileSync(path.join(catalogRoot, 'docs/xylex-integration.md'), 'utf8').replace(
      /## Native Finem plugin mode[\s\S]*?(?=## Scope and prerequisites)/,
      '## Native Finem plugin mode\n\nSince Finem 0.7, these three IDs are internal technology options, not separate native plugins. Install the area plugins and select the desired options through the core coordinator. Architecture belongs to Architecture & API Design; UI polish to UI/UX and Frontend; code audit to Architecture, Testing & Quality and Maintenance & Documentation.\n\nThe complete 66-file XYLEX bundle lives once in `finem-core/upstream/xylex/`. Area entrypoints reference that shared library. Original bytes, supporting references and selection conflicts are unchanged. Native mode needs no `.l11/` or L11 CLI. See [area architecture and migration](area-plugins.md).\n\n') : null;

  rmrf(path.join(outRoot, 'plugins'));
  for (const plugin of plugins) {
    writePlugin(catalog, plugin, outRoot);
    process.stdout.write(`  ${plugin.name.padEnd(34)} ${String(plugin.skillCount).padStart(3)} originals  ${plugin.sources.join(', ')}\n`);
  }

  writeMarketplaces(catalog, plugins, outRoot);
  writeJSON(path.join(outRoot, 'docs/plugin-migration.json'), migrationMap(plugins[0]));
  writeText(path.join(outRoot, 'docs/area-plugins.md'), areaDoc);
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
