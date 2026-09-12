---
name: finem-observability-reliability
description: "Use for Observability & Reliability: observability, slos, incident response, postmortem, reliability/resilience. Work through the Finem core using original upstream specialists."
---

# Observability

## Direction and expected outcomes

Make system health measurable, design for failure and support incident diagnosis and recovery.

- Logging, metrics and tracing
- SLOs and alert criteria
- Resilience and failure-mode analysis
- Incident response and postmortems

## Capability scope

- Observability (`observability`)
- SLOs (`slos`)
- Incident response (`incident-response`)
- Postmortem (`postmortem`)
- Reliability/resilience (`reliability-resilience`)

## Use the shared workflow

Locate the installed `finem-core` using the host's available skill path; do not assume it is a sibling
folder. Open its `skills/finem-engineering/SKILL.md`. If the core is missing or its version differs from
this plugin, report that dependency before proceeding with this entrypoint.

In plugin mode, supply this area root to the core helper using `--area` and select `finem-observability-reliability`.
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
