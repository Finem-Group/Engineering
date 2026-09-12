# Third-party notices — finem-xylex-architecture

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## xylex

- Repository: https://github.com/xylex-group/skills
- Revision: `53c3a7758bd1e0e5bf6564c77fe3f7d075c91846`
- License: MIT
- License files: `upstream/xylex/LICENSE`
- Reviewed: 2026-09-12

  Ten complete original XYLEX skill directories, including local references, Python helpers, CSS tokens and the MIT license. Only explicitly selected architecture, code-audit and web UI-polish entrypoints are mapped. No XYLEX root router, hooks, Grok workflows or duplicate TDD/Rust skills are installed. Resolve helpers relative to the original skill directory and run them against the intended project. Python helpers require Python 3; website token extraction requires the separate extract-design-system CLI plus Playwright/Chromium, which these source bundles do not install. Keep existing project design tokens authoritative; invoke the requested specialist without stacking competing motion or review workflows. CSS motion specialists are web-only. The audit helpers also require Git and blast-zone search requires rg. The original blastzone_metrics.py uses POSIX path separators when filtering definitions/test callers: Windows aggregate caller counts can be inaccurate. Verify actual caller files or use a POSIX environment; do not treat those counts as authoritative.
