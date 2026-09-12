# Third-party notices — finem-browser-playwright

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## playwright

- Repository: https://github.com/microsoft/playwright-cli
- Revision: `655530f6d0dc71a0d6bf46ae165877d3c7311099`
- License: Apache-2.0
- License files: `upstream/playwright/LICENSE`
- Reviewed: 2026-09-11

  Original complete research-pinned skill and nine references. Git source revision has alpha runtime dependencies; released CLI compatibility is separately documented in docs/upstream-expansion.md. Use the explicitly installed project-local L11 runtime; do not execute upstream global npm installation instructions. Browser binaries are separate.
