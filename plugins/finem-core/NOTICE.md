# Third-party notices — finem-core

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

## android

- Repository: https://github.com/android/skills
- Revision: `bac232fd02b0855df9275281a2a7a47643768719`
- License: Apache-2.0
- License files: `upstream/android/LICENSE.txt`
- Reviewed: 2026-09-11

  Official targeted Android navigation, insets and View-to-Compose migration coverage. JDK, Gradle wrapper, Android SDK and target-device/emulator; Navigation3 migration only when chosen. Match targetSdk/Compose/Navigation versions. Never auto-migrate a View application merely because Compose references exist. Source nesting triggers Windows MAX_PATH in a deep directory: ingestion/materialization needs long-path-safe I/O. One upstream dead README.md link in a deep-link recipe is absent from the Git tree; document it as upstream defect, not a missing vendored file.

## angular

- Repository: https://github.com/angular/angular
- Revision: `ae33a5f55ec1d31ea4e216b32cd1ddc535a3b331`
- License: MIT
- License files: `upstream/angular/LICENSE`
- Reviewed: 2026-09-11

  Comprehensive first-party Angular app guidance, rather than a third-party kitchen-sink framework skill. Project Angular CLI, matching Angular version, ng build. Signal Forms defaults are gated to Angular 22+; older app conventions retained. Do not include Angular repository contributor .agent skills or additional angular-new-app entrypoint initially; developer already covers setup. New-project latest/global CLI examples are source instructions, not automatic installs; existing project version decides.

## antfu

- Repository: https://github.com/antfu/skills
- Revision: `a74f281a27dadc02397bc1a174b0f2c97531b6ae`
- License: MIT
- License files: `upstream/antfu/LICENSE.md`
- Reviewed: 2026-09-11

  Adds Nuxt 4 app/server/shared layout, SSR-safe fetching, state and Pinia; complements Vue core without copying its rules. Nuxt 4 project; Pinia v3 guidance generated for 3.0.4; installed versions and current docs remain decisive. Nuxt is an alternative primary app framework to Next/Angular/SvelteKit/TanStack Start; Pinia only when already selected. Do not include antfu global preference skill, installation/meta router, or duplicated vendored Vue/web-guideline skills.

## anthropic

- Repository: https://github.com/anthropics/skills
- Revision: `34040c9c568585f6929bedeaad110ad08f079624`
- License: Apache-2.0
- License files: `upstream/anthropic/skills/skill-creator/LICENSE.txt`, `upstream/anthropic/skills/mcp-builder/LICENSE.txt`
- Reviewed: 2026-09-11

  Original Apache-2.0 skill-creator evaluation/grader/comparator/viewer and MCP builder references/scripts. Only selected for engineering agents or MCP servers. Claude CLI is required by upstream triggering/optimization helpers; Python and optional provider SDK/API credentials are separate. These specialists do not become global routers. Model-driven trials and deterministic checks must be reported separately; source examples and XML answer matching alone do not establish agent effectiveness.

## apollo

- Repository: https://github.com/apollographql/skills
- Revision: `c288eb80629dd2309eed81f23d693f66a452d043`
- License: MIT
- License files: `upstream/apollo/LICENSE`
- Reviewed: 2026-09-11

  Schema/operation portable specialists with refs plus Apollo Server 5-specific resolvers/context/plugins/security/performance references. GraphQL schema/operations work with any GraphQL implementation. Apollo Server 5 requires Node >=20; observed @apollo/server5.5.1. Only Apollo Server module is Apollo-runtime-specific; do not force federation/router. Preserve intentional nullability and established API contracts over blanket [Type!]! preference. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Nine complete handbook chapters: ownership, linting, errors, testing, performance, type-state, pointers and documentation. Existing Rust toolchain/Cargo; check MSRV before copying newer lint attributes. General Rust specialist, not an Axum framework guide. Run supported feature combinations; all-features can be invalid for a given crate. Project error policy prevails over blanket no expect/unwrap advice. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## auth0

