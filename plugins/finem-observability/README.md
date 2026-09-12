# Finem Observability

OpenTelemetry and k6

**Claude Code**

```bash
claude plugin install finem-observability@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-observability@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Observability | base | 2 |
| Performance | base | 1 |
| SLOs | base | 1 |
| Incident response | base | 1 |

Native skills: 1. Bundled originals: 3 from 1 source repository (grafana), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
