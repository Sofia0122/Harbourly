# Project Map

Application root:

```text
Harbourly-WebSite/
  docs/                  English documentation
  docs-ita/              Italian documentation and session context
  public/                Static assets served by Vite
  src/                   Frontend source
  package.json           Scripts and dependencies
  vite.config.ts         Vite config
  tsconfig*.json         TypeScript configs
  eslint.config.js       Lint config
```

`src` structure:

```text
src/
  app/                   Bootstrap, providers, router, route constants
  assets/                Assets imported by source code
  components/            Shared UI primitives and layouts
  features/              Business modules
  lib/                   API client, repository factory, query client, helpers
  mocks/                 Temporary data for mock repositories
  pages/                 Route-level components
  styles/                Global CSS and design tokens
  types/                 Cross-feature types
```

Folder responsibilities:

- `src/app`: application wiring, no business logic.
- `src/pages`: route composition, thin by design.
- `src/features`: business modules with contracts, hooks, services and repositories.
- `src/components`: reusable UI and layout components.
- `src/lib`: shared infrastructure and data-source selection.
- `src/mocks`: local development data consumed by mock repositories.
- `src/styles`: global CSS and design tokens.