- Repository: https://github.com/auth0/agent-skills
- Revision: `f135610540ea41e4d99882dc1f06162030c7340b`
- License: Apache-2.0
- License files: `upstream/auth0/LICENSE`
- Reviewed: 2026-09-11

  404-line intent/framework/tool router plus extensive integration references; activation/behavioral eval harness present in repo. Selected Auth0 tenant and SDK; CLI/MCP optional for live config. Source metadata lists macOS/Linux only; Windows CLI not validated here. Description says use even without Auth0 mention; prohibit global provider capture, select only after project/user choice. Do not import marketplace/MCP registration; auth flow code can be authored without live tenant mutation. Include selected directory intact; acquire upstream evals separately if running. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## aws

- Repository: https://github.com/aws/agent-toolkit-for-aws
- Revision: `68d9e8541c45afd2510662bcea69fe1e433ea9db`
- License: Apache-2.0
- License files: `upstream/aws/LICENSE`, `upstream/aws/NOTICE`
- Reviewed: 2026-09-11

  Official AWS-supported toolkit; AWS README claims end-to-end evaluations, not independently executed here. Git pinned content differs materially from cached Exa excerpt. Do not install top-level AWS rules, routers or MCP automatically. Exa returned older ECS-only body: selected body is exact Git pin and metadata version2. AWS service quotas/version claims require current docs at invocation. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## callstack

- Repository: https://github.com/callstackincubator/agent-skills
- Revision: `2766baa46ca0fe7c16cc5ab4d0077ccec2e95fb9`
- License: MIT
- License files: `upstream/callstack/LICENSE`
- Reviewed: 2026-09-11

  Adds device, native, JS-thread, memory, startup and bundle diagnosis beyond Expo UI instructions. Existing RN/Expo project and matching Hermes/toolchains; iOS profiling needs macOS/Xcode; Android profiling needs SDK/device. Callstack owns measured mobile performance; Expo owns Expo layout/router/animation implementation. No generic lifecycle takeover.

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

## emil

- Repository: https://github.com/emilkowalski/skills
- Revision: `d23d7f88a2e21c9e4b1418c7abe420f5c1052ba7`
- License: MIT
- License files: `upstream/emil/LICENSE`
- Reviewed: 2026-09-11

  Adds explicit motion decision, accessibility, interruption and CSS/Motion implementation craft with no connected-service dependency. Existing CSS or chosen animation runtime; no runtime for documentation itself. Impeccable remains design owner; animate runs only for a concrete web-motion task. Choose CSS when sufficient and preserve existing tokens; do not activate every motion specialist. Expo uses official expo-animation, avoiding duplicate animate-expo.

## expo

- Repository: https://github.com/expo/skills
- Revision: `f27959a9f0ee178def45bc974a26ed9090ac4b17`
- License: MIT
- License files: `upstream/expo/LICENSE`, `upstream/expo/plugins/expo/LICENSE`, `upstream/expo/plugins/expo/skills/expo-animation/LICENSE`
- Reviewed: 2026-09-11

  Completes explicitly missing sibling capabilities of the already bundled project-structure and native-ui skills. Project Expo SDK/packages via expo install; many examples require SDK 56+, Reanimated 4, matching worklets and Gesture Handler. Native iOS-only surfaces, NativeTabs unstable import, iOS 18+/26-specific features must be feature/platform gated. Real device release build needed for motion verification. Retain baseline two Expo entries and pin unchanged. Expo Router owns Expo navigation; do not activate Callstack react-navigation there. Feedback submission commands contact Expo; never execute without explicit messaging authorization. Named optional expo-skill-feedback is not a required source import.

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

## grafana

- Repository: https://github.com/grafana/skills
- Revision: `51d33e71e191b409bbd25fc7be2684c610d18166`
- License: Apache-2.0
- License files: `upstream/grafana/LICENSE`
- Reviewed: 2026-09-11

  Original complete OTel guidance and k6 references/examples/SETUP. k6 executable, protocol services and optional xk6 extensions are separate runtime requirements. Upstream docs CLI uses POSIX script; use documented web fallback on Windows. External example targets/cloud runs are not executed during bundling. Official Grafana product-maintained original skill repository; reused existing verified baseline pin. SLO examples reference recording rules not all defined in snippet; not a complete deployable rule file. No real alerts, contact points or paging were created. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## gsap

