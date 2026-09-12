---
name: finem-architecture
description: "Use for Architecture & API Design: architecture, adrs, domain modeling, api contracts. Work through the Finem core using original upstream specialists."
---

# Finem Architecture & API Design

## Direction and expected outcomes

Define system boundaries, domain rules and clear interfaces so implementation can evolve without spreading coupling.

- System and module boundaries
- Domain model and terminology
- Architecture decision records
- API contracts and integration boundaries

## Capability scope

- Architecture (`architecture`)
- ADRs (`adrs`)
- Domain modeling (`domain-modeling`)
- API contracts (`api-contracts`)

## Use the shared workflow

Locate the installed `finem-core` using the host's available skill path; do not assume it is a sibling
folder. Open its `skills/finem-engineering/SKILL.md`. If the core is missing or its version differs from
this plugin, report that dependency before proceeding with this entrypoint.

In plugin mode, supply this area root to the core helper using `--area` and select `finem-architecture`.
Include installed prerequisite area roots; the helper reports any required one that is absent. In CLI
project mode, preserve the existing `.l11/config.json` profile and extension selection.

This area's `capabilities.json` lists its baseline capabilities and related internal option IDs.
Its entrypoint paths explicitly belong to `finem-core`, which contains the complete original source
bodies, support files and licenses. Read the originals resolved by the core for the actual module.
Framework/provider options activate only when selected; installation alone activates none of them.
Use the expected outcomes relevant to the task and reuse existing artifacts; a small change does not
require producing every listed deliverable.

Return work and evidence to the single coordinator. This area has no global router, hooks or automatic
runtime installation. Review relevant requirements and evidence without restarting earlier completed work.
