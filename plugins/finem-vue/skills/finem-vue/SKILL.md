---
name: finem-vue
description: "Use when this project's work involves Vue 3 application implementation, routing and tests — covers frontend, performance, testing. Loads the original addy, vue skills bundled with this pack."
---

# Finem Vue

Vue 3 application implementation, routing and tests

This is an entry skill. It names originals; it does not restate them. Before opening originals, let
`finem-core` select this pack for the current project's task and validate its dependencies, conflicts
and exclusive group. Installation or a matching trigger alone does not activate a pack. In CLI project
mode follow the existing `.l11/config.json` selection. If this pack is inactive, return to
the coordinator without applying its replacements. Once active, open the listed `SKILL.md` files and
the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Replaces the finem-core base for this capability.

- `addy:frontend-ui-engineering` → `upstream/addy/skills/frontend-ui-engineering/SKILL.md`
- `vue:vue-best-practices` → `upstream/vue/skills/vue-best-practices/SKILL.md`
- `vue:vue-router-best-practices` → `upstream/vue/skills/vue-router-best-practices/SKILL.md`
- `vue:vue-testing-best-practices` → `upstream/vue/skills/vue-testing-best-practices/SKILL.md`
- `vue:vue-debug-guides` → `upstream/vue/skills/vue-debug-guides/SKILL.md`

### Performance

Replaces the finem-core base for this capability.

- `addy:performance-optimization` → `upstream/addy/skills/performance-optimization/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `vue:vue-testing-best-practices` → `upstream/vue/skills/vue-testing-best-practices/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-react-ui`, `finem-expo`; they cover the same capability differently.

Upstream sources bundled here: addy, vue. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
