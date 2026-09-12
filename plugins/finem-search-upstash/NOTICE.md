# Third-party notices — finem-search-upstash

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## upstash

- Repository: https://github.com/upstash/skills
- Revision: `dccc0521a637fcc18395c41992703337bea6baef`
- License: MIT
- License files: `upstream/upstash/LICENSE`
- Reviewed: 2026-09-11

  Redis substantial data structures/patterns/performance references; QStash/Workflow/search smaller entrypoints backed by extensive local docs. HTTP Redis with credentials; QStash local server possible; SDK/runtime-specific. Do not substitute REST Redis for BullMQ TCP requirement. No temporary start-redis POST without explicit resource scope. Unsafe basic lock release unconditional DEL precedes safer token/Lua pattern; correctness-critical lock fixture mandatory. Upstash Search is distinct from Redis FT.SEARCH, ordinary Redis and vector database. Provider-agnostic Redis work should use installed client and official Redis docs. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
