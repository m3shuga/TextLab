/* ==========================================================================
   MODULE: Grammar  (part 1 of 3: module setup + topics 1-4)
   Topics 5-8 are in grammar-2.js, topics 9-12, the verb table and the glossary in grammar-3.js.
   Written for this site (not copied). Plain English with Norwegian glosses.
   Variant markup {colour|color} = UK|US. ALL text is marked reviewed:false until the teacher approves it.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var mcq = function (id, lv, q, opts, ans, why, ctx) { return { id: id, type: 'mcq', level: lv, q: q, options: opts, answer: ans, why: why, ctx: ctx }; };
  var gap = function (id, lv, before, after, opts, ans, why) { return { id: id, type: 'gap', level: lv, q: t('Choose the correct word.', 'Velg riktig ord.'), before: before, after: after, options: opts, answer: ans, why: why }; };
  var sort = function (id, lv, q, buckets, items, why) { return { id: id, type: 'sort', level: lv, q: q, buckets: buckets, items: items.map(function (x) { return { text: x[0], b: x[1] }; }), why: why }; };
  var order = function (id, lv, q, items, why) { return { id: id, type: 'order', level: lv, q: q, items: items, why: why }; };
  var ex = function (en, nb) { return { en: en, nb: nb }; };

  var topics = [
    /* ---------------------------------------------------------------- 1 */
    { id: 'sentences', icon: 'structure', reviewed: false, curriculum: ['K4', 'K5'],
      title: t('Sentence building', 'Setningsbygging'),
      blurb: t('Word order, questions, negatives, adverbs and joining sentences.', 'Ordstilling, spørsmål, nektelser, adverb og å binde sammen setninger.'),
      top5: [
        t('A sentence needs a subject (subjekt) and a verb (verb): "Ingrid writes."', 'En setning trenger et subjekt og et verb: «Ingrid writes.»'),
        t('Normal word order is Subject – Verb – Object: "I like pizza."', 'Vanlig ordstilling er subjekt – verb – objekt: «I like pizza.»'),
        t('The subject stays before the verb, even after words like "today" or "yesterday".', 'Subjektet står foran verbet, også etter ord som «today» og «yesterday».'),
        t('Most questions and negatives need do / does / did: "Do you like pizza?"', 'De fleste spørsmål og nektelser trenger do / does / did: «Do you like pizza?»'),
        t('Join sentences with and, but, so and because.', 'Bind sammen setninger med and, but, so og because.')],
      sections: [
        { h: t('The building blocks', 'Byggeklossene'), blocks: [
          { p: t('The subject (subjekt) is who or what does something. The verb (verb) tells what happens. The object (objekt) is what the action is done to.', 'Subjektet er hvem eller hva som gjør noe. Verbet forteller hva som skjer. Objektet er det handlingen går ut over.') },
          { table: { head: [t('Subject', 'Subjekt'), t('Verb', 'Verb'), t('Object', 'Objekt'), t('Extra information', 'Tilleggsinformasjon')], rows: [
            ['Ingrid', 'wrote', 'an email', 'yesterday.'], ['My friends', 'play', 'football', 'after school.'], ['I', 'love', 'music', '.']] } },
          { rule: t('English word order is fixed: Subject – Verb – Object. Time words usually go at the start or at the end.', 'Ordstillingen i engelsk er fast: subjekt – verb – objekt. Tidsord står vanligvis først eller sist.') },
          { nor: { note: t('In Norwegian the verb comes second, even after another word ("I dag spiser jeg pizza"). In English the subject stays before the verb.', 'På norsk kommer verbet på andreplass, også etter et annet ord («I dag spiser jeg pizza»). På engelsk blir subjektet stående foran verbet.'), bad: 'Yesterday went I to school.', good: 'Yesterday I went to school.' } }] },
        { h: t('Statements, questions and negatives', 'Påstander, spørsmål og nektelser'), blocks: [
          { table: { head: [t('Type', 'Type'), t('Pattern', 'Mønster'), t('Example', 'Eksempel')], rows: [
            [t('Statement', 'Påstand'), 'Subject + verb', 'You play football.'], [t('Question', 'Spørsmål'), 'Do/Does/Did + subject + verb', 'Do you play football?'], [t('Negative', 'Nektelse'), 'Subject + do/does/did + not + verb', 'You do not play football.']] } },
          { p: t('With the verb be and with modal verbs (can, must, will …) we do not use do. We move the verb in front of the subject: "Are you tired?", "Can you swim?".', 'Med verbet be og med modale hjelpeverb (can, must, will …) bruker vi ikke do. Vi flytter verbet foran subjektet: «Are you tired?», «Can you swim?».') },
          { pairs: [{ bad: 'Like you pizza?', good: 'Do you like pizza?', note: t('Most verbs need "do" in questions.', 'De fleste verb trenger «do» i spørsmål.') }, { bad: 'She not likes pizza.', good: 'She does not like pizza.', note: t('After does/did the verb has no -s or -ed.', 'Etter does/did har verbet verken -s eller -ed.') }] }] },
        { h: t('Adverbs of frequency and other small words', 'Frekvensadverb og andre småord'), blocks: [
          { p: t('Words like always, never, often and sometimes go BEFORE the main verb, but AFTER the verb be.', 'Ord som always, never, often og sometimes står FØR hovedverbet, men ETTER verbet be.') },
          { ex: [ex('She always arrives late.', 'Hun kommer alltid for sent.'), ex('She is always late.', 'Hun er alltid forsinket.'), ex('We never eat fish on Monday.', 'Vi spiser aldri fisk på mandager.')] },
          { lvl: 2, blocks: [{ p: t('Place comes before time when both are in the end position: "I went to the cinema on Friday."', 'Sted kommer før tid når begge står til slutt: «I went to the cinema on Friday.»') }] }] },
        { h: t('Joining sentences', 'Å binde sammen setninger'), blocks: [
          { table: { head: [t('Word', 'Ord'), t('Use', 'Bruk'), t('Example', 'Eksempel')], rows: [
            ['and', t('adds an idea', 'legger til en idé'), 'I like football, and I like tennis.'], ['but', t('shows a contrast', 'viser en motsetning'), 'I like football, but I do not like tennis.'], ['so', t('shows a result', 'viser et resultat'), 'It was raining, so we stayed at home.'], ['because', t('gives a reason', 'gir en grunn'), 'We stayed at home because it was raining.']] } },
          { lvl: 2, blocks: [{ p: t('A main clause (hovedsetning) can stand alone. A subordinate clause (leddsetning) cannot: "although it was cold", "when I arrived", "if you want".', 'En hovedsetning kan stå alene. En leddsetning kan ikke: «although it was cold», «when I arrived», «if you want».') }, { ex: [ex('Although it was cold, we went swimming.', 'Selv om det var kaldt, svømte vi.')] }] },
          { lvl: 3, blocks: [{ p: t('Relative clauses use who (people), which (things) or that: "The boy who sat alone was new." In indirect questions the word order is normal: "I wonder where she is." (not "where is she").', 'Relativsetninger bruker who (personer), which (ting) eller that: «The boy who sat alone was new.» I indirekte spørsmål er ordstillingen vanlig: «I wonder where she is.» (ikke «where is she»).') }] }] }],
      practice: [
        mcq('g1-1', [1, 2, 3], t('Which sentence has the correct word order?', 'Hvilken setning har riktig ordstilling?'), ['Yesterday I went to school.', 'Yesterday went I to school.', 'Went I yesterday to school.'], 0, t('The subject stays before the verb in English.', 'Subjektet står foran verbet på engelsk.')),
        mcq('g1-2', [1, 2], t('Which is a correct question?', 'Hvilket er et riktig spørsmål?'), ['Do you like music?', 'Like you music?', 'Do you likes music?'], 0, t('Use "do" + subject + the base form of the verb.', 'Bruk «do» + subjekt + grunnformen av verbet.')),
        gap('g1-3', [1, 2], 'She', 'plays football.', ['always', 'plays', 'not'], 0, t('"Always" goes before the main verb.', '«Always» står foran hovedverbet.')),
        order('g1-4', [1, 2], t('Put the words in the correct order.', 'Sett ordene i riktig rekkefølge.'), ['Yesterday', 'I', 'went', 'to the cinema', 'with my friends'], t('Time word, subject, verb, place, extra information.', 'Tidsord, subjekt, verb, sted, tilleggsinformasjon.')),
        sort('g1-5', [1, 2, 3], t('Statement, question or negative?', 'Påstand, spørsmål eller nektelse?'), [t('Statement', 'Påstand'), t('Question', 'Spørsmål'), t('Negative', 'Nektelse')], [['You are tired.', 0], ['Are you tired?', 1], ['You are not tired.', 2], ['Do they live here?', 1], ['They do not live here.', 2], ['They live here.', 0]], t('Questions start with a verb (do or be). Negatives have "not".', 'Spørsmål starter med et verb (do eller be). Nektelser har «not».')),
        mcq('g1-6', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['Today I eat pizza.', 'Today eat I pizza.', 'I today eat pizza.'], 0, t('The subject stays before the verb, also after "today".', 'Subjektet står foran verbet, også etter «today».')),
        mcq('g1-7', [3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I wonder where she is.', 'I wonder where is she.', 'I wonder where does she is.'], 0, t('Indirect questions use normal word order.', 'Indirekte spørsmål bruker vanlig ordstilling.')),
        gap('g1-8', [3], 'The boy', 'sat alone was new.', ['who', 'which', 'whose'], 0, t('Use "who" for people.', 'Bruk «who» om personer.')),
        gap('g1-9', [2, 3], 'I stayed at home', 'it was raining.', ['because', 'so', 'but'], 0, t('"Because" gives the reason.', '«Because» gir grunnen.'))] },

    /* ---------------------------------------------------------------- 2 */
    { id: 'agreement', icon: 'check', reviewed: false, curriculum: ['K4', 'K5'],
      title: t('Subject–verb agreement', 'Samsvar mellom subjekt og verb'),
      blurb: t('When does the verb get an -s? is or are? has or have?', 'Når får verbet -s? is eller are? has eller have?'),
      top5: [
        t('In the present simple, he / she / it + verb + s: "He plays".', 'I presens får he / she / it verb + s: «He plays».'),
        t('I / you / we / they: no -s: "They play".', 'I / you / we / they: ingen -s: «They play».'),
        t('There is + one thing. There are + more things.', 'There is + én ting. There are + flere ting.'),
        t('Everyone, everybody, somebody and nobody are singular: "Everyone is here."', 'Everyone, everybody, somebody og nobody er entall: «Everyone is here.»'),
        t('News, information and homework are uncountable, so the verb is singular.', 'News, information og homework er utellelige, så verbet står i entall.')],
      sections: [
        { h: t('The -s rule in the present simple', '-s-regelen i presens'), blocks: [
          { table: { head: [t('Subject', 'Subjekt'), t('work', 'work'), t('be', 'be'), t('have', 'have'), t('do', 'do')], rows: [
            ['I', 'work', 'am', 'have', 'do'], ['you', 'work', 'are', 'have', 'do'], ['he / she / it', 'works', 'is', 'has', 'does'], ['we', 'work', 'are', 'have', 'do'], ['they', 'work', 'are', 'have', 'do']] } },
          { nor: { note: t('In Norwegian the verb is the same for all persons ("jeg spiser", "han spiser"). In English he / she / it needs an -s.', 'På norsk er verbet likt for alle personer («jeg spiser», «han spiser»). På engelsk må he / she / it ha -s.'), bad: 'He eat lunch at school.', good: 'He eats lunch at school.' } },
          { p: t('After does / did the main verb has NO -s: "Does she like pizza?" (not "Does she likes").', 'Etter does / did har hovedverbet INGEN -s: «Does she like pizza?» (ikke «Does she likes»).') }] },
        { h: t('There is / there are, and everyone', 'There is / there are, og everyone'), blocks: [
          { ex: [ex('There is a book on the table.', 'Det ligger en bok på bordet.'), ex('There are two books on the table.', 'Det ligger to bøker på bordet.'), ex('Everyone is here.', 'Alle er her.'), ex('Nobody knows the answer.', 'Ingen vet svaret.')] },
          { lvl: 2, blocks: [{ p: t('Uncountable words are singular: "The news is good." "Your homework is on the desk." But "people" and "the police" are plural: "People are waiting." "The police are here."', 'Utellelige ord står i entall: «The news is good.» «Your homework is on the desk.» Men «people» og «the police» står i flertall: «People are waiting.» «The police are here.»') }] }] },
        { h: t('Longer subjects', 'Lengre subjekter'), blocks: [
          { lvl: 2, blocks: [{ p: t('Find the real subject. Ignore the words between the subject and the verb: "The box of chocolates is on the table."', 'Finn det egentlige subjektet. Se bort fra ordene mellom subjektet og verbet: «The box of chocolates is on the table.»') }, { p: t('Two subjects with "and" are plural: "Tom and Ella are friends."', 'To subjekter med «and» er flertall: «Tom and Ella are friends.»') }] },
          { lvl: 3, blocks: [{ p: t('"The number of students is growing" (singular), but "A number of students are late" (plural). With "or" and "nor" the verb agrees with the nearer subject: "Neither the teacher nor the students were ready."', '«The number of students is growing» (entall), men «A number of students are late» (flertall). Med «or» og «nor» retter verbet seg etter det nærmeste subjektet: «Neither the teacher nor the students were ready.»') }] }] }],
      practice: [
        gap('g2-1', [1, 2, 3], 'My brother', 'football every Saturday.', ['plays', 'play', 'playing'], 0, t('He / she / it + verb + s.', 'He / she / it + verb + s.')),
        gap('g2-2', [1, 2, 3], 'They', 'in Oslo.', ['live', 'lives', 'living'], 0, t('"They" does not take -s.', '«They» får ikke -s.')),
        mcq('g2-3', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['She does not like fish.', 'She does not likes fish.', 'She not likes fish.'], 0, t('After "does not" the verb has no -s.', 'Etter «does not» har verbet ingen -s.')),
        gap('g2-4', [1, 2], 'There', 'three apples in the bag.', ['are', 'is', 'be'], 0, t('Three apples = plural, so "are".', 'Tre epler = flertall, så «are».')),
        gap('g2-5', [1, 2, 3], 'Everyone', 'welcome.', ['is', 'are', 'am'], 0, t('"Everyone" is singular.', '«Everyone» er entall.')),
        mcq('g2-6', [2, 3], t('Choose the correct sentence.', 'Velg riktig setning.'), ['The news is good.', 'The news are good.', 'The newses are good.'], 0, t('"News" is uncountable and singular.', '«News» er utellelig og entall.')),
        mcq('g2-7', [2, 3], t('Choose the correct sentence.', 'Velg riktig setning.'), ['The police are here.', 'The police is here.', 'The polices are here.'], 0, t('"The police" is plural in English.', '«The police» er flertall på engelsk.')),
        mcq('g2-8', [2, 3], t('Which verb is correct?', 'Hvilket verb er riktig?'), ['The box of chocolates is on the table.', 'The box of chocolates are on the table.', 'The box of chocolates be on the table.'], 0, t('The subject is "box" (singular).', 'Subjektet er «box» (entall).')),
        mcq('g2-9', [3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['A number of students are late.', 'A number of students is late.', 'A number of students am late.'], 0, t('"A number of" means "several", so the verb is plural.', '«A number of» betyr «flere», så verbet står i flertall.'))] },

    /* ---------------------------------------------------------------- 3 */
    { id: 'tenses', icon: 'doc', reviewed: false, curriculum: ['K4', 'K5', 'K11'],
      title: t('Verb tenses', 'Verbtider'),
      blurb: t('Present, past, present perfect, past perfect and ways to talk about the future.', 'Presens, preteritum, perfektum, pluskvamperfektum og måter å snakke om framtiden på.'),
      top5: [
        t('Present simple for habits and facts: "I walk to school."', 'Presens for vaner og fakta: «I walk to school.»'),
        t('Present continuous for now: "I am walking."', 'Presens kontinuerlig for nå: «I am walking.»'),
        t('Past simple for finished events: "I walked to school yesterday."', 'Preteritum for avsluttede hendelser: «I walked to school yesterday.»'),
        t('Present perfect = have / has + past participle: "I have lived here for five years."', 'Presens perfektum = have / has + perfektum partisipp: «I have lived here for five years.»'),
        t('Use "for" with a period of time and "since" with a starting point.', 'Bruk «for» med en tidsperiode og «since» med et startpunkt.')],
      sections: [
        { h: t('The main tenses', 'De viktigste tidene'), blocks: [
          { table: { head: [t('Tense', 'Tid'), t('Form', 'Form'), t('Use', 'Bruk'), t('Example', 'Eksempel')], rows: [
            [t('Present simple', 'Presens'), 'work(s)', t('habits, facts', 'vaner, fakta'), 'She plays the piano.'], [t('Present continuous', 'Presens kontinuerlig'), 'am/is/are + -ing', t('happening now', 'skjer nå'), 'She is playing the piano.'],
            [t('Past simple', 'Preteritum'), 'worked / went', t('finished past', 'avsluttet fortid'), 'She played yesterday.'], [t('Future', 'Framtid'), 'will / going to + verb', t('plans, predictions', 'planer, spådommer'), 'She will play tomorrow.']] } },
          { p: t('Signal words help: always, usually, every day (present simple); now, at the moment (present continuous); yesterday, last week, in 2020, ago (past simple).', 'Signalord hjelper: always, usually, every day (presens); now, at the moment (presens kontinuerlig); yesterday, last week, in 2020, ago (preteritum).') },
          { nor: { note: t('Do not say "I am 15 years". In English we say "I am 15 years old", or just "I am 15".', 'Ikke si «I am 15 years». På engelsk sier vi «I am 15 years old», eller bare «I am 15».'), bad: 'I am 15 years.', good: 'I am 15 years old.' } }] },
        { h: t('Present perfect and past simple', 'Presens perfektum og preteritum'), blocks: [
          { lvl: 2, blocks: [
            { p: t('Present perfect connects the past with now: "I have lived here for five years" (and I still live here). Past simple is finished: "I lived in Bergen in 2019."', 'Presens perfektum knytter fortid til nå: «I have lived here for five years» (og jeg bor her fortsatt). Preteritum er avsluttet: «I lived in Bergen in 2019.»') },
            { table: { head: [t('Word', 'Ord'), t('Use with', 'Brukes med'), t('Example', 'Eksempel')], rows: [['for', t('a period of time', 'en tidsperiode'), 'for five years'], ['since', t('a starting point', 'et startpunkt'), 'since 2020'], ['ago', t('past simple only', 'bare preteritum'), 'five years ago']] } },
            { nor: { note: t('Do not mix "since" and a period of time. In Norwegian we say "i fem år". In English: for five years.', 'Ikke bland «since» og en tidsperiode. På norsk sier vi «i fem år». På engelsk: for five years.'), bad: 'I have lived here since five years.', good: 'I have lived here for five years.' } },
            { nor: { note: t('In Norwegian you can say "Jeg har sett ham i går". In English a finished time word (yesterday, last week, in 2019) needs the past simple.', 'På norsk kan du si «Jeg har sett ham i går». På engelsk krever et avsluttet tidsord (yesterday, last week, in 2019) preteritum.'), bad: 'I have seen him yesterday.', good: 'I saw him yesterday.' } },
            { p: t('Past continuous (was / were + -ing) shows something that was going on: "I was reading when the phone rang."', 'Preteritum kontinuerlig (was / were + -ing) viser noe som pågikk: «I was reading when the phone rang.»') }] }] },
        { h: t('Past perfect and the future', 'Pluskvamperfektum og framtiden'), blocks: [
          { lvl: 3, blocks: [
            { p: t('Past perfect (had + past participle) shows what happened BEFORE another past event: "I had put the notes in the books before she came."', 'Pluskvamperfektum (had + perfektum partisipp) viser hva som skjedde FØR en annen hendelse i fortid: «I had put the notes in the books before she came.»') },
            { p: t('Future: will (a spontaneous decision or a prediction), going to (a plan or something you can see coming), present continuous (a fixed arrangement: "I am meeting Tom at six").', 'Framtid: will (en spontan avgjørelse eller en spådom), going to (en plan eller noe du ser kommer), presens kontinuerlig (en avtale: «I am meeting Tom at six»).') }] },
          { p: t('More verbs and their forms: see the table of irregular verbs.', 'Flere verb og formene deres: se tabellen over uregelmessige verb.') }] }],
      practice: [
        gap('g3-1', [1, 2, 3], 'She', 'to school every day.', ['walks', 'walk', 'is walk'], 0, t('A habit: present simple with -s.', 'En vane: presens med -s.')),
        gap('g3-2', [1, 2], 'Look! It', 'now.', ['is raining', 'rains', 'rained'], 0, t('Happening now: present continuous.', 'Skjer nå: presens kontinuerlig.')),
        gap('g3-3', [1, 2, 3], 'We', 'a film last night.', ['watched', 'watch', 'have watched'], 0, t('"Last night" = finished time = past simple.', '«Last night» = avsluttet tid = preteritum.')),
        mcq('g3-4', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I am 15 years old.', 'I am 15 years.', 'I have 15 years.'], 0, t('In English we say "I am 15 (years old)".', 'På engelsk sier vi «I am 15 (years old)».')),
        gap('g3-5', [2, 3], 'I have lived here', 'five years.', ['for', 'since', 'ago'], 0, t('"For" + a period of time.', '«For» + en tidsperiode.')),
        gap('g3-6', [2, 3], 'She has worked here', '2020.', ['since', 'for', 'ago'], 0, t('"Since" + a starting point.', '«Since» + et startpunkt.')),
        mcq('g3-7', [2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['I saw him yesterday.', 'I have seen him yesterday.', 'I have saw him yesterday.'], 0, t('A finished time (yesterday) needs the past simple.', 'En avsluttet tid (yesterday) krever preteritum.')),
        gap('g3-8', [2, 3], 'I', 'a book when the phone rang.', ['was reading', 'read', 'am reading'], 0, t('Something in progress when another thing happened: past continuous.', 'Noe som pågikk da noe annet skjedde: preteritum kontinuerlig.')),
        mcq('g3-9', [3], t('Which sentence uses the past perfect correctly?', 'Hvilken setning bruker pluskvamperfektum riktig?'), ['I had finished before she arrived.', 'I have finished before she arrived.', 'I finished had before she arrived.'], 0, t('Past perfect = had + past participle.', 'Pluskvamperfektum = had + perfektum partisipp.')),
        mcq('g3-10', [3], t('"Look at those clouds! It ___ rain." Choose the best answer.', '«Look at those clouds! It ___ rain.» Velg det beste svaret.'), ['is going to', 'will be', 'rains'], 0, t('You can see it coming: going to.', 'Du ser at det kommer: going to.'))] },

    /* ---------------------------------------------------------------- 4 */
    { id: 'modals', icon: 'language', reviewed: false, curriculum: ['K4', 'K5'],
      title: t('Modal verbs', 'Modale hjelpeverb'),
      blurb: t('can, could, must, have to, should, may, might, would and will.', 'can, could, must, have to, should, may, might, would og will.'),
      top5: [
        t('Modal verbs (modale hjelpeverb) never get -s: "She can swim."', 'Modale hjelpeverb får aldri -s: «She can swim.»'),
        t('After a modal verb we use the base form WITHOUT "to": "I must go."', 'Etter et modalt hjelpeverb bruker vi grunnformen UTEN «to»: «I must go.»'),
        t('Questions and negatives need no "do": "Can you help?", "I cannot come."', 'Spørsmål og nektelser trenger ikke «do»: «Can you help?», «I cannot come.»'),
        t('"must not" means "it is forbidden". "do not have to" means "it is not necessary".', '«must not» betyr «det er forbudt». «do not have to» betyr «det er ikke nødvendig».'),
        t('Could, would and may make requests more polite.', 'Could, would og may gjør forespørsler mer høflige.')],
      sections: [
        { h: t('What do they mean?', 'Hva betyr de?'), blocks: [
          { table: { head: [t('Meaning', 'Betydning'), t('Modal verbs', 'Modale verb'), t('Example', 'Eksempel')], rows: [
            [t('ability', 'evne'), 'can, could', 'I can swim. I could swim when I was five.'], [t('permission', 'tillatelse'), 'can, may, could', 'May I open the window?'], [t('obligation', 'plikt'), 'must, have to', 'You must wear a helmet.'],
            [t('advice', 'råd'), 'should, ought to', 'You should sleep more.'], [t('possibility', 'mulighet'), 'may, might, could', 'It might rain later.'], [t('polite request', 'høflig forespørsel'), 'could, would', 'Could you help me, please?']] } },
          { nor: { note: t('Norwegian "må ikke" and "trenger ikke" are different in English. "You mustn\'t go" = forbidden. "You don\'t have to go" = not necessary.', 'Norsk «må ikke» og «trenger ikke» er forskjellige på engelsk. «You mustn\'t go» = forbudt. «You don\'t have to go» = ikke nødvendig.'), bad: 'You must not come, it is optional.', good: 'You do not have to come, it is optional.' } }] },
        { h: t('Form: the rules that never change', 'Form: reglene som aldri endrer seg'), blocks: [
          { pairs: [{ bad: 'She cans swim.', good: 'She can swim.', note: t('No -s after a modal.', 'Ingen -s etter et modalt verb.') }, { bad: 'I must to go.', good: 'I must go.', note: t('No "to" after a modal (but "have to" is different).', 'Ingen «to» etter et modalt verb (men «have to» er annerledes).') }, { bad: 'Do you can swim?', good: 'Can you swim?', note: t('The modal moves in front of the subject.', 'Det modale verbet flyttes foran subjektet.') }] },
          { lvl: 3, blocks: [{ p: t('Modal + have + past participle talks about the past: "I should have studied" (but I did not), "She might have forgotten".', 'Modalt verb + have + perfektum partisipp snakker om fortiden: «I should have studied» (men det gjorde jeg ikke), «She might have forgotten».') }] }] }],
      practice: [
        mcq('g4-1', [1, 2, 3], t('Which sentence is correct?', 'Hvilken setning er riktig?'), ['She can swim.', 'She cans swim.', 'She can to swim.'], 0, t('No -s and no "to" after can.', 'Ingen -s og ingen «to» etter can.')),
        mcq('g4-2', [1, 2, 3], t('Which question is correct?', 'Hvilket spørsmål er riktig?'), ['Can you help me?', 'Do you can help me?', 'You can help me?'], 0, t('The modal goes in front of the subject.', 'Det modale verbet står foran subjektet.')),
        gap('g4-3', [1, 2], 'You', 'wear a helmet. It is the law.', ['must', 'must to', 'musts'], 0, t('"Must" + base form.', '«Must» + grunnform.')),
        mcq('g4-4', [2, 3], t('"Tomorrow is a holiday. You ___ come to school."', '«I morgen er det fri. Du ___ komme på skolen.»'), ['do not have to', 'must not', 'cannot to'], 0, t('It is not necessary: "do not have to".', 'Det er ikke nødvendig: «do not have to».')),
        mcq('g4-5', [2, 3], t('"You ___ park here. It is forbidden."', '«Du ___ parkere her. Det er forbudt.»'), ['must not', 'do not have to', 'might not'], 0, t('"Must not" = forbidden.', '«Must not» = forbudt.')),
        sort('g4-6', [2, 3], t('What does the modal verb show?', 'Hva viser det modale verbet?'), [t('Ability', 'Evne'), t('Advice', 'Råd'), t('Possibility', 'Mulighet')], [['I can run fast.', 0], ['You should drink more water.', 1], ['It might snow tonight.', 2], ['She can speak three languages.', 0], ['You ought to see a doctor.', 1], ['He may be late.', 2]], t('Can = ability, should = advice, might/may = possibility.', 'Can = evne, should = råd, might/may = mulighet.')),
        mcq('g4-7', [1, 2, 3], t('Which request is the most polite?', 'Hvilken forespørsel er mest høflig?'), ['Could you open the window, please?', 'Open the window!', 'You open the window.'], 0, t('"Could you …, please?" is polite.', '«Could you …, please?» er høflig.')),
        mcq('g4-8', [3], t('"I failed the test. I ___ studied more." Choose the best answer.', '«Jeg strøk på prøven. Jeg ___ lest mer.» Velg det beste svaret.'), ['should have', 'should', 'must to'], 0, t('Should have + past participle = a regret about the past.', 'Should have + perfektum partisipp = angrer på noe som skjedde.'))] }
  ];

  APP.modules.push({
    id: 'grammar', group: 'grammar', icon: 'structure',
    title: t('Grammar', 'Grammatikk'),
    blurb: t('Look up the rules, verb forms and the most common mistakes.', 'Slå opp reglene, verbformene og de vanligste feilene.'),
    helps: t('Short rules in plain English with Norwegian help, typical mistakes for Norwegian speakers, and practice tasks.', 'Korte regler på enkel engelsk med norsk hjelp, typiske feil for norsktalende og øvingsoppgaver.'),
    curriculum: ['K4', 'K5', 'K11'],
    top5: [
      t('Choose a topic below. Each page has the key rules, examples and practice.', 'Velg et tema under. Hver side har nøkkelregler, eksempler og øving.'),
      t('Look at the boxes called "Typical mistake for Norwegian speakers". They show where Norwegian and English are different.', 'Se på boksene «Typisk feil for norsktalende». De viser hvor norsk og engelsk er forskjellige.'),
      t('Use the Level buttons: "Level up" boxes give more rules at higher levels.', 'Bruk nivåknappene: «Neste nivå»-bokser gir flere regler på høyere nivå.'),
      t('Use the table of irregular verbs when you are not sure about a verb form.', 'Bruk tabellen over uregelmessige verb når du er usikker på en verbform.'),
      t('Use the glossary to find the English and Norwegian grammar words.', 'Bruk ordlisten for å finne de engelske og norske grammatikkordene.')],
    topics: topics,
    resources: [
      { id: 'cam-grammar', title: 'English Grammar Today', publisher: 'Cambridge Dictionary',
        url: 'https://dictionary.cambridge.org/grammar/british-grammar/', type: 'article', lang: 'en', level: 'B1–B2',
        why: t('A free grammar guide with clear explanations and examples. Use the search box to find a topic.', 'En gratis grammatikkguide med tydelige forklaringer og eksempler. Bruk søkefeltet for å finne et tema.'),
        checked: '2026-11-16', license: 'Cambridge University Press, link only' },
      { id: 'purdue-grammar', title: 'Grammar Introduction', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html', type: 'article', lang: 'en', level: 'B2',
        why: t('A well-known university guide with many grammar topics. It is written for college students, so read it slowly.', 'En kjent universitetsguide med mange grammatikktemaer. Den er skrevet for studenter, så les den sakte.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' },
      { id: 'purdue-sva', title: 'Subject/Verb Agreement', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html', type: 'article', lang: 'en', level: 'B2',
        why: t('More examples of subject–verb agreement, including difficult cases.', 'Flere eksempler på samsvar mellom subjekt og verb, også vanskelige tilfeller.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' },
      { id: 'purdue-prep', title: 'Time, Place, and Introducing Objects (prepositions)', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/general_writing/grammar/prepositions/index.html', type: 'article', lang: 'en', level: 'B2',
        why: t('A short guide to the prepositions in, on and at.', 'En kort guide til preposisjonene in, on og at.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' },
      { id: 'purdue-commas', title: 'Commas: Quick Rules', publisher: 'Purdue Online Writing Lab (OWL)',
        url: 'https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html', type: 'article', lang: 'en', level: 'B2',
        why: t('A list of the most important comma rules in English.', 'En liste over de viktigste kommareglene i engelsk.'),
        checked: '2026-11-16', license: 'Purdue OWL, link only' }
    ],
    pending: []
  });
})();
