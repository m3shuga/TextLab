/* Topic pages for reference-style modules (Grammar, Sources and citation, Dictionary skills).
   A module with  topics: [ { id, title, blurb, curriculum, top5, sections:[{ h, blocks:[...] }], practice:[...] } ]
   gets cards on its overview page and one page per topic.
   Blocks:  {p} {ul} {rule} {nor} {ex} {table} {pairs} {steps} {lvl, blocks} {widget}
   Widgets: verbs, glossary, apa (citation builder), source-check, decider. */
(function () {
  'use strict';
  var A = window.APP, t = A.t, L = A.L, esc = A.esc, rich = A.rich, icon = A.icon;
  var u = function (en, nb) { return { en: en, nb: nb }; };
  var U = {   // labels used only by the widgets below
    'tp.all': u('All topics', 'Alle temaer'), 'tp.levelup': u('Level up', 'Neste nivå'), 'tp.more': u('There is more at a higher level. Choose Level {n} above to see it.', 'Det er mer på et høyere nivå. Velg nivå {n} over for å se det.'),
    'tp.nor': u('Typical mistake for Norwegian speakers', 'Typisk feil for norsktalende'), 'tp.rule': u('Key rule', 'Nøkkelregel'), 'tp.topics': u('Topics', 'Temaer'), 'tp.level': u('Level', 'Nivå'),
    'tp.ex': u('Examples', 'Eksempler'), 'tp.draft': u('Draft: not yet reviewed by the teacher', 'Utkast: ikke gjennomgått av læreren ennå'), 'tp.rev': u('Reviewed by the teacher', 'Gjennomgått av læreren'),
    'vb.search': u('Search a verb (English or Norwegian)', 'Søk etter et verb (engelsk eller norsk)'), 'vb.core': u('Only the most common verbs', 'Bare de vanligste verbene'), 'vb.cover': u('Drill mode (hide the forms)', 'Øvingsmodus (skjul formene)'),
    'vb.base': u('Base form', 'Grunnform'), 'vb.past': u('Past simple', 'Preteritum'), 'vb.pp': u('Past participle', 'Perfektum partisipp'), 'vb.nb': u('Norwegian', 'Norsk'), 'vb.pattern': u('Pattern', 'Mønster'), 'vb.show': u('Show', 'Vis'),
    'vb.count': u('Showing {n} of {total} verbs', 'Viser {n} av {total} verb'), 'vb.all': u('All', 'Alle'), 'vb.none': u('No verb matches.', 'Ingen verb passer.'),
    'vb.aaa': u('Same in all three', 'Lik i alle tre'), 'vb.abb': u('Past = participle', 'Preteritum = partisipp'), 'vb.aba': u('Base = participle', 'Grunnform = partisipp'), 'vb.abc': u('All different', 'Alle ulike'),
    'vb.ex.aaa': u('cut – cut – cut', 'cut – cut – cut'), 'vb.ex.abb': u('buy – bought – bought', 'buy – bought – bought'), 'vb.ex.aba': u('come – came – come', 'come – came – come'), 'vb.ex.abc': u('see – saw – seen', 'see – saw – seen'),
    'gl.search': u('Search a term (English or Norwegian)', 'Søk etter et begrep (engelsk eller norsk)'), 'gl.en': u('English term', 'Engelsk begrep'), 'gl.nb': u('Norsk', 'Norsk'), 'gl.mean': u('Meaning', 'Betydning'), 'gl.ex': u('Example', 'Eksempel'),
    'sc.q': u('Answer the questions about the source you want to use.', 'Svar på spørsmålene om kilden du vil bruke.'), 'sc.yes': u('Yes', 'Ja'), 'sc.unsure': u('Not sure', 'Usikker'), 'sc.no': u('No', 'Nei'), 'sc.look': u('Where to look', 'Hvor du kan se'),
    'sc.res': u('Your result', 'Resultatet ditt'), 'sc.reset': u('Start again', 'Start på nytt'), 'sc.good': u('This looks like a reliable source. Still compare it with one more source.', 'Dette ser ut som en pålitelig kilde. Sammenlign den likevel med én kilde til.'),
    'sc.mid': u('Be careful. Some answers are "not sure" or "no". Look for a better source, or check the facts in another source.', 'Vær forsiktig. Noen svar er «usikker» eller «nei». Se etter en bedre kilde, eller sjekk faktaene i en annen kilde.'), 'sc.bad': u('This source is weak. Do not use it for facts. Find a better one.', 'Denne kilden er svak. Ikke bruk den til fakta. Finn en bedre.'),
    'sc.pending': u('Answer all the questions to see your result.', 'Svar på alle spørsmålene for å se resultatet.'), 'sc.note': u('This tool helps you think. It cannot decide for you. Always compare with another source.', 'Dette verktøyet hjelper deg å tenke. Det kan ikke bestemme for deg. Sammenlign alltid med en annen kilde.'),
    'dc.q': u('What do you want to do? Click one.', 'Hva vil du gjøre? Klikk på ett.'), 'dc.use': u('Use these', 'Bruk disse'), 'dc.tip': u('Tip', 'Tips'),
    'apa.type': u('Type of source', 'Type kilde'), 'apa.author': u('Author', 'Forfatter'), 'apa.person': u('Person(s)', 'Person(er)'), 'apa.org': u('Organisation or channel', 'Organisasjon eller kanal'), 'apa.none': u('No author', 'Ingen forfatter'),
    'apa.fam': u('Family name', 'Etternavn'), 'apa.giv': u('Given name(s)', 'Fornavn'), 'apa.orgname': u('Name of the organisation, channel or company', 'Navn på organisasjon, kanal eller firma'),
    'apa.year': u('Year', 'År'), 'apa.month': u('Month (optional)', 'Måned (valgfritt)'), 'apa.day': u('Day (optional)', 'Dag (valgfritt)'), 'apa.nd': u('There is no date (n.d.)', 'Det er ingen dato (n.d.)'),
    'apa.title': u('Title (sentence case)', 'Tittel (liten forbokstav)'), 'apa.site': u('Name of the website', 'Navn på nettstedet'), 'apa.paper': u('Name of the newspaper or magazine', 'Navn på avisen eller magasinet'), 'apa.url': u('Web address (URL)', 'Nettadresse (URL)'),
    'apa.journal': u('Name of the journal', 'Navn på tidsskriftet'), 'apa.vol': u('Volume', 'Bind'), 'apa.issue': u('Issue (optional)', 'Hefte (valgfritt)'), 'apa.pages': u('Pages, or Article number', 'Sider, eller artikkelnummer'), 'apa.doi': u('DOI (optional)', 'DOI (valgfritt)'),
    'apa.pub': u('Publisher', 'Utgiver'), 'apa.ed': u('Edition (optional, e.g. 2nd ed.)', 'Utgave (valgfritt, f.eks. 2nd ed.)'), 'apa.tool': u('Name of the AI tool', 'Navn på KI-verktøyet'), 'apa.ver': u('Version (optional)', 'Versjon (valgfritt)'),
    'apa.code': u('Code or number (optional)', 'Kode eller nummer (valgfritt)'), 'apa.fill': u('Fill in an example', 'Fyll inn et eksempel'), 'apa.clear': u('Clear', 'Tøm'), 'apa.out': u('Your reference list entry', 'Kilden din i kildelisten'),
    'apa.intext': u('In the text', 'I teksten'), 'apa.paren': u('In brackets', 'I parentes'), 'apa.narr': u('In the sentence', 'I setningen'), 'apa.copy': u('Copy', 'Kopier'), 'apa.copyi': u('Copy with italics', 'Kopier med kursiv'),
    'apa.hints': u('Check this', 'Sjekk dette'), 'apa.ok': u('No problems found. Compare with the rules above.', 'Ingen problemer funnet. Sammenlign med reglene over.'), 'apa.empty': u('Start filling in the form. Your reference appears here.', 'Begynn å fylle ut skjemaet. Kilden din vises her.'),
    'apa.real': u('Real source', 'Ekte kilde'), 'apa.fake': u('Example only (made up)', 'Bare eksempel (funnet på)'), 'apa.note': u('Nothing you type is saved or sent anywhere.', 'Ingenting du skriver blir lagret eller sendt noe sted.'),
    'apa.trans': u('English translation of the title (only if the title is not in English)', 'Engelsk oversettelse av tittelen (bare hvis tittelen ikke er på engelsk)'), 'apa.copied': u('Copied!', 'Kopiert!'), 'apa.n3': u('Add up to three authors. Leave a row empty if you do not need it.', 'Legg til opptil tre forfattere. La en rad stå tom hvis du ikke trenger den.')
  };
  function lbl(k, vars) { var e = U[k]; if (!e) { console.warn('Missing label ' + k); return k; } var s = L(e); if (vars) Object.keys(vars).forEach(function (x) { s = s.replace(new RegExp('\\{' + x + '\\}', 'g'), vars[x]); }); return s; }
  A.lbl = lbl; A.U = U;

  var widgets = {};

  /* ---------- topic cards + page ---------- */
  A.topicCards = function (m) {
    return '<section aria-labelledby="tps"><h2 id="tps">' + esc(lbl('tp.topics')) + '</h2><div class="cards">' + m.topics.map(function (tp) {
      return '<a class="card" href="#/m/' + m.id + '/t/' + tp.id + '"><span class="card-ic">' + icon(tp.icon || m.icon || 'book') + '</span><span class="card-t">' + esc(L(tp.title)) + '</span><span class="card-b">' + esc(L(tp.blurb)) + '</span>' + A.kTags(tp.curriculum) + '<span class="card-go" aria-hidden="true">' + icon('arrow-right') + '</span></a>';
    }).join('') + '</div></section>';
  };
  function pillsHtml(m, cur) {
    return '<nav class="pills" aria-label="' + esc(lbl('tp.topics')) + '">' + m.topics.map(function (tp) {
      return '<a href="#/m/' + m.id + '/t/' + tp.id + '"' + (tp.id === cur ? ' aria-current="page"' : '') + '>' + esc(L(tp.title)) + '</a>';
    }).join('') + '</nav>';
  }

  function rows(table) { return '<div class="tablewrap"><table class="cmp"><thead><tr>' + table.head.map(function (h) { return '<th scope="col">' + esc(L(h)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
    table.rows.map(function (r) { return '<tr><th scope="row">' + (typeof r[0] === 'string' ? '<span lang="en">' + rich(r[0]) + '</span>' : rich(L(r[0]))) + '</th>' + r.slice(1).map(function (c) { return typeof c === 'string' ? '<td lang="en">' + rich(c) + '</td>' : '<td>' + rich(L(c)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>'; }

  function block(m, tp, b, st) {
    var p = A.state.prefs;
    if (b.p) return '<p>' + rich(L(b.p)) + '</p>';
    if (b.ul) return '<ul>' + b.ul.map(function (x) { return '<li>' + (typeof x === 'string' ? '<span lang="en">' + rich(x) + '</span>' : rich(L(x))) + '</li>'; }).join('') + '</ul>';
    if (b.rule) return '<div class="rulebox"><h3>' + icon('bulb') + esc(lbl('tp.rule')) + '</h3>' + (Array.isArray(b.rule) ? '<ul>' + b.rule.map(function (x) { return '<li>' + (typeof x === 'string' ? '<span lang="en">' + rich(x) + '</span>' : rich(L(x))) + '</li>'; }).join('') + '</ul>' : '<p>' + rich(L(b.rule)) + '</p>') + '</div>';
    if (b.nor) return '<div class="norbox"><h3>' + icon('warn') + esc(lbl('tp.nor')) + '</h3><p>' + rich(L(b.nor.note)) + '</p>' + (b.nor.bad ? '<p class="bad" lang="en"><span class="mk">' + icon('x') + '<span class="sr">' + esc(t('mv.wrong')) + ': </span></span>' + rich(b.nor.bad) + '</p><p class="good" lang="en"><span class="mk">' + icon('check') + '<span class="sr">' + esc(t('mv.right')) + ': </span></span>' + rich(b.nor.good) + '</p>' : '') + '</div>';
    if (b.ex) return '<ul class="exlist" aria-label="' + esc(lbl('tp.ex')) + '">' + b.ex.map(function (x) { return '<li><span lang="en">' + rich(x.en) + '</span>' + (p.showNb && x.nb ? '<span class="nb" lang="nb">' + rich(x.nb) + '</span>' : '') + '</li>'; }).join('') + '</ul>';
    if (b.table) return rows(b.table);
    if (b.pairs) return '<div class="pairs">' + b.pairs.map(function (pr) {
      return '<div class="pair"><p class="bad" lang="en"><span class="mk">' + icon('x') + '<span class="sr">' + esc(t('mv.wrong')) + ': </span></span>' + rich(pr.bad) + '</p><p class="good" lang="en"><span class="mk">' + icon('check') + '<span class="sr">' + esc(t('mv.right')) + ': </span></span>' + rich(pr.good) + '</p>' + (pr.note ? '<p class="muted">' + rich(L(pr.note)) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
    if (b.steps) return '<ol class="steps">' + b.steps.map(function (s, i) { return '<li><span class="step-n">' + (i + 1) + '</span><div><strong>' + rich(L(s.h)) + '</strong><p>' + rich(L(s.p)) + '</p></div></li>'; }).join('') + '</ol>';
    if (b.lvl) {
      if (p.level >= b.lvl) return '<div class="levelup"><h3>' + icon('star') + esc(lbl('tp.levelup')) + ' · ' + esc(t('lv.n', { n: b.lvl })) + '</h3>' + b.blocks.map(function (x) { return block(m, tp, x, st); }).join('') + '</div>';
      st.hidden = Math.max(st.hidden || 0, b.lvl); return '';
    }
    if (b.widget) return widgets[b.widget] ? widgets[b.widget](m, tp, b) : '';
    return '';
  }

  A.topicView = function (m, r) {
    var tp = m.topics.filter(function (x) { return x.id === r.sub; })[0];
    if (!tp) return A.views.notfound(r);
    var p = A.state.prefs, st = {};
    A.state.title = L(tp.title) + ' – ' + L(m.title);
    var levelLabels = [1, 2, 3].map(function (n) { return { v: n, label: esc(t('lv.n', { n: n })) + '<small>' + esc(t('lv.g' + n)) + '</small>', title: t('lv.d' + n) }; });
    var out = '<nav class="crumbs" aria-label="' + esc(t('nav.crumbs')) + '"><a href="#/">' + esc(t('nav.home')) + '</a><span aria-hidden="true"> › </span><span>' + esc(t('group.' + m.group)) + '</span><span aria-hidden="true"> › </span><a href="#/m/' + m.id + '">' + esc(L(m.title)) + '</a></nav>' +
      '<header class="page-head"><h1>' + esc(L(tp.title)) + '</h1><p class="lead">' + esc(L(tp.blurb)) + '</p>' + A.kTags(tp.curriculum || m.curriculum) + '</header>' + pillsHtml(m, tp.id);
    if (p.teacher) out += '<p class="teacher-only draft">' + icon('info') + ' ' + esc(lbl(tp.reviewed ? 'tp.rev' : 'tp.draft')) + '</p>';
    if (!tp.widget) out += '<div class="toolbar"><div class="tb-group"><span class="set-lbl">' + esc(lbl('tp.level')) + '</span>' + A.segCtl(t('mv.level'), levelLabels, p.level, 'setLevel', ' data-key="tlv"') + '<span class="muted lv-d">' + esc(t('lv.d' + p.level)) + '</span></div>' +
      '<div class="tb-group tb-switches">' + A.sw('toggleNb', p.showNb, esc(t('mv.nb')), 'swnb') + '</div></div>';
    if (tp.top5) out += '<section class="box top5" aria-labelledby="top5"><h2 id="top5">' + icon('star') + esc(t('ov.top5')) + '</h2><ol>' + tp.top5.map(function (x) { return '<li>' + rich(L(x)) + '</li>'; }).join('') + '</ol></section>';
    (tp.sections || []).forEach(function (sec, si) {
      out += '<section class="tsec" aria-labelledby="sec' + si + '"><h2 id="sec' + si + '">' + esc(L(sec.h)) + '</h2>' + sec.blocks.map(function (b) { return block(m, tp, b, st); }).join('') + '</section>';
    });
    if (tp.widget) out += widgets[tp.widget] ? widgets[tp.widget](m, tp, tp) : '';
    if (st.hidden) out += '<p class="muted more-lv">' + icon('info') + ' ' + esc(lbl('tp.more', { n: Math.max(p.level + 1, 2) })) + '</p>';
    if (tp.practice && tp.practice.length) out += A.practiceHtml(m, { embedded: true });
    if (tp.resources && tp.resources.length) out += '<section><h2>' + esc(t('tab.learn')) + '</h2><ul class="reslist">' + tp.resources.map(function (rs) { return A.resourceCard(m, rs); }).join('') + '</ul></section>';
    return out;
  };

  /* ================= widget: irregular verbs ================= */
  var VP = ['aaa', 'abb', 'aba', 'abc'];
  function pat(vb) { var b = A.plain(vb.b), p = A.plain(vb.p).split('/')[0], pp = A.plain(vb.pp).split('/')[0]; if (b === p && p === pp) return 'aaa'; if (p === pp) return 'abb'; if (b === pp) return 'aba'; return 'abc'; }
  widgets.verbs = function (m) {
    var v = A.state.view; v.vb = v.vb || { q: '', pat: 'all', core: true, cover: false, rev: {} };
    var f = v.vb, q = f.q.trim().toLowerCase(), shown = 0;
    var list = m.verbs.filter(function (x) {
      if (f.core && !x.core) return false;
      if (f.pat !== 'all' && pat(x) !== f.pat) return false;
      if (q && (x.b + ' ' + A.plain(x.p) + ' ' + A.plain(x.pp) + ' ' + x.nb).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var out = '<section class="vb"><div class="filters"><label class="field"><span class="sr">' + esc(lbl('vb.search')) + '</span><input type="search" class="input" placeholder="' + esc(lbl('vb.search')) + '" value="' + esc(f.q) + '" data-input="vbq" data-key="vbq" autocomplete="off"></label>' +
      '<div class="filter-row"><span class="set-lbl">' + esc(lbl('vb.pattern')) + '</span>' + A.segCtl(lbl('vb.pattern'), [{ v: 'all', label: lbl('vb.all') }].concat(VP.map(function (k) { return { v: k, label: lbl('vb.' + k), title: lbl('vb.ex.' + k) }; })), f.pat, 'vbPat') + '</div>' +
      '<div class="filter-row">' + A.sw('vbCore', f.core, esc(lbl('vb.core')), 'vbcore') + A.sw('vbCover', f.cover, esc(lbl('vb.cover')), 'vbcover') + '</div></div>' +
      '<p class="muted" role="status">' + esc(lbl('vb.count', { n: list.length, total: m.verbs.length })) + '</p>';
    if (!list.length) return out + '<p class="empty">' + esc(lbl('vb.none')) + '</p></section>';
    out += '<div class="tablewrap"><table class="cmp vtable"><thead><tr><th scope="col">' + esc(lbl('vb.base')) + '</th><th scope="col">' + esc(lbl('vb.past')) + '</th><th scope="col">' + esc(lbl('vb.pp')) + '</th><th scope="col">' + esc(lbl('vb.nb')) + '</th><th scope="col">' + esc(lbl('vb.pattern')) + '</th></tr></thead><tbody>' +
      list.map(function (x) {
        var open = !f.cover || f.rev[x.b];
        var cell = open ? '<span lang="en">' + rich(x.p) + '</span>' : '<button type="button" class="btn btn-ghost sm" data-act="vbShow" data-b="' + esc(x.b) + '" data-key="vs-' + esc(x.b) + '">' + esc(lbl('vb.show')) + '</button>';
        var cell2 = open ? '<span lang="en">' + rich(x.pp) + '</span>' : '<span class="muted">?</span>';
        return '<tr><th scope="row" lang="en">' + esc(x.b) + '</th><td>' + cell + '</td><td>' + cell2 + '</td><td lang="nb">' + esc(x.nb) + '</td><td><span class="tag">' + esc(lbl('vb.' + pat(x))) + '</span></td></tr>';
      }).join('') + '</tbody></table></div>';
    return out + '<p class="muted sm-t">' + esc(A.state.prefs.variety === 'us' ? lbl('vb.us') : lbl('vb.uk')) + '</p></section>';
  };
  U['vb.uk'] = u('British forms are shown. Use the UK | US switch for American forms (for example learnt / learned, got / gotten).', 'Britiske former vises. Bruk UK | US-bryteren for amerikanske former (for eksempel learnt / learned, got / gotten).');
  U['vb.us'] = u('American forms are shown. Use the UK | US switch for British forms.', 'Amerikanske former vises. Bruk UK | US-bryteren for britiske former.');
  A.inputs.vbq = function (el) { A.state.view.vb.q = el.value; A.rerender(); };
  A.acts.vbPat = function (el) { A.state.view.vb.pat = el.dataset.v; A.rerender(); };
  A.acts.vbCore = function () { A.state.view.vb.core = !A.state.view.vb.core; A.rerender(); };
  A.acts.vbCover = function () { var f = A.state.view.vb; f.cover = !f.cover; f.rev = {}; A.rerender(); };
  A.acts.vbShow = function (el) { A.state.view.vb.rev[el.dataset.b] = true; A.rerender(); };

  /* ================= widget: glossary ================= */
  widgets.glossary = function (m) {
    var v = A.state.view; v.gl = v.gl || { q: '' }; var q = v.gl.q.trim().toLowerCase();
    var list = m.glossary.filter(function (g) { return !q || (g.en + ' ' + g.nb + ' ' + L(g.def)).toLowerCase().indexOf(q) >= 0; });
    var out = '<section class="gl"><div class="filters"><label class="field"><span class="sr">' + esc(lbl('gl.search')) + '</span><input type="search" class="input" placeholder="' + esc(lbl('gl.search')) + '" value="' + esc(v.gl.q) + '" data-input="glq" data-key="glq" autocomplete="off"></label></div><p class="muted" role="status">' + esc(lbl('vb.count', { n: list.length, total: m.glossary.length })) + '</p>';
    if (!list.length) return out + '<p class="empty">' + esc(lbl('vb.none')) + '</p></section>';
    return out + '<div class="tablewrap"><table class="cmp"><thead><tr><th scope="col">' + esc(lbl('gl.en')) + '</th><th scope="col">' + esc(lbl('gl.nb')) + '</th><th scope="col">' + esc(lbl('gl.mean')) + '</th><th scope="col">' + esc(lbl('gl.ex')) + '</th></tr></thead><tbody>' +
      list.map(function (g) { return '<tr><th scope="row" lang="en">' + esc(g.en) + '</th><td lang="nb">' + esc(g.nb) + '</td><td>' + rich(L(g.def)) + '</td><td lang="en">' + rich(g.ex || '') + '</td></tr>'; }).join('') + '</tbody></table></div></section>';
  };
  A.inputs.glq = function (el) { A.state.view.gl.q = el.value; A.rerender(); };

  /* ================= widget: source check (is the source reliable?) ================= */
  widgets['source-check'] = function (m, tp, b) {
    var v = A.state.view; v.sc = v.sc || {};
    var n = b.questions.length, answered = Object.keys(v.sc).length, score = 0;
    Object.keys(v.sc).forEach(function (k) { score += v.sc[k] === 'yes' ? 2 : v.sc[k] === 'unsure' ? 1 : 0; });
    var out = '<section class="srccheck" aria-labelledby="scq"><h2 id="scq">' + esc(L(b.title)) + '</h2><p>' + esc(lbl('sc.q')) + '</p><ol class="scl">' + b.questions.map(function (q, i) {
      var a = v.sc[q.id];
      return '<li class="scq"><p class="scq-q"><strong>' + esc(L(q.q)) + '</strong></p><p class="muted sm-t">' + esc(lbl('sc.look')) + ': ' + esc(L(q.look)) + '</p>' +
        '<span class="seg" role="group" aria-label="' + esc(L(q.q)) + '">' + [['yes', 'sc.yes'], ['unsure', 'sc.unsure'], ['no', 'sc.no']].map(function (o) { return '<button type="button" class="seg-btn" data-act="scAns" data-id="' + q.id + '" data-v="' + o[0] + '" aria-pressed="' + (a === o[0]) + '">' + esc(lbl(o[1])) + '</button>'; }).join('') + '</span></li>';
    }).join('') + '</ol>';
    var res;
    if (answered < n) res = '<p class="muted">' + icon('info') + ' ' + esc(lbl('sc.pending')) + ' (' + answered + '/' + n + ')</p>';
    else { var r = score >= n * 2 - 2 ? 'good' : score >= n ? 'mid' : 'bad'; res = '<div class="fb ' + (r === 'good' ? 'ok' : 'no') + '" role="status">' + icon(r === 'good' ? 'check' : 'warn') + '<div><strong>' + esc(lbl('sc.res')) + ':</strong> ' + esc(lbl('sc.' + r)) + '</div></div>'; }
    return out + res + '<p class="muted sm-t">' + esc(lbl('sc.note')) + '</p><p><button type="button" class="btn btn-ghost sm" data-act="scReset">' + esc(lbl('sc.reset')) + '</button></p></section>';
  };
  A.acts.scAns = function (el) { var v = A.state.view; v.sc = v.sc || {}; v.sc[el.dataset.id] = el.dataset.v; A.rerender(); };
  A.acts.scReset = function () { A.state.view.sc = {}; A.rerender(); };

  /* ================= widget: decider (which dictionary for which job?) ================= */
  widgets.decider = function (m, tp, b) {
    var v = A.state.view, cur = v.dc, opt = cur == null ? null : b.options[cur];
    var out = '<section class="decider"><h2>' + esc(L(b.title)) + '</h2><p>' + esc(lbl('dc.q')) + '</p><ul class="opts">' + b.options.map(function (o, i) {
      return '<li><button type="button" class="opt' + (cur === i ? ' right' : '') + '" data-act="dcPick" data-i="' + i + '" data-key="dc-' + i + '" aria-pressed="' + (cur === i) + '">' + esc(L(o.label)) + '</button></li>';
    }).join('') + '</ul>';
    if (opt) out += '<div class="stage-detail" aria-live="polite"><h3>' + esc(lbl('dc.use')) + '</h3><ul>' + opt.tools.map(function (x) { return '<li>' + rich(L(x)) + '</li>'; }).join('') + '</ul>' + (opt.tip ? '<p class="muted">' + icon('bulb') + ' <strong>' + esc(lbl('dc.tip')) + ':</strong> ' + rich(L(opt.tip)) + '</p>' : '') + '</div>';
    return out + '</section>';
  };
  A.acts.dcPick = function (el) { var v = A.state.view; v.dc = v.dc === +el.dataset.i ? null : +el.dataset.i; A.rerender(); };

  /* ================= widget: APA 7th citation builder ================= */
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var TYPES = {
    web: { n: u('Web page', 'Nettside'), f: ['author', 'date', 'title', 'site', 'url'], italic: true },
    news: { n: u('Online newspaper or magazine article', 'Nettavis- eller magasinartikkel'), f: ['author', 'date', 'title', 'paper', 'url'], italic: false },
    journal: { n: u('Journal article', 'Tidsskriftartikkel'), f: ['author', 'year', 'title', 'journal', 'vol', 'issue', 'pages', 'doi'], italic: false },
    book: { n: u('Book', 'Bok'), f: ['author', 'year', 'title', 'ed', 'pub', 'url'], italic: true },
    video: { n: u('YouTube video', 'YouTube-video'), f: ['author', 'date', 'title', 'url'], italic: true },
    image: { n: u('Photo or image from a website', 'Foto eller bilde fra et nettsted'), f: ['author', 'date', 'title', 'site', 'url'], italic: true },
    ai: { n: u('AI chatbot (for example ChatGPT)', 'KI-chatbot (for eksempel ChatGPT)'), f: ['org', 'year', 'tool', 'ver', 'url'], italic: true },
    report: { n: u('Report, curriculum or official document', 'Rapport, læreplan eller offentlig dokument'), f: ['author', 'date', 'title', 'code', 'pub', 'url'], italic: true }
  };
  var EX = {
    web: { real: true, authorType: 'org', org: 'Utdanningsdirektoratet', year: '2026', month: 'September', day: '16', title: 'Anbefalinger om regulering av mobiler og private digitale enheter i skolen', trans: 'Recommendations for regulating mobile phones and private digital devices in schools', url: 'https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/anbefalinger-for-mobil-og-digitale-enheter-i-skolen/' },
    news: { real: false, authorType: 'person', a: [{ fam: 'Sample', giv: 'Sam Alex' }], year: '2026', month: 'March', day: '3', title: 'Students try a week without phones', paper: 'Example Daily News', url: 'https://www.example.com/news/week-without-phones' },
    journal: { real: true, authorType: 'person', a: [{ fam: 'Beland', giv: 'Louis-Philippe' }, { fam: 'Murphy', giv: 'Richard' }], year: '2016', title: 'Ill communication: Technology, distraction & student performance', journal: 'Labour Economics', vol: '41', pages: '61-76', doi: '10.1016/j.labeco.2016.04.004' },
    book: { real: true, authorType: 'person', a: [{ fam: 'Rowling', giv: 'J. K.' }], year: '1997', title: 'Harry Potter and the philosopher\'s stone', pub: 'Bloomsbury' },
    video: { real: true, authorType: 'org', org: 'BBC Learning English', year: '', nd: true, title: 'Formal English and informal English - BBC English Masterclass', url: 'https://www.youtube.com/watch?v=hdKYl8Tg_FQ' },
    image: { real: false, authorType: 'person', a: [{ fam: 'Sample', giv: 'Sasha' }], year: '2025', title: 'Children reading in a library', site: 'Example Photo Library', url: 'https://www.example.com/photos/children-reading' },
    ai: { real: true, authorType: 'org', org: 'OpenAI', year: '2023', title: 'ChatGPT', ver: 'Mar 14 version', url: 'https://chat.openai.com/chat' },
    report: { real: true, authorType: 'org', org: 'Utdanningsdirektoratet', year: '2026', month: 'May', day: '20', title: 'Læreplan i engelsk', code: 'ENG01-06', url: 'https://www.udir.no/lk20/ENG01-06' }
  };
  function blankApa(type) { return { trans: '', type: type || 'web', authorType: 'person', a: [{ fam: '', giv: '' }, { fam: '', giv: '' }, { fam: '', giv: '' }], org: '', year: '', month: '', day: '', nd: false, title: '', site: '', paper: '', url: '', journal: '', vol: '', issue: '', pages: '', doi: '', pub: '', ed: '', tool: '', ver: '', code: '' }; }
  function initials(g) { return g.trim().split(/\s+/).filter(Boolean).map(function (w) { return w.split('-').map(function (x) { return x ? x.charAt(0).toUpperCase() + '.' : ''; }).join('-'); }).join(' '); }
  function persons(s) { return s.a.filter(function (x) { return x.fam.trim(); }); }
  function authorRef(s) {
    if (s.authorType === 'org') return s.org.trim();
    var l = persons(s).map(function (x) { return x.fam.trim() + (x.giv.trim() ? ', ' + initials(x.giv) : ''); });
    if (!l.length) return '';
    if (l.length === 1) return l[0];
    return l.slice(0, -1).join(', ') + ', & ' + l[l.length - 1];
  }
  function authorIn(s, narr) {
    if (s.authorType === 'org') return s.org.trim();
    var l = persons(s).map(function (x) { return x.fam.trim(); });
    if (!l.length) return '';
    if (l.length === 1) return l[0];
    if (l.length === 2) return l[0] + (narr ? ' and ' : ' & ') + l[1];
    return l[0] + ' et al.';
  }
  function dateRef(s, full) {
    if (s.nd) return 'n.d.';
    var y = s.year.trim(); if (!y) return '';
    return full && s.month ? y + ', ' + s.month + (s.day.trim() ? ' ' + s.day.trim() : '') : y;
  }
  function endDot(x) { return /[.?!]$/.test(x) ? x : x + '.'; }
  function doiUrl(x) { x = x.trim().replace(/^doi:\s*/i, ''); return /^10\./.test(x) ? 'https://doi.org/' + x : x; }
  function compose(s) {
    if (s.type === 'ai') s.authorType = 'org';
    var d = TYPES[s.type], P = [], H = [], hints = [];
    var au = s.authorType === 'none' ? '' : authorRef(s);
    function I(x) { return '<em class="it">' + esc(x) + '</em>'; }
    function add(plain, html) { P.push(plain); H.push(html == null ? esc(plain) : html); }
    var title = s.title.trim(), full = ['web', 'news', 'video', 'image', 'report'].indexOf(s.type) >= 0, dt = dateRef(s, full);
    var tr = (s.trans || '').trim();
    var T = function (it) {
      var end = tr ? '.' : (/[.?!]$/.test(title) ? '' : '.'), trs = tr ? ' [' + tr + ']' : '';
      return { p: title + trs + end, h: (it ? I(title) : esc(title)) + esc(trs) + end };
    };
    // author (or the title when there is no author)
    var titleFirst = !au && s.type !== 'ai' && title;
    if (au) add(endDot(au)); else if (titleFirst) { var tt = T(d.italic); add(tt.p, tt.h); }
    if (!dt) hints.push(lbl('apa.hint.year')); else add('(' + dt + ').');
    if (!au && !titleFirst) hints.push(lbl('apa.hint.author'));
    var sameSite = function () { var si = (s.site || '').trim().toLowerCase(); return si && au && si === au.toLowerCase(); };
    var url = s.url.trim(), urlOk = !url || /^https?:\/\//i.test(url);
    if (!urlOk) hints.push(lbl('apa.hint.url'));
    if (s.type === 'web' || s.type === 'image' || s.type === 'video') {
      if (!title) hints.push(lbl('apa.hint.title')); else if (!titleFirst) { var t1 = T(true); var suffix = s.type === 'image' ? ' [Photograph].' : s.type === 'video' ? ' [Video].' : ''; if (suffix) { add(title + suffix, I(title) + ' [' + (s.type === 'image' ? 'Photograph' : 'Video') + '].'); } else add(t1.p, t1.h); }
      else if (s.type !== 'web') { /* title already first */ }
      var site = s.type === 'video' ? 'YouTube' : s.site.trim();
      if (site && !sameSite()) add(endDot(site)); else if (s.type === 'image' && !site) hints.push(lbl('apa.hint.site'));
      if (url) add(url);
    } else if (s.type === 'news') {
      if (!title) hints.push(lbl('apa.hint.title')); else if (!titleFirst) { var t2 = T(false); add(t2.p, t2.h); }
      if (s.paper.trim()) add(endDot(s.paper.trim()), I(s.paper.trim()) + '.'); else hints.push(lbl('apa.hint.paper'));
      if (url) add(url);
    } else if (s.type === 'journal') {
      if (!title) hints.push(lbl('apa.hint.title')); else if (!titleFirst) { var t3 = T(false); add(t3.p, t3.h); }
      var j = s.journal.trim(), vol = s.vol.trim(), iss = s.issue.trim(), pg = s.pages.trim().replace(/(\d)\s*-\s*(\d)/g, '$1–$2');
      if (!j) hints.push(lbl('apa.hint.journal'));
      else { var ph = I(j + (vol ? ', ' + vol : '')) + (iss ? '(' + esc(iss) + ')' : '') + (pg ? ', ' + esc(pg) : '') + '.'; var pp = j + (vol ? ', ' + vol : '') + (iss ? '(' + iss + ')' : '') + (pg ? ', ' + pg : '') + '.'; add(pp, ph); }
      var doi = doiUrl(s.doi) || url; if (doi) add(doi); else hints.push(lbl('apa.hint.doi'));
    } else if (s.type === 'book') {
      if (!title) hints.push(lbl('apa.hint.title')); else if (!titleFirst) { var ed = s.ed.trim(); add(title + (ed ? ' (' + ed + ').' : '.'), I(title) + (ed ? ' (' + esc(ed) + ').' : '.')); }
      if (s.pub.trim() && !(au && s.pub.trim().toLowerCase() === au.toLowerCase())) add(endDot(s.pub.trim())); else if (!s.pub.trim()) hints.push(lbl('apa.hint.pub'));
      if (url) add(url);
    } else if (s.type === 'ai') {
      if (!s.tool.trim()) hints.push(lbl('apa.hint.tool')); else { var ver = s.ver.trim(); add(s.tool.trim() + (ver ? ' (' + ver + ')' : '') + ' [Large language model].', I(s.tool.trim()) + (ver ? ' (' + esc(ver) + ')' : '') + ' [Large language model].'); }
      if (url) add(url); else hints.push(lbl('apa.hint.url'));
    } else if (s.type === 'report') {
      if (!title) hints.push(lbl('apa.hint.title')); else if (!titleFirst) { var cd = s.code.trim(); add(title + (cd ? ' (' + cd + ').' : '.'), I(title) + (cd ? ' (' + esc(cd) + ').' : '.')); }
      if (s.pub.trim() && !(au && s.pub.trim().toLowerCase() === au.toLowerCase())) add(endDot(s.pub.trim()));
      if (url) add(url);
    }
    // title-case warning (APA uses sentence case)
    if (title && ['journal', 'news', 'web', 'book', 'video', 'image', 'report'].indexOf(s.type) >= 0) {
      var words = title.replace(/[:?!]/g, ' ').split(/\s+/).slice(1).filter(function (w) { return w.length > 3 && /^[A-ZÆØÅ]/.test(w); });
      if (words.length >= 3) hints.push(lbl('apa.hint.case'));
    }
    var ref = { text: P.join(' '), html: H.join(' ') };
    // in-text
    var yrs = s.nd ? 'n.d.' : s.year.trim();
    var who = s.authorType === 'none' || !au ? (title ? (d.italic ? '<em class="it">' + esc(shortT(title)) + '</em>' : '“' + esc(shortT(title)) + '”') : '') : esc(authorIn(s, false));
    var whoN = s.authorType === 'none' || !au ? who : esc(authorIn(s, true));
    var plainWho = (s.authorType === 'none' || !au) ? (d.italic ? shortT(title) : '“' + shortT(title) + '”') : authorIn(s, false);
    var plainWhoN = (s.authorType === 'none' || !au) ? plainWho : authorIn(s, true);
    return { ref: ref, hints: hints, paren: yrs && who ? { text: '(' + plainWho + ', ' + yrs + ')', html: '(' + who + ', ' + esc(yrs) + ')' } : null, narr: yrs && whoN ? { text: plainWhoN + ' (' + yrs + ')', html: whoN + ' (' + esc(yrs) + ')' } : null, empty: !(au || title || dt) };
  }
  function shortT(x) { var w = x.trim().split(/\s+/); return w.slice(0, 4).join(' ') + (w.length > 4 ? '…' : ''); }
  var HINTS = { 'apa.hint.year': u('Add the year, or tick "There is no date".', 'Legg til året, eller kryss av for «Det er ingen dato».'), 'apa.hint.author': u('Add an author, an organisation or a channel. If there is really none, choose "No author".', 'Legg til en forfatter, en organisasjon eller en kanal. Hvis det virkelig ikke finnes noen, velg «Ingen forfatter».'),
    'apa.hint.url': u('The web address should start with https://.', 'Nettadressen bør starte med https://.'), 'apa.hint.title': u('Add the title.', 'Legg til tittelen.'), 'apa.hint.site': u('Add the name of the website.', 'Legg til navnet på nettstedet.'), 'apa.hint.paper': u('Add the name of the newspaper or magazine.', 'Legg til navnet på avisen eller magasinet.'),
    'apa.hint.journal': u('Add the name of the journal.', 'Legg til navnet på tidsskriftet.'), 'apa.hint.doi': u('Add a DOI (or a web address) if there is one.', 'Legg til en DOI (eller en nettadresse) hvis det finnes en.'), 'apa.hint.pub': u('Add the publisher.', 'Legg til utgiveren.'), 'apa.hint.tool': u('Add the name of the AI tool.', 'Legg til navnet på KI-verktøyet.'),
    'apa.hint.case': u('APA uses sentence case in titles: only the first word, the word after a colon and names start with a capital letter.', 'APA bruker liten forbokstav i titler: bare første ord, ordet etter kolon og navn har stor forbokstav.') };
  Object.keys(HINTS).forEach(function (k) { U[k] = HINTS[k]; });

  function field(id, label, val, extra) {
    return '<label class="field apa-f"><span class="set-lbl">' + esc(label) + '</span><input type="text" class="input" value="' + esc(val) + '" data-input="apa" data-f="' + id + '" data-key="apa-' + id + '" autocomplete="off"' + (extra || '') + '></label>';
  }
  widgets.apa = function () {
    var v = A.state.view; v.apa = v.apa || blankApa('web'); var s = v.apa, d = TYPES[s.type], f = d.f;
    var out = '<section class="apab" aria-labelledby="apah"><h2 id="apah">' + esc(lbl('apa.out')) + '</h2><p class="muted">' + icon('info') + ' ' + esc(lbl('apa.note')) + '</p><div class="apa-grid"><div class="apa-form">';
    out += '<label class="field apa-f"><span class="set-lbl">' + esc(lbl('apa.type')) + '</span><select class="select" data-change="apaType" data-key="apa-type">' + Object.keys(TYPES).map(function (k) { return '<option value="' + k + '"' + (s.type === k ? ' selected' : '') + '>' + esc(L(TYPES[k].n)) + '</option>'; }).join('') + '</select></label>';
    out += '<p><button type="button" class="btn btn-ghost sm" data-act="apaFill">' + esc(lbl('apa.fill')) + '</button> <button type="button" class="btn btn-ghost sm" data-act="apaClear">' + esc(lbl('apa.clear')) + '</button> <span class="tag">' + esc(lbl(EX[s.type].real ? 'apa.real' : 'apa.fake')) + '</span></p>';
    if (f.indexOf('author') >= 0 || f.indexOf('org') >= 0) {
      if (f.indexOf('org') >= 0) { s.authorType = 'org'; out += field('org', lbl('apa.orgname'), s.org); }
      else {
        out += '<fieldset class="apa-set"><legend>' + esc(lbl('apa.author')) + '</legend>' + A.segCtl(lbl('apa.author'), [{ v: 'person', label: lbl('apa.person') }, { v: 'org', label: lbl('apa.org') }, { v: 'none', label: lbl('apa.none') }], s.authorType, 'apaAuth');
        if (s.authorType === 'person') { out += '<p class="muted sm-t">' + esc(lbl('apa.n3')) + '</p>'; s.a.forEach(function (x, i) { out += '<div class="apa-row">' + field('fam' + i, lbl('apa.fam') + ' ' + (i + 1), x.fam) + field('giv' + i, lbl('apa.giv') + ' ' + (i + 1), x.giv) + '</div>'; }); }
        else if (s.authorType === 'org') out += field('org', lbl('apa.orgname'), s.org);
        out += '</fieldset>';
      }
    }
    out += '<div class="apa-row">';
    if (f.indexOf('date') >= 0 || f.indexOf('year') >= 0) {
      out += field('year', lbl('apa.year'), s.year, ' inputmode="numeric" maxlength="4"');
      if (f.indexOf('date') >= 0) out += '<label class="field apa-f"><span class="set-lbl">' + esc(lbl('apa.month')) + '</span><select class="select" data-change="apaMonth" data-key="apa-month"><option value="">–</option>' + MONTHS.map(function (mn) { return '<option' + (s.month === mn ? ' selected' : '') + '>' + mn + '</option>'; }).join('') + '</select></label>' + field('day', lbl('apa.day'), s.day, ' inputmode="numeric" maxlength="2"');
    }
    out += '</div>';
    if (f.indexOf('date') >= 0 || f.indexOf('year') >= 0) out += A.sw('apaNd', s.nd, esc(lbl('apa.nd')), 'apa-nd');
    if (f.indexOf('title') >= 0) out += field('title', lbl('apa.title'), s.title);
    if (['web', 'news', 'journal', 'book', 'report'].indexOf(s.type) >= 0) out += field('trans', lbl('apa.trans'), s.trans);
    if (f.indexOf('tool') >= 0) out += field('tool', lbl('apa.tool'), s.tool) + field('ver', lbl('apa.ver'), s.ver);
    if (f.indexOf('site') >= 0) out += field('site', lbl('apa.site'), s.site);
    if (f.indexOf('paper') >= 0) out += field('paper', lbl('apa.paper'), s.paper);
    if (f.indexOf('journal') >= 0) out += field('journal', lbl('apa.journal'), s.journal) + '<div class="apa-row">' + field('vol', lbl('apa.vol'), s.vol) + field('issue', lbl('apa.issue'), s.issue) + field('pages', lbl('apa.pages'), s.pages) + '</div>' + field('doi', lbl('apa.doi'), s.doi);
    if (f.indexOf('ed') >= 0) out += field('ed', lbl('apa.ed'), s.ed);
    if (f.indexOf('code') >= 0) out += field('code', lbl('apa.code'), s.code);
    if (f.indexOf('pub') >= 0) out += field('pub', lbl('apa.pub'), s.pub);
    if (f.indexOf('url') >= 0) out += field('url', lbl('apa.url'), s.url);
    out += '</div><div class="apa-result">' + resultHtml(s) + '</div></div></section>';
    return out;
  };
  function resultHtml(s) {
    var c = compose(s);
    if (c.empty) return '<p class="muted">' + icon('info') + ' ' + esc(lbl('apa.empty')) + '</p>';
    var out = '<div class="apa-card"><h3>' + esc(lbl('apa.out')) + '</h3><p class="apa-ref" lang="en">' + c.ref.html + '</p><p><button type="button" class="btn btn-ghost sm" data-act="apaCopy" data-k="ref">' + icon('copy') + esc(lbl('apa.copyi')) + '</button> <button type="button" class="btn btn-ghost sm" data-act="apaCopyPlain" data-k="ref">' + esc(lbl('apa.copy')) + '</button></p></div>';
    out += '<div class="apa-card"><h3>' + esc(lbl('apa.intext')) + '</h3>' + (c.paren ? '<p><strong>' + esc(lbl('apa.paren')) + ':</strong> <span lang="en">' + c.paren.html + '</span> <button type="button" class="btn btn-ghost sm" data-act="apaCopyPlain" data-k="paren" aria-label="' + esc(lbl('apa.copy') + ': ' + c.paren.text) + '">' + icon('copy') + '</button></p>' : '') +
      (c.narr ? '<p><strong>' + esc(lbl('apa.narr')) + ':</strong> <span lang="en">' + c.narr.html + '</span> <button type="button" class="btn btn-ghost sm" data-act="apaCopyPlain" data-k="narr" aria-label="' + esc(lbl('apa.copy') + ': ' + c.narr.text) + '">' + icon('copy') + '</button></p>' : '') + '</div>';
    out += '<div class="apa-card hints"><h3>' + icon('warn') + esc(lbl('apa.hints')) + '</h3>' + (c.hints.length ? '<ul>' + c.hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' : '<p class="ok-msg">' + icon('check') + esc(lbl('apa.ok')) + '</p>') + '</div>';
    return out;
  }
  function refreshApa() { var el = A.$('.apa-result'); if (el) el.innerHTML = resultHtml(A.state.view.apa); }
  A.inputs.apa = function (el) {
    var s = A.state.view.apa, k = el.dataset.f, m = /^(fam|giv)(\d)$/.exec(k);
    if (m) s.a[+m[2]][m[1]] = el.value; else s[k] = el.value;
    refreshApa();                     // update the result only, so typing is never interrupted
  };
  A.changes.apaType = function (el) { A.state.view.apa = blankApa(el.value); A.rerender(); };
  A.changes.apaMonth = function (el) { A.state.view.apa.month = el.value; refreshApa(); };
  A.acts.apaAuth = function (el) { A.state.view.apa.authorType = el.dataset.v; A.rerender(); };
  A.acts.apaNd = function () { var s = A.state.view.apa; s.nd = !s.nd; A.rerender(); };
  A.acts.apaClear = function () { A.state.view.apa = blankApa(A.state.view.apa.type); A.rerender(); };
  A.acts.apaFill = function () {
    var s = blankApa(A.state.view.apa.type), e = EX[s.type];
    Object.keys(e).forEach(function (k) { if (k === 'a') e.a.forEach(function (x, i) { s.a[i] = { fam: x.fam, giv: x.giv }; }); else if (k !== 'real') s[k] = e[k]; });
    A.state.view.apa = s; A.rerender();
  };
  A.acts.apaCopyPlain = function (el) { var c = compose(A.state.view.apa), k = el.dataset.k; var x = k === 'ref' ? c.ref : c[k]; if (x) A.copy(x.text, lbl('apa.copied')); };
  A.acts.apaCopy = function (el) {
    var c = compose(A.state.view.apa), html = '<p style="padding-left:2.2em;text-indent:-2.2em">' + c.ref.html.replace(/class="it"/g, 'style="font-style:italic"') + '</p>';
    try {
      if (navigator.clipboard && window.ClipboardItem && window.isSecureContext) {
        navigator.clipboard.write([new window.ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([c.ref.text], { type: 'text/plain' }) })]).then(function () { A.toast(lbl('apa.copied')); }, function () { A.copy(c.ref.text, lbl('apa.copied')); });
        return;
      }
    } catch (e) { /* fall through */ }
    A.copy(c.ref.text, lbl('apa.copied'));
  };
  A.apaCompose = compose; A.apaBlank = blankApa;      // used by the tests
})();
