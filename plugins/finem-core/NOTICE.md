# Third-party notices — finem-core

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

## gstack

- Repository: https://github.com/garrytan/gstack
- Revision: `71f6048e8ada25180e61438abc1d98cb151fe9a7`
- License: MIT
- License files: `upstream/gstack/LICENSE`, `upstream/gstack/NOTICE.md`
- Reviewed: 2026-09-11

  Original gstack source snapshot. L11 maps upstream gstack paths to .l11/upstream/gstack and owns routing. Browser/runtime builds need Bash, Bun, dependencies and Chromium; Windows browser also needs the Node server build. Setup scripts are shipped as source, never automatically executed or registered. The legacy connect-chrome directory symlink is omitted; its open-gstack-browser target is included as source. Git ignore metadata is omitted so npm cannot suppress original runtime helpers during packaging.

## impeccable

- Repository: https://github.com/pbakaus/impeccable
- Revision: `cb56ed6c19a07329a9fa0cd4e657bee040156593`
- License: Apache-2.0
- License files: `upstream/impeccable/LICENSE`, `upstream/impeccable/NOTICE.md`
- Reviewed: 2026-09-11

  Complete compiled portable skill with references, scripts and notices. Launcher engine 0.1.5 is a separate download; invocation may download it. Windows launcher execution has not been live-tested.

## posthog

- Repository: https://github.com/PostHog/skills
- Revision: `a49f0145ff5d9d75b49c147a807d786d6ca8334e`
- License: MIT
- License files: `upstream/posthog/LICENSE`
- Reviewed: 2026-09-11

  Original PostHog instrumentation, query and survey skills. PostHog service operations require a separately connected optional account/MCP integration.

## pulumi

- Repository: https://github.com/pulumi/agent-skills
- Revision: `e57d1d117b585a3b5bf6bc612ff327acfa89bd29`
- License: Apache-2.0
- License files: `upstream/pulumi/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## supabase

- Repository: https://github.com/supabase/agent-skills
- Revision: `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- License: MIT
- License files: `upstream/supabase/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## superpowers

- Repository: https://github.com/obra/superpowers
- Revision: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- License: MIT
- License files: `upstream/superpowers/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## vercel

- Repository: https://github.com/vercel-labs/agent-skills
- Revision: `063bee94c3f4df8453406c830b0a7df0f2860278`
- License: MIT
- License files: `upstream/vercel/README.md`
- Reviewed: 2026-09-11

  Original React/Next, composition and web-design skill directories. Repository README and React metadata declare MIT; no standalone upstream LICENSE is tracked. Offline web guidelines are provided by the web-guidelines dependency.

## web-guidelines

- Repository: https://github.com/vercel-labs/web-interface-guidelines
- Revision: `e3d624baaf29dc1fc645aff3e38f03e564d2d6b1`
- License: MIT
- License files: `upstream/web-guidelines/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## wshobson

- Repository: https://github.com/wshobson/agents
- Revision: `a30778f8c4e6b0a87567941b7cca4f534bf642b6`
- License: MIT
- License files: `upstream/wshobson/LICENSE`
- Reviewed: 2026-09-11

  Original specialist directories with substantive references/examples. Framework/cloud examples must be adapted to the actual project. Retirement is composed partial coverage, not a complete decommissioning runbook. Established specialist skill collection; content and complete templates/scripts inspected; not Kubernetes vendor ownership. CNI must implement NetworkPolicy; YAML validity does not prove enforcement. Account/cluster operations require separately authorized credentials. Upstream examples include curl-to-sudo bootstrap, auto-prune, sync --force; never auto-run during installation. Git reversal alone does not prove data rollback. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.
