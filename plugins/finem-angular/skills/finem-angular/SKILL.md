---
name: finem-angular
description: Use when this project's work involves Version-aware Angular application implementation — covers frontend, performance, accessibility. Loads the original addy, angular skills bundled with this pack.
---

# Finem Angular

Version-aware Angular application implementation

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Frontend

Replaces the finem-core base for this capability.

- `addy:frontend-ui-engineering` → `upstream/addy/skills/frontend-ui-engineering/SKILL.md`
- `angular:angular-developer` → `upstream/angular/skills/dev-skills/angular-developer/SKILL.md`

### Performance

Replaces the finem-core base for this capability.

- `addy:performance-optimization` → `upstream/addy/skills/performance-optimization/SKILL.md`

### Accessibility

Adds to the finem-core base for this capability.

- `angular:angular-developer` → `upstream/angular/skills/dev-skills/angular-developer/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-react-ui`, `finem-expo`; they cover the same capability differently.

Upstream sources bundled here: addy, angular. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
