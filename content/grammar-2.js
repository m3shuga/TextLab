/* ==========================================================================
   MODULE: Grammar (part 2 of 3: topics 5-8)  Adds topics to the module created in grammar.js.
   ALL text is marked reviewed:false until the teacher approves it.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var mcq = function (id, lv, q, opts, ans, why, ctx) { return { id: id, type: 'mcq', level: lv, q: q, options: opts, answer: ans, why: why, ctx: ctx }; };
  var gap = function (id, lv, before, after, opts, ans, why) { return { id: id, type: 'gap', level: lv, q: t('Choose the correct word.', 'Velg riktig ord.'), before: before, after: after, options: opts, answer: ans, why: why }; };
  var sort = function (id, lv, q, buckets, items, why) { return { id: id, type: 'sort', level: lv, q: q, buckets: buckets, items: items.map(function (x) { return { text: x[0], b: x[1] }; }), why: why }; };
  var ex = function (en, nb) { return { en: en, nb: nb }; };

  APP.module('grammar').topics.push(
    /* ---------------------------------------------------------------- 5 */
    { id: 'prepositions', icon: 'arrow-right', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Prepositions', 'Preposisjoner'),
      blurb: t('in, on, at, to, for … and the fixed expressions that go with some words.', 'in, on, at, to, for … og de faste uttrykkene som hører til noen ord.'),
      top5: [
        t('Time: in (months, years, parts of the day), on (days, dates), at (clock times).', 'Tid: in (måneder, år, deler av dagen), on (dager, datoer), at (klokkeslett).'),
        t('Place: in (inside), on (on a surface), at (a point or an event).', 'Sted: in (inni), on (på en flate), at (et punkt eller en begivenhet).'),
        t('Many words need a fixed preposition: good AT, interested IN, afraid OF.', 'Mange ord trenger en fast preposisjon: good AT, interested IN, afraid OF.'),
        t('Do not translate prepositions word for word from Norwegian.', 'Ikke oversett preposisjoner ord for ord fra norsk.'),
        t('After a preposition a verb gets -ing: "I am good at swimming."', 'Etter en preposisjon får et verb -ing: «I am good at swimming.»')],
      sections: [
        { h: t('Time: in, on, at', 'Tid: in, on, at'), blocks: [
          { table: { head: [t('Preposition', 'Preposisjon'), t('Use with', 'Brukes med'), t('Examples', 'Eksempler')], rows: [
            ['in', t('months, years, seasons, parts of the day', 'måneder, år, årstider, deler av dagen'), 'in May, in 2026, in winter, in the morning'], ['on', t('days and dates', 'dager og datoer'), 'on Monday, on 16 November, on my birthday'], ['at', t('clock times and some fixed expressions', 'klokkeslett og noen faste uttrykk'), 'at 8 o\'clock, at night, {at|on} the weekend']] } },
          { p: t('British English says "at the weekend", American English says "on the weekend".', 'Britisk engelsk sier «at the weekend», amerikansk engelsk sier «on the weekend».') }] },
        { h: t('Place: in, on, at', 'Sted: in, on, at'), blocks: [
          { ex: [ex('The book is in the bag.', 'Boka er i sekken.'), ex('The book is on the table.', 'Boka ligger på bordet.'), ex('I am at school. We met at the party.', 'Jeg er på skolen. Vi møttes på festen.')] },
          { nor: { note: t('Norwegian "på" can be on, at or in in English. Learn the expression, not the single word.', 'Norsk «på» kan være on, at eller in på engelsk. Lær uttrykket, ikke bare ordet.'), bad: 'I am on school.', good: 'I am at school.' } },
          { lvl: 2, blocks: [{ p: t('Movement: to (towards), into (from outside to inside), out of, through, across. "I went to Oslo." "She walked into the room."', 'Bevegelse: to (mot), into (utenfra og inn), out of, through, across. «I went to Oslo.» «She walked into the room.»') }] }] },
        { h: t('Words with a fixed preposition', 'Ord med fast preposisjon'), blocks: [
          { table: { head: [t('Word + preposition', 'Ord + preposisjon'), t('Example', 'Eksempel'), t('Not', 'Ikke')], rows: [
            ['good at', 'She is good at maths.', 'good in'], ['interested in', 'I am interested in music.', 'interested of'], ['afraid of', 'He is afraid of dogs.', 'afraid for'], ['wait for', 'We wait for the bus.', 'wait on'], ['listen to', 'Listen to me!', 'listen at'], ['look at / look for', 'Look at this! I am looking for my keys.', '']] } },
          { lvl: 2, blocks: [{ p: t('Also: depend on, different from, arrive at (a place) / arrive in (a city), married to, proud of, worried about.', 'Også: depend on, different from, arrive at (et sted) / arrive in (en by), married to, proud of, worried about.') }] },
          { nor: { note: t('After a preposition a verb gets -ing, never "to": "I am good at swimming."', 'Etter en preposisjon får et verb -ing, aldri «to»: «I am good at swimming.»'), bad: 'I am good at to swim.', good: 'I am good at swimming.' } }] }],
      practice: [
        gap('g5-1', [1, 2, 3], 'My birthday is', 'May.', ['in', 'on', 'at'], 0, t('Months take "in".', 'Måneder tar «in».')),
        gap('g5-2', [1, 2, 3], 'The lesson starts', '8 o\'clock.', ['at', 'in', 'on'], 0, t('Clock times take "at".', 'Klokkeslett tar «at».')),
        gap('g5-3', [1, 2, 3], 'We have a test', 'Monday.', ['on', 'in', 'at'], 0, t('Days take "on".', 'Dager tar «on».')),
        gap('g5-4', [1, 2], 'The keys are', 'the table.', ['on', 'in', 'at'], 0, t('On a surface: "on".', 'På en flate: «on».')),
        mcq('g5-5', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['She is good at maths.', 'She is good in maths.', 'She is good on maths.'], 0, t('The fixed expression is "good at".', 'Det faste uttrykket er «good at».')),
        mcq('g5-6', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I am interested in music.', 'I am interested of music.', 'I am interested at music.'], 0, t('The fixed expression is "interested in".', 'Det faste uttrykket er «interested in».')),
        mcq('g5-7', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['He is afraid of dogs.', 'He is afraid for dogs.', 'He is afraid from dogs.'], 0, t('The fixed expression is "afraid of".', 'Det faste uttrykket er «afraid of».')),
        mcq('g5-8', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I am good at swimming.', 'I am good at to swim.', 'I am good at swim.'], 0, t('After a preposition the verb gets -ing.', 'Etter en preposisjon får verbet -ing.')),
        sort('g5-9', [2, 3], t('in, on or at? Sort the expressions.', 'in, on eller at? Sorter uttrykkene.'), ['in', 'on', 'at'], [['___ 2026', 0], ['___ Friday', 1], ['___ 7.30', 2], ['___ the morning', 0], ['___ 3 May', 1], ['___ night', 2]], t('in = years/parts of the day, on = days/dates, at = clock times and "night".', 'in = år/deler av dagen, on = dager/datoer, at = klokkeslett og «night».'))] },

    /* ---------------------------------------------------------------- 6 */
    { id: 'punctuation', icon: 'language', reviewed: false, curriculum: ['K5'],
      title: t('Commas and punctuation', 'Komma og tegnsetting'),
      blurb: t('Comma rules, apostrophes, capital letters and the English rules that are different from Norwegian.', 'Kommaregler, apostrof, store bokstaver og de engelske reglene som er annerledes enn på norsk.'),
      top5: [
        t('Use a comma in a list, but not before the last "and" in British English (the "Oxford comma" is optional).', 'Bruk komma i en liste, men ikke foran det siste «and» i britisk engelsk («Oxford comma» er valgfritt).'),
        t('Put a comma after an introduction: "However, …", "In the morning, …".', 'Sett komma etter en innledning: «However, …», «In the morning, …».'),
        t('Put a comma before and / but / so when it joins two full sentences.', 'Sett komma foran and / but / so når ordet binder sammen to hele setninger.'),
        t('Do NOT put a comma before "that": "I think that he is right."', 'IKKE sett komma foran «that»: «I think that he is right.»'),
        t('Capital letters: I, names, days, months, languages and nationalities.', 'Store bokstaver: I, navn, ukedager, måneder, språk og nasjonaliteter.')],
      sections: [
        { h: t('The comma', 'Kommaet'), blocks: [
          { table: { head: [t('Rule', 'Regel'), t('Example', 'Eksempel')], rows: [
            [t('Lists', 'Lister'), 'I bought apples, bananas and oranges.'], [t('After an introduction', 'Etter en innledning'), 'However, I did not like it. In the morning, we left.'], [t('Two full sentences joined by and / but / so', 'To hele setninger bundet sammen med and / but / so'), 'I was tired, but I kept walking.'],
            [t('A subordinate clause first', 'Leddsetning først'), 'Because it was raining, we stayed at home.'], [t('Extra information', 'Ekstra informasjon'), 'My sister, who lives in Bergen, is a nurse.']] } },
          { rule: [t('Subordinate clause at the END: no comma. "We stayed at home because it was raining."', 'Leddsetning til SLUTT: ikke komma. «We stayed at home because it was raining.»'), t('No comma before "that". "I think that he is right."', 'Ikke komma foran «that». «I think that he is right.»')] },
          { nor: { note: t('English comma rules are different from Norwegian ones. Do not copy the Norwegian commas into English.', 'Engelske kommaregler er annerledes enn norske. Ikke kopier de norske kommaene inn i engelsk.'), bad: 'I think, that he is right.', good: 'I think that he is right.' } },
          { pairs: [{ bad: 'I was tired but, I kept walking.', good: 'I was tired, but I kept walking.', note: t('The comma goes BEFORE "but".', 'Kommaet står FØR «but».') }, { bad: 'However I did not like it.', good: 'However, I did not like it.', note: t('Comma after an introduction.', 'Komma etter en innledning.') }] },
          { lvl: 3, blocks: [{ p: t('A semicolon (;) joins two closely related sentences: "I like tea; my brother likes coffee." A colon (:) introduces a list or an explanation: "I need three things: time, money and patience."', 'Et semikolon (;) binder sammen to nært beslektede setninger: «I like tea; my brother likes coffee.» Et kolon (:) innleder en liste eller en forklaring: «I need three things: time, money and patience.»') }] }] },
        { h: t('Apostrophes', 'Apostrof'), blocks: [
          { table: { head: [t('Use', 'Bruk'), t('Example', 'Eksempel')], rows: [[t('Contractions (short forms)', 'Sammentrekninger'), 'I\'m, don\'t, it\'s (= it is)'], [t('Possession (eiendom)', 'Eiendom'), 'Tom\'s book, the girls\' room'], [t('NOT for plurals', 'IKKE for flertall'), 'two dogs (not two dog\'s)'], [t('its = belonging to it', 'its = som tilhører den'), 'The dog wagged its tail.']] } },
          { pairs: [{ bad: 'The dog wagged it\'s tail.', good: 'The dog wagged its tail.', note: t('it\'s always means "it is" or "it has".', 'it\'s betyr alltid «it is» eller «it has».') }] }] },
        { h: t('Capital letters and end marks', 'Store bokstaver og skilletegn'), blocks: [
          { ul: [t('Always a capital letter for I, names, days (Monday), months (November), languages and nationalities (Norwegian, English).', 'Alltid stor bokstav for I, navn, ukedager (Monday), måneder (November), språk og nasjonaliteter (Norwegian, English).'), t('NOT for seasons: spring, summer, autumn, winter.', 'IKKE for årstider: spring, summer, autumn, winter.'), t('One space after a full stop, a question mark or an exclamation mark.', 'Ett mellomrom etter punktum, spørsmålstegn eller utropstegn.'), t('Quotation marks and dialogue: see the module Short story.', 'Anførselstegn og dialog: se modulen Short story.')] }] }],
      practice: [
        mcq('g6-1', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I think that he is right.', 'I think, that he is right.', 'I think that, he is right.'], 0, t('English does not use a comma before "that".', 'Engelsk bruker ikke komma foran «that».')),
        mcq('g6-2', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I was tired, but I kept walking.', 'I was tired but, I kept walking.', 'I was tired but I, kept walking.'], 0, t('The comma goes before "but".', 'Kommaet står foran «but».')),
        mcq('g6-3', [1, 2], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['However, I did not like it.', 'However I did not like it.', 'However; I did not like it.'], 0, t('A comma after "However".', 'Komma etter «However».')),
        gap('g6-4', [1, 2, 3], 'The dog wagged', 'tail.', ['its', 'it\'s', 'its\''], 0, t('"Its" = belonging to it. "It\'s" = it is.', '«Its» = tilhører den. «It\'s» = it is.')),
        mcq('g6-5', [1, 2, 3], t('Which sentence has the correct capital letters?', 'Hvilken setning har riktige store bokstaver?'), ['On Monday I speak Norwegian with my friend.', 'on monday i speak norwegian with my friend.', 'On monday I speak norwegian with my Friend.'], 0, t('Days, languages and "I" have capital letters.', 'Ukedager, språk og «I» har stor bokstav.')),
        mcq('g6-6', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['We stayed at home because it was raining.', 'We stayed at home, because it was raining.', 'We stayed, at home because it was raining.'], 0, t('A subordinate clause at the end needs no comma.', 'En leddsetning til slutt trenger ikke komma.')),
        mcq('g6-7', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['Because it was raining, we stayed at home.', 'Because it was raining we stayed at home.', 'Because, it was raining we stayed at home.'], 0, t('A subordinate clause first: comma after it.', 'Leddsetning først: komma etter den.')),
        mcq('g6-8', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['two dogs', 'two dog\'s', 'two dogs\''], 0, t('Plurals never have an apostrophe.', 'Flertall har aldri apostrof.')),
        mcq('g6-9', [3], t('Which sentence uses the semicolon correctly?', 'Hvilken setning bruker semikolon riktig?'), ['I like tea; my brother likes coffee.', 'I like; tea my brother likes coffee.', 'I like tea; and my brother likes coffee.'], 0, t('A semicolon joins two related full sentences, without "and".', 'Et semikolon binder sammen to beslektede hele setninger, uten «and».'))] },

    /* ---------------------------------------------------------------- 7 */
    { id: 'articles', icon: 'book', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Articles and nouns', 'Artikler og substantiv'),
      blurb: t('a, an, the, no article, countable and uncountable nouns, and plurals.', 'a, an, the, ingen artikkel, tellelige og utellelige substantiv og flertall.'),
      top5: [
        t('Use a / an for one thing in general: "a dog", "an apple" (a vowel sound).', 'Bruk a / an om én ting generelt: «a dog», «an apple» (vokallyd).'),
        t('Use the when both people know which one: "the dog next door".', 'Bruk the når begge vet hvilken: «the dog next door».'),
        t('Use NO article for things in general: "I like music." "Dogs are loyal."', 'Bruk INGEN artikkel om ting generelt: «I like music.» «Dogs are loyal.»'),
        t('Jobs need a / an: "She is a teacher."', 'Yrker trenger a / an: «She is a teacher.»'),
        t('Uncountable nouns have no plural and no a / an: information, advice, homework, news.', 'Utellelige substantiv har ikke flertall og ikke a / an: information, advice, homework, news.')],
      sections: [
        { h: t('a, an, the or nothing', 'a, an, the eller ingenting'), blocks: [
          { table: { head: [t('Article', 'Artikkel'), t('When', 'Når'), t('Example', 'Eksempel')], rows: [
            ['a / an', t('one, not special', 'én, ikke spesiell'), 'I saw a dog. It was an old dog.'], ['the', t('known or one of a kind', 'kjent eller den eneste'), 'The dog was friendly. The sun is hot.'], [t('no article', 'ingen artikkel'), t('plural or uncountable, in general', 'flertall eller utellelig, generelt'), 'Dogs are friendly. I like music.']] } },
          { nor: { note: t('In Norwegian we say "Hun er lærer" without an article. English needs "a" before a job: "She is a teacher."', 'På norsk sier vi «Hun er lærer» uten artikkel. Engelsk trenger «a» foran et yrke: «She is a teacher.»'), bad: 'She is teacher.', good: 'She is a teacher.' } },
          { lvl: 2, blocks: [{ p: t('No article with most names and places: "Norway", "Oslo", "at school", "in hospital" (UK), but "the United Kingdom", "the Alps", "the Atlantic".', 'Ingen artikkel med de fleste navn og steder: «Norway», «Oslo», «at school», «in hospital» (UK), men «the United Kingdom», «the Alps», «the Atlantic».') }] }] },
        { h: t('Countable and uncountable', 'Tellelige og utellelige'), blocks: [
          { table: { head: [t('Countable (tellelig)', 'Tellelig'), t('Uncountable (utellelig)', 'Utellelig')], rows: [['a book, two books', 'information, advice, news'], ['many friends', 'much money, much time'], ['a few apples', 'a little water']] } },
          { pairs: [{ bad: 'an information', good: 'a piece of information', note: t('Information is uncountable.', 'Information er utellelig.') }, { bad: 'I have many homeworks.', good: 'I have a lot of homework.', note: t('Homework has no plural.', 'Homework har ikke flertall.') }] }] },
        { h: t('Plurals', 'Flertall'), blocks: [
          { table: { head: [t('Rule', 'Regel'), t('Example', 'Eksempel')], rows: [[t('most nouns: + s', 'de fleste: + s'), 'dog – dogs'], [t('ends in s, sh, ch, x: + es', 'ender på s, sh, ch, x: + es'), 'box – boxes'], [t('consonant + y: ies', 'konsonant + y: ies'), 'city – cities'], [t('irregular (uregelmessig)', 'uregelmessig'), 'man – men, child – children, tooth – teeth, mouse – mice']] } }] }],
      practice: [
        gap('g7-1', [1, 2, 3], 'She is', 'teacher.', ['a', 'the', '(nothing)'], 0, t('Jobs need "a / an".', 'Yrker trenger «a / an».')),
        gap('g7-2', [1, 2, 3], 'I like', 'music.', ['(nothing)', 'the', 'a'], 0, t('In general: no article.', 'Generelt: ingen artikkel.')),
        mcq('g7-3', [1, 2, 3], t('Which is correct?', 'Hvilket er riktig?'), ['an apple', 'a apple', 'the apple (for any apple)'], 0, t('"An" before a vowel sound.', '«An» foran en vokallyd.')),
        mcq('g7-4', [1, 2, 3], t('Which is the plural of "child"?', 'Hvilket er flertall av «child»?'), ['children', 'childs', 'childrens'], 0, t('Irregular plural.', 'Uregelmessig flertall.')),
        mcq('g7-5', [1, 2, 3], t('Which is the plural of "city"?', 'Hvilket er flertall av «city»?'), ['cities', 'citys', 'cityes'], 0, t('Consonant + y becomes -ies.', 'Konsonant + y blir -ies.')),
        mcq('g7-6', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I need some advice.', 'I need an advice.', 'I need some advices.'], 0, t('"Advice" is uncountable.', '«Advice» er utellelig.')),
        mcq('g7-7', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I have a lot of homework.', 'I have many homeworks.', 'I have a homeworks.'], 0, t('"Homework" is uncountable.', '«Homework» er utellelig.')),
        sort('g7-8', [2, 3], t('Countable or uncountable?', 'Tellelig eller utellelig?'), [t('Countable', 'Tellelig'), t('Uncountable', 'Utellelig')], [['book', 0], ['information', 1], ['friend', 0], ['news', 1], ['apple', 0], ['money', 1]], t('You can count books, friends and apples, but not information, news or money.', 'Du kan telle bøker, venner og epler, men ikke informasjon, nyheter eller penger.')),
        mcq('g7-9', [3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['We visited the United Kingdom.', 'We visited United Kingdom.', 'We visited a United Kingdom.'], 0, t('Some country names take "the".', 'Noen landnavn tar «the».'))] },

    /* ---------------------------------------------------------------- 8 */
    { id: 'pronouns', icon: 'info', reviewed: false, curriculum: ['K4', 'K5'],
      title: t('Pronouns and possessives', 'Pronomen og eiendomsord'),
      blurb: t('I / me / my / mine, his / her, its / it\'s, their / there / they\'re and myself.', 'I / me / my / mine, his / her, its / it\'s, their / there / they\'re og myself.'),
      top5: [
        t('Subject pronouns come before the verb: I, you, he, she, it, we, they.', 'Subjektspronomen står foran verbet: I, you, he, she, it, we, they.'),
        t('Object pronouns come after the verb or a preposition: me, you, him, her, it, us, them.', 'Objektspronomen står etter verbet eller en preposisjon: me, you, him, her, it, us, them.'),
        t('Possessive words show who owns something: my, your, his, her, its, our, their.', 'Eiendomsord viser hvem som eier noe: my, your, his, her, its, our, their.'),
        t('Say "My friend and I", not "Me and my friend", when you are the subject.', 'Si «My friend and I», ikke «Me and my friend», når du er subjekt.'),
        t('their = belonging to them, there = a place, they\'re = they are.', 'their = tilhører dem, there = et sted, they\'re = they are.')],
      sections: [
        { h: t('The pronoun table', 'Pronomentabellen'), blocks: [
          { table: { head: [t('Subject', 'Subjekt'), t('Object', 'Objekt'), t('Possessive word', 'Eiendomsord'), t('Possessive pronoun', 'Eiendomspronomen'), t('Reflexive', 'Refleksiv')], rows: [
            ['I', 'me', 'my', 'mine', 'myself'], ['you', 'you', 'your', 'yours', 'yourself'], ['he', 'him', 'his', 'his', 'himself'], ['she', 'her', 'her', 'hers', 'herself'], ['it', 'it', 'its', '–', 'itself'], ['we', 'us', 'our', 'ours', 'ourselves'], ['they', 'them', 'their', 'theirs', 'themselves']] } },
          { nor: { note: t('Norwegian has "sin / si / sitt". English uses his / her / their: "Tom saw his dog" (it can mean Tom\'s own dog or another man\'s dog).', 'Norsk har «sin / si / sitt». Engelsk bruker his / her / their: «Tom saw his dog» (det kan bety Toms egen hund eller en annen manns hund).'), bad: 'Me and my friend went home.', good: 'My friend and I went home.' } }] },
        { h: t('Sound-alike words', 'Ord som høres like ut'), blocks: [
          { table: { head: [t('Word', 'Ord'), t('Meaning', 'Betydning'), t('Example', 'Eksempel')], rows: [['their', t('belonging to them', 'tilhører dem'), 'Their house is big.'], ['there', t('a place; there is / are', 'et sted; there is / are'), 'Put it over there.'], ['they\'re', 'they are', 'They\'re my friends.'], ['your / you\'re', t('belonging to you / you are', 'tilhører deg / you are'), 'Your book. You\'re right.'], ['its / it\'s', t('belonging to it / it is', 'tilhører den / it is'), 'Its tail. It\'s late.']] } }] },
        { h: t('Reflexive pronouns', 'Refleksive pronomen'), blocks: [
          { lvl: 2, blocks: [{ p: t('Use myself, yourself … when the subject and the object are the same person: "I hurt myself." "She taught herself to play the guitar."', 'Bruk myself, yourself … når subjekt og objekt er samme person: «I hurt myself.» «She taught herself to play the guitar.»') }, { p: t('Many verbs that are reflexive in Norwegian are NOT reflexive in English: "I feel well", "He washed" (not "washed himself" in most cases).', 'Mange verb som er refleksive på norsk er IKKE refleksive på engelsk: «I feel well», «He washed» (ofte ikke «washed himself»).') }] }] }],
      practice: [
        mcq('g8-1', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['My friend and I went home.', 'Me and my friend went home.', 'Me and I friend went home.'], 0, t('When you are the subject, use "I".', 'Når du er subjekt, bruk «I».')),
        gap('g8-2', [1, 2, 3], 'Tom gave the book to', '.', ['me', 'I', 'my'], 0, t('After "to": object pronoun.', 'Etter «to»: objektspronomen.')),
        gap('g8-3', [1, 2, 3], 'The students are doing', 'homework.', ['their', 'there', 'they\'re'], 0, t('"Their" = belonging to them.', '«Their» = tilhører dem.')),
        gap('g8-4', [1, 2, 3], 'Look at the dog. It is wagging', 'tail.', ['its', 'it\'s', 'it'], 0, t('"Its" = belonging to it.', '«Its» = tilhører den.')),
        gap('g8-5', [1, 2], 'I like her. I often talk to', '.', ['her', 'she', 'hers'], 0, t('After "to": object pronoun.', 'Etter «to»: objektspronomen.')),
        mcq('g8-6', [2, 3], t('"___ going to be late." Choose the correct one.', '«___ going to be late.» Velg riktig ord.'), ['They\'re', 'Their', 'There'], 0, t('"They are going to be late."', '«They are going to be late.»')),
        mcq('g8-7', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['She taught herself to play the guitar.', 'She taught her to play the guitar.', 'She taught hisself to play the guitar.'], 0, t('The subject and the object are the same person, so we need "herself". ("taught her" would mean another woman.)', 'Subjekt og objekt er samme person, så vi trenger «herself». («taught her» ville betydd en annen kvinne.)')),
        gap('g8-8', [2, 3], 'Is this pen', '? No, it is hers.', ['yours', 'your', 'you'], 0, t('"Yours" stands alone, without a noun.', '«Yours» står alene, uten substantiv.')),
        mcq('g8-9', [3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I feel well.', 'I feel me well.', 'I feel myself well.'], 0, t('English does not use a reflexive pronoun with "feel" here.', 'Engelsk bruker ikke refleksivt pronomen med «feel» her.'))] }
  );
})();
