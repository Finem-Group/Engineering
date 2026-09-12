# Finem Auth auth0

Auth0 integration only when the project has selected Auth0

**Claude Code**

```bash
claude plugin install finem-auth-auth0@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-auth-auth0@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Auth | adds to base | 1 |

Native skills: 1. Bundled originals: 1 from 1 source repository (auth0), unmodified under `upstream/`. See `NOTICE.md` for licenses and pinned revisions.
