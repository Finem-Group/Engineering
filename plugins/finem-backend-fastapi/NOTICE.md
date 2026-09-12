# Third-party notices — finem-backend-fastapi

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## fastapi

- Repository: https://github.com/fastapi/fastapi
- Revision: `50113da16fec53b66b80d75e80a89296de4fa5a5`
- License: MIT
- License files: `upstream/fastapi/LICENSE`
- Reviewed: 2026-09-11

  321-line skill plus six focused references covering DI, Pydantic, routers, responses, frontend assets and streaming. Python >=3.10 for observed FastAPI 0.141.1; project environment and HTTPX/TestClient. Current skill uses newer app.frontend and fastapi.sse APIs; version-gate before use. SQLModel/Asyncer preferences must not trigger a migration of an existing SQLAlchemy/AnyIO app. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
