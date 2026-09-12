# Third-party notices — finem-tanstack-start

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## tanstack-router

- Repository: https://github.com/TanStack/router
- Revision: `f021f6d1c6dce6c9b54d70766f1d636d8fd9e184`
- License: MIT
- License files: `upstream/tanstack-router/LICENSE`
- Reviewed: 2026-09-11

  First-party composable routing, Query integration and Start SSR/server boundaries with explicit dependency links. Matching project @tanstack/react-router, router-plugin and Query when selected; Start only for Start project. Version metadata differs across skill files, so inspect installed types, not only repository HEAD. Preserve full package paths. router-core auth links Start auth-server-primitives; router-plugin links virtual-file-routes. Both support closures included. Names react-router and vue-router belong to TanStack packages here; never confuse with Remix react-router or Vue Router. Prefix IDs. Router/Start are alternative primary routing/app owners to Next, Remix, Nuxt and Expo. Nested specialists load on demand, not all at once.
