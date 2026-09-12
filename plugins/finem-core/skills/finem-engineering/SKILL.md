---
name: finem-engineering
description: "Use when coordinating engineering work in this project: selecting which original upstream skill to follow for discovery, architecture, frontend, backend, data, infrastructure, testing, security, release or operations work, and resolving its original file paths and tools."
---

# Finem engineering workflow

Finem coordinates the task. Implementation guidance comes from the actual original Git skills shipped
with these plugins. User and host instructions retain priority. This workflow neither replaces specialist
expertise nor disables existing global hooks.

## Decide which mode applies

Check whether `.l11/config.json` exists in the project root.

- **Present — project mode.** The project was installed with the `l11` CLI. Read
  `.l11/config.json`, `.l11/capabilities.json` and `.l11/tools.json`,
  and resolve originals under `.l11/upstream/<source>/`. The CLI owns the selection; follow
  "Project mode" below.
- **Absent — plugin mode.** Select relevant installed areas and the module's technology options. Follow
  "Plugin mode" below. Do not invent a `.l11/` directory and do not run `l11`
  commands; they are not installed in this mode.

Both modes select the same originals and obey the same limits. Only the location of the map and of the
source bundles differs.

## Plugin mode

This plugin root is `${CLAUDE_PLUGIN_ROOT}` when the host sets it; otherwise it is the directory two
levels above this `SKILL.md` (`<plugin root>/skills/finem-engineering/SKILL.md`). Resolve every relative
path below against that root.

The read-only helper below loads `capabilities.json` in this plugin root. It contains the base registry,
`areaPlugins` and `technologyOptions`. Inspect the selected helper result and relevant area metadata
to keep task context compact. Every original lives here under `upstream/`, once, and opens on demand.

Find the installed area plugin roots from the host's available skill paths. Each area has one scoped
entry skill and capability map. Never guess sibling paths: host caches use separate version directories.
Select areas relevant to the current task and technology options from the module's manifests, lockfiles,
existing project choices and user instructions. Keep different monorepo modules' selections separate.

Run the read-only helper (Node 18+) with this core's actual root, one `--area` for each available area
root, `--select` for the requested area plugin names and optional `--extensions` for technology IDs:

```text
node "<core root>/scripts/resolve-packs.js" --core "<core root>" --area "<product root>" --area "<architecture root>" --area "<frontend root>" --select finem-frontend-mobile --extensions nuxt
```

The helper resolves capability prerequisites across installed areas, rejects missing areas or mixed
plugin versions, then validates technology dependencies, conflicts and exclusive groups. Nuxt includes
Vue as an internal option; neither is a separate native plugin. Replacements run before additions.
Select the module's actual framework and provider options before opening specialist guidance. With no area selection,
no capability is active. Extra installed areas stay inactive unless a capability prerequisite needs them.

Only the result's `active` area plugins, `extensions` and resolved `capabilities` apply. A prerequisite
adds the required capability, not every task in its area. Reuse existing artifacts; a small fix does not
require repeating discovery or running the entire lifecycle. Open the resolved original `SKILL.md` and
its references when relevant; never substitute a short wrapper for its body.

Report missing area plugins instead of silently installing them. If a framework choice is ambiguous,
ask for that choice while continuing unrelated work. If Node is unavailable, apply the same metadata
checks manually and say the helper was not run. A helper error must never activate everything.
These plugins do not create project configuration or install framework/provider runtimes.

## Project mode

Choose capabilities relevant to the user's outcome. Their ordered `entrypoints` name the active original
upstream `SKILL.md` files. Use `l11 inventory --category CAPABILITY`, `--source SOURCE` or
`--extension PACK` to inspect available originals and exact paths without loading every skill body. Add
`--selected` to show only the configured project's active subset. Inventory reads catalog metadata;
`doctor` separately verifies source bytes. The project's profile and optional extensions select its
active subset; required packs appear in `resolvedExtensions`, while config preserves requested choices.

## Select packs from evidence, not from trigger text

Choose framework/provider packs from explicit project choices and evidence such as manifests, lockfiles and
existing configuration. A specialist's broad trigger text is not a reason to add its provider to an
unrelated project. Match runtime and framework versions before using examples. Vue, Nuxt, Svelte, Angular
and native UI selections replace web-React guidance; migrations such as Prisma SQL v7 and MongoDB need
distinct provider paths. Source caveats describe known version, support and license limits. Optional
cross-skill references do not activate a new global workflow; required references must be present and
loaded within the selected task.

