# Cartella `src/mocks`

Scopo: dati temporanei per sviluppo locale.

Contiene dati mock per:

- richieste
- servizi
- fornitori
- porti

Regole:

- I mocks devono essere consumati dai repository mock, non da pagine o componenti UI.
- I dati mock devono rispettare i tipi feature o essere adattati dai repository.
- Non usare mocks come fonte implicita di verita per decisioni architetturali future.
- Aggiornare i mocks quando serve testare stati UI realistici.

Quando modificarla:

- Nuovi casi di stato da visualizzare.
- Nuove feature in attesa di backend.
- Allineamento temporaneo con un contratto API previsto.

Controlli utili:

- Dopo modifiche ai mock, verificare le pagine che mostrano liste, dettaglio, stati vuoti e form.
- Evitare dati troppo perfetti: includere stati pending/completed/error-like quando utili alla UI.
