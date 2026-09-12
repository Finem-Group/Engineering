# Third-party notices — finem-observability

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## grafana

- Repository: https://github.com/grafana/skills
- Revision: `51d33e71e191b409bbd25fc7be2684c610d18166`
- License: Apache-2.0
- License files: `upstream/grafana/LICENSE`
- Reviewed: 2026-09-11

  Original complete OTel guidance and k6 references/examples/SETUP. k6 executable, protocol services and optional xk6 extensions are separate runtime requirements. Upstream docs CLI uses POSIX script; use documented web fallback on Windows. External example targets/cloud runs are not executed during bundling. Official Grafana product-maintained original skill repository; reused existing verified baseline pin. SLO examples reference recording rules not all defined in snippet; not a complete deployable rule file. No real alerts, contact points or paging were created. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
