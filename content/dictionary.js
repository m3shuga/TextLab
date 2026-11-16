/* ==========================================================================
   MODULE: Dictionary skills
   Step-by-step help to use online dictionaries, with Lexin (Bokmål–engelsk) as the main example.
   The two model entries are MOCK entries written for this site. They are NOT copied from Lexin,
   Cambridge, Oxford or any other dictionary. ALL text is reviewed:false until the teacher approves it.
   NOTE FOR THE TEACHER: the Lexin description follows how the site looked when it was checked
   (November 2026). Menus and labels can change, so please check it once before use.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; };
  var mcq = function (id, lv, q, opts, ans, why, ctx) { return { id: id, type: 'mcq', level: lv, q: q, options: opts, answer: ans, why: why, ctx: ctx }; };
  var sort = function (id, lv, q, buckets, items, why) { return { id: id, type: 'sort', level: lv, q: q, buckets: buckets, items: items.map(function (x) { return { text: x[0], b: x[1] }; }), why: why }; };
  var order = function (id, lv, q, items, why) { return { id: id, type: 'order', level: lv, q: q, items: items, why: why }; };

  /* ---------------------------------------------------------------- model A: English learner entry */
  var borrow = {
    id: 'entry-borrow', kind: 'dict', register: 'neutral',
    title: t('An English learner\'s entry: "borrow"', 'Et oppslag i en engelsk ordbok for elever: «borrow»'),
    situation: t('This is a made-up entry, written for this site, that looks like an entry in an English learner\'s dictionary such as Cambridge or Oxford. Click each part to learn what it tells you.', 'Dette er et oppdiktet oppslag, skrevet for denne siden, som ligner et oppslag i en engelsk ordbok for elever, for eksempel Cambridge eller Oxford. Klikk på hver del for å se hva den forteller deg.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('headword', 'borrow', 'borrow', { b: 1 }),
        seg('pron-class', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb'),
        seg('definition', 'to take something from someone for a short time and give it back later', 'å ta noe fra noen for en kort tid og gi det tilbake senere'),
        seg('example', '“Can I borrow your pen?”', '«Kan jeg låne pennen din?»')
      ] },
      2: { reviewed: false, segments: [
        seg('headword', 'borrow', 'borrow', { b: 1 }),
        seg('pron-class', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb'),
        seg('forms', 'borrows · borrowing · borrowed', 'borrows · borrowing · borrowed'),
        seg('grammar-pattern', 'borrow something (from somebody)', 'borrow something (from somebody)'),
        seg('definition', 'to take something from someone for a short time and give it back later', 'å ta noe fra noen for en kort tid og gi det tilbake senere'),
        seg('example', '“Can I borrow your pen?”', '«Kan jeg låne pennen din?»'),
        seg('usage-note', 'Do not confuse with lend. You borrow FROM someone. Someone lends TO you.', 'Ikke forveksle med lend. Du borrower FRA noen. Noen lender TIL deg.')
      ] },
      3: { reviewed: false, segments: [
        seg('headword', 'borrow', 'borrow', { b: 1 }),
        seg('pron-class', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb', '{/ˈbɒrəʊ/|/ˈbɑːroʊ/}  verb'),
        seg('forms', 'borrows · borrowing · borrowed', 'borrows · borrowing · borrowed'),
        seg('grammar-pattern', 'borrow something (from somebody)', 'borrow something (from somebody)'),
        seg('definition', '1  to take something from someone for a short time and give it back later\n2  to take money from a bank and pay it back with extra money', '1  å ta noe fra noen for en kort tid og gi det tilbake senere\n2  å ta penger fra en bank og betale dem tilbake med tillegg'),
        seg('example', '“Can I borrow your pen?”\n“They borrowed money to buy a house.”', '«Kan jeg låne pennen din?»\n«De lånte penger for å kjøpe hus.»'),
        seg('usage-note', 'Do not confuse with lend. You borrow FROM someone. Someone lends TO you.', 'Ikke forveksle med lend. Du borrower FRA noen. Noen lender TIL deg.'),
        seg('related', 'borrower (noun) · opposite: lend', 'borrower (substantiv) · motsatt: lend')
      ] }
    },
    parts: {
      'headword': { n: 1, cat: 'format', name: t('Headword', 'Oppslagsord'),
        fn: t('The word you are looking up. Entries are in alphabetical order. Check that the spelling matches the word you want.', 'Ordet du slår opp. Oppslagene står i alfabetisk rekkefølge. Sjekk at stavingen stemmer med ordet du vil ha.'),
        tips: [t('If you cannot find the word, check the spelling or try the base form (borrow, not borrowed).', 'Hvis du ikke finner ordet, sjekk stavingen eller prøv grunnformen (borrow, ikke borrowed).')],
        phrases: ['borrow', 'headword'],
        mistake: { bad: 'borrowed', good: 'borrow', note: t('Look up the base form. Most dictionaries also find the other forms, but not always.', 'Slå opp grunnformen. De fleste ordbøker finner også andre former, men ikke alltid.') } },
      'pron-class': { n: 2, cat: 'language', name: t('Pronunciation and word class', 'Uttale og ordklasse'),
        fn: t('The letters between / / show how to say the word. Many dictionaries give UK and US versions and let you click to listen. The word class (verb, noun, adjective …) comes next.', 'Bokstavene mellom / / viser hvordan ordet uttales. Mange ordbøker viser britisk og amerikansk uttale og lar deg klikke for å lytte. Ordklassen (verb, substantiv, adjektiv …) kommer etterpå.'),
        tips: [t('Click the speaker icon to listen. You do not need to learn the symbols.', 'Klikk på høyttalerikonet for å lytte. Du trenger ikke lære symbolene.'), t('The word class tells you how the word works in a sentence.', 'Ordklassen forteller hvordan ordet fungerer i en setning.')],
        phrases: ['verb', 'noun', 'adjective'],
        mistake: { bad: 'I have a lot of borrow.', good: 'I borrow a lot of books.', note: t('"Borrow" is a verb, not a noun.', '«Borrow» er et verb, ikke et substantiv.') } },
      'forms': { n: 3, cat: 'language', name: t('Word forms', 'Ordformer'),
        fn: t('The forms of the verb: he borrows, borrowing, borrowed. For irregular verbs this part is very important.', 'Formene til verbet: he borrows, borrowing, borrowed. For uregelmessige verb er denne delen veldig viktig.'),
        tips: [t('For an irregular verb the dictionary shows the past and the past participle.', 'For et uregelmessig verb viser ordboka preteritum og perfektum partisipp.')],
        phrases: ['borrows', 'borrowing', 'borrowed'],
        mistake: { bad: 'I borrow it yesterday.', good: 'I borrowed it yesterday.', note: t('Use the past form for the past.', 'Bruk fortidsformen om fortiden.') } },
      'grammar-pattern': { n: 4, cat: 'structure', name: t('Grammar pattern', 'Grammatikkmønster'),
        fn: t('Shows which words usually go with the headword. "somebody" and "something" show where a person and a thing belong.', 'Viser hvilke ord som vanligvis hører sammen med oppslagsordet. «somebody» og «something» viser hvor en person og en ting hører hjemme.'),
        tips: [t('Copy the pattern into your own sentence.', 'Kopier mønsteret inn i din egen setning.')],
        phrases: ['borrow something from somebody'],
        mistake: { bad: 'I borrowed him my pen.', good: 'I borrowed a pen from him.', note: t('Follow the pattern: borrow something FROM somebody.', 'Følg mønsteret: borrow something FROM somebody.') } },
      'definition': { n: 5, cat: 'structure', name: t('Definition', 'Forklaring'),
        fn: t('Explains what the word means, in simple English. If the word has several meanings they are numbered: 1, 2, 3.', 'Forklarer hva ordet betyr, på enkel engelsk. Hvis ordet har flere betydninger, er de nummerert: 1, 2, 3.'),
        tips: [t('Read ALL the meanings. The first one is not always the one you need.', 'Les ALLE betydningene. Den første er ikke alltid den du trenger.'), t('Choose the meaning that fits the sentence you are reading or writing.', 'Velg betydningen som passer til setningen du leser eller skriver.')],
        phrases: ['to take … for a short time'],
        mistake: { bad: 'Taking the first meaning without checking.', good: 'Reading all the meanings and choosing the one that fits.', note: t('Many English words have several meanings.', 'Mange engelske ord har flere betydninger.') } },
      'example': { n: 6, cat: 'structure', name: t('Example sentences', 'Eksempelsetninger'),
        fn: t('Real sentences that show the word in use. They are the best way to see which words go together.', 'Ekte setninger som viser ordet i bruk. De er den beste måten å se hvilke ord som hører sammen.'),
        tips: [t('Copy a whole example sentence into your notes, not only the word.', 'Skriv hele eksempelsetningen i notatene dine, ikke bare ordet.')],
        phrases: ['Can I borrow your …?'],
        mistake: { bad: 'Writing only "borrow = låne".', good: 'Writing "Can I borrow your pen?"', note: t('A whole sentence is easier to remember.', 'En hel setning er lettere å huske.') } },
      'usage-note': { n: 7, cat: 'tone', name: t('Usage note', 'Bruksmerknad'),
        fn: t('A warning about a common mistake, or a difference between similar words.', 'En advarsel om en vanlig feil, eller en forskjell mellom like ord.'),
        tips: [t('Always read the usage note: it is made for learners.', 'Les alltid bruksmerknaden: den er laget for språklærere.')],
        phrases: ['Do not confuse with …'],
        mistake: { bad: 'Can you borrow me your pen?', good: 'Can you lend me your pen? / Can I borrow your pen?', note: t('lend = give for a short time. borrow = take for a short time.', 'lend = gi for en kort tid. borrow = ta for en kort tid.') } },
      'related': { n: 8, cat: 'language', name: t('Related words', 'Beslektede ord'),
        fn: t('Other words from the same family, and opposites. Good for building your vocabulary.', 'Andre ord fra samme familie, og motsetninger. Bra for å bygge ordforrådet ditt.'),
        tips: [t('Learn two or three related words together.', 'Lær to eller tre beslektede ord sammen.')],
        phrases: ['borrower', 'opposite: lend'],
        mistake: { bad: 'He is a good borrow.', good: 'He is a good borrower.', note: t('A person who borrows is a "borrower" (noun).', 'En person som borrower er en «borrower» (substantiv).') } }
    }
  };

  /* ---------------------------------------------------------------- model B: Bokmål-English entry (Lexin style) */
  var spise = {
    id: 'entry-spise', kind: 'dict', register: 'neutral',
    title: t('A Bokmål–English entry: "spise"', 'Et bokmål–engelsk-oppslag: «spise»'),
    situation: t('This is a made-up entry, written for this site, that follows the same idea as a Bokmål–English dictionary such as Lexin. It is NOT copied from Lexin. Click each part to learn what it tells you.', 'Dette er et oppdiktet oppslag, skrevet for denne siden, som følger samme idé som en bokmål–engelsk ordbok som Lexin. Det er IKKE kopiert fra Lexin. Klikk på hver del for å se hva den forteller deg.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('headword', 'spise', 'spise', { b: 1 }),
        seg('word-class', 'verb', 'verb'),
        seg('equivalent', 'eat', 'eat', { b: 1 }),
        seg('example', 'jeg spiser frokost klokka sju\nI have breakfast at seven', 'jeg spiser frokost klokka sju\nI have breakfast at seven')
      ] },
      2: { reviewed: false, segments: [
        seg('headword', 'spise', 'spise', { b: 1 }),
        seg('word-class', 'verb  ▸ spiser, spiste, har spist', 'verb  ▸ spiser, spiste, har spist'),
        seg('equivalent', 'eat', 'eat', { b: 1 }),
        seg('explanation', 'ta til seg mat\ntake in food', 'ta til seg mat\ntake in food'),
        seg('example', 'jeg spiser frokost klokka sju\nI have breakfast at seven', 'jeg spiser frokost klokka sju\nI have breakfast at seven'),
        seg('expression', 'spise ute\neat out', 'spise ute\neat out')
      ] },
      3: { reviewed: false, segments: [
        seg('headword', 'spise', 'spise', { b: 1 }),
        seg('word-class', 'verb  ▸ spiser, spiste, har spist', 'verb  ▸ spiser, spiste, har spist'),
        seg('equivalent', 'eat', 'eat', { b: 1 }),
        seg('explanation', 'ta til seg mat\ntake in food', 'ta til seg mat\ntake in food'),
        seg('example', 'jeg spiser frokost klokka sju\nI have breakfast at seven', 'jeg spiser frokost klokka sju\nI have breakfast at seven'),
        seg('expression', 'spise ute\neat out', 'spise ute\neat out'),
        seg('compound', 'spisebord\ndining table', 'spisebord\ndining table'),
        seg('comment', 'In English "have dinner" or "have breakfast" is common for meals.', 'På engelsk er «have dinner» eller «have breakfast» vanlig for måltider.')
      ] }
    },
    parts: {
      'headword': { n: 1, cat: 'format', name: t('Headword (oppslagsord)', 'Oppslagsord'),
        fn: t('The Norwegian word you looked up. In Lexin the headword is highlighted in the result.', 'Det norske ordet du slo opp. I Lexin er oppslagsordet utheva i resultatet.'),
        tips: [t('If nothing appears, check the spelling or try the base form (spise, not spiste).', 'Hvis ingenting dukker opp, sjekk stavingen eller prøv grunnformen (spise, ikke spiste).')],
        phrases: ['spise'],
        mistake: { bad: 'Searching for "spiste"', good: 'Searching for "spise"', note: t('The dictionary usually lists the base form. Many tools also find other forms.', 'Ordboka lister som regel grunnformen. Mange verktøy finner også andre former.') } },
      'word-class': { n: 2, cat: 'language', name: t('Word class and forms', 'Ordklasse og bøyning'),
        fn: t('Tells you if the word is a verb, a noun or something else. In Lexin you can click "Vis bøyning" to see the forms.', 'Forteller om ordet er et verb, et substantiv eller noe annet. I Lexin kan du klikke på «Vis bøyning» for å se formene.'),
        tips: [t('Check that the word class is the one you need.', 'Sjekk at ordklassen er den du trenger.')],
        phrases: ['verb', 'noun masculine'],
        mistake: { bad: 'Translating a verb with a noun.', good: 'Use a verb for a verb: spise = eat.', note: t('The word class of the translation should fit your sentence.', 'Ordklassen til oversettelsen skal passe til setningen din.') } },
      'equivalent': { n: 3, cat: 'structure', name: t('English equivalent', 'Engelsk ekvivalent'),
        fn: t('The English word for the Norwegian word, often in bold. A word can have more than one equivalent.', 'Det engelske ordet for det norske ordet, ofte i fet skrift. Et ord kan ha flere ekvivalenter.'),
        tips: [t('If there are several results with different English words, read the explanation to choose.', 'Hvis det er flere resultater med ulike engelske ord, les forklaringen for å velge.')],
        phrases: ['eat'],
        mistake: { bad: 'Taking the first English word without reading the rest.', good: 'Comparing the equivalents and the examples.', note: t('The first word is not always the best for your sentence.', 'Det første ordet er ikke alltid det beste for setningen din.') } },
      'explanation': { n: 4, cat: 'structure', name: t('Explanation (forklaring)', 'Forklaring'),
        fn: t('A short explanation in Norwegian and in English. It tells you what the word means.', 'En kort forklaring på norsk og engelsk. Den forteller hva ordet betyr.'),
        tips: [t('Use the explanation to check that the meaning fits.', 'Bruk forklaringen til å sjekke at betydningen passer.')],
        phrases: ['take in food'],
        mistake: { bad: 'Skipping the explanation.', good: 'Reading it before you choose.', note: t('It helps you pick the right meaning.', 'Den hjelper deg å velge riktig betydning.') } },
      'example': { n: 5, cat: 'structure', name: t('Example (eksempel)', 'Eksempel'),
        fn: t('A Norwegian sentence with an English translation. It shows the word in a sentence.', 'En norsk setning med engelsk oversettelse. Den viser ordet i en setning.'),
        tips: [t('Notice that the English sentence is not always word for word: "klokka sju" = "at seven".', 'Legg merke til at den engelske setningen ikke alltid er ord for ord: «klokka sju» = «at seven».')],
        phrases: ['I have breakfast at seven'],
        mistake: { bad: 'I eat breakfast at clock seven.', good: 'I have breakfast at seven.', note: t('Do not translate word for word.', 'Ikke oversett ord for ord.') } },
      'expression': { n: 6, cat: 'language', name: t('Expression (uttrykk)', 'Uttrykk'),
        fn: t('A fixed phrase with the headword. Its English translation is often a fixed phrase too.', 'Et fast uttrykk med oppslagsordet. Den engelske oversettelsen er ofte også et fast uttrykk.'),
        tips: [t('Learn the whole phrase.', 'Lær hele uttrykket.')],
        phrases: ['eat out'],
        mistake: { bad: 'eat outside', good: 'eat out', note: t('"Eat out" means to eat at a restaurant, not outdoors.', '«Eat out» betyr å spise på restaurant, ikke utendørs.') } },
      'compound': { n: 7, cat: 'language', name: t('Compound (sammensetning)', 'Sammensetning'),
        fn: t('Longer words that contain the headword. English often uses two words where Norwegian writes one.', 'Lengre ord som inneholder oppslagsordet. Engelsk bruker ofte to ord der norsk skriver ett.'),
        tips: [t('Norwegian: spisebord. English: two words, dining table.', 'Norsk: spisebord. Engelsk: to ord, dining table.')],
        phrases: ['dining table'],
        mistake: { bad: 'diningtable', good: 'dining table', note: t('English usually writes the parts as two words.', 'Engelsk skriver ofte delene som to ord.') } },
      'comment': { n: 8, cat: 'tone', name: t('Comment (kommentar)', 'Kommentar'),
        fn: t('A note about how the word is used: informal, old-fashioned, or a tip about the translation.', 'En merknad om hvordan ordet brukes: uformelt, gammeldags, eller et tips om oversettelsen.'),
        tips: [t('Pay attention to labels such as "uformelt" (informal).', 'Legg merke til merkelapper som «uformelt».')],
        phrases: ['informal', 'old-fashioned'],
        mistake: { bad: 'Using an informal word in a formal text.', good: 'Choosing a neutral word in a formal text.', note: t('Check the style label.', 'Sjekk stilmerkelappen.') } }
    }
  };

  /* ---------------------------------------------------------------- topics */
  var topics = [
    { id: 'which', icon: 'info', reviewed: false, curriculum: ['K6', 'K7'],
      title: t('Which dictionary do I need?', 'Hvilken ordbok trenger jeg?'),
      blurb: t('Choose the right tool for the job: Norwegian to English, the meaning of an English word, or how to say it.', 'Velg riktig verktøy: norsk til engelsk, betydningen av et engelsk ord, eller uttalen.'),
      top5: [
        t('You need a Norwegian word in English? Use a Bokmål–English dictionary, for example Lexin.', 'Trenger du et norsk ord på engelsk? Bruk en bokmål–engelsk ordbok, for eksempel Lexin.'),
        t('You need the meaning or the use of an English word? Use an English learner\'s dictionary (Cambridge or Oxford).', 'Trenger du betydningen eller bruken av et engelsk ord? Bruk en engelsk ordbok for elever (Cambridge eller Oxford).'),
        t('You are not sure about a Norwegian word? Look in Ordbøkene.', 'Er du usikker på et norsk ord? Slå opp i Ordbøkene.'),
        t('A machine translator is not a dictionary: check important words.', 'En maskinoversetter er ikke en ordbok: sjekk viktige ord.'),
        t('Always read the whole entry, not just the first word.', 'Les alltid hele oppslaget, ikke bare det første ordet.')],
      sections: [{ h: t('Pick your job', 'Velg oppgaven din'), blocks: [{ widget: 'decider', title: t('What do you need to do?', 'Hva trenger du å gjøre?'), options: [
        { label: t('I know a Norwegian word, but not the English word', 'Jeg kan et norsk ord, men ikke det engelske'), tools: [t('**Lexin** (Bokmål–engelsk): type the Norwegian word.', '**Lexin** (Bokmål–engelsk): skriv inn det norske ordet.'), t('Then check the English word in an English dictionary (see below).', 'Sjekk deretter det engelske ordet i en engelsk ordbok (se under).')], tip: t('Look at the examples. Do they look like your sentence?', 'Se på eksemplene. Ligner de på setningen din?') },
        { label: t('I do not understand an English word', 'Jeg forstår ikke et engelsk ord'), tools: [t('An English learner\'s dictionary: **Cambridge Dictionary** or **Oxford Learner\'s Dictionaries**.', 'En engelsk ordbok for elever: **Cambridge Dictionary** eller **Oxford Learner\'s Dictionaries**.'), t('If the English explanation is too hard, find the Norwegian word in a Bokmål–English dictionary.', 'Hvis den engelske forklaringen er for vanskelig, finn det norske ordet i en bokmål–engelsk ordbok.')], tip: t('Read the example sentences first: they are often easier than the definition.', 'Les eksempelsetningene først: de er ofte lettere enn forklaringen.') },
        { label: t('I do not know how to say a word', 'Jeg vet ikke hvordan jeg uttaler et ord'), tools: [t('Click the speaker icon in Lexin, Cambridge or Oxford.', 'Klikk på høyttalerikonet i Lexin, Cambridge eller Oxford.')], tip: t('Cambridge and Oxford give both a British and an American voice.', 'Cambridge og Oxford har både britisk og amerikansk stemme.') },
        { label: t('I am not sure about a Norwegian word', 'Jeg er usikker på et norsk ord'), tools: [t('**Ordbøkene** (Bokmålsordboka and Nynorskordboka).', '**Ordbøkene** (Bokmålsordboka og Nynorskordboka).')], tip: t('Do this before you translate: you must understand the Norwegian word first.', 'Gjør dette før du oversetter: du må forstå det norske ordet først.') },
        { label: t('I want to check British or American spelling', 'Jeg vil sjekke britisk eller amerikansk staving'), tools: [t('Cambridge or Oxford: they show both versions.', 'Cambridge eller Oxford: de viser begge variantene.')], tip: t('Stay with one variety in your whole text.', 'Hold deg til én variant i hele teksten.') },
        { label: t('I want to translate a whole text', 'Jeg vil oversette en hel tekst'), tools: [t('A machine translator is not a dictionary. Use it for a rough idea only.', 'En maskinoversetter er ikke en ordbok. Bruk den bare for å få en grov idé.'), t('Check the important words in a dictionary.', 'Sjekk de viktige ordene i en ordbok.')], tip: t('See the topic "Dictionary or machine translation?".', 'Se temaet «Ordbok eller maskinoversettelse?».') }] }] }],
      practice: [
        mcq('d1-1', [1, 2, 3], t('You know "hund" but not the English word. Which tool is best?', 'Du kan «hund», men ikke det engelske ordet. Hvilket verktøy er best?'), ['A Bokmål–English dictionary (for example Lexin)', 'An English learner\'s dictionary', 'A map'], 0, t('Norwegian → English: bokmål–engelsk.', 'Norsk → engelsk: bokmål–engelsk.')),
        mcq('d1-2', [1, 2, 3], t('You do not understand the English word "borrow". Which tool is best?', 'Du forstår ikke det engelske ordet «borrow». Hvilket verktøy er best?'), ['An English learner\'s dictionary', 'A Nynorsk dictionary', 'A calculator'], 0, t('Cambridge or Oxford explains English words.', 'Cambridge eller Oxford forklarer engelske ord.')),
        mcq('d1-3', [2, 3], t('What helps you pronounce a word?', 'Hva hjelper deg å uttale et ord?'), ['The speaker icon', 'The headword', 'The page number'], 0, t('Click the speaker icon to listen.', 'Klikk på høyttalerikonet for å lytte.')),
        mcq('d1-4', [2, 3], t('Which tool is best for checking the meaning of a Norwegian word?', 'Hvilket verktøy er best for å sjekke betydningen av et norsk ord?'), ['Ordbøkene', 'Cambridge', 'A photo app'], 0, t('Ordbøkene = the Norwegian dictionary.', 'Ordbøkene = den norske ordboka.')),
        mcq('d1-5', [3], t('Why is a machine translator not enough for a school text?', 'Hvorfor er en maskinoversetter ikke nok for en skoletekst?'), ['It can choose the wrong meaning of a word', 'It is always too slow', 'It cannot write English'], 0, t('Words have many meanings; check them.', 'Ord har mange betydninger; sjekk dem.'))] },

    { id: 'steps', icon: 'structure', reviewed: false, curriculum: ['K6', 'K7'],
      title: t('Eight steps to look up a word', 'Åtte steg for å slå opp et ord'),
      blurb: t('A routine that works in any online dictionary.', 'En rutine som fungerer i alle nettordbøker.'),
      top5: [
        t('Find the base form first.', 'Finn grunnformen først.'),
        t('Check the word class: noun, verb, adjective …', 'Sjekk ordklassen: substantiv, verb, adjektiv …'),
        t('Read all the meanings.', 'Les alle betydningene.'),
        t('Check the examples: does your sentence look like them?', 'Se på eksemplene: ligner setningen din på dem?'),
        t('Write down the whole phrase, not only the word.', 'Skriv ned hele uttrykket, ikke bare ordet.')],
      sections: [{ h: t('The routine', 'Rutinen'), blocks: [{ steps: [
        { h: t('1. Find the base form', '1. Finn grunnformen'), p: t('Verbs: the infinitive (to run, not ran). Nouns: singular (child, not children).', 'Verb: infinitiv (to run, ikke ran). Substantiv: entall (child, ikke children).') },
        { h: t('2. Choose the right dictionary', '2. Velg riktig ordbok'), p: t('See "Which dictionary do I need?".', 'Se «Hvilken ordbok trenger jeg?».') },
        { h: t('3. Type the word and search', '3. Skriv inn ordet og søk'), p: t('Check the spelling. Pick the right suggestion from the list.', 'Sjekk stavingen. Velg riktig forslag fra listen.') },
        { h: t('4. Check the word class', '4. Sjekk ordklassen'), p: t('Is it a verb, a noun or an adjective? The word class must fit your sentence.', 'Er det et verb, et substantiv eller et adjektiv? Ordklassen må passe til setningen din.') },
        { h: t('5. Read ALL the meanings', '5. Les ALLE betydningene'), p: t('Many words have several meanings or several entries. Do not stop at the first.', 'Mange ord har flere betydninger eller flere oppslag. Stopp ikke ved det første.') },
        { h: t('6. Look at the examples', '6. Se på eksemplene'), p: t('Choose the meaning where the example sentence is like yours.', 'Velg betydningen der eksempelsetningen ligner din.') },
        { h: t('7. Check the grammar and style', '7. Sjekk grammatikk og stil'), p: t('Look for forms, patterns (borrow something from somebody) and labels such as informal.', 'Se etter former, mønstre (borrow something from somebody) og merkelapper som uformelt.') },
        { h: t('8. Write it in your sentence and check', '8. Skriv ordet i setningen din og sjekk'), p: t('Read your sentence aloud. Does it sound right? If not, go back to step 5.', 'Les setningen din høyt. Høres den riktig ut? Hvis ikke, gå tilbake til steg 5.') }] }] }],
      practice: [
        order('d2-1', [1, 2, 3], t('Put the steps in the right order.', 'Sett stegene i riktig rekkefølge.'), ['Find the base form', 'Type the word and search', 'Check the word class', 'Read all the meanings', 'Look at the examples', 'Write it in your sentence'], t('Start with the base form; end by checking your own sentence.', 'Start med grunnformen; avslutt med å sjekke din egen setning.')),
        mcq('d2-2', [1, 2, 3], t('You look up "went". Which form should you search for?', 'Du slår opp «went». Hvilken form bør du søke etter?'), ['go', 'goes', 'gone'], 0, t('The base form is "go".', 'Grunnformen er «go».')),
        mcq('d2-3', [2, 3], t('The dictionary shows three meanings of a word. What should you do?', 'Ordboka viser tre betydninger av et ord. Hva bør du gjøre?'), ['Read all three and pick the one that fits the sentence', 'Pick the first one', 'Pick the shortest one'], 0, t('Choose by context.', 'Velg ut fra sammenhengen.')),
        mcq('d2-5', [1, 2, 3], t('You do not find the word "children". What should you try?', 'Du finner ikke ordet «children». Hva bør du prøve?'), ['The singular: child', 'A longer word', 'A different dictionary language'], 0, t('Search the base form.', 'Søk på grunnformen.')),
        mcq('d2-4', [2, 3], t('Why are examples useful?', 'Hvorfor er eksempler nyttige?'), ['They show the word in a sentence', 'They make the page longer', 'They are always funny'], 0, t('Examples show how the word is used.', 'Eksempler viser hvordan ordet brukes.'))] },

    { id: 'lexin', icon: 'language', reviewed: false, curriculum: ['K6', 'K7'],
      title: t('Using Lexin (Bokmål–English)', 'Bruke Lexin (bokmål–engelsk)'),
      blurb: t('A step-by-step guide to the online dictionary Lexin and how to read its results.', 'En steg-for-steg-guide til nettordboka Lexin og hvordan du leser resultatene.'),
      top5: [
        t('Go to lexin.oslomet.no and choose "Bokmål-engelsk".', 'Gå til lexin.oslomet.no og velg «Bokmål-engelsk».'),
        t('Type a Norwegian word in the search box and click "Søk".', 'Skriv et norsk ord i søkefeltet og klikk «Søk».'),
        t('Every result has its own headword (oppslagsord) and English word.', 'Hvert resultat har sitt eget oppslagsord og sitt eget engelske ord.'),
        t('Read the explanation (forklaring) and the examples (eksempel) to choose.', 'Les forklaringen og eksemplene for å velge.'),
        t('Click the speaker icon to listen. Click "Vis bøyning" to see the forms.', 'Klikk på høyttalerikonet for å lytte. Klikk «Vis bøyning» for å se formene.')],
      sections: [
        { h: t('Step by step', 'Steg for steg'), blocks: [{ steps: [
          { h: t('1. Open Lexin and choose the dictionary', '1. Åpne Lexin og velg ordbok'), p: t('On the Lexin page, find "Bokmålsordbøker" and click "Bokmål-engelsk". The page language can be changed at the top right: Bokmål, Nynorsk or English.', 'På Lexin-siden finner du «Bokmålsordbøker» og klikker på «Bokmål-engelsk». Sidespråket kan endres øverst til høyre: Bokmål, Nynorsk eller English.') },
          { h: t('2. Type the word', '2. Skriv inn ordet'), p: t('Type the Norwegian word in the search box (for example "løpe") and click "Søk". Suggestions may appear while you type.', 'Skriv det norske ordet i søkefeltet (for eksempel «løpe») og klikk «Søk». Forslag kan dukke opp mens du skriver.') },
          { h: t('3. Look at the number of results', '3. Se på antall treff'), p: t('Lexin shows a number such as "1–10 av 33". Use "Neste" or the page numbers to see more. Words with several meanings have several entries.', 'Lexin viser et tall som «1–10 av 33». Bruk «Neste» eller sidetallene for å se flere. Ord med flere betydninger har flere oppslag.') },
          { h: t('4. Read one entry at a time', '4. Les ett oppslag om gangen'), p: t('Each entry has the headword, the English word, the word class, an explanation and often an example. Choose the entry that fits your sentence.', 'Hvert oppslag har oppslagsordet, det engelske ordet, ordklassen, en forklaring og ofte et eksempel. Velg oppslaget som passer til setningen din.') },
          { h: t('5. Listen and check the forms', '5. Lytt og sjekk formene'), p: t('Click the speaker icon to hear the word. Click "Vis bøyning" to see how the word changes.', 'Klikk på høyttalerikonet for å høre ordet. Klikk «Vis bøyning» for å se hvordan ordet bøyes.') },
          { h: t('6. Check the English word', '6. Sjekk det engelske ordet'), p: t('Look the English word up in an English learner\'s dictionary to see how to use it.', 'Slå opp det engelske ordet i en engelsk ordbok for elever for å se hvordan det brukes.') }] }] },
        { h: t('Words you will see in Lexin', 'Ord du vil se i Lexin'), blocks: [
          { table: { head: [t('Lexin label', 'Lexin-merkelapp'), t('Means', 'Betyr'), t('Use', 'Bruk')], rows: [
            ['oppslagsord', 'headword', t('The word that was looked up', 'Ordet som ble slått opp')], ['ordklasse', 'word class', t('verb, substantiv, adjektiv …', 'verb, substantiv, adjektiv …')], ['bøyning', 'inflection / forms', t('The forms of the word', 'Formene til ordet')], ['forklaring', 'explanation', t('What the word means', 'Hva ordet betyr')],
            ['eksempel', 'example', t('A sentence with the word', 'En setning med ordet')], ['uttrykk', 'expression', t('A fixed phrase', 'Et fast uttrykk')], ['sammensetning', 'compound', t('A longer word with this word in it', 'Et lengre ord som inneholder dette ordet')], ['kommentar', 'comment', t('A note about use or style', 'En merknad om bruk eller stil')]] } },
          { p: t('Lexin can change. If a label or a button looks different, ask your teacher or read "Om LEXIN" on the site.', 'Lexin kan endre seg. Hvis en merkelapp eller en knapp ser annerledes ut, spør læreren din eller les «Om LEXIN» på nettstedet.') }] },
        { h: t('Practise with a made-up entry', 'Øv med et oppdiktet oppslag'), blocks: [{ p: t('Open the model "A Bokmål–English entry: spise" in this module and click each part.', 'Åpne modellen «Et bokmål–engelsk-oppslag: spise» i denne modulen og klikk på hver del.') }] },
        { h: t('Tips', 'Tips'), blocks: [{ lvl: 2, blocks: [{ ul: [t('If you get too many results, add more letters or search for the base form.', 'Hvis du får for mange treff, skriv flere bokstaver eller søk på grunnformen.'), t('Lexin is made for people who are learning Norwegian, so the explanations are simple. Use it for school-level words.', 'Lexin er laget for personer som lærer norsk, så forklaringene er enkle. Bruk den til ord på skolenivå.')] }] }] }],
      practice: [
        mcq('d3-1', [1, 2, 3], t('What do you type in the search box of a Bokmål–English dictionary?', 'Hva skriver du i søkefeltet i en bokmål–engelsk ordbok?'), ['A Norwegian word', 'An English word', 'A number'], 0, t('Bokmål → English.', 'Bokmål → engelsk.')),
        mcq('d3-2', [1, 2, 3], t('What does "oppslagsord" mean?', 'Hva betyr «oppslagsord»?'), ['headword', 'example', 'compound'], 0, t('The word that is looked up.', 'Ordet som slås opp.')),
        mcq('d3-3', [1, 2, 3], t('Where can you see how a verb changes?', 'Hvor kan du se hvordan et verb bøyes?'), ['"Vis bøyning"', '"Neste"', '"Søk"'], 0, t('Click "Vis bøyning".', 'Klikk «Vis bøyning».')),
        sort('d3-4', [2, 3], t('Match the Lexin label with its use.', 'Match Lexin-merkelappen med bruken.'), [t('Meaning', 'Betydning'), t('Use of the word', 'Bruk av ordet')], [['forklaring', 0], ['oppslagsord', 0], ['eksempel', 1], ['uttrykk', 1], ['sammensetning', 1], ['ordklasse', 0]], t('Forklaring, oppslagsord and ordklasse tell what the word is; the others show it in use.', 'Forklaring, oppslagsord og ordklasse sier hva ordet er; de andre viser det i bruk.')),
        mcq('d3-5', [2, 3], t('Lexin shows "1–10 av 33". What does it mean?', 'Lexin viser «1–10 av 33». Hva betyr det?'), ['You see results 1 to 10 of 33', 'There are 10 pages', 'The word is 33 letters long'], 0, t('Use "Neste" to see more.', 'Bruk «Neste» for å se flere.')),
        mcq('d3-6', [2, 3], t('A word has several entries with different English words. What do you do?', 'Et ord har flere oppslag med ulike engelske ord. Hva gjør du?'), ['Read the explanations and examples and choose the one that fits', 'Choose the first', 'Choose the last'], 0, t('The right meaning depends on the sentence.', 'Riktig betydning avhenger av setningen.')),
        mcq('d3-7', [3], t('Why should you check the English word in an English dictionary too?', 'Hvorfor bør du også sjekke det engelske ordet i en engelsk ordbok?'), ['To see how it is used in a sentence', 'To check the Norwegian spelling', 'To find the page number'], 0, t('Examples and patterns show use.', 'Eksempler og mønstre viser bruk.'))] },

    { id: 'learner', icon: 'book', reviewed: false, curriculum: ['K6', 'K7'],
      title: t('English learner\'s dictionaries', 'Engelske ordbøker for elever'),
      blurb: t('How to read an entry in Cambridge or Oxford.', 'Hvordan du leser et oppslag i Cambridge eller Oxford.'),
      top5: [
        t('Cambridge Dictionary and Oxford Learner\'s Dictionaries explain words in simple English.', 'Cambridge Dictionary og Oxford Learner\'s Dictionaries forklarer ord på enkel engelsk.'),
        t('Check the word class and read ALL the numbered meanings.', 'Sjekk ordklassen og les ALLE de nummererte betydningene.'),
        t('Click the UK and US speaker icons to hear the pronunciation.', 'Klikk på UK- og US-høyttalerikonene for å høre uttalen.'),
        t('Use the example sentences: copy the pattern.', 'Bruk eksempelsetningene: kopier mønsteret.'),
        t('Read the usage notes: they warn about common mistakes.', 'Les bruksmerknadene: de advarer mot vanlige feil.')],
      sections: [
        { h: t('Parts of an entry', 'Deler av et oppslag'), blocks: [
          { table: { head: [t('Part', 'Del'), t('What it tells you', 'Hva den forteller deg')], rows: [
            [t('headword', 'oppslagsord'), t('The word and its spelling', 'Ordet og stavingen')], [t('pronunciation', 'uttale'), t('How to say it (UK and US)', 'Hvordan du sier det (UK og US)')], [t('word class', 'ordklasse'), 'noun, verb, adjective …'], [t('definition', 'forklaring'), t('What it means', 'Hva det betyr')],
            [t('example', 'eksempel'), t('The word in a sentence', 'Ordet i en setning')], [t('grammar and usage notes', 'grammatikk og bruksmerknader'), t('Patterns and warnings', 'Mønstre og advarsler')], [t('level label (A1–C2)', 'nivåmerke (A1–C2)'), t('How common or difficult the word is', 'Hvor vanlig eller vanskelig ordet er')]] } },
          { p: t('Try it: open the model "An English learner\'s entry: borrow" in this module and click each part.', 'Prøv det: åpne modellen «Et oppslag i en engelsk ordbok for elever: borrow» i denne modulen og klikk på hver del.') }] },
        { h: t('Nouns: countable or uncountable', 'Substantiv: tellelige eller utellelige'), blocks: [
          { lvl: 2, blocks: [{ p: t('Many learner\'s dictionaries show if a noun is countable or uncountable. That tells you if you can say "a" and "two": "a book", but not "an information". See Grammar: Articles and nouns.', 'Mange ordbøker for elever viser om et substantiv er tellelig eller utellelig. Det forteller deg om du kan si «a» og «two»: «a book», men ikke «an information». Se Grammar: Articles and nouns.') }] }] }],
      practice: [
        mcq('d4-1', [1, 2, 3], t('Where do you find the meaning of a word in an English learner\'s dictionary?', 'Hvor finner du betydningen av et ord i en engelsk ordbok for elever?'), ['In the definition', 'In the headword', 'In the page number'], 0, t('The definition explains the word.', 'Forklaringen forklarer ordet.')),
        mcq('d4-2', [1, 2, 3], t('What does the usage note give you?', 'Hva gir bruksmerknaden deg?'), ['A warning about a common mistake', 'A funny story', 'The page number'], 0, t('Usage notes help you avoid mistakes.', 'Bruksmerknader hjelper deg å unngå feil.')),
        mcq('d4-3', [2, 3], t('Which entry part shows how to use a word in a sentence?', 'Hvilken del av oppslaget viser hvordan du bruker et ord i en setning?'), ['The example sentences', 'The headword', 'The word class'], 0, t('Examples show real use.', 'Eksempler viser ekte bruk.')),
        mcq('d4-4', [2, 3], t('What do the UK and US icons show?', 'Hva viser UK- og US-ikonene?'), ['British and American pronunciation', 'Two spellings', 'Two meanings'], 0, t('Listen to both.', 'Lytt til begge.')),
        mcq('d4-5', [3], t('The dictionary says a noun is uncountable. Which sentence is correct?', 'Ordboka sier at et substantiv er utellelig. Hvilken setning er riktig?'), ['I need some information.', 'I need an information.', 'I need two informations.'], 0, t('Uncountable nouns have no "a" and no plural.', 'Utellelige substantiv har ikke «a» og ikke flertall.'))] },

    { id: 'machine', icon: 'warn', reviewed: false, curriculum: ['K6', 'K7', 'K9'],
      title: t('Dictionary or machine translation?', 'Ordbok eller maskinoversettelse?'),
      blurb: t('Why a dictionary helps you learn, and where translation tools can go wrong.', 'Hvorfor en ordbok hjelper deg å lære, og hvor oversettelsesverktøy kan gå galt.'),
      top5: [
        t('A dictionary shows ALL the meanings. A translator often shows only one.', 'En ordbok viser ALLE betydningene. En oversetter viser ofte bare én.'),
        t('Word-for-word translation often gives wrong or strange English.', 'Ord-for-ord-oversettelse gir ofte feil eller rar engelsk.'),
        t('Beware of false friends: gift, eventually, actual, sympathetic.', 'Vær obs på falske venner: gift, eventually, actual, sympathetic.'),
        t('Use a translator for a first idea, then check each important word in a dictionary.', 'Bruk en oversetter for en første idé, og sjekk hvert viktige ord i en ordbok.'),
        t('Your teacher wants to see YOUR English. Follow the school\'s rules for translation and AI tools.', 'Læreren din vil se DIN engelsk. Følg skolens regler for oversettelse og KI-verktøy.')],
      sections: [
        { h: t('Typical problems', 'Typiske problemer'), blocks: [
          { table: { head: [t('Problem', 'Problem'), t('Example', 'Eksempel')], rows: [
            [t('Wrong meaning', 'Feil betydning'), t('"Jeg liker å løpe" is fine, but "Jeg løper tom for tid" = "I am running out of time". A translator may choose the wrong "løpe".', '«Jeg liker å løpe» er greit, men «Jeg løper tom for tid» = «I am running out of time». En oversetter kan velge feil «løpe».')],
            [t('Word for word', 'Ord for ord'), t('"Jeg har 14 år" → "I have 14 years" (wrong). Right: "I am 14."', '«Jeg har 14 år» → «I have 14 years» (feil). Riktig: «I am 14.»')],
            [t('False friends', 'Falske venner'), t('"Jeg skal få en gave" → "I will become a gift" (wrong).', '«Jeg skal få en gave» → «I will become a gift» (feil).')]] } },
          { nor: { note: t('A translated sentence may look fine but still be wrong. Check it word by word in a dictionary.', 'En oversatt setning kan se fin ut, men fortsatt være feil. Sjekk den ord for ord i en ordbok.'), bad: 'I have 14 years.', good: 'I am 14 years old.' } }] },
        { h: t('A good way to use both', 'En god måte å bruke begge på'), blocks: [
          { steps: [{ h: t('Write in English first', 'Skriv først på engelsk'), p: t('Try your own words, even if they are simple.', 'Prøv med dine egne ord, selv om de er enkle.') }, { h: t('Look up the words you need', 'Slå opp ordene du trenger'), p: t('Use a dictionary for the words you do not know.', 'Bruk en ordbok for ordene du ikke kan.') }, { h: t('Check your sentence', 'Sjekk setningen din'), p: t('Read it aloud and check with the examples.', 'Les den høyt og sjekk mot eksemplene.') }] }] }],
      practice: [
        mcq('d5-1', [1, 2, 3], t('Why can a machine translation be wrong?', 'Hvorfor kan en maskinoversettelse være feil?'), ['It can choose the wrong meaning of a word', 'It never knows English', 'It is always too long'], 0, t('Words have several meanings.', 'Ord har flere betydninger.')),
        mcq('d5-2', [1, 2, 3], t('Which is the best English for "Jeg har 14 år"?', 'Hva er best engelsk for «Jeg har 14 år»?'), ['I am 14.', 'I have 14 years.', 'I have 14 old.'], 0, t('English uses "be" for age.', 'Engelsk bruker «be» om alder.')),
        mcq('d5-3', [2, 3], t('Which is a false friend?', 'Hvilket er en falsk venn?'), ['gift (English) / gift (Norwegian)', 'hotel / hotell', 'music / musikk'], 0, t('English "gift" = present; Norwegian "gift" = married.', 'Engelsk «gift» = gave; norsk «gift» = married.')),
        mcq('d5-5', [1, 2, 3], t('Which is the best use of a translator?', 'Hva er den beste bruken av en oversetter?'), ['To get a first idea, then check the words in a dictionary', 'To write the whole text for you', 'To check the grammar of your whole text'], 0, t('Use it as a first step only.', 'Bruk den bare som et første steg.')),
        mcq('d5-4', [2, 3], t('What should you do with a translated text?', 'Hva bør du gjøre med en oversatt tekst?'), ['Check the important words in a dictionary', 'Hand it in without reading it', 'Make it longer'], 0, t('Always check and use your own English.', 'Sjekk alltid og bruk din egen engelsk.'))] },

    { id: 'detective', icon: 'bulb', reviewed: false, curriculum: ['K6', 'K7'],
      title: t('Dictionary detective', 'Ordbokdetektiv'),
      blurb: t('Read a short mock entry and answer questions about it.', 'Les et kort oppdiktet oppslag og svar på spørsmål om det.'),
      top5: [
        t('Each question shows a short, made-up dictionary entry.', 'Hvert spørsmål viser et kort, oppdiktet ordbokoppslag.'),
        t('Read the entry carefully before you choose.', 'Les oppslaget nøye før du velger.'),
        t('The entries are not from a real dictionary.', 'Oppslagene er ikke fra en ekte ordbok.')],
      practice: [
        mcq('d6-1', [1, 2, 3], t('Which word class is "borrow"?', 'Hvilken ordklasse er «borrow»?'), ['verb', 'noun', 'adjective'], 0, t('The entry says "verb".', 'Oppslaget sier «verb».'), 'borrow /ˈbɒrəʊ/ verb: to take something from someone for a short time and give it back later'),
        mcq('d6-2', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['Can I borrow your pen?', 'Can I borrow you my pen?', 'Can I lend your pen?'], 0, t('Follow the example.', 'Følg eksempelet.'), 'borrow: “Can I borrow your pen?”'),
        mcq('d6-3', [1, 2, 3], t('What does "spise" mean in English?', 'Hva betyr «spise» på engelsk?'), ['eat', 'sleep', 'run'], 0, t('The equivalent is "eat".', 'Ekvivalenten er «eat».'), 'spise (verb) – eat: ta til seg mat'),
        mcq('d6-4', [2, 3], t('What is the past tense of "spise" in the entry?', 'Hva er preteritum av «spise» i oppslaget?'), ['spiste', 'spiser', 'har spist'], 0, t('Forms: spiser, spiste, har spist. The past is "spiste".', 'Former: spiser, spiste, har spist. Preteritum er «spiste».'), 'spise verb ▸ spiser, spiste, har spist'),
        mcq('d6-5', [2, 3], t('Which sentence follows the pattern?', 'Hvilken setning følger mønsteret?'), ['He borrowed a book from the library.', 'He borrowed the library a book.', 'He borrowed to the library a book.'], 0, t('borrow something (from somebody).', 'borrow something (from somebody).'), 'borrow something (from somebody)'),
        mcq('d6-6', [2, 3], t('What does "spise ute" mean?', 'Hva betyr «spise ute»?'), ['eat out (at a restaurant)', 'eat outdoors only', 'eat very much'], 0, t('The expression is "eat out".', 'Uttrykket er «eat out».'), 'spise ute – eat out'),
        mcq('d6-7', [3], t('The entry for "run" has seven meanings. What is the best way to choose?', 'Oppslaget for «run» har sju betydninger. Hva er den beste måten å velge på?'), ['Read the examples and choose the one that is like your sentence', 'Choose number 1', 'Choose the longest'], 0, t('Context decides.', 'Sammenhengen avgjør.'))] }
  ];

  var resources = [
    { id: 'lexin', title: 'LEXIN-ordbøker (Bokmål–engelsk)', publisher: 'OsloMet – storbyuniversitetet',
      url: 'https://lexin.oslomet.no/', type: 'article', lang: 'nb', level: 'A2–B1',
      why: t('A free online dictionary made for learners of Norwegian. Choose Bokmål–engelsk to look up a Norwegian word and see English words, explanations, examples and sound.', 'En gratis nettordbok laget for norskelever. Velg Bokmål–engelsk for å slå opp et norsk ord og se engelske ord, forklaringer, eksempler og lyd.'),
      checked: '2026-11-16', license: 'OsloMet, link only' },
    { id: 'ordbokene', title: 'Ordbøkene (Bokmålsordboka og Nynorskordboka)', publisher: 'Språkrådet og Universitetet i Bergen',
      url: 'https://ordbokene.no/', type: 'article', lang: 'nb', level: 'B1',
      why: t('The Norwegian dictionaries. Use them when you need to understand a Norwegian word.', 'De norske ordbøkene. Bruk dem når du må forstå et norsk ord.'),
      checked: '2026-11-16', license: 'Link only' },
    { id: 'cambridge', title: 'Cambridge Dictionary', publisher: 'Cambridge University Press & Assessment',
      url: 'https://dictionary.cambridge.org/', type: 'article', lang: 'en', level: 'B1',
      why: t('An English learner\'s dictionary with simple definitions, examples and British and American sound.', 'En engelsk ordbok for elever med enkle forklaringer, eksempler og britisk og amerikansk lyd.'),
      checked: '2026-11-16', license: 'Cambridge University Press, link only' },
    { id: 'oxford', title: 'Oxford Learner\'s Dictionaries', publisher: 'Oxford University Press',
      url: 'https://www.oxfordlearnersdictionaries.com/', type: 'article', lang: 'en', level: 'B1',
      why: t('Another English learner\'s dictionary, with level labels and example sentences.', 'En annen engelsk ordbok for elever, med nivåmerker og eksempelsetninger.'),
      checked: '2026-11-16', license: 'Oxford University Press, link only' }
  ];

  APP.modules.push({
    id: 'dictionary', group: 'skills', icon: 'language',
    title: t('Dictionary skills', 'Ordbokbruk'),
    blurb: t('Use online dictionaries well: Lexin, Cambridge, Oxford and more.', 'Bruk nettordbøker godt: Lexin, Cambridge, Oxford og flere.'),
    helps: t('Step-by-step guides to choose the right dictionary, find the right meaning and avoid translation traps.', 'Steg-for-steg-guider for å velge riktig ordbok, finne riktig betydning og unngå oversettelsesfeller.'),
    curriculum: ['K6', 'K7'],
    top5: [
      t('Choose the right dictionary for the job (see "Which dictionary do I need?").', 'Velg riktig ordbok for oppgaven (se «Hvilken ordbok trenger jeg?»).'),
      t('Follow the eight steps every time you look up a word.', 'Følg de åtte stegene hver gang du slår opp et ord.'),
      t('Read all the meanings and the examples before you choose.', 'Les alle betydningene og eksemplene før du velger.'),
      t('Use the two model entries to learn what each part of an entry tells you.', 'Bruk de to modelloppslagene til å lære hva hver del av et oppslag forteller deg.'),
      t('A translator is not a dictionary: always check important words.', 'En oversetter er ikke en ordbok: sjekk alltid viktige ord.')],
    topics: topics,
    models: [spise, borrow],
    resources: resources,
    pending: []
  });
})();
