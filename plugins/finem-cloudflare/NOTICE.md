# Third-party notices — finem-cloudflare

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## cloudflare

- Repository: https://github.com/cloudflare/skills
- Revision: `b052c32bab7dd493513260228a36c88294f343f1`
- License: Apache-2.0
- License files: `upstream/cloudflare/LICENSE`
- Reviewed: 2026-09-11

  Original complete selected Workers, Wrangler and Durable Objects skills and references. Project-local Wrangler and matching compatibility settings are required; deploy/resource operations require separately authorized Cloudflare credentials. No cloud setup or global routers run during bundling.
