---
name: finem-infrastructure-devops
description: "Use for Infrastructure & DevOps: infrastructure, networking, ci, release, deployment, rollback, cost/finops, configuration/environments. Work through the Finem core using original upstream specialists."
---

# Finem Infrastructure & DevOps

## Direction and expected outcomes

Provision reproducible environments and operate the build, release, deployment and rollback path with visible infrastructure costs.

- Infrastructure and network configuration
- Environment and CI configuration
- Release, deployment and rollback plans
- Infrastructure cost assessment

## Capability scope

- Infrastructure (`infrastructure`)
- Networking (`networking`)
- CI (`ci`)
- Release (`release`)
- Deployment (`deployment`)
- Rollback (`rollback`)
- Cost/FinOps (`cost-finops`)
- Configuration/environments (`configuration-environments`)

## Use the shared workflow

Locate the installed `finem-core` using the host's available skill path; do not assume it is a sibling
folder. Open its `skills/finem-engineering/SKILL.md`. If the core is missing or its version differs from
this plugin, report that dependency before proceeding with this entrypoint.

In plugin mode, supply this area root to the core helper using `--area` and select `finem-infrastructure-devops`.
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
