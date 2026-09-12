# Third-party notices — finem-jobs-trigger

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## trigger

- Repository: https://github.com/triggerdotdev/trigger.dev
- Revision: `33cf5701b4536012d45e365761c4a36067ea5f1d`
- License: MIT AND Apache-2.0
- License files: `upstream/trigger/packages/trigger-sdk/LICENSE`, `upstream/trigger/packages/cli-v3/LICENSE`, `upstream/trigger/LICENSE`
- Reviewed: 2026-09-11

  SDK full authoring skill; setup skill; CLI authoring entry is thin pointer and should not replace full SDK source. Matching SDK/build/CLI observed4.5.16 Node>=18.20; local SDK bundled docs preferred; cloud project or self-hosted infrastructure for executions. Mirror triggerdotdev/skills lacks LICENSE; canonical package-level MIT license verified. Full skill sources frontmatter references monorepo docs/*.mdx: preserve those source docs if promising offline completeness. No deploy/login/project provisioning without task scope; no raw secrets in task logs. Never Promise.all SDK waits; inspect Result.ok; runtime idempotency scopes vary by version. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Package skill directories are MIT under their respective package LICENSE files; repository docs are Apache-2.0 under root LICENSE. Both terms and notices are retained. Use the full SDK authoring skill, not the thin CLI pointer. Source {{TRIGGER_SDK_VERSION}} placeholders remain unchanged; choose a tested project SDK/CLI/build combination. Secrets go only in local environment/secret stores, never chat.