- Repository: https://github.com/greensock/gsap-skills
- Revision: `aed9cfd3277740755f6bfc1155c7aa645403b760`
- License: MIT
- License files: `upstream/gsap/LICENSE`
- Reviewed: 2026-09-11

  Official library-specific animation API/cleanup/performance guidance for projects choosing GSAP. Chosen project GSAP runtime and @gsap/react when React; matching framework packages. Gate to an actual GSAP project/request: upstream descriptions recommend GSAP generally, so avoid loading for generic motion. Preserve examples outside skills because source refers to examples/react, vue, nuxt and vanilla. All eight skills available, task-relevant entrypoint only.

## gstack

- Repository: https://github.com/garrytan/gstack
- Revision: `71f6048e8ada25180e61438abc1d98cb151fe9a7`
- License: MIT
- License files: `upstream/gstack/LICENSE`, `upstream/gstack/NOTICE.md`
- Reviewed: 2026-09-11

  Original gstack source snapshot. L11 maps upstream gstack paths to .l11/upstream/gstack and owns routing. Browser/runtime builds need Bash, Bun, dependencies and Chromium; Windows browser also needs the Node server build. Setup scripts are shipped as source, never automatically executed or registered. The legacy connect-chrome directory symlink is omitted; its open-gstack-browser target is included as source. Git ignore metadata is omitted so npm cannot suppress original runtime helpers during packaging.

## hono

- Repository: https://github.com/honojs/skills
- Revision: `f916476e71029ebf62160c3286550a99f0b6c687`
- License: MIT
- License files: `upstream/hono/LICENSE`
- Reviewed: 2026-09-11

  601-line full API skill: middleware, validation, streaming, RPC, app.request, CLI workflow. Project runtime Hono 4; optional Node >=22.13 CLI; Workers testing needs project Wrangler/workerd. CLI instructions use @hono/cli@next; registry latest 0.1.11 differs from next 0.2.0-next.7. Basic auth sample only checks header presence; never interpret as complete authentication. Use existing runtime adapter and do not choose Workers automatically. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## impeccable

- Repository: https://github.com/pbakaus/impeccable
- Revision: `cb56ed6c19a07329a9fa0cd4e657bee040156593`
- License: Apache-2.0
- License files: `upstream/impeccable/LICENSE`, `upstream/impeccable/NOTICE.md`
- Reviewed: 2026-09-11

  Complete compiled portable skill with references, scripts and notices. Launcher engine 0.1.5 is a separate download; invocation may download it. Windows launcher execution has not been live-tested.

## infracost

- Repository: https://github.com/infracost/agent-skills
- Revision: `2ee419ceb8a9add56ba5c525d5b2a93ce0ad2e70`
- License: Apache-2.0
- License files: `upstream/infracost/LICENSE`
- Reviewed: 2026-09-11

  Official Infracost product-maintained skills; concrete typed MCP and CLI bindings, version floor, org/auth failure behavior. Do not activate hooks or automatically start MCP during source installation. MCP/CLI service requests were not run; no account ready claim. price reads IaC from stdin; use native stdin pipe rather than POSIX heredoc on Windows. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## inngest

- Repository: https://github.com/inngest/inngest-skills
- Revision: `ff42436bcedfb262d6a377571ce64a0d78d386a5`
- License: Apache-2.0
- License files: `upstream/inngest/LICENSE`
- Reviewed: 2026-09-11

  Five deep entries (~200-500 lines each); repo eval/runner and prompt catalog present. TypeScript-specific; installed inngest major (observed4.20.0) and local Dev Server for runtime tests, credentials for Cloud. 24-hour event dedupe is not an unlimited business once-only guarantee. Select one durable job platform per project rather than activating all provider alternatives. Read installed major-specific API/migration docs; tests not executed here. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Shared skills/references/expressions.md is required and included. Preserve the upstream step-execution.md checkpointing link defect as a documented navigation caveat; the actual checkpointing.md file is present. Setup/CLI instructions using global installs, latest, or INNGEST_DEV=1 must be interpreted through the project-local pinned runtime and local-only development settings. Current observed SDK 4.20.0 requires Node >=20 despite source setup saying Node 18+.

## kotlin

