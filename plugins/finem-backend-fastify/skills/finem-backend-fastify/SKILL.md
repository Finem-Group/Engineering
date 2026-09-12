---
name: finem-backend-fastify
description: "Use when this project's work involves Fastify request lifecycle, schema and plugin isolation — covers backend, api contracts, testing. Loads the original fastify skills bundled with this pack."
---

# Finem Backend fastify

Fastify request lifecycle, schema and plugin isolation

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

### Backend

Adds to the finem-core base for this capability.

- `fastify:fastify-best-practices` → `upstream/fastify/skills/fastify/SKILL.md`

### API contracts

Adds to the finem-core base for this capability.

- `fastify:fastify-best-practices` → `upstream/fastify/skills/fastify/SKILL.md`

### Testing

Adds to the finem-core base for this capability.

- `fastify:fastify-best-practices` → `upstream/fastify/skills/fastify/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: fastify. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
