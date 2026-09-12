# Testing & QA

Verify behavior, integrations and performance and review whether the change is correct and maintainable.

**Claude Code**

```bash
claude plugin install finem-testing-quality@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-testing-quality@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Testing | area baseline | 2 |
| Browser QA | area baseline | 2 |
| Performance | area baseline | 2 |
| Code review/quality gates | area baseline | 2 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `browser-playwright`, `advanced-testing`, `terraform`, `observability`, `expo`, `product-delivery`, `intent-audit`, `agent-engineering`, `vue`, `svelte`, `angular`, `next-cache`, `gsap`, `react-native-performance`, `swiftui`, `android-ui`, `kotlin-mobile`, `backend-fastify`, `backend-fastapi`, `backend-django`, `backend-apollo`, `backend-rust`, `jobs-inngest`, `api-contract-testing`, `search-algolia`, `security-audit`, `xylex-code-audit`.
