# Finem Cache upstash

Upstash Redis and rate limiting for a selected deployment

**Claude Code**

```bash
claude plugin install finem-cache-upstash@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-cache-upstash@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Backend | adds to base | 2 |

Native skills: 1. Bundled originals: 2 from 1 source repository (upstash), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
