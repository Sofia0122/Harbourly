# Mappa Del Progetto

Radice applicazione:

```text
Harbourly-WebSite/
  docs/                  Documentazione in inglese
  docs-ita/              Documentazione in italiano e contesto sessioni
  public/                Asset statici serviti da Vite
  src/                   Codice sorgente frontend
  package.json           Script e dipendenze
  vite.config.ts         Configurazione Vite
  tsconfig*.json         Configurazioni TypeScript
  eslint.config.js       Configurazione lint
```

Struttura `src`:

```text
src/
  app/                   Bootstrap, providers, router, route constants
  assets/                Immagini e asset importati dal codice
  components/            UI primitives e layout condivisi
    layout/              Shell pubblica/admin, header, sidebar, nav
    ui/                  Button, Card, Modal, Input, Table, stati base
  features/              Moduli business
    analytics/           Dati e viste analytics admin
    requests/            Richieste cliente/admin, form, timeline, tabelle
    services-catalog/    Catalogo servizi e categorie
    suppliers/           Fornitori
  lib/                   Api client, repository factory, query client, helper
  mocks/                 Dati temporanei per repository mock
  pages/                 Componenti route-level
    admin/               Pagine area admin
    public/              Pagine pubbliche cliente
  styles/                CSS globale e design tokens
  types/                 Tipi cross-feature
```

Responsabilita chiave:

- `src/app`: compone l'app, non contiene logica business.
- `src/pages`: collega route, layout e feature. Deve restare sottile.
- `src/features`: contiene contratti, hook, servizi, repository e componenti business.
- `src/components`: componenti riusabili e agnostici rispetto al dominio.
- `src/lib`: infrastruttura condivisa e selezione data-source.
- `src/mocks`: dati locali temporanei, accessibili solo tramite repository mock.
- `src/styles`: token e CSS globale, con Tailwind per styling locale.

Quando aggiungi una nuova feature dati:

1. Crea `src/features/<feature>/types`.
2. Crea `api/<feature>.repository.ts` con interfaccia repository.
3. Crea `api/<feature>.mock-repository.ts`.
4. Crea `api/<feature>.http-repository.ts` se serve preparare integrazione REST.
5. Crea `services/<feature>.service.ts`.
6. Crea `hooks/use<Feature>.ts`.
7. Registra la selezione in `src/lib/repositories.ts`.
8. Usa il tutto da componenti feature o pagine sottili.
