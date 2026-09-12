---
name: finem-jobs-inngest
description: Use when this project's work involves Inngest durable functions, events, flow control and development tests — covers async/jobs/events, reliability/resilience, testing. Loads the original inngest skills bundled with this pack.
---

# Finem Jobs inngest

Inngest durable functions, events, flow control and development tests

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Async/jobs/events

Adds to the finem-core base for this capability.

- `inngest:inngest-setup` → `upstream/inngest/skills/inngest-setup/SKILL.md`
- `inngest:inngest-durable-functions` → `upstream/inngest/skills/inngest-durable-functions/SKILL.md`
- `inngest:inngest-events` → `upstream/inngest/skills/inngest-events/SKILL.md`
- `inngest:inngest-flow-control` → `upstream/inngest/skills/inngest-flow-control/SKILL.md`
- `inngest:inngest-steps` → `upstream/inngest/skills/inngest-steps/SKILL.md`

### Reliability/resilience

Adds to the finem-core base for this capability.

- `inngest:inngest-durable-functions` → `upstream/inngest/skills/inngest-durable-functions/SKILL.md`
- `inngest:inngest-brownfield-audit` → `upstream/inngest/skills/inngest-brownfield-audit/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `inngest:inngest-cli` → `upstream/inngest/skills/inngest-cli/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: inngest. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
