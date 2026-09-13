# Third-party notices — finem-infrastructure-devops

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## addy

- Repository: https://github.com/addyosmani/agent-skills
- Revision: `6ca0cd7db39b41b1c37e26d335c507ee92382c6d`
- License: MIT
- License files: `upstream/addy/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## aws

- Repository: https://github.com/aws/agent-toolkit-for-aws
- Revision: `68d9e8541c45afd2510662bcea69fe1e433ea9db`
- License: Apache-2.0
- License files: `upstream/aws/LICENSE`, `upstream/aws/NOTICE`
- Reviewed: 2026-09-11

  Official AWS-supported toolkit; AWS README claims end-to-end evaluations, not independently executed here. Git pinned content differs materially from cached Exa excerpt. Do not install top-level AWS rules, routers or MCP automatically. Exa returned older ECS-only body: selected body is exact Git pin and metadata version2. AWS service quotas/version claims require current docs at invocation. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## cloudflare

- Repository: https://github.com/cloudflare/skills
- Revision: `b052c32bab7dd493513260228a36c88294f343f1`
- License: Apache-2.0
- License files: `upstream/cloudflare/LICENSE`
- Reviewed: 2026-09-11

  Original complete selected Workers, Wrangler and Durable Objects skills and references. Project-local Wrangler and matching compatibility settings are required; deploy/resource operations require separately authorized Cloudflare credentials. No cloud setup or global routers run during bundling.

## gstack

- Repository: https://github.com/garrytan/gstack
- Revision: `71f6048e8ada25180e61438abc1d98cb151fe9a7`
- License: MIT
- License files: `upstream/gstack/LICENSE`, `upstream/gstack/NOTICE.md`
- Reviewed: 2026-09-11

  Original gstack source snapshot. L11 maps upstream gstack paths to .l11/upstream/gstack and owns routing. Browser/runtime builds need Bash, Bun, dependencies and Chromium; Windows browser also needs the Node server build. Setup scripts are shipped as source, never automatically executed or registered. The legacy connect-chrome directory symlink is omitted; its open-gstack-browser target is included as source. Git ignore metadata is omitted so npm cannot suppress original runtime helpers during packaging.

## infracost

- Repository: https://github.com/infracost/agent-skills
- Revision: `2ee419ceb8a9add56ba5c525d5b2a93ce0ad2e70`
- License: Apache-2.0
- License files: `upstream/infracost/LICENSE`
- Reviewed: 2026-09-11

  Official Infracost product-maintained skills; concrete typed MCP and CLI bindings, version floor, org/auth failure behavior. Do not activate hooks or automatically start MCP during source installation. MCP/CLI service requests were not run; no account ready claim. price reads IaC from stdin; use native stdin pipe rather than POSIX heredoc on Windows. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## pulumi

- Repository: https://github.com/pulumi/agent-skills
- Revision: `e57d1d117b585a3b5bf6bc612ff327acfa89bd29`
- License: Apache-2.0
- License files: `upstream/pulumi/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## terraform

- Repository: https://github.com/hashicorp/agent-skills
- Revision: `c2d65dfe492f74d360d35b859b88932222470bd8`
- License: MPL-2.0
- License files: `upstream/terraform/LICENSE`
- Reviewed: 2026-09-11

  Original Terraform style/security guidance and full test references. MPL-2.0 source remains unchanged and separately licensed. Terraform test requires >=1.6; provider mocks require >=1.7. Providers and account credentials are project/runtime requirements.

## trailofbits

- Repository: https://github.com/trailofbits/skills
- Revision: `321ccfe628eca0d314b0ee4eaffcdd8a05639aaf`
- License: CC-BY-SA-4.0
- License files: `upstream/trailofbits/LICENSE`
- Reviewed: 2026-09-11

  Original complete property-testing references and supply-chain collector/render scripts with tests, Python dependency metadata and uv.lock. CC-BY-SA-4.0 source is redistributed unchanged with attribution; it is not covered by the L11 MIT license. Collector needs Python >=3.11, uv/locked dependencies and network registries; authenticated gh improves GitHub coverage. Unavailable data must remain unassessable. Security consultancy's original auditor skills, executable helpers and test fixtures; preserve separate attribution/share-alike license. One-level cross-file limit must be reported. Static guidance, not runtime exploit assurance. Agent reference is a support dependency; ship as inert source, not registered top-level agent. Execution/probing must follow caller's task scope. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## wshobson

- Repository: https://github.com/wshobson/agents
- Revision: `a30778f8c4e6b0a87567941b7cca4f534bf642b6`
- License: MIT
- License files: `upstream/wshobson/LICENSE`
- Reviewed: 2026-09-11

  Original specialist directories with substantive references/examples. Framework/cloud examples must be adapted to the actual project. Retirement is composed partial coverage, not a complete decommissioning runbook. Established specialist skill collection; content and complete templates/scripts inspected; not Kubernetes vendor ownership. CNI must implement NetworkPolicy; YAML validity does not prove enforcement. Account/cluster operations require separately authorized credentials. Upstream examples include curl-to-sudo bootstrap, auto-prune, sync --force; never auto-run during installation. Git reversal alone does not prove data rollback. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
