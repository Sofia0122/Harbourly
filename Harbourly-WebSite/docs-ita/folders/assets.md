# Cartella `src/assets`

Scopo: asset importati dal codice frontend.

Contiene immagini e file statici usati direttamente da componenti o pagine, per esempio `hero.png`.

Regole:

- Usare questa cartella per asset bundlati da Vite tramite import.
- Usare `public/` per asset che devono essere serviti con path stabile senza import.
- Evitare asset non ottimizzati o duplicati.
- Non mettere qui dati mock o documentazione.

Quando modificarla:

- Aggiunta o sostituzione immagini usate da UI.
- Pulizia asset starter non piu usati.
- Introduzione asset visuali coerenti con brand/prodotto.

Controlli utili:

- Cercare import prima di eliminare un asset.
- Verificare peso e dimensioni delle immagini se impattano la landing o pagine pubbliche.
