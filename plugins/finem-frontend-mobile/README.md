# Finem Frontend & Mobile

Implement the interface in the project's actual web or mobile framework, connecting state, navigation and API boundaries.

**Claude Code**

```bash
claude plugin install finem-frontend-mobile@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-frontend-mobile@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Frontend | area baseline | 3 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `react-ui`, `expo`, `vue`, `nuxt`, `svelte`, `angular`, `next-cache`, `tanstack-router`, `tanstack-start`, `tanstack-table`, `redux-toolkit`, `web-animation`, `gsap`, `swiftui`, `android-ui`, `xylex-ui-polish`.
