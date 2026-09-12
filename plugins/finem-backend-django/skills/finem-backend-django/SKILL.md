---
name: finem-backend-django
description: Use when this project's work involves Django application conventions compatible with the installed version — covers backend, auth, database, migrations, testing. Loads the original django skills bundled with this pack.
---

# Finem Backend django

Django application conventions compatible with the installed version

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Backend

Adds to the finem-core base for this capability.

- `django:django` → `upstream/django/SKILL.md`

### Auth

Adds to the finem-core base for this capability.

- `django:django` → `upstream/django/SKILL.md`

### Database

Adds to the finem-core base for this capability.

- `django:django` → `upstream/django/SKILL.md`

### Migrations

Adds to the finem-core base for this capability.

- `django:django` → `upstream/django/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `django:django` → `upstream/django/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: django. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
