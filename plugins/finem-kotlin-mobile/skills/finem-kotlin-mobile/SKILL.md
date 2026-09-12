---
name: finem-kotlin-mobile
description: Use when this project's work involves KMP migrations and measured native build performance — covers migration/deprecation, performance. Loads the original kotlin skills bundled with this pack.
---

# Finem Kotlin mobile

KMP migrations and measured native build performance

This is an entry skill. It names originals; it does not restate them. Open the listed `SKILL.md` files
and the references they require, and follow their procedure.

## Resolve paths

Paths below are relative to this plugin's root — `${CLAUDE_PLUGIN_ROOT}` when the host sets it, otherwise
the directory two levels above this `SKILL.md`. Inside an original, `{baseDir}` means the directory
containing that original, not this plugin's root.

## Originals this pack activates

### Migration/deprecation

Adds to the finem-core base for this capability.

- `kotlin:kotlin-tooling-agp9-migration` → `upstream/kotlin/skills/kotlin-tooling-agp9-migration/SKILL.md`
- `kotlin:kotlin-tooling-java-to-kotlin` → `upstream/kotlin/skills/kotlin-tooling-java-to-kotlin/SKILL.md`

### Performance

Adds to the finem-core base for this capability.

- `kotlin:kotlin-tooling-native-build-performance` → `upstream/kotlin/skills/kotlin-tooling-native-build-performance/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Upstream sources bundled here: kotlin. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
