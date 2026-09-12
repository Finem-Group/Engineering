# Third-party notices — finem-backend-hono

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## hono

- Repository: https://github.com/honojs/skills
- Revision: `f916476e71029ebf62160c3286550a99f0b6c687`
- License: MIT
- License files: `upstream/hono/LICENSE`
- Reviewed: 2026-09-11

  601-line full API skill: middleware, validation, streaming, RPC, app.request, CLI workflow. Project runtime Hono 4; optional Node >=22.13 CLI; Workers testing needs project Wrangler/workerd. CLI instructions use @hono/cli@next; registry latest 0.1.11 differs from next 0.2.0-next.7. Basic auth sample only checks header presence; never interpret as complete authentication. Use existing runtime adapter and do not choose Workers automatically. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
