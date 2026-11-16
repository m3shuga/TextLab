/* Practice engine: mcq, gap, sort, order. Everything stays in memory only. */
(function () {
  'use strict';
  var A = window.APP, t = A.t, L = A.L, esc = A.esc, rich = A.rich, icon = A.icon;

  function key(m) { return m.id + '/' + A.state.prefs.level; }
  function setFor(m) {
    var k = key(m), lvl = A.state.prefs.level;
    if (!A.state.prac[k]) {
      var items = m.practice.filter(function (it) { return it.level.indexOf(lvl) >= 0; }).map(prepare);
      A.state.prac[k] = { items: items, st: {} };
    }
    return A.state.prac[k];
  }
  function prepare(it) {
    var o = { it: it };
    if (it.type === 'mcq' || it.type === 'gap') o.opts = A.shuffle(it.options.map(function (x, i) { return { text: x, ok: i === it.answer }; }));
    if (it.type === 'sort') o.order = A.shuffle(it.items.map(function (x, i) { return { text: x.text, b: x.b, i: i }; }));
    if (it.type === 'order') { var c = A.shuffle(it.items), n = 0; while (c.join('|') === it.items.join('|') && n++ < 10) c = A.shuffle(it.items); o.cur = c; }
    return o;
  }
  function stOf(set, id) { return set.st[id] = set.st[id] || {}; }

  function solved(o, st) {
    var it = o.it;
    if (it.type === 'mcq') return st.sel != null && o.opts[st.sel].ok;
    if (it.type === 'gap') return !!st.checked && o.opts[st.sel] && o.opts[st.sel].ok;
    if (it.type === 'sort') return o.order.every(function (x) { return st.placed && st.placed[x.i] === x.b; });
    if (it.type === 'order') return !!st.checked && st.right === it.items.length;
    return false;
  }
  function answered(o, st) {
    var it = o.it;
    if (it.type === 'mcq') return st.sel != null;
    if (it.type === 'gap' || it.type === 'order') return !!st.checked;
    if (it.type === 'sort') return o.order.every(function (x) { return st.placed && st.placed[x.i] != null; });
    return false;
  }
  function feedback(o, st) {
    if (!answered(o, st)) return '';
    var ok = solved(o, st), extra = '';
    if (o.it.type === 'order' && !ok) extra = ' ' + t('pr.inplace', { n: st.right, total: o.it.items.length });
    if (o.it.type === 'sort' && !ok) { var good = o.order.filter(function (x) { return st.placed[x.i] === x.b; }).length; extra = ' ' + t('pr.inplace', { n: good, total: o.order.length }); }
    return '<div class="fb ' + (ok ? 'ok' : 'no') + '" role="status">' + icon(ok ? 'check' : 'x') + '<div><strong>' + esc(t(ok ? 'pr.correct' : 'pr.notquite')) + '</strong>' + esc(extra) + ' ' + esc(L(o.it.why)) + '</div></div>';
  }

  function itemHtml(o, n) {
    var it = o.it, set = A.state.prac[A.state.route.id + '/' + A.state.prefs.level], st = stOf(set, it.id), id = esc(it.id), out;
    out = '<li class="pq" id="pq-' + id + '"><p class="pq-q"><span class="pq-n">' + n + '</span>' + esc(L(it.q)) + '</p>';
    if (it.type === 'mcq') {
      out += '<ul class="opts">' + o.opts.map(function (op, i) {
        var picked = st.sel === i, cls = picked ? (op.ok ? ' right' : ' wrong') : (st.sel != null && op.ok ? ' reveal' : '');
        return '<li><button type="button" class="opt' + cls + '" data-act="pracOpt" data-id="' + id + '" data-i="' + i + '" data-key="po-' + id + '-' + i + '"' + (st.sel != null ? ' disabled' : '') + '>' + (picked ? icon(op.ok ? 'check' : 'x') : '') + '<span lang="en">' + rich(op.text) + '</span></button></li>';
      }).join('') + '</ul>';
    } else if (it.type === 'gap') {
      out += '<p class="gap"><span lang="en">' + rich(it.before) + '</span> <select class="select" data-change="gapSel" data-id="' + id + '" data-key="gs-' + id + '" aria-label="' + esc(t('pr.choose')) + '"' + (st.checked ? ' disabled' : '') + '><option value="">…</option>' +
        o.opts.map(function (op, i) { return '<option value="' + i + '"' + (st.sel === i ? ' selected' : '') + '>' + esc(A.plain(op.text)) + '</option>'; }).join('') + '</select> <span lang="en">' + rich(it.after) + '</span></p>' +
        (st.checked ? '' : '<button type="button" class="btn sm" data-act="gapCheck" data-id="' + id + '" data-key="gc-' + id + '"' + (st.sel == null ? ' disabled' : '') + '>' + esc(t('pr.check')) + '</button>');
    } else if (it.type === 'sort') {
      st.placed = st.placed || {};
      out += '<ul class="sortlist">' + o.order.map(function (x) {
        var pl = st.placed[x.i], done = answered(o, st);
        var mark = (done && pl != null) ? (pl === x.b ? '<span class="mk ok">' + icon('check') + '</span>' : '<span class="mk no">' + icon('x') + '</span>') : '';
        return '<li class="sortrow"><span class="sort-t" lang="en">' + rich(x.text) + '</span><span class="seg" role="group" aria-label="' + esc(A.plain(x.text)) + '">' + it.buckets.map(function (b, bi) {
          return '<button type="button" class="seg-btn" data-act="sortPick" data-id="' + id + '" data-i="' + x.i + '" data-b="' + bi + '" aria-pressed="' + (pl === bi) + '"' + (done ? ' disabled' : '') + '>' + esc(L(b)) + '</button>';
        }).join('') + '</span>' + mark + '</li>';
      }).join('') + '</ul>';
    } else if (it.type === 'order') {
      var cur = st.cur || o.cur;
      out += '<ol class="ordlist">' + cur.map(function (x, i) {
        return '<li class="ordrow"><span lang="en">' + rich(x) + '</span><span class="ord-btns"><button type="button" class="btn btn-ghost sm" data-act="ordMove" data-id="' + id + '" data-i="' + i + '" data-dir="-1" data-key="ou-' + id + '-' + i + '" aria-label="' + esc(t('pr.up') + ': ' + A.plain(x)) + '"' + (i === 0 || st.checked ? ' disabled' : '') + '>' + icon('arrow-up') + '</button><button type="button" class="btn btn-ghost sm" data-act="ordMove" data-id="' + id + '" data-i="' + i + '" data-dir="1" data-key="od-' + id + '-' + i + '" aria-label="' + esc(t('pr.down') + ': ' + A.plain(x)) + '"' + (i === cur.length - 1 || st.checked ? ' disabled' : '') + '>' + icon('arrow-down') + '</button></span></li>';
      }).join('') + '</ol>' + (st.checked ? '' : '<button type="button" class="btn sm" data-act="ordCheck" data-id="' + id + '" data-key="oc-' + id + '">' + esc(t('pr.check')) + '</button>');
    }
    out += feedback(o, st);
    if (answered(o, st)) out += '<p><button type="button" class="btn btn-ghost sm" data-act="pracRetry" data-id="' + id + '" data-key="pr-' + id + '">' + esc(t('pr.retry')) + '</button></p>';
    return out + '</li>';
  }

  A.practiceHtml = function (m) {
    var set = setFor(m), lvl = A.state.prefs.level, score = 0;
    set.items.forEach(function (o) { if (solved(o, stOf(set, o.it.id))) score++; });
    var levelLabels = [1, 2, 3].map(function (n) { return { v: n, label: esc(t('lv.n', { n: n })) + '<small>' + esc(t('lv.g' + n)) + '</small>' }; });
    var out = '<section class="practice"><h2 class="sr">' + esc(t('tab.practice')) + '</h2><p class="lead">' + esc(t('pr.intro')) + '</p><p class="muted">' + icon('info') + ' ' + esc(t('pr.note')) + '</p>' +
      '<div class="toolbar"><div class="tb-group"><span class="set-lbl">' + esc(t('mv.level')) + '</span>' + A.segCtl(t('mv.level'), levelLabels, lvl, 'setLevel', ' data-key="plv"') + '<span class="muted lv-d">' + esc(t('lv.d' + lvl)) + '</span></div>' +
      '<div class="tb-group"><p class="score" role="status">' + esc(t('pr.score', { n: score, total: set.items.length })) + '</p><button type="button" class="btn btn-ghost" data-act="pracReset">' + esc(t('pr.resetall')) + '</button></div></div>';
    out += set.items.length ? '<ol class="pqs">' + set.items.map(function (o, i) { return itemHtml(o, i + 1); }).join('') + '</ol>' : '<p class="empty">' + esc(t('pr.none')) + '</p>';
    return out + '</section>';
  };

  function find(id) {
    var m = A.module(A.state.route.id), set = setFor(m), o = set.items.filter(function (x) { return x.it.id === id; })[0];
    return { m: m, set: set, o: o, st: stOf(set, id) };
  }
  A.acts.pracOpt = function (el) { var f = find(el.dataset.id); if (f.st.sel == null) f.st.sel = +el.dataset.i; A.rerender(); };
  A.changes.gapSel = function (el) { var f = find(el.dataset.id); f.st.sel = el.value === '' ? null : +el.value; A.rerender(); };
  A.acts.gapCheck = function (el) { var f = find(el.dataset.id); if (f.st.sel != null) f.st.checked = true; A.rerender(); };
  A.acts.sortPick = function (el) { var f = find(el.dataset.id); f.st.placed = f.st.placed || {}; f.st.placed[+el.dataset.i] = +el.dataset.b; A.rerender(); };
  A.acts.ordMove = function (el) {
    var f = find(el.dataset.id), cur = (f.st.cur || f.o.cur).slice(), i = +el.dataset.i, j = i + (+el.dataset.dir);
    if (j < 0 || j >= cur.length) return;
    var tmp = cur[i]; cur[i] = cur[j]; cur[j] = tmp; f.st.cur = cur;
    A.rerender();
    var nk = (el.dataset.dir === '-1' ? 'ou-' : 'od-') + el.dataset.id + '-' + j, nel = document.querySelector('[data-key="' + nk + '"]');
    if (nel && !nel.disabled) nel.focus({ preventScroll: true });
  };
  A.acts.ordCheck = function (el) {
    var f = find(el.dataset.id), cur = f.st.cur || f.o.cur;
    f.st.right = cur.filter(function (x, i) { return x === f.o.it.items[i]; }).length; f.st.checked = true; A.rerender();
  };
  A.acts.pracRetry = function (el) {
    var f = find(el.dataset.id), k = f.m.id + '/' + A.state.prefs.level, idx = f.set.items.indexOf(f.o);
    f.set.items[idx] = prepare(f.o.it); delete f.set.st[el.dataset.id]; A.rerender();
    var nel = document.getElementById('pq-' + el.dataset.id); if (nel) { var b = nel.querySelector('button:not([disabled]), select:not([disabled])'); if (b) b.focus({ preventScroll: true }); }
  };
  A.acts.pracReset = function () { delete A.state.prac[key(A.module(A.state.route.id))]; A.rerender(); };
})();
