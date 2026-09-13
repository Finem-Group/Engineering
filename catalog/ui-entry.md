---
name: finem-ui-ux
description: "Design, review and polish web or mobile UI using nine bundled original XYLEX specialists. Works without Engineering Core; integrates with Core when available."
---

# UI Plugins

Use the existing product, user request and supplied references first. Choose the smallest relevant specialist below, opening its original SKILL.md relative to this file's parent skills directory. Do not run every specialist or repeat a review already completed by another skill.

## Without Core

This plugin is self-contained. Missing Engineering Core must not block UI work. Read the selected local specialist and its referenced support files; keep all helper paths relative to that original skill directory.

| Task | Local original skill |
| --- | --- |
| Design or improve an interface | ../ui-design/SKILL.md |
| Find useful visual references | ../ui-radar/SKILL.md |
| Avoid generic UI and define product-specific direction | ../anti-ui-slop/SKILL.md |
| Review a rendered interface | ../ui-slop-score/SKILL.md |
| Extract design tokens from a website | ../extract-design-system/SKILL.md |
| Refine existing components | ../polish-ui-components/SKILL.md |
| Implement web motion | ../transitions-dev/SKILL.md |
| Refine existing web motion | ../transitions-polish/SKILL.md |
| Add a requested development annotation toolbar | ../agentation/SKILL.md |

Use one primary design workflow, not ui-design and anti-ui-slop as competing global instructions. Add a focused specialist only for an unresolved part of the task. Motion CSS specialists apply to web interfaces, not native mobile animation APIs.

External research is optional when local evidence is sufficient. No connected service is required just to load these skills. Website extraction may need its separate CLI and browser dependencies. Do not install these automatically on plugin installation. Invoke Agentation only when the user requests annotation feedback; keep its toolbar development-only.

## With Core

If a compatible finem-core is available and the task needs the broader engineering workflow, open its skills/finem-engineering/SKILL.md through the host's actual skill path. Let that single coordinator own cross-discipline planning. Preserve existing .l11/config.json selections.

capabilities.json describes the optional Core-backed UX, design-system and accessibility route. It references Impeccable, Vercel guidelines and WCAG audit patterns in Core; those originals are not bundled locally in this UI plugin. Use matching Core and prerequisite area versions for that route. If unavailable or mismatched, explain that limitation and continue the locally supported UI work without claiming the Core-backed checks ran.

## Verify the result

For implementation, render the relevant screens and exercise the changed interactions when the available tools permit. Check responsive layout, content overflow, focus, accessible names and reduced-motion behavior as relevant. Report checks actually performed and remaining limitations. For advice-only requests, provide advice without editing the project.
