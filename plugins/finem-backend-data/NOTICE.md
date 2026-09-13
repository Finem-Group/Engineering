# Third-party notices — finem-backend-data

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

## algolia

- Repository: https://github.com/algolia/skills
- Revision: `ded7ff387b1099edc6218e002a7d5fda13390d26`
- License: MIT
- License files: `upstream/algolia/LICENSE`
- Reviewed: 2026-09-11

  Full indexing contract/record-grain modeling, relevance settings, secured filter and evidence QA guides, local references and eval cases. Offline design needs sample records; live Algolia account/CLI/MCP only when relevant operations are authorized. Companion CLI/MCP/UI references are optional external capabilities; do not imply they are bundled/running. No default account provisioning, crawling or writes; selected guides explicitly delegate those operations. Do not activate for ordinary SQL domain modeling or non-Algolia search. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## apollo

- Repository: https://github.com/apollographql/skills
- Revision: `c288eb80629dd2309eed81f23d693f66a452d043`
- License: MIT
- License files: `upstream/apollo/LICENSE`
- Reviewed: 2026-09-11

  Schema/operation portable specialists with refs plus Apollo Server 5-specific resolvers/context/plugins/security/performance references. GraphQL schema/operations work with any GraphQL implementation. Apollo Server 5 requires Node >=20; observed @apollo/server5.5.1. Only Apollo Server module is Apollo-runtime-specific; do not force federation/router. Preserve intentional nullability and established API contracts over blanket [Type!]! preference. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Nine complete handbook chapters: ownership, linting, errors, testing, performance, type-state, pointers and documentation. Existing Rust toolchain/Cargo; check MSRV before copying newer lint attributes. General Rust specialist, not an Axum framework guide. Run supported feature combinations; all-features can be invalid for a given crate. Project error policy prevails over blanket no expect/unwrap advice. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## cloudflare

- Repository: https://github.com/cloudflare/skills
- Revision: `b052c32bab7dd493513260228a36c88294f343f1`
- License: Apache-2.0
- License files: `upstream/cloudflare/LICENSE`
- Reviewed: 2026-09-11

  Original complete selected Workers, Wrangler and Durable Objects skills and references. Project-local Wrangler and matching compatibility settings are required; deploy/resource operations require separately authorized Cloudflare credentials. No cloud setup or global routers run during bundling.

## django

- Repository: https://github.com/wsvincent/django-skills
- Revision: `9a8420d96174f53a8d14e696e30a59927ac70fa0`
- License: MIT
- License files: `upstream/django/LICENSE`
- Reviewed: 2026-09-11

  Substantive 300+ line guide plus ORM, async, views, templates, testing, deployment, admin and checklist references. New project guidance Django 6.x/Python 3.12+; preserve installed version/LTS. Background Tasks require a real production backend. Claims several 6.1 APIs: gate on actual project version; registry Django 6.1.1 observed. Generic service-layer and always-custom-user conventions should respect existing projects. Reference prose contains test examples, no standalone executable eval suite found. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## fastapi

- Repository: https://github.com/fastapi/fastapi
- Revision: `50113da16fec53b66b80d75e80a89296de4fa5a5`
- License: MIT
- License files: `upstream/fastapi/LICENSE`
- Reviewed: 2026-09-11

  321-line skill plus six focused references covering DI, Pydantic, routers, responses, frontend assets and streaming. Python >=3.10 for observed FastAPI 0.141.1; project environment and HTTPX/TestClient. Current skill uses newer app.frontend and fastapi.sse APIs; version-gate before use. SQLModel/Asyncer preferences must not trigger a migration of an existing SQLAlchemy/AnyIO app. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## fastify

- Repository: https://github.com/mcollina/skills
- Revision: `856efd268ae85482d882f3d0bed869fd020b5c06`
- License: MIT
- License files: `upstream/fastify/LICENSE`
- Reviewed: 2026-09-11

  Entry plus 19 detailed rules including schema, serialization, DI/plugins, hooks, auth, inject tests and deployment. Project Fastify 5; Node and installed TypeScript strategy. Type stripping advice depends on actual Node support. Description includes generic REST/backend triggers; L11 must require Fastify project evidence. Auth recipes include illustrative unimplemented validateCredentials; not complete identity provider. Tests in rules are examples, not a passed runtime suite. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## hono

