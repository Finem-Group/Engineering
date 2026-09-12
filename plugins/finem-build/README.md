# Finem Build

Engineering phase build: frontend, backend, auth, database, migrations, async/jobs/events, infrastructure, networking, secrets/iam, configuration/environments. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-build@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-build@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Frontend | phase baseline | 3 |
| Backend | phase baseline | 3 |
| Auth | phase baseline | 2 |
| Database | phase baseline | 2 |
| Migrations | phase baseline | 2 |
| Async/jobs/events | phase baseline | 2 |
| Infrastructure | phase baseline | 1 |
| Networking | phase baseline | 2 |
| Secrets/IAM | phase baseline | 2 |
| Configuration/environments | phase baseline | 1 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `react-ui`, `cloudflare`, `terraform`, `expo`, `vue`, `nuxt`, `svelte`, `angular`, `next-cache`, `tanstack-router`, `tanstack-start`, `tanstack-table`, `redux-toolkit`, `web-animation`, `gsap`, `swiftui`, `android-ui`, `backend-hono`, `backend-fastify`, `backend-fastapi`, `backend-django`, `backend-apollo`, `backend-rust`, `auth-auth0`, `data-prisma`, `migration-prisma-v7`, `migration-prisma-mongodb`, `data-neon`, `storage-neon`, `jobs-inngest`, `jobs-trigger`, `cache-upstash`, `jobs-upstash`, `search-upstash`, `email-resend`, `search-algolia`, `kubernetes`, `finops`, `aws-containers`, `xylex-ui-polish`.
