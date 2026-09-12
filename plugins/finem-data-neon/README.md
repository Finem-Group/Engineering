# Finem Data neon

Neon Postgres and database branching with the required provider parent

**Claude Code**

```bash
claude plugin install finem-data-neon@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-data-neon@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Database | adds to base | 2 |
| Migrations | adds to base | 2 |

Native skills: 1. Bundled originals: 3 from 1 source repository (neon), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
