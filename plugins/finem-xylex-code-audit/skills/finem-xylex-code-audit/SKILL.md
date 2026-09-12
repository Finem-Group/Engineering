---
name: finem-xylex-code-audit
description: "Use when this project's work involves Original XYLEX duplicate/dead-code audits, contract drift and callable documentation — covers code review/quality gates, maintenance, api contracts, documentation/runbooks. Loads the original xylex skills bundled with this pack."
---

# Finem Xylex code audit

Original XYLEX duplicate/dead-code audits, contract drift and callable documentation

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

### Code review/quality gates

Adds to the finem-core base for this capability.

- `xylex:audit-duplicate-dead-code` → `upstream/xylex/plugins/audit-code-quality/skills/audit-duplicate-dead-code/SKILL.md`
- `xylex:duplicate-blastzone-audit` → `upstream/xylex/plugins/audit-code-quality/skills/duplicate-blastzone-audit/SKILL.md`
- `xylex:reduce-contract-drift` → `upstream/xylex/plugins/audit-code-quality/skills/reduce-contract-drift/SKILL.md`

### Maintenance

Adds to the finem-core base for this capability.

- `xylex:audit-duplicate-dead-code` → `upstream/xylex/plugins/audit-code-quality/skills/audit-duplicate-dead-code/SKILL.md`
- `xylex:duplicate-blastzone-audit` → `upstream/xylex/plugins/audit-code-quality/skills/duplicate-blastzone-audit/SKILL.md`

### API contracts

Adds to the finem-core base for this capability.

- `xylex:reduce-contract-drift` → `upstream/xylex/plugins/audit-code-quality/skills/reduce-contract-drift/SKILL.md`

### Documentation/runbooks

Adds to the finem-core base for this capability.

- `xylex:document-code-contracts` → `upstream/xylex/plugins/engineering/skills/document-code-contracts/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: xylex. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
