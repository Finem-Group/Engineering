# Finem Design

Engineering phase design: architecture, adrs, domain modeling, ux, design system, api contracts, reliability/resilience, privacy/compliance. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-design@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-design@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Architecture | phase baseline | 2 |
| ADRs | phase baseline | 1 |
| Domain modeling | phase baseline | 1 |
| UX | phase baseline | 1 |
| Design system | phase baseline | 2 |
| API contracts | phase baseline | 1 |
| Reliability/resilience | phase baseline | 3 |
| Privacy/compliance | phase baseline | 2 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `discovery`, `react-ui`, `expo`, `agent-engineering`, `backend-hono`, `backend-fastify`, `backend-fastapi`, `api-graphql`, `backend-rust`, `jobs-inngest`, `jobs-trigger`, `jobs-upstash`, `api-contract-testing`, `xylex-architecture`, `xylex-code-audit`, `xylex-ui-polish`.
