# Project Brief Per Sessioni Future

Harbourly-WebSite e una frontend app React/Vite per gestire richieste di servizi portuali, con area pubblica per clienti e area admin per operazioni interne.

Stack principale:

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

Architettura:

```text
Page -> feature component -> feature hook -> feature service -> repository -> apiClient
```

Il progetto usa una struttura feature-based. Le pagine restano sottili, i componenti condivisi stanno in `src/components`, la logica business vive in `src/features`, l'infrastruttura condivisa in `src/lib`, i dati temporanei in `src/mocks`.

Principi da rispettare:

- Non chiamare `fetch` direttamente da pagine o componenti.
- Non importare mock da pagine o UI component.
- Tenere la scelta mock/HTTP centralizzata in `src/lib/repositories.ts`.
- Mettere tipi business specifici dentro la feature relativa.
- Mettere tipi trasversali in `src/types`.
- Mantenere `npm run build` funzionante dopo ogni modifica importante.

Repository mode:

- Default: mock repositories.
- HTTP futuro: `VITE_REPOSITORY_MODE=http`.
- Base URL futura: `VITE_API_BASE_URL`.

Route pubbliche:

- `/`
- `/services`
- `/request/:serviceSlug`
- `/request-confirmation/:reference`
- `/track/:reference`

Route admin:

- `/admin`
- `/admin/requests`
- `/admin/requests/:requestId`
- `/admin/suppliers`
- `/admin/services`
- `/admin/analytics`

Documenti consigliati da dare a Codex in una nuova sessione:

1. `docs-ita/context/project-brief.md`
2. `docs-ita/context/project-map.md`
3. Il file in `docs-ita/folders/` relativo alla cartella da modificare.
4. Il README locale della cartella interessata, se serve dettaglio extra.
