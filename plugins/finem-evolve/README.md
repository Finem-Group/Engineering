# Finem Evolve

Engineering phase evolve: maintenance, dependencies, migration/deprecation, retirement, documentation/runbooks, product analytics/feedback. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-evolve@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-evolve@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Maintenance | phase baseline | 2 |
| Dependencies | phase baseline | 2 |
| Migration/deprecation | phase baseline | 1 |
| Retirement | phase baseline | 3 |
| Documentation/runbooks | phase baseline | 2 |
| Product analytics/feedback | phase baseline | 3 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `advanced-testing`, `product-analytics`, `intent-audit`, `kotlin-mobile`, `migration-prisma-v7`, `migration-prisma-mongodb`, `xylex-code-audit`.
