# Security

Protect identity, permissions, secrets and personal data, and assess concrete security risks in the implementation.

**Claude Code**

```bash
claude plugin install finem-security-privacy@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-security-privacy@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Auth | area baseline | 2 |
| Secrets/IAM | area baseline | 2 |
| Security | area baseline | 1 |
| Privacy/compliance | area baseline | 2 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `advanced-testing`, `intent-audit`, `backend-django`, `auth-auth0`, `kubernetes`, `security-audit`.
