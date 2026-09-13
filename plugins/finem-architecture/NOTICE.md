# Third-party notices — finem-architecture

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

## pactflow

- Repository: https://github.com/pactflow/pactflow-agent-skills
- Revision: `463f70a32daba156376dbe030bbf23097a6a1ecb`
- License: MIT
- License files: `upstream/pactflow/LICENSE`
- Reviewed: 2026-09-11

  Complex OpenAPI variants plus Drift mapping, Python endpoint/coverage scripts, PowerShell and shell loops, eval fixtures. Project-local @pactflow/drift; Python+PyYAML for scripts; optional Prism; Cloud only for publishing/BDCT integration. Do not register context:fork agent metadata as global router. Helpers auto-install dependencies; use pinned local tools under L11. Long workspace path caused three fixture download writes to fail; use short workspace root or long-path capable importer, do not omit them. Loop verify is not authorization to alter spec until tests pass; source explicitly forbids modifying tested spec. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.

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
