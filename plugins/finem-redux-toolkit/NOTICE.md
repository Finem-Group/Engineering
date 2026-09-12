# Third-party notices — finem-redux-toolkit

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## redux-toolkit

- Repository: https://github.com/reduxjs/redux-toolkit
- Revision: `5b4795b5d3e8a0ab19bf94d8d3413168804ade64`
- License: MIT
- License files: `upstream/redux-toolkit/LICENSE`
- Reviewed: 2026-09-11

  Fills explicit state-ownership and RTK Query alternative with official package-shipped skills. Existing or explicitly chosen Redux Toolkit2 + React-Redux; project tests. RTK Query is an alternative server-cache owner to TanStack Query/SWR, not an additional default cache. Requires edges: modern-redux -> redux-dataflow; adopt-rtk-query -> modern-redux; slices -> state-ownership. Preserve all eight skills but load relevant path. Slash names require namespaced catalog IDs.
