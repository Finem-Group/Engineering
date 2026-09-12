# Finem Context

Engineering phase context: product discovery, requirements, feasibility, planning/task decomposition. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-context@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-context@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Product discovery | phase baseline | 2 |
| Requirements | phase baseline | 1 |
| Feasibility | phase baseline | 2 |
| Planning/task decomposition | phase baseline | 2 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `discovery`, `product-validation`, `product-delivery`.
