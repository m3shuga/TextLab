/* ==========================================================================
   MODULE: Argumentative text (five-paragraph essay)
   NEW content (not in the teacher booklets). Topic: "Should mobile phones be banned in schools?"
   The model essays cite REAL sources in APA 7th style. Every source and every claim was checked:
     - Utdanningsdirektoratet (2026): udir.no page "Anbefalinger om regulering av mobiler og private digitale enheter i skolen"
       (last changed 16.09.2026). Recommends strict regulation in 8th-10th grade lessons, phone-free breaks as a main rule;
       aims: fewer disturbances, stronger school environment, prevent bullying.
     - GEM Report UNESCO (2023): "Technology in education: A tool on whose terms?" (DOI 10.54676/uzqv8501).
       Says fewer than one in four countries ban smartphones in schools; technology use in class can be distracting.
     - Beland & Murphy (2016), Labour Economics, 41, 61-76 (DOI 10.1016/j.labeco.2016.04.004): exam results rose after phone bans,
       driven by the lowest-achieving students (abstract read on LSE Research Online).
     - Goodyear et al. (2025), The Lancet Regional Health - Europe, 51, Article 101211 (DOI 10.1016/j.lanepe.2025.101211):
       SMART Schools study, 30 English schools; restrictive policies not linked to better mental wellbeing.
   Bibliographic details verified through Crossref on 2026-11-16.
   ALL text is marked reviewed:false until the teacher approves it.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; };
  var s = function (part, text, nb, p) { return seg(part, text, nb, { p: p }); };      // sentence inside an inline paragraph
  var P = function (en, nb, reg, lvl, ex) { return { en: en, nb: nb, reg: reg, lvl: lvl, ex: ex || '' }; };
  var TITLE = { t: 1 };

  /* ---- the four real sources (APA 7th reference list entries) ---- */
  var REF = {
    beland: 'Beland, L.-P., & Murphy, R. (2016). Ill communication: Technology, distraction & student performance. *Labour Economics, 41*, 61–76. https://doi.org/10.1016/j.labeco.2016.04.004',
    gem: 'GEM Report UNESCO. (2023). *Global education monitoring report 2023: Technology in education: A tool on whose terms?* UNESCO. https://doi.org/10.54676/UZQV8501',
    goodyear: 'Goodyear, V. A., Randhawa, A., Adab, P., Al-Janabi, H., Fenton, S., Jones, K., Michail, M., Morrison, B., Patterson, P., Quinlan, J., Sitch, A., Twardochleb, R., Wade, M., & Pallan, M. (2025). School phone policies and their association with mental wellbeing, phone use, and social media use (SMART Schools): A cross-sectional observational study. *The Lancet Regional Health – Europe, 51*, Article 101211. https://doi.org/10.1016/j.lanepe.2025.101211',
    udir: 'Utdanningsdirektoratet. (2026, September 16). *Anbefalinger om regulering av mobiler og private digitale enheter i skolen* [Recommendations for regulating mobile phones and private digital devices in schools]. https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/anbefalinger-for-mobil-og-digitale-enheter-i-skolen/'
  };
  var refSeg = function (txt) { return seg('reference-list', txt, txt, { ref: 1 }); };
  var refHead = seg('reference-list', 'References', 'Kilder', { b: 1 });
  var C = {                                  // in-text citations (the full stop belongs after the bracket)
    udir: '(Utdanningsdirektoratet, 2026).', bm: '(Beland & Murphy, 2016).', gem: '(GEM Report UNESCO, 2023).', gd: '(Goodyear et al., 2025).'
  };
  var cit = function (c, p) { return seg('citation', c, c, { p: p }); };

  var essay = {
    id: 'phones-essay', kind: 'essay', register: 'formal',
    title: t('Should mobile phones be banned in schools?', 'Bør mobiltelefoner forbys på skolen?'),
    situation: t('You write an argumentative essay with the title "Should mobile phones be banned in schools?". You use real sources and show them in APA style.', 'Du skriver et argumenterende essay med tittelen «Should mobile phones be banned in schools?». Du bruker ekte kilder og viser dem i APA-stil.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('title', 'Phones Should Stay in the Bag', 'Telefoner bør bli i sekken', TITLE),
        s('hook', 'How often do you check your phone during a school day?', 'Hvor ofte sjekker du telefonen din i løpet av en skoledag?', 'i'),
        s('background', 'Almost every student has a smartphone, so schools must decide what to do with phones.', 'Nesten alle elever har en smarttelefon, så skolene må bestemme hva de skal gjøre med telefonene.', 'i'),
        s('thesis', 'I think mobile phones should be banned in lessons.', 'Jeg mener at mobiltelefoner bør forbys i timene.', 'i'),
        s('topic-sentence', 'First, phones make it hard to concentrate.', 'For det første gjør telefoner det vanskelig å konsentrere seg.', 'b1'),
        s('evidence', 'The Norwegian Directorate for Education and Training says that schools should have strict rules for phones, so that there are fewer disturbances in lessons', 'Utdanningsdirektoratet sier at skolene bør ha strenge regler for mobiler, slik at det blir færre forstyrrelser i timene', 'b1'),
        cit(C.udir, 'b1'),
        s('explanation', 'When nobody uses a phone, everyone can listen to the teacher and work.', 'Når ingen bruker telefon, kan alle høre på læreren og jobbe.', 'b1'),
        s('topic-sentence', 'Second, phones can cause problems between students.', 'For det andre kan telefoner skape problemer mellom elever.', 'b2'),
        s('evidence', 'The directorate also says that strict rules can help to stop bullying', 'Direktoratet sier også at strenge regler kan bidra til å stoppe mobbing', 'b2'),
        cit(C.udir, 'b2'),
        s('explanation', 'If nobody can take photos or send messages during the school day, there is less chance of hurtful {behaviour|behavior}.', 'Hvis ingen kan ta bilder eller sende meldinger i løpet av skoledagen, er det mindre sjanse for sårende oppførsel.', 'b2'),
        s('topic-sentence', 'Third, a school break without phones is good for friendships.', 'For det tredje er et friminutt uten telefon bra for vennskap.', 'b3'),
        s('evidence', 'The directorate says that, as a rule, schools for pupils in 8th to 10th grade should be phone-free in the breaks too', 'Direktoratet sier at skoler for elever på 8. til 10. trinn som hovedregel bør være mobilfrie også i friminuttene', 'b3'),
        cit(C.udir, 'b3'),
        s('explanation', 'In a phone-free break we talk, play and laugh together, and this helps us to make friends.', 'I et mobilfritt friminutt snakker, leker og ler vi sammen, og det hjelper oss å få venner.', 'b3'),
        s('restate', 'In conclusion, I think phones should not be used in lessons.', 'Avslutningsvis mener jeg at mobiler ikke bør brukes i timene.', 'c'),
        s('final-thought', 'A school day without phones can be a better day for everyone.', 'En skoledag uten mobiler kan bli en bedre dag for alle.', 'c'),
        refHead, refSeg(REF.udir)
      ] },
      2: { reviewed: false, segments: [
        seg('title', 'Phones Should Stay in the Bag', 'Telefoner bør bli i sekken', TITLE),
        s('hook', 'How often do you check your phone during a school day? Many students would say more often than they want to admit.', 'Hvor ofte sjekker du telefonen din i løpet av en skoledag? Mange elever ville sagt oftere enn de vil innrømme.', 'i'),
        s('background', 'Today almost every student has a smartphone, so schools have to decide what to do with it. In Norway, the Directorate for Education and Training recommends strict rules for phones in schools for 8th to 10th grade', 'I dag har nesten alle elever en smarttelefon, så skolene må bestemme hva de skal gjøre med den. I Norge anbefaler Utdanningsdirektoratet strenge regler for mobiler på skoler for 8. til 10. trinn', 'i'),
        cit(C.udir, 'i'),
        s('thesis', 'I believe that schools should ban mobile phones, except when a teacher allows them for learning.', 'Jeg mener at skolene bør forby mobiltelefoner, bortsett fra når en lærer tillater dem til læring.', 'i'),
        s('topic-sentence', 'First of all, phones make it difficult to concentrate.', 'Først og fremst gjør telefoner det vanskelig å konsentrere seg.', 'b1'),
        s('evidence', 'A study of English schools found that exam results improved after schools banned phones, and that the improvement was driven by the lowest-achieving students', 'En studie av engelske skoler fant at eksamensresultatene ble bedre etter at skolene forbød telefoner, og at forbedringen skyldtes de svakest presterende elevene', 'b1'),
        cit(C.bm, 'b1'),
        s('explanation', 'This shows that a ban can help the students who need help most.', 'Dette viser at et forbud kan hjelpe de elevene som trenger hjelp mest.', 'b1'),
        s('link', 'Therefore, a ban can give everyone a fairer chance to learn.', 'Derfor kan et forbud gi alle en mer rettferdig sjanse til å lære.', 'b1'),
        s('topic-sentence', 'Another reason is that phones can harm the school environment.', 'En annen grunn er at telefoner kan skade skolemiljøet.', 'b2'),
        s('evidence', 'The directorate says that strict rules lead to fewer disturbances in lessons and can help to prevent bullying', 'Direktoratet sier at strenge regler gir færre forstyrrelser i timene og kan bidra til å forebygge mobbing', 'b2'),
        cit(C.udir, 'b2'),
        s('explanation', 'If students cannot film or message each other during the school day, there is less chance of hurtful {behaviour|behavior}.', 'Hvis elever ikke kan filme eller sende meldinger til hverandre i løpet av skoledagen, er det mindre sjanse for sårende oppførsel.', 'b2'),
        s('link', 'As a result, school can become a calmer and safer place.', 'Som et resultat kan skolen bli et roligere og tryggere sted.', 'b2'),
        s('counter', 'Some people argue that a ban does not make students feel better.', 'Noen mener at et forbud ikke gjør elevene mer fornøyde.', 'b3'),
        s('evidence', 'A study of 30 English schools found no clear link between strict phone rules and better mental wellbeing', 'En studie av 30 engelske skoler fant ingen tydelig sammenheng mellom strenge mobilregler og bedre psykisk velvære', 'b3'),
        cit(C.gd, 'b3'),
        s('rebuttal', 'However, the main aim of a ban is to help learning and the school environment, not to solve every problem. Schools can also let students use phones when the teacher wants it for learning.', 'Men hovedmålet med et forbud er å hjelpe læring og skolemiljø, ikke å løse alle problemer. Skolene kan også la elevene bruke mobil når læreren ønsker det til læring.', 'b3'),
        s('restate', 'In conclusion, I believe that mobile phones should be banned in school unless they are used for learning.', 'Avslutningsvis mener jeg at mobiltelefoner bør forbys på skolen med mindre de brukes til læring.', 'c'),
        s('summary', 'A ban helps students to concentrate, protects the school environment and gives everyone a fairer chance to learn.', 'Et forbud hjelper elevene å konsentrere seg, beskytter skolemiljøet og gir alle en mer rettferdig sjanse til å lære.', 'c'),
        s('final-thought', 'If we put the phone away for a few hours, school may turn out to be better than we thought.', 'Hvis vi legger telefonen bort noen timer, kan det hende at skolen er bedre enn vi trodde.', 'c'),
        refHead, refSeg(REF.beland), refSeg(REF.goodyear), refSeg(REF.udir)
      ] },
      3: { reviewed: false, segments: [
        seg('title', 'Phones Should Stay in the Bag', 'Telefoner bør bli i sekken', TITLE),
        s('hook', 'Imagine a lesson in which nobody touches a phone for forty-five minutes. Is that realistic, or only a dream?', 'Se for deg en time der ingen rører en telefon på førtifem minutter. Er det realistisk, eller bare en drøm?', 'i'),
        s('background', 'Fewer than one in four countries ban smartphones in schools', 'Færre enn ett av fire land forbyr smarttelefoner på skolen', 'i'),
        cit(C.gem, 'i'),
        s('background', 'This means that most schools must decide for themselves. In Norway, the Directorate for Education and Training recommends strict regulation of phones in lessons in 8th to 10th grade', 'Dette betyr at de fleste skoler må bestemme selv. I Norge anbefaler Utdanningsdirektoratet streng regulering av mobiler i timene på 8. til 10. trinn', 'i'),
        cit(C.udir, 'i'),
        s('thesis', 'I strongly believe that schools should ban mobile phones, unless a teacher allows them for learning, because a ban improves concentration and creates a safer school environment.', 'Jeg mener sterkt at skolene bør forby mobiltelefoner, med mindre en lærer tillater dem til læring, fordi et forbud forbedrer konsentrasjonen og skaper et tryggere skolemiljø.', 'i'),
        s('topic-sentence', 'The strongest argument for a ban is that phones make it harder to concentrate.', 'Det sterkeste argumentet for et forbud er at telefoner gjør det vanskeligere å konsentrere seg.', 'b1'),
        s('evidence', 'The UNESCO report says that the use of technology in class can be distracting and can disrupt learning', 'UNESCO-rapporten sier at bruk av teknologi i timene kan virke forstyrrende og kan ødelegge læringen', 'b1'),
        cit(C.gem, 'b1'),
        s('evidence', 'In addition, a study of schools in four English cities found that exam results improved after phone bans, and that the improvement was driven by the lowest-achieving students', 'I tillegg fant en studie av skoler i fire engelske byer at eksamensresultatene ble bedre etter mobilforbud, og at forbedringen skyldtes de svakest presterende elevene', 'b1'),
        cit(C.bm, 'b1'),
        s('explanation', 'In other words, a phone-free classroom does not only help students to focus; it may also reduce the differences between strong and weak students.', 'Med andre ord hjelper et mobilfritt klasserom ikke bare elevene å fokusere; det kan også redusere forskjellene mellom sterke og svake elever.', 'b1'),
        s('link', 'For this reason, a ban supports both learning and fairness.', 'Av denne grunn støtter et forbud både læring og rettferdighet.', 'b1'),
        s('topic-sentence', 'A second reason is that strict phone rules create a calmer and safer school environment.', 'En annen grunn er at strenge mobilregler skaper et roligere og tryggere skolemiljø.', 'b2'),
        s('evidence', 'The Norwegian directorate argues that strict regulation leads to fewer disturbances in lessons, strengthens the school environment and helps to prevent bullying', 'Det norske direktoratet argumenterer for at streng regulering gir færre forstyrrelser i timene, styrker skolemiljøet og bidrar til å forebygge mobbing', 'b2'),
        cit(C.udir, 'b2'),
        s('explanation', 'When students cannot film, message or post during the school day, there are fewer opportunities for hurtful {behaviour|behavior}, and teachers can spend more time teaching.', 'Når elever ikke kan filme, sende meldinger eller legge ut noe i løpet av skoledagen, er det færre muligheter for sårende oppførsel, og lærerne kan bruke mer tid på å undervise.', 'b2'),
        s('link', 'Consequently, a ban is not only about exam results; it is also about how students treat each other.', 'Følgelig handler et forbud ikke bare om eksamensresultater; det handler også om hvordan elevene behandler hverandre.', 'b2'),
        s('counter', 'Critics argue that a ban does not improve students\' wellbeing, and there is some evidence for this.', 'Kritikere mener at et forbud ikke forbedrer elevenes velvære, og det finnes noe dokumentasjon for dette.', 'b3'),
        s('evidence', 'A study of 30 English schools found no clear difference in mental wellbeing between schools with strict phone rules and schools without them', 'En studie av 30 engelske skoler fant ingen tydelig forskjell i psykisk velvære mellom skoler med strenge mobilregler og skoler uten', 'b3'),
        cit(C.gd, 'b3'),
        s('rebuttal', 'Although this is an important point, it does not weaken the case for a ban. The purpose of a ban is to protect learning and the school environment, not to cure every problem in young people\'s lives. Moreover, schools can allow phones when they are useful for learning, so a ban does not have to be absolute.', 'Selv om dette er et viktig poeng, svekker det ikke argumentene for et forbud. Hensikten med et forbud er å beskytte læring og skolemiljø, ikke å kurere alle problemer i unges liv. Dessuten kan skoler tillate telefoner når de er nyttige for læring, så et forbud trenger ikke å være absolutt.', 'b3'),
        s('restate', 'To sum up, I am convinced that schools should ban mobile phones unless a teacher allows them for learning.', 'For å oppsummere er jeg overbevist om at skolene bør forby mobiltelefoner med mindre en lærer tillater dem til læring.', 'c'),
        s('summary', 'A ban supports concentration, helps weaker students and makes the school a safer place, even if it cannot solve every problem.', 'Et forbud støtter konsentrasjon, hjelper svakere elever og gjør skolen til et tryggere sted, selv om det ikke kan løse alle problemer.', 'c'),
        s('final-thought', 'If we can put our phones away for a few hours each day, we may discover that school is more interesting than we thought.', 'Hvis vi kan legge telefonene bort noen timer hver dag, kan vi oppdage at skolen er mer interessant enn vi trodde.', 'c'),
        refHead, refSeg(REF.beland), refSeg(REF.gem), refSeg(REF.goodyear), refSeg(REF.udir)
      ] }
    },
    parts: {
      'title': { n: 1, cat: 'format',
        name: t('Title', 'Tittel'),
        fn: t('A short, clear title tells the reader what the essay is about, and often shows your opinion.', 'En kort, tydelig tittel forteller leseren hva essayet handler om, og viser ofte meningen din.'),
        tips: [t('Keep it short. It can be a statement or a question.', 'Hold den kort. Den kan være en påstand eller et spørsmål.'), t('Use capital letters for the important words.', 'Bruk stor forbokstav på de viktige ordene.')],
        phrases: [],
        mistake: { bad: 'Essay about phones', good: 'Phones Should Stay in the Bag', note: t('A good title is more specific and has a point of view.', 'En god tittel er mer konkret og har et standpunkt.') } },
      'hook': { n: 2, cat: 'structure',
        name: t('Hook', 'Åpning som fanger'),
        fn: t('The hook catches the reader\'s interest in the first sentence.', 'Åpningen fanger leserens interesse i første setning.'),
        tips: [t('Use a question, a surprising fact or a short scene.', 'Bruk et spørsmål, et overraskende faktum eller en kort scene.'), t('Do not write "In this essay I will …".', 'Ikke skriv «In this essay I will …».')],
        phrases: ['Have you ever …?', 'Imagine …', 'Did you know that …?'],
        mistake: { bad: 'In this essay I will write about phones.', good: 'How often do you check your phone during a school day?', note: t('A question makes the reader think about the topic at once.', 'Et spørsmål får leseren til å tenke på temaet med en gang.') } },
      'background': { n: 3, cat: 'structure',
        name: t('Background', 'Bakgrunn'),
        fn: t('The background gives the reader the information needed to understand the topic.', 'Bakgrunnen gir leseren den informasjonen som trengs for å forstå temaet.'),
        tips: [t('Write one or two sentences. Say what the problem or the debate is.', 'Skriv én eller to setninger. Si hva problemet eller debatten er.'), t('Move from the big picture to your own point of view.', 'Gå fra det store bildet til ditt eget standpunkt.')],
        levelTips: { 3: [t('Start with a fact from a source, and say what it means for your topic.', 'Start med et faktum fra en kilde, og si hva det betyr for temaet ditt.')] },
        phrases: ['Today, …', 'More and more …', 'In Norway, …'],
        mistake: { bad: 'Phones are good and bad.', good: 'Almost every student has a smartphone, so schools must decide what to do with phones.', note: t('Explain the situation; do not only say "good and bad".', 'Forklar situasjonen; ikke bare si «bra og dårlig».') } },
      'thesis': { n: 4, cat: 'structure',
        name: t('Thesis statement', 'Tese'),
        fn: t('The thesis is your opinion in one clear sentence. Everything in the essay supports it.', 'Tesen er meningen din i én tydelig setning. Alt i essayet støtter den.'),
        tips: [t('Take a clear side. Do not write "I will write about …".', 'Ta et tydelig standpunkt. Ikke skriv «I will write about …».'), t('It is usually the last sentence of the introduction.', 'Den er vanligvis den siste setningen i innledningen.'), t('A strong thesis also gives a short reason.', 'En sterk tese gir også en kort grunn.')],
        phrases: ['I believe that …', 'In my opinion, …', 'I strongly believe that …'],
        mistake: { bad: 'I am going to write about phones in school.', good: 'I believe that schools should ban mobile phones, except when a teacher allows them for learning.', note: t('A thesis takes a side and can be argued for.', 'En tese tar side og kan argumenteres for.') } },
      'topic-sentence': { n: 5, cat: 'structure',
        name: t('Topic sentence (Point)', 'Emnesetning (påstand)'),
        fn: t('The topic sentence is the Point. It tells the reader what the paragraph is about: one reason for your opinion.', 'Emnesetningen er påstanden (Point). Den forteller leseren hva avsnittet handler om: én grunn til meningen din.'),
        tips: [t('One reason per paragraph.', 'Én grunn per avsnitt.'), t('Start with First, Second or Another reason.', 'Begynn med First, Second eller Another reason.'), t('Link it to your thesis.', 'Knytt den til tesen din.')],
        phrases: ['First of all, …', 'Another reason is that …', 'Finally, …'],
        mistake: { bad: 'Also phones.', good: 'Another reason is that phones can harm the school environment.', note: t('A topic sentence is a full sentence with a clear reason.', 'En emnesetning er en hel setning med en tydelig grunn.') } },
      'evidence': { n: 6, cat: 'structure',
        name: t('Evidence', 'Dokumentasjon'),
        fn: t('Evidence shows that your reason is true: a fact, a study or a statistic. It must come from a real source.', 'Dokumentasjon viser at grunnen din stemmer: et faktum, en studie eller en statistikk. Den må komme fra en ekte kilde.'),
        tips: [t('Use facts from reliable sources and say who found them.', 'Bruk fakta fra pålitelige kilder, og si hvem som fant dem.'), t('Write it in your own words (paraphrase).', 'Skriv det med egne ord (parafraser).'), t('Always add a citation.', 'Legg alltid til en kildehenvisning.')],
        phrases: ['A study found that …', 'According to …', 'The report says that …', 'For example, …'],
        mistake: { bad: 'Everybody knows that bans work.', good: 'A study of English schools found that exam results improved after schools banned phones (Beland & Murphy, 2016).', note: t('"Everybody knows" is not evidence. A source is.', '«Everybody knows» er ikke dokumentasjon. En kilde er det.') } },
      'citation': { n: 7, cat: 'format',
        name: t('In-text citation (APA)', 'Kildehenvisning i teksten (APA)'),
        fn: t('An in-text citation tells the reader where the information comes from. In APA 7th style it shows the author and the year in brackets.', 'En kildehenvisning i teksten forteller leseren hvor informasjonen kommer fra. I APA 7 viser den forfatter og år i parentes.'),
        tips: [t('Put (Author, Year) at the end of the sentence, and the full stop AFTER the bracket.', 'Sett (Forfatter, År) på slutten av setningen, og punktum ETTER parentesen.'), t('Two authors: use & inside the bracket (Beland & Murphy, 2016).', 'To forfattere: bruk & inni parentesen (Beland & Murphy, 2016).'), t('Three or more authors: write the first author and et al. (Goodyear et al., 2025).', 'Tre eller flere forfattere: skriv første forfatter og et al. (Goodyear et al., 2025).'), t('An organisation can be the author: (Utdanningsdirektoratet, 2026).', 'En organisasjon kan være forfatter: (Utdanningsdirektoratet, 2026).'), t('If the names are in the sentence, use "and": Beland and Murphy (2016) found …', 'Hvis navnene står i setningen, bruk «and»: Beland and Murphy (2016) found …')],
        phrases: ['(Beland & Murphy, 2016)', '(Goodyear et al., 2025)', '(GEM Report UNESCO, 2023)'],
        mistake: { bad: 'A study found this. (Beland and Murphy 2016)', good: 'A study found this (Beland & Murphy, 2016).', note: t('Use &, a comma before the year, and put the full stop after the bracket.', 'Bruk &, komma før året, og sett punktum etter parentesen.') } },
      'explanation': { n: 8, cat: 'structure',
        name: t('Explanation', 'Forklaring'),
        fn: t('The explanation says why the evidence matters for your reason. Do not only give facts: explain them.', 'Forklaringen sier hvorfor dokumentasjonen betyr noe for grunnen din. Ikke bare gi fakta: forklar dem.'),
        tips: [t('Connect the evidence to your point.', 'Knytt dokumentasjonen til påstanden din.'), t('Use: This shows that … / In other words, … / This means that …', 'Bruk: This shows that … / In other words, … / This means that …')],
        phrases: ['This shows that …', 'In other words, …', 'This means that …'],
        mistake: { bad: 'A study found this. Next reason.', good: 'This shows that a ban can help the students who need help most.', note: t('Without an explanation, the reader does not see why the fact matters.', 'Uten forklaring ser ikke leseren hvorfor faktaet betyr noe.') } },
      'link': { n: 9, cat: 'language',
        name: t('Link', 'Kobling'),
        fn: t('The link finishes the paragraph and connects it back to your thesis or on to the next paragraph.', 'Koblingen avslutter avsnittet og knytter det tilbake til tesen din eller videre til neste avsnitt.'),
        tips: [t('Use a linking word: Therefore, As a result, For this reason.', 'Bruk et bindeord: Therefore, As a result, For this reason.'), t('Keep it short: one sentence.', 'Hold den kort: én setning.')],
        phrases: ['Therefore, …', 'As a result, …', 'For this reason, …'],
        mistake: { bad: 'That is all about this.', good: 'Therefore, a ban can give everyone a fairer chance to learn.', note: t('The link shows why the paragraph supports your opinion.', 'Koblingen viser hvorfor avsnittet støtter meningen din.') } },
      'counter': { n: 10, cat: 'structure',
        name: t('Counter-argument', 'Motargument'),
        fn: t('The counter-argument shows what people on the other side think. It makes your essay fair and stronger.', 'Motargumentet viser hva de som mener noe annet tenker. Det gjør essayet ditt rettferdig og sterkere.'),
        tips: [t('Say what the other side thinks: Some people argue that …', 'Si hva den andre siden mener: Some people argue that …'), t('Choose a real argument, not a weak one.', 'Velg et ekte argument, ikke et svakt.'), t('If you can, support it with a source.', 'Hvis du kan, støtt det med en kilde.')],
        phrases: ['Some people argue that …', 'Critics say that …', 'It is true that …'],
        mistake: { bad: 'Some people are stupid and like phones.', good: 'Some people argue that a ban does not make students feel better.', note: t('Be fair to the other side. A polite counter-argument makes you more convincing.', 'Vær rettferdig mot den andre siden. Et høflig motargument gjør deg mer overbevisende.') } },
      'rebuttal': { n: 11, cat: 'structure',
        name: t('Rebuttal', 'Tilbakevisning'),
        fn: t('The rebuttal answers the counter-argument and explains why your opinion is still right.', 'Tilbakevisningen svarer på motargumentet og forklarer hvorfor meningen din fortsatt er riktig.'),
        tips: [t('Start with However, … or Although this is true, …', 'Begynn med However, … eller Although this is true, …'), t('Accept what is true, and then show the limit.', 'Godta det som er sant, og vis så grensen.')],
        phrases: ['However, …', 'Although this is true, …', 'This does not mean that …'],
        mistake: { bad: 'That is wrong.', good: 'However, the main aim of a ban is to help learning, not to solve every problem.', note: t('Answer with reasons, not with "wrong".', 'Svar med grunner, ikke med «feil».') } },
      'restate': { n: 12, cat: 'structure',
        name: t('Restate the thesis', 'Gjenta tesen'),
        fn: t('The conclusion starts by restating your thesis in new words. Do not copy it.', 'Avslutningen starter med å gjenta tesen med nye ord. Ikke kopier den.'),
        tips: [t('Start with In conclusion, … or To sum up, …', 'Begynn med In conclusion, … eller To sum up, …'), t('Use different words from the introduction.', 'Bruk andre ord enn i innledningen.')],
        phrases: ['In conclusion, …', 'To sum up, …', 'All in all, …'],
        mistake: { bad: 'I believe that schools should ban mobile phones, except when a teacher allows them for learning. (copied)', good: 'In conclusion, I believe that mobile phones should be banned in school unless they are used for learning.', note: t('Say it again, but with new words.', 'Si det igjen, men med nye ord.') } },
      'summary': { n: 13, cat: 'structure',
        name: t('Summary', 'Oppsummering'),
        fn: t('The summary repeats your main reasons in one sentence.', 'Oppsummeringen gjentar de viktigste grunnene dine i én setning.'),
        tips: [t('List your reasons in short form: A ban helps …, protects … and gives …', 'List grunnene dine kort: A ban helps …, protects … and gives …'), t('Do not add new evidence here.', 'Ikke legg til ny dokumentasjon her.')],
        phrases: ['A ban helps … and …', 'These reasons show that …'],
        mistake: { bad: 'Also, there is a new study about sleep.', good: 'A ban helps students to concentrate, protects the school environment and gives everyone a fairer chance to learn.', note: t('The conclusion has no new ideas.', 'Avslutningen har ingen nye ideer.') } },
      'final-thought': { n: 14, cat: 'language',
        name: t('Final thought', 'Siste tanke'),
        fn: t('The final thought leaves the reader with something to think about. It is not a new argument.', 'Den siste tanken gir leseren noe å tenke på. Det er ikke et nytt argument.'),
        tips: [t('Look ahead, ask a question or give a hope.', 'Se framover, still et spørsmål eller gi et håp.'), t('Keep it to one sentence.', 'Hold den til én setning.')],
        phrases: ['If we …, we may …', 'Perhaps the real question is …'],
        mistake: { bad: 'That is my essay. Thanks for reading.', good: 'If we put the phone away for a few hours, school may turn out to be better than we thought.', note: t('End with a thought, not with "thanks".', 'Avslutt med en tanke, ikke med «takk».') } },
      'reference-list': { n: 15, cat: 'format',
        name: t('Reference list (APA)', 'Kildeliste (APA)'),
        fn: t('The reference list shows every source you cited, so that the reader can find them.', 'Kildelisten viser hver kilde du har henvist til, slik at leseren kan finne dem.'),
        tips: [t('Write the heading "References". Put the sources in alphabetical order.', 'Skriv overskriften «References». Sett kildene i alfabetisk rekkefølge.'), t('Hanging indent: the second line of each source is indented.', 'Hengende innrykk: andre linje i hver kilde rykkes inn.'), t('Use italics for the title of a report, a web page or a journal.', 'Bruk kursiv på tittelen på en rapport, en nettside eller et tidsskrift.'), t('End with a DOI or a web address.', 'Avslutt med en DOI eller en nettadresse.'), t('Norwegian source: keep the Norwegian title and add an English translation in [square brackets].', 'Norsk kilde: behold den norske tittelen og legg til en engelsk oversettelse i [hakeparentes].')],
        phrases: [],
        mistake: { bad: 'Beland and Murphy, 2016, Ill communication, Labour Economics', good: 'Beland, L.-P., & Murphy, R. (2016). Ill communication: Technology, distraction & student performance. *Labour Economics, 41*, 61–76. https://doi.org/10.1016/j.labeco.2016.04.004', note: t('A reference follows a fixed order: author, year, title, source, link.', 'En kilde følger en fast rekkefølge: forfatter, år, tittel, kilde, lenke.') } }
    }
  };

  var phraseBank = [
    { group: t('Adding ideas', 'Å legge til ideer'), items: [
      P('also', 'også', 'neutral', 1), P('and', 'og', 'neutral', 1), P('in addition', 'i tillegg', 'formal', 2, 'In addition, phones can disturb other students.'),
      P('as well as', 'i tillegg til', 'neutral', 2), P('furthermore', 'videre / dessuten', 'formal', 3), P('moreover', 'dessuten', 'formal', 3), P('what is more', 'dessuten / enda viktigere', 'formal', 3)
    ] },
    { group: t('Contrasting ideas', 'Å vise motsetninger'), items: [
      P('but', 'men', 'neutral', 1), P('however', 'imidlertid', 'formal', 2, 'Phones are useful. However, they can distract students.'),
      P('on the other hand', 'på den annen side', 'formal', 2), P('although', 'selv om', 'neutral', 2, 'Although phones are useful, they can distract students.'),
      P('whereas', 'mens', 'formal', 3), P('despite', 'til tross for', 'formal', 3), P('in contrast', 'derimot', 'formal', 3)
    ] },
    { group: t('Giving reasons', 'Å gi grunner'), items: [
      P('because', 'fordi', 'neutral', 1), P('since', 'siden / fordi', 'neutral', 2), P('as', 'siden', 'neutral', 2),
      P('due to', 'på grunn av', 'formal', 2, 'Due to the phones, the lesson was noisy.'), P('owing to', 'på grunn av', 'formal', 3)
    ] },
    { group: t('Showing results', 'Å vise resultater'), items: [
      P('so', 'så', 'neutral', 1), P('therefore', 'derfor', 'formal', 2, 'Therefore, a ban can help everyone.'), P('as a result', 'som et resultat', 'formal', 2),
      P('consequently', 'følgelig', 'formal', 3), P('for this reason', 'av denne grunn', 'formal', 2), P('thus', 'dermed', 'formal', 3)
    ] },
    { group: t('Giving examples', 'Å gi eksempler'), items: [
      P('for example', 'for eksempel', 'neutral', 1, 'For example, students can send messages in class.'), P('for instance', 'for eksempel', 'neutral', 2),
      P('such as', 'slik som', 'neutral', 2), P('in particular', 'spesielt', 'formal', 3)
    ] },
    { group: t('Putting ideas in order', 'Å sette ideer i rekkefølge'), items: [
      P('first', 'for det første', 'neutral', 1), P('second', 'for det andre', 'neutral', 1), P('finally', 'til slutt', 'neutral', 1),
      P('first of all', 'først og fremst', 'neutral', 2), P('another reason is that …', 'en annen grunn er at …', 'neutral', 2), P('last but not least', 'sist, men ikke minst', 'neutral', 3)
    ] },
    { group: t('Giving your opinion', 'Å gi din mening'), items: [
      P('I think that …', 'jeg mener at …', 'neutral', 1), P('in my opinion', 'etter min mening', 'neutral', 1), P('I believe that …', 'jeg tror / mener at …', 'neutral', 2),
      P('from my point of view', 'fra mitt ståsted', 'neutral', 2), P('I strongly believe that …', 'jeg mener sterkt at …', 'formal', 3), P('I am convinced that …', 'jeg er overbevist om at …', 'formal', 3)
    ] },
    { group: t('Showing the other side', 'Å vise den andre siden'), items: [
      P('some people argue that …', 'noen hevder at …', 'neutral', 2), P('it is true that …', 'det er sant at …', 'neutral', 2),
      P('critics say that …', 'kritikere sier at …', 'formal', 3), P('admittedly, …', 'riktignok, …', 'formal', 3), P('even though …', 'selv om …', 'neutral', 2)
    ] },
    { group: t('Concluding', 'Å avslutte'), items: [
      P('in conclusion', 'avslutningsvis', 'neutral', 1), P('to sum up', 'for å oppsummere', 'neutral', 2), P('all in all', 'alt i alt', 'neutral', 2),
      P('overall', 'totalt sett', 'neutral', 3), P('in short', 'kort sagt', 'neutral', 2)
    ] },
    { group: t('Introducing evidence', 'Å innføre dokumentasjon'), items: [
      P('a study found that …', 'en studie fant at …', 'formal', 2), P('according to …', 'ifølge …', 'neutral', 2), P('the report says that …', 'rapporten sier at …', 'neutral', 2),
      P('research shows that …', 'forskning viser at …', 'formal', 3), P('for example, …', 'for eksempel, …', 'neutral', 1)
    ] }
  ];

  var practice = [
    { id: 'a-thesis', type: 'mcq', level: [1, 2, 3], q: t('Which is the strongest thesis statement?', 'Hvilken tese er sterkest?'),
      options: ['I am going to write about phones in school.', 'Phones are good and bad.', 'I believe that schools should ban mobile phones, except when a teacher allows them for learning.'], answer: 2,
      why: t('A strong thesis takes a clear side and can be argued for.', 'En sterk tese tar et tydelig standpunkt og kan argumenteres for.') },
    { id: 'a-sort', type: 'sort', level: [1, 2], q: t('Which part of the essay is it? Sort the sentences.', 'Hvilken del av essayet er det? Sorter setningene.'),
      buckets: [t('Hook', 'Åpning som fanger'), t('Thesis', 'Tese'), t('Topic sentence', 'Emnesetning'), t('Conclusion', 'Avslutning')],
      items: [
        { text: 'How often do you check your phone during a school day?', b: 0 }, { text: 'I think mobile phones should be banned in lessons.', b: 1 },
        { text: 'First, phones make it hard to concentrate.', b: 2 }, { text: 'In conclusion, I think phones should not be used in lessons.', b: 3 }],
      why: t('The hook starts the essay, the thesis gives your opinion, a topic sentence starts a body paragraph and the conclusion ends it.', 'Åpningen starter essayet, tesen gir meningen din, en emnesetning starter et hovedavsnitt, og avslutningen slutter det.') },
    { id: 'a-link1', type: 'mcq', level: [1, 2, 3], q: t('Which word shows a contrast?', 'Hvilket ord viser en motsetning?'),
      options: ['however', 'therefore', 'for example'], answer: 0,
      why: t('"However" shows that the next idea is different. "Therefore" shows a result, and "for example" gives an example.', '«However» viser at neste idé er annerledes. «Therefore» viser et resultat, og «for example» gir et eksempel.') },
    { id: 'a-gap1', type: 'gap', level: [1], q: t('Choose the best word.', 'Velg det beste ordet.'),
      before: '', after: ', phones make it hard to concentrate.', options: ['First', 'Therefore', 'However'], answer: 0,
      why: t('"First" starts the first reason.', '«First» starter den første grunnen.') },
    { id: 'a-gap2', type: 'gap', level: [2, 3], q: t('Choose the best linking word.', 'Velg det beste bindeordet.'),
      before: 'Phones are useful in some lessons.', after: ', they can also distract students.', options: ['However', 'Therefore', 'Because'], answer: 0,
      why: t('The second sentence is a contrast.', 'Den andre setningen er en motsetning.') },
    { id: 'a-peel', type: 'order', level: [2, 3], q: t('Put the parts of a body paragraph (PEEL) in order.', 'Sett delene av et hovedavsnitt (PEEL) i rekkefølge.'),
      items: ['Point (topic sentence)', 'Evidence', 'Explanation', 'Link'],
      why: t('Point, Evidence, Explanation, Link.', 'Point, Evidence, Explanation, Link.') },
    { id: 'a-apa1', type: 'mcq', level: [2, 3], q: t('Which in-text citation is correct for a study by Beland and Murphy from 2016?', 'Hvilken kildehenvisning er riktig for en studie av Beland og Murphy fra 2016?'),
      options: ['(Beland and Murphy 2016)', '(Beland & Murphy, 2016)', '(Beland & Murphy 2016)'], answer: 1,
      why: t('In APA style we use & between two authors inside the bracket, and a comma before the year.', 'I APA-stil bruker vi & mellom to forfattere inni parentesen, og komma før året.') },
    { id: 'a-apa2', type: 'mcq', level: [2, 3], q: t('How do you cite a study with more than two authors (Goodyear and 13 others, 2025)?', 'Hvordan henviser du til en studie med flere enn to forfattere (Goodyear og 13 andre, 2025)?'),
      options: ['(Goodyear et al., 2025)', '(Goodyear, Randhawa, Adab, 2025)', '(Goodyear and others 2025)'], answer: 0,
      why: t('With three or more authors we write the first author and "et al.".', 'Med tre eller flere forfattere skriver vi første forfatter og «et al.».') },
    { id: 'a-apa3', type: 'mcq', level: [2, 3], q: t('Where does the full stop go when a sentence ends with a citation?', 'Hvor står punktumet når en setning slutter med en kildehenvisning?'),
      options: ['Before the bracket', 'After the bracket', 'There is no full stop'], answer: 1,
      why: t('The citation belongs to the sentence, so the full stop comes after the bracket.', 'Henvisningen hører til setningen, så punktumet kommer etter parentesen.') },
    { id: 'a-sort2', type: 'sort', level: [2, 3], q: t('Where does it belong? In the text, or in the reference list?', 'Hvor hører det hjemme? I teksten, eller i kildelisten?'),
      buckets: [t('In the text', 'I teksten'), t('In the reference list', 'I kildelisten')],
      items: [
        { text: '(Goodyear et al., 2025)', b: 0 }, { text: 'Beland, L.-P., & Murphy, R. (2016). Ill communication: Technology, distraction & student performance. *Labour Economics, 41*, 61–76.', b: 1 },
        { text: '(Utdanningsdirektoratet, 2026)', b: 0 }, { text: 'GEM Report UNESCO. (2023). *Global education monitoring report 2023: Technology in education: A tool on whose terms?* UNESCO.', b: 1 }],
      why: t('Short citations go in the text. Full details go in the reference list at the end.', 'Korte henvisninger står i teksten. Alle detaljene står i kildelisten til slutt.') },
    { id: 'a-ref', type: 'mcq', level: [2, 3], q: t('In which order do you put the sources in the reference list?', 'I hvilken rekkefølge setter du kildene i kildelisten?'),
      options: ['In the order you used them', 'In alphabetical order by author', 'From newest to oldest'], answer: 1,
      why: t('APA reference lists are in alphabetical order.', 'APA-kildelister står i alfabetisk rekkefølge.') },
    { id: 'a-counter', type: 'mcq', level: [1, 2, 3], q: t('Which phrase starts a counter-argument?', 'Hvilken frase starter et motargument?'),
      options: ['Some people argue that …', 'In conclusion, …', 'For example, …'], answer: 0,
      why: t('A counter-argument shows what the other side thinks.', 'Et motargument viser hva den andre siden mener.') },
    { id: 'a-evid', type: 'mcq', level: [1, 2, 3], q: t('Which sentence is the best evidence?', 'Hvilken setning er den beste dokumentasjonen?'),
      options: ['Everybody knows that bans work.', 'I once saw a boy with a phone.', 'A study of English schools found that exam results improved after schools banned phones (Beland & Murphy, 2016).'], answer: 2,
      why: t('Evidence comes from a real source and is shown with a citation.', 'Dokumentasjon kommer fra en ekte kilde og vises med en kildehenvisning.') },
    { id: 'a-final', type: 'mcq', level: [3], q: t('Which sentence is a good final thought?', 'Hvilken setning er en god siste tanke?'),
      options: ['Also, there is a new study about sleep.', 'If we put our phones away for a few hours, we may discover that school is more interesting than we thought.', 'That is all. Thank you for reading.'], answer: 1,
      why: t('A final thought gives the reader something to think about; it does not add a new argument.', 'En siste tanke gir leseren noe å tenke på; den legger ikke til et nytt argument.') }
  ];

  var checklist = [
    { group: t('Content and structure', 'Innhold og oppbygging'), items: [
      t('My title is short and shows my point of view.', 'Tittelen min er kort og viser standpunktet mitt.'),
      t('The introduction has a hook, background and a clear thesis.', 'Innledningen har en åpning som fanger, bakgrunn og en tydelig tese.'),
      t('Each body paragraph has one reason (topic sentence), evidence, an explanation and a link.', 'Hvert hovedavsnitt har én grunn (emnesetning), dokumentasjon, en forklaring og en kobling.'),
      t('My evidence comes from real, reliable sources.', 'Dokumentasjonen min kommer fra ekte, pålitelige kilder.'),
      t('I show the other side (counter-argument) and answer it (rebuttal).', 'Jeg viser den andre siden (motargument) og svarer på den (tilbakevisning).'),
      t('The conclusion restates my thesis in new words, summarises my reasons and has no new ideas.', 'Avslutningen gjentar tesen med nye ord, oppsummerer grunnene mine og har ingen nye ideer.')] },
    { group: t('Language and sources', 'Språk og kilder'), items: [
      t('I have used linking words (first, however, therefore, in conclusion).', 'Jeg har brukt bindeord (first, however, therefore, in conclusion).'),
      t('Formal style: no contractions, no slang.', 'Formell stil: ingen sammentrekninger, ingen slang.'),
      t('Every in-text citation is in APA style: (Author, Year), with the full stop after the bracket.', 'Hver kildehenvisning i teksten er i APA-stil: (Forfatter, År), med punktum etter parentesen.'),
      t('Every citation is in the reference list, and every source in the list is cited in the text.', 'Hver henvisning står i kildelisten, og hver kilde i listen er henvist til i teksten.'),
      t('The reference list is in alphabetical order, with italics for titles and a DOI or web address.', 'Kildelisten står i alfabetisk rekkefølge, med kursiv på titler og en DOI eller nettadresse.'),
      t('British spelling: behaviour, organise, recognise.', 'Britisk stavemåte: behaviour, organise, recognise.'),
      t('I have read through the whole text one more time.', 'Jeg har lest gjennom hele teksten én gang til.')] }
  ];

  var resources = [
    { id: 'src-udir', title: 'Anbefalinger om regulering av mobiler og private digitale enheter i skolen', publisher: 'Utdanningsdirektoratet (Udir)',
      url: 'https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/anbefalinger-for-mobil-og-digitale-enheter-i-skolen/', type: 'article', lang: 'nb', level: '–',
      why: t('A real source from the model essay: the national recommendation for schools. In Norwegian. Read the part for "Ungdomsskolen" (8th–10th grade).', 'En ekte kilde fra modellessayet: den nasjonale anbefalingen til skolene. På norsk. Les delen for «Ungdomsskolen» (8.–10. trinn).'),
      checked: '2026-11-16', license: 'Udir, link only' },
    { id: 'src-gem', title: 'Technology in education: A tool on whose terms? (2023 GEM Report)', publisher: 'UNESCO Global Education Monitoring Report',
      url: 'https://gem-report-2023.unesco.org/technology-in-education/', type: 'article', lang: 'en', level: 'B2',
      why: t('A real source from the model essay (Level 3). A long report for adults, so use the summary and look for the part about phones.', 'En ekte kilde fra modellessayet (nivå 3). En lang rapport for voksne, så bruk sammendraget og se etter delen om telefoner.'),
      checked: '2026-11-16', license: 'UNESCO, link only' },
    { id: 'src-lse', title: 'Ill communication: technology, distraction & student performance (working paper, free)', publisher: 'LSE Research Online (Beland & Murphy)',
      url: 'https://researchonline.lse.ac.uk/id/eprint/62574', type: 'article', lang: 'en', level: 'B2',
      why: t('The free earlier version of the Beland and Murphy study used in the essay. Read the abstract (the short summary at the top).', 'Den gratis, tidligere versjonen av Beland og Murphy-studien som brukes i essayet. Les abstractet (det korte sammendraget øverst).'),
      checked: '2026-11-16', license: 'LSE, link only' },
    { id: 'purdue-argument', title: 'Argumentative Essays', publisher: 'Purdue Online Writing Lab (OWL)',
      url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html', type: 'article', lang: 'en', level: 'B2',
      why: t('A well-known university guide to argumentative essays. It is written for college students, so read it slowly.', 'En kjent universitetsguide til argumenterende essays. Den er skrevet for studenter, så les den sakte.'),
      checked: '2026-11-16', license: 'Purdue OWL, link only' },
    { id: 'purdue-argpapers', title: 'Argument Papers', publisher: 'Purdue Online Writing Lab (OWL)',
      url: 'https://owl.purdue.edu/owl/general_writing/common_writing_assignments/argument_papers/index.html', type: 'article', lang: 'en', level: 'B2',
      why: t('Guides to introductions, body paragraphs and conclusions for an argument. College level.', 'Guider til innledninger, hovedavsnitt og avslutninger i et argument. Studentnivå.'),
      checked: '2026-11-16', license: 'Purdue OWL, link only' },
    { id: 'ndla-body', title: 'Tasks: Writing Body Paragraphs', publisher: 'NDLA (Engelsk 1)',
      url: 'https://ndla.no/r/engelsk-1/tasks-writing-body-paragraphs/6c8cb5511d', type: 'exercise', lang: 'en', level: 'B1',
      why: t('Tasks where you can practise writing body paragraphs. From a Norwegian open learning resource.', 'Oppgaver der du kan øve på å skrive hovedavsnitt. Fra en norsk åpen læringsressurs.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'ndla-sample', title: 'Tasks: Sample Five Paragraph Essay', publisher: 'NDLA (Engelsk 1)',
      url: 'https://ndla.no/r/engelsk-1/tasks-sample-five-paragraph-essay/537edb2649', type: 'exercise', lang: 'en', level: 'B1',
      why: t('A sample five-paragraph essay with tasks about structure. From a Norwegian open learning resource.', 'Et eksempel på et femavsnitts essay med oppgaver om oppbygging. Fra en norsk åpen læringsressurs.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'bbc-nonfiction-a', title: 'Non-fiction writing (KS3 English)', publisher: 'BBC Bitesize',
      url: 'https://www.bbc.co.uk/bitesize/topics/zv7fqp3', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('Guides on persuasion, building an argument and linking ideas. Made for UK pupils, so use it selectively.', 'Guider om overtalelse, å bygge et argument og å binde sammen ideer. Laget for britiske elever, så bruk den utvalgt.'),
      checked: '2026-11-16', license: 'BBC content, link only' }
  ];

  var pending = [
    { title: 'How to Write an Argumentative Essay with Example (video, 3 min)', publisher: 'Literacy In Focus (YouTube)', url: 'https://www.youtube.com/watch?v=VZKUeEBryOk', note: 'The video exists (title checked), but it is from a small channel and I have not judged its quality. Watch it before adding it.' },
    { title: 'Goodyear et al. (2025) in The Lancet Regional Health – Europe', publisher: 'Elsevier (open access)', url: 'https://doi.org/10.1016/j.lanepe.2025.101211', note: 'DOI and details verified through Crossref. The page itself could not be opened from the build environment.' },
    { title: 'Beland & Murphy (2016) in Labour Economics', publisher: 'Elsevier', url: 'https://doi.org/10.1016/j.labeco.2016.04.004', note: 'DOI and details verified through Crossref. The journal page may need a subscription; the free working paper is linked above.' }
  ];

  APP.modules.push({
    id: 'argumentative', group: 'write', icon: 'star',
    title: t('Argumentative text', 'Argumenterende tekst'),
    blurb: t('Argue for your opinion in a five-paragraph essay with reasons, evidence and sources.', 'Argumenter for meningen din i et femavsnitts essay med grunner, dokumentasjon og kilder.'),
    helps: t('You learn how to build an argument with an opinion, reasons, evidence and a conclusion, and how to show your sources in APA style.', 'Du lærer å bygge et argument med en mening, grunner, dokumentasjon og en avslutning, og å vise kildene dine i APA-stil.'),
    curriculum: ['K3', 'K5', 'K6', 'K7'],
    top5: [
      t('Choose a clear opinion (your thesis) and write it at the end of the introduction.', 'Velg en tydelig mening (tesen din) og skriv den på slutten av innledningen.'),
      t('Give three reasons. Each body paragraph has one reason.', 'Gi tre grunner. Hvert hovedavsnitt har én grunn.'),
      t('Support each reason with evidence from a real source, and show the source (APA).', 'Støtt hver grunn med dokumentasjon fra en ekte kilde, og vis kilden (APA).'),
      t('Show the other side (counter-argument) and answer it (rebuttal).', 'Vis den andre siden (motargument) og svar på den (tilbakevisning).'),
      t('Use linking words to guide the reader. End with a conclusion, not a new idea.', 'Bruk bindeord for å lede leseren. Avslutt med en konklusjon, ikke en ny idé.')
    ],
    keyRule: {
      title: t('PEEL: the body paragraph recipe', 'PEEL: oppskriften på et hovedavsnitt'),
      lines: [
        t('**P**oint: the topic sentence (one reason)', '**P**oint: emnesetningen (én grunn)'),
        t('**E**vidence: a fact from a source, with a citation', '**E**vidence: et faktum fra en kilde, med kildehenvisning'),
        t('**E**xplanation: why the evidence matters', '**E**xplanation: hvorfor dokumentasjonen betyr noe'),
        t('**L**ink: back to your thesis', '**L**ink: tilbake til tesen din')]
    },
    remember: t('Every claim needs a reason, and every fact needs a source!', 'Hver påstand trenger en grunn, og hvert faktum trenger en kilde!'),
    explainers: [
      { id: 'skeleton', type: 'stages', style: 'blocks', model: 'phones-essay', title: t('The essay skeleton', 'Essay-skjelettet'),
        intro: t('A five-paragraph essay has an introduction, three body paragraphs and a conclusion. Click a part to read about it and to see it in the model essay. (It is one good structure, but not the only one.)', 'Et femavsnitts essay har en innledning, tre hovedavsnitt og en avslutning. Klikk på en del for å lese om den og se den i modellessayet. (Det er én god oppbygging, men ikke den eneste.)'),
        rows: [
          { label: t('1. Introduction', '1. Innledning'), items: [
            { label: t('Hook', 'Åpning som fanger'), part: 'hook', desc: t('A question, a surprising fact or a short scene that catches the reader.', 'Et spørsmål, et overraskende faktum eller en kort scene som fanger leseren.') },
            { label: t('Background', 'Bakgrunn'), part: 'background', desc: t('One or two sentences that explain the topic.', 'Én eller to setninger som forklarer temaet.') },
            { label: t('Thesis', 'Tese'), part: 'thesis', desc: t('Your opinion in one clear sentence.', 'Meningen din i én tydelig setning.') }] },
          { label: t('2. Body 1', '2. Hovedavsnitt 1'), items: [
            { label: t('Topic sentence', 'Emnesetning'), part: 'topic-sentence', desc: t('Reason number one.', 'Grunn nummer én.') },
            { label: t('Evidence + citation', 'Dokumentasjon + henvisning'), part: 'evidence', desc: t('A fact from a source, shown with an APA citation.', 'Et faktum fra en kilde, vist med en APA-henvisning.') },
            { label: t('Explanation', 'Forklaring'), part: 'explanation', desc: t('Why the evidence matters.', 'Hvorfor dokumentasjonen betyr noe.') },
            { label: t('Link', 'Kobling'), part: 'link', desc: t('Back to the thesis.', 'Tilbake til tesen.') }] },
          { label: t('3. Body 2', '3. Hovedavsnitt 2'), items: [
            { label: t('Same pattern (PEEL)', 'Samme mønster (PEEL)'), part: 'topic-sentence', desc: t('Reason number two, with its own evidence, explanation and link.', 'Grunn nummer to, med egen dokumentasjon, forklaring og kobling.') }] },
          { label: t('4. Body 3', '4. Hovedavsnitt 3'), items: [
            { label: t('Counter-argument', 'Motargument'), part: 'counter', desc: t('What the other side thinks, ideally with a source.', 'Hva den andre siden mener, helst med en kilde.') },
            { label: t('Rebuttal', 'Tilbakevisning'), part: 'rebuttal', desc: t('Why your opinion is still right.', 'Hvorfor meningen din fortsatt er riktig.') }] },
          { label: t('5. Conclusion', '5. Avslutning'), items: [
            { label: t('Restate thesis', 'Gjenta tesen'), part: 'restate', desc: t('Say your opinion again with new words.', 'Si meningen din igjen med nye ord.') },
            { label: t('Summary', 'Oppsummering'), part: 'summary', desc: t('Your main reasons in one sentence.', 'De viktigste grunnene dine i én setning.') },
            { label: t('Final thought', 'Siste tanke'), part: 'final-thought', desc: t('Something for the reader to think about.', 'Noe leseren kan tenke på.') }] },
          { label: t('End', 'Slutt'), items: [
            { label: t('Reference list', 'Kildeliste'), part: 'reference-list', desc: t('All the sources you cited, in alphabetical order (APA).', 'Alle kildene du har henvist til, i alfabetisk rekkefølge (APA).') }] }
        ] },
      { id: 'thesis-pairs', type: 'pairs', title: t('Strong or weak thesis?', 'Sterk eller svak tese?'),
        intro: t('A thesis takes a clear side and gives a short reason.', 'En tese tar et tydelig standpunkt og gir en kort grunn.'),
        pairs: [
          { bad: 'I am going to write about phones in school.', good: 'Schools should ban mobile phones during lessons, because phones make it harder to concentrate.', note: t('Weak: it only names the topic. Strong: it gives an opinion and a reason.', 'Svak: den nevner bare temaet. Sterk: den gir en mening og en grunn.') },
          { bad: 'Phones are good and bad.', good: 'I believe that schools should ban mobile phones, except when a teacher allows them for learning.', note: t('Weak: no side. Strong: a clear side, with an exception.', 'Svak: ingen side. Sterk: et tydelig standpunkt, med et unntak.') },
          { bad: 'Some people like phones and some people do not.', good: 'In my opinion, a phone-free school is a calmer and safer school.', note: t('Weak: a fact that nobody can argue about. Strong: an opinion you can argue for.', 'Svak: et faktum ingen kan diskutere. Sterk: en mening du kan argumentere for.') }] },
      { id: 'apa', type: 'table', title: t('Citing your sources in APA style (7th edition)', 'Å vise kildene dine i APA-stil (7. utgave)'),
        intro: t('APA is a standard way to show where your information comes from. These examples come from the model essay and the sources are real.', 'APA er en standard måte å vise hvor informasjonen din kommer fra. Eksemplene er hentet fra modellessayet, og kildene er ekte.'),
        head: [t('What', 'Hva'), t('The rule', 'Regelen'), t('Example', 'Eksempel')],
        rows: [
          [t('Two authors', 'To forfattere'), t('Use & between the names, inside the bracket.', 'Bruk & mellom navnene, inni parentesen.'), '(Beland & Murphy, 2016)'],
          [t('Three or more authors', 'Tre eller flere forfattere'), t('Write the first author and et al.', 'Skriv første forfatter og et al.'), '(Goodyear et al., 2025)'],
          [t('An organisation as author', 'En organisasjon som forfatter'), t('Use the name of the organisation.', 'Bruk navnet på organisasjonen.'), '(Utdanningsdirektoratet, 2026) / (GEM Report UNESCO, 2023)'],
          [t('The full stop', 'Punktumet'), t('The full stop comes after the bracket.', 'Punktumet kommer etter parentesen.'), '… exam results improved (Beland & Murphy, 2016).'],
          [t('Names in the sentence', 'Navn i setningen'), t('Use "and", and put only the year in brackets.', 'Bruk «and», og sett bare året i parentes.'), 'Beland and Murphy (2016) found that …'],
          [t('The reference list', 'Kildelisten'), t('At the end. Alphabetical order. Hanging indent. Italics for titles. A DOI or web address at the end.', 'Til slutt. Alfabetisk rekkefølge. Hengende innrykk. Kursiv på titler. En DOI eller nettadresse til slutt.'), t('See the end of the model essay.', 'Se slutten av modellessayet.')],
          [t('A Norwegian source', 'En norsk kilde'), t('Keep the Norwegian title and add an English translation in [square brackets].', 'Behold den norske tittelen og legg til en engelsk oversettelse i [hakeparentes].'), 'Utdanningsdirektoratet. (2026, September 16). *Anbefalinger om regulering av mobiler …* [Recommendations for regulating mobile phones …].']] }
    ],
    ukus: [
      { k: t('Spelling', 'Staving'), uk: 'behaviour, organise, recognise', us: 'behavior, organize, recognize' },
      { k: t('APA citations and references', 'APA-henvisninger og kildeliste'), uk: '(Author, Year), same rules', us: '(Author, Year), same rules' },
      { k: t('Date in a reference', 'Dato i en kilde'), uk: '(2026, September 16)', us: '(2026, September 16)' }
    ],
    models: [essay],
    phraseBank: phraseBank,
    practice: practice,
    checklist: checklist,
    resources: resources,
    pending: pending
  });
})();
