# Engineering disciplines and direction — Finem 0.7

The native marketplace presents **ten engineering disciplines plus one Core**. Each name describes the work and each plugin declares its purpose, expected deliverables and capability scope. UI/UX, infrastructure and security have dedicated entries. All 43 capabilities, 180 selected original skills, 50 pinned sources and 56 internal technology options remain available.

## Responsibility

| Plugin | Direction |
| --- | --- |
| Core | Coordinate the task and resolve the shared original skill library |
| Product & Planning | Discover the problem, define requirements, assess feasibility, plan work and learn from product feedback |
| Architecture & API Design | Define system boundaries, domain rules, ADRs and API contracts |
| UI/UX & Design System | Design flows, visual language, tokens, interactions and accessible interfaces |
| Frontend & Mobile | Implement web and native interfaces using the project's actual framework |
| Backend & Data | Implement services, databases, migrations and asynchronous processing |
| Infrastructure & DevOps | Provision infrastructure, networking and environments; manage CI, releases, deployment, rollback and costs |
| Security & Privacy | Implement auth, IAM and secret handling; assess security and privacy requirements |
| Testing & Quality | Verify behavior, browser flows, performance and code quality |
| Observability & Reliability | Define telemetry, SLOs and resilience; diagnose incidents and record postmortems |
| Maintenance & Documentation | Maintain dependencies, manage deprecation and retirement, and keep documentation and runbooks useful |

The reviewed assignment lives in `catalog/plugin-areas.json`. Each capability has one area owner. Original lifecycle tags such as `design` and `verify` stay in capability metadata; an area can contribute at several moments in the lifecycle. Cross-cutting skills are referenced by the relevant capability mappings, while the Core-backed original source bodies remain shared. UI Plugins additionally carries a deliberate standalone XYLEX bundle.

Core retains the complete 2,651-file original library. The ten area plugins define direction and provide scoped entrypoints. They return work and evidence to the single coordinator. No skill body, source pin, license, reference file or executable mode changes in this release. Core includes sources for unused frameworks; the coordinator loads originals on demand. The existing L11 CLI provides selective project installation.

## Selection contract

Native `capabilities.json` uses schema version 3. Core has `kind: core`, `layout: areas`, an `areaPlugins` ownership registry, `legacyPhases`, `technologyOptions`, the unchanged capability registry and source provenance. An area has `kind: area`, `area`, `title`, `purpose`, `deliverables`, `dependencies` (empty for standalone UI; `[finem-core]` for other areas), its capabilities and related option IDs.

Every original entrypoint has `plugin: finem-core`; its relative path resolves against the actual installed Core root. UI Plugins also exposes nine original local skills, with a separate ui-source.lock.json and MIT license. Its install dependencies are empty; the Core-backed route still requires Core and the helper prerequisites. Do not infer sibling paths in host caches.

The read-only helper accepts `--area PATH` for available plugin roots, `--select finem-AREA,...` for task scopes and `--extensions ID,...` for framework/provider choices. It expands exact capability prerequisites, reports a missing area, rejects version or capability drift, resolves option dependencies and conflicts, and applies replacements before additions. An unselected area contributes only a specifically required capability. No selection activates no capabilities.

For example, selecting Frontend & Mobile with `nuxt` loads frontend guidance and the API-contract, requirements and discovery prerequisites. It does not broaden the task into database, infrastructure or security implementation. Selecting UI/UX with `xylex-ui-polish` adds the applicable design-system specialist; frontend-only mappings remain outside that scope. The agent can select both UI/UX and Frontend for a task spanning both.

Each area entry lists expected outputs so the agent understands the task direction before choosing original specialists. Existing artifacts and project instructions remain authoritative; completing a small fix does not require generating every possible output.

## Migration

1. Preserve existing `.l11/config.json` profiles and extension IDs. CLI package/catalog 0.5.0 remains compatible and unchanged.
2. Update native Core and install the new area plugins together. Their native version is 0.7.0. The README lists the full-stack installation commands.
3. Use [plugin-migration.json](plugin-migration.json) to map the 56 former technology entries and seven 0.6 phase entries to their new areas. Disable the superseded native entries in the host after installing their replacements, then start a fresh agent session.

Old technology IDs such as `finem-nuxt` remain aliases for `--extensions nuxt`. Old phase selectors such as `--select finem-build` also remain accepted: they select the old phase's exact capability list and its prerequisites through the new area plugins. They do not select every capability in all replacement areas. `--phase PATH` remains an alias for `--area PATH`, but the supplied paths must point to the current area plugins. Old plugin folders and mixed versions are rejected.

The migration map lists directly affected areas. Capability prerequisites can require additional areas, which the helper reports. Generation changes only the output repository; it does not alter installed plugin caches, connect accounts or install runtime dependencies.

## Verification

Tests cover distinct UI/UX, infrastructure and security ownership; useful direction metadata; narrow frontend and UI selections; every internal option; source integrity; legacy scope preservation; dependency and conflict handling; both native marketplaces and regeneration. Runtime availability, interactive host discovery and live provider execution require separate checks. Original limitations, including partial retirement guidance and the XYLEX Windows metrics caveat, remain documented.

## Standalone UI (0.8.0)

UI Plugins exposes nine complete XYLEX specialists plus one Finem entry skill. It can perform local UI work without Core; the optional Core route retains the 180-skill shared library and original capability prerequisites. Four previously shared UI originals intentionally also ship locally, and five additional UI skills are now available. The library therefore has 185 distinct selected original skills across both bundles, not 189. No other area becomes standalone. Agentation is task opt-in and web motion guidance is not a native-mobile animation implementation.
