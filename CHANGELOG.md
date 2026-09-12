# Changelog

## 0.7.0

- Give UI/UX, Infrastructure & DevOps, Security & Privacy and seven other engineering disciplines their own names, purpose and expected deliverables, with one shared Core.
- Assign each of the 43 capabilities to one area while preserving its original lifecycle tag and skill mappings. Frontend work now selects its own narrow scope instead of the entire former Build bundle.
- Preserve 0.6 phase selectors with their exact capability scope and map both previous plugin layouts to the new areas. Existing CLI profiles and all 56 technology choices stay compatible.
- Retain all 180 original skills and 2,651 original/support files byte for byte in the shared library.

## 0.6.0

- Consolidate 57 native plugins into one Core and seven existing lifecycle phases: Context, Design, Build, Verify, Deliver, Operate and Evolve.
- Preserve all 180 original skills, 50 pinned sources and 56 technology options. Store the complete original library once in Core, removing 871 duplicate file copies.
- Select phases and their capability prerequisites independently of framework/provider options. Validate shared-library paths, matching versions, conflicts and replacement ordering.
- Keep existing L11 CLI configuration compatible; provide all 56 old-plugin mappings and accept legacy option IDs through `--extensions`.

Native marketplace 0.6 uses the unchanged L11 0.5 catalog. Update Core and phase plugins together; disable old native technology entries after migrating.

## 0.5.0

- Add ten selected original XYLEX architecture, code-audit and UI-polish skills, including supporting references and their original license.
- Retain source and runtime caveats, including the original Windows blast-zone metrics limitation.

## 0.4.1

- Serialize native skill descriptions as quoted YAML scalars, fixing the core and MongoDB migration skill headers.
- Bundle transitive supporting sources with their hashes and notices. The core now includes the original offline web guidelines; all 49 catalog sources are present.
- Select packs per project/module rather than activating every installed plugin. Validate installed dependencies, conflicts, exclusive groups and overlapping replacements using the core's read-only helper.
- Keep browser backend selection consistent with active packs and existing L11 project configuration.
- Add generator regression tests, shipped-artifact checks and selection tests, with Windows/Linux CI on Node 22 and 24.

All upstream skill bodies and revisions remain unchanged from the L11 0.4.0 catalog. This is a marketplace packaging release. Update the core and selected packs together. Interactive host sessions, tool runtimes and provider connections remain separate validation steps.
