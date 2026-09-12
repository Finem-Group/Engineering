# Third-party notices — finem-search-algolia

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## algolia

- Repository: https://github.com/algolia/skills
- Revision: `ded7ff387b1099edc6218e002a7d5fda13390d26`
- License: MIT
- License files: `upstream/algolia/LICENSE`
- Reviewed: 2026-09-11

  Full indexing contract/record-grain modeling, relevance settings, secured filter and evidence QA guides, local references and eval cases. Offline design needs sample records; live Algolia account/CLI/MCP only when relevant operations are authorized. Companion CLI/MCP/UI references are optional external capabilities; do not imply they are bundled/running. No default account provisioning, crawling or writes; selected guides explicitly delegate those operations. Do not activate for ordinary SQL domain modeling or non-Algolia search. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
