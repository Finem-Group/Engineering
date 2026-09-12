# Finem Intent audit

Compare documented boundaries to implemented behavior

**Claude Code**

```bash
claude plugin install finem-intent-audit@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-intent-audit@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Documentation/runbooks | base | 1 |
| Code review/quality gates | base | 1 |
| Security | base | 1 |

Native skills: 1. Bundled originals: 2 from 1 source repository (pm), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
