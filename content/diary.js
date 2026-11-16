/* ==========================================================================
   MODULE: Diary entry
   Source: teacher booklet "Slik skriver du en kreativ tekst på engelsk" (diary part).
   Level 2 = booklet text with the new names (Hedda, Alex). Levels 1 and 3 are new.
   ALL new text is marked reviewed:false until the teacher approves it.
   Variant markup:  {colour|color} = UK|US.  **bold**, *italic*.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; };
  var P = function (en, nb, reg, lvl, ex) { return { en: en, nb: nb, reg: reg, lvl: lvl, ex: ex || '' }; };

  var diary = {
    id: 'alex-diary', kind: 'diary', register: 'informal',
    title: t('Alex\'s diary entry', 'Alex sitt dagboknotat'),
    situation: t(
      'You write Alex\'s diary entry from the evening after he met Hedda. It is the same event as in the short story "The Note in the Library Book", but now seen through Alex\'s eyes.',
      'Du skriver Alex sitt dagboknotat fra kvelden etter at han møtte Hedda. Det er den samme hendelsen som i novellen «The Note in the Library Book», men nå sett med Alex sine øyne.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('date-greeting', '{Friday, 16 October|Friday, October 16}\nDear Diary,', 'Fredag 16. oktober\nKjære dagbok,'),
        seg('opening', 'I am so happy today. Somebody came!', 'Jeg er så glad i dag. Noen kom!'),
        seg('what-happened', 'I waited behind the gym for ten minutes. I was afraid that nobody would come. Three weeks ago, I put ten notes in library books, and nothing happened.', 'Jeg ventet bak gymsalen i ti minutter. Jeg var redd for at ingen ville komme. For tre uker siden la jeg ti lapper i bibliotekbøker, og ingenting skjedde.'),
        seg('details-feelings', 'Then she came. It was Hedda from 9B. My face went red, and I said, "You found it." She smiled and asked, "Do you want a hot chocolate?"', 'Så kom hun. Det var Hedda fra 9B. Ansiktet mitt ble rødt, og jeg sa: «Du fant den.» Hun smilte og spurte: «Vil du ha en kakao?»'),
        seg('more-events', 'We sat in the café for one hour. She told me about her dog. I told her about Trondheim.', 'Vi satt på kafeen i én time. Hun fortalte meg om hunden sin. Jeg fortalte henne om Trondheim.'),
        seg('reflection', 'I felt a bit silly about the notes, but I think it was a good idea.', 'Jeg følte meg litt dum på grunn av lappene, men jeg tror det var en god idé.'),
        seg('looking-ahead', 'I hope Monday is a good day. I am looking forward to school now.', 'Jeg håper mandag blir en god dag. Jeg gleder meg til skolen nå.'),
        seg('name', 'Alex', 'Alex')
      ] },
      2: { reviewed: false, segments: [
        seg('date-greeting', '{Friday, 16 October|Friday, October 16}\nDear Diary,', 'Fredag 16. oktober\nKjære dagbok,'),
        seg('opening', 'I can\'t believe it. Somebody actually came!', 'Jeg kan ikke tro det. Noen kom faktisk!'),
        seg('what-happened', 'Today I waited behind the gym for almost ten minutes before I dared to walk {round|around} the corner. I was sure nobody would be there. I had put those ten notes in the most boring books in the library three weeks ago, and nothing had happened.', 'I dag ventet jeg bak gymsalen i nesten ti minutter før jeg turte å gå rundt hjørnet. Jeg var sikker på at ingen ville være der. Jeg hadde lagt de ti lappene i de kjedeligste bøkene på biblioteket for tre uker siden, og ingenting hadde skjedd.'),
        seg('details-feelings', 'But she was there. Hedda from 9B. My face went as red as a tomato, and I said something stupid like "You found it." She just smiled and asked if I wanted a hot chocolate.', 'Men hun var der. Hedda fra 9B. Ansiktet mitt ble rødt som en tomat, og jeg sa noe dumt som «Du fant den.» Hun bare smilte og spurte om jeg ville ha en kakao.'),
        seg('more-events', 'We sat in the café for over an hour. She told me about her dog, and I told her about Trondheim and why we moved here. It was the first real conversation I\'ve had since I started at this school.', 'Vi satt på kafeen i over en time. Hun fortalte meg om hunden sin, og jeg fortalte henne om Trondheim og hvorfor vi flyttet hit. Det var den første ekte samtalen jeg har hatt siden jeg begynte på denne skolen.'),
        seg('reflection', 'Honestly, I feel a bit silly about the notes now. Maybe it was a strange idea. But maybe strange ideas are sometimes the best ones.', 'Ærlig talt føler jeg meg litt dum på grunn av lappene nå. Kanskje det var en merkelig idé. Men kanskje merkelige ideer av og til er de beste.'),
        seg('looking-ahead', 'I hope Monday is a good day. For the first time in weeks, I\'m actually looking forward to school.', 'Jeg håper mandag blir en god dag. For første gang på flere uker gleder jeg meg faktisk til skolen.'),
        seg('name', 'Alex', 'Alex')
      ] },
      3: { reviewed: false, segments: [
        seg('date-greeting', '{Friday, 16 October|Friday, October 16}\nDear Diary,', 'Fredag 16. oktober\nKjære dagbok,'),
        seg('opening', 'I can\'t believe it. Somebody actually came! I\'m still smiling as I write this, and my hand is shaking a little.', 'Jeg kan ikke tro det. Noen kom faktisk! Jeg smiler fortsatt mens jeg skriver dette, og hånden min skjelver litt.'),
        seg('what-happened', 'Today I waited behind the gym for almost ten minutes before I dared to walk {round|around} the corner. The rain had stopped, but the wind was cold, and I kept telling myself that nobody would come. After all, I had hidden those ten notes in the most boring books in the library three weeks ago, and I had heard nothing since. I had almost given up.', 'I dag ventet jeg bak gymsalen i nesten ti minutter før jeg turte å gå rundt hjørnet. Regnet hadde stoppet, men vinden var kald, og jeg sa stadig til meg selv at ingen kom til å komme. Jeg hadde tross alt gjemt de ti lappene i de kjedeligste bøkene på biblioteket for tre uker siden, og jeg hadde ikke hørt noe siden. Jeg hadde nesten gitt opp.'),
        seg('details-feelings', 'But she was there. Hedda from 9B, the girl who always laughs with her friends in the canteen. My face went as red as a tomato, and I said something stupid like "You found it." Instead of laughing at me, she smiled and asked if I wanted a hot chocolate. My knees felt like jelly all the way to the café.', 'Men hun var der. Hedda fra 9B, jenta som alltid ler sammen med vennene sine i kantina. Ansiktet mitt ble rødt som en tomat, og jeg sa noe dumt som «Du fant den.» I stedet for å le av meg smilte hun og spurte om jeg ville ha en kakao. Knærne mine føltes som gelé helt til kafeen.'),
        seg('more-events', 'We sat there for over an hour. She told me about her dog, who eats socks, and I told her about Trondheim and why we moved here. It was the first real conversation I\'ve had since I started at this school. When I got home, {Mum|Mom} asked why I was grinning, and I just said "nothing". I think she knew.', 'Vi satt der i over en time. Hun fortalte meg om hunden sin, som spiser sokker, og jeg fortalte henne om Trondheim og hvorfor vi flyttet hit. Det var den første ekte samtalen jeg har hatt siden jeg begynte på denne skolen. Da jeg kom hjem, spurte mamma hvorfor jeg gliste, og jeg sa bare «ingenting». Jeg tror hun skjønte det.'),
        seg('reflection', 'Honestly, I feel a bit silly about the notes now. Maybe it was a strange idea, and I\'m not sure I would dare to do it again. But maybe strange ideas are sometimes the best ones, because they make people curious. If I had never written those notes, I would still be eating lunch alone.', 'Ærlig talt føler jeg meg litt dum på grunn av lappene nå. Kanskje det var en merkelig idé, og jeg er ikke sikker på at jeg ville turt å gjøre det igjen. Men kanskje merkelige ideer av og til er de beste, fordi de gjør folk nysgjerrige. Hvis jeg aldri hadde skrevet de lappene, ville jeg fortsatt spist lunsj alene.'),
        seg('looking-ahead', 'I hope Monday is a good day. If Hedda says hello in the corridor, I\'ll try to say something that isn\'t stupid. For the first time in weeks, I\'m actually looking forward to school.', 'Jeg håper mandag blir en god dag. Hvis Hedda sier hei i korridoren, skal jeg prøve å si noe som ikke er dumt. For første gang på flere uker gleder jeg meg faktisk til skolen.'),
        seg('name', 'Alex', 'Alex')
      ] }
    },
    parts: {
      'date-greeting': { n: 1, cat: 'format',
        name: t('Date and greeting', 'Dato og hilsen'),
        fn: t('The date shows when you wrote the entry. "Dear Diary," is a friendly greeting, but it is optional.', 'Datoen viser når du skrev notatet. «Dear Diary,» er en vennlig hilsen, men den er valgfri.'),
        tips: [
          t('Put the date at the top: day, then date and month.', 'Skriv datoen øverst: ukedag, så dato og måned.'),
          t('"Dear Diary," is optional. Use it if you like.', '«Dear Diary,» er valgfritt. Bruk den hvis du vil.')],
        phrases: ['Dear Diary,'],
        mistake: { bad: '16.10.2026', good: '{Friday, 16 October|Friday, October 16}', note: t('Write the weekday and the month as words, with capital letters.', 'Skriv ukedagen og måneden som ord, med stor forbokstav.') } },
      'opening': { n: 2, cat: 'structure',
        name: t('Opening', 'Åpning'),
        fn: t('The opening goes straight into the feeling. A diary is personal and honest.', 'Åpningen går rett inn i følelsen. En dagbok er personlig og ærlig.'),
        tips: [
          t('Start with the strongest feeling or the biggest news.', 'Begynn med den sterkeste følelsen eller den største nyheten.'),
          t('Short sentences and exclamation marks are fine.', 'Korte setninger og utropstegn er greit.')],
        phrases: ['I can\'t believe …', 'Today was …', 'Guess what happened today?'],
        mistake: { bad: 'Today I will tell you about my day.', good: 'I can\'t believe it. Somebody actually came!', note: t('A diary does not explain. It starts with the feeling.', 'En dagbok forklarer ikke. Den starter med følelsen.') } },
      'what-happened': { n: 3, cat: 'structure',
        name: t('What happened', 'Hva skjedde'),
        fn: t('This part tells what happened, in the order it happened. Use the past tense.', 'Denne delen forteller hva som skjedde, i den rekkefølgen det skjedde. Bruk fortid.'),
        tips: [
          t('Use past simple for events: waited, was, dared.', 'Bruk preteritum for hendelser: waited, was, dared.'),
          t('Use past perfect for what happened before that: I had put the notes in the books.', 'Bruk pluskvamperfektum for det som skjedde før: I had put the notes in the books.')],
        levelTips: { 3: [t('Add the weather or a small detail to set the scene: The rain had stopped, but the wind was cold.', 'Legg til været eller en liten detalj for å sette scenen: The rain had stopped, but the wind was cold.')] },
        phrases: ['At first …', 'A few minutes later …', 'Later that evening …'],
        mistake: { bad: 'Today I wait behind the gym.', good: 'Today I waited behind the gym.', note: t('Events that have happened need the past tense.', 'Hendelser som har skjedd trenger fortid.') } },
      'details-feelings': { n: 4, cat: 'language',
        name: t('Details and feelings', 'Detaljer og følelser'),
        fn: t('Show how you felt with details, not only with feeling words. This is "show, don\'t tell".', 'Vis hvordan du hadde det med detaljer, ikke bare med følelsesord. Dette er «show, don\'t tell».'),
        tips: [
          t('Use your body: my face went red, my knees felt like jelly.', 'Bruk kroppen: my face went red, my knees felt like jelly.'),
          t('Use a comparison: as red as a tomato.', 'Bruk en sammenligning: as red as a tomato.')],
        phrases: ['My face went as red as a tomato.', 'My heart was pounding.', 'I couldn\'t stop smiling.'],
        mistake: { bad: 'I was embarrassed.', good: 'My face went as red as a tomato.', note: t('Show the feeling instead of naming it.', 'Vis følelsen i stedet for å nevne den.') } },
      'more-events': { n: 5, cat: 'structure',
        name: t('More events', 'Flere hendelser'),
        fn: t('Short pictures from the rest of the day.', 'Korte glimt fra resten av dagen.'),
        tips: [
          t('Choose two or three small moments. You do not need to tell everything.', 'Velg to eller tre små øyeblikk. Du trenger ikke fortelle alt.'),
          t('Add one detail that only you would remember.', 'Ta med én detalj som bare du ville husket.')],
        phrases: ['Meanwhile …', 'When I got home, …', 'In the end …'],
        mistake: { bad: 'Then we talked. Then we went home. Then I ate.', good: 'We sat in the café for over an hour. She told me about her dog.', note: t('Choose the moments that matter, with a detail.', 'Velg øyeblikkene som betyr noe, med en detalj.') } },
      'reflection': { n: 6, cat: 'structure',
        name: t('Reflection', 'Refleksjon'),
        fn: t('Here you think about what happened. Use the present tense for how you feel now.', 'Her tenker du over det som skjedde. Bruk presens for hvordan du har det nå.'),
        tips: [
          t('Use present tense for thoughts and feelings now: I feel, I think.', 'Bruk presens for tanker og følelser nå: I feel, I think.'),
          t('Ask yourself: What did I learn? Would I do it again?', 'Spør deg selv: Hva lærte jeg? Ville jeg gjort det igjen?')],
        levelTips: { 3: [t('Use "if" sentences: If I had never written those notes, I would still be eating lunch alone.', 'Bruk «if»-setninger: If I had never written those notes, I would still be eating lunch alone.')] },
        phrases: ['Honestly, …', 'Looking back, …', 'Maybe …', 'I wonder if …'],
        mistake: { bad: 'It was a silly idea. I felt silly.', good: 'Honestly, I feel a bit silly about the notes now.', note: t('Use the present tense for the feeling you have now.', 'Bruk presens for følelsen du har nå.') } },
      'looking-ahead': { n: 7, cat: 'structure',
        name: t('Looking ahead', 'Ser framover'),
        fn: t('The ending shows your hopes or plans for the next days.', 'Slutten viser håp eller planer for de neste dagene.'),
        tips: [
          t('Use I hope, I\'m going to or I\'m looking forward to.', 'Bruk I hope, I\'m going to eller I\'m looking forward to.'),
          t('Finish with a feeling or a plan, not with "The End".', 'Avslutt med en følelse eller en plan, ikke med «The End».')],
        phrases: ['Tomorrow I\'m going to …', 'I hope …', 'I\'m looking forward to …', 'I can\'t wait to …'],
        mistake: { bad: 'That is all. The end.', good: 'I hope Monday is a good day.', note: t('A diary ends with hope or a plan.', 'En dagbok slutter med håp eller en plan.') } },
      'name': { n: 8, cat: 'format',
        name: t('Name', 'Navn'),
        fn: t('You can write your name at the end. It is optional.', 'Du kan skrive navnet ditt til slutt. Det er valgfritt.'),
        tips: [t('Only your first name, or nothing at all.', 'Bare fornavnet ditt, eller ingenting.')],
        phrases: [],
        mistake: { bad: 'Yours sincerely, Alex Berg', good: 'Alex', note: t('A diary is private, so it needs no formal ending.', 'En dagbok er privat, så den trenger ikke en formell avslutning.') } }
    }
  };

  var phraseBank = [
    { group: t('Starting a diary entry', 'Å starte et dagboknotat'), items: [
      P('Dear Diary,', 'Kjære dagbok,', 'informal', 1),
      P('Today was …', 'I dag var … ', 'informal', 1, 'Today was the best day this month.'),
      P('I can\'t believe …', 'Jeg kan ikke tro at …', 'informal', 1, 'I can\'t believe she actually came!'),
      P('Guess what happened today?', 'Gjett hva som skjedde i dag?', 'informal', 2),
      P('I have to write this down before I forget.', 'Jeg må skrive dette ned før jeg glemmer det.', 'informal', 3)
    ] },
    { group: t('Showing that time goes by', 'Å vise at tiden går'), items: [
      P('At first …', 'Først …', 'neutral', 1), P('Suddenly …', 'Plutselig …', 'neutral', 1),
      P('A few minutes later …', 'Noen minutter senere …', 'neutral', 2), P('Meanwhile …', 'I mellomtiden …', 'neutral', 2),
      P('Later that evening …', 'Senere på kvelden …', 'neutral', 2), P('In the end …', 'Til slutt …', 'neutral', 1)
    ] },
    { group: t('Showing feelings', 'Å vise følelser'), items: [
      P('My heart was pounding.', 'Hjertet mitt hamret.', 'neutral', 1),
      P('My face went red.', 'Ansiktet mitt ble rødt.', 'neutral', 1),
      P('I had butterflies in my stomach.', 'Jeg hadde sommerfugler i magen.', 'neutral', 2),
      P('I couldn\'t stop smiling.', 'Jeg klarte ikke å slutte å smile.', 'neutral', 2),
      P('My knees felt like jelly.', 'Knærne mine føltes som gelé.', 'neutral', 3),
      P('A shiver ran down my spine.', 'Det gikk en gysning nedover ryggen min.', 'neutral', 3)
    ] },
    { group: t('Thinking about what happened', 'Å tenke over det som skjedde'), items: [
      P('Honestly, …', 'Ærlig talt, …', 'informal', 2), P('Looking back, …', 'Når jeg ser tilbake, …', 'neutral', 3),
      P('Maybe …', 'Kanskje …', 'neutral', 1), P('I wonder if …', 'Jeg lurer på om …', 'informal', 2),
      P('I think I learnt that …', 'Jeg tror jeg lærte at …', 'neutral', 3, 'I think I {learnt|learned} that being brave is not the same as not being scared.')
    ] },
    { group: t('Looking ahead', 'Å se framover'), items: [
      P('I hope …', 'Jeg håper …', 'neutral', 1), P('Tomorrow I\'m going to …', 'I morgen skal jeg …', 'informal', 1),
      P('I\'m looking forward to …', 'Jeg gleder meg til …', 'neutral', 1), P('I can\'t wait to …', 'Jeg kan ikke vente med å …', 'informal', 2),
      P('Next time, I\'ll …', 'Neste gang skal jeg …', 'informal', 3)
    ] }
  ];

  var practice = [
    { id: 'd-mcq-tense', type: 'mcq', level: [1, 2, 3], q: t('Which tense do you use for what happened earlier today?', 'Hvilken tid bruker du om det som skjedde tidligere i dag?'),
      options: ['Past tense (waited, was)', 'Present tense (wait, is)', 'Future tense (will wait)'], answer: 0,
      why: t('Events that have already happened are in the past tense.', 'Hendelser som allerede har skjedd står i fortid.') },
    { id: 'd-mcq-show', type: 'mcq', level: [1, 2, 3], q: t('Which sentence SHOWS the feeling?', 'Hvilken setning VISER følelsen?'),
      options: ['I was embarrassed.', 'My face went as red as a tomato.', 'I felt very embarrassed.'], answer: 1,
      why: t('It shows the body, and the reader understands the feeling without a feeling word.', 'Den viser kroppen, og leseren forstår følelsen uten et følelsesord.') },
    { id: 'd-gap1', type: 'gap', level: [1, 2], q: t('Choose the correct form.', 'Velg riktig form.'),
      before: 'Today I', after: 'behind the gym for ten minutes.', options: ['waited', 'wait', 'will wait'], answer: 0,
      why: t('"Waited" is the past simple of "wait".', '«Waited» er preteritum av «wait».') },
    { id: 'd-gap2', type: 'gap', level: [2, 3], q: t('Choose the correct form.', 'Velg riktig form.'),
      before: 'Right now I', after: 'a bit silly about the notes.', options: ['feel', 'felt', 'will feel'], answer: 0,
      why: t('Feelings you have now use the present tense.', 'Følelser du har nå bruker presens.') },
    { id: 'd-sort', type: 'sort', level: [1, 2], q: t('Past or present? Sort the sentences from a diary entry.', 'Fortid eller nåtid? Sorter setningene fra et dagboknotat.'),
      buckets: [t('Past (what happened)', 'Fortid (det som skjedde)'), t('Present (how I feel now)', 'Nåtid (hvordan jeg har det nå)')],
      items: [
        { text: 'I waited behind the gym.', b: 0 }, { text: 'I feel a bit silly.', b: 1 }, { text: 'She asked me about a hot chocolate.', b: 0 },
        { text: 'I\'m looking forward to school.', b: 1 }, { text: 'We sat in the café.', b: 0 }, { text: 'I hope Monday is a good day.', b: 1 }],
      why: t('What happened is past tense. Thoughts and feelings now are present tense.', 'Det som skjedde er preteritum. Tanker og følelser nå er presens.') },
    { id: 'd-order', type: 'order', level: [1, 2], q: t('Put the parts of a diary entry in a good order.', 'Sett delene av et dagboknotat i en god rekkefølge.'),
      items: ['Date and greeting', 'Opening', 'What happened', 'Details and feelings', 'Reflection', 'Looking ahead'],
      why: t('Date, opening, events with feelings, then your thoughts, then the future.', 'Dato, åpning, hendelser med følelser, så tankene dine, så framtiden.') },
    { id: 'd-mcq-normal', type: 'mcq', level: [1, 2, 3], q: t('What is NOT normal in a diary entry?', 'Hva er IKKE vanlig i et dagboknotat?'),
      options: ['Contractions like I\'m and can\'t', 'Writing in the first person (I)', 'Starting with "Dear Sir or Madam,"'], answer: 2,
      why: t('A diary is private and informal. "Dear Sir or Madam," is for formal letters.', 'En dagbok er privat og uformell. «Dear Sir or Madam,» er for formelle brev.') },
    { id: 'd-mcq-date', type: 'mcq', level: [2, 3], q: t('Which date is written the British way?', 'Hvilken dato er skrevet på britisk måte?'),
      options: ['Friday, October 16', 'Friday, 16 October', '10/16'], answer: 1,
      why: t('British English: day before month. American English: Friday, October 16.', 'Britisk engelsk: dag før måned. Amerikansk engelsk: Friday, October 16.') },
    { id: 'd-mcq-perfect', type: 'mcq', level: [3], q: t('Which sentence correctly tells about something that happened BEFORE the other events?', 'Hvilken setning forteller riktig om noe som skjedde FØR de andre hendelsene?'),
      options: ['I had put the notes in the books three weeks ago.', 'I have put the notes in the books three weeks ago.', 'I putted the notes in the books three weeks ago.'], answer: 0,
      why: t('Past perfect (had + past participle) shows what happened before another past event.', 'Pluskvamperfektum (had + perfektum partisipp) viser hva som skjedde før en annen hendelse i fortid.') },
    { id: 'd-mcq-reflect', type: 'mcq', level: [2, 3], q: t('Which sentence is a reflection?', 'Hvilken setning er en refleksjon?'),
      options: ['We sat in the café for an hour.', 'Looking back, strange ideas are sometimes the best ones.', 'I waited behind the gym.'], answer: 1,
      why: t('A reflection is a thought about what happened, often in the present tense.', 'En refleksjon er en tanke om det som skjedde, ofte i presens.') },
    { id: 'd-mcq-end', type: 'mcq', level: [1, 2, 3], q: t('How can a diary entry end?', 'Hvordan kan et dagboknotat slutte?'),
      options: ['With a hope or a plan', 'With "Yours faithfully,"', 'With a list of rules'], answer: 0,
      why: t('Diaries often end by looking ahead.', 'Dagbøker slutter ofte med å se framover.') }
  ];

  var checklist = [
    { group: t('Content and structure', 'Innhold og oppbygging'), items: [
      t('The date is at the top.', 'Datoen står øverst.'),
      t('I write in the first person (I) and I am honest.', 'Jeg skriver i første person (jeg) og er ærlig.'),
      t('I show feelings in at least three places (show, don\'t tell).', 'Jeg viser følelser på minst tre steder (show, don\'t tell).'),
      t('I have reflected on what happened.', 'Jeg har reflektert over det som skjedde.'),
      t('I end by looking ahead (a hope or a plan).', 'Jeg avslutter med å se framover (et håp eller en plan).')] },
    { group: t('Language', 'Språk'), items: [
      t('Past tense for what happened, present tense for what I feel now.', 'Fortid for det som skjedde, nåtid for det jeg føler nå.'),
      t('Contractions (I\'m, can\'t) are fine, because this is informal.', 'Sammentrekninger (I\'m, can\'t) er greit, fordi dette er uformelt.'),
      t('I have used time words (suddenly, later, in the end).', 'Jeg har brukt tidsord (suddenly, later, in the end).'),
      t('I have replaced boring words (said, nice, good, very).', 'Jeg har byttet ut kjedelige ord (said, nice, good, very).'),
      t('British spelling: colour, favourite, recognise.', 'Britisk stavemåte: colour, favourite, recognise.'),
      t('I have read through the whole text one more time.', 'Jeg har lest gjennom hele teksten én gang til.')] }
  ];

  var resources = [
    { id: 'bbc-diary', title: 'Diary writing', publisher: 'BBC Bitesize (English)',
      url: 'https://www.bbc.co.uk/bitesize/articles/z4qtqfr', type: 'article', lang: 'en', level: 'A2–B1',
      why: t('A short, simple article on the features of diary writing. It is made for younger UK pupils, so the language is easy. Good if you want a quick reminder.', 'En kort og enkel artikkel om kjennetegn ved dagboksskriving. Den er laget for yngre britiske elever, så språket er lett. Bra som en rask påminnelse.'),
      checked: '2026-11-16', license: 'BBC content, link only' },
    { id: 'bbc-ks3-nonfiction-d', title: 'Non-fiction writing (KS3 English)', publisher: 'BBC Bitesize',
      url: 'https://www.bbc.co.uk/bitesize/topics/zv7fqp3', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('More writing guides, including formal and informal writing. Made for UK pupils, so use it selectively.', 'Flere skriveguider, blant annet om formell og uformell skriving. Laget for britiske elever, så bruk den utvalgt.'),
      checked: '2026-11-16', license: 'BBC content, link only' }
  ];

  APP.modules.push({
    id: 'diary', group: 'write', icon: 'pen',
    title: t('Diary entry', 'Dagboknotat'),
    blurb: t('Write about your day, your thoughts and your feelings.', 'Skriv om dagen din, tankene dine og følelsene dine.'),
    helps: t('You learn to write a personal diary entry in the first person, with feelings and reflection.', 'Du lærer å skrive et personlig dagboknotat i første person, med følelser og refleksjon.'),
    curriculum: ['K3', 'K6'],
    top5: [
      t('A diary entry is personal and honest. Write in the first person (I).', 'Et dagboknotat er personlig og ærlig. Skriv i første person (jeg).'),
      t('Put the date at the top. "Dear Diary," is optional.', 'Skriv datoen øverst. «Dear Diary,» er valgfritt.'),
      t('Use the past tense for what happened and the present tense for how you feel now.', 'Bruk fortid for det som skjedde og nåtid for hvordan du har det nå.'),
      t('Show your feelings with details: "My face went as red as a tomato."', 'Vis følelsene dine med detaljer: «My face went as red as a tomato.»'),
      t('Contractions and informal language are fine.', 'Sammentrekninger og uformelt språk er greit.')
    ],
    keyRule: {
      title: t('Two tenses in one diary entry', 'To tider i ett dagboknotat'),
      lines: [
        t('What happened earlier → **past tense** (waited, was, had put)', 'Det som skjedde tidligere → **fortid** (waited, was, had put)'),
        t('How you feel now → **present tense** (I feel, I\'m looking forward to)', 'Hvordan du har det nå → **nåtid** (I feel, I\'m looking forward to)')]
    },
    remember: t('Dear Diary is optional, but the date is not. Always start with the date!', 'Dear Diary er valgfritt, men datoen er ikke det. Begynn alltid med datoen!'),
    explainers: [
      { id: 'tenses', type: 'table', title: t('Which tense?', 'Hvilken tid?'),
        intro: t('A diary entry mixes tenses. Choose the tense by looking at WHEN the thing happens.', 'Et dagboknotat blander tider. Velg tid ved å se på NÅR det skjer.'),
        head: [t('When?', 'Når?'), t('Tense', 'Tid'), t('Example', 'Eksempel')],
        rows: [
          [t('What happened today', 'Det som skjedde i dag'), t('past simple', 'preteritum'), 'I waited behind the gym.'],
          [t('What happened before that', 'Det som skjedde før det'), t('past perfect', 'pluskvamperfektum'), 'I had put those notes in the books.'],
          [t('How I feel now', 'Hvordan jeg har det nå'), t('present simple', 'presens'), 'I feel a bit silly.'],
          [t('Hopes and plans', 'Håp og planer'), t('present / going to', 'presens / going to'), 'I\'m looking forward to school.']] },
      { id: 'showtell', type: 'cards', title: t('Show, don\'t tell', 'Show, don\'t tell'),
        intro: t('Click a card to see how to SHOW a feeling instead of just naming it.', 'Klikk på et kort for å se hvordan du VISER en følelse i stedet for bare å nevne den.'),
        cards: [
          { tell: 'I was embarrassed.', show: 'My face went as red as a tomato.', nbTell: 'Jeg var flau.', nbShow: 'Ansiktet mitt ble rødt som en tomat.' },
          { tell: 'I was nervous.', show: 'My hands were shaking when I opened the door.', nbTell: 'Jeg var nervøs.', nbShow: 'Hendene mine skalv da jeg åpnet døren.' },
          { tell: 'I was happy.', show: 'I couldn\'t stop smiling all the way home.', nbTell: 'Jeg var glad.', nbShow: 'Jeg klarte ikke å slutte å smile helt hjem.' },
          { tell: 'I was tired.', show: 'My eyes kept closing during the last lesson.', nbTell: 'Jeg var trøtt.', nbShow: 'Øynene mine falt igjen hele den siste timen.' }] }
    ],
    ukus: [
      { k: t('Date', 'Dato'), uk: 'Friday, 16 October', us: 'Friday, October 16' },
      { k: t('Spelling', 'Staving'), uk: 'colour, favourite, recognise', us: 'color, favorite, recognize' },
      { k: t('Mum / mom', 'Mamma'), uk: 'Mum', us: 'Mom' },
      { k: t('Walk … the corner', 'Gå … hjørnet'), uk: 'round the corner', us: 'around the corner' }
    ],
    models: [diary],
    phraseBank: phraseBank,
    practice: practice,
    checklist: checklist,
    resources: resources,
    pending: []
  });
})();
