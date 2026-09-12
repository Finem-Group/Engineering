# Finem Deliver

Engineering phase deliver: release, deployment, rollback. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-deliver@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-deliver@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Release | phase baseline | 2 |
| Deployment | phase baseline | 2 |
| Rollback | phase baseline | 3 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `cloudflare`, `kubernetes`, `aws-containers`.
