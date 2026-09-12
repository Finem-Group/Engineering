# Architecture

Define system boundaries, domain rules and clear interfaces so implementation can evolve without spreading coupling.

**Claude Code**

```bash
claude plugin install finem-architecture@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-architecture@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Architecture | area baseline | 2 |
| ADRs | area baseline | 1 |
| Domain modeling | area baseline | 1 |
| API contracts | area baseline | 1 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `agent-engineering`, `backend-hono`, `backend-fastify`, `backend-fastapi`, `api-graphql`, `api-contract-testing`, `xylex-architecture`, `xylex-code-audit`.
