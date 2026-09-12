---
name: finem-redux-toolkit
description: Use when this project's work involves Redux Toolkit state ownership and RTK Query — covers frontend. Loads the original redux-toolkit skills bundled with this pack.
---

# Finem Redux toolkit

Redux Toolkit state ownership and RTK Query

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `redux-toolkit:design-state-ownership` → `upstream/redux-toolkit/packages/toolkit/skills/model-redux-state/design-state-ownership/SKILL.md`
- `redux-toolkit:modern-redux` → `upstream/redux-toolkit/packages/toolkit/skills/build-modern-redux-apps/modern-redux/SKILL.md`
- `redux-toolkit:adopt-rtk-query` → `upstream/redux-toolkit/packages/toolkit/skills/manage-server-data/adopt-rtk-query/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-tanstack-router`; they cover the same capability differently.

Upstream sources bundled here: redux-toolkit. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