- Repository: https://github.com/honojs/skills
- Revision: `f916476e71029ebf62160c3286550a99f0b6c687`
- License: MIT
- License files: `upstream/hono/LICENSE`
- Reviewed: 2026-09-11

  601-line full API skill: middleware, validation, streaming, RPC, app.request, CLI workflow. Project runtime Hono 4; optional Node >=22.13 CLI; Workers testing needs project Wrangler/workerd. CLI instructions use @hono/cli@next; registry latest 0.1.11 differs from next 0.2.0-next.7. Basic auth sample only checks header presence; never interpret as complete authentication. Use existing runtime adapter and do not choose Workers automatically. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## inngest

- Repository: https://github.com/inngest/inngest-skills
- Revision: `ff42436bcedfb262d6a377571ce64a0d78d386a5`
- License: Apache-2.0
- License files: `upstream/inngest/LICENSE`
- Reviewed: 2026-09-11

  Five deep entries (~200-500 lines each); repo eval/runner and prompt catalog present. TypeScript-specific; installed inngest major (observed4.20.0) and local Dev Server for runtime tests, credentials for Cloud. 24-hour event dedupe is not an unlimited business once-only guarantee. Select one durable job platform per project rather than activating all provider alternatives. Read installed major-specific API/migration docs; tests not executed here. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Shared skills/references/expressions.md is required and included. Preserve the upstream step-execution.md checkpointing link defect as a documented navigation caveat; the actual checkpointing.md file is present. Setup/CLI instructions using global installs, latest, or INNGEST_DEV=1 must be interpreted through the project-local pinned runtime and local-only development settings. Current observed SDK 4.20.0 requires Node >=20 despite source setup saying Node 18+.

## neon

- Repository: https://github.com/neondatabase/agent-skills
- Revision: `2e0da3a1653bcdd227565ac14bb3e9e453a8b854`
- License: MIT
- License files: `upstream/neon/LICENSE`
- Reviewed: 2026-09-11

  Parent overview plus detailed Postgres, branching, object-storage routes; diagnostics, pooled/direct connections, provider-specific limitations. Neon account/selected project for remote calls; source inspection and branch plan work offline. HTTP/WS/pg differ by runtime. Parent neon required by postgres and siblings; retain dependency explicitly. Provider must not replace ORM choice; ignore blanket always-pair-with-ORM when project uses SQL. No automatic claimable resources or production branch cloning containing PII. Many refs are live docs; source portability does not equal offline API documentation. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## prisma

- Repository: https://github.com/prisma/skills
- Revision: `1123817e60d15ca0f3af91878923241dee7e3b09`
- License: MIT
- License files: `upstream/prisma/LICENSE`
- Reviewed: 2026-09-11

  Four skills with full command/client/provider/migration references; metadata baseline7.6.0. Match Prisma CLI/client/adapter versions explicitly; Node20.19+ for v7 skill; ESM/TS details; MongoDB route stays v6. Registry latest prisma8.0.0-rc.13 mismatches client latest7.10.0; never install latest pair blindly. Do not route MongoDB through v7 SQL adapter/upgrade workflow. Destructive reset/push/dev migrations must remain explicit and environment-scoped. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. MongoDB migration companion is included intact but activated only for explicit MongoDB upgrade work: staying on Prisma 6 is valid, Prisma Next is early access, and a provider change is never automatic. Client/CLI must match project versions; observed prisma latest 8.0.0-rc.13 differs from client latest 7.10.0.

## resend

- Repository: https://github.com/resend/resend-skills
- Revision: `2a9310fb040fd06a17ce1e8e7aea478d79daea62`
- License: MIT
- License files: `upstream/resend/LICENSE`
- Reviewed: 2026-09-11

  355-line multi-language API guidance plus send/receive/webhook/resource references and skill eval JSON in repo. Existing Resend SDK; observed6.27.0 Node>=20. Live sends require explicit communication authorization and configured domain. Use {data,error} and idempotencyKey; signature verify raw webhook payload. 24-hour dedupe limit; event-level durable outbox needed beyond window. Do not auto-upgrade SDK just because source says latest; version-gate APIs. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. The separate generic email-best-practices skill is intentionally excluded because its SDK error/idempotency examples need review. Included provider skill and original eval fixtures use the Resend API contract; no sends execute during bundling.

## supabase

- Repository: https://github.com/supabase/agent-skills
- Revision: `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- License: MIT
- License files: `upstream/supabase/LICENSE`
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
