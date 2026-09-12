---
name: finem-product-analytics
description: Use when this project's work involves Metrics definitions and cohort-based feedback alongside provider instrumentation — covers product analytics/feedback. Loads the original pm skills bundled with this pack.
---

# Finem Product analytics

Metrics definitions and cohort-based feedback alongside provider instrumentation

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Product analytics/feedback

Adds to the finem-core base for this capability.

- `pm:metrics-dashboard` → `upstream/pm/pm-product-discovery/skills/metrics-dashboard/SKILL.md`
- `pm:cohort-analysis` → `upstream/pm/pm-data-analytics/skills/cohort-analysis/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: pm. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
