# Finem Kotlin mobile

KMP migrations and measured native build performance

**Claude Code**

```bash
claude plugin install finem-kotlin-mobile@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-kotlin-mobile@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Migration/deprecation | adds to base | 2 |
| Performance | adds to base | 1 |

Native skills: 1. Bundled originals: 3 from 1 source repository (kotlin), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
