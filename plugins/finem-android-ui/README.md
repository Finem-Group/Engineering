# Finem Android ui

Android edge-to-edge and incremental XML-to-Compose migration

**Claude Code**

```bash
claude plugin install finem-android-ui@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-android-ui@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Frontend | replaces base | 3 |
| Performance | replaces base | 1 |

Native skills: 1. Bundled originals: 4 from 2 source repositories (addy, android), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
