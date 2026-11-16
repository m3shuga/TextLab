/* ==========================================================================
   MODULE: Grammar (part 3 of 3): topics 9-12, the irregular verb table and the glossary.
   Adds to the module created in grammar.js. ALL text is reviewed:false until the teacher approves it.
   The "core" verbs are a selection made for this site (common verbs in school English),
   NOT taken from a published frequency list.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var mcq = function (id, lv, q, opts, ans, why, ctx) { return { id: id, type: 'mcq', level: lv, q: q, options: opts, answer: ans, why: why, ctx: ctx }; };
  var gap = function (id, lv, before, after, opts, ans, why) { return { id: id, type: 'gap', level: lv, q: t('Choose the correct word.', 'Velg riktig ord.'), before: before, after: after, options: opts, answer: ans, why: why }; };
  var sort = function (id, lv, q, buckets, items, why) { return { id: id, type: 'sort', level: lv, q: q, buckets: buckets, items: items.map(function (x) { return { text: x[0], b: x[1] }; }), why: why }; };
  var order = function (id, lv, q, items, why) { return { id: id, type: 'order', level: lv, q: q, items: items, why: why }; };
  var ex = function (en, nb) { return { en: en, nb: nb }; };
  var G = APP.module('grammar');

  /* ---------------- irregular verbs: [base, past, participle, norwegian, core] ---------------- */
  var V = [
    ['be', 'was / were', 'been', 'være', 1], ['become', 'became', 'become', 'bli', 1], ['begin', 'began', 'begun', 'begynne', 1], ['bite', 'bit', 'bitten', 'bite', 0],
    ['blow', 'blew', 'blown', 'blåse', 0], ['break', 'broke', 'broken', 'ødelegge, brekke', 1], ['bring', 'brought', 'brought', 'ta med, hente', 1], ['build', 'built', 'built', 'bygge', 0],
    ['burn', '{burnt|burned}', '{burnt|burned}', 'brenne', 0], ['buy', 'bought', 'bought', 'kjøpe', 1], ['catch', 'caught', 'caught', 'fange, ta', 1], ['choose', 'chose', 'chosen', 'velge', 1],
    ['come', 'came', 'come', 'komme', 1], ['cost', 'cost', 'cost', 'koste', 0], ['cut', 'cut', 'cut', 'skjære, kutte', 1], ['dive', '{dived|dove}', 'dived', 'dykke', 0],
    ['do', 'did', 'done', 'gjøre', 1], ['draw', 'drew', 'drawn', 'tegne', 1], ['dream', '{dreamt|dreamed}', '{dreamt|dreamed}', 'drømme', 0], ['drink', 'drank', 'drunk', 'drikke', 1],
    ['drive', 'drove', 'driven', 'kjøre', 1], ['eat', 'ate', 'eaten', 'spise', 1], ['fall', 'fell', 'fallen', 'falle', 1], ['feed', 'fed', 'fed', 'mate', 0],
    ['feel', 'felt', 'felt', 'føle', 1], ['fight', 'fought', 'fought', 'slåss', 0], ['find', 'found', 'found', 'finne', 1], ['fly', 'flew', 'flown', 'fly', 1],
    ['forget', 'forgot', 'forgotten', 'glemme', 1], ['forgive', 'forgave', 'forgiven', 'tilgi', 0], ['freeze', 'froze', 'frozen', 'fryse', 0], ['get', 'got', '{got|gotten}', 'få, bli, komme', 1],
    ['give', 'gave', 'given', 'gi', 1], ['go', 'went', 'gone / been', 'gå, dra', 1], ['grow', 'grew', 'grown', 'vokse', 1], ['hang', 'hung', 'hung', 'henge', 0],
    ['have', 'had', 'had', 'ha', 1], ['hear', 'heard', 'heard', 'høre', 1], ['hide', 'hid', 'hidden', 'gjemme', 0], ['hit', 'hit', 'hit', 'slå, treffe', 0],
    ['hold', 'held', 'held', 'holde', 1], ['hurt', 'hurt', 'hurt', 'skade, gjøre vondt', 0], ['keep', 'kept', 'kept', 'beholde, holde', 1], ['know', 'knew', 'known', 'vite, kjenne', 1],
    ['lay', 'laid', 'laid', 'legge', 0], ['lead', 'led', 'led', 'lede', 0], ['learn', '{learnt|learned}', '{learnt|learned}', 'lære (seg)', 1], ['leave', 'left', 'left', 'forlate, dra', 1],
    ['lend', 'lent', 'lent', 'låne bort', 0], ['let', 'let', 'let', 'la, tillate', 1], ['lie', 'lay', 'lain', 'ligge', 0], ['lose', 'lost', 'lost', 'miste, tape', 1],
    ['make', 'made', 'made', 'lage, gjøre', 1], ['mean', 'meant', 'meant', 'bety, mene', 1], ['meet', 'met', 'met', 'møte', 1], ['pay', 'paid', 'paid', 'betale', 1],
    ['put', 'put', 'put', 'sette, legge', 1], ['read', 'read', 'read', 'lese', 1], ['ride', 'rode', 'ridden', 'ri, sykle', 0], ['ring', 'rang', 'rung', 'ringe', 0],
    ['rise', 'rose', 'risen', 'stige', 0], ['run', 'ran', 'run', 'løpe', 1], ['say', 'said', 'said', 'si', 1], ['see', 'saw', 'seen', 'se', 1],
    ['sell', 'sold', 'sold', 'selge', 1], ['send', 'sent', 'sent', 'sende', 1], ['set', 'set', 'set', 'sette, stille inn', 0], ['shake', 'shook', 'shaken', 'riste', 0],
    ['shine', 'shone', 'shone', 'skinne', 0], ['shoot', 'shot', 'shot', 'skyte', 0], ['show', 'showed', 'shown', 'vise', 1], ['shut', 'shut', 'shut', 'lukke', 0],
    ['sing', 'sang', 'sung', 'synge', 1], ['sink', 'sank', 'sunk', 'synke', 0], ['sit', 'sat', 'sat', 'sitte', 1], ['sleep', 'slept', 'slept', 'sove', 1],
    ['speak', 'spoke', 'spoken', 'snakke', 1], ['spell', '{spelt|spelled}', '{spelt|spelled}', 'stave', 0], ['spend', 'spent', 'spent', 'bruke (tid, penger)', 1], ['stand', 'stood', 'stood', 'stå', 1],
    ['steal', 'stole', 'stolen', 'stjele', 0], ['swim', 'swam', 'swum', 'svømme', 1], ['take', 'took', 'taken', 'ta', 1], ['teach', 'taught', 'taught', 'undervise', 1],
    ['tear', 'tore', 'torn', 'rive', 0], ['tell', 'told', 'told', 'fortelle', 1], ['think', 'thought', 'thought', 'tenke, tro', 1], ['throw', 'threw', 'thrown', 'kaste', 1],
    ['understand', 'understood', 'understood', 'forstå', 1], ['wake', 'woke', 'woken', 'våkne, vekke', 0], ['wear', 'wore', 'worn', 'ha på seg', 1], ['win', 'won', 'won', 'vinne', 1],
    ['write', 'wrote', 'written', 'skrive', 1]
  ];
  G.verbs = V.map(function (x) { return { b: x[0], p: x[1], pp: x[2], nb: x[3], core: !!x[4] }; });

  /* ---------------- glossary: grammar words in English and Norwegian ---------------- */
  var GL = [
    ['noun', 'substantiv', ['A word for a person, place or thing.', 'Et ord for en person, et sted eller en ting.'], 'dog, school, happiness'],
    ['verb', 'verb', ['A word for an action or a state.', 'Et ord for en handling eller en tilstand.'], 'run, be, think'],
    ['adjective', 'adjektiv', ['A word that describes a noun.', 'Et ord som beskriver et substantiv.'], 'a **big** house'],
    ['adverb', 'adverb', ['A word that tells how, when or where something happens.', 'Et ord som sier hvordan, når eller hvor noe skjer.'], 'She sings **beautifully**.'],
    ['pronoun', 'pronomen', ['A small word that stands for a noun.', 'Et lite ord som står i stedet for et substantiv.'], '**She** is my friend.'],
    ['preposition', 'preposisjon', ['A word that shows place, time or direction.', 'Et ord som viser sted, tid eller retning.'], 'in, on, at, to'],
    ['conjunction', 'konjunksjon', ['A word that joins words or sentences.', 'Et ord som binder sammen ord eller setninger.'], 'and, but, because'],
    ['article', 'artikkel', ['The small words a, an and the.', 'De små ordene a, an og the.'], 'a book, the book'],
    ['subject', 'subjekt', ['The person or thing that does the action.', 'Personen eller tingen som gjør handlingen.'], '**Ingrid** writes.'],
    ['object', 'objekt', ['The person or thing that receives the action.', 'Personen eller tingen som handlingen går ut over.'], 'She writes **a letter**.'],
    ['sentence', 'setning', ['A group of words with a subject and a verb that makes sense.', 'En gruppe ord med subjekt og verb som gir mening.'], 'I like pizza.'],
    ['clause', 'leddsetning / ledd', ['A part of a sentence with its own subject and verb.', 'En del av en setning med eget subjekt og verb.'], 'because it was raining'],
    ['main clause', 'helsetning / hovedsetning', ['A clause that can stand alone.', 'Et ledd som kan stå alene.'], 'We stayed at home.'],
    ['subordinate clause', 'leddsetning / bisetning', ['A clause that cannot stand alone.', 'Et ledd som ikke kan stå alene.'], 'because it was raining'],
    ['tense', 'tid / tempus', ['The form of the verb that shows when something happens.', 'Verbformen som viser når noe skjer.'], 'play, played, will play'],
    ['present simple', 'presens', ['A tense for habits and facts.', 'En tid for vaner og fakta.'], 'I play football every week.'],
    ['past simple', 'preteritum', ['A tense for finished actions in the past.', 'En tid for avsluttede handlinger i fortiden.'], 'I played football yesterday.'],
    ['present perfect', 'presens perfektum', ['A tense that links the past and now: have / has + past participle.', 'En tid som knytter fortid og nåtid: have / has + perfektum partisipp.'], 'I have played football for years.'],
    ['future', 'futurum / framtid', ['Things that will happen later: will, going to.', 'Ting som skal skje senere: will, going to.'], 'I will play tomorrow.'],
    ['auxiliary verb', 'hjelpeverb', ['A helping verb: be, have, do.', 'Et hjelpeverb: be, have, do.'], 'I **do** not like it.'],
    ['modal verb', 'modalt hjelpeverb', ['A helping verb that shows ability, permission or possibility: can, may, must, should.', 'Et hjelpeverb som viser evne, tillatelse eller mulighet: can, may, must, should.'], 'You **should** sleep.'],
    ['infinitive', 'infinitiv', ['The base form of a verb, often with "to".', 'Grunnformen til et verb, ofte med «to».'], '(to) run, (to) eat'],
    ['past participle', 'perfektum partisipp', ['The verb form used after have / has, e.g. played, written.', 'Verbformen som brukes etter have / has, f.eks. played, written.'], 'I have **written** a text.'],
    ['-ing form', '-ing-form', ['The verb + -ing: used in continuous tenses and after prepositions.', 'Verbet + -ing: brukes i progressive tider og etter preposisjoner.'], 'I am **reading**.'],
    ['regular verb', 'regelrett verb', ['A verb that adds -ed in the past.', 'Et verb som får -ed i preteritum.'], 'walk – walked'],
    ['irregular verb', 'uregelmessig verb', ['A verb with its own past forms.', 'Et verb med egne fortidsformer.'], 'go – went – gone'],
    ['agreement', 'samsvar / kongruens', ['The verb matches the subject (he walks, they walk).', 'Verbet passer til subjektet (he walks, they walk).'], 'He **walks**. They **walk**.'],
    ['singular', 'entall', ['One person or thing.', 'Én person eller ting.'], 'a dog'],
    ['plural', 'flertall', ['More than one person or thing.', 'Mer enn én person eller ting.'], 'two dogs'],
    ['countable noun', 'tellelig substantiv', ['A noun you can count: one book, two books.', 'Et substantiv du kan telle: one book, two books.'], 'book, friend'],
    ['uncountable noun', 'utellelig substantiv', ['A noun you cannot count. It has no plural.', 'Et substantiv du ikke kan telle. Det har ikke flertall.'], 'information, advice'],
    ['comparative', 'komparativ', ['The form that compares two things.', 'Formen som sammenligner to ting.'], 'bigger, more interesting'],
    ['superlative', 'superlativ', ['The form that shows the most.', 'Formen som viser mest.'], 'biggest, most interesting'],
    ['possessive', 'eiendomsord', ['A word that shows who owns something.', 'Et ord som viser hvem som eier noe.'], 'my, your, his, her, their'],
    ['contraction', 'sammentrekning', ['A short form with an apostrophe.', 'En kortform med apostrof.'], "don't, I'm, it's"],
    ['apostrophe', 'apostrof', ['The mark (\') in contractions and possession.', 'Tegnet (\') i sammentrekninger og eiendom.'], "Tom's book"],
    ['comma', 'komma', ['The mark (,) that separates parts of a sentence.', 'Tegnet (,) som skiller deler av en setning.'], 'However, I agree.'],
    ['full stop (US: period)', 'punktum', ['The mark (.) at the end of a sentence.', 'Tegnet (.) på slutten av en setning.'], 'I agree.'],
    ['capital letter', 'stor bokstav', ['A big letter such as A, B, C.', 'En stor bokstav som A, B, C.'], 'Monday, Norway'],
    ['paragraph', 'avsnitt', ['A group of sentences about one idea.', 'En gruppe setninger om én idé.'], ''],
    ['synonym', 'synonym', ['A word with almost the same meaning as another.', 'Et ord som har nesten samme betydning som et annet.'], 'big – large'],
    ['linking word', 'bindeord', ['A word that links ideas or sentences.', 'Et ord som knytter sammen ideer eller setninger.'], 'however, because, first']
  ];
  G.glossary = GL.map(function (g) { return { en: g[0], nb: g[1], def: t(g[2][0], g[2][1]), ex: g[3] }; });

  G.topics.push(
    /* ---------------------------------------------------------------- 9 */
    { id: 'adjectives', icon: 'tone', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Adjectives, adverbs and comparing', 'Adjektiv, adverb og sammenligning'),
      blurb: t('Describing words, how they change, and bigger / more interesting / the best.', 'Beskrivende ord, hvordan de endrer seg, og bigger / more interesting / the best.'),
      top5: [
        t('Adjectives come BEFORE the noun and never get a plural -s: "two big dogs".', 'Adjektiv står FØR substantivet og får aldri flertalls-s: «two big dogs».'),
        t('Adverbs usually end in -ly and describe a verb: "She sings beautifully."', 'Adverb ender ofte på -ly og beskriver et verb: «She sings beautifully.»'),
        t('good is an adjective, well is an adverb: "a good singer", "she sings well".', 'good er et adjektiv, well er et adverb: «a good singer», «she sings well».'),
        t('Short adjectives: bigger, the biggest. Long adjectives: more interesting, the most interesting.', 'Korte adjektiv: bigger, the biggest. Lange adjektiv: more interesting, the most interesting.'),
        t('Never use both: not "more bigger" and not "the most best".', 'Aldri begge deler: ikke «more bigger» og ikke «the most best».')],
      sections: [
        { h: t('Adjectives and adverbs', 'Adjektiv og adverb'), blocks: [
          { table: { head: [t('Adjective', 'Adjektiv'), t('Adverb', 'Adverb'), t('Example', 'Eksempel')], rows: [['quick', 'quickly', 'He is quick. He runs quickly.'], ['careful', 'carefully', 'She is careful. She drives carefully.'], ['good', 'well', 'a good singer – she sings well'], ['fast', 'fast', 'a fast car – it goes fast'], ['hard', 'hard', 'hard work – she works hard']] } },
          { nor: { note: t('In Norwegian the adjective often works as an adverb ("Hun synger pent"). In English you need -ly.', 'På norsk fungerer adjektivet ofte som adverb («Hun synger pent»). På engelsk trenger du -ly.'), bad: 'She sings beautiful.', good: 'She sings beautifully.' } }] },
        { h: t('Comparing', 'Sammenligning'), blocks: [
          { table: { head: [t('Type', 'Type'), t('Comparative', 'Komparativ'), t('Superlative', 'Superlativ')], rows: [[t('short: + er / est', 'kort: + er / est'), 'bigger', 'the biggest'], [t('ends in -y: ier / iest', 'ender på -y: ier / iest'), 'happier', 'the happiest'], [t('long: more / most', 'lang: more / most'), 'more interesting', 'the most interesting'], [t('irregular', 'uregelmessig'), 'good – better', 'the best'], [t('irregular', 'uregelmessig'), 'bad – worse', 'the worst']] } },
          { ex: [ex('My brother is taller than me.', 'Broren min er høyere enn meg.'), ex('This is the most interesting book I have read.', 'Dette er den mest interessante boka jeg har lest.'), ex('She is as tall as her father.', 'Hun er like høy som faren sin.')] },
          { pairs: [{ bad: 'She is more taller than me.', good: 'She is taller than me.', note: t('One way only: -er or more.', 'Bare én måte: -er eller more.') }, { bad: 'He is the most best player.', good: 'He is the best player.', note: t('"Best" is already a superlative.', '«Best» er allerede superlativ.') }] },
          { lvl: 2, blocks: [{ p: t('Compare with "than" (bigger than) and "as … as" (as big as). Norwegian "enn" and "som" are both used, so be careful: "taller THAN", but "as tall AS".', 'Sammenlign med «than» (bigger than) og «as … as» (as big as). Ikke bland: «taller THAN», men «as tall AS».') }] }] },
        { h: t('Order of adjectives', 'Rekkefølge på adjektiv'), blocks: [
          { lvl: 3, blocks: [{ p: t('With several adjectives English likes this order: opinion – size – age – colour – origin – material. "a lovely small old red Italian wooden chair". Two adjectives are usually enough!', 'Med flere adjektiv liker engelsk denne rekkefølgen: mening – størrelse – alder – farge – opprinnelse – materiale. «a lovely small old red Italian wooden chair». To adjektiv er som regel nok!') }] }] }],
      practice: [
        gap('g9-1', [1, 2, 3], 'She sings', '.', ['beautifully', 'beautiful', 'beauty'], 0, t('A verb is described by an adverb (-ly).', 'Et verb beskrives av et adverb (-ly).')),
        gap('g9-2', [1, 2, 3], 'My brother is', 'than me.', ['taller', 'more tall', 'tallest'], 0, t('Short adjective: -er.', 'Kort adjektiv: -er.')),
        gap('g9-3', [1, 2, 3], 'This is the', 'film I have seen.', ['most interesting', 'more interesting', 'interestingest'], 0, t('Long adjective: the most.', 'Langt adjektiv: the most.')),
        mcq('g9-4', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['She plays well.', 'She plays good.', 'She plays goodly.'], 0, t('"Well" is the adverb.', '«Well» er adverbet.')),
        mcq('g9-5', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['two big dogs', 'two bigs dogs', 'two big dog\'s'], 0, t('Adjectives do not get -s.', 'Adjektiv får ikke -s.')),
        mcq('g9-6', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['This is the best day.', 'This is the most best day.', 'This is the goodest day.'], 0, t('good – better – best.', 'good – better – best.')),
        mcq('g9-7', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['She is as tall as her father.', 'She is as tall than her father.', 'She is so tall as her father.'], 0, t('as … as.', 'as … as.')),
        sort('g9-8', [2, 3], t('Adjective or adverb?', 'Adjektiv eller adverb?'), [t('Adjective', 'Adjektiv'), t('Adverb', 'Adverb')], [['quick', 0], ['quickly', 1], ['careful', 0], ['carefully', 1], ['happy', 0], ['happily', 1]], t('Most adverbs end in -ly.', 'De fleste adverb ender på -ly.')),
        mcq('g9-9', [3], t('Which order is natural in English?', 'Hvilken rekkefølge er naturlig på engelsk?'), ['a small old wooden chair', 'a wooden old small chair', 'an old wooden small chair'], 0, t('Size – age – material.', 'Størrelse – alder – materiale.'))] },

    /* ---------------------------------------------------------------- 10 */
    { id: 'linking', icon: 'structure', reviewed: false, curriculum: ['K4', 'K5'],
      title: t('Linking words', 'Bindeord'),
      blurb: t('Words that join ideas: and, but, because, however, first, finally.', 'Ord som binder sammen ideer: and, but, because, however, first, finally.'),
      top5: [
        t('Use and to add, but to contrast, so for a result and because for a reason.', 'Bruk and for å legge til, but for kontrast, so for resultat og because for årsak.'),
        t('Sequence words show order: first, then, after that, finally.', 'Rekkefølgeord viser rekkefølge: first, then, after that, finally.'),
        t('Use however and on the other hand to show the other side.', 'Bruk however og on the other hand for å vise den andre siden.'),
        t('A comma goes after however, for example and in conclusion.', 'Komma står etter however, for example og in conclusion.'),
        t('Do not start every sentence with the same linking word.', 'Ikke begynn alle setninger med det samme bindeordet.')],
      sections: [
        { h: t('Linking words by job', 'Bindeord etter oppgave'), blocks: [
          { table: { head: [t('Job', 'Oppgave'), t('Words', 'Ord'), t('Example', 'Eksempel')], rows: [
            [t('adding', 'legge til'), 'and, also, too, in addition', 'I like football. Also, I like swimming.'], [t('contrast', 'kontrast'), 'but, however, although, on the other hand', 'It was cold, but we had fun.'], [t('reason', 'årsak'), 'because, since', 'I stayed home because I was ill.'], [t('result', 'resultat'), 'so, therefore', 'I was ill, so I stayed home.'],
            [t('order', 'rekkefølge'), 'first, then, after that, finally', 'First we ate. Finally, we left.'], [t('example', 'eksempel'), 'for example, for instance', 'Some animals, for example cats, sleep a lot.'], [t('concluding', 'avslutte'), 'in conclusion, to sum up', 'In conclusion, school uniforms are a bad idea.']] } },
          { nor: { note: t('"Although" and "but" are never used together in one sentence.', '«Although» og «but» brukes aldri sammen i samme setning.'), bad: 'Although it was cold, but we had fun.', good: 'Although it was cold, we had fun.' } },
          { lvl: 2, blocks: [{ p: t('"Because" starts a subordinate clause. A sentence that only has "Because I was ill." is not complete. Write "I stayed home because I was ill."', '«Because» starter en leddsetning. Setningen «Because I was ill.» alene er ikke ferdig. Skriv «I stayed home because I was ill.»') }] }] },
        { h: t('Argumentative texts', 'Argumenterende tekster'), blocks: [
          { lvl: 3, blocks: [{ p: t('Useful: "On the one hand … on the other hand", "Moreover", "Furthermore", "Nevertheless", "As a result". See the module Argumentative text for a phrase bank.', 'Nyttig: «On the one hand … on the other hand», «Moreover», «Furthermore», «Nevertheless», «As a result». Se modulen Argumentative text for en frasebank.') }] }] }],
      practice: [
        gap('g10-1', [1, 2, 3], 'I stayed at home', 'I was ill.', ['because', 'so', 'but'], 0, t('A reason: because.', 'En årsak: because.')),
        gap('g10-2', [1, 2, 3], 'I was ill,', 'I stayed at home.', ['so', 'because', 'but'], 0, t('A result: so.', 'Et resultat: so.')),
        gap('g10-3', [1, 2, 3], 'It was cold,', 'we had fun.', ['but', 'because', 'so'], 0, t('A contrast: but.', 'En kontrast: but.')),
        gap('g10-4', [1, 2], '', 'we ate dinner. Then we went home.', ['First,', 'Finally,', 'However,'], 0, t('"First" starts a sequence.', '«First» starter en rekkefølge.')),
        mcq('g10-5', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['Although it was cold, we had fun.', 'Although it was cold, but we had fun.', 'Although it was cold, so we had fun.'], 0, t('Use only one linking word.', 'Bruk bare ett bindeord.')),
        mcq('g10-6', [2, 3], t('Which sentence is complete?', 'Hvilken setning er fullstendig?'), ['I stayed home because I was ill.', 'Because I was ill.', 'I stayed home. Because I was ill.'], 0, t('"Because" needs a main clause.', '«Because» trenger en hovedsetning.')),
        mcq('g10-7', [2, 3], t('Which linking word shows the other side?', 'Hvilket bindeord viser den andre siden?'), ['However', 'Moreover', 'Finally'], 0, t('However = contrast.', 'However = kontrast.')),
        order('g10-8', [2, 3], t('Put the sentences in a logical order.', 'Sett setningene i logisk rekkefølge.'), ['First, we packed our bags.', 'Then we took the bus to the airport.', 'After that, we checked in.', 'Finally, we boarded the plane.'], t('first – then – after that – finally.', 'first – then – after that – finally.')),
        mcq('g10-9', [3], t('Which word fits? "Many people like cars. ___, cars cause pollution."', 'Hvilket ord passer? «Many people like cars. ___, cars cause pollution.»'), ['However', 'Furthermore', 'Because'], 0, t('The second sentence shows the other side.', 'Den andre setningen viser den andre siden.'))] },

    /* ---------------------------------------------------------------- 11 */
    { id: 'spelling', icon: 'language', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Spelling and British vs American', 'Staving og britisk vs. amerikansk'),
      blurb: t('Common spelling mistakes, tips, and the main differences between UK and US spelling.', 'Vanlige stavefeil, tips og de viktigste forskjellene mellom britisk og amerikansk staving.'),
      top5: [
        t('Choose ONE variety, British or American, and use it all the way through your text.', 'Velg ÉN variant, britisk eller amerikansk, og bruk den gjennom hele teksten.'),
        t('Check your spelling in a dictionary when you are unsure.', 'Sjekk staving i en ordbok når du er usikker.'),
        t('Do not trust your spell-checker blindly: it will not notice "their" instead of "there".', 'Ikke stol blindt på stavekontrollen: den ser ikke «their» i stedet for «there».'),
        t('Learn the words you misspell often (a list of five is enough).', 'Lær ordene du ofte staver feil (en liste på fem er nok).'),
        t('Remember i before e, except after c: receive, believe.', 'Husk i før e, unntatt etter c: receive, believe.')],
      sections: [
        { h: t('British and American spelling', 'Britisk og amerikansk staving'), blocks: [
          { table: { head: [t('British', 'Britisk'), t('American', 'Amerikansk'), t('Pattern', 'Mønster')], rows: [['colour, favourite', 'color, favorite', '-our / -or'], ['centre, theatre', 'center, theater', '-re / -er'], ['realise, organise', 'realize, organize', '-ise / -ize'], ['travelled, cancelled', 'traveled, canceled', 'll / l'], ['grey', 'gray', ''], ['programme (TV)', 'program', ''], ['defence, licence (noun)', 'defense, license', '-ce / -se']] } },
          { p: t('Use the UK | US switch at the top of the page to see how the examples change.', 'Bruk UK | US-bryteren øverst på siden for å se hvordan eksemplene endrer seg.') }] },
        { h: t('Easy mistakes', 'Lette feil'), blocks: [
          { table: { head: [t('Wrong', 'Feil'), t('Right', 'Riktig'), t('Tip', 'Tips')], rows: [['alot', 'a lot', t('two words', 'to ord')], ['definately', 'definitely', 'finite'], ['recieve', 'receive', t('i before e, except after c', 'i før e, unntatt etter c')], ['untill', 'until', t('one l', 'én l')], ['freind', 'friend', t('the end of "friend" is "end"', 'slutten på «friend» er «end»')], ['to / too / two', 'to = mot; too = også, for mye; two = 2', '']] } },
          { pairs: [{ bad: 'I have alot of homework.', good: 'I have a lot of homework.', note: t('"A lot" is always two words.', '«A lot» er alltid to ord.') }] },
          { nor: { note: t('English does not write words the way they sound. Read a word slowly and check each syllable.', 'Engelsk skrives ikke slik ordene høres ut. Les ordet sakte og sjekk hver stavelse.'), bad: 'wensday, litle', good: 'Wednesday, little' } }] }],
      practice: [
        mcq('g11-1', [1, 2, 3], t('Which spelling is British?', 'Hvilken staving er britisk?'), ['colour', 'color', 'colur'], 0, t('British: -our.', 'Britisk: -our.')),
        mcq('g11-2', [1, 2, 3], t('Which spelling is American?', 'Hvilken staving er amerikansk?'), ['center', 'centre', 'centrr'], 0, t('American: -er.', 'Amerikansk: -er.')),
        mcq('g11-3', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['a lot', 'alot', 'a-lot'], 0, t('Always two words.', 'Alltid to ord.')),
        mcq('g11-4', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['friend', 'freind', 'frend'], 0, t('"Friend" – ends with "end".', '«Friend» – slutter med «end».')),
        mcq('g11-5', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['Wednesday', 'Wensday', 'Wendsday'], 0, t('Wed-nes-day.', 'Wed-nes-day.')),
        mcq('g11-6', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['receive', 'recieve', 'receeve'], 0, t('i before e, except after c.', 'i før e, unntatt etter c.')),
        mcq('g11-7', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['definitely', 'definately', 'definitly'], 0, t('de-fin-ite-ly.', 'de-fin-ite-ly.')),
        gap('g11-8', [2, 3], 'I want to go', '!', ['too', 'to', 'two'], 0, t('"Too" = also.', '«Too» = også.')),
        sort('g11-9', [2, 3], t('British or American spelling?', 'Britisk eller amerikansk staving?'), [t('British', 'Britisk'), t('American', 'Amerikansk')], [['colour', 0], ['color', 1], ['theatre', 0], ['theater', 1], ['organise', 0], ['organize', 1]], t('British: -our, -re, -ise. American: -or, -er, -ize.', 'Britisk: -our, -re, -ise. Amerikansk: -or, -er, -ize.'))] },

    /* ---------------------------------------------------------------- 12 */
    { id: 'traps', icon: 'warn', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Norwegian–English traps', 'Norsk–engelsk-fellene'),
      blurb: t('False friends and typical mistakes that Norwegian speakers make in English.', 'Falske venner og typiske feil som norsktalende gjør på engelsk.'),
      top5: [
        t('A word that looks like a Norwegian word may mean something different: English "gift" is a present, not "married".', 'Et ord som ligner på et norsk ord kan bety noe annet: engelsk «gift» er en gave, ikke «married».'),
        t('Do not translate word for word: use phrases you know are English.', 'Ikke oversett ord for ord: bruk uttrykk du vet er engelske.'),
        t('Ages: "I am 14", not "I have 14 years".', 'Alder: «I am 14», ikke «I have 14 years».'),
        t('English needs a subject: "It is raining", not "Is raining".', 'Engelsk trenger et subjekt: «It is raining», ikke «Is raining».'),
        t('Look up a word in a dictionary before you use a Norwegian-looking word.', 'Slå opp i en ordbok før du bruker et ord som ser norsk ut.')],
      sections: [
        { h: t('False friends', 'Falske venner'), blocks: [
          { table: { head: [t('English word', 'Engelsk ord'), t('Means', 'Betyr'), t('Do not mix with', 'Ikke bland med')], rows: [
            ['gift', t('a present', 'en gave'), t('Norwegian "gift" = married', 'norsk «gift» = married')], ['actual', t('real, true', 'virkelig, faktisk'), t('"aktuell" = current, relevant', 'norsk «aktuell» = current, relevant')], ['eventually', t('in the end', 'til slutt'), t('"eventuelt" = possibly, maybe', 'norsk «eventuelt» = possibly, maybe')],
            ['sensible', t('having good sense', 'fornuftig'), t('"sensibel" = sensitive', 'norsk «sensibel» = sensitive')], ['sympathetic', t('kind and understanding', 'medfølende'), t('"sympatisk" = nice, friendly', 'norsk «sympatisk» = nice, friendly')], ['become', t('to start to be (change)', 'å begynne å bli (endring)'), t('"bekomme" = to get (food)', 'norsk «bekomme» = å få (mat)')]] } },
          { pairs: [{ bad: 'I will become a present for my birthday.', good: 'I will get a present for my birthday.', note: t('"Become" does not mean "få" (get).', '«Become» betyr ikke «få» (get).') }] }] },
        { h: t('Typical mistakes', 'Typiske feil'), blocks: [
          { table: { head: [t('Norwegian way', 'Norsk måte'), t('English way', 'Engelsk måte')], rows: [[t('Jeg har 14 år.', 'Jeg har 14 år.'), 'I am 14 (years old).'], [t('Jeg heter Ingrid.', 'Jeg heter Ingrid.'), 'My name is Ingrid. / I am called Ingrid.'], [t('Det regner.', 'Det regner.'), 'It is raining.'], [t('Jeg liker å lese.', 'Jeg liker å lese.'), 'I like reading. / I like to read.'], [t('Takk for sist.', 'Takk for sist.'), 'Thank you for last time. / It was lovely to see you.'], [t('Jeg ser fram til å se deg.', 'Jeg ser fram til å se deg.'), 'I look forward to seeing you.']] } },
          { nor: { note: t('After "look forward to" use the -ing form, not the base form.', 'Etter «look forward to» bruker du -ing-formen, ikke grunnformen.'), bad: 'I look forward to see you.', good: 'I look forward to seeing you.' } },
          { lvl: 2, blocks: [{ nor: { note: t('"Make" is used for things you create, "do" for activities: make a cake, do your homework.', '«Make» brukes om ting du lager, «do» om aktiviteter: make a cake, do your homework.'), bad: 'I make my homework.', good: 'I do my homework.' } }] }] }],
      practice: [
        mcq('g12-1', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['I am 14 years old.', 'I have 14 years.', 'I have 14 years old.'], 0, t('English uses "be" for age.', 'Engelsk bruker «be» om alder.')),
        mcq('g12-2', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['It is raining.', 'Is raining.', 'Rain.'], 0, t('English needs a subject.', 'Engelsk trenger et subjekt.')),
        mcq('g12-3', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['My name is Ingrid.', 'I am called Ingrid name.', 'I name Ingrid.'], 0, t('"My name is …".', '«My name is …».')),
        mcq('g12-4', [2, 3], t('What does "eventually" mean?', 'Hva betyr «eventually»?'), ['in the end', 'maybe', 'always'], 0, t('Norwegian "eventuelt" = possibly.', 'Norsk «eventuelt» = possibly.')),
        mcq('g12-5', [2, 3], t('What does "actual" mean?', 'Hva betyr «actual»?'), ['real', 'current', 'important'], 0, t('Norwegian "aktuell" = current.', 'Norsk «aktuell» = current.')),
        mcq('g12-6', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['I look forward to seeing you.', 'I look forward to see you.', 'I look forward see you.'], 0, t('After "to" here: -ing.', 'Etter «to» her: -ing.')),
        mcq('g12-7', [2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['I do my homework.', 'I make my homework.', 'I take my homework.'], 0, t('Do your homework.', 'Do your homework.')),
        mcq('g12-8', [2, 3], t('What does "sensible" mean?', 'Hva betyr «sensible»?'), ['having good sense', 'sensitive', 'strong'], 0, t('Norwegian "sensibel" = sensitive.', 'Norsk «sensibel» = sensitive.')),
        sort('g12-9', [3], t('Which are false friends? Sort them.', 'Hvilke er falske venner? Sorter dem.'), [t('Different meaning', 'Ulik betydning'), t('Similar meaning', 'Lik betydning')], [['gift', 0], ['actual', 0], ['eventually', 0], ['music', 1], ['hotel', 1], ['sympathetic', 0]], t('gift, actual, eventually and sympathetic are false friends.', 'gift, actual, eventually og sympathetic er falske venner.'))] },

    /* ---------------------------------------------------------------- verbs */
    { id: 'verbs', icon: 'book', reviewed: false, curriculum: ['K4', 'K5'], widget: 'verbs',
      title: t('Irregular verbs', 'Uregelmessige verb'),
      blurb: t('A searchable list of irregular verbs with Norwegian meaning, and a drill mode.', 'En søkbar liste over uregelmessige verb med norsk betydning, og en øvingsmodus.'),
      top5: [
        t('Irregular verbs do not add -ed in the past. You have to learn them.', 'Uregelmessige verb får ikke -ed i fortid. Du må lære dem.'),
        t('Use the "Only the most common verbs" switch to start with about fifty.', 'Bruk bryteren «Bare de vanligste verbene» for å starte med omtrent femti.'),
        t('Use the pattern buttons: verbs in the same pattern are easier to learn together.', 'Bruk mønsterknappene: verb med samme mønster er lettere å lære sammen.'),
        t('Use Drill mode: cover the forms and try to say them before you click "Show".', 'Bruk øvingsmodus: skjul formene og prøv å si dem før du klikker «Vis».'),
        t('Some verbs have a British and an American form (learnt / learned): use the UK | US switch.', 'Noen verb har en britisk og en amerikansk form (learnt / learned): bruk UK | US-bryteren.')] },

    /* ---------------------------------------------------------------- glossary */
    { id: 'glossary', icon: 'info', reviewed: false, curriculum: ['K4', 'K5'], widget: 'glossary',
      title: t('Grammar words', 'Grammatikkord'),
      blurb: t('English grammar words with Norwegian translations, short meanings and examples.', 'Engelske grammatikkord med norske oversettelser, korte forklaringer og eksempler.'),
      top5: [
        t('Search in English or Norwegian: the list finds both.', 'Søk på engelsk eller norsk: listen finner begge deler.'),
        t('Use this list when a teacher or a dictionary uses a grammar word you do not know.', 'Bruk listen når en lærer eller en ordbok bruker et grammatikkord du ikke kjenner.')] }
  );
})();
