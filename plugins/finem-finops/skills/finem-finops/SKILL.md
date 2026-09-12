---
name: finem-finops
description: Use when this project's work involves Provider-aware infrastructure cost estimates and generation — covers cost/finops, infrastructure. Loads the original infracost skills bundled with this pack.
---

# Finem Finops

Provider-aware infrastructure cost estimates and generation

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Cost/FinOps

Adds to the finem-core base for this capability.

- `infracost:scan` → `upstream/infracost/plugins/infracost/skills/scan/SKILL.md`
- `infracost:price-lookup` → `upstream/infracost/plugins/infracost/skills/price-lookup/SKILL.md`

### Infrastructure

Adds to the finem-core base for this capability.

- `infracost:iac-generation` → `upstream/infracost/plugins/infracost/skills/iac-generation/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: infracost. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
