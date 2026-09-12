---
name: finem-xylex-architecture
description: "Use when this project's work involves Original XYLEX module design and domain modeling specialists — covers architecture, domain modeling, adrs. Loads the original xylex skills bundled with this pack."
---

# Finem Xylex architecture

Original XYLEX module design and domain modeling specialists

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

### Architecture

Adds to the finem-core base for this capability.

- `xylex:codebase-design` → `upstream/xylex/plugins/architecture-plugins/skills/codebase-design/SKILL.md`

### Domain modeling

Adds to the finem-core base for this capability.

- `xylex:domain-modeling` → `upstream/xylex/plugins/architecture-plugins/skills/domain-modeling/SKILL.md`

### ADRs

Adds to the finem-core base for this capability.

- `xylex:domain-modeling` → `upstream/xylex/plugins/architecture-plugins/skills/domain-modeling/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: xylex. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
