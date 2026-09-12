---
name: finem-agent-engineering
description: Use when this project's work involves Original agent skill evaluation and MCP server engineering specialists — covers testing, api contracts. Loads the original anthropic skills bundled with this pack.
---

# Finem Agent engineering

Original agent skill evaluation and MCP server engineering specialists

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Testing

Adds to the finem-core base for this capability.

- `anthropic:skill-creator` → `upstream/anthropic/skills/skill-creator/SKILL.md`

### API contracts

Adds to the finem-core base for this capability.

- `anthropic:mcp-builder` → `upstream/anthropic/skills/mcp-builder/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: anthropic. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
