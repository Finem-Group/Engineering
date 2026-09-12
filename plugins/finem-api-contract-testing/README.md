# Finem Api contract testing

OpenAPI parse fixtures and implementation drift checks

**Claude Code**

```bash
claude plugin install finem-api-contract-testing@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-api-contract-testing@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| API contracts | adds to base | 1 |
| Testing | adds to base | 1 |

Native skills: 1. Bundled originals: 2 from 1 source repository (pactflow), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
