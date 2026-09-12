---
name: finem-android-ui
description: Use when this project's work involves Android edge-to-edge and incremental XML-to-Compose migration — covers frontend, performance. Loads the original addy, android skills bundled with this pack.
---

# Finem Android ui

Android edge-to-edge and incremental XML-to-Compose migration

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
- `android:edge-to-edge` → `upstream/android/system/edge-to-edge/SKILL.md`
- `android:migrate-xml-views-to-jetpack-compose` → `upstream/android/jetpack-compose/migration/migrate-xml-views-to-jetpack-compose/SKILL.md`

### Performance

Replaces the finem-core base for this capability.

- `addy:performance-optimization` → `upstream/addy/skills/performance-optimization/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-react-ui`, `finem-expo`, `finem-swiftui`, `finem-vue`, `finem-svelte`, `finem-angular`, `finem-next-cache`, `finem-tanstack-start`, `finem-tanstack-router`, `finem-tanstack-table`, `finem-gsap`, `finem-web-animation`, `finem-react-native-performance`; they cover the same capability differently.

Upstream sources bundled here: addy, android. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
