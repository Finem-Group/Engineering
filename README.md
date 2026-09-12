# Finem Engineering

**8 native plugins: one Core + 7 lifecycle phases.**
43 capabilities, 180 complete selected original skills,
50 pinned Git sources and 56 internal technology options.

Version 0.6.0 groups the previous technology plugins by their existing engineering phases.
The number follows the lifecycle; it is not a target. Every original source body is stored **once** in
`finem-core/upstream/`, with its references, helpers, license, pinned revision and file hashes. Phase plugins
provide scoped entrypoints and metadata. They use the same single coordinator.

## Phase plugins

| Plugin | Scope |
| --- | --- |
| `finem-core` | One workflow, shared original library, technology selection and compatibility checks |
| `finem-context` | Product discovery, Requirements, Feasibility, Planning/task decomposition |
| `finem-design` | Architecture, ADRs, Domain modeling, UX, Design system, API contracts, Reliability/resilience, Privacy/compliance |
| `finem-build` | Frontend, Backend, Auth, Database, Migrations, Async/jobs/events, Infrastructure, Networking, Secrets/IAM, Configuration/environments |
| `finem-verify` | CI, Testing, Browser QA, Accessibility, Security, Performance, Code review/quality gates |
| `finem-deliver` | Release, Deployment, Rollback |
| `finem-operate` | Observability, SLOs, Incident response, Postmortem, Cost/FinOps |
| `finem-evolve` | Maintenance, Dependencies, Migration/deprecation, Retirement, Documentation/runbooks, Product analytics/feedback |

Build keeps frontend/mobile, backend/data and platform choices separate internally. A Vue project selects
Vue/Nuxt guidance; installing Build does not activate all frameworks or providers. The phases scope the
work; they do not impose a waterfall process. Existing discovery, architecture and test evidence can be reused.

## Install the full stack

### Claude Code

```sh
claude plugin marketplace add Finem-Group/Engineering
claude plugin install finem-core@finem
claude plugin install finem-context@finem
claude plugin install finem-design@finem
claude plugin install finem-build@finem
claude plugin install finem-verify@finem
claude plugin install finem-deliver@finem
claude plugin install finem-operate@finem
claude plugin install finem-evolve@finem
```

### Codex

```sh
codex plugin marketplace add Finem-Group/Engineering
codex plugin add finem-core@finem
codex plugin add finem-context@finem
codex plugin add finem-design@finem
codex plugin add finem-build@finem
codex plugin add finem-verify@finem
codex plugin add finem-deliver@finem
codex plugin add finem-operate@finem
codex plugin add finem-evolve@finem
```

For local validation, add the path to this checkout as the marketplace instead of the GitHub repository.
Claude declares the Core dependency for every phase. Codex requires Core to be installed explicitly.
The full-stack commands install all phases; the coordinator only activates those relevant to the task.
For a subset, install Core plus the required phases. Capability prerequisites may require another phase:
Build uses Design and Context; a missing phase is reported by the selection helper.

## Selection and layout

```text
plugins/finem-core/
  skills/finem-engineering/SKILL.md   single coordinator
  capabilities.json                 phase registry + internal technology options
  scripts/resolve-packs.js           read-only selection and validation
  upstream.lock.json                 all source pins, hashes and original file modes
  upstream/<source>/...              complete selected originals, stored once
plugins/finem-<phase>/
  skills/finem-<phase>/SKILL.md       scoped phase entry
  capabilities.json                 phase capabilities + related option IDs
.claude-plugin/marketplace.json      Claude Code; same plugin files
.agents/plugins/marketplace.json     Codex; same plugin files
```

Use actual host-discovered plugin paths rather than guessing cache siblings:

```text
node "<core>/scripts/resolve-packs.js" --core "<core>" --phase "<context>" --phase "<design>" --phase "<build>" --select finem-build --extensions nuxt,xylex-ui-polish
```

The helper expands capability prerequisites, validates matching plugin versions and resolves required
internal options. It rejects conflicts and competing replacements before returning guidance. All resolved
original paths point to the shared Core library. No selection means no active capabilities.

The existing `l11` CLI remains compatible: `--profile fullstack` and `--extensions nuxt,...` still use
the same internal IDs. The CLI package version and the native marketplace version are independent.
An existing `.l11/config.json` remains authoritative in project mode.

## Migration and limits

See [migration and architecture](docs/phase-plugins.md) and the complete
[old-plugin to phase mapping](docs/plugin-migration.json). Old option names such as `finem-nuxt` are
accepted by `--extensions` as aliases. Old plugin folders are not phase roots: upgrade Core and install
the new phases together, then disable the old technology plugin entries in the host. No local installed
plugin cache is changed by building this repository.

All ten XYLEX originals remain available through internal options; see [provenance and prerequisites](docs/xylex-integration.md). The old three native XYLEX entries are now covered by Design, Build, Verify and Evolve according to their capability mappings.

The plugins carry guidance and original helper sources; they do not install runtimes or connect MCP
accounts. Real browser/provider execution depends on the project environment. Known upstream limitations,
including partial retirement coverage and the XYLEX Windows metrics caveat, remain in source notices.
Use a short checkout path on Windows when original support paths exceed host path limits.

## Regenerate and verify

Node 18+ and Python 3.11+:

```sh
node build-marketplace.js --catalog <path-to-l11-engineering-stack> --out .
python -m pip install -r requirements-test.txt
python -m unittest discover -s tests -v
```

Edit the catalog, generator or canonical helpers; generated plugin files are derived artifacts. Tests
cover phase ownership, complete original bytes, shared-library paths, prerequisites, framework conflicts,
selection order and migration aliases. GitHub Actions runs on Windows/Linux and Node 22/24.

## Licensing

Finem's own files are MIT. Originals retain their MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 licenses,
recorded in `finem-core/NOTICE.md` and `upstream.lock.json`.
