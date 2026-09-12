# Third-party notices — finem-expo

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

## expo

- Repository: https://github.com/expo/skills
- Revision: `f27959a9f0ee178def45bc974a26ed9090ac4b17`
- License: MIT
- License files: `upstream/expo/LICENSE`, `upstream/expo/plugins/expo/LICENSE`, `upstream/expo/plugins/expo/skills/expo-animation/LICENSE`
- Reviewed: 2026-09-11

  Completes explicitly missing sibling capabilities of the already bundled project-structure and native-ui skills. Project Expo SDK/packages via expo install; many examples require SDK 56+, Reanimated 4, matching worklets and Gesture Handler. Native iOS-only surfaces, NativeTabs unstable import, iOS 18+/26-specific features must be feature/platform gated. Real device release build needed for motion verification. Retain baseline two Expo entries and pin unchanged. Expo Router owns Expo navigation; do not activate Callstack react-navigation there. Feedback submission commands contact Expo; never execute without explicit messaging authorization. Named optional expo-skill-feedback is not a required source import.
