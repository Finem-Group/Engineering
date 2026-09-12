---
name: finem-product-planning
description: "Use for Product & Planning: product discovery, requirements, feasibility, planning/task decomposition, product analytics/feedback. Work through the Finem core using original upstream specialists."
---

# Product & Planning

## Direction and expected outcomes

Turn a product problem into a feasible, prioritized plan and measure whether the outcome creates value.

- Problem statement and target users
- Requirements and success measures
- Feasibility assessment and implementation plan
- Product feedback and experiment findings

## Capability scope

- Product discovery (`product-discovery`)
- Requirements (`requirements`)
- Feasibility (`feasibility`)
- Planning/task decomposition (`planning-task-decomposition`)
- Product analytics/feedback (`product-analytics-feedback`)

## Use the shared workflow

Locate the installed `finem-core` using the host's available skill path; do not assume it is a sibling
folder. Open its `skills/finem-engineering/SKILL.md`. If the core is missing or its version differs from
this plugin, report that dependency before proceeding with this entrypoint.

In plugin mode, supply this area root to the core helper using `--area` and select `finem-product-planning`.
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
