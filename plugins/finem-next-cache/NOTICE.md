# Third-party notices — finem-next-cache

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## next

- Repository: https://github.com/vercel/next.js
- Revision: `d155ba9ebfffe4742efefda8d68c2e0e8e490924`
- License: MIT
- License files: `upstream/next/license.md`
- Reviewed: 2026-09-11

  Official deterministic instant-navigation optimizer, scoped to apps already building with Cache Components. Baseline React best practices and installed Next docs retained. Activate only for an existing Next >=16.3 app already building with cacheComponents. Project-local @next/playwright must match the installed Next release line, alongside @playwright/test. npm latest Next and @next/playwright were both 16.3.4; Node >=20.9. Reuse the project Playwright harness and production-like local test build. No agent-browser runtime, global install or deployment is required by the selected optimizer. Do not bundle retired next-best-practices. Installed node_modules/next/dist/docs remains the version authority. Exclude next-cache-components-adoption and next-dev-loop: adoption SKILL.md lines 84-98 requires attempting next-dev-loop and only permits fallback for a real blocker; dev-loop lines 31-50 mandates Next16.3+ Turbopack and agent-browser>=0.31.1, and lines 55-94 require restored headed React-DevTools browser plus /_next/mcp. Existing browser-playwright is not that runtime. Optimizer SKILL.md lines 40-53 explicitly lets the project own its Playwright rig. Lines 140-159 restrict the workflow to an app that already builds with Cache Components. Its adoption link is outside the selected activation scope. Testing API only enabled in explicit test builds and never production. Older apps or cache adoption require a separate migration decision; no automatic framework upgrade through this pack. Advanced optional optimization, not generic Next frontend coverage. Adoption/dev-loop remain reviewed but deferred until a separately pinned, portable, smoke-tested second browser runtime is deliberately selected.
