# Prompt Di Avvio Sessione

Usa questo file come istruzione iniziale per Codex quando vuoi riprendere il progetto senza far rileggere tutto.

```text
Stiamo lavorando su Harbourly-WebSite, una frontend app React/Vite/TypeScript per servizi portuali.

Prima di modificare codice, leggi:
- docs-ita/context/project-brief.md
- docs-ita/context/project-map.md
- docs-ita/context/iteration-rules.md
- docs-ita/folders/<cartella-interessata>.md
- README.md locale della cartella interessata, se presente

Rispetta l'architettura:
Page -> feature component -> feature hook -> feature service -> repository -> apiClient

Non chiamare fetch da pagine/componenti, non importare mocks fuori dai repository mock, non spostare logica business dentro components/ui.

Repository mock di default; HTTP futuro via VITE_REPOSITORY_MODE=http e VITE_API_BASE_URL.

Mantieni npm run build funzionante.
```

Se la sessione riguarda UI:

```text
Leggi anche docs-ita/ui-guidelines.md e la scheda docs-ita/folders/components.md.
Mantieni componenti generici in src/components e componenti business in src/features.
```

Se la sessione riguarda backend/API:

```text
Leggi anche docs-ita/api-integration.md e docs-ita/folders/lib.md.
Completa i repository HTTP senza cambiare le interfacce repository gia usate da servizi e hook.
```
