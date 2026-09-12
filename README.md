# Finem Engineering

A plugin marketplace for **Claude Code** and **Codex**: one engineering coordinator plus
56 technology packs, carrying 180 original skills from
50 pinned Git sources across 43 capabilities.

Originals are bundled **unmodified** under each plugin's `upstream/`. Only the entry skills are native,
so installing a pack exposes the coordinator and that pack's entry; original specialists load on demand.

## Install

### Claude Code

```bash
claude plugin marketplace add Finem-Group/Engineering
claude plugin install finem-core@finem
```

Then add the packs the project actually uses. Packs declare `finem-core` as a dependency, so Claude Code
pulls it — and any required sibling pack — in automatically:

```bash
claude plugin install finem-vue@finem
claude plugin install finem-nuxt@finem    # also installs finem-vue and finem-core
```

### Codex

```bash
codex plugin marketplace add Finem-Group/Engineering
codex plugin add finem-core@finem
```

**Codex does not resolve plugin dependencies.** `codex plugin add` installs exactly the plugin you name.
Install `finem-core` yourself, plus any pack listed under *Depends on* in the pack's README — without the
coordinator a pack's entry skill has nothing to hand its findings back to:

```bash
codex plugin add finem-core@finem
codex plugin add finem-vue@finem
codex plugin add finem-nuxt@finem
```

## What is in here

| Plugin | Covers | Upstream |
| --- | --- | --- |
| `finem-core` | The coordinator and the base originals for all 43 capabilities | addy, gstack, impeccable, posthog, pulumi, supabase, superpowers, vercel, web-guidelines, wshobson |
| `finem-discovery` | Original research interviews and opportunity synthesis | pm |
| `finem-react-ui` | shadcn component composition | shadcn |
| `finem-browser-playwright` | Use Playwright as the browser execution backend | playwright |
| `finem-advanced-testing` | Properties and supply-chain analysis | trailofbits |
| `finem-cloudflare` | Cloudflare Workers, Wrangler and Durable Objects | cloudflare |
| `finem-terraform` | Terraform style and tests | terraform |
| `finem-observability` | OpenTelemetry and k6 | grafana |
| `finem-expo` | Expo structure, native UI, routing, motion and data fetching | addy, expo |
| `finem-product-validation` | Product hypotheses, lean experiments and launch risk analysis | pm |
| `finem-product-delivery` | Product strategy, outcome roadmaps, user stories and acceptance scenarios | pm |
| `finem-product-analytics` | Metrics definitions and cohort-based feedback alongside provider instrumentation | pm |
| `finem-intent-audit` | Compare documented boundaries to implemented behavior | pm |
| `finem-agent-engineering` | Original agent skill evaluation and MCP server engineering specialists | anthropic |
| `finem-vue` | Vue 3 application implementation, routing and tests | addy, vue |
| `finem-nuxt` | Nuxt 4 server rendering and Pinia state | antfu |
| `finem-svelte` | Svelte 5 and SvelteKit implementation and analysis | addy, svelte |
| `finem-angular` | Version-aware Angular application implementation | addy, angular |
| `finem-next-cache` | Next 16.3+ instant-navigation tests for apps already building with Cache Components | next |
| `finem-tanstack-router` | TanStack React Router and Query composition | tanstack-router |
| `finem-tanstack-start` | TanStack Start React full-stack rendering | tanstack-router |
| `finem-tanstack-table` | TanStack Table 9 core and React table bindings | tanstack-table |
| `finem-redux-toolkit` | Redux Toolkit state ownership and RTK Query | redux-toolkit |
| `finem-web-animation` | Purposeful CSS and chosen-library web motion | emil |
| `finem-gsap` | GSAP API, lifecycle and performance specialists | gsap |
| `finem-react-native-performance` | Measure and optimize native JS, bundle and device performance | callstack |
| `finem-swiftui` | SwiftUI API, state, navigation and accessibility | addy, swiftui |
| `finem-android-ui` | Android edge-to-edge and incremental XML-to-Compose migration | addy, android |
| `finem-kotlin-mobile` | KMP migrations and measured native build performance | kotlin |
| `finem-backend-hono` | Hono API implementation for a selected project runtime | hono |
| `finem-backend-fastify` | Fastify request lifecycle, schema and plugin isolation | fastify |
| `finem-backend-fastapi` | FastAPI routing, validation, dependency cleanup and tests | fastapi |
| `finem-backend-django` | Django application conventions compatible with the installed version | django |
| `finem-api-graphql` | GraphQL schema and operation contracts independent of server provider | apollo |
| `finem-backend-apollo` | Apollo Server context, resolvers, authorization and operations | apollo |
| `finem-backend-rust` | Rust ownership, errors, testing and performance conventions | apollo |
| `finem-auth-auth0` | Auth0 integration only when the project has selected Auth0 | auth0 |
| `finem-data-prisma` | Prisma database setup, client API and migration commands | prisma |
| `finem-migration-prisma-v7` | Explicit Prisma v7 upgrade work with project version checks | prisma |
| `finem-migration-prisma-mongodb` | Explicit MongoDB assessment: stay on Prisma 6 or evaluate Prisma Next; scoped separately from SQL projects | prisma |
| `finem-data-neon` | Neon Postgres and database branching with the required provider parent | neon |
| `finem-storage-neon` | Neon object storage and its provider parent | neon |
| `finem-jobs-inngest` | Inngest durable functions, events, flow control and development tests | inngest |
| `finem-jobs-trigger` | Trigger.dev task authoring and project setup | trigger |
| `finem-cache-upstash` | Upstash Redis and rate limiting for a selected deployment | upstash |
| `finem-jobs-upstash` | Upstash QStash and durable workflow delivery | upstash |
| `finem-search-upstash` | Upstash Search indexing and retrieval | upstash |
| `finem-email-resend` | Resend transactional email API and webhook handling | resend |
| `finem-api-contract-testing` | OpenAPI parse fixtures and implementation drift checks | pactflow |
| `finem-search-algolia` | Algolia indexing contracts and release quality checks | algolia |
| `finem-kubernetes` | Original Kubernetes manifests, policy, Helm and GitOps specialists | wshobson |
| `finem-security-audit` | Original agentic workflow, API footgun and SARIF auditors | trailofbits |
| `finem-finops` | Provider-aware infrastructure cost estimates and generation | infracost |
| `finem-aws-containers` | AWS container selection and infrastructure deployment guidance | aws |
| `finem-xylex-architecture` | Original XYLEX module design and domain modeling specialists | xylex |
| `finem-xylex-code-audit` | Original XYLEX duplicate/dead-code audits, contract drift and callable documentation | xylex |
| `finem-xylex-ui-polish` | Original XYLEX web component polish, CSS transition recipes and website token extraction | xylex |

