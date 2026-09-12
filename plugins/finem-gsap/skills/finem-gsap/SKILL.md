---
name: finem-gsap
description: Use when this project's work involves GSAP API, lifecycle and performance specialists — covers frontend, performance. Loads the original gsap skills bundled with this pack.
---

# Finem Gsap

GSAP API, lifecycle and performance specialists

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Adds to the finem-core base for this capability.

- `gsap:gsap-core` → `upstream/gsap/skills/gsap-core/SKILL.md`
- `gsap:gsap-react` → `upstream/gsap/skills/gsap-react/SKILL.md`
- `gsap:gsap-frameworks` → `upstream/gsap/skills/gsap-frameworks/SKILL.md`
- `gsap:gsap-performance` → `upstream/gsap/skills/gsap-performance/SKILL.md`

### Performance

Adds to the finem-core base for this capability.

- `gsap:gsap-performance` → `upstream/gsap/skills/gsap-performance/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-expo`; they cover the same capability differently.

Upstream sources bundled here: gsap. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
