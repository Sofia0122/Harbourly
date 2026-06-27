# Cartella `src/lib`

Scopo: infrastruttura frontend condivisa.

Contiene:

- `apiClient.ts`: client HTTP condiviso.
- `queryClient.ts`: configurazione TanStack Query.
- `repositories.ts`: selezione centralizzata repository mock/HTTP.
- `ports.ts`: helper/lookup porti.
- `constants.ts`: costanti condivise.
- `date.ts`: helper date.
- `formatters.ts`: helper formattazione.
- `cn.ts`: utility class names.

Regole:

- Centralizzare qui cio che e condiviso tra feature.
- Tenere la selezione dei data source in `repositories.ts`.
- Evitare dipendenze da componenti React quando il file e utility pura.
- Evitare logica business specifica se appartiene chiaramente a una feature.

Quando modificarla:

- Nuova utility usata da piu feature.
- Cambio API client.
- Cambio query client.
- Aggiunta repository factory per nuova feature.
- Nuove costanti realmente globali.

Controlli utili:

- Se tocchi `repositories.ts`, verificare che mock e HTTP implementino lo stesso contratto.
- Se tocchi `apiClient.ts`, verificare compatibilita con `VITE_API_BASE_URL`.
