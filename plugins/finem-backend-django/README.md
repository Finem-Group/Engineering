# Finem Backend django

Django application conventions compatible with the installed version

**Claude Code**

```bash
claude plugin install finem-backend-django@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-backend-django@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Backend | adds to base | 1 |
| Auth | adds to base | 1 |
| Database | adds to base | 1 |
| Migrations | adds to base | 1 |
| Testing | adds to base | 1 |

Native skills: 1. Bundled originals: 1 from 1 source repository (django), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
