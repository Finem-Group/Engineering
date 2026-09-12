# Finem Jobs trigger

Trigger.dev task authoring and project setup

**Claude Code**

```bash
claude plugin install finem-jobs-trigger@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-jobs-trigger@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Async/jobs/events | base | 2 |
| Reliability/resilience | base | 1 |

Native skills: 1. Bundled originals: 2 from 1 source repository (trigger), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
