# Third-party notices — finem-storage-neon

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## neon

- Repository: https://github.com/neondatabase/agent-skills
- Revision: `2e0da3a1653bcdd227565ac14bb3e9e453a8b854`
- License: MIT
- License files: `upstream/neon/LICENSE`
- Reviewed: 2026-09-11

  Parent overview plus detailed Postgres, branching, object-storage routes; diagnostics, pooled/direct connections, provider-specific limitations. Neon account/selected project for remote calls; source inspection and branch plan work offline. HTTP/WS/pg differ by runtime. Parent neon required by postgres and siblings; retain dependency explicitly. Provider must not replace ORM choice; ignore blanket always-pair-with-ORM when project uses SQL. No automatic claimable resources or production branch cloning containing PII. Many refs are live docs; source portability does not equal offline API documentation. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
