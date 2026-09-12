# Third-party notices — finem-auth-auth0

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## auth0

- Repository: https://github.com/auth0/agent-skills
- Revision: `f135610540ea41e4d99882dc1f06162030c7340b`
- License: Apache-2.0
- License files: `upstream/auth0/LICENSE`
- Reviewed: 2026-09-11

  404-line intent/framework/tool router plus extensive integration references; activation/behavioral eval harness present in repo. Selected Auth0 tenant and SDK; CLI/MCP optional for live config. Source metadata lists macOS/Linux only; Windows CLI not validated here. Description says use even without Auth0 mention; prohibit global provider capture, select only after project/user choice. Do not import marketplace/MCP registration; auth flow code can be authored without live tenant mutation. Include selected directory intact; acquire upstream evals separately if running. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
