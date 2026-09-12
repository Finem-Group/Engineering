# Changelog

## 0.4.1

- Serialize native skill descriptions as quoted YAML scalars, fixing the core and MongoDB migration skill headers.
- Bundle transitive supporting sources with their hashes and notices. The core now includes the original offline web guidelines; all 49 catalog sources are present.
- Select packs per project/module rather than activating every installed plugin. Validate installed dependencies, conflicts, exclusive groups and overlapping replacements using the core's read-only helper.
- Keep browser backend selection consistent with active packs and existing L11 project configuration.
- Add generator regression tests, shipped-artifact checks and selection tests, with Windows/Linux CI on Node 22 and 24.

All upstream skill bodies and revisions remain unchanged from the L11 0.4.0 catalog. This is a marketplace packaging release. Update the core and selected packs together. Interactive host sessions, tool runtimes and provider connections remain separate validation steps.
