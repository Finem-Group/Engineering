---
name: finem-xylex-ui-polish
description: "Use when this project's work involves Original XYLEX web component polish, CSS transition recipes and website token extraction — covers frontend, design system. Loads the original xylex skills bundled with this pack."
---

# Finem Xylex ui polish

Original XYLEX web component polish, CSS transition recipes and website token extraction

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

Adds to the finem-core base for this capability.

- `xylex:polish-ui-components` → `upstream/xylex/plugins/ui-plugins/skills/polish-ui-components/SKILL.md`
- `xylex:transitions-dev` → `upstream/xylex/plugins/ui-plugins/skills/transitions-dev/SKILL.md`
- `xylex:transitions-polish` → `upstream/xylex/plugins/ui-plugins/skills/transitions-polish/SKILL.md`

### Design system

Adds to the finem-core base for this capability.

- `xylex:extract-design-system` → `upstream/xylex/plugins/ui-plugins/skills/extract-design-system/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-expo`, `finem-swiftui`, `finem-android-ui`; they cover the same capability differently.

Upstream sources bundled here: xylex. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
