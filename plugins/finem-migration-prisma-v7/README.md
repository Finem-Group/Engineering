# Finem Migration prisma v7

Explicit Prisma v7 upgrade work with project version checks

**Claude Code**

```bash
claude plugin install finem-migration-prisma-v7@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-data-prisma@finem
codex plugin add finem-migration-prisma-v7@finem
```

**Depends on** `finem-core`, `finem-data-prisma`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Migrations | adds to base | 1 |
| Migration/deprecation | adds to base | 1 |

Native skills: 1. Bundled originals: 1 from 1 source repository (prisma), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
