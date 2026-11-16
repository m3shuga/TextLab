# How to add or edit content / Slik legger du til og endrer innhold

## English

### The idea
Every text type or topic is a **module**: one file in the `content` folder. The site finds the modules
from the list in `content/index.js`. You never need to change the program files in `js/`.

### Add a new module
1. In the `content` folder, copy `template-copy-me.js` and give the copy a new name, for example `diary.js`
   (lowercase, hyphens, no spaces, no æøå, **not** starting with `_`).
2. Open the copy in a plain text editor (Notepad, TextEdit in plain-text mode, VS Code). Fill it in. The template explains each part.
3. Open `content/index.js` and add the name without `.js` to the list `APP.moduleFiles`, for example `'diary'`.
   If the module is in the "coming soon" list in the same file, it will move to the real cards by itself.
4. Double-click `validate.html` to check your work. Fix every **ERROR**. Read every **WARNING**.
5. Double-click `index.html` and test the module in both languages (EN / NB), all three levels and both UK / US.
6. Upload the changed files (see `UPLOAD-GUIDE.md`).

### Rules that keep the site working
- **Every text has two languages.** Write `t('English', 'Norsk')`. A missing Norwegian text is an error.
- **Every model-text piece (segment) needs a Norwegian translation** (natural bokmål, not word for word).
- **Parts are shared by the levels.** All three levels of a model must use the same part names. Write the explanation once.
- **New texts are drafts.** Keep `reviewed: false` until you have read the text and approved it. Then set it to `true`.
- **UK / US:** write `{colour|color}` (British first). Use it for spelling, dates and closings that differ. Keep the list short.
- **Links:** only add a link to `resources` after you have opened it and checked that it works and fits. Add the date you checked.
  Links you have found but not checked go in `pending` (not shown to students).
- Do not copy other people's texts. Write your own explanations and link to the source.
- Level targets for emails and letters: Level 1 about 80–130 words, Level 2 130–200, Level 3 200–280.
  `validate.html` warns when a text is outside these.

### Edit existing text
Open the module file, find the text, change it (both the English and the Norwegian), save, and check with `validate.html`.

---

## Norsk

### Ideen
Hver teksttype eller hvert tema er en **modul**: én fil i mappen `content`. Siden finner modulene i listen i
`content/index.js`. Du trenger aldri å endre programfilene i `js/`.

### Legg til en ny modul
1. Kopier `template-copy-me.js` i mappen `content`, og gi kopien et nytt navn, for eksempel `diary.js`
   (små bokstaver, bindestrek, ingen mellomrom, ingen æøå, **ikke** starte med `_`).
2. Åpne kopien i et enkelt tekstprogram (Notisblokk, TextEdit i ren tekst, VS Code). Fyll den ut. Malen forklarer hver del.
3. Åpne `content/index.js` og skriv navnet uten `.js` i listen `APP.moduleFiles`, for eksempel `'diary'`.
   Hvis modulen står i «kommer snart»-listen i samme fil, flytter den seg selv til de ekte kortene.
4. Dobbeltklikk `validate.html` for å sjekke arbeidet. Rett alle **ERROR**. Les alle **WARNING**.
5. Dobbeltklikk `index.html` og test modulen på begge språk (EN / NB), alle tre nivåer og både UK / US.
6. Last opp filene du har endret (se `UPLOAD-GUIDE.md`).

### Regler som holder siden i orden
- **Alle tekster har to språk.** Skriv `t('English', 'Norsk')`. Manglende norsk tekst regnes som en feil.
- **Hver bit av en modelltekst (segment) trenger norsk oversettelse** (naturlig bokmål, ikke ord for ord).
- **Delene er felles for nivåene.** Alle tre nivåer av en modelltekst må bruke de samme delene. Forklaringen skriver du én gang.
- **Nye tekster er utkast.** La `reviewed: false` stå til du har lest og godkjent teksten. Sett den da til `true`.
- **UK / US:** skriv `{colour|color}` (britisk først). Bruk det på staving, datoer og avslutninger som er ulike. Hold listen kort.
- **Lenker:** legg bare en lenke i `resources` etter at du har åpnet den og sjekket at den virker og passer. Skriv datoen du sjekket.
  Lenker du har funnet, men ikke sjekket, legger du i `pending` (vises ikke for elevene).
- Ikke kopier andres tekster. Skriv egne forklaringer og lenk til kilden.
- Lengdemål for e-post og brev: nivå 1 ca. 80–130 ord, nivå 2 130–200, nivå 3 200–280.
  `validate.html` gir en advarsel hvis en tekst ligger utenfor.

### Endre eksisterende tekst
Åpne modulfilen, finn teksten, endre den (både engelsk og norsk), lagre, og sjekk med `validate.html`.
