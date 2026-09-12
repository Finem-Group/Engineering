# Finem Kubernetes

Original Kubernetes manifests, policy, Helm and GitOps specialists

**Claude Code**

```bash
claude plugin install finem-kubernetes@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-kubernetes@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Infrastructure | base | 2 |
| Networking | base | 1 |
| Security | base | 1 |
| Deployment | base | 1 |
| Rollback | base | 1 |

Native skills: 1. Bundled originals: 4 from 1 source repository (wshobson), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