- Repository: https://github.com/Kotlin/kotlin-agent-skills
- Revision: `c2f90697bf71966a117a13340d5fff787f004140`
- License: Apache-2.0
- License files: `upstream/kotlin/LICENSE`
- Reviewed: 2026-09-11

  First-party KMP compatibility, Java conversion and measured Native build optimization. Kotlin/Gradle/JDK and project wrapper; macOS/Xcode for native iOS builds. Bash needed for optional analyze-project.sh and audit-native-build.sh; inspect directly on Windows if absent. Separate KMP AGP9 module split from ordinary Android AGP upgrade. Preserve release build behavior and measure same command/state before and after. Skip unrelated backend JPA/toolchain experiments; no global runtime installs or CI cache mutations during source import.

## neon

- Repository: https://github.com/neondatabase/agent-skills
- Revision: `2e0da3a1653bcdd227565ac14bb3e9e453a8b854`
- License: MIT
- License files: `upstream/neon/LICENSE`
- Reviewed: 2026-09-11

  Parent overview plus detailed Postgres, branching, object-storage routes; diagnostics, pooled/direct connections, provider-specific limitations. Neon account/selected project for remote calls; source inspection and branch plan work offline. HTTP/WS/pg differ by runtime. Parent neon required by postgres and siblings; retain dependency explicitly. Provider must not replace ORM choice; ignore blanket always-pair-with-ORM when project uses SQL. No automatic claimable resources or production branch cloning containing PII. Many refs are live docs; source portability does not equal offline API documentation. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## next

- Repository: https://github.com/vercel/next.js
- Revision: `d155ba9ebfffe4742efefda8d68c2e0e8e490924`
- License: MIT
- License files: `upstream/next/license.md`
- Reviewed: 2026-09-11

  Official deterministic instant-navigation optimizer, scoped to apps already building with Cache Components. Baseline React best practices and installed Next docs retained. Activate only for an existing Next >=16.3 app already building with cacheComponents. Project-local @next/playwright must match the installed Next release line, alongside @playwright/test. npm latest Next and @next/playwright were both 16.3.4; Node >=20.9. Reuse the project Playwright harness and production-like local test build. No agent-browser runtime, global install or deployment is required by the selected optimizer. Do not bundle retired next-best-practices. Installed node_modules/next/dist/docs remains the version authority. Exclude next-cache-components-adoption and next-dev-loop: adoption SKILL.md lines 84-98 requires attempting next-dev-loop and only permits fallback for a real blocker; dev-loop lines 31-50 mandates Next16.3+ Turbopack and agent-browser>=0.31.1, and lines 55-94 require restored headed React-DevTools browser plus /_next/mcp. Existing browser-playwright is not that runtime. Optimizer SKILL.md lines 40-53 explicitly lets the project own its Playwright rig. Lines 140-159 restrict the workflow to an app that already builds with Cache Components. Its adoption link is outside the selected activation scope. Testing API only enabled in explicit test builds and never production. Older apps or cache adoption require a separate migration decision; no automatic framework upgrade through this pack. Advanced optional optimization, not generic Next frontend coverage. Adoption/dev-loop remain reviewed but deferred until a separately pinned, portable, smoke-tested second browser runtime is deliberately selected.

## pactflow

- Repository: https://github.com/pactflow/pactflow-agent-skills
- Revision: `463f70a32daba156376dbe030bbf23097a6a1ecb`
- License: MIT
- License files: `upstream/pactflow/LICENSE`
- Reviewed: 2026-09-11

  Complex OpenAPI variants plus Drift mapping, Python endpoint/coverage scripts, PowerShell and shell loops, eval fixtures. Project-local @pactflow/drift; Python+PyYAML for scripts; optional Prism; Cloud only for publishing/BDCT integration. Do not register context:fork agent metadata as global router. Helpers auto-install dependencies; use pinned local tools under L11. Long workspace path caused three fixture download writes to fail; use short workspace root or long-path capable importer, do not omit them. Loop verify is not authorization to alter spec until tests pass; source explicitly forbids modifying tested spec. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

## playwright

- Repository: https://github.com/microsoft/playwright-cli
- Revision: `655530f6d0dc71a0d6bf46ae165877d3c7311099`
- License: Apache-2.0
- License files: `upstream/playwright/LICENSE`
- Reviewed: 2026-09-11

  Original complete research-pinned skill and nine references. Git source revision has alpha runtime dependencies; released CLI compatibility is separately documented in docs/upstream-expansion.md. Use the explicitly installed project-local L11 runtime; do not execute upstream global npm installation instructions. Browser binaries are separate.

