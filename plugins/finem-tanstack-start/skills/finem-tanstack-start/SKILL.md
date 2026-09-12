---
name: finem-tanstack-start
description: Use when this project's work involves TanStack Start React full-stack rendering — covers frontend. Loads the original tanstack-router skills bundled with this pack.
---

# Finem Tanstack start

TanStack Start React full-stack rendering

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `tanstack-router:react-start` → `upstream/tanstack-router/packages/react-start/skills/react-start/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core`, `finem-tanstack-router` owns capability selection, evidence and limits. Depends
on: `finem-core`, `finem-tanstack-router`.
Do not combine with `finem-vue`, `finem-svelte`, `finem-angular`, `finem-expo`, `finem-next-cache`; they cover the same capability differently.

Upstream sources bundled here: tanstack-router. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
