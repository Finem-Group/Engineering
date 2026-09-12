# Observability

Make system health measurable, design for failure and support incident diagnosis and recovery.

**Claude Code**

```bash
claude plugin install finem-observability-reliability@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-observability-reliability@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Observability | area baseline | 1 |
| SLOs | area baseline | 1 |
| Incident response | area baseline | 2 |
| Postmortem | area baseline | 1 |
| Reliability/resilience | area baseline | 3 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `observability`, `backend-rust`, `jobs-inngest`, `jobs-trigger`, `jobs-upstash`.
