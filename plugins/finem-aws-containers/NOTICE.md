# Third-party notices — finem-aws-containers

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## aws

- Repository: https://github.com/aws/agent-toolkit-for-aws
- Revision: `68d9e8541c45afd2510662bcea69fe1e433ea9db`
- License: Apache-2.0
- License files: `upstream/aws/LICENSE`, `upstream/aws/NOTICE`
- Reviewed: 2026-09-11

  Official AWS-supported toolkit; AWS README claims end-to-end evaluations, not independently executed here. Git pinned content differs materially from cached Exa excerpt. Do not install top-level AWS rules, routers or MCP automatically. Exa returned older ECS-only body: selected body is exact Git pin and metadata version2. AWS service quotas/version claims require current docs at invocation. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
