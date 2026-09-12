# Third-party notices — finem-email-resend

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## resend

- Repository: https://github.com/resend/resend-skills
- Revision: `2a9310fb040fd06a17ce1e8e7aea478d79daea62`
- License: MIT
- License files: `upstream/resend/LICENSE`
- Reviewed: 2026-09-11

  355-line multi-language API guidance plus send/receive/webhook/resource references and skill eval JSON in repo. Existing Resend SDK; observed6.27.0 Node>=20. Live sends require explicit communication authorization and configured domain. Use {data,error} and idempotencyKey; signature verify raw webhook payload. 24-hour dedupe limit; event-level durable outbox needed beyond window. Do not auto-upgrade SDK just because source says latest; version-gate APIs. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. The separate generic email-best-practices skill is intentionally excluded because its SDK error/idempotency examples need review. Included provider skill and original eval fixtures use the Resend API contract; no sends execute during bundling.