## pm

- Repository: https://github.com/phuryn/pm-skills
- Revision: `18468a95b427e70e258b51389796367c6f684e7d`
- License: MIT
- License files: `upstream/pm/LICENSE`
- Reviewed: 2026-09-11

  Original three self-contained product research skills; no executable helpers. Supply actual product evidence and user context. Added product hypothesis, requirements, acceptance, reviewability and cohort specialists preserve original bytes. Inputs and example numerical targets are not measured evidence. Generic statistical A/B analysis and ambiguous confidence/risk formulas were reviewed but not selected. Cohort analysis must distinguish incomplete observation windows from churn; intent audit requires actual project documentation. Use existing project docs rather than invent evidence or register source slash-command routers.

## posthog

- Repository: https://github.com/PostHog/skills
- Revision: `a49f0145ff5d9d75b49c147a807d786d6ca8334e`
- License: MIT
- License files: `upstream/posthog/LICENSE`
- Reviewed: 2026-09-11

  Original PostHog instrumentation, query and survey skills. PostHog service operations require a separately connected optional account/MCP integration.

## prisma

- Repository: https://github.com/prisma/skills
- Revision: `1123817e60d15ca0f3af91878923241dee7e3b09`
- License: MIT
- License files: `upstream/prisma/LICENSE`
- Reviewed: 2026-09-11

  Four skills with full command/client/provider/migration references; metadata baseline7.6.0. Match Prisma CLI/client/adapter versions explicitly; Node20.19+ for v7 skill; ESM/TS details; MongoDB route stays v6. Registry latest prisma8.0.0-rc.13 mismatches client latest7.10.0; never install latest pair blindly. Do not route MongoDB through v7 SQL adapter/upgrade workflow. Destructive reset/push/dev migrations must remain explicit and environment-scoped. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. MongoDB migration companion is included intact but activated only for explicit MongoDB upgrade work: staying on Prisma 6 is valid, Prisma Next is early access, and a provider change is never automatic. Client/CLI must match project versions; observed prisma latest 8.0.0-rc.13 differs from client latest 7.10.0.

## pulumi

- Repository: https://github.com/pulumi/agent-skills
- Revision: `e57d1d117b585a3b5bf6bc612ff327acfa89bd29`
- License: Apache-2.0
- License files: `upstream/pulumi/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## redux-toolkit

- Repository: https://github.com/reduxjs/redux-toolkit
- Revision: `5b4795b5d3e8a0ab19bf94d8d3413168804ade64`
- License: MIT
- License files: `upstream/redux-toolkit/LICENSE`
- Reviewed: 2026-09-11

  Fills explicit state-ownership and RTK Query alternative with official package-shipped skills. Existing or explicitly chosen Redux Toolkit2 + React-Redux; project tests. RTK Query is an alternative server-cache owner to TanStack Query/SWR, not an additional default cache. Requires edges: modern-redux -> redux-dataflow; adopt-rtk-query -> modern-redux; slices -> state-ownership. Preserve all eight skills but load relevant path. Slash names require namespaced catalog IDs.

## resend

- Repository: https://github.com/resend/resend-skills
- Revision: `2a9310fb040fd06a17ce1e8e7aea478d79daea62`
- License: MIT
- License files: `upstream/resend/LICENSE`
- Reviewed: 2026-09-11

  355-line multi-language API guidance plus send/receive/webhook/resource references and skill eval JSON in repo. Existing Resend SDK; observed6.27.0 Node>=20. Live sends require explicit communication authorization and configured domain. Use {data,error} and idempotencyKey; signature verify raw webhook payload. 24-hour dedupe limit; event-level durable outbox needed beyond window. Do not auto-upgrade SDK just because source says latest; version-gate APIs. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. The separate generic email-best-practices skill is intentionally excluded because its SDK error/idempotency examples need review. Included provider skill and original eval fixtures use the Resend API contract; no sends execute during bundling.

## shadcn

- Repository: https://github.com/shadcn-ui/ui
- Revision: `3ba91b1cc83e1bbe4ab35a422ff2a694849c5048`
- License: MIT
- License files: `upstream/shadcn/LICENSE.md`
- Reviewed: 2026-09-11

  Original complete shadcn skill, rules, CLI/MCP references, evaluation data and assets. CLI commands require a compatible project-local shadcn runtime and components.json; upstream latest examples do not pin runtime. Agent metadata is inert vendored source.

## supabase

- Repository: https://github.com/supabase/agent-skills
- Revision: `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- License: MIT
- License files: `upstream/supabase/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## superpowers

- Repository: https://github.com/obra/superpowers
- Revision: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- License: MIT
- License files: `upstream/superpowers/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## svelte

