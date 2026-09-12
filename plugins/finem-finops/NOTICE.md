# Third-party notices — finem-finops

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## infracost

- Repository: https://github.com/infracost/agent-skills
- Revision: `2ee419ceb8a9add56ba5c525d5b2a93ce0ad2e70`
- License: Apache-2.0
- License files: `upstream/infracost/LICENSE`
- Reviewed: 2026-09-11

  Official Infracost product-maintained skills; concrete typed MCP and CLI bindings, version floor, org/auth failure behavior. Do not activate hooks or automatically start MCP during source installation. MCP/CLI service requests were not run; no account ready claim. price reads IaC from stdin; use native stdin pipe rather than POSIX heredoc on Windows. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
