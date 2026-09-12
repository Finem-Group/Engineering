# UI Plugins

Design useful, accessible interfaces with coherent visual language, interaction states and motion.

**Claude Code**

```bash
claude plugin install finem-ui-ux@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-ui-ux@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| UX | area baseline | 1 |
| Design system | area baseline | 2 |
| Accessibility | area baseline | 2 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `discovery`, `react-ui`, `expo`, `angular`, `swiftui`, `xylex-ui-polish`.
