/* ==========================================================================
   MODULE: Emails and letters
   Source: teacher booklet "Slik skriver du e-post og brev på engelsk".
   Level 2 = booklet text (lightly extended where needed); Levels 1 and 3 are new.
   ALL new text is marked reviewed:false until the teacher approves it.
   Variant markup:  {colour|color} = UK|US spelling.  **bold** is allowed.
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };
  // seg(part, text, nb, flags)  flags: {a:'r'} right aligned, {b:1} bold
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; };
  var R = { a: 'r' };

  /* ------------------------------------------------------------------ */
  /* 1. INFORMAL EMAIL                                                   */
  /* ------------------------------------------------------------------ */
  var informalEmail = {
    id: 'informal-email', kind: 'email', register: 'informal',
    title: t('Informal email', 'Uformell e-post'),
    situation: t(
      'Ingrid writes to Tom, a friend she met on holiday in England.',
      'Ingrid skriver til Tom, en venn hun ble kjent med på ferie i England.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('recipient-subject', 'To: tom.wilson@mail.co.uk\nSubject: Snow and skiing!', 'Til: tom.wilson@mail.co.uk\nEmne: Snø og ski!'),
        seg('greeting', 'Hi Tom,', 'Hei Tom,'),
        seg('opening', 'How are you? I hope you are fine. Thanks for your email. I laughed at your story about the football match!', 'Hvordan har du det? Jeg håper du har det bra. Takk for e-posten din. Jeg lo av historien din om fotballkampen!'),
        seg('main', 'Guess what? Last weekend my family and I went to our cabin in the mountains. It snowed, so we went skiing. I fell ten times, but it was really fun!', 'Gjett hva! Forrige helg dro familien min og jeg til hytta vår på fjellet. Det snødde, så vi gikk på ski. Jeg falt ti ganger, men det var kjempegøy!'),
        seg('new-topic', 'By the way, are you still coming to Norway in the summer? You can stay with us. My {mum|mom} says it\'s OK.', 'Forresten, kommer du fortsatt til Norge i sommer? Du kan bo hos oss. Mamma sier at det går fint.'),
        seg('closing', 'Write back soon and tell me about your week!', 'Skriv snart tilbake og fortell meg om uken din!'),
        seg('signoff', 'Best wishes,\nIngrid', 'Beste hilsener,\nIngrid')
      ] },
      2: { reviewed: false, segments: [
        seg('recipient-subject', 'To: tom.wilson@mail.co.uk\nSubject: Snow and skiing!', 'Til: tom.wilson@mail.co.uk\nEmne: Snø og ski!'),
        seg('greeting', 'Hi Tom,', 'Hei Tom,'),
        seg('opening', 'How are you? I hope everything is good in Manchester! Thanks for your last email. Your story about the football match made me laugh.', 'Hvordan går det? Jeg håper alt er bra i Manchester! Takk for den forrige e-posten din. Historien din om fotballkampen fikk meg til å le.'),
        seg('main', 'Guess what? Last weekend my family and I went to our cabin in the mountains. It snowed for the first time this year, so we went skiing. I fell about ten times, but it was really fun! My little brother tried skiing too, and he was much better than me! In the evening, Dad lit the fire, and we drank hot chocolate and played cards.', 'Gjett hva! Forrige helg dro familien min og jeg til hytta vår på fjellet. Det snødde for første gang i år, så vi gikk på ski. Jeg falt omtrent ti ganger, men det var kjempegøy! Lillebroren min prøvde seg også på ski, og han var mye bedre enn meg! Om kvelden tente pappa opp i peisen, og vi drakk kakao og spilte kort.'),
        seg('new-topic', 'By the way, are you still coming to Norway in the summer? If you are, you can stay with us. My {mum|mom} says it\'s fine.', 'Forresten, kommer du fortsatt til Norge i sommer? Hvis du gjør det, kan du bo hos oss. Mamma sier at det går fint.'),
        seg('closing', 'Write back soon and tell me what you\'ve been up to!', 'Skriv snart tilbake og fortell meg hva du har holdt på med!'),
        seg('signoff', 'Best wishes,\nIngrid', 'Beste hilsener,\nIngrid')
      ] },
      3: { reviewed: false, segments: [
        seg('recipient-subject', 'To: tom.wilson@mail.co.uk\nSubject: Snow and skiing!', 'Til: tom.wilson@mail.co.uk\nEmne: Snø og ski!'),
        seg('greeting', 'Hi Tom,', 'Hei Tom,'),
        seg('opening', 'How are you? I hope everything is going well in Manchester and that your team has finally won a match! Thanks for your last email. Your story about the football match made me laugh so much that my little brother asked what was wrong with me.', 'Hvordan går det? Jeg håper alt går bra i Manchester, og at laget ditt endelig har vunnet en kamp! Takk for den forrige e-posten din. Historien din om fotballkampen fikk meg til å le så mye at lillebroren min spurte hva som var galt med meg.'),
        seg('main', 'Guess what? Last weekend my family and I went to our cabin in the mountains. It had snowed for the first time this year, so we decided to go skiing. I hadn\'t skied since last winter, so I fell about ten times, but I didn\'t care. The view from the top was unbelievable! In the evening, Dad lit the fire, and we played cards until midnight.', 'Gjett hva! Forrige helg dro familien min og jeg til hytta vår på fjellet. Det hadde snødd for første gang i år, så vi bestemte oss for å gå på ski. Jeg hadde ikke stått på ski siden i fjor vinter, så jeg falt omtrent ti ganger, men jeg brydde meg ikke. Utsikten fra toppen var utrolig! Om kvelden tente pappa opp i peisen, og vi spilte kort til midnatt.'),
        seg('new-topic', 'Anyway, I wanted to ask you something. Are you still planning to come to Norway in the summer? If you are, you\'re more than welcome to stay with us. My {mum|mom} says it\'s no problem at all, and she has already started to plan trips for us. Let me know soon, so we can plan the summer together.', 'Uansett, jeg ville spørre deg om noe. Har du fortsatt planer om å komme til Norge i sommer? Hvis du har det, er du hjertelig velkommen til å bo hos oss. Mamma sier at det ikke er noe problem i det hele tatt, og hun har allerede begynt å planlegge turer for oss. Gi meg beskjed snart, så kan vi planlegge sommeren sammen.'),
        seg('closing', 'I\'m looking forward to hearing all your news, so write back soon, and say hello to your family from me!', 'Jeg gleder meg til å høre alle nyhetene dine, så skriv snart tilbake, og hils familien din fra meg!'),
        seg('signoff', 'Best wishes,\nIngrid', 'Beste hilsener,\nIngrid')
      ] }
    },
    parts: {
      'recipient-subject': { n: 1, cat: 'format',
        name: t('Recipient and subject', 'Mottaker og emne'),
        fn: t('The email programme shows who the email is for and what it is about. The subject line is the first thing the reader sees.', 'E-postprogrammet viser hvem e-posten er til og hva den handler om. Emnefeltet er det første leseren ser.'),
        tips: [
          t('Keep the subject short and clear.', 'Hold emnefeltet kort og tydelig.'),
          t('Make the reader curious: "Snow and skiing!" is better than "News".', 'Gjør leseren nysgjerrig: «Snow and skiing!» er bedre enn «News».'),
          t('You do not need an address or a date in the text. The email programme adds them.', 'Du trenger ikke adresse eller dato i selve teksten. E-postprogrammet fyller det inn.')],
        phrases: [],
        mistake: { bad: 'Subject: hi', good: 'Subject: Snow and skiing!', note: t('"hi" does not say what the email is about.', '«hi» sier ikke hva e-posten handler om.') } },
      'greeting': { n: 2, cat: 'format',
        name: t('Greeting', 'Hilsen'),
        fn: t('The greeting starts the email in a friendly way and shows who you are writing to.', 'Hilsenen åpner e-posten vennlig og viser hvem du skriver til.'),
        tips: [
          t('Write Hi + name + comma.', 'Skriv Hi + navn + komma.'),
          t('To good friends you can also write "Hey".', 'Til gode venner kan du også skrive «Hey».')],
        phrases: ['Hi Tom,', 'Hey Sara!'],
        mistake: { bad: 'Dear Sir or Madam,', good: 'Hi Tom,', note: t('This is far too formal for a friend.', 'Dette er altfor formelt til en venn.') } },
      'opening': { n: 3, cat: 'structure',
        name: t('Opening', 'Åpning'),
        fn: t('The opening shows interest in the reader. You can answer something from their last email.', 'Åpningen viser interesse for mottakeren. Du kan svare på noe fra forrige e-post.'),
        tips: [
          t('Ask how the person is.', 'Spør hvordan personen har det.'),
          t('Mention something from their last message.', 'Nevn noe fra den forrige meldingen deres.')],
        levelTips: { 3: [t('Add a small joke or a personal detail to make the opening warmer.', 'Legg til en liten spøk eller en personlig detalj for å gjøre åpningen varmere.')] },
        phrases: ['How are you?', 'Thanks for your email!', 'Sorry I haven\'t written for ages.'],
        mistake: { bad: 'I am writing to inform you that …', good: 'How are you? Thanks for your email!', note: t('Informal emails start with a friendly question, not with the purpose.', 'Uformelle e-poster starter med et vennlig spørsmål, ikke med formålet.') } },
      'main': { n: 4, cat: 'structure',
        name: t('Main part', 'Hoveddel'),
        fn: t('The main part tells your news. Give details and feelings.', 'Hoveddelen forteller nyhetene dine. Gi detaljer og følelser.'),
        tips: [
          t('New topic = new paragraph.', 'Nytt tema = nytt avsnitt.'),
          t('Add details and feelings, not only facts.', 'Ta med detaljer og følelser, ikke bare fakta.'),
          t('Short forms like it\'s and I\'m are correct in informal texts.', 'Sammentrekninger som it\'s og I\'m er riktig i uformelle tekster.')],
        levelTips: { 3: [t('Mix short and long sentences. Use words like although, since and so that to link ideas.', 'Bland korte og lange setninger. Bruk ord som although, since og so that for å binde ideer sammen.')] },
        phrases: ['Guess what?', 'You won\'t believe what happened!'],
        mistake: { bad: 'We went skiing. It was fun.', good: 'We went skiing, and I fell about ten times, but it was really fun!', note: t('Details and feelings help the reader to see what happened.', 'Detaljer og følelser hjelper leseren å se for seg hva som skjedde.') } },
      'new-topic': { n: 5, cat: 'language',
        name: t('New topic', 'Nytt tema'),
        fn: t('A short phrase tells the reader that you are changing the subject.', 'En kort frase forteller leseren at du bytter tema.'),
        tips: [
          t('"By the way" and "Anyway" are natural ways to change topic.', '«By the way» og «Anyway» er naturlige måter å bytte tema på.'),
          t('Start a new paragraph.', 'Begynn på et nytt avsnitt.')],
        phrases: ['By the way, …', 'Anyway, …'],
        mistake: { bad: 'It was fun. Are you still coming to Norway?', good: 'It was fun. By the way, are you still coming to Norway?', note: t('A linking phrase makes the change of topic smooth.', 'En bindefrase gjør temabyttet jevnt.') } },
      'closing': { n: 6, cat: 'structure',
        name: t('Closing', 'Avslutning'),
        fn: t('The closing asks for an answer, or shows that you look forward to hearing from the person.', 'Avslutningen ber om svar, eller viser at du gleder deg til å høre fra personen.'),
        tips: [
          t('Ask for a reply.', 'Be om svar.'),
          t('Keep it short and friendly.', 'Hold den kort og vennlig.')],
        phrases: ['Write back soon!', 'Can\'t wait to hear from you!', 'Say hi to …'],
        mistake: { bad: 'I look forward to hearing from you.', good: 'Write back soon!', note: t('The first one is correct, but it sounds formal in an email to a friend.', 'Den første er riktig, men høres formell ut i en e-post til en venn.') } },
      'signoff': { n: 7, cat: 'format',
        name: t('Goodbye and name', 'Hilsen og navn'),
        fn: t('A friendly goodbye and your first name finish the email.', 'En vennlig hilsen og fornavnet ditt avslutter e-posten.'),
        tips: [
          t('Use Best wishes, / Love, / See you soon, followed by a comma.', 'Bruk Best wishes, / Love, / See you soon, etterfulgt av komma.'),
          t('Write only your first name.', 'Skriv bare fornavnet ditt.')],
        phrases: ['Best wishes,', 'Love,', 'See you soon,'],
        mistake: { bad: 'Yours faithfully,\nIngrid Berg', good: 'Best wishes,\nIngrid', note: t('"Yours faithfully" is only for formal texts.', '«Yours faithfully» brukes bare i formelle tekster.') } }
    }
  };

  /* ------------------------------------------------------------------ */
  /* 2. FORMAL EMAIL                                                     */
  /* ------------------------------------------------------------------ */
  var formalEmail = {
    id: 'formal-email', kind: 'email', register: 'formal',
    title: t('Formal email', 'Formell e-post'),
    situation: t(
      'Ingrid wants to go on an English course this summer and asks a language school in Brighton for more information. She does not know the name of the reader.',
      'Ingrid vil gå på et engelskkurs i sommer og spør en språkskole i Brighton om mer informasjon. Hun vet ikke navnet på den som leser e-posten.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('recipient-subject', 'To: info@brightonlanguagecentre.co.uk\nSubject: Question about summer English course', 'Til: info@brightonlanguagecentre.co.uk\nEmne: Spørsmål om engelskkurs i sommer'),
        seg('greeting', 'Dear Sir or Madam,', 'Til den det angår,'),
        seg('purpose', 'I am writing about your summer English course for teenagers.', 'Jeg skriver angående sommerkurset deres i engelsk for ungdom.'),
        seg('main', 'I am a student from Norway, and I want to learn more English. I want to go for two weeks in July. Could you please answer these questions?\n- When does the course start in July?\n- How many students are in each class?\n- Is a host family included in the price?', 'Jeg er elev fra Norge, og jeg vil lære mer engelsk. Jeg vil gjerne dra i to uker i juli. Kan du være så snill å svare på disse spørsmålene?\n- Når starter kurset i juli?\n- Hvor mange elever er det i hver klasse?\n- Er vertsfamilie inkludert i prisen?'),
        seg('closing-phrase', 'I look forward to hearing from you.', 'Jeg ser frem til å høre fra dere.'),
        seg('signoff', 'Yours faithfully,', 'Med vennlig hilsen,'),
        seg('full-name', 'Ingrid Berg', 'Ingrid Berg')
      ] },
      2: { reviewed: false, segments: [
        seg('recipient-subject', 'To: info@brightonlanguagecentre.co.uk\nSubject: Enquiry about summer English course', 'Til: info@brightonlanguagecentre.co.uk\nEmne: Henvendelse om engelskkurs i sommer'),
        seg('greeting', 'Dear Sir or Madam,', 'Til den det angår,'),
        seg('purpose', 'I am writing to {enquire|inquire} about your summer English course for teenagers, which I found on your website.', 'Jeg skriver for å forhøre meg om sommerkurset deres i engelsk for ungdom, som jeg fant på nettsiden deres.'),
        seg('main', 'I am a student from Norway, and I would like to improve my spoken English. I have studied English at school for nine years, but I would like to {practise|practice} speaking with native speakers. I would like to attend the course for two weeks in July. I would be grateful if you could answer the following questions:\n- What are the exact dates of the course in July?\n- How many students are there in each class?\n- Is accommodation with a host family included in the price?\n- What is the total price of the course?', 'Jeg er elev fra Norge, og jeg vil gjerne bli bedre i muntlig engelsk. Jeg har hatt engelsk på skolen i ni år, men jeg vil gjerne øve på å snakke med folk som har engelsk som morsmål. Jeg vil gjerne delta på kurset i to uker i juli. Jeg ville vært takknemlig om dere kunne svare på følgende spørsmål:\n- Hva er de nøyaktige datoene for kurset i juli?\n- Hvor mange elever er det i hver klasse?\n- Er overnatting hos vertsfamilie inkludert i prisen?\n- Hva er totalprisen for kurset?'),
        seg('closing-phrase', 'I look forward to hearing from you.', 'Jeg ser frem til å høre fra dere.'),
        seg('signoff', '{Yours faithfully,|Sincerely,}', 'Med vennlig hilsen,'),
        seg('full-name', 'Ingrid Berg', 'Ingrid Berg')
      ] },
      3: { reviewed: false, segments: [
        seg('recipient-subject', 'To: info@brightonlanguagecentre.co.uk\nSubject: Enquiry about summer English course for teenagers', 'Til: info@brightonlanguagecentre.co.uk\nEmne: Henvendelse om sommerkurs i engelsk for ungdom'),
        seg('greeting', 'Dear Sir or Madam,', 'Til den det angår,'),
        seg('purpose', 'I am writing to {enquire|inquire} about the summer English course for teenagers that is advertised on your website.', 'Jeg skriver for å forhøre meg om sommerkurset i engelsk for ungdom som er annonsert på nettsiden deres.'),
        seg('main', 'I am a student from Norway, and I have studied English at school for nine years. However, I would like to improve my spoken English and learn more about British culture, so I am very interested in attending your course for two weeks in July. I would therefore be grateful if you could provide some further information. In particular, I would like to know:\n- What are the exact dates of the course in July, and is it possible to attend for only two weeks?\n- How many students are there in each class, and how old are they?\n- Is accommodation with a host family included in the price, or does it cost extra?', 'Jeg er elev fra Norge, og jeg har hatt engelsk på skolen i ni år. Likevel vil jeg gjerne bli bedre i muntlig engelsk og lære mer om britisk kultur, så jeg er veldig interessert i å delta på kurset deres i to uker i juli. Jeg ville derfor vært takknemlig om dere kunne gi meg litt mer informasjon. Jeg vil spesielt gjerne vite:\n- Hva er de nøyaktige datoene for kurset i juli, og er det mulig å delta bare i to uker?\n- Hvor mange elever er det i hver klasse, og hvor gamle er de?\n- Er overnatting hos vertsfamilie inkludert i prisen, eller koster det ekstra?'),
        seg('main', 'In addition, I would appreciate it if you could tell me how to apply and whether a deposit is required.', 'I tillegg ville jeg satt pris på om dere kunne fortelle meg hvordan jeg søker, og om det kreves et depositum.'),
        seg('closing-phrase', 'I would be grateful for a reply by the end of this month, as I need to discuss the plans with my parents. Thank you in advance for your help. I look forward to hearing from you.', 'Jeg ville vært takknemlig for svar innen utgangen av denne måneden, siden jeg må snakke med foreldrene mine om planene. Takk på forhånd for hjelpen. Jeg ser frem til å høre fra dere.'),
        seg('signoff', '{Yours faithfully,|Sincerely,}', 'Med vennlig hilsen,'),
        seg('full-name', 'Ingrid Berg', 'Ingrid Berg')
      ] }
    },
    parts: {
      'recipient-subject': { n: 1, cat: 'format',
        name: t('Recipient and subject', 'Mottaker og emne'),
        fn: t('A clear subject line tells the reader exactly what the email is about.', 'Et tydelig emnefelt forteller leseren nøyaktig hva e-posten gjelder.'),
        tips: [
          t('Be exact: "Enquiry about summer English course".', 'Vær presis: «Enquiry about summer English course».'),
          t('Do not write only "Question" or "Hello".', 'Ikke skriv bare «Question» eller «Hello».')],
        phrases: [],
        mistake: { bad: 'Subject: Question', good: 'Subject: Enquiry about summer English course', note: t('A formal subject line is factual and exact.', 'Et formelt emnefelt er saklig og presist.') } },
      'greeting': { n: 2, cat: 'format',
        name: t('Greeting', 'Hilsen'),
        fn: t('The greeting shows respect. The words you choose depend on whether you know the name.', 'Hilsenen viser respekt. Ordene du velger avhenger av om du kjenner navnet.'),
        tips: [
          t('Do not know the name? Write "Dear Sir or Madam,".', 'Kjenner du ikke navnet? Skriv «Dear Sir or Madam,».'),
          t('Know the name? Write "Dear Ms Taylor," or "Dear Mr Taylor,".', 'Kjenner du navnet? Skriv «Dear Ms Taylor,» eller «Dear Mr Taylor,».'),
          t('In British English, Mr, Ms and Mrs have no full stop.', 'I britisk engelsk skrives Mr, Ms og Mrs uten punktum.')],
        phrases: ['Dear Sir or Madam,', 'Dear {Ms|Ms.} Taylor,'],
        mistake: { bad: 'Hi,', good: 'Dear Sir or Madam,', note: t('"Hi" is too informal for a company you do not know.', '«Hi» er for uformelt til en bedrift du ikke kjenner.') } },
      'purpose': { n: 3, cat: 'structure',
        name: t('Purpose', 'Formål'),
        fn: t('The first sentence says why you are writing. Go straight to the point.', 'Første setning sier hvorfor du skriver. Gå rett på sak.'),
        tips: [
          t('Do not write "How are you?" in a formal email.', 'Ikke skriv «How are you?» i en formell e-post.'),
          t('Start with "I am writing to …".', 'Begynn med «I am writing to …».')],
        phrases: ['I am writing to {enquire|inquire} about …', 'I am writing with regard to …'],
        mistake: { bad: 'How are you? I hope you are fine.', good: 'I am writing to enquire about your summer English course.', note: t('Formal emails start with the purpose.', 'Formelle e-poster starter med formålet.') } },
      'main': { n: 4, cat: 'structure',
        name: t('Main part', 'Hoveddel'),
        fn: t('A short introduction of yourself, then your questions or your message. Use polite expressions.', 'En kort presentasjon av deg selv, så spørsmålene eller beskjeden din. Bruk høflige uttrykk.'),
        tips: [
          t('Introduce yourself in one or two sentences.', 'Presenter deg selv i én eller to setninger.'),
          t('Use polite phrases: "I would be grateful if you could …".', 'Bruk høflige fraser: «I would be grateful if you could …».'),
          t('A bullet list is allowed in an email.', 'En punktliste er tillatt i en e-post.'),
          t('No contractions: write I am, not I\'m.', 'Ingen sammentrekninger: skriv I am, ikke I\'m.')],
        levelTips: { 3: [t('Use linking words like however, therefore and in addition, and give a reason for each request.', 'Bruk bindeord som however, therefore og in addition, og gi en grunn for hver forespørsel.')] },
        phrases: ['I would be grateful if you could …', 'I would like to know whether …', 'Could you please …?'],
        mistake: { bad: 'Tell me the price!', good: 'Could you please tell me the price?', note: t('Requests must be polite and never sound like orders.', 'Forespørsler må være høflige og aldri høres ut som ordre.') } },
      'closing-phrase': { n: 5, cat: 'language',
        name: t('Closing phrase', 'Avslutningsfrase'),
        fn: t('A standard polite sentence before the goodbye.', 'En standard, høflig setning før hilsenen.'),
        tips: [
          t('"I look forward to hearing from you." is the standard phrase.', '«I look forward to hearing from you.» er standardfrasen.'),
          t('After "look forward to" we use -ing: hearing, not hear.', 'Etter «look forward to» bruker vi -ing: hearing, ikke hear.')],
        phrases: ['I look forward to hearing from you.', 'Please do not hesitate to contact me if you have any questions.'],
        mistake: { bad: 'Can\'t wait to hear from you!', good: 'I look forward to hearing from you.', note: t('No contractions or exclamation marks in formal texts.', 'Ingen sammentrekninger eller utropstegn i formelle tekster.') } },
      'signoff': { n: 6, cat: 'format',
        name: t('Closing greeting', 'Avsluttende hilsen'),
        fn: t('The closing greeting must match your greeting.', 'Den avsluttende hilsenen må passe til åpningshilsenen.'),
        tips: [
          t('Dear Sir or Madam → Yours faithfully,', 'Dear Sir or Madam → Yours faithfully,'),
          t('Dear Ms Taylor → Yours sincerely,', 'Dear Ms Taylor → Yours sincerely,'),
          t('"Kind regards," is also common in formal emails.', '«Kind regards,» er også vanlig i formelle e-poster.')],
        phrases: ['Yours faithfully,', 'Yours sincerely,', 'Kind regards,'],
        mistake: { bad: 'Dear Sir or Madam, … Yours sincerely,', good: 'Dear Sir or Madam, … Yours faithfully,', note: t('Remember: Sir and Sincerely both start with S, but they do not go together.', 'Husk: Sir og Sincerely begynner begge på S, men de passer ikke sammen.') } },
      'full-name': { n: 7, cat: 'format',
        name: t('Full name', 'Fullt navn'),
        fn: t('In a formal text the reader needs your first name and your surname.', 'I en formell tekst trenger leseren både fornavn og etternavn.'),
        tips: [t('Write both your first name and your surname.', 'Skriv både fornavn og etternavn.')],
        phrases: [],
        mistake: { bad: 'Ingrid', good: 'Ingrid Berg', note: t('Only the first name is too informal.', 'Bare fornavn er for uformelt.') } }
    }
  };

  /* ------------------------------------------------------------------ */
  /* 3. INFORMAL LETTER                                                  */
  /* ------------------------------------------------------------------ */
  var informalLetter = {
    id: 'informal-letter', kind: 'letter', register: 'informal',
    title: t('Informal letter', 'Uformelt brev'),
    situation: t(
      'Ingrid has stayed for a week with a host family in York. Now she writes a thank-you letter by hand and posts it.',
      'Ingrid har bodd en uke hos en vertsfamilie i York. Nå skriver hun et takkebrev for hånd og sender det i posten.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear Sarah and James,', 'Kjære Sarah og James,'),
        seg('introduction', 'Thank you for the great week in York. I had a lot of fun!', 'Takk for den fine uken i York. Jeg hadde det veldig gøy!'),
        seg('main', 'My favourite day was the Viking museum. We ate fish and chips by the river. I also liked the board games in the evenings. I beat James at Monopoly!', 'Favorittdagen min var på vikingmuseet. Vi spiste fish and chips ved elven. Jeg likte også brettspillene om kveldene. Jeg slo James i Monopol!'),
        seg('new-paragraph', 'I put a small present in the envelope. It is a Norwegian bookmark. I hope you like it.', 'Jeg la en liten gave i konvolutten. Det er et norsk bokmerke. Jeg håper dere liker det.'),
        seg('closing', 'Say hello to Lily and Max. I hope I can visit you again soon!', 'Si hei til Lily og Max. Jeg håper jeg kan besøke dere igjen snart!'),
        seg('signoff', 'Lots of love,', 'Masse kjærlighet,'),
        seg('name', 'Ingrid', 'Ingrid')
      ] },
      2: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear Sarah and James,', 'Kjære Sarah og James,'),
        seg('introduction', 'I hope you are both well. I\'m writing to say a big thank you for letting me stay with you in York this autumn. I had the best week ever!', 'Jeg håper dere har det bra begge to. Jeg skriver for å si en stor takk for at jeg fikk bo hos dere i York denne høsten. Jeg hadde den beste uken noensinne!'),
        seg('main', 'My favourite day was when we visited the Viking museum and had fish and chips by the river. I also loved our evenings playing board games – I still can\'t believe I beat James at Monopoly! Since I got home, I\'ve told everyone about the trip.', 'Favorittdagen min var da vi besøkte vikingmuseet og spiste fish and chips ved elven. Jeg elsket også kveldene våre med brettspill – jeg kan fortsatt ikke tro at jeg slo James i Monopol! Siden jeg kom hjem, har jeg fortalt alle om turen.'),
        seg('new-paragraph', 'I\'ve put a small present in the envelope. It\'s a traditional Norwegian bookmark, and I hope you like it.', 'Jeg har lagt en liten gave i konvolutten. Det er et tradisjonelt norsk bokmerke, og jeg håper dere liker det.'),
        seg('closing', 'Please say hello to Lily and Max from me. My family sends their love too. I hope I can visit you again soon!', 'Si hei til Lily og Max fra meg. Familien min sender også mange hilsener. Jeg håper jeg kan besøke dere igjen snart!'),
        seg('signoff', 'Lots of love,', 'Masse kjærlighet,'),
        seg('name', 'Ingrid', 'Ingrid')
      ] },
      3: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear Sarah and James,', 'Kjære Sarah og James,'),
        seg('introduction', 'I hope you are both well and that the autumn weather in York isn\'t too grey. I\'m writing to say a huge thank you for letting me stay with you in October. Looking back, it was one of the best weeks of my life, and I\'m still smiling when I think about it.', 'Jeg håper dere har det bra begge to, og at høstværet i York ikke er for grått. Jeg skriver for å si en veldig stor takk for at jeg fikk bo hos dere i oktober. Når jeg ser tilbake, var det en av de beste ukene i livet mitt, og jeg smiler fortsatt når jeg tenker på det.'),
        seg('main', 'My favourite day was when we visited the Viking museum and then had fish and chips by the river, even though the seagulls tried to steal my chips! I also loved our evenings playing board games, although I still can\'t believe I beat James at Monopoly. Since I got home, I\'ve told everyone at school about the trip, and my English teacher says my pronunciation has improved a lot.', 'Favorittdagen min var da vi besøkte vikingmuseet og deretter spiste fish and chips ved elven, selv om måkene prøvde å stjele pommes fritesen min! Jeg elsket også kveldene våre med brettspill, selv om jeg fortsatt ikke kan tro at jeg slo James i Monopol. Siden jeg kom hjem, har jeg fortalt alle på skolen om turen, og engelsklæreren min sier at uttalen min har blitt mye bedre.'),
        seg('new-paragraph', 'I\'ve put a small present in the envelope. It\'s a traditional Norwegian bookmark with a pattern from my home region. I hope it will remind you of me whenever you open a good book.', 'Jeg har lagt en liten gave i konvolutten. Det er et tradisjonelt norsk bokmerke med et mønster fra hjemstedet mitt. Jeg håper det vil minne dere om meg hver gang dere åpner en god bok.'),
        seg('closing', 'Please say hello to Lily and Max from me, and tell them I haven\'t forgotten my promise to teach them some Norwegian words. If you ever fancy a trip to Norway, you\'d be very welcome to stay with us. I hope I can visit you again soon!', 'Si hei til Lily og Max fra meg, og fortell dem at jeg ikke har glemt løftet mitt om å lære dem noen norske ord. Hvis dere noen gang har lyst på en tur til Norge, er dere hjertelig velkomne til å bo hos oss. Jeg håper jeg kan besøke dere igjen snart!'),
        seg('signoff', 'Lots of love,', 'Masse kjærlighet,'),
        seg('name', 'Ingrid', 'Ingrid')
      ] }
    },
    parts: {
      'your-address': { n: 1, cat: 'format',
        name: t('Your address', 'Din adresse'),
        fn: t('The receiver knows where the letter comes from, and can write back.', 'Mottakeren ser hvor brevet kommer fra, og kan skrive tilbake.'),
        tips: [
          t('Put it at the top right.', 'Skriv den øverst til høyre.'),
          t('In an informal letter you write only your own address, not the receiver\'s.', 'I et uformelt brev skriver du bare din egen adresse, ikke mottakerens.')],
        phrases: [],
        mistake: { bad: 'Sarah and James Taylor\n14 Park Road, York', good: 'Storgata 12\n4006 Stavanger\nNorway', note: t('Write your own address here, not the receiver\'s.', 'Skriv din egen adresse her, ikke mottakerens.') } },
      'date': { n: 2, cat: 'format',
        name: t('Date', 'Dato'),
        fn: t('The date shows when you wrote the letter.', 'Datoen viser når du skrev brevet.'),
        tips: [
          t('Put it under the address.', 'Skriv den under adressen.'),
          t('British order: day – month – year. The month starts with a capital letter.', 'Britisk rekkefølge: dag – måned – år. Måneden skrives med stor forbokstav.')],
        phrases: ['{16 November 2026|November 16, 2026}'],
        mistake: { bad: '16.11.2026', good: '16 November 2026', note: t('Write the month as a word with a capital letter.', 'Skriv måneden som ord med stor forbokstav.') } },
      'greeting': { n: 3, cat: 'format',
        name: t('Greeting', 'Hilsen'),
        fn: t('The greeting starts the letter in a friendly way.', 'Hilsenen åpner brevet vennlig.'),
        tips: [
          t('Write Dear + first name + comma.', 'Skriv Dear + fornavn + komma.'),
          t('"Dear" is normal in informal letters too.', '«Dear» er vanlig også i uformelle brev.')],
        phrases: ['Dear Sarah and James,', 'Dear Gran,'],
        mistake: { bad: 'Dear Sarah and James', good: 'Dear Sarah and James,', note: t('Do not forget the comma.', 'Ikke glem kommaet.') } },
      'introduction': { n: 4, cat: 'structure',
        name: t('Introduction', 'Innledning'),
        fn: t('Say hello and say why you are writing.', 'Hils og si hvorfor du skriver.'),
        tips: [
          t('Hope that the reader is well.', 'Si at du håper mottakeren har det bra.'),
          t('Say the reason for the letter in the first paragraph.', 'Si grunnen til brevet i det første avsnittet.')],
        phrases: ['I hope you are well.', 'I\'m writing to say thank you for …'],
        mistake: { bad: 'I had a week.', good: 'I\'m writing to say a big thank you for letting me stay with you.', note: t('Say why you are writing and who you are thanking.', 'Si hvorfor du skriver og hvem du takker.') } },
      'main': { n: 5, cat: 'structure',
        name: t('Main part', 'Hoveddel'),
        fn: t('Tell what happened with details and feelings, so that the reader gets pictures in their head.', 'Fortell hva som skjedde med detaljer og følelser, slik at leseren får bilder i hodet.'),
        tips: [
          t('Mention specific things: the museum, the fish and chips.', 'Nevn konkrete ting: museet, fish and chips.'),
          t('Say what you felt, not only what you did.', 'Si hva du følte, ikke bare hva du gjorde.')],
        levelTips: { 3: [t('Add a small funny detail, like the seagulls, to make the letter personal.', 'Legg til en liten morsom detalj, som måkene, for å gjøre brevet personlig.')] },
        phrases: ['My favourite … was when …', 'I still can\'t believe …'],
        mistake: { bad: 'I had a nice time.', good: 'My favourite day was when we visited the Viking museum and had fish and chips by the river.', note: t('Specific details are better than "nice".', 'Konkrete detaljer er bedre enn «nice».') } },
      'new-paragraph': { n: 6, cat: 'structure',
        name: t('New paragraph', 'Nytt avsnitt'),
        fn: t('A new topic needs a new paragraph. Here: the present.', 'Et nytt tema trenger et nytt avsnitt. Her: gaven.'),
        tips: [
          t('New topic = new paragraph.', 'Nytt tema = nytt avsnitt.'),
          t('Keep paragraphs short, so that the letter is easy to read.', 'Hold avsnittene korte, så brevet er lett å lese.')],
        phrases: [],
        mistake: { bad: '… at Monopoly! I\'ve put a present in the envelope. Please say hello …', good: 'Start a new paragraph for the present.', note: t('One big block of text is difficult to read.', 'En stor tekstblokk er vanskelig å lese.') } },
      'closing': { n: 7, cat: 'structure',
        name: t('Closing', 'Avslutning'),
        fn: t('Send greetings to other people and show that you want to keep in touch.', 'Hils til andre og vis at du vil holde kontakten.'),
        tips: [
          t('Say hello to other people in the family.', 'Hils til andre i familien.'),
          t('Show that you want to meet again or hear from them.', 'Vis at du vil møtes igjen eller høre fra dem.')],
        phrases: ['Please say hello to … from me.', 'I hope I can visit you again soon!', 'Write back soon!'],
        mistake: { bad: 'Bye.', good: 'Please say hello to Lily and Max from me. I hope I can visit you again soon!', note: t('A warm ending keeps the contact alive.', 'En varm avslutning holder kontakten i live.') } },
      'signoff': { n: 8, cat: 'format',
        name: t('Closing greeting', 'Avsluttende hilsen'),
        fn: t('A friendly goodbye.', 'En vennlig hilsen.'),
        tips: [
          t('Use Lots of love, / Love, / Best wishes, – always with a comma.', 'Bruk Lots of love, / Love, / Best wishes, – alltid med komma.')],
        phrases: ['Lots of love,', 'Love,', 'Best wishes,'],
        mistake: { bad: 'Yours sincerely,', good: 'Lots of love,', note: t('"Yours sincerely" is formal.', '«Yours sincerely» er formelt.') } },
      'name': { n: 9, cat: 'format',
        name: t('Name', 'Navn'),
        fn: t('You sign your name.', 'Du setter navnet ditt under.'),
        tips: [t('Write only your first name.', 'Skriv bare fornavnet ditt.')],
        phrases: [],
        mistake: { bad: 'Ms Ingrid Berg', good: 'Ingrid', note: t('Friends do not need your title or surname.', 'Venner trenger ikke tittelen eller etternavnet ditt.') } }
    }
  };

  /* ------------------------------------------------------------------ */
  /* 4. FORMAL LETTER                                                    */
  /* ------------------------------------------------------------------ */
  var formalLetter = {
    id: 'formal-letter', kind: 'letter', register: 'formal',
    title: t('Formal letter', 'Formelt brev'),
    situation: t(
      'Ingrid applies for a summer job as an assistant in the kids\' club at a holiday park in England. She knows the name of the manager.',
      'Ingrid søker sommerjobb som assistent i barneklubben på en feriepark i England. Hun vet navnet på lederen.'),
    levels: {
      1: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('recipient-address', '{Ms|Ms.} Emma Clarke\nManager\nSeaview Holiday Park\nBeach Road\nNewquay\nUnited Kingdom', 'Fru Emma Clarke\nSjef\nSeaview Holiday Park\nBeach Road\nNewquay\nStorbritannia'),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear {Ms|Ms.} Clarke,', 'Kjære fru Clarke,'),
        seg('subject-line', 'Application for the position of Kids\' Club Assistant', 'Søknad på stillingen som assistent i barneklubben', { b: 1 }),
        seg('introduction', 'I am writing to apply for the job as Kids\' Club Assistant. I saw it on your website. I am a student from Norway.', 'Jeg skriver for å søke på jobben som assistent i barneklubben. Jeg så den på nettsiden deres. Jeg er elev fra Norge.'),
        seg('main', 'I like working with children. I help at a football school for younger children in my town. I am patient and friendly, and I like to organise games. I also speak English, Norwegian and some German.', 'Jeg liker å jobbe med barn. Jeg hjelper til på en fotballskole for yngre barn i byen min. Jeg er tålmodig og vennlig, og jeg liker å organisere leker. Jeg snakker også engelsk, norsk og litt tysk.'),
        seg('practical', 'I can work from 25 June to 10 August. I have enclosed my CV.', 'Jeg kan jobbe fra 25. juni til 10. august. Jeg har lagt ved CV-en min.'),
        seg('closing', 'Thank you for reading my application. I look forward to hearing from you.', 'Takk for at du leste søknaden min. Jeg ser frem til å høre fra deg.'),
        seg('signoff', 'Yours sincerely,', 'Med vennlig hilsen,'),
        seg('signature-name', '(signature)\nIngrid Berg', '(underskrift)\nIngrid Berg')
      ] },
      2: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('recipient-address', '{Ms|Ms.} Emma Clarke\nManager\nSeaview Holiday Park\nBeach Road\nNewquay\nUnited Kingdom', 'Fru Emma Clarke\nSjef\nSeaview Holiday Park\nBeach Road\nNewquay\nStorbritannia'),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear {Ms|Ms.} Clarke,', 'Kjære fru Clarke,'),
        seg('subject-line', 'Application for the position of Kids\' Club Assistant', 'Søknad på stillingen som assistent i barneklubben', { b: 1 }),
        seg('introduction', 'I am writing to apply for the position of Kids\' Club Assistant, which I saw advertised on your website. I am a student from Norway, and I would very much like to work for you next summer.', 'Jeg skriver for å søke på stillingen som assistent i barneklubben, som jeg så annonsert på nettsiden deres. Jeg er elev fra Norge, og jeg vil veldig gjerne jobbe for dere neste sommer.'),
        seg('main', 'I have experience of working with children. For the past two years, I have helped out at a football school for younger children in my town. I also often babysit my two younger cousins. I am patient, reliable and creative, and I enjoy {organising|organizing} games and activities.', 'Jeg har erfaring med å jobbe med barn. De to siste årene har jeg hjulpet til på en fotballskole for yngre barn i byen min. Jeg passer også ofte de to yngre søskenbarna mine. Jeg er tålmodig, pålitelig og kreativ, og jeg liker å organisere leker og aktiviteter.'),
        seg('main', 'In addition, I have studied English at school since I was six, and I also speak Norwegian and some German. I believe this would be useful, as many of your guests come from abroad.', 'I tillegg har jeg hatt engelsk på skolen siden jeg var seks, og jeg snakker også norsk og litt tysk. Jeg tror dette vil være nyttig, siden mange av gjestene deres kommer fra utlandet.'),
        seg('practical', 'I am available from 25 June to 10 August. I have enclosed my CV and a reference from my football coach.', 'Jeg er tilgjengelig fra 25. juni til 10. august. Jeg har lagt ved CV-en min og en attest fra fotballtreneren min.'),
        seg('closing', 'Thank you for considering my application. I look forward to hearing from you.', 'Takk for at dere vurderer søknaden min. Jeg ser frem til å høre fra dere.'),
        seg('signoff', '{Yours sincerely,|Sincerely,}', 'Med vennlig hilsen,'),
        seg('signature-name', '(signature)\nIngrid Berg', '(underskrift)\nIngrid Berg')
      ] },
      3: { reviewed: false, segments: [
        seg('your-address', 'Storgata 12\n4006 Stavanger\nNorway', 'Storgata 12\n4006 Stavanger\nNorge', R),
        seg('recipient-address', '{Ms|Ms.} Emma Clarke\nManager\nSeaview Holiday Park\nBeach Road\nNewquay\nUnited Kingdom', 'Fru Emma Clarke\nSjef\nSeaview Holiday Park\nBeach Road\nNewquay\nStorbritannia'),
        seg('date', '{16 November 2026|November 16, 2026}', '16. november 2026', R),
        seg('greeting', 'Dear {Ms|Ms.} Clarke,', 'Kjære fru Clarke,'),
        seg('subject-line', 'Application for the position of Kids\' Club Assistant', 'Søknad på stillingen som assistent i barneklubben', { b: 1 }),
        seg('introduction', 'I am writing to apply for the position of Kids\' Club Assistant, which I saw advertised on your website. I am a student from Norway, and I would very much like to spend next summer working at Seaview Holiday Park.', 'Jeg skriver for å søke på stillingen som assistent i barneklubben, som jeg så annonsert på nettsiden deres. Jeg er elev fra Norge, og jeg vil veldig gjerne tilbringe neste sommer med å jobbe på Seaview Holiday Park.'),
        seg('main', 'I have considerable experience of working with children. For the past two years, I have helped out at a football school for younger children in my town, where I have planned warm-ups, led small games and made sure that everyone felt included. In addition, I often babysit my two younger cousins. I am patient, reliable and creative, and I enjoy {organising|organizing} activities that children find both fun and safe.', 'Jeg har betydelig erfaring med å jobbe med barn. De to siste årene har jeg hjulpet til på en fotballskole for yngre barn i byen min, der jeg har planlagt oppvarming, ledet små leker og passet på at alle følte seg inkludert. I tillegg passer jeg ofte de to yngre søskenbarna mine. Jeg er tålmodig, pålitelig og kreativ, og jeg liker å organisere aktiviteter som barn synes er både morsomme og trygge.'),
        seg('main', 'Furthermore, I have studied English at school since I was six, and I also speak Norwegian and some German. I believe this would be valuable, as many of your guests come from abroad. Although I have not worked in England before, I am a quick learner and willing to take on any task.', 'Videre har jeg hatt engelsk på skolen siden jeg var seks, og jeg snakker også norsk og litt tysk. Jeg tror dette vil være verdifullt, siden mange av gjestene deres kommer fra utlandet. Selv om jeg ikke har jobbet i England før, lærer jeg raskt og er villig til å ta på meg alle oppgaver.'),
        seg('practical', 'I am available from 25 June to 10 August. I have enclosed my CV and a reference from my football coach, and I would be happy to attend an interview online if necessary.', 'Jeg er tilgjengelig fra 25. juni til 10. august. Jeg har lagt ved CV-en min og en attest fra fotballtreneren min, og jeg stiller gjerne til intervju på nett om nødvendig.'),
        seg('closing', 'Thank you for considering my application. I look forward to hearing from you.', 'Takk for at dere vurderer søknaden min. Jeg ser frem til å høre fra dere.'),
        seg('signoff', '{Yours sincerely,|Sincerely,}', 'Med vennlig hilsen,'),
        seg('signature-name', '(signature)\nIngrid Berg', '(underskrift)\nIngrid Berg')
      ] }
    },
    parts: {
      'your-address': { n: 1, cat: 'format',
        name: t('Your address', 'Din adresse'),
        fn: t('It shows where you live, so that the receiver can answer.', 'Den viser hvor du bor, slik at mottakeren kan svare.'),
        tips: [
          t('Put it at the top right.', 'Skriv den øverst til høyre.'),
          t('Do not write your name here.', 'Ikke skriv navnet ditt her.')],
        phrases: [],
        mistake: { bad: 'Ingrid Berg\nStorgata 12', good: 'Storgata 12\n4006 Stavanger\nNorway', note: t('Your name goes at the end of the letter.', 'Navnet ditt står til slutt i brevet.') } },
      'recipient-address': { n: 2, cat: 'format',
        name: t('Receiver\'s address', 'Mottakers adresse'),
        fn: t('A formal letter shows who the letter is for, with a title and the name of the company.', 'Et formelt brev viser hvem brevet er til, med tittel og firmanavn.'),
        tips: [
          t('Put it on the left, a bit lower than your address.', 'Skriv den til venstre, litt lavere enn din egen adresse.'),
          t('Name, job title, company, address.', 'Navn, stillingstittel, firma, adresse.')],
        phrases: [],
        mistake: { bad: 'Seaview Holiday Park', good: '{Ms|Ms.} Emma Clarke\nManager\nSeaview Holiday Park\n…', note: t('Include the name and the job title when you know them.', 'Ta med navn og stillingstittel når du kjenner dem.') } },
      'date': { n: 3, cat: 'format',
        name: t('Date', 'Dato'),
        fn: t('The date shows when you wrote the letter.', 'Datoen viser når du skrev brevet.'),
        tips: [
          t('Put it at the right (or left) above the greeting.', 'Skriv den til høyre (eller venstre) over hilsenen.'),
          t('British order: day – month – year.', 'Britisk rekkefølge: dag – måned – år.')],
        phrases: ['{16 November 2026|November 16, 2026}'],
        mistake: { bad: '16.11.26', good: '16 November 2026', note: t('Write the date in full, with the month as a word.', 'Skriv datoen fullt ut, med måneden som ord.') } },
      'greeting': { n: 4, cat: 'format',
        name: t('Greeting', 'Hilsen'),
        fn: t('The greeting shows respect and uses the receiver\'s surname.', 'Hilsenen viser respekt og bruker mottakerens etternavn.'),
        tips: [
          t('Use the surname, never the first name.', 'Bruk etternavn, aldri fornavn.'),
          t('You know the name, so write "Dear Ms Clarke,".', 'Du kjenner navnet, så skriv «Dear Ms Clarke,».')],
        phrases: ['Dear {Mr|Mr.} Jones,', 'Dear {Ms|Ms.} Hansen,', 'Dear Sir or Madam,'],
        mistake: { bad: 'Dear Emma,', good: 'Dear Ms Clarke,', note: t('Never use the first name in a formal letter.', 'Bruk aldri fornavn i et formelt brev.') } },
      'subject-line': { n: 5, cat: 'format',
        name: t('Subject line', 'Emnelinje'),
        fn: t('The subject line says what the letter is about.', 'Emnelinjen sier hva brevet gjelder.'),
        tips: [
          t('It is optional, but it is useful.', 'Den er valgfri, men nyttig.'),
          t('Write it in bold.', 'Skriv den i fet skrift.')],
        phrases: ['Application for the position of …'],
        mistake: { bad: 'About the job', good: 'Application for the position of Kids\' Club Assistant', note: t('Be exact about the job you apply for.', 'Vær presis om jobben du søker.') } },
      'introduction': { n: 6, cat: 'structure',
        name: t('Introduction', 'Innledning'),
        fn: t('It says why you are writing and where you saw the job.', 'Den sier hvorfor du skriver og hvor du så stillingen.'),
        tips: [
          t('Start with "I am writing to …".', 'Begynn med «I am writing to …».'),
          t('Say where you saw the advert.', 'Si hvor du så annonsen.')],
        phrases: ['I am writing to apply for …', 'which I saw advertised on …'],
        mistake: { bad: 'Hi! I want a job.', good: 'I am writing to apply for the position of Kids\' Club Assistant, which I saw advertised on your website.', note: t('Be polite and exact.', 'Vær høflig og presis.') } },
      'main': { n: 7, cat: 'structure',
        name: t('Main part', 'Hoveddel'),
        fn: t('It tells why you are the right person: your experience, qualities and skills.', 'Den forteller hvorfor du passer: erfaring, egenskaper og ferdigheter.'),
        tips: [
          t('One topic per paragraph.', 'Ett tema per avsnitt.'),
          t('Use linking words like "In addition" and "also" to connect the text.', 'Bruk bindeord som «In addition» og «also» for å binde teksten sammen.'),
          t('No contractions and no slang.', 'Ingen sammentrekninger og ingen slang.')],
        levelTips: { 3: [t('Give examples that prove your skills (what did you do?). Use "although" and "furthermore".', 'Gi eksempler som viser ferdighetene dine (hva gjorde du?). Bruk «although» og «furthermore».')] },
        phrases: ['I have experience of …', 'I am patient, reliable and …', 'In addition, …', 'Furthermore, …'],
        mistake: { bad: 'I\'m good with kids.', good: 'I have experience of working with children.', note: t('Use full forms and formal words.', 'Bruk fullformer og formelle ord.') } },
      'practical': { n: 8, cat: 'structure',
        name: t('Practical information', 'Praktisk info'),
        fn: t('It tells when you can work and what you enclose.', 'Den forteller når du kan jobbe og hva du legger ved.'),
        tips: [
          t('Give the exact dates.', 'Oppgi nøyaktige datoer.'),
          t('List what you enclose: CV, reference.', 'Si hva du legger ved: CV, attest.')],
        phrases: ['I am available from … to …', 'I have enclosed my CV.'],
        mistake: { bad: 'I can work in summer.', good: 'I am available from 25 June to 10 August.', note: t('Exact dates are easier for the receiver to use.', 'Nøyaktige datoer er lettere for mottakeren å bruke.') } },
      'closing': { n: 9, cat: 'language',
        name: t('Closing', 'Avslutning'),
        fn: t('Thank the reader and use the standard phrase.', 'Takk leseren og bruk standardfrasen.'),
        tips: [
          t('Thank the receiver for their time.', 'Takk mottakeren for tiden.'),
          t('Use "I look forward to hearing from you."', 'Bruk «I look forward to hearing from you.»')],
        phrases: ['Thank you for considering my application.', 'I look forward to hearing from you.'],
        mistake: { bad: 'Write back soon!', good: 'I look forward to hearing from you.', note: t('Informal phrases do not belong in a formal letter.', 'Uformelle fraser hører ikke hjemme i et formelt brev.') } },
      'signoff': { n: 10, cat: 'format',
        name: t('Closing greeting', 'Avsluttende hilsen'),
        fn: t('The closing greeting must match the greeting.', 'Den avsluttende hilsenen må passe til åpningshilsenen.'),
        tips: [
          t('You know the name (Dear Ms Clarke), so write "Yours sincerely,".', 'Du kjenner navnet (Dear Ms Clarke), så skriv «Yours sincerely,».')],
        phrases: ['Yours sincerely,', 'Yours faithfully,', 'Kind regards,'],
        mistake: { bad: 'Dear Ms Clarke, … Yours faithfully,', good: 'Dear Ms Clarke, … Yours sincerely,', note: t('Name known = sincerely. Name unknown = faithfully.', 'Navn kjent = sincerely. Navn ukjent = faithfully.') } },
      'signature-name': { n: 11, cat: 'format',
        name: t('Signature and name', 'Signatur og navn'),
        fn: t('You sign by hand and write your full name under the signature.', 'Du skriver under for hånd og setter fullt navn under signaturen.'),
        tips: [
          t('Sign by hand, then write your full name.', 'Skriv under for hånd, og skriv fullt navn under.'),
          t('Paragraphs start at the left margin, with an empty line between.', 'Avsnitt starter helt til venstre, med en tom linje mellom.')],
        phrases: [],
        mistake: { bad: 'Ingrid', good: 'Ingrid Berg', note: t('A formal letter needs the full name.', 'Et formelt brev trenger fullt navn.') } }
    }
  };

  /* ------------------------------------------------------------------ */
  /* PHRASE BANK                                                         */
  /* item = [english, norwegian gloss, register, level, example?]        */
  /* ------------------------------------------------------------------ */
  var P = function (en, nb, reg, lvl, ex) { return { en: en, nb: nb, reg: reg, lvl: lvl, ex: ex || '' }; };
  var phraseBank = [
    { group: t('Greeting', 'Hilsen'), items: [
      P('Hi Tom,', 'Hei Tom,', 'informal', 1),
      P('Hey Sara!', 'Hei, Sara!', 'informal', 1),
      P('Dear {Gran|Grandma},', 'Kjære bestemor,', 'informal', 1),
      P('Dear {Mr|Mr.} Jones,', 'Kjære hr. Jones,', 'formal', 1),
      P('Dear {Ms|Ms.} Hansen,', 'Kjære fru Hansen,', 'formal', 1),
      P('Dear Sir or Madam,', 'Til den det angår, (navnet er ukjent)', 'formal', 1),
      P('To whom it may concern,', 'Til den det måtte angå,', 'formal', 3, 'This is common in American English when you do not know the name.')
    ] },
    { group: t('Starting your text', 'Å begynne teksten'), items: [
      P('How are you?', 'Hvordan har du det?', 'informal', 1),
      P('Thanks for your email!', 'Takk for e-posten din!', 'informal', 1),
      P('I hope you are well.', 'Jeg håper du har det bra.', 'neutral', 1),
      P('Sorry I haven\'t written for ages.', 'Beklager at jeg ikke har skrevet på lenge.', 'informal', 2),
      P('I\'m writing to say thank you for …', 'Jeg skriver for å takke for …', 'informal', 2, 'I\'m writing to say thank you for letting me stay.'),
      P('I am writing to …', 'Jeg skriver for å …', 'formal', 1, 'I am writing to apply for the position of …'),
      P('I am writing to {enquire|inquire} about …', 'Jeg skriver for å forhøre meg om …', 'formal', 2, 'I am writing to enquire about your summer course.'),
      P('I am writing with regard to …', 'Jeg skriver angående …', 'formal', 3),
      P('Thank you for your letter of 3 March.', 'Takk for brevet deres av 3. mars.', 'formal', 2)
    ] },
    { group: t('Telling news and information', 'Å fortelle nyheter og informasjon'), items: [
      P('Guess what?', 'Gjett hva!', 'informal', 1, 'Guess what? We went skiing!'),
      P('You won\'t believe what happened!', 'Du kommer ikke til å tro hva som skjedde!', 'informal', 2),
      P('I would like to inform you that …', 'Jeg vil gjerne informere om at …', 'formal', 2),
      P('I have experience of …', 'Jeg har erfaring med …', 'formal', 2, 'I have experience of working with children.'),
      P('I am available from … to …', 'Jeg er tilgjengelig fra … til …', 'formal', 1, 'I am available from 25 June to 10 August.'),
      P('I have enclosed my CV.', 'Jeg har lagt ved CV-en min.', 'formal', 2)
    ] },
    { group: t('Asking', 'Å spørre'), items: [
      P('Can you …?', 'Kan du …?', 'informal', 1),
      P('Do you fancy …?', 'Har du lyst på …?', 'informal', 2, 'Do you fancy going to the cinema?'),
      P('What do you think?', 'Hva synes du?', 'informal', 1),
      P('Are you still coming …?', 'Kommer du fortsatt …?', 'informal', 1),
      P('Could you please …?', 'Kan du være så snill å …?', 'formal', 1, 'Could you please send me the homework?'),
      P('I would be grateful if you could …', 'Jeg ville vært takknemlig om du kunne …', 'formal', 2),
      P('I would like to know whether …', 'Jeg vil gjerne vite om …', 'formal', 3, 'I would like to know whether a deposit is required.')
    ] },
    { group: t('Thanking', 'Å takke'), items: [
      P('Thanks a lot!', 'Tusen takk!', 'informal', 1),
      P('Thanks so much for …', 'Tusen takk for …', 'informal', 1),
      P('Thank you for …', 'Takk for …', 'formal', 1),
      P('I am very grateful for …', 'Jeg er veldig takknemlig for …', 'formal', 2),
      P('Thank you for considering my application.', 'Takk for at du vurderer søknaden min.', 'formal', 2),
      P('Thank you in advance.', 'Takk på forhånd.', 'formal', 2)
    ] },
    { group: t('Apologising', 'Å beklage'), items: [
      P('Sorry about …', 'Beklager …', 'informal', 1),
      P('I\'m really sorry that …', 'Jeg er virkelig lei for at …', 'informal', 2),
      P('I apologise for …', 'Jeg beklager …', 'formal', 2, 'I {apologise|apologize} for the delay.'),
      P('Please accept my apologies for …', 'Vennligst godta min unnskyldning for …', 'formal', 3)
    ] },
    { group: t('Complaining', 'Å klage'), items: [
      P('It was really annoying that …', 'Det var veldig irriterende at …', 'informal', 2),
      P('I am writing to complain about …', 'Jeg skriver for å klage på …', 'formal', 2),
      P('I was disappointed to find that …', 'Jeg var skuffet over å oppdage at …', 'formal', 3)
    ] },
    { group: t('Linking ideas', 'Å binde sammen ideer'), items: [
      P('and', 'og', 'neutral', 1),
      P('but', 'men', 'neutral', 1),
      P('so', 'så', 'informal', 1),
      P('because', 'fordi', 'neutral', 1),
      P('also', 'også', 'neutral', 1),
      P('anyway', 'uansett', 'informal', 2),
      P('by the way', 'forresten', 'informal', 1, 'By the way, are you still coming in the summer?'),
      P('however', 'imidlertid / men', 'formal', 2, 'I have not worked in England. However, I am a quick learner.'),
      P('therefore', 'derfor', 'formal', 2),
      P('in addition', 'i tillegg', 'formal', 2, 'In addition, I speak some German.'),
      P('furthermore', 'videre / dessuten', 'formal', 3),
      P('although', 'selv om', 'formal', 2, 'Although I have not worked in England, I am a quick learner.')
    ] },
    { group: t('Ending your text', 'Å avslutte teksten'), items: [
      P('Write back soon!', 'Skriv snart tilbake!', 'informal', 1),
      P('Can\'t wait to hear from you!', 'Gleder meg til å høre fra deg!', 'informal', 2),
      P('Say hi to …', 'Si hei til …', 'informal', 1),
      P('I look forward to hearing from you.', 'Jeg ser frem til å høre fra deg.', 'formal', 1),
      P('Please do not hesitate to contact me if you have any questions.', 'Ta gjerne kontakt hvis du har spørsmål.', 'formal', 3)
    ] },
    { group: t('Signing off', 'Å skrive avsluttende hilsen'), items: [
      P('Love,', 'Hilsen (kjærlig),', 'informal', 1),
      P('Lots of love,', 'Masse kjærlighet,', 'informal', 1),
      P('Best wishes,', 'Beste ønsker,', 'neutral', 1),
      P('See you soon,', 'Sees snart,', 'informal', 1),
      P('{Yours sincerely,|Sincerely,}', 'Med vennlig hilsen, (når du kjenner navnet)', 'formal', 1),
      P('{Yours faithfully,|Sincerely,}', 'Med vennlig hilsen, (når du ikke kjenner navnet)', 'formal', 1),
      P('Kind regards,', 'Vennlig hilsen,', 'formal', 1)
    ] }
  ];

  /* ------------------------------------------------------------------ */
  /* PRACTICE (not saved). level = array of levels where item is shown   */
  /* ------------------------------------------------------------------ */
  var practice = [
    { id: 'p-sort1', type: 'sort', level: [1, 2], q: t('Is it formal or informal? Sort each phrase.', 'Er det formelt eller uformelt? Sorter hver frase.'),
      buckets: [t('Informal', 'Uformell'), t('Formal', 'Formell')],
      items: [
        { text: 'Hey! Can you send me the homework?', b: 0 },
        { text: 'Dear Sir or Madam,', b: 1 },
        { text: 'I would be grateful if you could …', b: 1 },
        { text: 'Guess what?', b: 0 },
        { text: 'Yours faithfully,', b: 1 },
        { text: 'Lots of love,', b: 0 }],
      why: t('Formal language is polite and neutral. Informal language is relaxed and personal.', 'Formelt språk er høflig og nøytralt. Uformelt språk er avslappet og personlig.') },
    { id: 'p-greet1', type: 'mcq', level: [1], q: t('You write an email to a bank. You do not know the name of the reader. Which greeting is best?', 'Du skriver en e-post til en bank. Du kjenner ikke navnet til den som leser. Hvilken hilsen er best?'),
      options: ['Hi there!', 'Dear Sir or Madam,', 'Hey!'], answer: 1,
      why: t('"Dear Sir or Madam," is the standard formal greeting when you do not know the name.', '«Dear Sir or Madam,» er standard formell hilsen når du ikke kjenner navnet.') },
    { id: 'p-close1', type: 'mcq', level: [1, 2], q: t('You start with "Dear Ms Taylor,". Which closing greeting fits?', 'Du begynner med «Dear Ms Taylor,». Hvilken avsluttende hilsen passer?'),
      options: ['Yours faithfully,', 'Love,', 'Yours sincerely,'], answer: 2,
      why: t('You know the name, so you write "Yours sincerely,".', 'Du kjenner navnet, så du skriver «Yours sincerely,».') },
    { id: 'p-close2', type: 'mcq', level: [1, 2, 3], q: t('You start with "Dear Sir or Madam,". Which closing greeting fits?', 'Du begynner med «Dear Sir or Madam,». Hvilken avsluttende hilsen passer?'),
      options: ['Yours sincerely,', 'Yours faithfully,', 'Best wishes,'], answer: 1,
      why: t('The name is unknown, so you write "Yours faithfully,". Remember: Sir and Sincerely both start with S, but they do not go together.', 'Navnet er ukjent, så du skriver «Yours faithfully,». Husk: Sir og Sincerely begynner begge på S, men passer ikke sammen.') },
    { id: 'p-gap1', type: 'gap', level: [1, 2, 3], q: t('Choose the correct word.', 'Velg riktig ord.'),
      before: 'I look forward', after: 'hearing from you.', options: ['to', 'for', 'at'], answer: 0,
      why: t('The expression is "look forward to", and "to" is followed by -ing (hearing).', 'Uttrykket er «look forward to», og «to» etterfølges av -ing (hearing).') },
    { id: 'p-order1', type: 'order', level: [1, 2], q: t('Put the parts of a formal email in the correct order.', 'Sett delene av en formell e-post i riktig rekkefølge.'),
      items: ['Dear Sir or Madam,', 'I am writing to enquire about …', 'I would be grateful if you could …', 'I look forward to hearing from you.', 'Yours faithfully,', 'Ingrid Berg'],
      why: t('Greeting, purpose, main part, closing phrase, closing greeting, full name.', 'Hilsen, formål, hoveddel, avslutningsfrase, avsluttende hilsen, fullt navn.') },
    { id: 'p-date1', type: 'mcq', level: [1, 2], q: t('Where does the date go in a British informal letter?', 'Hvor står datoen i et britisk uformelt brev?'),
      options: ['Under your address, at the top right', 'At the very end of the letter', 'Under the greeting'], answer: 0,
      why: t('Your address comes first at the top right, and the date is under it.', 'Adressen din kommer først øverst til høyre, og datoen står under.') },
    { id: 'p-date2', type: 'mcq', level: [2, 3], q: t('Which date is written the British way?', 'Hvilken dato er skrevet på britisk måte?'),
      options: ['November 16, 2026', '16 November 2026', '11/16/26'], answer: 1,
      why: t('British order is day – month – year, with the month as a word. (American English writes November 16, 2026.)', 'Britisk rekkefølge er dag – måned – år, med måneden som ord. (Amerikansk engelsk skriver November 16, 2026.)') },
    { id: 'p-formal1', type: 'mcq', level: [2, 3], q: t('Which sentence is NOT suitable in a formal email?', 'Hvilken setning passer IKKE i en formell e-post?'),
      options: ['I am writing to apply for the position.', 'Can\'t wait to hear from you!', 'I would be grateful for your help.'], answer: 1,
      why: t('Contractions and exclamation marks belong in informal texts.', 'Sammentrekninger og utropstegn hører hjemme i uformelle tekster.') },
    { id: 'p-gap2', type: 'gap', level: [2, 3], q: t('Choose the correct word.', 'Velg riktig ord.'),
      before: 'I would be grateful', after: 'you could answer my questions.', options: ['if', 'when', 'that'], answer: 0,
      why: t('"I would be grateful if you could …" is a polite formal phrase.', '«I would be grateful if you could …» er en høflig, formell frase.') },
    { id: 'p-sort2', type: 'sort', level: [2, 3], q: t('Sort the words: informal or formal?', 'Sorter ordene: uformelle eller formelle?'),
      buckets: [t('Informal', 'Uformell'), t('Formal', 'Formell')],
      items: [
        { text: 'get', b: 0 }, { text: 'receive', b: 1 }, { text: 'buy', b: 0 }, { text: 'purchase', b: 1 },
        { text: 'kids', b: 0 }, { text: 'children', b: 1 }, { text: 'find out', b: 0 }, { text: 'discover', b: 1 }],
      why: t('Formal words are often longer and come from Latin or French.', 'Formelle ord er ofte lengre og kommer fra latin eller fransk.') },
    { id: 'p-link1', type: 'gap', level: [2, 3], q: t('Choose the best linking word for a formal letter.', 'Velg det beste bindeordet for et formelt brev.'),
      before: 'I have experience of working with children.', after: ', I speak three languages.', options: ['In addition', 'And', 'Also,'], answer: 0,
      why: t('"In addition" is a formal linking word. "And" and "also" are more informal.', '«In addition» er et formelt bindeord. «And» og «also» er mer uformelle.') },
    { id: 'p-open1', type: 'mcq', level: [1, 2, 3], q: t('Which opening sentence fits a formal email?', 'Hvilken åpningssetning passer i en formell e-post?'),
      options: ['How are you? I hope you are fine.', 'I am writing to enquire about your summer course.', 'Hey! Quick question about the course.'], answer: 1,
      why: t('A formal email starts with the purpose. There is no "How are you?".', 'En formell e-post starter med formålet. Det er ingen «How are you?».') },
    { id: 'p-order2', type: 'order', level: [1, 2], q: t('Put the parts of an informal email in the correct order.', 'Sett delene av en uformell e-post i riktig rekkefølge.'),
      items: ['Hi Tom,', 'How are you? Thanks for your email!', 'Guess what? Last weekend we went skiing.', 'By the way, are you still coming in the summer?', 'Write back soon!', 'Best wishes, Ingrid'],
      why: t('Greeting, opening, main part, new topic, closing, goodbye and name.', 'Hilsen, åpning, hoveddel, nytt tema, avslutning, hilsen og navn.') },
    { id: 'p-formal2', type: 'mcq', level: [3], q: t('Which version is the most polite request?', 'Hvilken versjon er den mest høflige forespørselen?'),
      options: ['Send me the information.', 'Could you send me the information?', 'I would be grateful if you could send me some further information.'], answer: 2,
      why: t('The longer, indirect version is the most polite in formal writing.', 'Den lengre, indirekte versjonen er den mest høflige i formell skriving.') }
  ];

  /* ------------------------------------------------------------------ */
  /* CHECKLIST (from the booklet)                                        */
  /* ------------------------------------------------------------------ */
  var checklist = [
    { group: t('Content and layout', 'Innhold og oppsett'), items: [
      t('I know who I am writing to, and I have chosen formal or informal language.', 'Jeg vet hvem jeg skriver til, og har valgt formelt eller uformelt språk.'),
      t('The greeting fits (Hi / Dear), and there is a comma after it.', 'Hilsenen passer (Hi / Dear), og det er komma etter.'),
      t('The first paragraph says why I am writing.', 'Første avsnitt sier hvorfor jeg skriver.'),
      t('I have answered everything the task asks for.', 'Jeg har svart på alt oppgaven ber om.'),
      t('New topic = new paragraph, with an empty line between.', 'Nytt tema = nytt avsnitt, med tom linje mellom.'),
      t('The closing fits: Yours sincerely (name known), Yours faithfully (name unknown) or Love / Best wishes (informal).', 'Avslutningen passer: Yours sincerely (navn kjent), Yours faithfully (navn ukjent) eller Love / Best wishes (uformelt).'),
      t('Email: the subject line is short and clear.', 'E-post: Emnefeltet er kort og tydelig.'),
      t('Letter: my address and the date are at the top right. A formal letter also has the receiver\'s address on the left.', 'Brev: Min adresse og datoen står øverst til høyre. Formelt brev har også mottakerens adresse til venstre.')] },
    { group: t('Language', 'Språk'), items: [
      t('Formal: no contractions (I am, not I\'m), no slang and no emojis.', 'Formelt: Ingen sammentrekninger (I am, ikke I\'m), ingen slang og ingen emojis.'),
      t('I have used linking words (and, but, because, however, in addition).', 'Jeg har brukt bindeord (and, but, because, however, in addition).'),
      t('The date is written the British way: 16 November 2026.', 'Datoen er skrevet på britisk måte: 16 November 2026.'),
      t('I have used capital letters where English needs them: I, days (Monday), months (November) and nationalities/languages (Norwegian).', 'Jeg har brukt stor forbokstav der engelsk krever det: I, dager (Monday), måneder (November) og nasjonaliteter/språk (Norwegian).'),
      t('British spelling: favourite, colour, organise.', 'Britisk stavemåte: favourite, colour, organise.'),
      t('I have read through the whole text one more time.', 'Jeg har lest gjennom hele teksten én gang til.')] }
  ];

  /* ------------------------------------------------------------------ */
  /* RESOURCES. Only VERIFIED links go in `resources`.                   */
  /* verified = page loaded (HTTP 200) and title/content matched, 2026-11-16 */
  /* ------------------------------------------------------------------ */
  var resources = [
    { id: 'bbc-ks3-nonfiction', title: 'Non-fiction writing (KS3 English)', publisher: 'BBC Bitesize',
      url: 'https://www.bbc.co.uk/bitesize/topics/zv7fqp3', type: 'article', lang: 'en', level: 'B1–B2',
      why: t('A topic page with guides on formal and informal writing and how to write a formal letter. Made for UK pupils, so the language is harder; use it selectively.', 'En temaside med guider om formell og uformell skriving og hvordan du skriver et formelt brev. Laget for britiske elever, så språket er vanskeligere; bruk den utvalgt.'),
      checked: '2026-11-16', license: 'BBC content, link only' },
    { id: 'ndla-formal-informal', title: 'Formal, Semi-formal, and Informal English', publisher: 'NDLA (Engelsk 1)',
      url: 'https://ndla.no/r/engelsk-1/formal-semi-formal-and-informal-english/9782eaac4c', type: 'article', lang: 'en', level: 'B1',
      why: t('A Norwegian open learning resource that explains the three levels of formality in English.', 'En norsk åpen læringsressurs som forklarer de tre formalitetsnivåene i engelsk.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'ndla-formal-tasks', title: 'Tasks: Formal, Semi-formal, and Informal English', publisher: 'NDLA (Engelsk 1)',
      url: 'https://ndla.no/r/engelsk-1/tasks-formal-semi-formal-and-informal-english/62c5970886', type: 'exercise', lang: 'en', level: 'B1',
      why: t('Tasks that go with the NDLA article. Good for extra practice on register.', 'Oppgaver som hører til NDLA-artikkelen. Bra for ekstra øving på språkstil.'),
      checked: '2026-11-16', license: 'NDLA, link only (check NDLA terms before reusing)' },
    { id: 'yt-bbc-formal-informal', title: 'Formal English and informal English - BBC English Masterclass', publisher: 'BBC Learning English (YouTube)',
      url: 'https://www.youtube.com/watch?v=hdKYl8Tg_FQ', type: 'video', ytid: 'hdKYl8Tg_FQ', lang: 'en', level: 'B1–B2',
      why: t('A short video lesson on the difference between formal and informal English. A written alternative is the NDLA article above.', 'En kort videoleksjon om forskjellen på formelt og uformelt engelsk. Et skriftlig alternativ er NDLA-artikkelen over.'),
      checked: '2026-11-16', license: 'BBC Learning English, link/embed via YouTube' }
  ];

  /* Candidates that could NOT be verified from the build environment.
     They are NOT shown to students. Check them in a normal browser, then move them to `resources`. */
  var pending = [
    { title: 'An informal email (B2 writing)', publisher: 'British Council LearnEnglish Teens', url: 'https://learnenglishteens.britishcouncil.org/skills/writing/b2-writing/informal-email', note: 'Site blocks automated requests; found via search only.' },
    { title: 'Introducing yourself by email (A1 writing)', publisher: 'British Council LearnEnglish Teens', url: 'https://learnenglishteens.britishcouncil.org/skills/writing/a1-writing/introducing-yourself-email', note: 'Site blocks automated requests; found via search only.' },
    { title: 'B1 writing', publisher: 'British Council LearnEnglish', url: 'https://learnenglish.britishcouncil.org/free-resources/writing/b1', note: 'Site blocks automated requests; found via search only.' }
  ];

  /* ------------------------------------------------------------------ */
  APP.modules.push({
    id: 'email-letter', group: 'write', icon: 'mail',
    title: t('Emails and letters', 'E-post og brev'),
    blurb: t('Formal or informal? Learn how to set out and write emails and letters.', 'Formell eller uformell? Lær å sette opp og skrive e-poster og brev.'),
    helps: t('You learn to choose the right style for the person you write to, and to set out an email or a letter correctly.', 'Du lærer å velge riktig stil til den du skriver til, og å sette opp en e-post eller et brev riktig.'),
    curriculum: ['K3', 'K5', 'K6'],
    top5: [
      t('Ask yourself first: Who am I writing to? The answer decides formal or informal.', 'Spør deg selv først: Hvem skriver jeg til? Svaret avgjør om du skriver formelt eller uformelt.'),
      t('The greeting and the closing greeting must match each other.', 'Hilsenen i starten og slutten må passe sammen.'),
      t('The first paragraph says why you are writing.', 'Første avsnitt sier hvorfor du skriver.'),
      t('New topic = new paragraph.', 'Nytt tema = nytt avsnitt.'),
      t('Formal texts: no contractions, no slang, no emojis.', 'Formelle tekster: ingen sammentrekninger, ingen slang, ingen emojis.')
    ],
    keyRule: {
      title: t('Sincerely or faithfully?', 'Sincerely eller faithfully?'),
      lines: [
        t('You know the name (Dear Ms Taylor) → **Yours sincerely,**', 'Du kjenner navnet (Dear Ms Taylor) → **Yours sincerely,**'),
        t('You do not know the name (Dear Sir or Madam) → **Yours faithfully,**', 'Du kjenner ikke navnet (Dear Sir or Madam) → **Yours faithfully,**')]
    },
    remember: t('Sir and Sincerely both start with S, but they do not go together!', 'Sir og Sincerely begynner begge på S, men de passer ikke sammen!'),
    compare: [
      { k: t('Who are you writing to?', 'Hvem skriver du til?'), a: t('friends, family, people your age', 'venner, familie, jevnaldrende'), b: t('a teacher, a headteacher, companies, the council, someone you do not know', 'lærer, rektor, bedrifter, kommunen, noen du ikke kjenner') },
      { k: t('Contractions', 'Sammentrekninger'), a: t('I\'m, don\'t, can\'t, it\'s', 'I\'m, don\'t, can\'t, it\'s'), b: t('I am, do not, cannot, it is', 'I am, do not, cannot, it is') },
      { k: t('Word choice', 'Ordvalg'), a: t('get, buy, kids, a lot of, find out', 'get, buy, kids, a lot of, find out'), b: t('receive, purchase, children, many, discover', 'receive, purchase, children, many, discover') },
      { k: t('Greeting', 'Hilsen'), a: t('Hi Tom, / Hey!', 'Hi Tom, / Hey!'), b: t('{Dear Mr Smith,|Dear Mr. Smith,} / Dear Sir or Madam,', '{Dear Mr Smith,|Dear Mr. Smith,} / Dear Sir or Madam,') },
      { k: t('Closing greeting', 'Avsluttende hilsen'), a: t('Love, / Best wishes, / See you soon!', 'Love, / Best wishes, / See you soon!'), b: t('{Yours sincerely,|Sincerely,} / {Yours faithfully,|Sincerely,}', '{Yours sincerely,|Sincerely,} / {Yours faithfully,|Sincerely,}') },
      { k: t('Sentences', 'Setninger'), a: t('short, exclamation marks are fine!', 'korte, utropstegn er greit!'), b: t('full sentences, no slang or emojis', 'hele setninger, ingen slang eller emojis') },
      { k: t('Tone', 'Tone'), a: t('personal: you ask about the receiver\'s life', 'personlig: du spør om livet til mottakeren'), b: t('polite and to the point', 'høflig og rett på sak') }
    ],
    sameMessage: {
      title: t('Same message – two ways', 'Samme beskjed – to måter'),
      informal: { text: 'Hey! Can you send me the homework? Thanks a lot!', nb: 'Hei! Kan du sende meg leksene? Tusen takk!' },
      formal: { text: 'Dear {Ms|Ms.} Hansen,\nCould you please send me the homework for this week?\nThank you in advance.', nb: 'Kjære fru Hansen,\nKan du være så snill å sende meg leksene for denne uken?\nTakk på forhånd.' },
      rule: t('Would you say it like this to your headteacher? If not, it is probably too informal.', 'Ville du sagt det slik til rektor? Hvis ikke, er det sannsynligvis for uformelt.')
    },
    ukus: [
      { k: t('Date', 'Dato'), uk: '16 November 2026', us: 'November 16, 2026' },
      { k: t('Closing greeting (formal)', 'Avsluttende hilsen (formell)'), uk: 'Yours sincerely, / Yours faithfully,', us: 'Sincerely, / Best regards,' },
      { k: t('Name unknown', 'Navn ukjent'), uk: 'Dear Sir or Madam,', us: 'To whom it may concern,' },
      { k: t('Titles', 'Titler'), uk: 'Mr Smith, Ms Hansen', us: 'Mr. Smith, Ms. Hansen' },
      { k: t('Spelling', 'Staving'), uk: 'favourite, organise, enquire', us: 'favorite, organize, inquire' },
      { k: t('Mum / mom', 'Mamma'), uk: 'mum', us: 'mom' }
    ],
    models: [informalEmail, formalEmail, informalLetter, formalLetter],
    phraseBank: phraseBank,
    practice: practice,
    checklist: checklist,
    resources: resources,
    pending: pending
  });
})();
