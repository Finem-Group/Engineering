---
name: finem-next-cache
description: Use when this project's work involves Next 16.3+ instant-navigation tests for apps already building with Cache Components — covers frontend, performance. Loads the original next skills bundled with this pack.
---

# Finem Next cache

Next 16.3+ instant-navigation tests for apps already building with Cache Components

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `next:next-cache-components-optimizer` → `upstream/next/skills/next-cache-components-optimizer/SKILL.md`

### Performance

Adds to the finem-core base for this capability.

- `next:next-cache-components-optimizer` → `upstream/next/skills/next-cache-components-optimizer/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core`, `finem-browser-playwright` owns capability selection, evidence and limits. Depends
on: `finem-core`, `finem-browser-playwright`.
Do not combine with `finem-vue`, `finem-svelte`, `finem-angular`, `finem-expo`, `finem-tanstack-start`; they cover the same capability differently.

Upstream sources bundled here: next. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
