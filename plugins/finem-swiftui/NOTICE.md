# Third-party notices — finem-swiftui

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

## swiftui

- Repository: https://github.com/twostraws/swiftui-agent-skill
- Revision: `be297ff80dddec529af1f9b1f1f114aab6c9d11c`
- License: MIT
- License files: `upstream/swiftui/LICENSE`
- Reviewed: 2026-09-11

  Adds an actual native Apple UI specialist, covering API modernization, state, navigation, accessibility and performance. macOS/Xcode and matching iOS SDK for builds; source defaults Swift >=6.2 and iOS26 for new apps; preserve existing deployment target. Use root canonical skill plus direct references only. Exclude nested swiftui-pro/skills and plugin registration. Do not label Windows static review a native build. SwiftUI is a separate primary UI framework.
