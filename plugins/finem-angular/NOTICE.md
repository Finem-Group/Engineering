# Third-party notices — finem-angular

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

## angular

- Repository: https://github.com/angular/angular
- Revision: `ae33a5f55ec1d31ea4e216b32cd1ddc535a3b331`
- License: MIT
- License files: `upstream/angular/LICENSE`
- Reviewed: 2026-09-11

  Comprehensive first-party Angular app guidance, rather than a third-party kitchen-sink framework skill. Project Angular CLI, matching Angular version, ng build. Signal Forms defaults are gated to Angular 22+; older app conventions retained. Do not include Angular repository contributor .agent skills or additional angular-new-app entrypoint initially; developer already covers setup. New-project latest/global CLI examples are source instructions, not automatic installs; existing project version decides.
