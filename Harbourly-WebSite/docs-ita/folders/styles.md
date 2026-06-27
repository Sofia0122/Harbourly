# Cartella `src/styles`

Scopo: CSS globale e design tokens.

Contiene:

- `globals.css`: stili globali e import principali.
- `tokens.css`: variabili/token condivisi.

Regole:

- Preferire Tailwind utilities nei componenti.
- Usare token CSS per colori, spacing o valori condivisi davvero globali.
- Non mettere stili feature-specific globali se possono stare nel componente.
- Mantenere focus state e leggibilita responsive.

Quando modificarla:

- Cambio design tokens.
- Reset/base globale.
- Variabili condivise usate in piu aree.
- Fix globale di accessibilita/typography.

Controlli utili:

- Dopo modifiche globali, verificare pagine pubbliche e admin.
- Evitare palette monocromatiche o stili globali che rendono difficile comporre nuove UI.
