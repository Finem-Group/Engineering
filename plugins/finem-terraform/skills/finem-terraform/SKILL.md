---
name: finem-terraform
description: Use when this project's work involves Terraform style and tests — covers infrastructure, testing. Loads the original terraform skills bundled with this pack.
---

# Finem Terraform

Terraform style and tests

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Infrastructure

Adds to the finem-core base for this capability.

- `terraform:terraform-style-guide` → `upstream/terraform/plugins/terraform/skills/terraform-style-guide/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `terraform:terraform-test` → `upstream/terraform/plugins/terraform/skills/terraform-test/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: terraform. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
