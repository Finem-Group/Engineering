# Backend & Data

Build services, persistence and background processing around explicit business rules and data contracts.

**Claude Code**

```bash
claude plugin install finem-backend-data@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-backend-data@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Backend | area baseline | 3 |
| Database | area baseline | 2 |
| Migrations | area baseline | 2 |
| Async/jobs/events | area baseline | 2 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `cloudflare`, `backend-hono`, `backend-fastify`, `backend-fastapi`, `backend-django`, `backend-apollo`, `backend-rust`, `data-prisma`, `migration-prisma-v7`, `migration-prisma-mongodb`, `data-neon`, `storage-neon`, `jobs-inngest`, `jobs-trigger`, `cache-upstash`, `jobs-upstash`, `search-upstash`, `email-resend`, `search-algolia`.
