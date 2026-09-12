# Third-party notices — finem-svelte

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## addy

- Repository: https://github.com/addyosmani/agent-skills
- Revision: `6ca0cd7db39b41b1c37e26d335c507ee92382c6d`
- License: MIT
- License files: `upstream/addy/LICENSE`
- Reviewed: 2026-09-11

  Original upstream skill directories and supporting files. Invoke selected specialists within the single L11 workflow; do not activate source bootstrap routers or global hooks.

## svelte

- Repository: https://github.com/sveltejs/ai-tools
- Revision: `e7d93fcc168b5f4b3fec57c22f49a36d57e8ee1a`
- License: MIT
- License files: `upstream/svelte/LICENSE`
- Reviewed: 2026-09-11

  Official Svelte instructions plus framework-aware analysis and documentation CLI. Svelte 5/SvelteKit project, svelte-check and project build. Optional project-private @sveltejs/mcp 0.1.26 CLI for required autofixer. npm 0.1.26 depends on tmcp 1.20.0-next.1 and eslint ^9.36.0. Pin complete toolchain; released top-level package has prerelease transitive dependency. Use canonical tools/skills originals; omit Claude/Cursor/OpenCode copies and global routers. Prefer file argument to autofixer; original POSIX dollar-escaping examples must not be copied literally into PowerShell. Optional editor subagent advice does not require creating one.
