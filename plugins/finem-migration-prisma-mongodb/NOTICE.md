# Third-party notices — finem-migration-prisma-mongodb

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## prisma

- Repository: https://github.com/prisma/skills
- Revision: `1123817e60d15ca0f3af91878923241dee7e3b09`
- License: MIT
- License files: `upstream/prisma/LICENSE`
- Reviewed: 2026-09-11

  Four skills with full command/client/provider/migration references; metadata baseline7.6.0. Match Prisma CLI/client/adapter versions explicitly; Node20.19+ for v7 skill; ESM/TS details; MongoDB route stays v6. Registry latest prisma8.0.0-rc.13 mismatches client latest7.10.0; never install latest pair blindly. Do not route MongoDB through v7 SQL adapter/upgrade workflow. Destructive reset/push/dev migrations must remain explicit and environment-scoped. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. MongoDB migration companion is included intact but activated only for explicit MongoDB upgrade work: staying on Prisma 6 is valid, Prisma Next is early access, and a provider change is never automatic. Client/CLI must match project versions; observed prisma latest 8.0.0-rc.13 differs from client latest 7.10.0.
