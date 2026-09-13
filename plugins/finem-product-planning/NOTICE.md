# Third-party notices — finem-product-planning

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

## pm

- Repository: https://github.com/phuryn/pm-skills
- Revision: `18468a95b427e70e258b51389796367c6f684e7d`
- License: MIT
- License files: `upstream/pm/LICENSE`
- Reviewed: 2026-09-11

  Original three self-contained product research skills; no executable helpers. Supply actual product evidence and user context. Added product hypothesis, requirements, acceptance, reviewability and cohort specialists preserve original bytes. Inputs and example numerical targets are not measured evidence. Generic statistical A/B analysis and ambiguous confidence/risk formulas were reviewed but not selected. Cohort analysis must distinguish incomplete observation windows from churn; intent audit requires actual project documentation. Use existing project docs rather than invent evidence or register source slash-command routers.

## posthog

- Repository: https://github.com/PostHog/skills
- Revision: `a49f0145ff5d9d75b49c147a807d786d6ca8334e`
- License: MIT
- License files: `upstream/posthog/LICENSE`
- Reviewed: 2026-09-11

  Original PostHog instrumentation, query and survey skills. PostHog service operations require a separately connected optional account/MCP integration.

## superpowers

- Repository: https://github.com/obra/superpowers
- Revision: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- License: MIT
- License files: `upstream/superpowers/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.
