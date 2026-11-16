/* ==========================================================================
   TEMPLATE for a new module (a new text type or topic).

   HOW TO USE
   1. Copy this file and give the copy a new name: lowercase letters, numbers
      and hyphens only, no spaces and no æøå. Example: diary.js
      (Do not start the name with an underscore. GitHub Pages ignores those files.)
   2. Fill in the copy. Keep every { en, nb } pair complete: English AND Norwegian.
   3. Open content/index.js and add the file name (without .js) to the list.
   4. Open validate.html in your browser to check the new module.

   Variants: write {colour|color} to show colour in British English and color in
   American English. Bold: **word**. A new line: \n. A bullet line starts with "- ".
   ========================================================================== */
(function () {
  var t = function (en, nb) { return { en: en, nb: nb }; };                       // a text in two languages
  var seg = function (part, text, nb, flags) { return { part: part, text: text, nb: nb, f: flags || {} }; }; // one clickable piece of a model text

  APP.modules.push({
    id: 'my-new-module',                       // same as the file name, no spaces
    group: 'write',                            // 'write', 'grammar' or 'skills'
    icon: 'pen',                               // mail, doc, pen, book, star, info, structure, language
    title: t('My new text type', 'Min nye teksttype'),
    blurb: t('One short sentence for the card on the home page.', 'Én kort setning til kortet på forsiden.'),
    helps: t('What the student learns, in plain English.', 'Hva eleven lærer, på enkelt norsk.'),
    curriculum: ['K3', 'K6'],                  // codes K1–K11 (see About page, Teacher view)
    top5: [ t('Rule one', 'Regel én'), t('Rule two', 'Regel to'), t('Rule three', 'Regel tre'), t('Rule four', 'Regel fire'), t('Rule five', 'Regel fem') ],

    models: [{
      id: 'my-model', kind: 'letter',          // kind: 'email' or 'letter' (changes the paper style)
      register: 'neutral',                     // 'formal', 'informal' or 'neutral'
      title: t('My model text', 'Min modelltekst'),
      situation: t('Who writes to whom, and why.', 'Hvem som skriver til hvem, og hvorfor.'),

      // The three levels. Same parts in each level. reviewed:false until you approve the text.
      levels: {
        1: { reviewed: false, segments: [
          seg('opening', 'A short, simple version of the text.', 'En kort, enkel versjon av teksten.'),
          seg('ending',  'The last part.', 'Siste del.')
        ] },
        2: { reviewed: false, segments: [
          seg('opening', 'A medium version of the text.', 'En middels versjon av teksten.'),
          seg('ending',  'The last part, a little longer.', 'Siste del, litt lengre.')
        ] },
        3: { reviewed: false, segments: [
          seg('opening', 'A longer and more varied version of the text.', 'En lengre og mer variert versjon av teksten.'),
          seg('ending',  'The last part, with more detail.', 'Siste del, med flere detaljer.')
        ] }
      },

      // The explanation for each part. It is shared by all three levels.
      parts: {
        'opening': { n: 1, cat: 'structure',   // cat: format, structure, language or tone
          name: t('Opening', 'Åpning'),
          fn: t('What this part does.', 'Hva denne delen gjør.'),
          tips: [ t('Tip one.', 'Tips én.'), t('Tip two.', 'Tips to.') ],
          levelTips: { 3: [ t('An extra tip for Level 3.', 'Et ekstra tips for nivå 3.') ] },   // optional
          phrases: ['A useful phrase'],                                                         // optional
          mistake: { bad: 'A wrong example', good: 'A right example', note: t('Why.', 'Hvorfor.') } }, // optional
        'ending': { n: 2, cat: 'structure',
          name: t('Ending', 'Avslutning'),
          fn: t('What this part does.', 'Hva denne delen gjør.'),
          tips: [ t('Tip one.', 'Tips én.') ], phrases: [] }
      }
    }],

    // Phrases: { en, nb gloss, reg: formal|informal|neutral, lvl: 1|2|3, ex: example sentence (optional) }
    phraseBank: [
      { group: t('Starting', 'Å begynne'), items: [
        { en: 'To begin with, …', nb: 'Til å begynne med, …', reg: 'neutral', lvl: 1, ex: 'To begin with, I want to say thank you.' }
      ] }
    ],

    // Practice tasks. type: mcq | gap | sort | order. level: the levels where the task is shown.
    practice: [
      { id: 'my-mcq-1', type: 'mcq', level: [1, 2, 3], q: t('Which is correct?', 'Hvilken er riktig?'),
        options: ['Wrong', 'Right', 'Wrong too'], answer: 1, why: t('Because …', 'Fordi …') }
      // gap:   { id, type:'gap', level, q, before:'text before', after:'text after', options:[...], answer:0, why }
      // sort:  { id, type:'sort', level, q, buckets:[t('A','A'), t('B','B')], items:[{text:'x', b:0}, {text:'y', b:1}], why }
      // order: { id, type:'order', level, q, items:['first','second','third'], why }   (items are in the CORRECT order)
    ],

    checklist: [
      { group: t('Before you hand in', 'Før du leverer'), items: [ t('I have read my text again.', 'Jeg har lest teksten min én gang til.') ] }
    ],

    // Only put links here that you have opened and checked yourself. Add the date you checked.
    resources: [
      // { id:'x', title:'Page title', publisher:'Who made it', url:'https://…', type:'article', // article | video | exercise
      //   lang:'en', level:'B1', why: t('Why it is useful.', 'Hvorfor den er nyttig.'),
      //   checked:'2026-11-16', license:'Link only' }
    ],
    pending: []   // links you have found but not checked yet (not shown to students)
  });
})();
