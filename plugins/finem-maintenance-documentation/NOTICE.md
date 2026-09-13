# Third-party notices — finem-maintenance-documentation

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

## kotlin

- Repository: https://github.com/Kotlin/kotlin-agent-skills
- Revision: `c2f90697bf71966a117a13340d5fff787f004140`
- License: Apache-2.0
- License files: `upstream/kotlin/LICENSE`
- Reviewed: 2026-09-11

  First-party KMP compatibility, Java conversion and measured Native build optimization. Kotlin/Gradle/JDK and project wrapper; macOS/Xcode for native iOS builds. Bash needed for optional analyze-project.sh and audit-native-build.sh; inspect directly on Windows if absent. Separate KMP AGP9 module split from ordinary Android AGP upgrade. Preserve release build behavior and measure same command/state before and after. Skip unrelated backend JPA/toolchain experiments; no global runtime installs or CI cache mutations during source import.

## pm

- Repository: https://github.com/phuryn/pm-skills
- Revision: `18468a95b427e70e258b51389796367c6f684e7d`
- License: MIT
- License files: `upstream/pm/LICENSE`
- Reviewed: 2026-09-11

  Original three self-contained product research skills; no executable helpers. Supply actual product evidence and user context. Added product hypothesis, requirements, acceptance, reviewability and cohort specialists preserve original bytes. Inputs and example numerical targets are not measured evidence. Generic statistical A/B analysis and ambiguous confidence/risk formulas were reviewed but not selected. Cohort analysis must distinguish incomplete observation windows from churn; intent audit requires actual project documentation. Use existing project docs rather than invent evidence or register source slash-command routers.

## prisma

- Repository: https://github.com/prisma/skills
- Revision: `1123817e60d15ca0f3af91878923241dee7e3b09`
- License: MIT
- License files: `upstream/prisma/LICENSE`
- Reviewed: 2026-09-11

  Four skills with full command/client/provider/migration references; metadata baseline7.6.0. Match Prisma CLI/client/adapter versions explicitly; Node20.19+ for v7 skill; ESM/TS details; MongoDB route stays v6. Registry latest prisma8.0.0-rc.13 mismatches client latest7.10.0; never install latest pair blindly. Do not route MongoDB through v7 SQL adapter/upgrade workflow. Destructive reset/push/dev migrations must remain explicit and environment-scoped. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. MongoDB migration companion is included intact but activated only for explicit MongoDB upgrade work: staying on Prisma 6 is valid, Prisma Next is early access, and a provider change is never automatic. Client/CLI must match project versions; observed prisma latest 8.0.0-rc.13 differs from client latest 7.10.0.

## pulumi

- Repository: https://github.com/pulumi/agent-skills
- Revision: `e57d1d117b585a3b5bf6bc612ff327acfa89bd29`
- License: Apache-2.0
- License files: `upstream/pulumi/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## superpowers

- Repository: https://github.com/obra/superpowers
- Revision: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- License: MIT
- License files: `upstream/superpowers/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## trailofbits

- Repository: https://github.com/trailofbits/skills
- Revision: `321ccfe628eca0d314b0ee4eaffcdd8a05639aaf`
- License: CC-BY-SA-4.0
- License files: `upstream/trailofbits/LICENSE`
- Reviewed: 2026-09-11

  Original complete property-testing references and supply-chain collector/render scripts with tests, Python dependency metadata and uv.lock. CC-BY-SA-4.0 source is redistributed unchanged with attribution; it is not covered by the L11 MIT license. Collector needs Python >=3.11, uv/locked dependencies and network registries; authenticated gh improves GitHub coverage. Unavailable data must remain unassessable. Security consultancy's original auditor skills, executable helpers and test fixtures; preserve separate attribution/share-alike license. One-level cross-file limit must be reported. Static guidance, not runtime exploit assurance. Agent reference is a support dependency; ship as inert source, not registered top-level agent. Execution/probing must follow caller's task scope. Only selected specialist directories and supporting source are shipped; no source plugin, root router, hooks, agent registration or MCP is activated. Cloud/account runtimes remain separate requirements.

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
