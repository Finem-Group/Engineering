# Third-party notices — finem-vue

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

## vue

- Repository: https://github.com/vuejs-ai/skills
- Revision: `c9d355ff23f654309dd02006be671859df0a134c`
- License: MIT
- License files: `upstream/vue/LICENSE`
- Reviewed: 2026-09-11

  Fills a genuine non-React framework gap with progressive references for implementation, routing, debugging and component tests. Existing Vue 3 project, matching Vue Router/Vitest/Vue Test Utils; vue-tsc and project build. Vue core is the primary Vue skill; do not also activate antfu vue or its copied vue-best-practices. Composition API defaults yield to an existing Options API project. Route testing through established Playwright QA owner; do not activate a second global workflow router.
