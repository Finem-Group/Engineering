---
name: finem-jobs-trigger
description: Use when this project's work involves Trigger.dev task authoring and project setup — covers async/jobs/events, reliability/resilience. Loads the original trigger skills bundled with this pack.
---

# Finem Jobs trigger

Trigger.dev task authoring and project setup

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Async/jobs/events

Adds to the finem-core base for this capability.

- `trigger:trigger-getting-started` → `upstream/trigger/packages/cli-v3/skills/trigger-getting-started/SKILL.md`
- `trigger:trigger-authoring-tasks` → `upstream/trigger/packages/trigger-sdk/skills/trigger-authoring-tasks/SKILL.md`

### Reliability/resilience

Adds to the finem-core base for this capability.

- `trigger:trigger-authoring-tasks` → `upstream/trigger/packages/trigger-sdk/skills/trigger-authoring-tasks/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: trigger. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
