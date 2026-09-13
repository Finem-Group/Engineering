# Third-party notices — finem-observability-reliability

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## addy

- Repository: https://github.com/addyosmani/agent-skills
- Revision: `6ca0cd7db39b41b1c37e26d335c507ee92382c6d`
- License: MIT
- License files: `upstream/addy/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## apollo

- Repository: https://github.com/apollographql/skills
- Revision: `c288eb80629dd2309eed81f23d693f66a452d043`
- License: MIT
- License files: `upstream/apollo/LICENSE`
- Reviewed: 2026-09-11

  Schema/operation portable specialists with refs plus Apollo Server 5-specific resolvers/context/plugins/security/performance references. GraphQL schema/operations work with any GraphQL implementation. Apollo Server 5 requires Node >=20; observed @apollo/server5.5.1. Only Apollo Server module is Apollo-runtime-specific; do not force federation/router. Preserve intentional nullability and established API contracts over blanket [Type!]! preference. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Nine complete handbook chapters: ownership, linting, errors, testing, performance, type-state, pointers and documentation. Existing Rust toolchain/Cargo; check MSRV before copying newer lint attributes. General Rust specialist, not an Axum framework guide. Run supported feature combinations; all-features can be invalid for a given crate. Project error policy prevails over blanket no expect/unwrap advice. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## grafana

- Repository: https://github.com/grafana/skills
- Revision: `51d33e71e191b409bbd25fc7be2684c610d18166`
- License: Apache-2.0
- License files: `upstream/grafana/LICENSE`
- Reviewed: 2026-09-11

  Original complete OTel guidance and k6 references/examples/SETUP. k6 executable, protocol services and optional xk6 extensions are separate runtime requirements. Upstream docs CLI uses POSIX script; use documented web fallback on Windows. External example targets/cloud runs are not executed during bundling. Official Grafana product-maintained original skill repository; reused existing verified baseline pin. SLO examples reference recording rules not all defined in snippet; not a complete deployable rule file. No real alerts, contact points or paging were created. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## inngest

- Repository: https://github.com/inngest/inngest-skills
- Revision: `ff42436bcedfb262d6a377571ce64a0d78d386a5`
- License: Apache-2.0
- License files: `upstream/inngest/LICENSE`
- Reviewed: 2026-09-11

  Five deep entries (~200-500 lines each); repo eval/runner and prompt catalog present. TypeScript-specific; installed inngest major (observed4.20.0) and local Dev Server for runtime tests, credentials for Cloud. 24-hour event dedupe is not an unlimited business once-only guarantee. Select one durable job platform per project rather than activating all provider alternatives. Read installed major-specific API/migration docs; tests not executed here. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Shared skills/references/expressions.md is required and included. Preserve the upstream step-execution.md checkpointing link defect as a documented navigation caveat; the actual checkpointing.md file is present. Setup/CLI instructions using global installs, latest, or INNGEST_DEV=1 must be interpreted through the project-local pinned runtime and local-only development settings. Current observed SDK 4.20.0 requires Node >=20 despite source setup saying Node 18+.

## superpowers

- Repository: https://github.com/obra/superpowers
- Revision: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- License: MIT
- License files: `upstream/superpowers/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## trigger

- Repository: https://github.com/triggerdotdev/trigger.dev
- Revision: `33cf5701b4536012d45e365761c4a36067ea5f1d`
- License: MIT AND Apache-2.0
- License files: `upstream/trigger/packages/trigger-sdk/LICENSE`, `upstream/trigger/packages/cli-v3/LICENSE`, `upstream/trigger/LICENSE`
- Reviewed: 2026-09-11

  SDK full authoring skill; setup skill; CLI authoring entry is thin pointer and should not replace full SDK source. Matching SDK/build/CLI observed4.5.16 Node>=18.20; local SDK bundled docs preferred; cloud project or self-hosted infrastructure for executions. Mirror triggerdotdev/skills lacks LICENSE; canonical package-level MIT license verified. Full skill sources frontmatter references monorepo docs/*.mdx: preserve those source docs if promising offline completeness. No deploy/login/project provisioning without task scope; no raw secrets in task logs. Never Promise.all SDK waits; inspect Result.ok; runtime idempotency scopes vary by version. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Package skill directories are MIT under their respective package LICENSE files; repository docs are Apache-2.0 under root LICENSE. Both terms and notices are retained. Use the full SDK authoring skill, not the thin CLI pointer. Source {{TRIGGER_SDK_VERSION}} placeholders remain unchanged; choose a tested project SDK/CLI/build combination. Secrets go only in local environment/secret stores, never chat.

## upstash

- Repository: https://github.com/upstash/skills
- Revision: `dccc0521a637fcc18395c41992703337bea6baef`
- License: MIT
- License files: `upstream/upstash/LICENSE`
- Reviewed: 2026-09-11

  Redis substantial data structures/patterns/performance references; QStash/Workflow/search smaller entrypoints backed by extensive local docs. HTTP Redis with credentials; QStash local server possible; SDK/runtime-specific. Do not substitute REST Redis for BullMQ TCP requirement. No temporary start-redis POST without explicit resource scope. Unsafe basic lock release unconditional DEL precedes safer token/Lua pattern; correctness-critical lock fixture mandatory. Upstash Search is distinct from Redis FT.SEARCH, ordinary Redis and vector database. Provider-agnostic Redis work should use installed client and official Redis docs. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## wshobson

- Repository: https://github.com/wshobson/agents
- Revision: `a30778f8c4e6b0a87567941b7cca4f534bf642b6`
- License: MIT
- License files: `upstream/wshobson/LICENSE`
- Reviewed: 2026-09-11

  Original specialist directories with substantive references/examples. Framework/cloud examples must be adapted to the actual project. Retirement is composed partial coverage, not a complete decommissioning runbook. Established specialist skill collection; content and complete templates/scripts inspected; not Kubernetes vendor ownership. CNI must implement NetworkPolicy; YAML validity does not prove enforcement. Account/cluster operations require separately authorized credentials. Upstream examples include curl-to-sudo bootstrap, auto-prune, sync --force; never auto-run during installation. Git reversal alone does not prove data rollback. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
