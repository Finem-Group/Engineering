---
name: finem-migration-prisma-mongodb
description: Use when this project's work involves Explicit MongoDB assessment: stay on Prisma 6 or evaluate Prisma Next; scoped separately from SQL projects — covers migrations, migration/deprecation, database. Loads the original prisma skills bundled with this pack.
---

# Finem Migration prisma mongodb

Explicit MongoDB assessment: stay on Prisma 6 or evaluate Prisma Next; scoped separately from SQL projects

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Migrations

Replaces the finem-core base for this capability.

- `prisma:prisma-mongodb-upgrade` → `upstream/prisma/prisma-mongodb-upgrade/SKILL.md`

### Migration/deprecation

Adds to the finem-core base for this capability.

- `prisma:prisma-mongodb-upgrade` → `upstream/prisma/prisma-mongodb-upgrade/SKILL.md`

### Database

Replaces the finem-core base for this capability.

- `prisma:prisma-mongodb-upgrade` → `upstream/prisma/prisma-mongodb-upgrade/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-data-prisma`, `finem-data-neon`, `finem-migration-prisma-v7`; they cover the same capability differently.

Upstream sources bundled here: prisma. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
