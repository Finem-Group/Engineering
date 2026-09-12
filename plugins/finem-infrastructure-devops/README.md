# Finem Infrastructure & DevOps

Provision reproducible environments and operate the build, release, deployment and rollback path with visible infrastructure costs.

**Claude Code**

```bash
claude plugin install finem-infrastructure-devops@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-infrastructure-devops@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Infrastructure | area baseline | 1 |
| Networking | area baseline | 2 |
| CI | area baseline | 1 |
| Release | area baseline | 2 |
| Deployment | area baseline | 2 |
| Rollback | area baseline | 3 |
| Cost/FinOps | area baseline | 1 |
| Configuration/environments | area baseline | 1 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `cloudflare`, `terraform`, `kubernetes`, `security-audit`, `finops`, `aws-containers`.
