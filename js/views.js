/* Views: page chrome (header, settings, footer), home, module shell, overview,
   phrase bank, checklist, learn more, about, credits. */
(function () {
  'use strict';
  var A = window.APP, t = A.t, L = A.L, esc = A.esc, rich = A.rich, icon = A.icon;
  A.views = {};

  /* ---------- LK26 competence goals (quoted from ENG01-06, after 10th grade) ---------- */
  A.K = {
    K1: { nb: 'bruke varierte strategier i språklæring, tekstskaping og kommunikasjon', en: 'use varied strategies in language learning, text creation and communication' },
    K2: { nb: 'bruke ulike digitale ressurser og andre hjelpemidler i språklæring, tekstskaping og samhandling', en: 'use different digital resources and other aids in language learning, text creation and cooperation' },
    K3: { nb: 'uttrykke seg med flyt og sammenheng med et variert ordforråd og idiomatiske uttrykk tilpasset formål, mottaker og situasjon', en: 'express yourself fluently and coherently, with a varied vocabulary and idiomatic expressions suited to purpose, receiver and situation' },
    K4: { nb: 'bruke kunnskap om ordklasser og setningsstruktur i arbeid med egne muntlige og skriftlige tekster', en: 'use knowledge of word classes and sentence structure in your own spoken and written texts' },
    K5: { nb: 'følge regler for rettskriving, ordbøying, setningsstruktur og tekststruktur', en: 'follow rules for spelling, inflection, sentence structure and text structure' },
    K6: { nb: 'skrive formelle og uformelle tekster, inkludert sammensatte, med struktur og sammenheng som beskriver, forteller og reflekterer tilpasset formål, mottaker og situasjon', en: 'write formal and informal texts, including multimodal ones, with structure and coherence that describe, narrate and reflect, suited to purpose, receiver and situation' },
    K7: { nb: 'bearbeide egne tekster ut fra tilbakemeldinger og kunnskap om språk', en: 'revise your own texts using feedback and knowledge about language' },
    K8: { nb: 'bruke kilder på en kritisk og etterrettelig måte', en: 'use sources in a critical and responsible way' },
    K9: { nb: 'lese, tolke og reflektere over engelskspråklig skjønnlitteratur, inkludert ungdomslitteratur', en: 'read, interpret and reflect on English-language fiction, including young adult literature' },
    K10: { nb: 'lese sakprosatekster og vurdere hvor pålitelige kildene er', en: 'read non-fiction texts and judge how reliable the sources are' },
    K11: { nb: 'utforske og beskrive noen språklige likheter og ulikheter mellom engelsk og andre språk eleven kjenner til, og bruke dette i egen språklæring', en: 'explore and describe some language similarities and differences between English and other languages you know, and use this in your own language learning' }
  };

  /* ---------- small UI helpers ---------- */
  function segCtl(label, items, current, act, extra) {
    return '<div class="seg" role="group" aria-label="' + esc(label) + '">' + items.map(function (it) {
      var on = String(it.v) === String(current);
      return '<button type="button" class="seg-btn" data-act="' + act + '" data-v="' + esc(it.v) + '"' + (extra || '') + ' aria-pressed="' + on + '"' + (it.title ? ' title="' + esc(it.title) + '"' : '') + '>' + it.label + '</button>';
    }).join('') + '</div>';
  }
  function sw(act, on, label, key) {
    return '<button type="button" class="switch" role="switch" aria-checked="' + (!!on) + '" data-act="' + act + '"' + (key ? ' data-key="' + key + '"' : '') + '><span class="knob" aria-hidden="true"></span><span class="sw-label">' + label + '</span></button>';
  }
  A.segCtl = segCtl; A.sw = sw;
  function kTags(codes) {
    if (!A.state.prefs.teacher || !codes || !codes.length) return '';
    return '<div class="ktags teacher-only" aria-label="' + esc(t('teacher.goals')) + '"><span class="ktags-label">' + icon('info') + t('teacher.goals') + ':</span> ' + codes.map(function (c) {
      var k = A.K[c]; return '<span class="ktag" title="' + esc(k ? k.nb : '') + '"><strong>' + c + '</strong> ' + esc(k ? L(k) : '') + '</span>';
    }).join('') + '</div>';
  }
  A.kTags = kTags;
  var CATS = ['format', 'structure', 'language', 'tone'];
  A.cats = CATS;
  A.catName = function (c) { return t('cat.' + c); };
  A.catBadge = function (c) { return '<span class="cat-chip cat-' + c + '">' + icon(c) + '<span>' + esc(A.catName(c)) + '</span></span>'; };

  /* ---------- chrome ---------- */
  var LOGO = '<svg class="logo" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><use href="#logo"/></svg>';
  A.renderChrome = function () {
    var p = A.state.prefs, c = A.config, r = A.state.route;
    var navItems = [['home', '#/', t('nav.home')], ['about', '#/about', t('nav.about')], ['credits', '#/credits', t('nav.credits')]];
    var nav = navItems.map(function (n) {
      var cur = (n[0] === r.name) || (n[0] === 'home' && r.name === 'module');
      return '<a href="' + n[1] + '"' + (cur ? ' aria-current="page"' : '') + '>' + esc(n[2]) + '</a>';
    }).join('');
    A.$('#site-header').innerHTML =
      '<div class="bar">' +
      '<a class="brand" href="#/" aria-label="' + esc(c.name + ' – ' + t('nav.home')) + '">' + LOGO + '<span class="wordmark"><span class="w1">' + esc(c.nameParts[0]) + '</span><span class="w2">' + esc(c.nameParts[1]) + '</span></span></a>' +
      '<nav class="nav" aria-label="' + esc(t('nav.main')) + '">' + nav + '</nav>' +
      '<div class="bar-actions">' +
      segCtl(t('set.language'), [{ v: 'en', label: 'EN', title: 'English' }, { v: 'nb', label: 'NB', title: 'Norsk bokmål' }], p.lang, 'setLang') +
      '<button type="button" class="btn btn-ghost" data-act="toggleSettings" aria-expanded="' + A.state.ui.settings + '" aria-controls="settings-panel" aria-label="' + esc(t('set.display')) + '">' + icon('sliders') + '<span class="bar-label">' + esc(t('set.display')) + '</span></button>' +
      '</div></div>';
    var s = '';
    if (A.state.ui.settings) {
      s = '<div id="settings-panel" class="settings" role="dialog" aria-label="' + esc(t('set.display')) + '">' +
        '<div class="set-row"><span class="set-lbl">' + esc(t('set.variety')) + '</span>' + segCtl(t('set.variety'), [{ v: 'uk', label: 'UK' }, { v: 'us', label: 'US' }], p.variety, 'setVariety') + '</div>' +
        '<div class="set-row">' + sw('toggleSupport', p.support, esc(t('set.support'))) + '</div>' +
        '<div class="set-row"><span class="set-lbl">' + esc(t('set.size')) + '</span><div class="seg" role="group" aria-label="' + esc(t('set.size')) + '"><button type="button" class="seg-btn" data-act="sizeDown"' + (p.size === 0 ? ' disabled' : '') + ' aria-label="A− ' + esc(t('set.smaller')) + '">A−</button><button type="button" class="seg-btn" data-act="sizeUp"' + (p.size === 3 ? ' disabled' : '') + ' aria-label="A+ ' + esc(t('set.larger')) + '">A+</button></div></div>' +
        '<div class="set-row"><span class="set-lbl">' + esc(t('set.theme')) + '</span>' + segCtl(t('set.theme'), [{ v: 'auto', label: t('set.auto') }, { v: 'light', label: t('set.light') }, { v: 'dark', label: t('set.dark') }], p.theme, 'setTheme') + '</div>' +
        '<div class="set-row">' + sw('toggleTeacher', p.teacher, esc(t('set.teacher'))) + '</div>' +
        '<div class="set-row set-actions"><button type="button" class="btn" data-act="copyLink">' + icon('copy') + esc(t('set.copylink')) + '</button><button type="button" class="btn btn-ghost" data-act="resetPrefs">' + esc(t('set.reset')) + '</button></div>' +
        '<p class="note">' + esc(t('set.note')) + '</p></div>';
    }
    A.$('#settings').innerHTML = s;
    A.$('#site-footer').innerHTML =
      '<div class="foot"><p>© ' + c.year + ' ' + esc(c.owner) + '. ' + esc(t('foot.rights')) + '</p>' +
      '<p><a href="#/about">' + esc(t('nav.about')) + '</a> · <a href="#/credits">' + esc(t('nav.credits')) + '</a> · <span class="muted">' + esc(c.name) + ' · ' + esc(c.version) + '</span></p></div>';
    var sk = A.$('.skip'); if (sk) sk.textContent = t('nav.skip');
  };

  /* ---------- home ---------- */
  function moduleCard(m) {
    return '<a class="card" href="#/m/' + m.id + '"><span class="card-ic">' + icon(m.icon || 'book') + '</span><span class="card-t">' + esc(L(m.title)) + '</span><span class="card-b">' + esc(L(m.blurb)) + '</span>' + kTags(m.curriculum) + '<span class="card-go" aria-hidden="true">' + icon('arrow-right') + '</span></a>';
  }
  function soonCard(m) {
    return '<div class="card soon" aria-disabled="true"><span class="card-ic">' + icon(m.icon || 'book') + '</span><span class="card-t">' + esc(L(m.title)) + '</span><span class="badge-soon">' + esc(t('home.soon')) + '</span></div>';
  }
  A.views.home = function () {
    A.state.title = t('nav.home');
    var groups = ['write', 'grammar', 'skills'];
    var built = A.modules, soon = (A.comingSoon || []).filter(function (s) { return !built.some(function (m) { return m.id === s.id; }); });
    var out = '<section class="hero"><div class="hero-text"><h1>' + esc(A.config.name) + '</h1><p class="hand-tag">' + esc(L(A.config.tagline)) + '</p><p class="lead">' + esc(t('home.intro')) + '</p></div>' +
      '<div class="hero-art">' + (A.heroHtml ? A.heroHtml() : '') + (A.heroHtml ? '<button type="button" class="btn btn-ghost sm hero-toggle" data-act="heroToggle" aria-pressed="false">' + icon('pen') + '<span class="hero-lbl">' + esc(t('hero.pause')) + '</span></button>' : '') + '</div></section>';
    groups.forEach(function (g) {
      var a = built.filter(function (m) { return m.group === g; }), b = soon.filter(function (m) { return m.group === g; });
      if (!a.length && !b.length) return;
      out += '<section class="group" aria-labelledby="g-' + g + '"><h2 id="g-' + g + '">' + esc(t('group.' + g)) + '</h2><p class="muted">' + esc(t('group.' + g + '.d')) + '</p><div class="cards">' + a.map(moduleCard).join('') + b.map(soonCard).join('') + '</div></section>';
    });
    return out;
  };

  /* ---------- module shell ---------- */
  var TABS = ['overview', 'models', 'phrases', 'practice', 'checklist', 'learn'];
  function shell(m, tab, inner, titleSuffix) {
    var has = { overview: 1, models: m.models && m.models.length, phrases: m.phraseBank && m.phraseBank.length, practice: m.practice && m.practice.length, checklist: m.checklist && m.checklist.length, learn: m.resources && m.resources.length };
    var tabs = TABS.filter(function (x) { return has[x]; }).map(function (x) {
      return '<a href="#/m/' + m.id + '/' + x + '"' + (x === tab ? ' aria-current="page"' : '') + '>' + esc(t('tab.' + x)) + '</a>';
    }).join('');
    A.state.title = L(m.title) + (titleSuffix ? ' – ' + titleSuffix : '');
    return '<nav class="crumbs" aria-label="' + esc(t('nav.crumbs')) + '"><a href="#/">' + esc(t('nav.home')) + '</a><span aria-hidden="true"> › </span><span>' + esc(t('group.' + m.group)) + '</span></nav>' +
      '<header class="page-head"><h1>' + esc(L(m.title)) + '</h1><p class="lead">' + esc(L(m.helps)) + '</p>' + kTags(m.curriculum) + '</header>' +
      '<nav class="tabs" aria-label="' + esc(t('nav.sections')) + '">' + tabs + '</nav>' + inner;
  }
  A.shell = shell;

  A.views.module = function (r) {
    var m = A.module(r.id);
    if (!m) return A.views.notfound(r);
    var v = A.state.view;
    var avail = { models: m.models && m.models.length, phrases: m.phraseBank && m.phraseBank.length, practice: m.practice && m.practice.length, checklist: m.checklist && m.checklist.length, learn: m.resources && m.resources.length };
    if (r.tab && r.tab !== 't' && !avail[r.tab]) return shell(m, 'overview', overviewHtml(m));   // a tab this module does not have: show the overview
    switch (r.tab) {
      case 't': return A.topicView ? A.topicView(m, r) : A.views.notfound(r);
      case 'models': return A.modelView(m, r);
      case 'phrases': return shell(m, 'phrases', phrasesHtml(m), t('tab.phrases'));
      case 'practice': return shell(m, 'practice', A.practiceHtml(m), t('tab.practice'));
      case 'checklist': return shell(m, 'checklist', checklistHtml(m), t('tab.checklist'));
      case 'learn': return shell(m, 'learn', learnHtml(m), t('tab.learn'));
      default: return shell(m, 'overview', overviewHtml(m));
    }
  };

  /* ---------- explainers: stages (curve / blocks), flip cards, table, pairs ---------- */
  function cellHtml(c) { return typeof c === 'string' ? '<td lang="en">' + rich(c) + '</td>' : '<td>' + rich(L(c)) + '</td>'; }
  function curveSvg(n, cur) {
    var P = [[50, 190], [170, 150], [300, 40], [420, 115], [550, 178]].slice(0, 5);
    var dots = P.map(function (pt, i) { return '<circle class="dot' + (cur === i ? ' on' : '') + '" cx="' + pt[0] + '" cy="' + pt[1] + '" r="12"/><text x="' + pt[0] + '" y="' + (pt[1] + 5) + '" text-anchor="middle" style="fill:var(--ink);font-weight:700">' + (i + 1) + '</text>'; }).join('');
    return '<svg class="curve" viewBox="0 0 600 240" aria-hidden="true" focusable="false"><path class="axis" d="M30 20 V210 H585"/><text transform="translate(16,115) rotate(-90)" text-anchor="middle">' + esc(t('ex.tension')) + '</text>' +
      '<path class="path" d="M50 190 C100 190 120 165 170 150 S250 40 300 40 S380 100 420 115 S500 178 550 178"/>' + dots + '<text x="570" y="232" text-anchor="end">' + esc(t('ex.time')) + '</text></svg>';
  }
  function stageDetail(m, ex, st) {
    if (!st) return '<p class="muted stage-detail">' + icon('info') + ' ' + esc(t('ex.pick')) + '</p>';
    var link = st.part && ex.model ? '<p><a class="btn sm" href="#/m/' + m.id + '/models/' + ex.model + '/' + st.part + '">' + esc(t('ex.show')) + icon('arrow-right') + '</a></p>' : '';
    return '<div class="stage-detail" aria-live="polite"><h3>' + esc(L(st.label)) + '</h3><p>' + rich(L(st.desc)) + '</p>' + link + '</div>';
  }
  function explainerHtml(m, ex) {
    var v = A.state.view, p = A.state.prefs, out = '<section class="explainer" aria-labelledby="ex-' + ex.id + '"><h2 id="ex-' + ex.id + '">' + esc(L(ex.title)) + '</h2>' + (ex.intro ? '<p class="lead">' + esc(L(ex.intro)) + '</p>' : '');
    v.stage = v.stage || {}; v.flip = v.flip || {};
    if (ex.type === 'stages' && ex.style === 'curve') {
      var cur = v.stage[ex.id], sel = cur == null ? null : ex.stages[cur];
      out += '<div class="stages"><div>' + curveSvg(ex.stages.length, cur == null ? -1 : cur) + '</div><div><ol class="stage-list">' + ex.stages.map(function (s, i) {
        return '<li><button type="button" class="stage" data-act="stageSel" data-ex="' + ex.id + '" data-i="' + i + '" data-key="st-' + ex.id + '-' + i + '" aria-pressed="' + (cur === i) + '"><span class="stage-n">' + (i + 1) + '</span><span>' + esc(L(s.label)) + '</span></button></li>';
      }).join('') + '</ol>' + stageDetail(m, ex, sel) + '</div></div>';
    } else if (ex.type === 'stages') {   // blocks
      var key = v.stage[ex.id], found = null;
      out += '<div class="stages stages-blocks"><ol class="blocks">' + ex.rows.map(function (r, ri) {
        return '<li class="blk"><span class="blk-t">' + esc(L(r.label)) + '</span><span class="blk-parts">' + r.items.map(function (it, ii) {
          var k = ri + '-' + ii; if (key === k) found = it;
          return '<button type="button" class="stage" data-act="stageSel" data-ex="' + ex.id + '" data-i="' + k + '" data-key="st-' + ex.id + '-' + k + '" aria-pressed="' + (key === k) + '">' + esc(L(it.label)) + '</button>';
        }).join('') + '</span></li>';
      }).join('') + '</ol>' + stageDetail(m, ex, found) + '</div>';
    } else if (ex.type === 'cards') {
      out += '<div class="flipcards">' + ex.cards.map(function (c, i) {
        var k = ex.id + '-' + i, on = !!v.flip[k], nbt = on ? c.nbShow : c.nbTell;
        return '<button type="button" class="flip' + (on ? ' show-side' : '') + '" data-act="flipCard" data-k="' + k + '" data-key="fc-' + k + '" aria-pressed="' + on + '"><span class="side">' + icon(on ? 'check' : 'x') + esc(t(on ? 'ex.show.s' : 'ex.tell.s')) + '</span>' +
          '<span class="txt-s" lang="en">' + rich(on ? c.show : c.tell) + '</span>' + (p.showNb && nbt ? '<span class="nb" lang="nb">' + rich(nbt) + '</span>' : '') + '<span class="tap">' + esc(t(on ? 'ex.tap.back' : 'ex.tap')) + '</span></button>';
      }).join('') + '</div>';
    } else if (ex.type === 'table') {
      out += '<div class="tablewrap"><table class="cmp"><thead><tr>' + ex.head.map(function (h) { return '<th scope="col">' + esc(L(h)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        ex.rows.map(function (r) { return '<tr><th scope="row">' + rich(L(r[0])) + '</th>' + r.slice(1).map(cellHtml).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    } else if (ex.type === 'pairs') {
      out += '<div class="pairs">' + ex.pairs.map(function (pr) {
        return '<div class="pair"><p class="bad" lang="en"><span class="mk">' + icon('x') + '<span class="sr">' + esc(t('mv.wrong')) + ': </span></span>' + rich(pr.bad) + '</p><p class="good" lang="en"><span class="mk">' + icon('check') + '<span class="sr">' + esc(t('mv.right')) + ': </span></span>' + rich(pr.good) + '</p>' + (pr.note ? '<p class="muted">' + rich(L(pr.note)) + '</p>' : '') + '</div>';
      }).join('') + '</div>';
    }
    return out + '</section>';
  }
  function explainersHtml(m) { return (m.explainers || []).map(function (ex) { return explainerHtml(m, ex); }).join(''); }
  A.acts.stageSel = function (el) {
    var v = A.state.view; v.stage = v.stage || {}; var k = el.dataset.i;
    var val = /-/.test(k) ? k : +k;
    v.stage[el.dataset.ex] = v.stage[el.dataset.ex] === val ? null : val; A.rerender();
  };
  A.acts.flipCard = function (el) { var v = A.state.view; v.flip = v.flip || {}; v.flip[el.dataset.k] = !v.flip[el.dataset.k]; A.rerender(); };

  /* ---------- overview ---------- */
  function overviewHtml(m) {
    var v = A.state.view, p = A.state.prefs, out = '';
    out += '<section class="box top5" aria-labelledby="top5"><h2 id="top5">' + icon('star') + esc(t('ov.top5')) + '</h2><ol>' + m.top5.map(function (x) { return '<li>' + rich(L(x)) + '</li>'; }).join('') + '</ol></section>';
    if (m.keyRule) {
      out += '<div class="two"><section class="box keyrule" aria-labelledby="kr"><h2 id="kr">' + icon('bulb') + esc(t('ov.keyrule')) + ': ' + esc(L(m.keyRule.title)) + '</h2><ul>' + m.keyRule.lines.map(function (x) { return '<li>' + rich(L(x)) + '</li>'; }).join('') + '</ul></section>';
      if (m.remember) out += '<section class="box remember" aria-labelledby="rm"><h2 id="rm">' + icon('bookmark') + esc(t('ov.remember')) + '</h2><p>' + rich(L(m.remember)) + '</p></section>';
      out += '</div>';
    }
    out += explainersHtml(m);
    if (m.compare) {
      out += '<section aria-labelledby="cmp"><h2 id="cmp">' + esc(t('ov.compare')) + '</h2><div class="tablewrap"><table class="cmp"><thead><tr><th scope="col"><span class="sr">' + esc(t('ov.feature')) + '</span></th><th scope="col">' + esc(t('reg.informal')) + '</th><th scope="col">' + esc(t('reg.formal')) + '</th></tr></thead><tbody>' +
        m.compare.map(function (row) { return '<tr><th scope="row">' + esc(L(row.k)) + '</th><td lang="en">' + rich(L(row.a)) + '</td><td lang="en">' + rich(L(row.b)) + '</td></tr>'; }).join('') + '</tbody></table></div></section>';
    }
    if (m.sameMessage) {
      var sm = m.sameMessage, which = v.same || 'informal', cur = sm[which];
      out += '<section class="box same" aria-labelledby="sm"><h2 id="sm">' + esc(L(sm.title)) + '</h2>' +
        segCtl(t('ov.chooseversion'), [{ v: 'informal', label: t('reg.informal') }, { v: 'formal', label: t('reg.formal') }], which, 'setSame') +
        '<blockquote class="msg ' + which + '" lang="en"><p>' + rich(cur.text) + '</p></blockquote>' +
        (p.showNb ? '<p class="nb" lang="nb">' + rich(cur.nb) + '</p>' : '') +
        '<p class="muted">' + icon('info') + ' ' + rich(L(sm.rule)) + '</p></section>';
    }
    if (m.ukus) {
      out += '<section aria-labelledby="ukus"><h2 id="ukus">' + esc(t('ov.ukus')) + '</h2><div class="tablewrap"><table class="cmp"><thead><tr><th scope="col"><span class="sr">' + esc(t('ov.feature')) + '</span></th><th scope="col">British (UK)</th><th scope="col">American (US)</th></tr></thead><tbody>' +
        m.ukus.map(function (row) { return '<tr><th scope="row">' + esc(L(row.k)) + '</th><td lang="en">' + esc(row.uk) + '</td><td lang="en">' + esc(row.us) + '</td></tr>'; }).join('') + '</tbody></table></div><p class="muted">' + esc(t('ov.ukusnote')) + '</p></section>';
    }
    if (m.topics && A.topicCards) out += A.topicCards(m);
    if (m.models && m.models.length) {
      out += '<section aria-labelledby="mods"><h2 id="mods">' + esc(t('ov.try')) + '</h2><div class="cards">' + m.models.map(function (mod) {
        return '<a class="card" href="#/m/' + m.id + '/models/' + mod.id + '"><span class="card-ic">' + icon(mod.kind === 'email' ? 'mail' : 'doc') + '</span><span class="card-t">' + esc(L(mod.title)) + '</span><span class="card-b">' + esc(L(mod.situation)) + '</span><span class="card-go" aria-hidden="true">' + icon('arrow-right') + '</span></a>';
      }).join('') + '</div></section>';
    }
    return out;
  }
  A.acts.setSame = function (el) { A.state.view.same = el.dataset.v; A.rerender(); };

  /* ---------- phrase bank ---------- */
  function phrasesHtml(m) {
    var v = A.state.view, p = A.state.prefs;
    v.pb = v.pb || { q: '', reg: 'all', lvl: 'all', mine: false };
    var f = v.pb, q = f.q.trim().toLowerCase(), total = 0, shown = 0;
    var groups = m.phraseBank.map(function (g) {
      var items = g.items.filter(function (it) {
        total++;
        if (f.reg !== 'all' && it.reg !== f.reg) return false;
        if (f.lvl !== 'all' && it.lvl !== +f.lvl) return false;
        if (f.mine && it.lvl > p.level) return false;
        if (q && (A.plain(it.en) + ' ' + it.nb + ' ' + it.ex).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      shown += items.length;
      return { g: g, items: items };
    }).filter(function (x) { return x.items.length; });
    var out = '<section class="pb"><h2 class="sr">' + esc(t('tab.phrases')) + '</h2>' +
      '<p class="lead">' + esc(t('pb.intro')) + '</p>' +
      '<div class="filters" role="search"><label class="field"><span class="sr">' + esc(t('pb.search')) + '</span><input type="search" class="input" placeholder="' + esc(t('pb.search')) + '" value="' + esc(f.q) + '" data-input="pbq" data-key="pbq" autocomplete="off"></label>' +
      '<div class="filter-row"><span class="set-lbl">' + esc(t('pb.register')) + '</span>' + segCtl(t('pb.register'), [{ v: 'all', label: t('pb.all') }, { v: 'formal', label: t('reg.formal') }, { v: 'informal', label: t('reg.informal') }, { v: 'neutral', label: t('reg.neutral') }], f.reg, 'pbReg') + '</div>' +
      '<div class="filter-row"><span class="set-lbl">' + esc(t('pb.level')) + '</span>' + segCtl(t('pb.level'), [{ v: 'all', label: t('pb.all') }, { v: '1', label: '1' }, { v: '2', label: '2' }, { v: '3', label: '3' }], f.lvl, 'pbLvl') + sw('pbMine', f.mine, esc(t('pb.mine', { n: p.level })), 'pbmine') + '</div></div>' +
      '<p class="muted" role="status">' + esc(t('pb.count', { n: shown, total: total })) + '</p>';
    if (!groups.length) out += '<p class="empty">' + esc(t('pb.none')) + '</p>';
    groups.forEach(function (x, gi) {
      out += '<section class="pgroup" aria-labelledby="pg' + gi + '"><h3 id="pg' + gi + '">' + esc(L(x.g.group)) + '</h3><ul class="plist">' + x.items.map(function (it) {
        var plain = A.plain(it.en);
        return '<li class="phrase"><div class="p-main"><span class="p-en" lang="en">' + rich(it.en) + '</span><span class="p-nb" lang="nb">' + esc(it.nb) + '</span>' + (it.ex ? '<span class="p-ex" lang="en">“' + rich(it.ex) + '”</span>' : '') + '</div>' +
          '<div class="p-meta"><span class="tag reg-' + it.reg + '">' + esc(t('reg.' + it.reg)) + '</span><span class="tag">' + esc(t('pb.lvl', { n: it.lvl })) + '</span></div>' +
          '<div class="p-act"><button type="button" class="btn btn-ghost sm" data-act="copyText" data-text="' + esc(plain) + '" aria-label="' + esc(t('act.copy') + ': ' + plain) + '">' + icon('copy') + '<span>' + esc(t('act.copy')) + '</span></button>' +
          (A.canSpeak() ? '<button type="button" class="btn btn-ghost sm" data-act="speakText" data-text="' + esc(plain) + '" aria-label="' + esc(t('act.listen') + ': ' + plain) + '">' + icon('speaker') + '<span class="sr">' + esc(t('act.listen')) + '</span></button>' : '') + '</div></li>';
      }).join('') + '</ul></section>';
    });
    return out + '</section>';
  }
  A.inputs.pbq = function (el) { A.state.view.pb.q = el.value; A.rerender(); };
  A.acts.pbReg = function (el) { A.state.view.pb.reg = el.dataset.v; A.rerender(); };
  A.acts.pbLvl = function (el) { A.state.view.pb.lvl = el.dataset.v; A.rerender(); };
  A.acts.pbMine = function () { A.state.view.pb.mine = !A.state.view.pb.mine; A.rerender(); };
  A.acts.copyText = function (el) { A.copy(el.dataset.text); };
  A.acts.speakText = function (el) { A.speak(el.dataset.text); };

  /* ---------- checklist (ticks live in memory only) ---------- */
  function checklistHtml(m) {
    var checks = A.state.checks[m.id] = A.state.checks[m.id] || {}, total = 0, done = 0;
    var out = '<section><h2 class="sr">' + esc(t('tab.checklist')) + '</h2><p class="lead">' + esc(t('cl.intro')) + '</p><p class="muted">' + icon('info') + ' ' + esc(t('cl.note')) + '</p>';
    m.checklist.forEach(function (g, gi) {
      out += '<fieldset class="cl"><legend>' + esc(L(g.group)) + '</legend>' + g.items.map(function (it, ii) {
        var id = gi + '-' + ii; total++; if (checks[id]) done++;
        return '<label class="check"><input type="checkbox" data-change="tick" data-id="' + id + '" data-key="chk' + id + '"' + (checks[id] ? ' checked' : '') + '><span class="box-ic" aria-hidden="true">' + icon('check') + '</span><span class="check-t">' + rich(L(it)) + '</span></label>';
      }).join('') + '</fieldset>';
    });
    out += '<div class="cl-foot"><p role="status" class="progress">' + esc(t('cl.done', { n: done, total: total })) + '</p><button type="button" class="btn" data-act="clReset">' + esc(t('cl.reset')) + '</button><button type="button" class="btn btn-ghost" data-act="print">' + icon('print') + esc(t('act.print')) + '</button></div></section>';
    return out;
  }
  A.changes.tick = function (el) {
    var r = A.state.route; A.state.checks[r.id] = A.state.checks[r.id] || {};
    A.state.checks[r.id][el.dataset.id] = el.checked; A.rerender();
  };
  A.acts.clReset = function () { A.state.checks[A.state.route.id] = {}; A.rerender(); };
  A.acts.print = function () { window.print(); };

  /* ---------- learn more ---------- */
  function resourceCard(m, r) {
    var v = A.state.view, ty = r.type;
    var out = '<li class="res"><div class="res-h"><span class="res-ic">' + icon(ty === 'video' ? 'video' : ty === 'exercise' ? 'pen' : 'doc') + '</span><div><h3><a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(r.title) + '<span class="ext" aria-hidden="true">' + icon('external') + '</span><span class="sr"> (' + esc(t('res.external')) + ')</span></a></h3><p class="res-pub">' + esc(r.publisher) + '</p></div></div>' +
      '<p>' + esc(L(r.why)) + '</p><p class="res-meta"><span class="tag">' + esc(t('res.' + ty)) + '</span><span class="tag">' + (r.lang === 'nb' ? esc(t('res.nb')) : esc(t('res.en'))) + '</span><span class="tag">' + esc(t('res.level')) + ' ' + esc(r.level) + '</span><span class="muted">' + esc(t('res.checked')) + ' ' + esc(r.checked) + '</span></p>';
    if (r.ytid) {
      out += v.video && v.video[r.ytid]
        ? '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(r.ytid) + '" title="' + esc(r.title) + '" loading="lazy" allow="fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>'
        : '<button type="button" class="btn" data-act="loadVideo" data-id="' + esc(r.ytid) + '">' + icon('video') + esc(t('res.loadvideo')) + '</button><p class="muted sm-t">' + esc(t('res.videonote')) + '</p>';
    }
    return out + '</li>';
  }
  A.resourceCard = resourceCard;
  function learnHtml(m) {
    var out = '<section><h2 class="sr">' + esc(t('tab.learn')) + '</h2><p class="lead">' + esc(t('res.intro')) + '</p>';
    out += m.resources.length ? '<ul class="reslist">' + m.resources.map(function (r) { return resourceCard(m, r); }).join('') + '</ul>' : '<p class="empty">' + esc(t('res.none')) + '</p>';
    return out + '</section>';
  }
  A.acts.loadVideo = function (el) { var v = A.state.view; v.video = v.video || {}; v.video[el.dataset.id] = true; A.rerender(); };

  /* ---------- about ---------- */
  A.views.about = function () {
    A.state.title = t('nav.about');
    var p = A.state.prefs, c = A.config;
    var out = '<header class="page-head"><h1>' + esc(t('nav.about')) + '</h1><p class="lead">' + esc(t('about.lead', { name: c.name })) + '</p></header>';
    out += '<section class="prose"><h2>' + esc(t('about.levels.h')) + '</h2><p>' + esc(t('about.levels.p')) + '</p>' +
      '<h2>' + esc(t('about.priv.h')) + '</h2><p>' + esc(t('about.priv.p')) + '</p>' +
      '<h2>' + esc(t('about.use.h')) + '</h2><p>' + esc(t('about.use.p', { owner: c.owner })) + '</p><p class="muted">' + esc(t('about.use.contact')) + ' ' + esc(c.contact) + '</p>' +
      '<h2>' + esc(t('about.lang.h')) + '</h2><p>' + esc(t('about.lang.p')) + '</p></section>';
    out += '<section class="prose"><h2>' + esc(t('about.cur.h')) + '</h2><p>' + esc(t('about.cur.p')) + ' <a href="https://www.udir.no/lk20/ENG01-06" target="_blank" rel="noopener noreferrer">Læreplan i engelsk (ENG01-06)<span class="ext" aria-hidden="true">' + icon('external') + '</span></a></p>' +
      '<div class="tablewrap"><table class="cmp"><thead><tr><th scope="col">' + esc(t('about.code')) + '</th><th scope="col">' + esc(t('about.goal')) + '</th></tr></thead><tbody>' +
      Object.keys(A.K).map(function (k) { return '<tr><th scope="row">' + k + '</th><td lang="nb">' + esc(A.K[k].nb) + (p.lang === 'en' ? '<br><span class="muted" lang="en">' + esc(A.K[k].en) + '</span>' : '') + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<p class="box note-box">' + icon('info') + ' ' + esc(t('about.cur.arg')) + '</p>' +
      (p.teacher ? '<blockquote class="teacher-only" lang="nb">«Elevene viser og utvikler kompetanse i engelsk på 8., 9. og 10. trinn når de kommuniserer med struktur og sammenheng muntlig og skriftlig, tilpasset ulike situasjoner og mottakere. Videre viser og utvikler de kompetanse når de skaper ulike typer tekster der informasjon fra kilder er innlemmet på en etterrettelig måte.» <span class="muted">(Udir, ENG01-06, underveisvurdering 8.–10. trinn)</span></blockquote>' : '<p class="muted">' + esc(t('about.cur.teacher')) + '</p>') +
      '</section>';
    return out;
  };

  /* ---------- credits ---------- */
  A.views.credits = function () {
    A.state.title = t('nav.credits');
    var p = A.state.prefs, rows = [];
    var seenUrl = {};
    A.modules.forEach(function (m) { (m.resources || []).forEach(function (r) { if (!seenUrl[r.url]) { seenUrl[r.url] = 1; rows.push({ m: m, r: r }); } }); });
    var out = '<header class="page-head"><h1>' + esc(t('nav.credits')) + '</h1><p class="lead">' + esc(t('cr.lead')) + '</p></header>';
    out += '<section class="prose"><h2>' + esc(t('cr.base')) + '</h2><ul>' +
      '<li><a href="https://www.udir.no/lk20/ENG01-06" target="_blank" rel="noopener noreferrer">Utdanningsdirektoratet: Læreplan i engelsk (ENG01-06)<span class="ext" aria-hidden="true">' + icon('external') + '</span></a>. ' + esc(t('cr.curr')) + '</li>' +
      '<li>' + esc(t('cr.booklets')) + '</li></ul></section>';
    out += '<section class="prose"><h2>' + esc(t('cr.links')) + '</h2>' + (rows.length ? '<div class="tablewrap"><table class="cmp"><thead><tr><th scope="col">' + esc(t('cr.src')) + '</th><th scope="col">' + esc(t('cr.pub')) + '</th><th scope="col">' + esc(t('cr.lic')) + '</th><th scope="col">' + esc(t('res.checked')) + '</th></tr></thead><tbody>' + rows.map(function (x) {
      return '<tr><th scope="row"><a href="' + esc(x.r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(x.r.title) + '<span class="ext" aria-hidden="true">' + icon('external') + '</span></a></th><td>' + esc(x.r.publisher) + '</td><td>' + esc(x.r.license) + '</td><td>' + esc(x.r.checked) + '</td></tr>';
    }).join('') + '</tbody></table></div>' : '<p class="empty">' + esc(t('res.none')) + '</p>') + '<p class="muted">' + esc(t('cr.verify')) + '</p></section>';
    out += '<section class="prose"><h2>' + esc(t('cr.tools')) + '</h2><ul>' +
      '<li>Lexend © The Lexend Project Authors, SIL Open Font License 1.1 (<span lang="en">fonts/OFL-lexend.txt</span>)</li>' +
      '<li>Atkinson Hyperlegible © Braille Institute of America, Inc., SIL Open Font License 1.1 (<span lang="en">fonts/OFL-atkinson-hyperlegible.txt</span>)</li>' +
      '<li>Caveat © The Caveat Project Authors, SIL Open Font License 1.1 (<span lang="en">fonts/OFL-caveat.txt</span>)</li>' +
      '<li>' + esc(t('cr.hershey')) + '</li>' +
      '<li>' + esc(t('cr.fontsrc')) + '</li></ul></section>';
    if (p.teacher) {
      var pend = [];
      A.modules.forEach(function (m) { (m.pending || []).forEach(function (r) { pend.push(r); }); });
      out += '<section class="prose teacher-only"><h2>' + esc(t('cr.pending')) + '</h2><p class="muted">' + esc(t('cr.pendingnote')) + '</p><ul>' + pend.map(function (r) { return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(r.title) + '</a> (' + esc(r.publisher) + '). ' + esc(r.note || '') + '</li>'; }).join('') + '</ul></section>';
    }
    return out;
  };

  A.views.notfound = function () {
    A.state.title = t('nf.title');
    return '<header class="page-head"><h1>' + esc(t('nf.title')) + '</h1><p class="lead">' + esc(t('nf.text')) + '</p><p><a class="btn" href="#/">' + esc(t('nav.home')) + '</a></p></header>';
  };
})();
