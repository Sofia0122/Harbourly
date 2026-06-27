# `src/lib`

Purpose: shared frontend infrastructure.

Contains the API client, query client, repository selection, constants and formatting/date helpers.

Keep data-source selection centralized in `repositories.ts`. Shared utilities belong here only when they are genuinely cross-feature.
