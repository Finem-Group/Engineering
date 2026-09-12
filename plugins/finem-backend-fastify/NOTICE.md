# Third-party notices — finem-backend-fastify

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## fastify

- Repository: https://github.com/mcollina/skills
- Revision: `856efd268ae85482d882f3d0bed869fd020b5c06`
- License: MIT
- License files: `upstream/fastify/LICENSE`
- Reviewed: 2026-09-11

  Entry plus 19 detailed rules including schema, serialization, DI/plugins, hooks, auth, inject tests and deployment. Project Fastify 5; Node and installed TypeScript strategy. Type stripping advice depends on actual Node support. Description includes generic REST/backend triggers; L11 must require Fastify project evidence. Auth recipes include illustrative unimplemented validateCredentials; not complete identity provider. Tests in rules are examples, not a passed runtime suite. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
