# Finem Engineering

**11 native plugins: one Core + 10 engineering disciplines.**
43 capabilities, 180 complete selected original skills,
50 pinned Git sources and 56 internal technology options.

Version 0.7.1 gives UI/UX, infrastructure, security and the other engineering disciplines
their own clear scope and expected outcomes. Every original source body is stored **once** in
`finem-core/upstream/`, with its references, helpers, license, pinned revision and file hashes. Area plugins
provide scoped entrypoints and metadata. They use the same single coordinator.

## Engineering plugins

| Plugin | Scope |
| --- | --- |
| `finem-core` | One workflow, shared original library, technology selection and compatibility checks |
| **Product & Planning** (`finem-product-planning`) | Product discovery, Requirements, Feasibility, Planning/task decomposition, Product analytics/feedback |
| **Architecture & API Design** (`finem-architecture`) | Architecture, ADRs, Domain modeling, API contracts |
| **UI/UX & Design System** (`finem-ui-ux`) | UX, Design system, Accessibility |
| **Frontend & Mobile** (`finem-frontend-mobile`) | Frontend |
| **Backend & Data** (`finem-backend-data`) | Backend, Database, Migrations, Async/jobs/events |
| **Infrastructure & DevOps** (`finem-infrastructure-devops`) | Infrastructure, Networking, CI, Release, Deployment, Rollback, Cost/FinOps, Configuration/environments |
| **Security & Privacy** (`finem-security-privacy`) | Auth, Secrets/IAM, Security, Privacy/compliance |
| **Testing & Quality** (`finem-testing-quality`) | Testing, Browser QA, Performance, Code review/quality gates |
| **Observability & Reliability** (`finem-observability-reliability`) | Observability, SLOs, Incident response, Postmortem, Reliability/resilience |
| **Maintenance & Documentation** (`finem-maintenance-documentation`) | Maintenance, Dependencies, Migration/deprecation, Retirement, Documentation/runbooks |

UI/UX owns flows, design systems and accessibility. Frontend & Mobile implements interfaces; Backend &
Data implements services and persistence. Infrastructure & DevOps owns CI, releases, deployments, rollback
and costs. Security & Privacy owns auth, IAM, security review and privacy. Each plugin includes its purpose
and expected deliverables. Original lifecycle tags remain in the capability metadata. Existing evidence
can satisfy prerequisites without repeating completed work.

## Install the full stack

### Claude Code

```sh
claude plugin marketplace add Finem-Group/Engineering
claude plugin install finem-core@finem
claude plugin install finem-product-planning@finem
claude plugin install finem-architecture@finem
claude plugin install finem-ui-ux@finem
claude plugin install finem-frontend-mobile@finem
claude plugin install finem-backend-data@finem
claude plugin install finem-infrastructure-devops@finem
claude plugin install finem-security-privacy@finem
claude plugin install finem-testing-quality@finem
claude plugin install finem-observability-reliability@finem
claude plugin install finem-maintenance-documentation@finem
```

### Codex

```sh
codex plugin marketplace add Finem-Group/Engineering
codex plugin add finem-core@finem
codex plugin add finem-product-planning@finem
codex plugin add finem-architecture@finem
codex plugin add finem-ui-ux@finem
codex plugin add finem-frontend-mobile@finem
codex plugin add finem-backend-data@finem
codex plugin add finem-infrastructure-devops@finem
codex plugin add finem-security-privacy@finem
codex plugin add finem-testing-quality@finem
codex plugin add finem-observability-reliability@finem
codex plugin add finem-maintenance-documentation@finem
```

For local validation, add the path to this checkout as the marketplace instead of the GitHub repository.
Claude declares the Core dependency for every area. Codex requires Core to be installed explicitly.
The full-stack commands install all areas; the coordinator only activates those relevant to the task.
For a subset, install Core plus the required areas. Capability prerequisites may require another area:
Frontend & Mobile uses Architecture & API Design and Product & Planning; a missing area is reported by the selection helper.

## Selection and layout

```text
plugins/finem-core/
  skills/finem-engineering/SKILL.md   single coordinator
  capabilities.json                 area registry + internal technology options
  scripts/resolve-packs.js           read-only selection and validation
  upstream.lock.json                 all source pins, hashes and original file modes
  upstream/<source>/...              complete selected originals, stored once
plugins/finem-<area>/
  skills/finem-<area>/SKILL.md       scoped area entry
  capabilities.json                 area capabilities + related option IDs
.claude-plugin/marketplace.json      Claude Code; same plugin files
.agents/plugins/marketplace.json     Codex; same plugin files
```

Use actual host-discovered plugin paths rather than guessing cache siblings:

```text
node "<core>/scripts/resolve-packs.js" --core "<core>" --area "<product>" --area "<architecture>" --area "<frontend>" --select finem-frontend-mobile --extensions nuxt,xylex-ui-polish
```

The helper expands capability prerequisites, validates matching plugin versions and resolves required
internal options. It rejects conflicts and competing replacements before returning guidance. All resolved
original paths point to the shared Core library. No selection means no active capabilities.

The existing `l11` CLI remains compatible: `--profile fullstack` and `--extensions nuxt,...` still use
the same internal IDs. The CLI package version and the native marketplace version are independent.
An existing `.l11/config.json` remains authoritative in project mode.

## Migration and limits

See [migration and architecture](docs/area-plugins.md) and the complete
[old-plugin to area mapping](docs/plugin-migration.json). Old option names such as `finem-nuxt` are
accepted by `--extensions` as aliases. Old plugin folders are not area roots: upgrade Core and install
the new areas together, then disable the old technology plugin entries in the host. No local installed
plugin cache is changed by building this repository.

The seven 0.6 phase selectors remain supported with their exact capability scope. For example,
`--select finem-build` resolves the former Build capabilities through the new area plugins.
`--phase PATH` remains an alias for `--area PATH`; paths must point to the current area plugins.

All ten XYLEX originals remain available through internal options; see [provenance and prerequisites](docs/xylex-integration.md). Their mappings attach to Architecture, UI/UX, Frontend, Testing & Quality and Maintenance & Documentation.

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
cover area ownership, complete original bytes, shared-library paths, prerequisites, framework conflicts,
selection order and migration aliases. GitHub Actions runs on Windows/Linux and Node 22/24.

## Licensing

Finem's own files are MIT. Originals retain their MIT, Apache-2.0, CC-BY-SA-4.0 and MPL-2.0 licenses,
recorded in `finem-core/NOTICE.md` and `upstream.lock.json`.
