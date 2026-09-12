# Finem Maintenance & Documentation

Keep the system understandable and support safe dependency changes, deprecation and eventual retirement.

**Claude Code**

```bash
claude plugin install finem-maintenance-documentation@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-maintenance-documentation@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Maintenance | area baseline | 2 |
| Dependencies | area baseline | 2 |
| Migration/deprecation | area baseline | 1 |
| Retirement | area baseline | 3 |
| Documentation/runbooks | area baseline | 2 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `advanced-testing`, `intent-audit`, `kotlin-mobile`, `migration-prisma-v7`, `migration-prisma-mongodb`, `xylex-code-audit`.
