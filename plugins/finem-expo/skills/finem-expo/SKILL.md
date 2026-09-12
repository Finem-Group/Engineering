---
name: finem-expo
description: Use when this project's work involves Expo structure, native UI, routing, motion and data fetching — covers frontend, performance, design system. Loads the original addy, expo skills bundled with this pack.
---

# Finem Expo

Expo structure, native UI, routing, motion and data fetching

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
- `expo:expo-project-structure` → `upstream/expo/plugins/expo/skills/expo-project-structure/SKILL.md`
- `expo:expo-native-ui` → `upstream/expo/plugins/expo/skills/expo-native-ui/SKILL.md`
- `expo:expo-router` → `upstream/expo/plugins/expo/skills/expo-router/SKILL.md`
- `expo:expo-animation` → `upstream/expo/plugins/expo/skills/expo-animation/SKILL.md`
- `expo:expo-design-system` → `upstream/expo/plugins/expo/skills/expo-design-system/SKILL.md`
- `expo:expo-data-fetching` → `upstream/expo/plugins/expo/skills/expo-data-fetching/SKILL.md`

### Performance

Replaces the finem-core base for this capability.

- `addy:performance-optimization` → `upstream/addy/skills/performance-optimization/SKILL.md`

### Design system

Adds to the finem-core base for this capability.

- `expo:expo-design-system` → `upstream/expo/plugins/expo/skills/expo-design-system/SKILL.md`

## Coordination

Finem's `finem-engineering` skill in `finem-core` owns capability selection, evidence and limits. Depends
on: `finem-core`.
Do not combine with `finem-react-ui`, `finem-vue`, `finem-svelte`, `finem-angular`, `finem-next-cache`, `finem-tanstack-router`, `finem-tanstack-start`, `finem-swiftui`, `finem-android-ui`; they cover the same capability differently.

Upstream sources bundled here: addy, expo. Their licenses and pinned revisions are recorded in
`NOTICE.md` and `upstream.lock.json` in this plugin root.