Capability `requires` edges provide installed coverage and prerequisites; they do not require repeating
discovery for every fix. Work at the task's current lifecycle phase, reuse existing artifacts and authorization, and
continue useful independent inspection while a configuration change is pending. A session-expiry fix may
use frontend, auth, testing and browser QA without unrelated infrastructure or analytics work.

## Keep one task coordinator and browser backend

Only Finem is registered as the native workflow. Upstream routers, hooks, installation examples and
agent metadata inside `upstream/` are inert source. Do not install or activate their global entrypoints.
Invoke a selected specialist within the current task, then return its findings, changes and evidence here.

When the `browser-playwright` internal option is active for this module, use the Playwright browser-QA entrypoint.
In project mode, follow the browser-QA entrypoints selected by the CLI capability map.
gstack source may remain present for discovery, engineering review or shipping roles; that does not make its
browser QA active. Do not silently build a second browser stack or switch backend because another bundle
happens to be present. If a required behavior is unavailable, report the concrete limitation.

## Resolve original paths without rewriting source

Resolve a relative reference from the directory of the upstream file containing it. Distinguish these roots:

- `{baseDir}`, `${baseDir}` or `${CLAUDE_SKILL_DIR}` inside a selected original means the absolute
  directory containing that original `SKILL.md`, not this plugin's `skills/` directory.
- An upstream repository installation root maps to the absolute `<plugin root>/upstream/<source>/` path
  (project mode: `.l11/upstream/<source>/`).
- A plugin-root placeholder inside an original maps to that original's preserved subdirectory within its
  source; it is not automatically the repository or skill root, and it is not this Finem plugin's root.

For the supply-chain auditor, `{baseDir}/scripts/collect.py` resolves to
`upstream/trailofbits/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor/scripts/collect.py`;
`render.py`, `model.py` and `sources.py` remain alongside it. Use quoted absolute helper paths when
working directories differ or paths contain spaces. Templates such as `{baseDir}` are instructions to
resolve, not literal shell variables to leave unexpanded.

For gstack, map `~/.claude/skills/gstack` or `.claude/skills/gstack` to the absolute
`upstream/gstack` path in this plugin. Use explicit helper paths because upstream discovery does not
search plugin directories. `GSTACK_HOME` changes state storage, not executable discovery. Never assume the
host supplied another skill's root variable to this workflow.

Vercel's web guideline document has a pinned local copy at `upstream/web-guidelines/command.md`. Use it
for offline work and retrieve current documentation when the task requires freshness.

## Tools are separate from source

Source availability, runtime availability and successful execution are separate things. Read the source
caveats in `capabilities.json` before promising a check.

In plugin mode these plugins install **no** runtimes and register **no** tool registry: there is no
`l11 tools` command and no `.l11/toolchain`. Use the project's own scripts and the
tools already available in the environment, and name the concrete missing requirement when an original
expects a runtime that is absent. Original third-party instructions to install global packages do not
authorise a global installation; prefer the project's local devDependencies. Do not rewrite source bodies to
change their examples.

In project mode the managed registry exists: `l11 tools` lists availability, `l11 tools
install --only ID,ID` installs a chosen subset into `.l11/toolchain`, and `l11 tools
run ID -- ARGUMENTS` forwards arguments without a shell and preserves exit status. An `available` status
or a successful version probe is not a functional test; availability results report
`functionalTested: false`.

Original supply-chain collection uses standard-library Python 3.11+. Retain its refusal when sources are
unavailable; do not interpret an unassessable run as clean. Its Windows ownership caveat and the documented
upstream POSIX test assumptions remain visible. Other specialists can require gstack builds, the Impeccable
engine, language libraries, native Expo tooling or live provider services. Report unrun checks and missing
requirements. Never run a setup script merely to register another router or bypass authorization.

## Deliver evidence and limits

Run relevant checks and resolve blocking findings. Distinguish passed, failed and unrun checks; record
actual commands, inputs and results. Successfully reading a skill does not establish working browser
sessions, passing application checks, authenticated cloud access or connected MCP servers.

Connector names in `capabilities.json` are desired integrations, not connections. Complete OAuth in the
host and discover actual tools and scope before use. Keep secrets out of configuration and reports.

Respect upstream licensing and notices when sharing source or adaptations. These plugins carry
180 original skills from 50 pinned Git sources with 56 internal technology options;
see `NOTICE.md` in each plugin. The library includes MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 material;
Finem's own MIT terms do not replace upstream licenses. A `coverage: partial` capability remains a real
limitation: retirement composes deprecation, data handling and cost guidance rather than a complete
universal decommissioning procedure.
