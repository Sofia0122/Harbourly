# Cartella `src/features`

Scopo: moduli business feature-based.

Feature attuali:

- `analytics`: analytics admin.
- `requests`: richieste di servizio, form, tracking, viste admin.
- `services-catalog`: catalogo servizi.
- `suppliers`: fornitori.

Pattern dati:

```text
components -> hooks -> services -> repository interface -> mock/http repository
```

Struttura tipica:

```text
feature/
  api/
    feature.repository.ts
    feature.mock-repository.ts
    feature.http-repository.ts
  components/
  hooks/
  services/
  schemas/
  types/
  README.md
```

Regole:

- La feature possiede tipi, servizi, hook, repository e componenti business relativi al proprio dominio.
- Le interfacce repository devono restare stabili per permettere switch mock/HTTP.
- I mock repository possono leggere da `src/mocks`; il resto della feature no, salvo necessita esplicita da documentare.
- La validazione form/schema sta nella feature interessata.

Quando modificarla:

- Nuova capacita business.
- Nuovo endpoint backend per una feature.
- Nuovi componenti specifici di dominio.
- Cambio modello dati di una feature.

Controlli utili:

- Se cambia un tipo feature, controllare repository mock, repository HTTP, service, hook e pagine che lo consumano.
- Se cambia un contratto repository, aggiornare sia implementazione mock sia HTTP.
