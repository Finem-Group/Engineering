---
name: finem-tanstack-table
description: Use when this project's work involves TanStack Table 9 core and React table bindings — covers frontend. Loads the original tanstack-table skills bundled with this pack.
---

# Finem Tanstack table

TanStack Table 9 core and React table bindings

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `tanstack-table:core-core` → `upstream/tanstack-table/packages/table-core/skills/core/SKILL.md`
- `tanstack-table:core-table-features` → `upstream/tanstack-table/packages/table-core/skills/table-features/SKILL.md`
- `tanstack-table:react-getting-started` → `upstream/tanstack-table/packages/react-table/skills/getting-started/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-vue`, `finem-svelte`, `finem-angular`, `finem-expo`; they cover the same capability differently.

Upstream sources bundled here: tanstack-table. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