- Repository: https://github.com/sveltejs/ai-tools
- Revision: `e7d93fcc168b5f4b3fec57c22f49a36d57e8ee1a`
- License: MIT
- License files: `upstream/svelte/LICENSE`
- Reviewed: 2026-09-11

  Official Svelte instructions plus framework-aware analysis and documentation CLI. Svelte 5/SvelteKit project, svelte-check and project build. Optional project-private @sveltejs/mcp 0.1.26 CLI for required autofixer. npm 0.1.26 depends on tmcp 1.20.0-next.1 and eslint ^9.36.0. Pin complete toolchain; released top-level package has prerelease transitive dependency. Use canonical tools/skills originals; omit Claude/Cursor/OpenCode copies and global routers. Prefer file argument to autofixer; original POSIX dollar-escaping examples must not be copied literally into PowerShell. Optional editor subagent advice does not require creating one.

## swiftui

- Repository: https://github.com/twostraws/swiftui-agent-skill
- Revision: `be297ff80dddec529af1f9b1f1f114aab6c9d11c`
- License: MIT
- License files: `upstream/swiftui/LICENSE`
- Reviewed: 2026-09-11

  Adds an actual native Apple UI specialist, covering API modernization, state, navigation, accessibility and performance. macOS/Xcode and matching iOS SDK for builds; source defaults Swift >=6.2 and iOS26 for new apps; preserve existing deployment target. Use root canonical skill plus direct references only. Exclude nested swiftui-pro/skills and plugin registration. Do not label Windows static review a native build. SwiftUI is a separate primary UI framework.

## tanstack-router

- Repository: https://github.com/TanStack/router
- Revision: `f021f6d1c6dce6c9b54d70766f1d636d8fd9e184`
- License: MIT
- License files: `upstream/tanstack-router/LICENSE`
- Reviewed: 2026-09-11

  First-party composable routing, Query integration and Start SSR/server boundaries with explicit dependency links. Matching project @tanstack/react-router, router-plugin and Query when selected; Start only for Start project. Version metadata differs across skill files, so inspect installed types, not only repository HEAD. Preserve full package paths. router-core auth links Start auth-server-primitives; router-plugin links virtual-file-routes. Both support closures included. Names react-router and vue-router belong to TanStack packages here; never confuse with Remix react-router or Vue Router. Prefix IDs. Router/Start are alternative primary routing/app owners to Next, Remix, Nuxt and Expo. Nested specialists load on demand, not all at once.

## tanstack-table

- Repository: https://github.com/TanStack/table
- Revision: `ce123bc6651bcbf188f3198627c6bb0b10588162`
- License: MIT
- License files: `upstream/tanstack-table/LICENSE`
- Reviewed: 2026-09-11

  Detailed official table behavior and state guidance; optional feature specialists form a coherent dependency graph. @tanstack/react-table 9.x, Node >=20; 9.2.4 published runtime verified. Skills use useTable/tableFeatures, not v8 useReactTable. Version9-only pack: never auto-migrate a v8 consumer. Core and table-features are required before React getting-started. Only React adapter imported initially; do not bulk activate other framework adapters. Preserve all core feature references but route to only task-relevant ones.

## terraform

- Repository: https://github.com/hashicorp/agent-skills
- Revision: `c2d65dfe492f74d360d35b859b88932222470bd8`
- License: MPL-2.0
- License files: `upstream/terraform/LICENSE`
- Reviewed: 2026-09-11

  Original Terraform style/security guidance and full test references. MPL-2.0 source remains unchanged and separately licensed. Terraform test requires >=1.6; provider mocks require >=1.7. Providers and account credentials are project/runtime requirements.

