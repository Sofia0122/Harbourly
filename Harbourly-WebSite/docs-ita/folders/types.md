# Cartella `src/types`

Scopo: tipi TypeScript condivisi tra piu feature.

Contiene:

- `common.types.ts`: tipi comuni, per esempio `Port`.

Regole:

- Inserire qui solo tipi realmente cross-feature.
- Tipi specifici di richieste, fornitori, servizi o analytics restano in `src/features/<feature>/types`.
- Evitare di trasformare questa cartella in un archivio globale indistinto.

Quando modificarla:

- Un modello e usato da piu feature senza appartenere chiaramente a una sola.
- Serve un tipo comune per helper o componenti condivisi.

Controlli utili:

- Prima di aggiungere un tipo qui, verificare se appartiene a una feature.
- Se cambi un tipo comune, cercare tutti gli import e aggiornare i contratti coinvolti.
