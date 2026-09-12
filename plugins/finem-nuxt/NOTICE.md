# Third-party notices — finem-nuxt

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## antfu

- Repository: https://github.com/antfu/skills
- Revision: `a74f281a27dadc02397bc1a174b0f2c97531b6ae`
- License: MIT
- License files: `upstream/antfu/LICENSE.md`
- Reviewed: 2026-09-11

  Adds Nuxt 4 app/server/shared layout, SSR-safe fetching, state and Pinia; complements Vue core without copying its rules. Nuxt 4 project; Pinia v3 guidance generated for 3.0.4; installed versions and current docs remain decisive. Nuxt is an alternative primary app framework to Next/Angular/SvelteKit/TanStack Start; Pinia only when already selected. Do not include antfu global preference skill, installation/meta router, or duplicated vendored Vue/web-guideline skills.