## Layout

```
.claude-plugin/marketplace.json     Claude Code marketplace
.agents/plugins/marketplace.json    Codex marketplace
plugins/<name>/
  .claude-plugin/plugin.json        Claude Code manifest (with dependencies)
  .codex-plugin/plugin.json         Codex manifest
  skills/<name>/SKILL.md            the one native skill
  capabilities.json                 capability -> original entrypoints
  upstream.lock.json                SHA-256 per bundled file
  upstream/<source>/...             unmodified originals
  NOTICE.md                         licenses and pinned revisions
```

Both marketplace files point at the same `plugins/` directory, so the two hosts install identical bytes.

## Known limits

The three optional XYLEX packs and their ten complete original skills are documented in
[XYLEX integration](docs/xylex-integration.md), including source provenance, prerequisites and web/native scope.


- **Codex has no dependency resolution.** See the install section — install `finem-core` and any required
  pack explicitly.
- **Windows path length.** The deepest bundled original is ~192 characters below the repository root.
  Clone or install under a short path, and enable long paths if a checkout fails:
  `git config --global core.longpaths true`.
- **These plugins install no runtimes.** They carry source, not a toolchain. An original that expects
  Playwright, uv, Terraform or a provider CLI will say so; the coordinator reports the missing requirement
  rather than installing it. The `l11` npm CLI is what provides a managed toolchain.
- **Installed is not active.** The coordinator selects packs for the current project/module, checks
  dependencies, conflicts and exclusive groups, and leaves other installed frameworks inactive. Its
  bundled Node helper validates selection without installing anything or writing project state.
- **Bundled originals are pinned snapshots.** `upstream.lock.json` records the commit and a SHA-256 per
  file. They do not track their upstream repositories; regenerate from an updated catalog to move them.

## Regenerating

```bash
node build-marketplace.js --catalog <path-to-l11-engineering-stack> --out .
```

The generator is the source of truth: `plugins/`, both marketplace files and this table are derived from
the catalog. Edit the catalog, `build-marketplace.js` or the canonical helper under `scripts/`, never
the generated tree. `PLUGIN_VERSION` versions this marketplace independently of the upstream catalog.

## Validation

Node 18+ and Python 3.11+ are required for the checks:

```bash
python -m pip install -r requirements-test.txt
python -m unittest discover -s tests -v
```

Tests parse every native YAML header, check both marketplaces and original hashes, exercise the generator
with small standalone catalogs, and test project selection with incompatible installed frameworks.
GitHub Actions runs these checks on Windows and Linux. Original upstream scripts are not executed by
these checks. Native interactive discovery and real provider/tool execution remain separate checks.

## Licensing

Finem's own files are MIT. Bundled originals keep their own licenses — MIT, Apache-2.0, CC-BY-SA-4.0 and
MPL-2.0 — recorded per plugin in `NOTICE.md` with repository and pinned revision.
