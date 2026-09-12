---
name: finem-verify
description: "Use for the verify phase: ci, testing, browser qa, accessibility, security, performance, code review/quality gates. Work through the Finem core using original upstream specialists."
---

# Finem Verify

Engineering phase verify: ci, testing, browser qa, accessibility, security, performance, code review/quality gates. Uses the shared original skill library in finem-core.

## Phase scope

- CI (`ci`)
- Testing (`testing`)
- Browser QA (`browser-qa`)
- Accessibility (`accessibility`)
- Security (`security`)
- Performance (`performance`)
- Code review/quality gates (`code-review-quality-gates`)

## Use the shared workflow

Locate the installed `finem-core` using the host's available skill path; do not assume it is a sibling
folder. Open its `skills/finem-engineering/SKILL.md`. If the core is missing or its version differs from
this plugin, report that dependency before proceeding with this entrypoint.

In plugin mode, supply this phase root to the core helper using `--phase` and select `finem-verify`.
Include installed prerequisite phase roots; the helper reports any required one that is absent. In CLI
project mode, preserve the existing `.l11/config.json` profile and extension selection.

This phase's `capabilities.json` lists its baseline capabilities and related internal option IDs.
Its entrypoint paths explicitly belong to `finem-core`, which contains the complete original source
bodies, support files and licenses. Read the originals resolved by the core for the actual module.
Framework/provider options activate only when selected; installation alone activates none of them.

Return work and evidence to the single coordinator. This phase has no global router, hooks or automatic
runtime installation. Review relevant requirements and evidence without restarting earlier completed work.
