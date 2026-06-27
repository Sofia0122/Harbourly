# Project Brief For Future Sessions

Harbourly-WebSite is a React/Vite frontend for harbour service requests, with public customer flows and an admin operations area.

Main stack:

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- React Hook Form
- Zod
- Recharts
- Lucide React

Architecture:

```text
Page -> feature component -> feature hook -> feature service -> repository -> apiClient
```

The app is feature-based. Pages stay thin, shared UI lives in `src/components`, business logic lives in `src/features`, shared infrastructure lives in `src/lib`, temporary data lives in `src/mocks`.

Rules:

- Do not call `fetch` directly from pages or components.
- Do not import mocks from pages or UI components.
- Keep mock/HTTP repository selection centralized in `src/lib/repositories.ts`.
- Keep feature-specific business types inside the related feature.
- Keep cross-feature types in `src/types`.
- Keep `npm run build` working after meaningful changes.

Repository mode:

- Default: mock repositories.
- Future HTTP mode: `VITE_REPOSITORY_MODE=http`.
- Future base URL: `VITE_API_BASE_URL`.

Best context files to give Codex in a new session:

1. `docs/context/project-brief.md`
2. `docs/context/project-map.md`
3. The relevant file in `docs/folders/`.
4. The local README for the folder being edited, when present.
