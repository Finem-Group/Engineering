---
name: finem-product-delivery
description: Use when this project's work involves Product strategy, outcome roadmaps, user stories and acceptance scenarios — covers product discovery, requirements, planning/task decomposition, testing. Loads the original pm skills bundled with this pack.
---

# Finem Product delivery

Product strategy, outcome roadmaps, user stories and acceptance scenarios

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Product discovery

Adds to the finem-core base for this capability.

- `pm:product-strategy` → `upstream/pm/pm-product-strategy/skills/product-strategy/SKILL.md`

### Requirements

Adds to the finem-core base for this capability.

- `pm:user-stories` → `upstream/pm/pm-execution/skills/user-stories/SKILL.md`

### Planning/task decomposition

Adds to the finem-core base for this capability.

- `pm:outcome-roadmap` → `upstream/pm/pm-execution/skills/outcome-roadmap/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `pm:test-scenarios` → `upstream/pm/pm-execution/skills/test-scenarios/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: pm. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
