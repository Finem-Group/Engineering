---
name: finem-aws-containers
description: Use when this project's work involves AWS container selection and infrastructure deployment guidance — covers infrastructure, deployment. Loads the original aws skills bundled with this pack.
---

# Finem Aws containers

AWS container selection and infrastructure deployment guidance

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Infrastructure

Adds to the finem-core base for this capability.

- `aws:aws-containers` → `upstream/aws/skills/core-skills/aws-containers/SKILL.md`

### Deployment

Adds to the finem-core base for this capability.

- `aws:aws-containers` → `upstream/aws/skills/core-skills/aws-containers/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: aws. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
