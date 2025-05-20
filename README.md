# Labo-String: CLI per Utilità su Stringhe

# Descrizione 

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

# Prerequisiti

- Node.js versione 20
- npm (Node Package Manager)

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

1. Clona la repository:
   ```bash
   git clone https://github.com/MatteoPareto/ssgs-labo-02.git
   cd ssgs-labo-02
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia l'applicazione:
   ```bash
   npm start
   ```

4. Esegui i test unitari:
   ```bash
   npm test
   ```

5. Genera il report di code coverage:
   ```bash
   npm run coverage
   ```
   Il report HTML sarà disponibile nella cartella `coverage/lcov-report/index.html`.

## Integrazione Continua (CI)

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test e generare il report di code coverage ad ogni push o pull request sul branch `main`.

- I test vengono eseguiti automaticamente.
- Il report HTML della code coverage viene caricato come artefatto del workflow e può essere scaricato dalla sezione "Actions" di GitHub, all'interno dei dettagli del workflow.

## Struttura del progetto

- `src/` — Contiene i file sorgente principali del progetto (`stringUtils.js`).
- `test/` — Contiene i test unitari (`index.test.js`).
- `coverage/` — Cartella generata automaticamente da Jest con i report di code coverage.
- `index.js` — Entry point dell'applicazione CLI.
- `package.json` — Configurazione del progetto e delle dipendenze.
- `.gitignore` — File per escludere cartelle/file dal versionamento.
- `README.md` — Documentazione del progetto.

---

