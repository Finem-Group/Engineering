# Third-party notices — finem-api-contract-testing

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## pactflow

- Repository: https://github.com/pactflow/pactflow-agent-skills
- Revision: `463f70a32daba156376dbe030bbf23097a6a1ecb`
- License: MIT
- License files: `upstream/pactflow/LICENSE`
- Reviewed: 2026-09-11

  Complex OpenAPI variants plus Drift mapping, Python endpoint/coverage scripts, PowerShell and shell loops, eval fixtures. Project-local @pactflow/drift; Python+PyYAML for scripts; optional Prism; Cloud only for publishing/BDCT integration. Do not register context:fork agent metadata as global router. Helpers auto-install dependencies; use pinned local tools under L11. Long workspace path caused three fixture download writes to fail; use short workspace root or long-path capable importer, do not omit them. Loop verify is not authorization to alter spec until tests pass; source explicitly forbids modifying tested spec. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
