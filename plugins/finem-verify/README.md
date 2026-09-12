# Finem Verify

Engineering phase verify: ci, testing, browser qa, accessibility, security, performance, code review/quality gates. Uses the shared original skill library in finem-core.

**Claude Code**

```bash
claude plugin install finem-verify@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-verify@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| CI | phase baseline | 1 |
| Testing | phase baseline | 2 |
| Browser QA | phase baseline | 2 |
| Accessibility | phase baseline | 2 |
| Security | phase baseline | 1 |
| Performance | phase baseline | 2 |
| Code review/quality gates | phase baseline | 2 |

Native phase entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `browser-playwright`, `advanced-testing`, `terraform`, `observability`, `expo`, `product-delivery`, `intent-audit`, `agent-engineering`, `vue`, `svelte`, `angular`, `next-cache`, `gsap`, `react-native-performance`, `swiftui`, `android-ui`, `kotlin-mobile`, `backend-fastify`, `backend-fastapi`, `backend-django`, `backend-apollo`, `backend-rust`, `jobs-inngest`, `api-contract-testing`, `search-algolia`, `kubernetes`, `security-audit`, `xylex-code-audit`.
