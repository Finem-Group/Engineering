# Engineering phases and migration — Finem 0.6

The marketplace groups the existing seven catalog phases into seven scoped plugins, plus one shared Core. This replaces 57 native installation entries with 8. All 43 capabilities, 180 selected original skills, 50 source pins and 56 technology choices remain available.

## Ownership

| Native plugin | Responsibility |
| --- | --- |
| `finem-core` | One coordinator, original library, phase and technology selection |
| `finem-context` | Problem discovery, requirements, feasibility, task planning |
| `finem-design` | Architecture, ADRs, domain, UX, design system, API contracts, resilience, privacy |
| `finem-build` | Frontend/mobile, backend, auth, database, migrations, jobs, infrastructure, networking, IAM, configuration |
| `finem-verify` | CI, tests, browser QA, accessibility, security, performance, code review |
| `finem-deliver` | Release, deployment, rollback |
| `finem-operate` | Observability, SLOs, incidents, postmortems, FinOps |
| `finem-evolve` | Maintenance, dependencies, deprecation, retirement, documentation, product feedback |

These are task scopes, not seven competing orchestrators or a mandatory sequence of work. Existing project evidence satisfies earlier prerequisites. Small fixes can stay small.

The complete original library resides in Core under `upstream/`. The former 3,522 bundled file copies become **2,651 unique original/support files**, saving 871 duplicate copies. No original skill body, referenced support file, source revision, hash, license or original mode is rewritten. This also means Core contains all sources even for a frontend-only installation; source availability is separate from activation. The CLI remains the selective installation route when reducing local source footprint matters more than native phase navigation.

The 56 former extension IDs remain internal options. Build includes multiple technology families, but selection remains per project/module. Options can contribute to several phases: Vue affects Build and Verify, while XYLEX audits affect Design, Verify and Evolve. An option is defined once, and its mappings attach to the relevant phase capabilities.

## Metadata contract

Native `capabilities.json` uses schema version 2. Both host manifests keep their existing native formats.

- Core has `kind: core`, `layout: phases`, `phasePlugins`, `technologyOptions`, the baseline `capabilities` registry and source provenance.
- Each phase has `kind: phase`, a `phase` ID, `dependencies: [finem-core]`, its baseline `capabilities`, and related option IDs in `options`.
- Every entrypoint carries `plugin: finem-core`. Its relative `path` resolves against the actual Core root, not against the phase folder or a guessed sibling cache path.
- `upstream.lock.json` in Core records every bundled original. Phase locks contain no source copies.
- Core and all supplied phases must have identical plugin versions. The resolver also rejects phase capability drift and duplicate phase roots.

The generator derives phase ownership from `catalog/stack.json`; no second phase assignment list is maintained. The catalog's original capability and technology dependency graphs remain authoritative.

## Selection

The Node helper is read-only. `--phase PATH` declares an available phase root; `--select finem-build,...` selects work scopes. `--extensions nuxt,...` selects internal technology options. No selection yields only Core and no active capabilities.

The helper includes the selected phases' capabilities, expands only their required capability edges, and reports missing phase plugins. It does not install them or activate every capability in a prerequisite phase. Next it resolves option dependencies, rejects conflicts/exclusive groups, applies replacements before additions, and filters the option mappings to the included capabilities. An option for another phase does not broaden the selected scope.

The result includes `active` native plugins, resolved internal `extensions`, and capability entrypoints with absolute library paths. An entry supplied by an option additionally records `extension`; `plugin` always names the actual source owner, Core. Installing all phases makes the lifecycle available; it does not activate all frameworks.

## Migrating from 0.5

1. Preserve `.l11/config.json` and its profile/extension choices. Existing CLI projects keep using that selection; no configuration migration is needed.
2. Update the native marketplace and Core to 0.6, then install the phase plugins shown in the README. Fullstack uses all eight entries. For a subset, use the helper's missing-capability phase messages to include prerequisites.
3. Use the [complete migration map](plugin-migration.json) to translate old technology plugin names into internal option IDs and their directly affected phases. The map lists affected phases; capability prerequisites can require additional phases.
4. Disable the former technology plugin entries in the host once the new Core and phases are available. Start a fresh agent session so old entry skills do not compete with the new phase entries.

For example, `finem-nuxt` becomes internal option `nuxt`; Vue is included automatically. `--extensions` also accepts old names such as `finem-nuxt`. Old plugin directories are not valid `--phase` roots and are rejected. A mixed 0.5/0.6 installation is not silently combined.

The generator updates only its output repository. It does not uninstall plugins, rewrite the user's plugin cache, connect providers or change framework dependencies. Upstream workflows and hooks remain inert source files, opened as specialists through the single coordinator when selected.

## Verification scope

Tests exercise both marketplaces, phase ownership, source integrity, every internal option individually, shared original paths, dependency closure, incompatibilities, ordering, migration aliases and mixed-version errors. These checks validate packaging and selection; interactive host discovery and execution of every upstream tool require separate sessions/environments.
