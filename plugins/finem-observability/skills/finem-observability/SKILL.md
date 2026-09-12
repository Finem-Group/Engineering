---
name: finem-observability
description: "Use when this project's work involves OpenTelemetry and k6 — covers observability, performance, slos, incident response. Loads the original grafana skills bundled with this pack."
---

# Finem Observability

OpenTelemetry and k6

This is an entry skill. It names originals; it does not restate them. Before opening originals, let
`finem-core` select this pack for the current project's task and validate its dependencies, conflicts
and exclusive group. Installation or a matching trigger alone does not activate a pack. In CLI project
mode follow the existing `.l11/config.json` selection. If this pack is inactive, return to
the coordinator without applying its replacements. Once active, open the listed `SKILL.md` files and
the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Observability

Adds to the finem-core base for this capability.

- `grafana:opentelemetry` → `upstream/grafana/skills/grafana-core/opentelemetry/SKILL.md`
- `grafana:alerting-irm` → `upstream/grafana/skills/grafana-core/alerting-irm/SKILL.md`

### Performance

Adds to the finem-core base for this capability.

- `grafana:k6` → `upstream/grafana/skills/grafana-k6/k6/SKILL.md`

### SLOs

Adds to the finem-core base for this capability.

- `grafana:alerting-irm` → `upstream/grafana/skills/grafana-core/alerting-irm/SKILL.md`

### Incident response

Adds to the finem-core base for this capability.

- `grafana:alerting-irm` → `upstream/grafana/skills/grafana-core/alerting-irm/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: grafana. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
