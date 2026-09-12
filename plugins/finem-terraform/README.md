# Finem Terraform

Terraform style and tests

**Claude Code**

```bash
claude plugin install finem-terraform@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-terraform@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Infrastructure | adds to base | 1 |
| Testing | adds to base | 1 |

Native skills: 1. Bundled originals: 2 from 1 source repository (terraform), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
