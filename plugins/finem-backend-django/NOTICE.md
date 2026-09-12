# Third-party notices — finem-backend-django

Everything under `upstream/` is unmodified original source from the repositories below, pinned to the
recorded revision. Finem's own files in this plugin are MIT licensed; that does not replace the licenses
below. `upstream.lock.json` records a SHA-256 for every bundled file.

## django

- Repository: https://github.com/wsvincent/django-skills
- Revision: `9a8420d96174f53a8d14e696e30a59927ac70fa0`
- License: MIT
- License files: `upstream/django/LICENSE`
- Reviewed: 2026-09-11

  Substantive 300+ line guide plus ORM, async, views, templates, testing, deployment, admin and checklist references. New project guidance Django 6.x/Python 3.12+; preserve installed version/LTS. Background Tasks require a real production backend. Claims several 6.1 APIs: gate on actual project version; registry Django 6.1.1 observed. Generic service-layer and always-custom-user conventions should respect existing projects. Reference prose contains test examples, no standalone executable eval suite found. Source was reviewed statically; upstream runtime tests were not executed. Original files remain inert specialists within the L11 project workflow.
