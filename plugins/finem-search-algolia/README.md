# Finem Search algolia

Algolia indexing contracts and release quality checks

**Claude Code**

```bash
claude plugin install finem-search-algolia@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-search-algolia@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Backend | adds to base | 2 |
| Testing | adds to base | 1 |

Native skills: 1. Bundled originals: 3 from 1 source repository (algolia), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
