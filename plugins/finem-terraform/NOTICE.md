# Third-party notices — finem-terraform

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## terraform

- Repository: https://github.com/hashicorp/agent-skills
- Revision: `c2d65dfe492f74d360d35b859b88932222470bd8`
- License: MPL-2.0
- License files: `upstream/terraform/LICENSE`
- Reviewed: 2026-09-11

  Original Terraform style/security guidance and full test references. MPL-2.0 source remains unchanged and separately licensed. Terraform test requires >=1.6; provider mocks require >=1.7. Providers and account credentials are project/runtime requirements.
