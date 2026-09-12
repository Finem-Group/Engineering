# Third-party notices — finem-android-ui

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

## android

- Repository: https://github.com/android/skills
- Revision: `bac232fd02b0855df9275281a2a7a47643768719`
- License: Apache-2.0
- License files: `upstream/android/LICENSE.txt`
- Reviewed: 2026-09-11

  Official targeted Android navigation, insets and View-to-Compose migration coverage. JDK, Gradle wrapper, Android SDK and target-device/emulator; Navigation3 migration only when chosen. Match targetSdk/Compose/Navigation versions. Never auto-migrate a View application merely because Compose references exist. Source nesting triggers Windows MAX_PATH in a deep directory: ingestion/materialization needs long-path-safe I/O. One upstream dead README.md link in a deep-link recipe is absent from the Git tree; document it as upstream defect, not a missing vendored file.
