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

### More things a module can have
- **`kind`** of a model text changes how the "paper" looks: `email`, `letter`, `diary` (ruled notebook paper), `story` (book page), `essay`.
- **Paragraphs with several clickable sentences** (used in the essay): give the segments the same paragraph name, for example
  `seg('evidence', '…', '…', { p: 'b1' })`. Segments with the same `p` that follow each other become one paragraph.
- **Segment flags** (the last value of `seg(...)`): `{ t: 1 }` title style, `{ b: 1 }` bold, `{ a: 'r' }` right aligned,
  `{ ref: 1 }` an APA reference with hanging indent, `{ p: 'name' }` inline paragraph.
- **Italics:** write `*title*` (used for titles in APA references).
- **`explainers`** are extra boxes on the overview page. Four types: `stages` (with `style: 'curve'` or `'blocks'`, linked to parts),
  `cards` (tell / show), `table` and `pairs` (wrong / right). Look at `content/short-story.js` and `content/argumentative.js` for examples.
- **Link straight to a part:** `#/m/<module>/models/<model>/<part>`, for example `#/m/argumentative/models/phones-essay/thesis`.
- **Real sources:** if a model text cites sources, check every fact against the source and every reference detail (author, year, title,
  DOI) before you publish. Write the check date in a comment at the top of the file.

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

### Flere ting en modul kan ha
- **`kind`** på en modelltekst endrer «papirutseendet»: `email`, `letter`, `diary` (linjert skriveblokk), `story` (bokside), `essay`.
- **Avsnitt med flere klikkbare setninger** (brukt i essayet): gi segmentene samme avsnittsnavn, for eksempel
  `seg('evidence', '…', '…', { p: 'b1' })`. Segmenter med samme `p` som kommer etter hverandre blir ett avsnitt.
- **Segmentflagg** (siste verdi i `seg(...)`): `{ t: 1 }` tittelstil, `{ b: 1 }` fet, `{ a: 'r' }` høyrejustert,
  `{ ref: 1 }` en APA-kilde med hengende innrykk, `{ p: 'navn' }` avsnitt med flere setninger.
- **Kursiv:** skriv `*tittel*` (brukt for titler i APA-kilder).
- **`explainers`** er ekstra bokser på oversiktssiden. Fire typer: `stages` (med `style: 'curve'` eller `'blocks'`, knyttet til deler),
  `cards` (fortelle / vise), `table` og `pairs` (feil / riktig). Se `content/short-story.js` og `content/argumentative.js` for eksempler.
- **Lenke rett til en del:** `#/m/<modul>/models/<modell>/<del>`, for eksempel `#/m/argumentative/models/phones-essay/thesis`.
- **Ekte kilder:** hvis en modelltekst viser til kilder, må du kontrollere hvert faktum mot kilden og hver detalj i kildelisten
  (forfatter, år, tittel, DOI) før du publiserer. Skriv datoen du kontrollerte i en kommentar øverst i filen.

### Temamoduler (Grammar, Sources, Dictionary)
Noen moduler har ikke modelltekster, men **temaer** (`topics`). Hvert tema er en egen side: `#/m/<modul>/t/<tema>`.
Se `content/grammar.js` (fire fulle temaer) og `content/sources.js`.

```js
topics: [ { id: 'prepositions', icon: 'arrow-right', reviewed: false, curriculum: ['K4','K5'],
  title: t('Prepositions','Preposisjoner'), blurb: t('…','…'),
  top5: [ t('…','…') ],                       // «Top 5 things to remember»
  sections: [ { h: t('Time','Tid'), blocks: [ …blokker… ] } ],
  practice: [ …oppgaver… ],                   // vises nederst på siden
  resources: [ … ] } ]                        // valgfritt: lenker for dette temaet
```

**Blokker** (i `sections[].blocks`): `{ p: t(…) }` avsnitt · `{ ul: [t(…)] }` liste · `{ rule: t(…) }` regelboks ·
`{ nor: { note, bad, good } }` «Typisk feil for norsktalende» · `{ ex: [ex('English','norsk')] }` eksempler ·
`{ table: { head: [..], rows: [[..],[..]] } }` · `{ pairs: [{ bad, good, note }] }` · `{ steps: [{ h, p }] }` ·
`{ lvl: 2, blocks: [...] }` «Neste nivå»-boks som vises først på nivå 2 eller 3 · `{ widget: '…' }`.

**Oppgaver:** `mcq`, `gap`, `sort` og `order` som i modulene over. Legg til `ctx: '…'` på en `mcq` for en kort tekst over spørsmålet.

**Verktøy (widgets):** `widget: 'verbs'` (verbtabell fra `module.verbs`), `'glossary'` (fra `module.glossary`), `'source-check'`
(spørsmål med `id`, `q`, `look`), `'decider'` (valg med `label`, `tools`, `tip`) og `'apa'` (sitatbygger). Et tema kan ha `widget` på toppnivå.

**Flere filer for én modul:** `grammar-2.js` og `grammar-3.js` utvider `APP.module('grammar')` med `.topics.push(...)`.
Legg filnavnene i `content/index.js` etter hovedfilen.

**Verbtabellen:** hver rad er `{ b, p, pp, nb, core }` (`core: true` = vanlig verb). Bruk `{learnt|learned}` for UK/US.
De «vanligste verbene» er valgt av forfatteren, ikke hentet fra en offisiell frekvensliste.

### Endre eksisterende tekst
Åpne modulfilen, finn teksten, endre den (både engelsk og norsk), lagre, og sjekk med `validate.html`.
