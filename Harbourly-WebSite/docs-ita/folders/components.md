# Cartella `src/components`

Scopo: componenti condivisi e riutilizzabili.

Sottocartelle:

- `layout/`: shell pubblica/admin, header, sidebar, navigation, route guard.
- `ui/`: primitives generiche come Button, Card, Modal, Input, Select, Table, stati vuoti/caricamento.

Regole:

- I componenti in `components/ui` devono essere agnostici rispetto al dominio Harbourly.
- I componenti in `components/layout` possono conoscere la struttura dell'app, ma non devono contenere logica business di feature.
- Componenti specifici di richieste, fornitori, catalogo o analytics stanno in `src/features/<feature>/components`.
- Preferire props chiare, accessibilita base, focus state e composizione.

Quando modificarla:

- Nuova primitive UI riusabile.
- Cambio layout globale.
- Miglioramento accessibilita/stati comuni.
- Refactor di duplicazione reale tra feature.

Da evitare:

- Chiamate repository/API.
- Import da `src/mocks`.
- Tipi business profondi dentro primitives UI.
- Componenti troppo specifici mascherati da componenti generici.
