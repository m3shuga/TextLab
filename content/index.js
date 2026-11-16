/* Content registry.
   To add a new module (text type): copy content/template-copy-me.js,
   rename it (lowercase, no spaces, no æøå), fill it in, and add its
   file name (without .js) to the list below. Nothing else needs to change. */
APP.moduleFiles = [
  'email-letter',
  'diary',
  'short-story',
  'argumentative'
];

/* Modules that are planned but not built yet. They show as "Coming soon" on the home page.
   A planned module disappears from this list by itself when a built module has the same id. */
APP.comingSoon = [
  { group: 'write', id: 'diary', icon: 'pen', title: { en: 'Diary entry', nb: 'Dagboknotat' } },
  { group: 'write', id: 'short-story', icon: 'book', title: { en: 'Short story', nb: 'Novelle' } },
  { group: 'write', id: 'argumentative', icon: 'star', title: { en: 'Argumentative text', nb: 'Argumenterende tekst' } },
  { group: 'grammar', id: 'grammar', icon: 'structure', title: { en: 'Grammar', nb: 'Grammatikk' } },
  { group: 'skills', id: 'sources', icon: 'info', title: { en: 'Sources and citation (APA 7th)', nb: 'Kilder og henvisninger (APA 7)' } },
  { group: 'skills', id: 'dictionary', icon: 'language', title: { en: 'Dictionary skills', nb: 'Ordbokbruk' } }
];
