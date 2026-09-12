# Third-party notices — finem-backend-apollo

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## apollo

- Repository: https://github.com/apollographql/skills
- Revision: `c288eb80629dd2309eed81f23d693f66a452d043`
- License: MIT
- License files: `upstream/apollo/LICENSE`
- Reviewed: 2026-09-11

  Schema/operation portable specialists with refs plus Apollo Server 5-specific resolvers/context/plugins/security/performance references. GraphQL schema/operations work with any GraphQL implementation. Apollo Server 5 requires Node >=20; observed @apollo/server5.5.1. Only Apollo Server module is Apollo-runtime-specific; do not force federation/router. Preserve intentional nullability and established API contracts over blanket [Type!]! preference. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow. Nine complete handbook chapters: ownership, linting, errors, testing, performance, type-state, pointers and documentation. Existing Rust toolchain/Cargo; check MSRV before copying newer lint attributes. General Rust specialist, not an Axum framework guide. Run supported feature combinations; all-features can be invalid for a given crate. Project error policy prevails over blanket no expect/unwrap advice. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
