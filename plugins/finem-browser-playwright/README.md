# Finem Browser playwright

Use Playwright as the browser execution backend

**Claude Code**

```bash
claude plugin install finem-browser-playwright@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-browser-playwright@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Browser QA | replaces base | 1 |

Native skills: 1. Bundled originals: 1 from 1 source repository (playwright), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
