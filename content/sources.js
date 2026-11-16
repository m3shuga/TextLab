/* ==========================================================================
   MODULE: Sources and citation (APA 7th)
   Written for this site (not copied). Inspired by the approach of Kildekompasset.no (see Learn more).
   Examples marked "Example only" are made up. ALL text is reviewed:false until the teacher approves it.
   NOTE FOR THE TEACHER: the APA website itself could not be read when this was written. The patterns
   follow Kildekompasset and Purdue OWL (both checked). Please check the AI-chatbot pattern before use.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var mcq = function (id, lv, q, opts, ans, why, ctx) { return { id: id, type: 'mcq', level: lv, q: q, options: opts, answer: ans, why: why, ctx: ctx }; };
  var gap = function (id, lv, before, after, opts, ans, why) { return { id: id, type: 'gap', level: lv, q: t('Choose the correct word.', 'Velg riktig ord.'), before: before, after: after, options: opts, answer: ans, why: why }; };
  var sort = function (id, lv, q, buckets, items, why) { return { id: id, type: 'sort', level: lv, q: q, buckets: buckets, items: items.map(function (x) { return { text: x[0], b: x[1] }; }), why: why }; };
  var ex = function (en, nb) { return { en: en, nb: nb }; };

  var topics = [
    /* ---------------------------------------------------------------- 1 */
    { id: 'why', icon: 'info', reviewed: false, curriculum: ['K6', 'K7', 'K11'],
      title: t('Why use sources?', 'Hvorfor bruke kilder?'),
      blurb: t('What a source is, when you must give one, and why it matters.', 'Hva en kilde er, når du må oppgi en, og hvorfor det er viktig.'),
      top5: [
        t('A source is where you got information or an idea: a book, a web page, a video, an image, an AI answer.', 'En kilde er der du fant informasjon eller en idé: en bok, en nettside, en video, et bilde, et KI-svar.'),
        t('You must show your source when you use someone else\'s words, facts or ideas.', 'Du må vise kilden når du bruker andres ord, fakta eller ideer.'),
        t('Good sources make your text more trustworthy.', 'Gode kilder gjør teksten din mer pålitelig.'),
        t('Using other people\'s work without a reference is called plagiarism (plagiat).', 'Å bruke andres arbeid uten henvisning kalles plagiat.'),
        t('APA 7th is the style we use: a short note in the text and a list of references at the end.', 'APA 7 er stilen vi bruker: en kort henvisning i teksten og en referanseliste til slutt.')],
      sections: [
        { h: t('Do I need a source?', 'Trenger jeg en kilde?'), blocks: [
          { table: { head: [t('Situation', 'Situasjon'), t('Source?', 'Kilde?')], rows: [
            [t('A fact you looked up (numbers, dates, research)', 'Et faktum du slo opp (tall, datoer, forskning)'), t('Yes', 'Ja')], [t('Someone else\'s opinion or idea', 'Noen andres mening eller idé'), t('Yes', 'Ja')], [t('A quotation (a sentence copied exactly)', 'Et sitat (en setning kopiert nøyaktig)'), t('Yes', 'Ja')],
            [t('A picture, graph or table from somewhere', 'Et bilde, en graf eller en tabell fra et annet sted'), t('Yes', 'Ja')], [t('Your own opinion or experience', 'Din egen mening eller erfaring'), t('No', 'Nei')], [t('Common knowledge (for example: Oslo is the capital of Norway)', 'Allmennkunnskap (for eksempel: Oslo er hovedstaden i Norge)'), t('No', 'Nei')]] } },
          { rule: t('When you are not sure: give the source. It is better to give one source too many than one too few.', 'Når du er usikker: oppgi kilden. Det er bedre å oppgi én kilde for mye enn én for lite.') }] },
        { h: t('The two parts of APA', 'De to delene av APA'), blocks: [
          { steps: [{ h: t('In the text', 'I teksten'), p: t('A short note in brackets: (Author, year). It tells the reader that you used a source.', 'En kort henvisning i parentes: (Forfatter, år). Den forteller leseren at du har brukt en kilde.') }, { h: t('At the end', 'Til slutt'), p: t('A list called "References" with all the sources, in alphabetical order. It tells the reader where to find them.', 'En liste som heter «References» med alle kildene, i alfabetisk rekkefølge. Den forteller leseren hvor de finnes.') }] },
          { p: t('Your teacher decides which style you must use. Ask if you are not sure.', 'Læreren din bestemmer hvilken stil du skal bruke. Spør hvis du er usikker.') }] }],
      practice: [
        sort('s1-1', [1, 2, 3], t('Do you need a source? Sort the situations.', 'Trenger du en kilde? Sorter situasjonene.'), [t('Source needed', 'Kilde trengs'), t('No source needed', 'Kilde trengs ikke')], [['A number from a report', 0], ['Your own opinion', 1], ['A sentence copied from a web page', 0], ['A photo from a website', 0], ['"Oslo is the capital of Norway."', 1], ['Another writer\'s idea', 0]], t('Facts, quotations, pictures and other people\'s ideas need a source. Your own thoughts and common knowledge do not.', 'Fakta, sitater, bilder og andres ideer trenger kilde. Dine egne tanker og allmennkunnskap trenger ikke.')),
        mcq('s1-2', [1, 2, 3], t('What is plagiarism?', 'Hva er plagiat?'), ['Using someone else\'s work as if it were your own', 'Writing a long text', 'Using a dictionary'], 0, t('Plagiarism = presenting other people\'s work as your own.', 'Plagiat = å presentere andres arbeid som ditt eget.')),
        mcq('s1-3', [1, 2, 3], t('Where do the full sources go in an APA text?', 'Hvor står de fullstendige kildene i en APA-tekst?'), ['In the list of references at the end', 'In the title', 'In the first sentence'], 0, t('The full sources go in the reference list.', 'De fullstendige kildene står i referanselisten.')),
        mcq('s1-5', [1, 2, 3], t('Which of these is a source?', 'Hvilken av disse er en kilde?'), ['A book, a web page or a video you used', 'Your own opinion', 'The title of your text'], 0, t('A source is where the information came from.', 'En kilde er der informasjonen kom fra.')),
        mcq('s1-4', [2, 3], t('Which of these needs a source?', 'Hvilken av disse trenger kilde?'), ['"40 % of teenagers sleep less than eight hours."', '"I think summer is the best season."', '"Water is wet."'], 0, t('A statistic is a fact from research.', 'En statistikk er et faktum fra forskning.'))] },

    /* ---------------------------------------------------------------- 2 */
    { id: 'reliable', icon: 'check', reviewed: false, curriculum: ['K6', 'K7', 'K9'],
      title: t('Is this source reliable?', 'Er kilden pålitelig?'),
      blurb: t('Ask eight questions before you trust a web page, video or post.', 'Still åtte spørsmål før du stoler på en nettside, video eller et innlegg.'),
      top5: [
        t('Anyone can publish anything online. Always check.', 'Hvem som helst kan publisere hva som helst på nett. Sjekk alltid.'),
        t('Find out WHO made it and WHY.', 'Finn ut HVEM som har laget den og HVORFOR.'),
        t('Check WHEN it was published or updated.', 'Sjekk NÅR den ble publisert eller oppdatert.'),
        t('Does the writer give evidence or sources?', 'Oppgir skribenten bevis eller kilder?'),
        t('Compare with at least one other source.', 'Sammenlign med minst én annen kilde.')],
      sections: [
        { h: t('Questions for any source', 'Spørsmål til alle kilder'), blocks: [
          { p: t('These questions are in the spirit of the source-criticism guide at Kildekompasset.no (see Learn more). They are not a copy of it.', 'Disse spørsmålene bygger på ideene i kildekritikk-veiledningen på Kildekompasset.no (se Lær mer). De er ikke en kopi.') }] },
        { h: t('Try the source check', 'Prøv kildesjekken'), blocks: [{ widget: 'source-check', title: t('Check a source', 'Sjekk en kilde'), questions: [
          { id: 'who', q: t('Do you know who made it?', 'Vet du hvem som har laget den?'), look: t('"About us", author name, organisation', '«Om oss», forfatterens navn, organisasjon') },
          { id: 'why', q: t('Is the purpose clear (to inform, not just to sell or persuade)?', 'Er formålet tydelig (å informere, ikke bare å selge eller overbevise)?'), look: t('adverts, "sponsored", tone of the text', 'reklame, «sponset», tonen i teksten') },
          { id: 'when', q: t('Is it recent enough for your topic?', 'Er den ny nok for temaet ditt?'), look: t('date published or updated', 'dato for publisering eller oppdatering') },
          { id: 'evidence', q: t('Does it show evidence or give its own sources?', 'Viser den bevis eller oppgir egne kilder?'), look: t('links, numbers, references', 'lenker, tall, referanser') },
          { id: 'expert', q: t('Does the writer know the subject (expert, organisation, researcher)?', 'Kan skribenten emnet (ekspert, organisasjon, forsker)?'), look: t('job title, institution', 'stilling, institusjon') },
          { id: 'fact', q: t('Does it separate facts from opinions?', 'Skiller den mellom fakta og meninger?'), look: t('words like "I think", strong feelings', 'ord som «jeg mener», sterke følelser') },
          { id: 'agree', q: t('Do other trustworthy sources say the same?', 'Sier andre pålitelige kilder det samme?'), look: t('search for the same fact', 'søk etter det samme faktumet') },
          { id: 'site', q: t('Is it a trustworthy kind of website (public body, school, university, news)?', 'Er det en pålitelig type nettsted (offentlig etat, skole, universitet, nyheter)?'), look: t('web address, design, mistakes', 'nettadresse, design, feil') }] }] },
        { h: t('Typical trustworthy and weak sources', 'Typiske pålitelige og svake kilder'), blocks: [
          { table: { head: [t('Often a good start', 'Ofte en god start'), t('Be careful', 'Vær forsiktig')], rows: [[t('public bodies, for example Udir, SSB, FHI', 'offentlige etater, for eksempel Udir, SSB, FHI'), t('anonymous blogs', 'anonyme blogger')], [t('universities and research journals', 'universiteter og forskningstidsskrifter'), t('posts on social media', 'innlegg i sosiale medier')], [t('encyclopedias and school books', 'oppslagsverk og skolebøker'), t('pages full of adverts', 'sider full av reklame')], [t('established newspapers', 'etablerte aviser'), t('texts with no date or author', 'tekster uten dato eller forfatter')]] } },
          { lvl: 2, blocks: [{ p: t('Even a good source can be out of date or can show only one side. A reliable source for one question is not always reliable for another.', 'Selv en god kilde kan være utdatert eller vise bare én side. En pålitelig kilde til ett spørsmål er ikke alltid pålitelig til et annet.') }] }] }],
      practice: [
        mcq('s2-1', [1, 2, 3], t('Which is the best first question to ask about a web page?', 'Hva er det beste første spørsmålet å stille om en nettside?'), ['Who made it, and why?', 'How many pictures does it have?', 'Is it long?'], 0, t('The author and the purpose tell you a lot.', 'Forfatter og formål sier mye.')),
        sort('s2-2', [1, 2, 3], t('Sort the clues.', 'Sorter hintene.'), [t('Good sign', 'Godt tegn'), t('Warning sign', 'Varselsignal')], [['The author is named and has a job title', 0], ['No date and no author', 1], ['It gives links to its own sources', 0], ['"You will never believe this!"', 1], ['A public body made it', 0], ['It is full of adverts', 1]], t('Named authors, sources and public bodies are good signs. Anonymous and emotional texts are warning signs.', 'Navngitte forfattere, kilder og offentlige etater er gode tegn. Anonyme og følelsesladde tekster er varselsignaler.')),
        mcq('s2-3', [2, 3], t('You find a fact on only one web page. What should you do?', 'Du finner et faktum på bare én nettside. Hva bør du gjøre?'), ['Check it in another trustworthy source', 'Use it, it is online', 'Delete it from your text'], 0, t('Compare with other sources.', 'Sammenlign med andre kilder.')),
        mcq('s2-4', [2, 3], t('A post says "Scientists say" but gives no names. What does that tell you?', 'Et innlegg sier «Forskere sier», men oppgir ingen navn. Hva forteller det deg?'), ['The source is weak: there is no evidence.', 'The source is strong.', 'Nothing.'], 0, t('A claim without evidence or a named source is weak.', 'En påstand uten bevis eller navngitt kilde er svak.')),
        mcq('s2-5', [3], t('Which website is most likely to give reliable statistics about Norway?', 'Hvilket nettsted gir sannsynligvis mest pålitelig statistikk om Norge?'), ['Statistics Norway (SSB)', 'An anonymous blog', 'A video comment section'], 0, t('A public body that collects the data.', 'En offentlig etat som samler inn dataene.'))] },

    /* ---------------------------------------------------------------- 3 */
    { id: 'quoting', icon: 'pen', reviewed: false, curriculum: ['K5', 'K6', 'K11'],
      title: t('Quote, paraphrase or copy?', 'Sitere, omskrive eller kopiere?'),
      blurb: t('Three ways to use a source, and which one is plagiarism.', 'Tre måter å bruke en kilde på, og hvilken som er plagiat.'),
      top5: [
        t('Quote: copy the exact words, put them in quotation marks and give the source.', 'Sitere: kopier de nøyaktige ordene, sett dem i anførselstegn og oppgi kilden.'),
        t('Paraphrase: say it in your own words and STILL give the source.', 'Omskrive: si det med dine egne ord og oppgi FORTSATT kilden.'),
        t('Copying without quotation marks and a source is plagiarism.', 'Å kopiere uten anførselstegn og kilde er plagiat.'),
        t('Changing only one or two words is not a paraphrase.', 'Å bytte ut bare ett eller to ord er ikke en omskriving.'),
        t('Do not use too many quotations. Your text should be mostly in your own words.', 'Ikke bruk for mange sitater. Teksten din skal for det meste være med dine egne ord.')],
      sections: [
        { h: t('Example (made-up source)', 'Eksempel (oppdiktet kilde)'), blocks: [
          { p: t('Original text, Example only: "Teenagers who read for fun every day often write better, because they meet many different words and sentences."', 'Originaltekst, kun eksempel: «Teenagers who read for fun every day often write better, because they meet many different words and sentences.»') },
          { table: { head: [t('How', 'Hvordan'), t('Example', 'Eksempel')], rows: [
            [t('Copy (not allowed)', 'Kopiering (ikke tillatt)'), 'Teenagers who read for fun every day often write better, because they meet many different words and sentences.'],
            [t('Quote (allowed)', 'Sitat (tillatt)'), 'According to Example (2024), "teenagers who read for fun every day often write better" (p. 3).'],
            [t('Paraphrase (allowed)', 'Omskriving (tillatt)'), 'Young people who read in their free time usually become stronger writers because they see more language (Example, 2024).']] } },
          { pairs: [{ bad: 'Teenagers who read for fun every day often write better.', good: 'Reading for fun helps young people write better (Example, 2024).', note: t('The first one is copied with no quotation marks and no source.', 'Den første er kopiert uten anførselstegn og kilde.') }] }] },
        { h: t('How to paraphrase well', 'Slik omskriver du godt'), blocks: [
          { steps: [{ h: t('Read', 'Les'), p: t('Read the text until you understand it.', 'Les teksten til du forstår den.') }, { h: t('Close', 'Lukk'), p: t('Close the page or look away.', 'Lukk siden eller se bort.') }, { h: t('Write', 'Skriv'), p: t('Write the idea in your own words, from memory.', 'Skriv ideen med egne ord, fra hukommelsen.') }, { h: t('Check', 'Sjekk'), p: t('Compare with the original: is it different enough, and still correct?', 'Sammenlign med originalen: er den ulik nok, og fortsatt riktig?') }, { h: t('Cite', 'Oppgi kilde'), p: t('Add the source, for example (Example, 2024).', 'Legg til kilden, for eksempel (Example, 2024).') }] },
          { lvl: 2, blocks: [{ p: t('A long quotation (about 40 words or more) is written as a separate block, without quotation marks, indented from the left. Short quotations stay in the sentence with quotation marks. Use a page number (p. 3) when the source has pages.', 'Et langt sitat (omtrent 40 ord eller mer) skrives som en egen blokk, uten anførselstegn og med innrykk fra venstre. Korte sitater står i setningen med anførselstegn. Bruk sidetall (p. 3) når kilden har sider.') }] }] }],
      practice: [
        sort('s3-1', [1, 2, 3], t('Which is allowed? Sort the ways of using a source.', 'Hva er tillatt? Sorter måtene å bruke en kilde på.'), [t('Allowed', 'Tillatt'), t('Plagiarism', 'Plagiat')], [['A quotation in quotation marks, with the source', 0], ['Your own words, with the source', 0], ['Copied sentences with no quotation marks', 1], ['A paraphrase with no source', 1]], t('A source is always needed, and exact words need quotation marks.', 'En kilde trengs alltid, og nøyaktige ord trenger anførselstegn.')),
        mcq('s3-2', [1, 2, 3], t('Which is a correct paraphrase of the original? Original (Example only): "Teenagers who read for fun every day often write better."', 'Hvilken er en riktig omskriving? Original (kun eksempel): «Teenagers who read for fun every day often write better.»'), ['Young people who read in their free time are often better writers (Example, 2024).', 'Teenagers who read for fun every day often write better.', 'Teenagers who read for fun every day often write better, I think.'], 0, t('Own words + a source.', 'Egne ord + en kilde.')),
        mcq('s3-3', [2, 3], t('Does a paraphrase need a source?', 'Trenger en omskriving en kilde?'), ['Yes, always', 'No, it is your own words', 'Only if it is long'], 0, t('The idea comes from someone else.', 'Ideen kommer fra en annen.')),
        mcq('s3-4', [2, 3], t('A student changes two words in a copied sentence. Is it a paraphrase?', 'En elev bytter to ord i en kopiert setning. Er det en omskriving?'), ['No, it is still too close to the original', 'Yes', 'Only in English'], 0, t('You must change both the words and the structure.', 'Du må endre både ordene og strukturen.')),
        mcq('s3-5', [3], t('How is a long quotation (about 40 words or more) written in APA?', 'Hvordan skrives et langt sitat (omtrent 40 ord eller mer) i APA?'), ['As a separate indented block, without quotation marks', 'In bold text', 'In the reference list'], 0, t('A block quotation has no quotation marks.', 'Et blokksitat har ikke anførselstegn.'))] },

    /* ---------------------------------------------------------------- 4 */
    { id: 'intext', icon: 'doc', reviewed: false, curriculum: ['K6', 'K11'],
      title: t('In-text citations (APA 7th)', 'Henvisninger i teksten (APA 7)'),
      blurb: t('The short note in brackets: (Author, year).', 'Den korte henvisningen i parentes: (Forfatter, år).'),
      top5: [
        t('Use (Author, year) at the end of a sentence, before the full stop.', 'Bruk (Forfatter, år) på slutten av setningen, før punktum.'),
        t('Or put the author in the sentence and the year in brackets: Smith (2024) says …', 'Eller sett forfatteren i setningen og året i parentes: Smith (2024) says …'),
        t('Two authors: (Smith & Jones, 2024). Three or more: (Smith et al., 2024).', 'To forfattere: (Smith & Jones, 2024). Tre eller flere: (Smith et al., 2024).'),
        t('An organisation can be the author: (Utdanningsdirektoratet, 2026).', 'En organisasjon kan være forfatter: (Utdanningsdirektoratet, 2026).'),
        t('No date? Write n.d.: (Author, n.d.). No author? Use the title.', 'Ingen dato? Skriv n.d.: (Author, n.d.). Ingen forfatter? Bruk tittelen.')],
      sections: [
        { h: t('The patterns', 'Mønstrene'), blocks: [
          { table: { head: [t('Source', 'Kilde'), t('In brackets', 'I parentes'), t('In the sentence', 'I setningen')], rows: [
            [t('One author', 'Én forfatter'), '(Beland, 2016)', 'Beland (2016) found …'], [t('Two authors', 'To forfattere'), '(Beland & Murphy, 2016)', 'Beland and Murphy (2016) found …'], [t('Three or more', 'Tre eller flere'), '(Smith et al., 2024)', 'Smith et al. (2024) found …'],
            [t('Organisation', 'Organisasjon'), '(Utdanningsdirektoratet, 2026)', 'Utdanningsdirektoratet (2026) says …'], [t('No date', 'Ingen dato'), '(NDLA, n.d.)', 'NDLA (n.d.) explains …'], [t('No author', 'Ingen forfatter'), '(*Title of the page*, 2024)', '*Title of the page* (2024) says …']] } },
          { ex: [ex('Reading for fun helps young people write better (Example, 2024).', 'Å lese for moro hjelper unge å skrive bedre (Example, 2024).'), ex('Beland and Murphy (2016) found that banning phones improved test scores.', 'Beland og Murphy (2016) fant at forbud mot mobiler forbedret testresultatene.')] },
          { rule: [t('The name and year in the text must match the start of the reference in your list.', 'Navn og år i teksten må passe med starten av referansen i listen din.'), t('Direct quotation: add the page, for example (Example, 2024, p. 3). A web page without pages: use the paragraph, (Example, 2024, para. 2).', 'Direkte sitat: legg til siden, for eksempel (Example, 2024, p. 3). En nettside uten sider: bruk avsnittet, (Example, 2024, para. 2).')] },
          { nor: { note: t('In Norwegian we write "s." for page. In APA use "p." and put a comma between the name and the year.', 'På norsk skriver vi «s.» for side. I APA bruker du «p.» og setter komma mellom navn og år.'), bad: '(Example 2024, s. 3)', good: '(Example, 2024, p. 3)' } }] }],
      practice: [
        mcq('s4-1', [1, 2, 3], t('Which is the correct APA in-text citation?', 'Hvilken er riktig henvisning i teksten i APA?'), ['(Smith, 2024)', '(Smith 2024)', '(2024, Smith)'], 0, t('(Author, year).', '(Forfatter, år).')),
        mcq('s4-2', [1, 2, 3], t('Two authors, Beland and Murphy, published in 2016. Which is correct?', 'To forfattere, Beland og Murphy, publiserte i 2016. Hvilken er riktig?'), ['(Beland & Murphy, 2016)', '(Beland et al., 2016)', '(Beland, 2016)'], 0, t('Two authors: both names with &.', 'To forfattere: begge navn med &.')),
        mcq('s4-3', [1, 2, 3], t('Four authors. Which is correct?', 'Fire forfattere. Hvilken er riktig?'), ['(Smith et al., 2024)', '(Smith, Jones, Lee, & Kim, 2024)', '(Smith, 2024)'], 0, t('Three or more: first author + et al.', 'Tre eller flere: første forfatter + et al.')),
        mcq('s4-4', [2, 3], t('The web page has no date. Which is correct?', 'Nettsiden har ingen dato. Hvilken er riktig?'), ['(NDLA, n.d.)', '(NDLA, no date)', '(NDLA)'], 0, t('n.d. = no date.', 'n.d. = ingen dato.')),
        mcq('s4-5', [2, 3], t('You quote directly from page 7. Which is correct?', 'Du siterer direkte fra side 7. Hvilken er riktig?'), ['(Example, 2024, p. 7)', '(Example, 2024, s. 7)', '(Example, 7, 2024)'], 0, t('Add "p." and the page number.', 'Legg til «p.» og sidetallet.')),
        mcq('s4-6', [2, 3], t('Where does the full stop go?', 'Hvor står punktum?'), ['After the bracket: … better (Example, 2024).', 'Before the bracket: … better. (Example, 2024)', 'Inside the bracket.'], 0, t('The citation is part of the sentence.', 'Henvisningen er en del av setningen.')),
        gap('s4-7', [2, 3], 'Utdanningsdirektoratet', 'says that mobile phones should be regulated.', ['(2026)', '(2026,', '2026'], 0, t('The author is in the sentence, so only the year is in brackets.', 'Forfatteren står i setningen, så bare året står i parentes.')),
        mcq('s4-8', [3], t('A web page has no author. The title is "School phone rules". Which in-text citation is correct (APA)?', 'En nettside har ingen forfatter. Tittelen er «School phone rules». Hvilken henvisning er riktig (APA)?'), ['(*School phone rules*, 2024)', '(Anonymous, 2024)', '(Unknown, 2024)'], 0, t('Use the title, in italics for a stand-alone web page.', 'Bruk tittelen, i kursiv for en frittstående nettside.'))] },

    /* ---------------------------------------------------------------- 5 */
    { id: 'reflist', icon: 'book', reviewed: false, curriculum: ['K6', 'K11'],
      title: t('The reference list (APA 7th)', 'Referanselisten (APA 7)'),
      blurb: t('How to write each reference: author, date, title, where to find it.', 'Slik skriver du hver referanse: forfatter, dato, tittel, hvor den finnes.'),
      top5: [
        t('The list is called "References" and goes on a new page at the end.', 'Listen heter «References» og står på en ny side til slutt.'),
        t('Sort the sources A–Z by the first word (usually the author\'s surname).', 'Sorter kildene A–Å etter første ord (som regel forfatterens etternavn).'),
        t('Every in-text source must be in the list, and every source in the list must be in the text.', 'Alle kilder i teksten må stå i listen, og alle kilder i listen må stå i teksten.'),
        t('Titles use sentence case: only the first word and names have a capital letter.', 'Titler skrives med liten forbokstav: bare første ord og navn har stor bokstav.'),
        t('Use the citation builder to practise: it shows the pattern for each type.', 'Bruk sitatbyggeren til å øve: den viser mønsteret for hver type.')],
      sections: [
        { h: t('The basic pattern', 'Grunnmønsteret'), blocks: [
          { p: t('Most references answer four questions: WHO? WHEN? WHAT? WHERE?', 'De fleste referanser svarer på fire spørsmål: HVEM? NÅR? HVA? HVOR?') },
          { table: { head: [t('Part', 'Del'), t('Example', 'Eksempel')], rows: [[t('Who (author)', 'Hvem (forfatter)'), 'Beland, L.-P., & Murphy, R.'], [t('When (date)', 'Når (dato)'), '(2016).'], [t('What (title)', 'Hva (tittel)'), 'Ill communication: Technology, distraction & student performance.'], [t('Where (source)', 'Hvor (kilde)'), '*Labour Economics*, *41*, 61–76. https://doi.org/10.1016/j.labeco.2015.11.004']] } },
          { p: t('Italics: the title of a stand-alone work (book, web page, video, report) or the name and volume of a journal.', 'Kursiv: tittelen på et frittstående verk (bok, nettside, video, rapport) eller navnet og bindet til et tidsskrift.') }] },
        { h: t('Patterns for common types', 'Mønstre for vanlige typer'), blocks: [
          { table: { head: [t('Type', 'Type'), t('Pattern', 'Mønster')], rows: [
            [t('Web page', 'Nettside'), 'Author. (Year, Month Day). *Title of page*. Website name. URL'], [t('Newspaper or magazine article', 'Avis- eller magasinartikkel'), 'Author. (Year, Month Day). Title of article. *Name of newspaper*. URL'], [t('Journal article', 'Tidsskriftartikkel'), 'Author. (Year). Title of article. *Journal Name*, *volume*(issue), pages. DOI'],
            [t('Book', 'Bok'), 'Author. (Year). *Title of book* (edition). Publisher.'], [t('YouTube video', 'YouTube-video'), 'Channel or person. (Year, Month Day). *Title of video* [Video]. YouTube. URL'], [t('Image', 'Bilde'), 'Photographer. (Year). *Title* [Photograph]. Website. URL'],
            [t('Report or curriculum', 'Rapport eller læreplan'), 'Organisation. (Year, Month Day). *Title* (Code). URL']] } },
          { rule: [t('If the author is the same as the website, leave the website name out.', 'Hvis forfatteren er den samme som nettstedet, utelater du nettstedets navn.'), t('No date: write (n.d.). No author: start with the title.', 'Ingen dato: skriv (n.d.). Ingen forfatter: begynn med tittelen.'), t('Foreign-language title: add an English translation in square brackets after the title.', 'Tittel på et annet språk: legg til en engelsk oversettelse i hakeparentes etter tittelen.')] },
          { lvl: 2, blocks: [{ p: t('Up to 20 authors are listed. Use & before the last one. A web address should not end with a full stop. Do not write "Retrieved from" unless the page changes all the time.', 'Opptil 20 forfattere nevnes. Bruk & foran den siste. En nettadresse skal ikke avsluttes med punktum. Ikke skriv «Retrieved from» med mindre siden endrer seg hele tiden.') }] }] },
        { h: t('Real examples', 'Ekte eksempler'), blocks: [
          { p: t('Open the citation builder and click "Use an example" for each type. The real examples are checked; the invented ones are marked "Example only".', 'Åpne sitatbyggeren og klikk «Bruk et eksempel» for hver type. De ekte eksemplene er sjekket; de oppdiktede er merket «Example only».') }] }],
      practice: [
        mcq('s5-1', [1, 2, 3], t('Which reference list is in the right order?', 'Hvilken referanseliste er i riktig rekkefølge?'), ['Beland … / Goodyear … / Rowling …', 'Rowling … / Beland … / Goodyear …', 'Goodyear … / Rowling … / Beland …'], 0, t('A–Z by the first word.', 'A–Å etter første ord.')),
        mcq('s5-2', [1, 2, 3], t('Which title style is correct in APA?', 'Hvilken tittelstil er riktig i APA?'), ['Ill communication: Technology, distraction & student performance', 'Ill Communication: Technology, Distraction & Student Performance', 'ILL COMMUNICATION'], 0, t('Sentence case.', 'Liten forbokstav (setningsform).')),
        mcq('s5-3', [2, 3], t('Which part is in italics for a web page?', 'Hvilken del står i kursiv for en nettside?'), ['The title of the page', 'The author', 'The date'], 0, t('A stand-alone work: the title is in italics.', 'Et frittstående verk: tittelen står i kursiv.')),
        mcq('s5-4', [2, 3], t('The web page has no author, but the website is "NDLA". What is the correct start of the reference?', 'Nettsiden har ingen forfatter, men nettstedet er «NDLA». Hva er riktig start på referansen?'), ['If the organisation wrote it: NDLA. (n.d.).', 'Anonymous. (n.d.).', 'Unknown. (n.d.).'], 0, t('Use the organisation as the author. Never "Anonymous".', 'Bruk organisasjonen som forfatter. Aldri «Anonymous».')),
        mcq('s5-5', [2, 3], t('Which reference follows the APA pattern?', 'Hvilken referanse følger APA-mønsteret?'), ['Rowling, J. K. (1997). Harry Potter and the philosopher\'s stone. Bloomsbury.', 'Rowling, J. K., Harry Potter and the philosopher\'s stone, Bloomsbury, 1997.', 'J. K. Rowling – Bloomsbury – 1997'], 0, t('Author. (Year). Title. Publisher.', 'Forfatter. (År). Tittel. Utgiver.')),
        mcq('s5-6', [3], t('The title is in Norwegian. What should you add in APA?', 'Tittelen er på norsk. Hva bør du legge til i APA?'), ['An English translation in square brackets', 'Nothing, never', 'A Norwegian flag'], 0, t('[Translation] goes after the title.', '[Oversettelse] står etter tittelen.')),
        gap('s5-7', [2, 3], 'Utdanningsdirektoratet. (2026). Læreplan i engelsk (ENG01-06).', '', ['https://www.udir.no/lk20/ENG01-06', 'Retrieved from the Internet', 'www'], 0, t('End with the web address.', 'Avslutt med nettadressen.'))] },

    /* ---------------------------------------------------------------- 6 */
    { id: 'builder', icon: 'sliders', reviewed: false, curriculum: ['K6', 'K11'], widget: 'apa',
      title: t('Citation builder', 'Sitatbygger'),
      blurb: t('Fill in the boxes and see the reference and the in-text citation appear.', 'Fyll ut boksene og se referansen og henvisningen i teksten dukke opp.'),
      top5: [
        t('Choose the type of source first.', 'Velg kildetypen først.'),
        t('Use "Use an example" to see a finished one. Real and made-up examples are marked.', 'Bruk «Bruk et eksempel» for å se en ferdig en. Ekte og oppdiktede eksempler er merket.'),
        t('The builder gives hints when something is missing. Read them!', 'Byggeren gir hint når noe mangler. Les dem!'),
        t('Nothing you type is saved or sent anywhere.', 'Ingenting du skriver blir lagret eller sendt noe sted.'),
        t('Always compare with your teacher\'s rules before you hand in.', 'Sammenlign alltid med lærerens regler før du leverer.')] },

    /* ---------------------------------------------------------------- 7 */
    { id: 'ai', icon: 'bulb', reviewed: false, curriculum: ['K6', 'K7', 'K9'],
      title: t('Using AI tools responsibly', 'Bruke KI-verktøy ansvarlig'),
      blurb: t('AI chatbots can help you, but they are not sources of facts. Here is how to use them honestly.', 'KI-chatboter kan hjelpe deg, men de er ikke kilder til fakta. Slik bruker du dem ærlig.'),
      top5: [
        t('An AI chatbot can make mistakes and even invent facts and sources.', 'En KI-chatbot kan gjøre feil og til og med finne på fakta og kilder.'),
        t('Never copy an AI answer and hand it in as your own text.', 'Aldri kopier et KI-svar og lever det inn som din egen tekst.'),
        t('Check every fact in a trustworthy source, and cite THAT source.', 'Sjekk alle fakta i en pålitelig kilde, og henvis til DEN kilden.'),
        t('If you use AI for an idea or help, say so, and follow your teacher\'s rules.', 'Hvis du bruker KI til en idé eller hjelp, si fra, og følg lærerens regler.'),
        t('Your own writing is how you learn English. AI cannot learn it for you.', 'Din egen skriving er slik du lærer engelsk. KI kan ikke lære det for deg.')],
      sections: [
        { h: t('What AI is good and bad at', 'Hva KI er god og dårlig til'), blocks: [
          { table: { head: [t('Can help with', 'Kan hjelpe med'), t('Be careful with', 'Vær forsiktig med')], rows: [[t('explaining a word or a grammar rule', 'forklare et ord eller en grammatikkregel'), t('facts, numbers and dates', 'fakta, tall og datoer')], [t('giving ideas to start with', 'gi ideer å starte med'), t('references and links (they can be invented)', 'referanser og lenker (de kan være funnet på)')], [t('checking your own text for mistakes', 'sjekke din egen tekst for feil'), t('writing the text for you (not allowed in most tasks)', 'skrive teksten for deg (ikke tillatt i de fleste oppgaver)')]] } },
          { nor: { note: t('AI answers sound sure even when they are wrong. A smooth answer is not the same as a true answer.', 'KI-svar høres sikre ut selv når de er feil. Et glatt svar er ikke det samme som et sant svar.'), bad: 'ChatGPT told me, so it is true.', good: 'I checked this in a reliable source: Udir (2026).' } }] },
        { h: t('How to cite an AI tool (APA)', 'Slik henviser du til et KI-verktøy (APA)'), blocks: [
          { p: t('Use this only when your teacher says it is allowed. The pattern below follows APA\'s guidance from 2023 (your teacher should check it for the newest advice).', 'Bruk dette bare når læreren sier at det er tillatt. Mønsteret under følger APAs veiledning fra 2023 (læreren bør sjekke det mot den nyeste veiledningen).') },
          { table: { head: [t('Part', 'Del'), t('Example', 'Eksempel')], rows: [[t('In the text', 'I teksten'), '(OpenAI, 2023)'], [t('Reference', 'Referanse'), 'OpenAI. (2023). *ChatGPT* (Mar 14 version) [Large language model]. https://chat.openai.com/chat']] } },
          { p: t('Also say what you asked, for example in a note: "I asked ChatGPT to explain the present perfect."', 'Si også hva du spurte om, for eksempel i en merknad: «I asked ChatGPT to explain the present perfect.»') },
          { lvl: 2, blocks: [{ p: t('The text you get from a chatbot is not stored anywhere for others to find, so some teachers want the question and the answer in an appendix.', 'Teksten du får fra en chatbot er ikke lagret noe sted slik at andre kan finne den, så noen lærere vil ha spørsmålet og svaret i et vedlegg.') }] }] }],
      practice: [
        mcq('s7-1', [1, 2, 3], t('An AI chatbot gives you a fact. What should you do?', 'En KI-chatbot gir deg et faktum. Hva bør du gjøre?'), ['Check it in a reliable source', 'Copy it directly', 'Trust it, because computers are never wrong'], 0, t('AI can be wrong.', 'KI kan ta feil.')),
        mcq('s7-2', [1, 2, 3], t('Which use of AI is honest?', 'Hvilken bruk av KI er ærlig?'), ['Asking it to explain a grammar rule and then writing your own text', 'Handing in an AI text as your own', 'Copying a reference list from AI without checking'], 0, t('Using AI to learn is fine; copying is not.', 'Å bruke KI for å lære er greit; å kopiere er det ikke.')),
        mcq('s7-3', [2, 3], t('A chatbot gives you a link to a book. What should you do?', 'En chatbot gir deg en lenke til en bok. Hva bør du gjøre?'), ['Check that the book and the link really exist', 'Add it to the reference list', 'Nothing'], 0, t('Chatbots can invent sources.', 'Chatboter kan finne på kilder.')),
        mcq('s7-4', [2, 3], t('Which is the correct in-text citation for the 2023 ChatGPT example?', 'Hva er riktig henvisning i teksten for ChatGPT-eksempelet fra 2023?'), ['(OpenAI, 2023)', '(ChatGPT)', '(AI says)'], 0, t('The company is the author.', 'Selskapet er forfatteren.')),
        mcq('s7-5', [3], t('Why is "ChatGPT told me" a weak source in an argumentative text?', 'Hvorfor er «ChatGPT told me» en svak kilde i en argumenterende tekst?'), ['It does not show where the information comes from', 'Because it is too long', 'Because it is in English'], 0, t('A good source can be checked.', 'En god kilde kan sjekkes.'))] },

    /* ---------------------------------------------------------------- 8 */
    { id: 'mistakes', icon: 'warn', reviewed: false, curriculum: ['K6', 'K11'],
      title: t('Spot the mistake', 'Finn feilen'),
      blurb: t('Read each reference or citation and decide what is wrong.', 'Les hver referanse eller henvisning og avgjør hva som er galt.'),
      top5: [
        t('Read slowly: one small detail can be wrong.', 'Les sakte: én liten detalj kan være feil.'),
        t('Check the order: author, date, title, source.', 'Sjekk rekkefølgen: forfatter, dato, tittel, kilde.'),
        t('Check the capital letters in the title (sentence case).', 'Sjekk store bokstaver i tittelen (setningsform).'),
        t('Check the punctuation: full stops, brackets, commas.', 'Sjekk tegnsettingen: punktum, parenteser, komma.'),
        t('All the examples here are made up (Example only).', 'Alle eksemplene her er oppdiktet (Example only).')],
      practice: [
        mcq('s8-1', [1, 2, 3], t('What is wrong?', 'Hva er feil?'), ['The year is not in brackets', 'The title is too short', 'There is a URL'], 0, t('The year goes in brackets: (2024).', 'Året skal stå i parentes: (2024).'), 'Example only: Sample, S. 2024. Reading in the library. https://www.example.com'),
        mcq('s8-2', [1, 2, 3], t('What is wrong?', 'Hva er feil?'), ['The title has too many capital letters', 'The author is missing', 'The publisher is missing'], 0, t('APA uses sentence case.', 'APA bruker liten forbokstav.'), 'Example only: Sample, S. (2024). Reading In The Library And Why It Matters. Example Press.'),
        mcq('s8-3', [2, 3], t('What is wrong?', 'Hva er feil?'), ['The first name is written in full instead of an initial', 'The year is missing', 'The title is italic'], 0, t('APA uses initials: Sample, S.', 'APA bruker initialer: Sample, S.'), 'Example only: Sample, Sasha. (2024). Reading in the library. Example Press.'),
        mcq('s8-4', [2, 3], t('What is wrong with this in-text citation?', 'Hva er feil med denne henvisningen i teksten?'), ['The comma between the name and the year is missing', 'The year is wrong', 'It is in the wrong place'], 0, t('(Sample, 2024).', '(Sample, 2024).'), 'Example only: Reading helps (Sample 2024).'),
        mcq('s8-5', [2, 3], t('What is wrong?', 'Hva er feil?'), ['The sources are not in alphabetical order', 'The list is too short', 'There is a title'], 0, t('A–Z by the first word.', 'A–Å etter første ord.'), 'Example only: Sample, S. (2024). … / Alpha, A. (2023). … / Beta, B. (2022). …'),
        mcq('s8-6', [3], t('What is wrong?', 'Hva er feil?'), ['The web address is missing', 'The year is wrong', 'Nothing'], 0, t('A web page needs a URL.', 'En nettside trenger en URL.'), 'Example only: Sample, S. (2024, March 3). Reading in the library. Example Photo Library.'),
        mcq('s8-7', [3], t('What is wrong?', 'Hva er feil?'), ['A quotation has no page number or paragraph', 'There is no year', 'There is no author'], 0, t('A quotation needs a page number: (Sample, 2024, p. 3).', 'Et sitat trenger sidetall: (Sample, 2024, p. 3).'), 'Example only: Sample (2024) says "reading is a good habit".')],
      sections: [] }
  ];

  APP.modules.push({
    id: 'sources', group: 'skills', icon: 'info',
    title: t('Sources and citation (APA 7th)', 'Kilder og henvisninger (APA 7)'),
    blurb: t('Find good sources, use them honestly and write APA 7th references.', 'Finn gode kilder, bruk dem ærlig og skriv APA 7-referanser.'),
    helps: t('Step-by-step help to judge a source, quote and paraphrase, and write in-text citations and a reference list with a citation builder.', 'Steg-for-steg-hjelp til å vurdere en kilde, sitere og omskrive, og skrive henvisninger i teksten og en referanseliste med en sitatbygger.'),
    curriculum: ['K6', 'K7', 'K9', 'K11'],
    top5: [
      t('Start with "Why use sources?" and then "Is this source reliable?".', 'Start med «Hvorfor bruke kilder?» og deretter «Er kilden pålitelig?».'),
      t('Learn the difference between a quotation, a paraphrase and plagiarism.', 'Lær forskjellen på et sitat, en omskriving og plagiat.'),
      t('Use the citation builder to practise writing references.', 'Bruk sitatbyggeren til å øve på å skrive referanser.'),
      t('Remember: an AI chatbot is not a source of facts.', 'Husk: en KI-chatbot er ikke en kilde til fakta.'),
      t('When in doubt, give the source and ask your teacher.', 'Når du er i tvil, oppgi kilden og spør læreren.')],
    topics: topics,
    resources: [
      { id: 'kk-eval', title: 'Source evaluation (Kildekompasset, English)', publisher: 'Kildekompasset.no',
        url: 'https://www.kildekompasset.no/en/source-evaluation/', type: 'article', lang: 'en', level: 'B1',
        why: t('A Norwegian guide to source criticism, with questions you can ask about any source. The main inspiration for this page.', 'En norsk veiledning i kildekritikk, med spørsmål du kan stille til alle kilder. Hovedinspirasjonen for denne siden.'),
        checked: '2026-11-16', license: 'Kildekompasset.no, link only' },
      { id: 'kk-apa', title: 'APA 7th (Kildekompasset, English)', publisher: 'Kildekompasset.no',
        url: 'https://www.kildekompasset.no/en/referencing-styles/apa-7th/', type: 'article', lang: 'en', level: 'B1–B2',
        why: t('Norwegian guide to APA 7th with examples for many types of sources.', 'Norsk veiledning i APA 7 med eksempler på mange typer kilder.'),
        checked: '2026-11-16', license: 'Kildekompasset.no, link only' },
      { id: 'kk-home', title: 'Kildekompasset', publisher: 'Kildekompasset.no',
        url: 'https://www.kildekompasset.no/', type: 'article', lang: 'nb', level: 'B1',
        why: t('The Norwegian version of the guide, with tools and examples.', 'Den norske versjonen av veiledningen, med verktøy og eksempler.'),
        checked: '2026-11-16', license: 'Kildekompasset.no, link only' },
      { id: 'purdue-intext', title: 'In-Text Citations: The Basics', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/in_text_citations_the_basics.html', type: 'article', lang: 'en', level: 'B2',
        why: t('A detailed guide to APA in-text citations. Written for university students, so read slowly.', 'En detaljert guide til APA-henvisninger i teksten. Skrevet for universitetsstudenter, så les sakte.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' },
      { id: 'purdue-electronic', title: 'Reference List: Electronic Sources', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/reference_list_electronic_sources.html', type: 'article', lang: 'en', level: 'B2',
        why: t('Examples of APA references for web pages, articles and videos.', 'Eksempler på APA-referanser til nettsider, artikler og videoer.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' }
    ],
    pending: [
      { id: 'apa-chatgpt', title: 'How to cite ChatGPT', publisher: 'APA Style',
        url: 'https://apastyle.apa.org/blog/how-to-cite-chatgpt', type: 'article', lang: 'en', level: 'B2',
        why: t('APA\'s own advice on citing ChatGPT. The page answered, but its text could not be read here, so it is not shown yet.', 'APAs egen veiledning i å henvise til ChatGPT. Siden svarte, men teksten kunne ikke leses her, så den vises ikke ennå.'),
        checked: '2026-11-16', license: 'APA, link only' }
    ]
  });
})();
