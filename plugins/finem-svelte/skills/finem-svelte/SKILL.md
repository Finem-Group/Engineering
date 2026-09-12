---
name: finem-svelte
description: Use when this project's work involves Svelte 5 and SvelteKit implementation and analysis — covers frontend, performance. Loads the original addy, svelte skills bundled with this pack.
---

# Finem Svelte

Svelte 5 and SvelteKit implementation and analysis

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Replaces the finem-core base for this capability.

- `addy:frontend-ui-engineering` → `upstream/addy/skills/frontend-ui-engineering/SKILL.md`
- `svelte:svelte-code-writer` → `upstream/svelte/tools/skills/svelte-code-writer/SKILL.md`
- `svelte:svelte-core-bestpractices` → `upstream/svelte/tools/skills/svelte-core-bestpractices/SKILL.md`

### Performance

Replaces the finem-core base for this capability.

- `addy:performance-optimization` → `upstream/addy/skills/performance-optimization/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-react-ui`, `finem-expo`; they cover the same capability differently.

Upstream sources bundled here: addy, svelte. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
