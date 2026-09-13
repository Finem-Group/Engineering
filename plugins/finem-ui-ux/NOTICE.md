# Third-party notices — finem-ui-ux

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

## angular

- Repository: https://github.com/angular/angular
- Revision: `ae33a5f55ec1d31ea4e216b32cd1ddc535a3b331`
- License: MIT
- License files: `upstream/angular/LICENSE`
- Reviewed: 2026-09-11

  Comprehensive first-party Angular app guidance, rather than a third-party kitchen-sink framework skill. Project Angular CLI, matching Angular version, ng build. Signal Forms defaults are gated to Angular 22+; older app conventions retained. Do not include Angular repository contributor .agent skills or additional angular-new-app entrypoint initially; developer already covers setup. New-project latest/global CLI examples are source instructions, not automatic installs; existing project version decides.

## expo

- Repository: https://github.com/expo/skills
- Revision: `f27959a9f0ee178def45bc974a26ed9090ac4b17`
- License: MIT
- License files: `upstream/expo/LICENSE`, `upstream/expo/plugins/expo/LICENSE`, `upstream/expo/plugins/expo/skills/expo-animation/LICENSE`
- Reviewed: 2026-09-11

  Completes explicitly missing sibling capabilities of the already bundled project-structure and native-ui skills. Project Expo SDK/packages via expo install; many examples require SDK 56+, Reanimated 4, matching worklets and Gesture Handler. Native iOS-only surfaces, NativeTabs unstable import, iOS 18+/26-specific features must be feature/platform gated. Real device release build needed for motion verification. Retain baseline two Expo entries and pin unchanged. Expo Router owns Expo navigation; do not activate Callstack react-navigation there. Feedback submission commands contact Expo; never execute without explicit messaging authorization. Named optional expo-skill-feedback is not a required source import.

## impeccable

- Repository: https://github.com/pbakaus/impeccable
- Revision: `cb56ed6c19a07329a9fa0cd4e657bee040156593`
- License: Apache-2.0
- License files: `upstream/impeccable/LICENSE`, `upstream/impeccable/NOTICE.md`
- Reviewed: 2026-09-11

  Complete compiled portable skill with references, scripts and notices. Launcher engine 0.1.5 is a separate download; invocation may download it. Windows launcher execution has not been live-tested.

## pm

- Repository: https://github.com/phuryn/pm-skills
- Revision: `18468a95b427e70e258b51389796367c6f684e7d`
- License: MIT
- License files: `upstream/pm/LICENSE`
- Reviewed: 2026-09-11

  Original three self-contained product research skills; no executable helpers. Supply actual product evidence and user context. Added product hypothesis, requirements, acceptance, reviewability and cohort specialists preserve original bytes. Inputs and example numerical targets are not measured evidence. Generic statistical A/B analysis and ambiguous confidence/risk formulas were reviewed but not selected. Cohort analysis must distinguish incomplete observation windows from churn; intent audit requires actual project documentation. Use existing project docs rather than invent evidence or register source slash-command routers.

## shadcn

- Repository: https://github.com/shadcn-ui/ui
- Revision: `3ba91b1cc83e1bbe4ab35a422ff2a694849c5048`
- License: MIT
- License files: `upstream/shadcn/LICENSE.md`
- Reviewed: 2026-09-11

  Original complete shadcn skill, rules, CLI/MCP references, evaluation data and assets. CLI commands require a compatible project-local shadcn runtime and components.json; upstream latest examples do not pin runtime. Agent metadata is inert vendored source.

## swiftui

- Repository: https://github.com/twostraws/swiftui-agent-skill
- Revision: `be297ff80dddec529af1f9b1f1f114aab6c9d11c`
- License: MIT
- License files: `upstream/swiftui/LICENSE`
- Reviewed: 2026-09-11

  Adds an actual native Apple UI specialist, covering API modernization, state, navigation, accessibility and performance. macOS/Xcode and matching iOS SDK for builds; source defaults Swift >=6.2 and iOS26 for new apps; preserve existing deployment target. Use root canonical skill plus direct references only. Exclude nested swiftui-pro/skills and plugin registration. Do not label Windows static review a native build. SwiftUI is a separate primary UI framework.

## vercel

- Repository: https://github.com/vercel-labs/agent-skills
- Revision: `063bee94c3f4df8453406c830b0a7df0f2860278`
- License: MIT
- License files: `upstream/vercel/README.md`
- Reviewed: 2026-09-11

  Original React/Next, composition and web-design skill directories. Repository README and React metadata declare MIT; no standalone upstream LICENSE is tracked. Offline web guidelines are provided by the web-guidelines dependency.

## web-guidelines

- Repository: https://github.com/vercel-labs/web-interface-guidelines
- Revision: `e3d624baaf29dc1fc645aff3e38f03e564d2d6b1`
- License: MIT
- License files: `upstream/web-guidelines/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## wshobson

- Repository: https://github.com/wshobson/agents
- Revision: `a30778f8c4e6b0a87567941b7cca4f534bf642b6`
- License: MIT
- License files: `upstream/wshobson/LICENSE`
- Reviewed: 2026-09-11

  Original specialist directories with substantive references/examples. Framework/cloud examples must be adapted to the actual project. Retirement is composed partial coverage, not a complete decommissioning runbook. Established specialist skill collection; content and complete templates/scripts inspected; not Kubernetes vendor ownership. CNI must implement NetworkPolicy; YAML validity does not prove enforcement. Account/cluster operations require separately authorized credentials. Upstream examples include curl-to-sudo bootstrap, auto-prune, sync --force; never auto-run during installation. Git reversal alone does not prove data rollback. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

## xylex

- Repository: https://github.com/xylex-group/skills
- Revision: `53c3a7758bd1e0e5bf6564c77fe3f7d075c91846`
- License: MIT
- License files: `upstream/xylex/LICENSE`
- Reviewed: 2026-09-12

  Ten complete original XYLEX skill directories, including local references, Python helpers, CSS tokens and the MIT license. Only explicitly selected architecture, code-audit and web UI-polish entrypoints are mapped. No XYLEX root router, hooks, Grok workflows or duplicate TDD/Rust skills are installed. Resolve helpers relative to the original skill directory and run them against the intended project. Python helpers require Python 3; website token extraction requires the separate extract-design-system CLI plus Playwright/Chromium, which these source bundles do not install. Keep existing project design tokens authoritative; invoke the requested specialist without stacking competing motion or review workflows. CSS motion specialists are web-only. The audit helpers also require Git and blast-zone search requires rg. The original blastzone_metrics.py uses POSIX path separators when filtering definitions/test callers: Windows aggregate caller counts can be inaccurate. Verify actual caller files or use a POSIX environment; do not treat those counts as authoritative.


Original UI specialists are bundled under skills/ from XYLEX Group (MIT). See ui-source.lock.json for the Git revision and SHA-256 hashes, and licenses/XYLEX-LICENSE.txt for the original license. Finem entrypoint and metadata are MIT licensed. Core-backed capability mappings are optional and keep their separate upstream notices.
