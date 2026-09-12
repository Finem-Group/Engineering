# Third-party notices — finem-agent-engineering

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## anthropic

- Repository: https://github.com/anthropics/skills
- Revision: `34040c9c568585f6929bedeaad110ad08f079624`
- License: Apache-2.0
- License files: `upstream/anthropic/skills/skill-creator/LICENSE.txt`, `upstream/anthropic/skills/mcp-builder/LICENSE.txt`
- Reviewed: 2026-09-11

  Original Apache-2.0 skill-creator evaluation/grader/comparator/viewer and MCP builder references/scripts. Only selected for engineering agents or MCP servers. Claude CLI is required by upstream triggering/optimization helpers; Python and optional provider SDK/API credentials are separate. These specialists do not become global routers. Model-driven trials and deterministic checks must be reported separately; source examples and XML answer matching alone do not establish agent effectiveness.
