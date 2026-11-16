# TextLab (working name)

A free site where Norwegian students in 8th–10th grade can look up how to write in English:
clickable model texts at three levels, a phrase bank, practice tasks, checklists and checked links.
The interface is English with a Norwegian (bokmål) switch, and every model text has an optional Norwegian translation.

**Status: Phase 3 (draft).** Finished: the app shell, four writing modules (*Emails and letters*, *Diary entry*, *Short story*,
*Argumentative text*, each with 3 levels), and three new modules: *Grammar* (14 topics, including a searchable irregular-verb table and a grammar glossary),
*Sources and citation (APA 7th)* (8 topics, a source check and an APA citation builder) and *Dictionary skills* (6 topics and 2 clickable model dictionary entries).
All Phase 3 texts are drafts (`reviewed: false`) until the teacher approves them.

## Licence
All rights reserved, free to use online. See the file `LICENSE`.

## Privacy
No accounts, no cookies, no tracking, no external requests (a YouTube video loads only if the student clicks "Load the video").
Only display settings are remembered in the student's own browser. Answers, scores and ticks are never saved.

## What is where
```
index.html            the site (open this)
validate.html         checks the content files for mistakes (open this after editing)
LICENSE               all rights reserved, free to use online
UPLOAD-GUIDE.md       step-by-step: put the site on GitHub Pages
HOW-TO-ADD-CONTENT.md how to add and edit content (English + Norwegian)
css/style.css         colours and layout (the colour palette is at the top)
js/config.js          the name of the site, owner and contact
js/i18n.js            all buttons and labels in English and Norwegian
js/*.js               the program (no need to edit; hero.js is the quill that writes on the home page)
content/index.js      the list of modules
content/email-letter.js   the module Emails and letters
content/diary.js          the module Diary entry
content/short-story.js    the module Short story
content/argumentative.js  the module Argumentative text (with real sources, APA 7th)
content/grammar.js, grammar-2.js, grammar-3.js   the module Grammar (3 files: topics, verbs, glossary)
content/sources.js        the module Sources and citation (APA 7th)
content/dictionary.js     the module Dictionary skills (mock entries made for this site)
content/template-copy-me.js   a template for a new module
fonts/                Lexend, Atkinson Hyperlegible and Caveat (SIL Open Font License)
assets/               logo and icon
```

## Open it on your own computer
Double-click `index.html`. No installation needed.

## Curriculum
Based on *Læreplan i engelsk* (ENG01-06), https://www.udir.no/lk20/ENG01-06. Turn on **Teacher view** in the Display menu to see the competence goals.
The three levels are the teacher's own progression, not official levels.
