# Finem Product & Planning

Turn a product problem into a feasible, prioritized plan and measure whether the outcome creates value.

**Claude Code**

```bash
claude plugin install finem-product-planning@finem
```

**Codex**

```bash
codex plugin add finem-core@finem
codex plugin add finem-product-planning@finem
```

**Depends on** `finem-core`. Claude Code installs those automatically; Codex does not resolve dependencies, so the Codex commands above install them in order.

| Capability | Role | Originals |
| --- | --- | --- |
| Product discovery | area baseline | 2 |
| Requirements | area baseline | 1 |
| Feasibility | area baseline | 2 |
| Planning/task decomposition | area baseline | 2 |
| Product analytics/feedback | area baseline | 3 |

Native area entries: 1. Original bodies live in the shared `finem-core` dependency; this plugin contains no copied originals. Internal options: `discovery`, `product-validation`, `product-delivery`, `product-analytics`.
