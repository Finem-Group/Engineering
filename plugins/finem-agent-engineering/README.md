# Finem Agent engineering

Original agent skill evaluation and MCP server engineering specialists

**Claude Code**

```bash
claude plugin install finem-agent-engineering@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-agent-engineering@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Testing | adds to base | 1 |
| API contracts | adds to base | 1 |

Native skills: 1. Bundled originals: 2 from 1 source repository (anthropic), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
