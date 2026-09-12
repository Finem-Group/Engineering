# Third-party notices — finem-tanstack-table

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## tanstack-table

- Repository: https://github.com/TanStack/table
- Revision: `ce123bc6651bcbf188f3198627c6bb0b10588162`
- License: MIT
- License files: `upstream/tanstack-table/LICENSE`
- Reviewed: 2026-09-11

  Detailed official table behavior and state guidance; optional feature specialists form a coherent dependency graph. @tanstack/react-table 9.x, Node >=20; 9.2.4 published runtime verified. Skills use useTable/tableFeatures, not v8 useReactTable. Version9-only pack: never auto-migrate a v8 consumer. Core and table-features are required before React getting-started. Only React adapter imported initially; do not bulk activate other framework adapters. Preserve all core feature references but route to only task-relevant ones.
