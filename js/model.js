/* Model-text viewer: clickable parts + info box, Quiz me, Label it, listen, print.
   A text can have normal paragraphs (one clickable block each) and "inline" paragraphs
   made of several clickable sentences (segments that share the same f.p value). */
(function () {
  'use strict';
  var A = window.APP, t = A.t, L = A.L, esc = A.esc, rich = A.rich, icon = A.icon;

  function getModel(m, r) {
    return m.models.filter(function (x) { return x.id === r.sub; })[0] || m.models[0];
  }
  function currentModel() { var r = A.state.route; return getModel(A.module(r.id), r); }
  function segsOf(mod) { return mod.levels[A.state.prefs.level].segments; }
  function partOrder(mod) {
    var seen = [];
    segsOf(mod).forEach(function (s) { if (seen.indexOf(s.part) < 0) seen.push(s.part); });
    return seen;
  }
  // text with "- " bullet lines -> list
  function segText(text) {
    var chunks = [], cur = [], lst = [];
    function fc() { if (cur.length) { chunks.push('<span class="lines">' + cur.map(function (x) { return rich(x); }).join('<br>') + '</span>'); cur = []; } }
    function fl() { if (lst.length) { chunks.push('<ul>' + lst.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>'); lst = []; } }
    String(text).split('\n').forEach(function (ln) {
      if (ln.indexOf('- ') === 0) { fc(); lst.push(ln.slice(2)); } else { fl(); cur.push(ln); }
    });
    fc(); fl();
    return chunks.join('');
  }
  function plainText(mod) {
    return segsOf(mod).map(function (s) { return A.plain(s.text).split('\n').map(function (l) { return l.replace(/^- /, ''); }).filter(function (l) { return !/^(To|Subject):/.test(l); }).join('. '); }).filter(function (x) { return x.trim(); }).join('\n\n');
  }
  // group segments into blocks: consecutive segments with the same f.p form one inline paragraph
  function blocksOf(segs) {
    var blocks = [], last = null;
    segs.forEach(function (s, i) {
      var p = s.f && s.f.p;
      if (p && last && last.p === p) { last.items.push({ s: s, i: i }); }
      else { last = { p: p || null, items: [{ s: s, i: i }] }; blocks.push(last); }
    });
    return blocks;
  }

  /* ---------- state helpers ---------- */
  function initLabel(mod) {
    A.state.view.label = { order: A.shuffle(partOrder(mod)), done: {}, sel: null, msg: '', tries: 0 };
  }
  function newQuiz(mod, part) {
    var v = A.state.view, ids = Object.keys(mod.parts).filter(function (x) { return x !== part; });
    var opts = A.shuffle([part].concat(A.shuffle(ids).slice(0, 3)));
    v.quiz = { part: part, opts: opts, wrong: [], done: !!(v.quizDone && v.quizDone[part]) };
  }

  /* ---------- main view ---------- */
  A.modelView = function (m, r) {
    var v = A.state.view, p = A.state.prefs, mod = getModel(m, r), lvl = p.level;
    v.mode = v.mode || 'explore';
    v.quizDone = v.quizDone || {}; v.score = v.score || { first: 0, total: 0 };
    if (r.part && !v.partInit) { v.partInit = true; if (mod.parts[r.part]) v.sel = r.part; }
    if (v.mode === 'label' && !v.label) initLabel(mod);
    var data = mod.levels[lvl], segs = data.segments, mode = v.mode;
    var words = segs.map(function (s) { return A.wordCount(s.text); }).reduce(function (a, b) { return a + b; }, 0);

    var pills = '<nav class="pills" aria-label="' + esc(t('mv.models')) + '">' + m.models.map(function (x) {
      return '<a href="#/m/' + m.id + '/models/' + x.id + '"' + (x.id === mod.id ? ' aria-current="page"' : '') + '>' + esc(L(x.title)) + '</a>';
    }).join('') + '</nav>';

    var levelLabels = [1, 2, 3].map(function (n) { return { v: n, label: esc(t('lv.n', { n: n })) + '<small>' + esc(t('lv.g' + n)) + '</small>', title: t('lv.n', { n: n }) + ' · ' + t('lv.g' + n) + ' · ' + t('lv.d' + n) }; });
    var tools = '<div class="toolbar">' +
      '<div class="tb-group"><span class="set-lbl">' + esc(t('mv.level')) + '</span>' + A.segCtl(t('mv.level'), levelLabels, lvl, 'setLevel', ' data-key="lv"') + '<span class="muted lv-d">' + esc(t('lv.d' + lvl)) + '</span></div>' +
      '<div class="tb-group"><span class="set-lbl">' + esc(t('mv.mode')) + '</span>' + A.segCtl(t('mv.mode'), [{ v: 'explore', label: t('mode.explore') }, { v: 'quiz', label: t('mode.quiz') }, { v: 'label', label: t('mode.label') }], mode, 'setMode') + '</div>' +
      '<div class="tb-group tb-switches">' + A.sw('toggleNb', p.showNb, esc(t('mv.nb')), 'swnb') + (mode === 'explore' ? A.sw('toggleNumbers', p.numbers, esc(t('mv.numbers')), 'swnum') : '') + '</div>' +
      '<div class="tb-group tb-tools">' +
      (A.canSpeak() ? '<button type="button" class="btn" data-act="listenModel" data-key="listen">' + icon('speaker') + esc(t('act.listenall')) + '</button><button type="button" class="btn btn-ghost" data-act="stopModel">' + esc(t('act.stop')) + '</button>' + A.segCtl(t('mv.speed'), [{ v: '1', label: t('mv.normal') }, { v: '0.75', label: t('mv.slow') }], String(A.state.ui.rate), 'setRate') : '') +
      '<button type="button" class="btn btn-ghost" data-act="print">' + icon('print') + esc(t('act.print')) + '</button></div></div>';

    var draft = p.teacher ? '<p class="teacher-only draft">' + icon('info') + ' ' + esc(data.reviewed ? t('teacher.reviewed') : t('teacher.draft')) + ' · ' + esc(t('teacher.words', { n: words })) + '</p>' : '';

    var blocks = blocksOf(segs).map(function (b) {
      if (!b.p) return segHtml(mod, b.items[0].s, b.items[0].i, b.items[0].i > 0 ? segs[b.items[0].i - 1] : null, false);
      var inner = b.items.map(function (it) { return segHtml(mod, it.s, it.i, it.i > 0 ? segs[it.i - 1] : null, true); }).join(' ');
      var nb = p.showNb ? '<p class="nb" lang="nb">' + b.items.map(function (it) { return rich(it.s.nb); }).join(' ') + '</p>' : '';
      return '<div class="tblock">' + inner + '</div>' + nb;
    }).join('');
    var paper = '<article class="paper kind-' + mod.kind + ' mode-' + mode + (v.sel && mode === 'explore' ? ' has-sel' : '') + '" aria-label="' + esc(L(mod.title)) + '">' + blocks + '</article>';

    var panel = panelHtml(mod, segs);

    var printParts = '<section class="print-only"><h2>' + esc(t('pr.parts')) + '</h2><ol>' + partOrder(mod).map(function (id) {
      var pt = mod.parts[id];
      return '<li><strong>' + esc(L(pt.name)) + '.</strong> ' + esc(L(pt.fn)) + ' ' + pt.tips.map(function (x) { return esc(L(x)); }).join(' ') + '</li>';
    }).join('') + '</ol></section>';

    var body = pills + '<section class="model" aria-labelledby="mt"><h2 id="mt">' + esc(L(mod.title)) + ' <span class="tag reg-' + mod.register + '">' + esc(t('reg.' + mod.register)) + '</span></h2><p class="situation"><strong>' + esc(t('mv.situation')) + ':</strong> ' + esc(L(mod.situation)) + '</p>' +
      tools + draft +
      '<div class="model-grid"><div class="model-col">' + (mode === 'explore' ? '<p class="hint">' + icon('info') + ' ' + esc(t('mv.hint')) + '</p>' : '') + paper + '</div>' + panel + '</div>' + printParts + '</section>';
    return A.shell(m, 'models', body, L(mod.title));
  };

  function segHtml(mod, s, i, prev, inline) {
    var v = A.state.view, p = A.state.prefs, mode = v.mode, part = mod.parts[s.part];
    var sel = (mode === 'explore' || mode === 'quiz') ? v.sel === s.part : false;
    var labelled = mode === 'label' && v.label && v.label.done[s.part];
    var showCat = mode === 'explore' || (mode === 'quiz' && v.quizDone[s.part]) || labelled;
    var first = !prev || prev.part !== s.part;
    var num = (mode === 'explore' && p.numbers && first) ? '<span class="num cat-' + part.cat + '" aria-hidden="true">' + icon(part.cat) + part.n + '</span>' : '';
    var cls = 'tseg' + (inline ? ' inline' : '') + (showCat ? ' cat-' + part.cat : '') + (sel ? ' sel' : '') + (s.f.a === 'r' ? ' al-r' : '') + (s.f.b ? ' b' : '') + (s.f.t ? ' title-seg' : '') + (s.f.ref ? ' ref' : '') + (s.part === 'recipient-subject' && mod.kind === 'email' ? ' hdr' : '') + (labelled ? ' done' : '');
    var lab = labelled && first ? '<span class="seg-label cat-' + part.cat + '">' + icon(part.cat) + esc(L(part.name)) + '</span>' : '';
    var done = mode === 'quiz' && v.quizDone[s.part] && first ? '<span class="seg-label cat-' + part.cat + '">' + icon('check') + esc(L(part.name)) + '</span>' : '';
    var sr = mode === 'explore' ? '<span class="sr">' + esc(t('mv.partn', { n: part.n, name: L(part.name) })) + '. </span>' : '';
    var pressed = (mode === 'label') ? (labelled ? 'true' : 'false') : String(!!sel);
    var attrs = ' data-act="selPart" data-part="' + s.part + '" data-seg="' + i + '" data-key="seg' + i + '" aria-pressed="' + pressed + '"';
    var inner = num + sr + '<span class="txt" lang="en">' + segText(s.text) + '</span>';
    var btn = inline ? '<span class="part" role="button" tabindex="0"' + attrs + '>' + inner + '</span>' : '<button type="button" class="part"' + attrs + '>' + inner + '</button>';
    if (inline) return '<span class="' + cls + '" data-seg="' + i + '" data-part="' + s.part + '">' + lab + done + btn + '</span>';
    return '<div class="' + cls + '" data-seg="' + i + '" data-part="' + s.part + '">' + lab + done + btn + (p.showNb ? '<p class="nb" lang="nb">' + rich(s.nb) + '</p>' : '') + '</div>';
  }

  /* ---------- panels ---------- */
  function panelHtml(mod, segs) {
    var v = A.state.view, mode = v.mode, inner, open;
    if (mode === 'explore') { inner = panelExplore(mod, segs); open = !!v.sel; }
    else if (mode === 'quiz') { inner = panelQuiz(mod); open = true; }
    else { inner = panelLabel(mod); open = true; }
    return '<aside class="panel' + (open ? ' open' : '') + '" id="panel" aria-label="' + esc(t('mv.panel')) + '" aria-live="polite">' + inner + '</aside>';
  }

  function legend(mod) {
    var used = [];
    Object.keys(mod.parts).forEach(function (k) { if (used.indexOf(mod.parts[k].cat) < 0) used.push(mod.parts[k].cat); });
    return '<h4>' + esc(t('mv.legend')) + '</h4><ul class="legend">' + A.cats.filter(function (c) { return used.indexOf(c) >= 0; }).map(function (c) {
      return '<li>' + A.catBadge(c) + '<span>' + esc(t('catd.' + c)) + '</span></li>';
    }).join('') + '</ul>';
  }

  function accItem(sec, iconName, label, count, bodyHtml) {
    var v = A.state.view, open = v.acc === sec;
    return '<section class="acc-item"><h4><button type="button" class="acc-btn" data-act="accToggle" data-sec="' + sec + '" data-key="acc-' + sec + '" aria-expanded="' + open + '" aria-controls="acc-' + sec + '">' +
      icon(iconName) + '<span>' + esc(label) + '</span>' + (count ? '<span class="count">' + count + '</span>' : '') + '<span class="chev">' + icon('chev') + '</span></button></h4>' +
      '<div class="acc-body" id="acc-' + sec + '"' + (open ? '' : ' hidden') + '>' + bodyHtml + '</div></section>';
  }

  function panelExplore(mod, segs) {
    var v = A.state.view, p = A.state.prefs, id = v.sel;
    if (!id) return '<div class="panel-empty"><h3>' + esc(t('mv.empty.h')) + '</h3><p>' + esc(t('mv.empty.p')) + '</p>' + legend(mod) + '</div>';
    var pt = mod.parts[id], lvl = p.level, order = partOrder(mod), idx = order.indexOf(id);
    var tips = pt.tips.slice().concat((pt.levelTips && pt.levelTips[lvl]) || []);
    var shown = (v.moreTips || tips.length <= 4) ? tips : tips.slice(0, 3);
    var nb = segs.filter(function (s) { return s.part === id; }).map(function (s) { return s.nb; }).join('\n\n');
    var en = segs.filter(function (s) { return s.part === id; }).map(function (s) { return A.plain(s.text); }).join('\n');
    var out = '<div class="panel-head"><span class="num big cat-' + pt.cat + '">' + icon(pt.cat) + pt.n + '</span><div><h3>' + esc(L(pt.name)) + '</h3>' + A.catBadge(pt.cat) + '</div>' +
      '<button type="button" class="btn btn-ghost sm" data-act="closePart" aria-label="' + esc(t('act.close')) + '">' + icon('x') + '</button></div>';
    if (p.showNb) out += '<section class="nb-box"><h4>' + esc(t('mv.innb')) + '</h4><p lang="nb">' + rich(nb) + '</p></section>';
    out += '<h4>' + icon('info') + esc(t('mv.what')) + '</h4><p class="fn">' + esc(L(pt.fn)) + '</p>';
    out += '<h4>' + icon('pen') + esc(t('mv.how')) + '</h4><ul class="tips">' + shown.map(function (x) { return '<li>' + rich(L(x)) + '</li>'; }).join('') + '</ul>';
    if (tips.length > 4) out += '<button type="button" class="btn btn-ghost sm more-btn" data-act="moreTips" data-key="moretips">' + esc(t(v.moreTips ? 'mv.fewer' : 'mv.more', { n: tips.length - 3 })) + '</button>';
    var accs = '';
    if (pt.phrases && pt.phrases.length) {
      accs += accItem('phrases', 'copy', t('mv.phrases'), pt.phrases.length,
        '<ul class="phrase-list">' + pt.phrases.map(function (ph) {
          var pl = A.plain(ph);
          return '<li><button type="button" class="phrase-row" data-act="copyText" data-text="' + esc(pl) + '"><span lang="en">' + rich(ph) + '</span><span class="cp">' + icon('copy') + esc(t('act.copy')) + '</span></button></li>';
        }).join('') + '</ul><p class="muted sm-t"><a href="#/m/' + A.state.route.id + '/phrases">' + esc(t('mv.openbank')) + ' ' + icon('arrow-right') + '</a></p>');
    }
    if (pt.mistake) {
      accs += accItem('mistake', 'warn', t('mv.mistake'), 0,
        '<div class="mistake"><p class="bad" lang="en"><span class="mk">' + icon('x') + '<span class="sr">' + esc(t('mv.wrong')) + ': </span></span>' + rich(pt.mistake.bad) + '</p>' +
        '<p class="good" lang="en"><span class="mk">' + icon('check') + '<span class="sr">' + esc(t('mv.right')) + ': </span></span>' + rich(pt.mistake.good) + '</p>' +
        '<p class="muted">' + esc(L(pt.mistake.note)) + '</p></div>');
    }
    if (accs) out += '<div class="acc">' + accs + '</div>';
    out += '<div class="panel-foot">' +
      (A.canSpeak() ? '<button type="button" class="btn btn-ghost sm" data-act="speakText" data-text="' + esc(en) + '">' + icon('speaker') + esc(t('act.listenpart')) + '</button>' : '<span></span>') +
      '<div class="pn"><button type="button" class="btn sm" data-act="partNav" data-dir="-1" data-key="pprev"' + (idx <= 0 ? ' disabled' : '') + '>' + icon('arrow-left') + esc(t('act.prev')) + '</button>' +
      '<button type="button" class="btn sm" data-act="partNav" data-dir="1" data-key="pnext"' + (idx >= order.length - 1 ? ' disabled' : '') + '>' + esc(t('act.next')) + icon('arrow-right') + '</button></div></div>';
    return out;
  }

  function panelQuiz(mod) {
    var v = A.state.view, q = v.quiz, order = partOrder(mod), doneN = order.filter(function (x) { return v.quizDone[x]; }).length;
    var out = '<div class="qz-wrap"><div class="panel-head"><div><h3>' + esc(t('qz.title')) + '</h3><p class="muted">' + esc(t('qz.score', { first: v.score.first, total: v.score.total })) + ' · ' + esc(t('qz.progress', { n: doneN, total: order.length })) + '</p></div></div>';
    if (!q) {
      out += '<p>' + esc(t('qz.start')) + '</p>';
      if (doneN === order.length && order.length) out += '<p class="ok-msg">' + icon('check') + esc(t('qz.alldone')) + '</p>';
    } else {
      var pt = mod.parts[q.part];
      out += '<p class="qz-q" id="qzq">' + esc(t('qz.q')) + '</p><ul class="opts" aria-labelledby="qzq">' + q.opts.map(function (o) {
        var wrong = q.wrong.indexOf(o) >= 0, right = q.done && o === q.part;
        return '<li><button type="button" class="opt' + (wrong ? ' wrong' : '') + (right ? ' right' : '') + '" data-act="quizAns" data-part="' + o + '" data-key="qo-' + o + '"' + ((wrong || q.done) ? ' disabled' : '') + '>' + (right ? icon('check') : wrong ? icon('x') : '') + '<span>' + esc(L(mod.parts[o].name)) + '</span></button></li>';
      }).join('') + '</ul>';
      if (q.wrong.length && !q.done) out += '<p class="bad-msg" role="alert">' + icon('x') + esc(t('qz.wrong')) + '</p>';
      if (q.done) {
        out += '<p class="ok-msg" role="status">' + icon('check') + esc(t(q.wrong.length ? 'qz.right2' : 'qz.right')) + '</p><h4>' + icon('info') + esc(t('mv.what')) + '</h4><p class="fn">' + esc(L(pt.fn)) + '</p>';
        var nxt = order.filter(function (x) { return !v.quizDone[x]; })[0];
        if (nxt) out += '<button type="button" class="btn" data-act="quizNext" data-key="qnext">' + esc(t('qz.next')) + icon('arrow-right') + '</button>';
        else out += '<p class="ok-msg">' + icon('check') + esc(t('qz.alldone')) + '</p>';
      }
    }
    out += '<p><button type="button" class="btn btn-ghost sm" data-act="quizReset">' + esc(t('qz.reset')) + '</button></p></div>';
    return out;
  }

  function panelLabel(mod) {
    var v = A.state.view, lb = v.label, order = partOrder(mod);
    var left = lb.order.filter(function (x) { return !lb.done[x]; });
    var out = '<div class="qz-wrap"><div class="panel-head"><div><h3>' + esc(t('lb.title')) + '</h3><p class="muted">' + esc(t('qz.progress', { n: order.length - left.length, total: order.length })) + '</p></div></div><p>' + esc(t('lb.how')) + '</p>';
    if (left.length) {
      out += '<ul class="chips big" aria-label="' + esc(t('lb.labels')) + '">' + left.map(function (x) {
        return '<li><button type="button" class="chip drag" draggable="true" data-act="labelChip" data-chip="' + x + '" data-key="chip-' + x + '" aria-pressed="' + (lb.sel === x) + '">' + icon('grip') + '<span>' + esc(L(mod.parts[x].name)) + '</span></button></li>';
      }).join('') + '</ul>';
    } else {
      out += '<p class="ok-msg" role="status">' + icon('check') + esc(t('lb.alldone')) + '</p>';
    }
    out += '<p class="lb-msg" role="status">' + (lb.msg ? esc(lb.msg) : '') + '</p><p><button type="button" class="btn btn-ghost sm" data-act="labelReset">' + esc(t('lb.reset')) + '</button></p></div>';
    return out;
  }

  /* ---------- actions ---------- */
  A.acts.setMode = function (el) {
    var v = A.state.view, mod = currentModel();
    v.mode = el.dataset.v; v.sel = null; v.quiz = null;
    if (v.mode === 'label') initLabel(mod);
    A.rerender();
  };
  A.acts.setRate = function (el) { A.state.ui.rate = parseFloat(el.dataset.v); A.rerender(); };
  A.acts.accToggle = function (el) { var v = A.state.view; v.acc = v.acc === el.dataset.sec ? null : el.dataset.sec; A.rerender(); };
  A.acts.moreTips = function () { var v = A.state.view; v.moreTips = !v.moreTips; A.rerender(); };
  A.acts.selPart = function (el) {
    var v = A.state.view, mod = currentModel(), part = el.dataset.part;
    if (v.mode === 'label') { labelClickChip(mod, +el.dataset.seg); return; }
    v.sel = part;
    if (v.mode === 'quiz') newQuiz(mod, part);
    A.rerender();
  };
  A.acts.closePart = function () { var v = A.state.view; v.sel = null; if (v.mode === 'quiz') v.quiz = null; A.rerender(); };
  A.acts.partNav = function (el) {
    var v = A.state.view, mod = currentModel(), order = partOrder(mod), i = order.indexOf(v.sel) + (+el.dataset.dir);
    if (i < 0 || i >= order.length) return;
    v.sel = order[i]; A.rerender();
  };
  A.acts.listenModel = function () { A.speak(plainText(currentModel())); };
  A.acts.stopModel = function () { A.stopSpeak(); };

  A.acts.quizAns = function (el) {
    var v = A.state.view, q = v.quiz; if (!q || q.done) return;
    var o = el.dataset.part;
    if (o === q.part) { q.done = true; v.quizDone[q.part] = true; v.score.total++; if (!q.wrong.length) v.score.first++; }
    else if (q.wrong.indexOf(o) < 0) q.wrong.push(o);
    A.rerender();
  };
  A.acts.quizNext = function () {
    var v = A.state.view, mod = currentModel(), order = partOrder(mod);
    var start = order.indexOf(v.sel), nxt = null, i;
    for (i = 1; i <= order.length; i++) { var c = order[(start + i) % order.length]; if (!v.quizDone[c]) { nxt = c; break; } }
    if (nxt) { v.sel = nxt; newQuiz(mod, nxt); }
    A.rerender();
  };
  A.acts.quizReset = function () { var v = A.state.view; v.quizDone = {}; v.score = { first: 0, total: 0 }; v.quiz = null; v.sel = null; A.rerender(); };

  function labelPlace(chip, segIdx, mod) {
    var v = A.state.view, lb = v.label, seg = segsOf(mod)[segIdx];
    if (!lb) return;
    if (!chip) { lb.msg = A.t('lb.pick'); A.rerender(); return; }
    if (lb.done[seg.part]) { lb.msg = A.t('lb.already'); A.rerender(); return; }
    if (chip === seg.part) { lb.done[chip] = true; lb.sel = null; lb.msg = A.t('lb.correct'); }
    else { lb.msg = A.t('lb.wrong'); lb.tries++; }
    A.rerender();
  }
  A.acts.labelChip = function (el) {
    var lb = A.state.view.label; if (!lb) return;
    lb.sel = lb.sel === el.dataset.chip ? null : el.dataset.chip; lb.msg = lb.sel ? A.t('lb.selected') : ''; A.rerender();
  };
  A.acts.labelReset = function () { initLabel(currentModel()); A.rerender(); };

  /* a click on a text part while a label chip is selected places the label (Label it mode) */
  function labelClickChip(mod, segIdx) { var lb = A.state.view.label; labelPlace(lb && lb.sel, segIdx, mod); }

  /* drag and drop for Label it (pointer users) */
  document.addEventListener('dragstart', function (e) {
    var c = e.target.closest && e.target.closest('[data-chip]');
    if (c && e.dataTransfer) { e.dataTransfer.setData('text/plain', c.dataset.chip); e.dataTransfer.effectAllowed = 'move'; }
  });
  document.addEventListener('dragover', function (e) {
    var s = e.target.closest && e.target.closest('.tseg');
    if (s && A.state.view.mode === 'label') { e.preventDefault(); s.classList.add('drop'); }
  });
  document.addEventListener('dragleave', function (e) { var s = e.target.closest && e.target.closest('.tseg'); if (s) s.classList.remove('drop'); });
  document.addEventListener('drop', function (e) {
    var s = e.target.closest && e.target.closest('.tseg');
    if (!s || A.state.view.mode !== 'label' || !e.dataTransfer) return;
    e.preventDefault();
    labelPlace(e.dataTransfer.getData('text/plain'), +s.dataset.seg, currentModel());
  });

  /* keyboard: arrows move between parts, Esc closes the box */
  document.addEventListener('keydown', function (e) {
    var r = A.state.route, v = A.state.view;
    if (r.name !== 'module' || r.tab !== 'models' || v.mode !== 'explore' || !v.sel) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var tg = e.target && e.target.tagName;
    if (tg === 'INPUT' || tg === 'SELECT' || tg === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var mod = currentModel(), order = partOrder(mod), i = order.indexOf(v.sel) + (e.key === 'ArrowRight' ? 1 : -1);
      if (i >= 0 && i < order.length) { e.preventDefault(); v.sel = order[i]; A.rerender(); }
    } else if (e.key === 'Escape' && !A.state.ui.settings) { v.sel = null; A.rerender(); }
  });
})();
