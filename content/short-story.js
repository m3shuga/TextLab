/* ==========================================================================
   MODULE: Short story
   Source: teacher booklet "Slik skriver du en kreativ tekst på engelsk" (short story part).
   Level 2 = booklet text with the new names (Sofie -> Hedda, Leo -> Alex; the note is signed "– A.").
   Levels 1 and 3 are new. ALL new text is marked reviewed:false until the teacher approves it.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; };
  var P = function (en, nb, reg, lvl, ex) { return { en: en, nb: nb, reg: reg, lvl: lvl, ex: ex || '' }; };
  var T = { t: 1 };

  var story = {
    id: 'note-library', kind: 'story', register: 'neutral',
    title: t('The Note in the Library Book', 'The Note in the Library Book'),
    situation: t('You write a short story with the title "The Note in the Library Book". In the model, Hedda finds a mysterious note at school.', 'Du skriver en novelle med tittelen «The Note in the Library Book». I modellen finner Hedda en mystisk lapp på skolen.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('title', 'The Note in the Library Book', 'The Note in the Library Book', T),
        seg('opening', 'A note fell out of the book.', 'En lapp falt ut av boken.'),
        seg('setting', 'Hedda picked it up from the floor of the school library. It was a small, yellow piece of paper. Outside, the rain was loud on the windows. The library was empty, and the old librarian was asleep.', 'Hedda tok den opp fra gulvet i skolebiblioteket. Det var en liten, gul papirlapp. Utenfor durte regnet mot vinduene. Biblioteket var tomt, og den gamle bibliotekaren sov.'),
        seg('problem', 'Hedda opened the note. It said: Meet me by the big tree behind the gym on Friday at three o\'clock. – A.', 'Hedda åpnet lappen. Der sto det: Møt meg ved det store treet bak gymsalen på fredag klokka tre. – A.'),
        seg('dialogue', '"That\'s weird," said Jonas at lunch. "Don\'t go."\n"But what if it\'s real?" Hedda asked.\nJonas shrugged and ate his sandwich.', '«Det er rart,» sa Jonas til lunsj. «Ikke gå.»\n«Men hva om det er ekte?» spurte Hedda.\nJonas trakk på skuldrene og spiste matpakken sin.'),
        seg('build-up', 'All week, Hedda thought about the note. Who was A? Why was the note in an old book about birds?', 'Hele uka tenkte Hedda på lappen. Hvem var A? Hvorfor lå lappen i en gammel bok om fugler?'),
        seg('show-dont-tell', 'On Friday, Hedda stood behind the gym. Her heart was beating fast, and her hands were cold. Nobody was there.', 'På fredag sto Hedda bak gymsalen. Hjertet hennes banket fort, og hendene var kalde. Ingen var der.'),
        seg('climax', 'Then she heard steps. A tall boy in a green raincoat came {round|around} the corner. It was Alex, the new boy from 9C. His face went red.\n"You found my note," he whispered. "I put notes in ten books. You are the first one who came."', 'Så hørte hun skritt. En høy gutt i grønn regnjakke kom rundt hjørnet. Det var Alex, den nye gutten fra 9C. Ansiktet hans ble rødt.\n«Du fant lappen min,» hvisket han. «Jeg la lapper i ti bøker. Du er den første som kom.»'),
        seg('resolution', 'Hedda smiled. "I\'m here now. Do you want a hot chocolate? I\'m cold."\nAlex laughed for the first time at the school.', 'Hedda smilte. «Jeg er her nå. Vil du ha en kakao? Jeg er kald.»\nAlex lo for første gang på skolen.'),
        seg('ending', 'On Monday, Hedda went back to the library. She wrote a short note and put it in a book that nobody ever borrowed.', 'På mandag gikk Hedda tilbake til biblioteket. Hun skrev en kort lapp og la den i en bok som ingen noen gang lånte.')
      ] },
      2: { reviewed: false, segments: [
        seg('title', 'The Note in the Library Book', 'The Note in the Library Book', T),
        seg('opening', 'The note fell out of the book just as the bell rang.', 'Lappen falt ut av boken akkurat idet bjella ringte.'),
        seg('setting', 'Hedda picked it up from the dusty floor of the school library. It was a small, yellow piece of paper, folded twice. Outside, the October rain was hammering against the windows, and the library was empty except for her and the old librarian, who was asleep behind her desk.', 'Hedda tok den opp fra det støvete gulvet i skolebiblioteket. Det var en liten, gul papirlapp, brettet to ganger. Utenfor hamret oktoberregnet mot vinduene, og biblioteket var tomt bortsett fra henne og den gamle bibliotekaren, som sov bak pulten sin.'),
        seg('problem', 'Hedda unfolded the note. In neat, blue handwriting, it said: If you are reading this, meet me by the oak tree behind the gym on Friday at three o\'clock. – A.', 'Hedda brettet ut lappen. Med pen, blå håndskrift sto det: Hvis du leser dette, møt meg ved eiketreet bak gymsalen på fredag klokka tre. – A.'),
        seg('dialogue', '"That\'s so weird," said Jonas when she showed him the note at lunch. "It\'s probably a joke. Don\'t go."\n"But what if it isn\'t?" Hedda asked.\nJonas just shrugged and went back to his sandwich.', '«Det er så rart,» sa Jonas da hun viste ham lappen til lunsj. «Det er sikkert en spøk. Ikke gå.»\n«Men hva om det ikke er det?» spurte Hedda.\nJonas trakk bare på skuldrene og gikk tilbake til matpakken sin.'),
        seg('build-up', 'For the rest of the week, Hedda could not stop thinking about the note. She read it again and again, until the paper was soft at the edges. Who was A? And why would anyone hide a message in a book about birds that nobody had borrowed since 2009?', 'Resten av uka kunne ikke Hedda slutte å tenke på lappen. Hun leste den om og om igjen, til papiret var mykt i kantene. Hvem var A? Og hvorfor skulle noen gjemme en beskjed i en bok om fugler som ingen hadde lånt siden 2009?'),
        seg('show-dont-tell', 'On Friday, at five to three, she stood behind the gym. Her heart was pounding, and her hands were cold and sweaty at the same time. The wind pulled at her jacket. Nobody was there.', 'På fredag, fem på tre, sto hun bak gymsalen. Hjertet hennes hamret, og hendene var kalde og svette på samme tid. Vinden dro i jakka hennes. Ingen var der.'),
        seg('climax', 'Then she heard footsteps on the wet gravel. A tall, thin boy in a green raincoat came {round|around} the corner. Hedda {recognised|recognized} him at once. It was Alex, the new boy from 9C, the one who always sat alone in the {canteen|cafeteria}. He stopped and stared at her. His face turned bright red.\n"You found it," he whispered. "I put notes in ten books. You\'re the first person who came."', 'Så hørte hun skritt i det våte gruset. En høy, tynn gutt i grønn regnjakke kom rundt hjørnet. Hedda kjente ham igjen med en gang. Det var Alex, den nye gutten fra 9C, han som alltid satt alene i kantina. Han stoppet og stirret på henne. Ansiktet hans ble knallrødt.\n«Du fant den,» hvisket han. «Jeg la lapper i ti bøker. Du er den første som kom.»'),
        seg('resolution', 'Hedda didn\'t know what to say. Then she smiled. "Well, I\'m here now. Do you want to get a hot chocolate? I\'m freezing."\nFor the first time since he had started at the school, Alex laughed.', 'Hedda visste ikke hva hun skulle si. Så smilte hun. «Vel, jeg er her nå. Vil du ta en kakao? Jeg fryser.»\nFor første gang siden han begynte på skolen lo Alex.'),
        seg('ending', 'On Monday, Hedda went back to the library. She took a small piece of paper out of her bag, wrote a short message and slipped it carefully between the pages of a book that nobody ever borrowed.', 'På mandag gikk Hedda tilbake til biblioteket. Hun tok en liten papirlapp ut av sekken, skrev en kort beskjed og stakk den forsiktig mellom sidene i en bok som ingen noen gang lånte.')
      ] },
      3: { reviewed: false, segments: [
        seg('title', 'The Note in the Library Book', 'The Note in the Library Book', T),
        seg('opening', 'The note fell out of the book just as the bell rang, as if it had been waiting for the right moment.', 'Lappen falt ut av boken akkurat idet bjella ringte, som om den hadde ventet på det rette øyeblikket.'),
        seg('setting', 'Hedda crouched down and picked it up from the dusty floor of the school library. It was a small, yellow piece of paper, folded twice and slightly crumpled at the corners. Outside, the October rain was hammering against the tall windows, and the library was empty except for her and the old librarian, who was snoring softly behind her desk. The whole room smelled of dust and old paper.', 'Hedda satte seg på huk og tok den opp fra det støvete gulvet i skolebiblioteket. Det var en liten, gul papirlapp, brettet to ganger og litt krøllete i hjørnene. Utenfor hamret oktoberregnet mot de høye vinduene, og biblioteket var tomt bortsett fra henne og den gamle bibliotekaren, som snorket lavt bak pulten sin. Hele rommet luktet støv og gammelt papir.'),
        seg('problem', 'Hedda unfolded the note with careful fingers. In neat, blue handwriting, it said: If you are reading this, meet me by the oak tree behind the gym on Friday at three o\'clock. – A.', 'Hedda brettet ut lappen med forsiktige fingre. Med pen, blå håndskrift sto det: Hvis du leser dette, møt meg ved eiketreet bak gymsalen på fredag klokka tre. – A.'),
        seg('dialogue', '"That\'s so weird," said Jonas when she showed him the note at lunch. "It\'s probably a joke. Someone wants to see who is stupid enough to go."\n"But what if it isn\'t?" Hedda asked quietly.\n"Then it\'s even weirder," he said, and shrugged. "Don\'t go."\nHe went back to his sandwich, but Hedda noticed that he glanced at the note twice.', '«Det er så rart,» sa Jonas da hun viste ham lappen til lunsj. «Det er sikkert en spøk. Noen vil se hvem som er dum nok til å gå.»\n«Men hva om det ikke er det?» spurte Hedda stille.\n«Da er det enda rarere,» sa han og trakk på skuldrene. «Ikke gå.»\nHan gikk tilbake til matpakken sin, men Hedda la merke til at han kikket på lappen to ganger.'),
        seg('build-up', 'For the rest of the week, Hedda could not stop thinking about it. She read the note again and again, until the paper was soft at the edges and she knew every word by heart. Who was A? Why would anyone hide a message in a book about birds that nobody had borrowed since 2009? And, the question that kept her awake at night: would she be brave enough to go?', 'Resten av uka kunne ikke Hedda slutte å tenke på den. Hun leste lappen om og om igjen, til papiret var mykt i kantene og hun kunne hvert ord utenat. Hvem var A? Hvorfor skulle noen gjemme en beskjed i en bok om fugler som ingen hadde lånt siden 2009? Og, spørsmålet som holdt henne våken om natten: ville hun være modig nok til å gå?'),
        seg('show-dont-tell', 'On Friday, at five to three, she stood behind the gym with her hands deep in her pockets. Her heart was pounding, and her hands were cold and sweaty at the same time. The wind pulled at her jacket, and somewhere a door banged shut. She checked her watch for the fifth time. Nobody was there.', 'På fredag, fem på tre, sto hun bak gymsalen med hendene dypt nede i lommene. Hjertet hennes hamret, og hendene var kalde og svette på samme tid. Vinden dro i jakka hennes, og et sted smalt en dør igjen. Hun sjekket klokka for femte gang. Ingen var der.'),
        seg('climax', 'Then she heard footsteps on the wet gravel. A tall, thin boy in a green raincoat came {round|around} the corner, and Hedda {recognised|recognized} him at once. It was Alex, the new boy from 9C, the one who always sat alone in the {canteen|cafeteria} and never looked up from his book. He stopped and stared at her as if he had seen a ghost. His face turned bright red.\n"You found it," he whispered. "I put notes in ten books. You\'re the first person who came."', 'Så hørte hun skritt i det våte gruset. En høy, tynn gutt i grønn regnjakke kom rundt hjørnet, og Hedda kjente ham igjen med en gang. Det var Alex, den nye gutten fra 9C, han som alltid satt alene i kantina og aldri så opp fra boken sin. Han stoppet og stirret på henne som om han hadde sett et spøkelse. Ansiktet hans ble knallrødt.\n«Du fant den,» hvisket han. «Jeg la lapper i ti bøker. Du er den første som kom.»'),
        seg('resolution', 'For a moment, Hedda didn\'t know what to say. Then the corners of her mouth began to twitch, and she smiled. "Well, I\'m here now," she said. "Do you want to get a hot chocolate? I\'m freezing."\nFor the first time since he had started at the school, Alex laughed, and the sound surprised both of them.', 'Et øyeblikk visste ikke Hedda hva hun skulle si. Så begynte munnvikene hennes å rykke, og hun smilte. «Vel, jeg er her nå,» sa hun. «Vil du ta en kakao? Jeg fryser.»\nFor første gang siden han begynte på skolen lo Alex, og lyden overrasket dem begge.'),
        seg('ending', 'On Monday, Hedda went back to the library. She took a small piece of paper out of her bag, wrote a short message and slipped it carefully between the pages of a book that nobody ever borrowed. Then she walked out into the rain, smiling, and wondered who would find it.', 'På mandag gikk Hedda tilbake til biblioteket. Hun tok en liten papirlapp ut av sekken, skrev en kort beskjed og stakk den forsiktig mellom sidene i en bok som ingen noen gang lånte. Så gikk hun ut i regnet, smilende, og lurte på hvem som ville finne den.')
      ] }
    },
    parts: {
      'title': { n: 1, cat: 'structure',
        name: t('Title', 'Tittel'),
        fn: t('A good title is short and makes the reader curious, but it does not give away the ending.', 'En god tittel er kort og gjør leseren nysgjerrig, men den avslører ikke slutten.'),
        tips: [t('Keep it short.', 'Hold den kort.'), t('Make the reader ask a question: What note? Which book?', 'Få leseren til å stille et spørsmål: Hvilken lapp? Hvilken bok?')],
        phrases: [],
        mistake: { bad: 'Hedda Finds a Note and Meets Alex', good: 'The Note in the Library Book', note: t('The first title tells the whole story.', 'Den første tittelen forteller hele historien.') } },
      'opening': { n: 2, cat: 'structure',
        name: t('Opening', 'Åpning'),
        fn: t('The first sentence decides if the reader wants to read on. Start in the middle of the action.', 'Den første setningen avgjør om leseren vil lese videre. Start midt i handlingen.'),
        tips: [
          t('Choose a type: dialogue, action, surprise, question or setting with the senses.', 'Velg en type: dialog, handling, overraskelse, spørsmål eller miljø med sansene.'),
          t('Avoid "Once upon a time …" (only for fairy tales) and "Hi, my name is …".', 'Unngå «Once upon a time …» (bare for eventyr) og «Hi, my name is …».')],
        phrases: ['Suddenly …', 'All of a sudden …', 'Without warning …'],
        mistake: { bad: 'Once upon a time there was a girl called Hedda.', good: 'The note fell out of the book just as the bell rang.', note: t('A surprise in the first sentence makes the reader want to know more.', 'En overraskelse i første setning gjør at leseren vil vite mer.') } },
      'setting': { n: 3, cat: 'structure',
        name: t('Setting and character', 'Miljø og person'),
        fn: t('The reader learns who, where and when. The senses help us to see the scene.', 'Leseren får vite hvem, hvor og når. Sansene hjelper oss å se scenen for oss.'),
        tips: [
          t('Say who the main character is, and where and when we are.', 'Si hvem hovedpersonen er, og hvor og når vi er.'),
          t('Use the senses: the rain was hammering against the windows.', 'Bruk sansene: the rain was hammering against the windows.')],
        levelTips: { 3: [t('Add a smell or a sound: The whole room smelled of dust and old paper.', 'Legg til en lukt eller en lyd: The whole room smelled of dust and old paper.')] },
        phrases: ['The air smelled of …', 'I could hear …', 'In the distance, …'],
        mistake: { bad: 'Hedda was in the library. It was raining.', good: 'Outside, the October rain was hammering against the windows.', note: t('A strong verb and a sound make the place come alive.', 'Et sterkt verb og en lyd gjør at stedet våkner til liv.') } },
      'problem': { n: 4, cat: 'structure',
        name: t('The problem', 'Problemet'),
        fn: t('The note is the mystery that starts the action. Without a problem there is no story.', 'Lappen er mysteriet som setter i gang handlingen. Uten et problem er det ingen historie.'),
        tips: [
          t('Give the main character a problem, a mystery or a question.', 'Gi hovedpersonen et problem, et mysterium eller et spørsmål.'),
          t('Make it clear early, in the first third of the story.', 'Gjør det tydelig tidlig, i første tredjedel av historien.')],
        phrases: ['Something was wrong.', 'It was a strange note.'],
        mistake: { bad: 'Hedda found a note. Then she went home.', good: 'In neat, blue handwriting, it said: meet me by the oak tree …', note: t('The problem must make the reader curious.', 'Problemet må gjøre leseren nysgjerrig.') } },
      'dialogue': { n: 5, cat: 'language',
        name: t('Dialogue', 'Dialog'),
        fn: t('Dialogue makes the story alive and shows who the characters are. English has its own rules for it.', 'Dialog gjør historien levende og viser hvem personene er. Engelsk har egne regler for dialog.'),
        tips: [
          t('Put what is said in quotation marks. Do not use « » or a dash.', 'Sett det som blir sagt i anførselstegn. Ikke bruk « » eller tankestrek.'),
          t('Commas, question marks and exclamation marks go inside the quotation marks.', 'Komma, spørsmålstegn og utropstegn står inni anførselstegnene.'),
          t('New line each time a new person speaks.', 'Ny linje hver gang en ny person snakker.'),
          t('Use different speech verbs, not only "said".', 'Bruk ulike talverb, ikke bare «said».')],
        phrases: ['"…," she whispered.', '"…?" he asked.', 'She replied, "…"'],
        mistake: { bad: '– That\'s weird, said Jonas.', good: '"That\'s weird," said Jonas.', note: t('In English we use quotation marks and a comma inside them.', 'På engelsk bruker vi anførselstegn og komma inni dem.') } },
      'build-up': { n: 6, cat: 'structure',
        name: t('Build-up', 'Oppbygging'),
        fn: t('The excitement grows. The questions in the text are the same questions the reader asks.', 'Spenningen øker. Spørsmålene i teksten er de samme som leseren lurer på.'),
        tips: [
          t('Let the main character think and wonder. Ask questions in the text.', 'La hovedpersonen tenke og lure. Still spørsmål i teksten.'),
          t('Show that time goes by: for the rest of the week …', 'Vis at tiden går: for the rest of the week …')],
        phrases: ['For the rest of the week, …', 'Who was …?', 'The next morning …'],
        mistake: { bad: 'Hedda thought about it. Then it was Friday.', good: 'She read it again and again, until the paper was soft at the edges.', note: t('Small details show how much the problem matters.', 'Små detaljer viser hvor mye problemet betyr.') } },
      'show-dont-tell': { n: 7, cat: 'language',
        name: t('Show, don\'t tell', 'Show, don\'t tell'),
        fn: t('The text never says "she was nervous", but we understand it anyway.', 'Teksten sier aldri «she was nervous», men vi forstår det likevel.'),
        tips: [
          t('Show feelings with actions, the body and the senses.', 'Vis følelser med handlinger, kroppen og sansene.'),
          t('One or two senses in each paragraph is enough.', 'Ett eller to sanseinntrykk i hvert avsnitt er nok.')],
        phrases: ['My heart was pounding.', 'Her hands were shaking.', 'A shiver ran down my spine.'],
        mistake: { bad: 'She was nervous.', good: 'Her heart was pounding, and her hands were cold and sweaty at the same time.', note: t('Let the reader see the feeling for themselves.', 'La leseren se følelsen selv.') } },
      'climax': { n: 8, cat: 'structure',
        name: t('Climax', 'Klimaks'),
        fn: t('The climax is the highest point. The mystery is solved.', 'Klimaks er høydepunktet. Mysteriet blir løst.'),
        tips: [
          t('Slow down: use short sentences for the most exciting moment.', 'Sett ned tempoet: bruk korte setninger i det mest spennende øyeblikket.'),
          t('Show the feelings of the characters: "His face turned bright red" shows that Alex is shy.', 'Vis følelsene til personene: «His face turned bright red» viser at Alex er sjenert.')],
        phrases: ['Then she heard …', 'To my horror …', 'He stopped and stared.'],
        mistake: { bad: 'Then she met Alex and he was shy.', good: 'He stopped and stared at her. His face turned bright red.', note: t('Show that he is shy; do not just say it.', 'Vis at han er sjenert; ikke bare si det.') } },
      'resolution': { n: 9, cat: 'structure',
        name: t('Resolution', 'Løsning'),
        fn: t('The problem is solved, here in a warm way. Keep it short and simple.', 'Problemet blir løst, her på en varm måte. Hold det kort og enkelt.'),
        tips: [
          t('Show how the problem ends. It does not have to be happy.', 'Vis hvordan problemet ender. Det trenger ikke å være lykkelig.'),
          t('A small action can say a lot: Alex laughed.', 'En liten handling kan si mye: Alex laughed.')],
        phrases: ['For the first time since …', 'In the end, …', 'At last, …'],
        mistake: { bad: 'And they lived happily ever after.', good: 'For the first time since he had started at the school, Alex laughed.', note: t('A small, real moment is stronger than a big promise.', 'Et lite, ekte øyeblikk er sterkere enn et stort løfte.') } },
      'ending': { n: 10, cat: 'structure',
        name: t('Ending', 'Avslutning'),
        fn: t('The ending is what the reader remembers best. Here: a circle ending, back to the library and a new note.', 'Slutten er det leseren husker best. Her: en sirkelslutt, tilbake til biblioteket og en ny lapp.'),
        tips: [
          t('Choose: circle ending, twist, reflection or open ending.', 'Velg: sirkelslutt, overraskende vri, refleksjon eller åpen slutt.'),
          t('Avoid "… and then I woke up. It was all a dream."', 'Unngå «… and then I woke up. It was all a dream.»')],
        phrases: ['From that day on, …', 'Looking back, …', 'Little did she know that …'],
        mistake: { bad: 'And then I woke up. It was all a dream.', good: 'She slipped it carefully between the pages of a book that nobody ever borrowed.', note: t('A dream ending feels like cheating.', 'En drømmeslutt føles som juks.') } }
    }
  };

  var phraseBank = [
    { group: t('Showing that time goes by', 'Å vise at tiden går'), items: [
      P('At first …', 'Først …', 'neutral', 1), P('Suddenly …', 'Plutselig …', 'neutral', 1), P('The next morning …', 'Neste morgen …', 'neutral', 1),
      P('In the end …', 'Til slutt …', 'neutral', 1), P('A few minutes later …', 'Noen minutter senere …', 'neutral', 2), P('Meanwhile …', 'I mellomtiden …', 'neutral', 2),
      P('All of a sudden …', 'Helt plutselig …', 'neutral', 2)
    ] },
    { group: t('Creating tension', 'Å skape spenning'), items: [
      P('Something was wrong.', 'Noe var galt.', 'neutral', 1), P('I held my breath.', 'Jeg holdt pusten.', 'neutral', 2),
      P('Without warning …', 'Uten forvarsel …', 'neutral', 3), P('To my horror …', 'Til min skrekk …', 'neutral', 3), P('The silence felt heavy.', 'Stillheten føltes tung.', 'neutral', 3)
    ] },
    { group: t('Showing feelings', 'Å vise følelser'), items: [
      P('My heart was pounding.', 'Hjertet mitt hamret.', 'neutral', 1), P('Her hands were shaking.', 'Hendene hennes skalv.', 'neutral', 1),
      P('I had butterflies in my stomach.', 'Jeg hadde sommerfugler i magen.', 'neutral', 2), P('Tears filled her eyes.', 'Tårene fylte øynene hennes.', 'neutral', 2),
      P('He bit his lip.', 'Han bet seg i leppen.', 'neutral', 2), P('A shiver ran down my spine.', 'Det gikk en gysning nedover ryggen min.', 'neutral', 3)
    ] },
    { group: t('Using the senses', 'Å bruke sansene'), items: [
      P('The air smelled of …', 'Luften luktet av …', 'neutral', 1), P('I could hear …', 'Jeg kunne høre …', 'neutral', 1),
      P('It tasted like …', 'Det smakte som …', 'neutral', 2), P('The ground felt …', 'Bakken føltes …', 'neutral', 2), P('In the distance, …', 'I det fjerne, …', 'neutral', 2)
    ] },
    { group: t('Speech verbs (instead of "said")', 'Talverb (i stedet for «said»)'), items: [
      P('whispered', 'hvisket', 'neutral', 1, '"Don\'t move," she whispered.'), P('shouted', 'ropte', 'neutral', 1, '"Stop!" he shouted.'),
      P('replied', 'svarte', 'neutral', 1), P('asked', 'spurte', 'neutral', 1, '"Are you coming?" he asked.'),
      P('muttered', 'mumlet', 'neutral', 2), P('sighed', 'sukket', 'neutral', 2), P('laughed', 'lo', 'neutral', 2)
    ] },
    { group: t('Ending a story', 'Å avslutte en historie'), items: [
      P('From that day on, …', 'Fra den dagen av …', 'neutral', 2), P('I will never forget …', 'Jeg skal aldri glemme …', 'neutral', 2),
      P('Looking back, …', 'Når jeg ser tilbake, …', 'neutral', 3), P('Little did she know that …', 'Lite visste hun at …', 'neutral', 3),
      P('That day I {learnt|learned} that …', 'Den dagen lærte jeg at …', 'neutral', 3)
    ] }
  ];

  var practice = [
    { id: 's-open', type: 'mcq', level: [1, 2, 3], q: t('Which opening is stronger?', 'Hvilken åpning er sterkest?'),
      options: ['Once upon a time there was a girl called Hedda.', 'The note fell out of the book just as the bell rang.', 'Hi, my name is Hedda and I go to school.'], answer: 1,
      why: t('A surprise in the middle of the action makes the reader want to read on.', 'En overraskelse midt i handlingen gjør at leseren vil lese videre.') },
    { id: 's-show', type: 'mcq', level: [1, 2, 3], q: t('Which sentence SHOWS the feeling?', 'Hvilken setning VISER følelsen?'),
      options: ['She was scared.', 'Her hands were shaking, and she could hear her own heartbeat.', 'She felt very scared.'], answer: 1,
      why: t('The body and the senses show the fear.', 'Kroppen og sansene viser frykten.') },
    { id: 's-sort1', type: 'sort', level: [1, 2], q: t('Tell or show? Sort the sentences.', 'Fortelle eller vise? Sorter setningene.'),
      buckets: [t('Tell', 'Fortelle'), t('Show', 'Vise')],
      items: [
        { text: 'She was scared.', b: 0 }, { text: 'Her hands were shaking.', b: 1 }, { text: 'It was cold.', b: 0 },
        { text: 'My breath turned into white clouds.', b: 1 }, { text: 'He was angry.', b: 0 }, { text: 'He slammed the door so hard that the pictures rattled.', b: 1 }],
      why: t('"Show" sentences use actions, the body and the senses.', '«Vise»-setninger bruker handlinger, kroppen og sansene.') },
    { id: 's-dial1', type: 'mcq', level: [1, 2, 3], q: t('Which sentence is punctuated correctly?', 'Hvilken setning har riktig tegnsetting?'),
      options: ['"Let\'s go". she said.', '"Let\'s go," she said.', '"Let\'s go." she said.'], answer: 1,
      why: t('When the sentence continues after the quotation, we use a comma inside the quotation marks.', 'Når setningen fortsetter etter sitatet, bruker vi komma inni anførselstegnene.') },
    { id: 's-dial2', type: 'mcq', level: [2, 3], q: t('Which sentence is correct?', 'Hvilken setning er riktig?'),
      options: ['"Are you coming" he asked?', '"Are you coming?" he asked.', '"Are you coming?" He asked.'], answer: 1,
      why: t('The question mark goes inside the quotation marks, and the sentence continues with a small letter.', 'Spørsmålstegnet står inni anførselstegnene, og setningen fortsetter med liten bokstav.') },
    { id: 's-order', type: 'order', level: [1, 2], q: t('Put the five parts of the story curve in order.', 'Sett de fem delene av fortellingskurven i rekkefølge.'),
      items: ['Opening', 'Build-up', 'Climax', 'Resolution', 'Ending'],
      why: t('The excitement grows to the climax and then falls to the ending.', 'Spenningen bygger seg opp mot klimaks og faller så mot slutten.') },
    { id: 's-tense', type: 'mcq', level: [1, 2, 3], q: t('A story is almost always written in …', 'En fortelling skrives nesten alltid i …'),
      options: ['the past tense', 'the present tense', 'the future tense'], answer: 0,
      why: t('Do not change to the present tense in the middle of the story.', 'Ikke bytt til nåtid midt i fortellingen.') },
    { id: 's-gap1', type: 'gap', level: [1], q: t('Choose the correct form.', 'Velg riktig form.'),
      before: 'Hedda', after: 'the note from the floor.', options: ['picked up', 'pick up', 'picking up'], answer: 0,
      why: t('Stories use the past tense: "picked up".', 'Fortellinger bruker fortid: «picked up».') },
    { id: 's-end', type: 'mcq', level: [2, 3], q: t('In a "circle ending", the ending …', 'I en «sirkelslutt» …'),
      options: ['points back to the opening', 'is a big surprise', 'is a dream'], answer: 0,
      why: t('In the model story, Hedda goes back to the library and writes her own note.', 'I modellnovellen går Hedda tilbake til biblioteket og skriver sin egen lapp.') },
    { id: 's-sort2', type: 'sort', level: [2, 3], q: t('Quiet or loud? Sort the speech verbs.', 'Stille eller høyt? Sorter talverbene.'),
      buckets: [t('Quiet', 'Stille'), t('Loud', 'Høyt')],
      items: [{ text: 'whispered', b: 0 }, { text: 'shouted', b: 1 }, { text: 'muttered', b: 0 }, { text: 'screamed', b: 1 }, { text: 'sighed', b: 0 }, { text: 'yelled', b: 1 }],
      why: t('Different speech verbs tell the reader how something was said.', 'Ulike talverb forteller leseren hvordan noe ble sagt.') },
    { id: 's-better', type: 'mcq', level: [3], q: t('Which word is the best replacement for "walked" in a scary scene?', 'Hvilket ord er best å bruke i stedet for «walked» i en skummel scene?'),
      options: ['crept', 'went', 'moved'], answer: 0,
      why: t('"Crept" shows that the person is quiet and careful.', '«Crept» viser at personen er stille og forsiktig.') },
    { id: 's-dream', type: 'mcq', level: [2, 3], q: t('Why should you avoid ending with "… and then I woke up. It was all a dream."?', 'Hvorfor bør du unngå å avslutte med «… and then I woke up. It was all a dream.»?'),
      options: ['It feels like cheating to the reader', 'It is too long', 'It uses the wrong tense'], answer: 0,
      why: t('The reader has followed the story, and the dream ending takes the story away.', 'Leseren har fulgt historien, og drømmeslutten tar den bort.') }
  ];

  var checklist = [
    { group: t('Content and structure', 'Innhold og oppbygging'), items: [
      t('The title makes the reader curious, but does not give away the ending.', 'Tittelen vekker nysgjerrighet uten å avsløre slutten.'),
      t('The first sentence catches the reader.', 'Den første setningen fanger leseren.'),
      t('The reader learns who, where and when.', 'Leseren får vite hvem, hvor og når.'),
      t('The story has a problem, a climax and an ending.', 'Fortellingen har et problem, et høydepunkt og en avslutning.'),
      t('I start a new paragraph when the time, place, topic or speaker changes.', 'Jeg starter nytt avsnitt når tid, sted, tema eller person som snakker endrer seg.'),
      t('I show feelings instead of telling them (show, don\'t tell) in at least three places.', 'Jeg viser følelser i stedet for å fortelle dem (show, don\'t tell) minst tre steder.'),
      t('I have used the senses.', 'Jeg har brukt sansene.')] },
    { group: t('Language', 'Språk'), items: [
      t('The same tense all the way: past tense.', 'Samme tid hele veien: fortid.'),
      t('The same narrator all the way (I or he/she).', 'Samme forteller hele veien (I eller he/she).'),
      t('Dialogue: quotation marks, punctuation inside them and a new line for each new speaker.', 'Dialog: anførselstegn, tegnsetting inni dem og ny linje for hver ny person.'),
      t('I have varied my sentence starters and used time words (suddenly, later, in the end).', 'Jeg har variert setningsstartene og brukt tidsord (suddenly, later, in the end).'),
      t('I have replaced boring words (said, nice, good, very).', 'Jeg har byttet ut kjedelige ord (said, nice, good, very).'),
      t('British spelling: colour, favourite, recognise.', 'Britisk stavemåte: colour, favourite, recognise.'),
      t('I have read through the whole text one more time.', 'Jeg har lest gjennom hele teksten én gang til.')] }
  ];

  var resources = [
    { id: 'ndla-short-story', title: 'How to write a short story', publisher: 'NDLA (Engelsk 2)',
      url: 'https://ndla.no/r/engelsk-2/how-to-write-a-short-story/81f492f4d3', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('Basic guidelines for writing a short story, from a Norwegian open learning resource. Written for older students, so read it step by step.', 'Grunnleggende råd for å skrive en novelle, fra en norsk åpen læringsressurs. Skrevet for eldre elever, så les den steg for steg.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'ndla-short-stories', title: 'Short Stories and Novels', publisher: 'NDLA (Engelsk 1)',
      url: 'https://ndla.no/en/e/engelsk-1/short-stories-and-novels/cda782086f', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('Short stories to read. Reading good stories is the best way to learn how to write them.', 'Noveller du kan lese. Å lese gode noveller er den beste måten å lære å skrive dem på.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'bbc-fiction-writing', title: 'Fiction writing (KS3 English)', publisher: 'BBC Bitesize',
      url: 'https://www.bbc.co.uk/bitesize/topics/zj42m39', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('A topic page with guides on writing fiction. Made for UK pupils, so use it selectively.', 'En temaside med guider om å skrive fiksjon. Laget for britiske elever, så bruk den utvalgt.'),
      checked: '2026-11-16', license: 'BBC content, link only' }
  ];

  APP.modules.push({
    id: 'short-story', group: 'write', icon: 'book',
    title: t('Short story', 'Novelle'),
    blurb: t('Plan and write a short story with a start, a problem, a high point and an ending.', 'Planlegg og skriv en novelle med start, problem, høydepunkt og slutt.'),
    helps: t('You learn the parts of a short story and four tools that make it exciting: the story curve, strong openings and endings, show don\'t tell, and dialogue.', 'Du lærer delene i en novelle og fire verktøy som gjør den spennende: fortellingskurven, sterke åpninger og slutter, show don\'t tell og dialog.'),
    curriculum: ['K3', 'K4', 'K6', 'K9'],
    top5: [
      t('Plan five parts before you write: opening, build-up, climax, resolution and ending.', 'Planlegg fem deler før du skriver: åpning, oppbygging, klimaks, løsning og avslutning.'),
      t('Start in the middle of the action. Avoid "Once upon a time" and "Hi, my name is".', 'Start midt i handlingen. Unngå «Once upon a time» og «Hi, my name is».'),
      t('Show, don\'t tell: show feelings with actions, the body and the senses.', 'Show, don\'t tell: vis følelser med handlinger, kroppen og sansene.'),
      t('Dialogue: quotation marks, punctuation inside them, a new line for each speaker.', 'Dialog: anførselstegn, tegnsetting inni dem og ny linje for hver person som snakker.'),
      t('Choose one narrator and one tense, and keep to them (past tense).', 'Velg én forteller og én tid, og hold deg til dem (fortid).')
    ],
    keyRule: {
      title: t('Dialogue is different in English', 'Dialog er annerledes på engelsk'),
      lines: [
        t('Quotation marks and a comma inside: **"I\'m hungry," said Tom.**', 'Anførselstegn og komma inni: **"I\'m hungry," said Tom.**'),
        t('Question and exclamation marks go inside too: **"Are you coming?" he asked.**', 'Spørsmåls- og utropstegn står også inni: **"Are you coming?" he asked.**'),
        t('New line when a new person speaks.', 'Ny linje når en ny person snakker.')]
    },
    remember: t('In Norwegian we often use « » or a dash. In English we use quotation marks!', 'På norsk bruker vi ofte « » eller tankestrek. På engelsk bruker vi anførselstegn!'),
    explainers: [
      { id: 'choices', type: 'table', title: t('Two choices before you begin', 'To valg før du begynner'),
        intro: t('Make these two choices first, and keep to them all the way through the story.', 'Ta disse to valgene først, og hold deg til dem hele veien gjennom historien.'),
        head: [t('Choice', 'Valg'), t('What does it mean?', 'Hva betyr det?'), t('Example', 'Eksempel')],
        rows: [
          [t('Who tells the story?', 'Hvem forteller?'), t('An "I" narrator or a third-person narrator (he/she). Keep to the same narrator all the way.', 'Jeg-forteller (I) eller tredjepersonsforteller (he/she). Hold deg til samme forteller hele veien.'), 'I opened the door. / She opened the door.'],
          [t('Which tense?', 'Hvilken tid?'), t('Stories are almost always in the past tense. Do not change to the present tense in the middle.', 'Fortellinger skrives nesten alltid i fortid (past tense). Ikke bytt til nåtid midt i teksten.'), 'walked, said, was, ran, thought']] },
      { id: 'curve', type: 'stages', style: 'curve', model: 'note-library', title: t('The story curve', 'Fortellingskurven'),
        intro: t('A good story builds up excitement to a high point and then falls towards the end. Click a step.', 'En god fortelling bygger opp spenning mot et høydepunkt og faller så mot slutten. Klikk på et trinn.'),
        stages: [
          { label: t('Opening', 'Innledning'), part: 'opening', desc: t('We meet the main character and learn where and when. In the model: Hedda in the school library on a rainy day.', 'Vi møter hovedpersonen og får vite hvor og når. I modellen: Hedda i skolebiblioteket en regnværsdag.') },
          { label: t('Build-up', 'Oppbygging'), part: 'build-up', desc: t('A problem or mystery appears and the excitement grows. In the model: she finds a secret note.', 'Et problem eller mysterium dukker opp, og spenningen øker. I modellen: hun finner en hemmelig lapp.') },
          { label: t('Climax', 'Høydepunkt'), part: 'climax', desc: t('The most exciting moment. In the model: she meets the person who wrote the note.', 'Det mest spennende øyeblikket. I modellen: hun møter den som skrev lappen.') },
          { label: t('Resolution', 'Løsning'), part: 'resolution', desc: t('The problem is solved. In the model: they become friends.', 'Problemet blir løst. I modellen: de blir venner.') },
          { label: t('Ending', 'Avslutning'), part: 'ending', desc: t('The story is rounded off. In the model: Hedda writes her own note.', 'Fortellingen rundes av. I modellen: Hedda skriver sin egen lapp.') }] },
      { id: 'openings', type: 'table', title: t('Openings', 'Åpninger'),
        intro: t('The first sentence decides if the reader wants to read on. Start in the middle of the action. Avoid "Once upon a time …" (only for fairy tales) and "Hi, my name is …".', 'Den første setningen avgjør om leseren vil lese videre. Start gjerne midt i handlingen. Unngå «Once upon a time …» (passer bare i eventyr) og «Hi, my name is …».'),
        head: [t('Type', 'Type'), t('Example', 'Eksempel')],
        rows: [
          [t('Dialogue', 'Dialog'), '"Don\'t open that door!" {Mum|Mom} shouted.'],
          [t('Action', 'Handling'), 'I was running as fast as I could, but the footsteps behind me were getting closer.'],
          [t('Surprise', 'Overraskelse'), 'The note fell out of the book just as the bell rang.'],
          [t('Question', 'Spørsmål'), 'Have you ever done something you regretted the second you did it?'],
          [t('Setting and senses', 'Miljø og sanser'), 'The forest was silent, and the air smelled of wet moss and smoke.']] },
      { id: 'endings', type: 'table', title: t('Endings', 'Slutter'),
        intro: t('The ending is what the reader remembers best. It should feel finished, but not always happy. Avoid "… and then I woke up. It was all a dream."', 'Slutten er det leseren husker best. Den skal føles ferdig, men ikke nødvendigvis lykkelig. Unngå «… and then I woke up. It was all a dream.»'),
        head: [t('Type', 'Type'), t('Example', 'Eksempel')],
        rows: [
          [t('Circle ending', 'Sirkelslutt'), t('The end points back to the opening (see the model story).', 'Slutten peker tilbake til åpningen (se modellnovellen).')],
          [t('Twist', 'Overraskende vri'), 'When she turned around, the room was empty – but the chair was still rocking.'],
          [t('Reflection', 'Refleksjon'), 'That day I {learnt|learned} that being brave does not mean you are not scared.'],
          [t('Open ending', 'Åpen slutt'), 'She picked up the phone. It was ringing again.']] },
      { id: 'showtell', type: 'cards', title: t('Show, don\'t tell', 'Show, don\'t tell'),
        intro: t('Do not tell the reader how someone feels. Show it with actions, the body and the senses. What does the person see, hear, smell, taste and feel? One or two senses in each paragraph is enough. Click a card.', 'Ikke fortell leseren hvordan noen har det. Vis det med handlinger, kroppen og sansene. Hva ser, hører, lukter, smaker og kjenner personen? Ett eller to sanseinntrykk i hvert avsnitt er nok. Klikk på et kort.'),
        cards: [
          { tell: 'She was scared.', show: 'Her hands were shaking, and she could hear her own heartbeat.', nbTell: 'Hun var redd.', nbShow: 'Hendene hennes skalv, og hun kunne høre sitt eget hjerteslag.' },
          { tell: 'It was cold.', show: 'My breath turned into white clouds, and my fingers went numb.', nbTell: 'Det var kaldt.', nbShow: 'Pusten min ble til hvite skyer, og fingrene mine ble nummen.' },
          { tell: 'He was angry.', show: 'He slammed the door so hard that the pictures on the wall rattled.', nbTell: 'Han var sint.', nbShow: 'Han smalt døren så hardt igjen at bildene på veggen raslet.' },
          { tell: 'The room was messy.', show: 'Dirty socks covered the floor, and a half-eaten pizza lay on the bed.', nbTell: 'Rommet var rotete.', nbShow: 'Skitne sokker dekket gulvet, og en halvspist pizza lå på sengen.' }] },
      { id: 'dialogue', type: 'pairs', title: t('Dialogue rules', 'Dialogregler'),
        intro: t('English has other rules for dialogue than Norwegian. British English often uses single quotation marks (\'…\'), and American English uses double (\"…\"). Both are correct. Be consistent!', 'Engelsk har andre regler for dialog enn norsk. Britisk engelsk bruker ofte enkle anførselstegn (\'…\'), og amerikansk bruker doble (\"…\"). Begge er riktige. Vær konsekvent!'),
        pairs: [
          { bad: '– I\'m hungry, said Tom.', good: '"I\'m hungry," said Tom.', note: t('Use quotation marks, not a dash or « ».', 'Bruk anførselstegn, ikke tankestrek eller « ».') },
          { bad: '"Let\'s go". she said.', good: '"Let\'s go," she said.', note: t('A comma inside the quotation marks when the sentence continues.', 'Komma inni anførselstegnene når setningen fortsetter.') },
          { bad: '"Are you coming"? he asked.', good: '"Are you coming?" he asked.', note: t('The question mark goes inside. Continue with a small letter.', 'Spørsmålstegnet står inni. Fortsett med liten bokstav.') },
          { bad: 'She whispered "Don\'t move."', good: 'She whispered, "Don\'t move."', note: t('Speech verb first: a comma before, and a capital letter inside.', 'Talverbet først: komma før, og stor bokstav inni.') },
          { bad: '"Hi," said Tom. "Hi," said Mia.', good: '"Hi," said Tom.\n"Hi," said Mia.', note: t('A new line every time a new person speaks.', 'Ny linje hver gang en ny person snakker.') }] },
      { id: 'betterwords', type: 'table', title: t('Replace boring words', 'Bytt ut kjedelige ord'),
        intro: t('If you use the same words all the time, the text is boring to read. Choose words that describe better what happens, and the reader will see it more easily!', 'Hvis du bruker de samme ordene hele tiden, blir teksten kjedelig å lese. Velg ord som beskriver bedre det som skjer, så ser leseren det lettere!'),
        head: [t('Instead of …', 'I stedet for …'), t('Try …', 'Prøv …')],
        rows: [
          ['said', 'whispered, shouted, replied, muttered, sighed, laughed'],
          ['walked', 'crept, rushed, wandered, stumbled, marched'],
          ['looked', 'stared, glanced, peered, gazed'],
          ['nice / good', 'lovely, friendly, brilliant, amazing, delicious'],
          ['bad', 'awful, terrible, horrible, disappointing'],
          ['very big / very small', 'huge, enormous / tiny, minuscule'],
          ['scared', 'terrified, nervous, frightened']] }
    ],
    ukus: [
      { k: t('Spelling', 'Staving'), uk: 'recognised, colour, grey', us: 'recognized, color, gray' },
      { k: t('Quotation marks', 'Anførselstegn'), uk: '\'…\' (also "…")', us: '"…"' },
      { k: t('School food hall', 'Skolens spisesal'), uk: 'canteen', us: 'cafeteria' },
      { k: t('Around the corner', 'Rundt hjørnet'), uk: 'round the corner', us: 'around the corner' }
    ],
    models: [story],
    phraseBank: phraseBank,
    practice: practice,
    checklist: checklist,
    resources: resources,
    pending: []
  });
})();
