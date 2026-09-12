# Finem Xylex code audit

Original XYLEX duplicate/dead-code audits, contract drift and callable documentation

**Claude Code**

```bash
claude plugin install finem-xylex-code-audit@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-xylex-code-audit@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Code review/quality gates | adds to base | 3 |
| Maintenance | adds to base | 2 |
| API contracts | adds to base | 1 |
| Documentation/runbooks | adds to base | 1 |

Native skills: 1. Bundled originals: 4 from 1 source repository (xylex), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
