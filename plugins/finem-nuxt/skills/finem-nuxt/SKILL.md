---
name: finem-nuxt
description: Use when this project's work involves Nuxt 4 server rendering and Pinia state — covers frontend. Loads the original antfu skills bundled with this pack.
---

# Finem Nuxt

Nuxt 4 server rendering and Pinia state

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `antfu:nuxt` → `upstream/antfu/skills/nuxt/SKILL.md`
- `antfu:pinia` → `upstream/antfu/skills/pinia/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core`, `finem-vue` owns capability selection, evidence and limits. Depends
on: `finem-core`, `finem-vue`.
Upstream sources bundled here: antfu. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
