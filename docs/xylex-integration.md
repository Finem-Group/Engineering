# XYLEX specialists in L11 0.5

Ten complete skill directories from [xylex-group/skills](https://github.com/xylex-group/skills/tree/53c3a7758bd1e0e5bf6564c77fe3f7d075c91846) are pinned to commit `53c3a7758bd1e0e5bf6564c77fe3f7d075c91846`. The bundle contains 66 original files, including reference documents, three Python helpers, 27 transition recipes, CSS tokens and the original MIT license/copyright notice. Original bytes come from Git objects, preserving source line endings and executable modes.

| Optional pack | Original skills | Selected capabilities |
|---|---|---|
| `xylex-architecture` | `codebase-design`, `domain-modeling` | Architecture, domain modeling, ADRs |
| `xylex-code-audit` | `audit-duplicate-dead-code`, `duplicate-blastzone-audit`, `reduce-contract-drift`, `document-code-contracts` | Code review, maintenance, API contracts, documentation |
| `xylex-ui-polish` | `polish-ui-components`, `transitions-dev`, `transitions-polish`, `extract-design-system` | Frontend, design system |

All three packs add specialists to the existing capability base. Default profiles do not activate them. They do not register another coordinator or XYLEX hooks, and do not import the broader Athena/XBP/Grok stack. The duplicate TDD and Rust best-practices entrypoints are not part of this source bundle.

## CLI project mode

After installing this local package/archive, run in the target project:

```sh
npx l11 init --profile fullstack --adapters claude-code,codex --extensions xylex-architecture,xylex-code-audit,xylex-ui-polish
npx l11 inventory --source xylex --selected
npx l11 doctor
```

For an existing L11 project, preserve its other settings and add the wanted pack IDs to `.l11/config.json`'s `extensions`. Review `l11 update --check`, then apply `l11 update`. Install package 0.5.0 before updating; this is not a published `l11` npm package.

## Native Finem plugin mode

Since Finem 0.7, these three IDs are internal technology options, not separate native plugins. Install the area plugins and select the desired options through the core coordinator. Architecture belongs to Architecture & API Design; UI polish to UI/UX and Frontend; code audit to Architecture, Testing & Quality and Maintenance & Documentation.

The complete 66-file XYLEX bundle lives once in `finem-core/upstream/xylex/`. Area entrypoints reference that shared library. Original bytes, supporting references and selection conflicts are unchanged. Native mode needs no `.l11/` or L11 CLI. See [area architecture and migration](area-plugins.md).

## Scope and prerequisites

- `transitions-polish` depends on the sibling `transitions-dev` directory; both remain in their original relative locations.
- The UI pack contains CSS/web recipes and conflicts with `expo`, `swiftui` and `android-ui`. Architecture and audit packs remain usable with those native choices.
- Keep existing project design tokens authoritative. Choose the specialist matching the requested task; do not apply competing Impeccable, Emil and XYLEX motion directions simultaneously.
- Python 3 is required for `cluster_metrics.py`, `blastzone_metrics.py` and `init_contract_doc.py`; the audit helpers also use Git, and blast-zone discovery uses ripgrep (`rg`). Resolve a helper from its original skill directory, and pass the target repository/output paths explicitly.
- The original `blastzone_metrics.py` has a verified Windows path-separator limitation: definitions can be counted as callers and test callers can be missed. Treat those counts as preliminary on Windows, verify the returned file list against the actual callers, or run the helper in a POSIX environment. The imported script remains byte-identical to its pinned source; successful execution is not proof of accurate aggregate metrics.
- Website extraction requires the separate `extract-design-system` CLI plus Playwright/Chromium. They are not installed or functionally tested by bundling this skill. Its outputs are starter tokens, not proof of a complete design system.
- The selected scripts and references are source content. Upstream setup instructions do not run during installation. Existing user authorization and project conventions remain authoritative.

## Verification contract

Regression coverage compares all 66 files against a fixture read from the pinned Git tree, checks selection of exactly the ten requested specialists, keeps defaults unchanged, exercises all six adapter projections and runs a real CLI init/doctor in a temporary project. Native marketplace checks cover all generated entrypoints and pack selection. This validates packaging and routing; it is not a benchmark of generated application quality or an execution of every external tool.
