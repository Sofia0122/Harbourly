# Cartella `src/pages`

Scopo: componenti route-level.

Sottocartelle:

- `public/`: pagine cliente.
- `admin/`: pagine area operativa/admin.

Regole:

- Le pagine compongono layout, componenti feature e componenti UI.
- Le pagine devono restare sottili.
- Non chiamare repository, `fetch` o mocks dalle pagine.
- Spostare logica business in feature hook/service.

Quando modificarla:

- Nuova route.
- Cambio composizione di una pagina.
- Passaggio di parametri route a una feature.
- Aggiustamenti layout route-level.

Controlli utili:

- Per nuove pagine, aggiornare `src/app/routes.ts`, `src/app/router.tsx` e `docs-ita/routing.md`.
- Se una pagina cresce troppo, estrarre componenti specifici in `src/features/<feature>/components`.
