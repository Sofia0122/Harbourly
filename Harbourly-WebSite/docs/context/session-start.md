# Session Start Prompt

Use this as starting context for Codex when resuming the project.

```text
We are working on Harbourly-WebSite, a React/Vite/TypeScript frontend for harbour services.

Before editing code, read:
- docs/context/project-brief.md
- docs/context/project-map.md
- docs/context/iteration-rules.md
- docs/folders/<relevant-folder>.md
- the local README in the target folder, if present

Respect the architecture:
Page -> feature component -> feature hook -> feature service -> repository -> apiClient

Do not call fetch from pages/components, do not import mocks outside mock repositories, and do not put business logic in components/ui.

Mock repositories are the default; future HTTP mode uses VITE_REPOSITORY_MODE=http and VITE_API_BASE_URL.

Keep npm run build working.
```
