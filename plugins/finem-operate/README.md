# Finem Operate

Engineering phase operate: observability, slos, incident response, postmortem, cost/finops. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-operate@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-operate@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Observability | phase baseline | 1 |
| SLOs | phase baseline | 1 |
| Incident response | phase baseline | 2 |
| Postmortem | phase baseline | 1 |
| Cost/FinOps | phase baseline | 1 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `observability`, `finops`.
