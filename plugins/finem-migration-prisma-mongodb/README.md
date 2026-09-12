# Finem Migration prisma mongodb

Explicit MongoDB assessment: stay on Prisma 6 or evaluate Prisma Next; scoped separately from SQL projects

**Claude Code**

```bash
claude plugin install finem-migration-prisma-mongodb@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-migration-prisma-mongodb@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Migrations | replaces base | 1 |
| Migration/deprecation | base | 1 |
| Database | replaces base | 1 |

Native skills: 1. Bundled originals: 1 from 1 source repository (prisma), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
