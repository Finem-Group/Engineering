---
name: finem-email-resend
description: Use when this project's work involves Resend transactional email API and webhook handling — covers backend, async/jobs/events. Loads the original resend skills bundled with this pack.
---

# Finem Email resend

Resend transactional email API and webhook handling

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Backend

Adds to the finem-core base for this capability.

- `resend:resend` → `upstream/resend/skills/resend/SKILL.md`

### Async/jobs/events

Adds to the finem-core base for this capability.

- `resend:resend` → `upstream/resend/skills/resend/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: resend. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
