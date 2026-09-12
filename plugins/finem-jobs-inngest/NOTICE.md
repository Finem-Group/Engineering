# Third-party notices — finem-jobs-inngest

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## inngest

- Repository: https://github.com/inngest/inngest-skills
- Revision: `ff42436bcedfb262d6a377571ce64a0d78d386a5`
- License: Apache-2.0
- License files: `upstream/inngest/LICENSE`
- Reviewed: 2026-09-11

  Five deep entries (~200-500 lines each); repo eval/runner and prompt catalog present. TypeScript-specific; installed inngest major (observed4.20.0) and local Dev Server for runtime tests, credentials for Cloud. 24-hour event dedupe is not an unlimited business once-only guarantee. Select one durable job platform per project rather than activating all provider alternatives. Read installed major-specific API/migration docs; tests not executed here. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Shared skills/references/expressions.md is required and included. Preserve the upstream step-execution.md checkpointing link defect as a documented navigation caveat; the actual checkpointing.md file is present. Setup/CLI instructions using global installs, latest, or INNGEST_DEV=1 must be interpreted through the project-local pinned runtime and local-only development settings. Current observed SDK 4.20.0 requires Node >=20 despite source setup saying Node 18+.
