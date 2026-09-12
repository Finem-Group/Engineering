# Third-party notices — finem-react-native-performance

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## callstack

- Repository: https://github.com/callstackincubator/agent-skills
- Revision: `2766baa46ca0fe7c16cc5ab4d0077ccec2e95fb9`
- License: MIT
- License files: `upstream/callstack/LICENSE`
- Reviewed: 2026-09-11

  Adds device, native, JS-thread, memory, startup and bundle diagnosis beyond Expo UI instructions. Existing RN/Expo project and matching Hermes/toolchains; iOS profiling needs macOS/Xcode; Android profiling needs SDK/device. Callstack owns measured mobile performance; Expo owns Expo layout/router/animation implementation. No generic lifecycle takeover.
