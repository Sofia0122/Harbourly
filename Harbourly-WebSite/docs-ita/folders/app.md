# Cartella `src/app`

Scopo: composizione applicativa e bootstrap.

Contiene:

- `main.tsx`: entrypoint React.
- `App.tsx`: root component.
- `router.tsx`: configurazione router.
- `routes.ts`: costanti route.
- `providers.tsx`: provider globali, inclusa integrazione query client.

Regole:

- Qui stanno wiring, providers, route definitions e concerns globali.
- Non inserire logica business.
- Non importare mocks direttamente.
- Non chiamare API direttamente.

Quando modificarla:

- Nuova route.
- Nuovo provider globale.
- Cambio routing/layout di alto livello.
- Integrazione globale come query client, auth provider futuro, feature flags future.

Controlli utili:

- Verificare che route pubbliche/admin restino coerenti con `docs-ita/routing.md`.
- Se si aggiunge auth reale, aggiornare `AdminRouteGuard` e la documentazione routing.
