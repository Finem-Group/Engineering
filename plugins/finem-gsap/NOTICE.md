# Third-party notices — finem-gsap

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## gsap

- Repository: https://github.com/greensock/gsap-skills
- Revision: `aed9cfd3277740755f6bfc1155c7aa645403b760`
- License: MIT
- License files: `upstream/gsap/LICENSE`
- Reviewed: 2026-09-11

  Official library-specific animation API/cleanup/performance guidance for projects choosing GSAP. Chosen project GSAP runtime and @gsap/react when React; matching framework packages. Gate to an actual GSAP project/request: upstream descriptions recommend GSAP generally, so avoid loading for generic motion. Preserve examples outside skills because source refers to examples/react, vue, nuxt and vanilla. All eight skills available, task-relevant entrypoint only.