## trailofbits

- Repository: https://github.com/trailofbits/skills
- Revision: `321ccfe628eca0d314b0ee4eaffcdd8a05639aaf`
- License: CC-BY-SA-4.0
- License files: `upstream/trailofbits/LICENSE`
- Reviewed: 2026-09-11

  Original complete property-testing references and supply-chain collector/render scripts with tests, Python dependency metadata and uv.lock. CC-BY-SA-4.0 source is redistributed unchanged with attribution; it is not covered by the L11 MIT license. Collector needs Python >=3.11, uv/locked dependencies and network registries; authenticated gh improves GitHub coverage. Unavailable data must remain unassessable. Security consultancy's original auditor skills, executable helpers and test fixtures; preserve separate attribution/share-alike license. One-level cross-file limit must be reported. Static guidance, not runtime exploit assurance. Agent reference is a support dependency; ship as inert source, not registered top-level agent. Execution/probing must follow caller's task scope. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

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

## vercel

- Repository: https://github.com/vercel-labs/agent-skills
- Revision: `063bee94c3f4df8453406c830b0a7df0f2860278`
- License: MIT
- License files: `upstream/vercel/README.md`
- Reviewed: 2026-09-11

  Original React/Next, composition and web-design skill directories. Repository README and React metadata declare MIT; no standalone upstream LICENSE is tracked. Offline web guidelines are provided by the web-guidelines dependency.

## vue

- Repository: https://github.com/vuejs-ai/skills
- Revision: `c9d355ff23f654309dd02006be671859df0a134c`
- License: MIT
- License files: `upstream/vue/LICENSE`
- Reviewed: 2026-09-11

  Fills a genuine non-React framework gap with progressive references for implementation, routing, debugging and component tests. Existing Vue 3 project, matching Vue Router/Vitest/Vue Test Utils; vue-tsc and project build. Vue core is the primary Vue skill; do not also activate antfu vue or its copied vue-best-practices. Composition API defaults yield to an existing Options API project. Route testing through established Playwright QA owner; do not activate a second global workflow router.

## web-guidelines

- Repository: https://github.com/vercel-labs/web-interface-guidelines
- Revision: `e3d624baaf29dc1fc645aff3e38f03e564d2d6b1`
- License: MIT
- License files: `upstream/web-guidelines/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## wshobson

- Repository: https://github.com/wshobson/agents
- Revision: `a30778f8c4e6b0a87567941b7cca4f534bf642b6`
- License: MIT
- License files: `upstream/wshobson/LICENSE`
- Reviewed: 2026-09-11

  Original specialist directories with substantive references/examples. Framework/cloud examples must be adapted to the actual project. Retirement is composed partial coverage, not a complete decommissioning runbook. Established specialist skill collection; content and complete templates/scripts inspected; not Kubernetes vendor ownership. CNI must implement NetworkPolicy; YAML validity does not prove enforcement. Account/cluster operations require separately authorized credentials. Upstream examples include curl-to-sudo bootstrap, auto-prune, sync --force; never auto-run during installation. Git reversal alone does not prove data rollback. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## xylex

- Repository: https://github.com/xylex-group/skills
- Revision: `53c3a7758bd1e0e5bf6564c77fe3f7d075c91846`
- License: MIT
- License files: `upstream/xylex/LICENSE`
- Reviewed: 2026-09-12

  Ten complete original XYLEX skill directories, including local references, Python helpers, CSS tokens and the MIT license. Only explicitly selected architecture, code-audit and web UI-polish entrypoints are mapped. No XYLEX root router, hooks, Grok workflows or duplicate TDD/Rust skills are installed. Resolve helpers relative to the original skill directory and run them against the intended project. Python helpers require Python 3; website token extraction requires the separate extract-design-system CLI plus Playwright/Chromium, which these source bundles do not install. Keep existing project design tokens authoritative; invoke the requested specialist without stacking competing motion or review workflows. CSS motion specialists are web-only. The audit helpers also require Git and blast-zone search requires rg. The original blastzone_metrics.py uses POSIX path separators when filtering definitions/test callers: Windows aggregate caller counts can be inaccurate. Verify actual caller files or use a POSIX environment; do not treat those counts as authoritative.
