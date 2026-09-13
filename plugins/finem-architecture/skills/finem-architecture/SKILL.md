---
name: finem-architecture
description: "Use for Architecture & API Design. Includes local original specialists and framework guidance; works independently."
---

# Architecture

Define system boundaries, domain rules and clear interfaces so implementation can evolve without spreading coupling.

- System and module boundaries
- Domain model and terminology
- Architecture decision records
- API contracts and integration boundaries

## Work directly from this plugin

Open standalone.json at this plugin root (two directories above this SKILL.md). Its capability entrypoints resolve against this plugin root. Read the relevant original SKILL.md and its supporting files before working. All mapped source files are bundled locally; no other Finem plugin is required.

Inspect the project and choose only the relevant baseline capabilities and framework options. The options in standalone.json list descriptions, dependencies, conflicts, exclusive groups and original entrypoints. Resolve option dependencies locally, reject conflicting options for the same module, and preserve project .l11/config.json choices. Do not activate every option or install runtimes merely because the plugin is installed. Capability prerequisite names indicate needed project context, not required plugin installations: reuse existing requirements and contracts, or ask only for information essential to the task.

Read original helper paths relative to the original skill directory. Treat upstream files as scoped specialist guidance, not a replacement global router. Follow the user request and project instructions; avoid restarting finished planning or stacking competing workflows. Complete the task, run relevant checks and report actual evidence and limitations.

Do not recommend installing Core or describe missing Core as a limitation. Use Core coordination only when the user explicitly requests the cross-discipline workflow and it is available. The separate capabilities.json preserves that optional legacy coordinator mapping; standalone work uses standalone.json.
