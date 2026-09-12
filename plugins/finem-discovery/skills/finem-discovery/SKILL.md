---
name: finem-discovery
description: Use when this project's work involves Original research interviews and opportunity synthesis — covers product discovery, requirements, ux. Loads the original pm skills bundled with this pack.
---

# Finem Discovery

Original research interviews and opportunity synthesis

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Product discovery

Adds to the finem-core base for this capability.

- `pm:interview-script` → `upstream/pm/pm-product-discovery/skills/interview-script/SKILL.md`
- `pm:summarize-interview` → `upstream/pm/pm-product-discovery/skills/summarize-interview/SKILL.md`
- `pm:opportunity-solution-tree` → `upstream/pm/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md`

### Requirements

Adds to the finem-core base for this capability.

- `pm:create-prd` → `upstream/pm/pm-execution/skills/create-prd/SKILL.md`

### UX

Adds to the finem-core base for this capability.

- `pm:customer-journey-map` → `upstream/pm/pm-market-research/skills/customer-journey-map/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: pm. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
