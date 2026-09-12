# Third-party notices — finem-kotlin-mobile

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## kotlin

- Repository: https://github.com/Kotlin/kotlin-agent-skills
- Revision: `c2f90697bf71966a117a13340d5fff787f004140`
- License: Apache-2.0
- License files: `upstream/kotlin/LICENSE`
- Reviewed: 2026-09-11

  First-party KMP compatibility, Java conversion and measured Native build optimization. Kotlin/Gradle/JDK and project wrapper; macOS/Xcode for native iOS builds. Bash needed for optional analyze-project.sh and audit-native-build.sh; inspect directly on Windows if absent. Separate KMP AGP9 module split from ordinary Android AGP upgrade. Preserve release build behavior and measure same command/state before and after. Skip unrelated backend JPA/toolchain experiments; no global runtime installs or CI cache mutations during source import.
