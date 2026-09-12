# Finem Security audit

Original agentic workflow, API footgun and SARIF auditors

**Claude Code**

```bash
claude plugin install finem-security-audit@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-security-audit@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| CI | adds to base | 1 |
| Security | adds to base | 1 |
| Code review/quality gates | adds to base | 1 |

Native skills: 1. Bundled originals: 3 from 1 source repository (trailofbits), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
