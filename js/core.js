/* Core: state, display preferences, text helpers, router, render loop.
   No framework. Everything hangs off window.APP. */
(function () {
  'use strict';
  var A = window.APP;

  /* ---------- state ---------- */
  var DEF = { lang: 'en', level: 2, variety: 'uk', support: false, size: 0, theme: 'auto', showNb: false, numbers: true, teacher: false };
  var KEY = 'textlab.prefs.v1';
  A.state = { route: { name: 'home' }, prefs: Object.assign({}, DEF), view: {}, ui: { settings: false, rate: 1 }, checks: {}, prac: {} };

  function sanitize(o) {
    var p = Object.assign({}, DEF);
    if (!o || typeof o !== 'object') return p;
    if (o.lang === 'en' || o.lang === 'nb') p.lang = o.lang;
    if (o.level === 1 || o.level === 2 || o.level === 3) p.level = o.level;
    if (o.variety === 'uk' || o.variety === 'us') p.variety = o.variety;
    if (typeof o.support === 'boolean') p.support = o.support;
    if (o.size === 0 || o.size === 1 || o.size === 2 || o.size === 3) p.size = o.size;
    if (o.theme === 'auto' || o.theme === 'light' || o.theme === 'dark') p.theme = o.theme;
    if (typeof o.showNb === 'boolean') p.showNb = o.showNb;
    if (typeof o.numbers === 'boolean') p.numbers = o.numbers;
    if (typeof o.teacher === 'boolean') p.teacher = o.teacher;
    return p;
  }
  function loadPrefs() {
    try { var s = window.localStorage.getItem(KEY); if (s) A.state.prefs = sanitize(JSON.parse(s)); } catch (e) { /* storage blocked: fine */ }
  }
  A.savePrefs = function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(A.state.prefs)); } catch (e) { /* ignore */ }
  };
  A.resetPrefs = function () {
    A.state.prefs = Object.assign({}, DEF);
    try { window.localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
  };
  A.setPref = function (k, v) { A.state.prefs[k] = v; A.savePrefs(); A.applyPrefs(); };

  function applyQuery(q) {
    if (!q) return;
    var p = A.state.prefs, o = {};
    q.split('&').forEach(function (kv) { var a = kv.split('='); o[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || ''); });
    if (o.lang === 'en' || o.lang === 'nb') p.lang = o.lang;
    if (o.level && /^[123]$/.test(o.level)) p.level = +o.level;
    if (o.variety === 'uk' || o.variety === 'us') p.variety = o.variety;
    if (o.support === '1') p.support = true;
    if (o.support === '0') p.support = false;
    if (o.size && /^[0-3]$/.test(o.size)) p.size = +o.size;
    if (o.theme === 'light' || o.theme === 'dark' || o.theme === 'auto') p.theme = o.theme;
    if (o.nb === '1') p.showNb = true;
    if (o.nb === '0') p.showNb = false;
    if (o.teacher === '1') p.teacher = true;
  }
  A.settingsLink = function () {
    var p = A.state.prefs, parts = ['lang=' + p.lang, 'level=' + p.level, 'variety=' + p.variety, 'support=' + (p.support ? 1 : 0), 'size=' + p.size, 'theme=' + p.theme, 'nb=' + (p.showNb ? 1 : 0)];
    var base = location.href.split('#')[0];
    return base + '#/' + (A.state.route.key ? A.state.route.key : '') + '?' + parts.join('&');
  };

  var SIZES = ['100%', '112.5%', '125%', '137.5%'];
  A.applyPrefs = function () {
    var p = A.state.prefs, h = document.documentElement;
    h.lang = p.lang === 'nb' ? 'nb' : 'en';
    h.setAttribute('data-theme', p.theme);
    h.style.fontSize = SIZES[p.size];
    document.body.classList.toggle('support', !!p.support);
    document.body.classList.toggle('teacher', !!p.teacher);
  };

  /* ---------- text helpers ---------- */
  A.esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  // L: pick the text for the current language ({en, nb} or plain string)
  A.L = function (o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    var l = A.state.prefs.lang;
    var v = o[l];
    if (v == null || v === '') { v = o[l === 'en' ? 'nb' : 'en']; if (A.debug) console.warn('Missing translation', o); }
    return v == null ? '' : v;
  };
  A.t = function (key, vars) {
    var e = A.ui && A.ui[key];
    if (!e) { console.warn('Missing UI string: ' + key); return key; }
    var s = A.L(e);
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
    return s;
  };
  // rich(): escape, then apply {uk|us} variants, **bold**, newlines
  A.rich = function (s) {
    s = A.esc(s);
    var us = A.state.prefs.variety === 'us';
    s = s.replace(/\{([^{}|]*)\|([^{}]*)\}/g, function (m, a, b) {
      return '<span class="var" title="UK: ' + a + ' · US: ' + b + '">' + (us ? b : a) + '</span>';
    });
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*\n]+?)\*/g, '<em class="it">$1</em>');   // *italic* (used for APA titles)
    return s.replace(/\n/g, '<br>');
  };
  // plain(): the same text without markup (for copy and read-aloud)
  A.plain = function (s) {
    var us = A.state.prefs.variety === 'us';
    return String(s == null ? '' : s).replace(/\{([^{}|]*)\|([^{}]*)\}/g, function (m, a, b) { return us ? b : a; }).replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*([^*\n]+?)\*/g, '$1');
  };
  A.icon = function (n, cls) { return '<svg class="ic' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="#i-' + n + '"/></svg>'; };
  A.$ = function (s, r) { return (r || document).querySelector(s); };
  A.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  A.shuffle = function (arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  A.wordCount = function (s) { var p = A.plain(s).replace(/[-–]/g, ' ').trim(); return p ? p.split(/\s+/).length : 0; };

  /* ---------- toast / copy / speech ---------- */
  var toastTimer;
  A.toast = function (msg) {
    var el = A.$('#toast'); if (!el) return;
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  };
  A.copy = function (text, doneMsg) {
    function ok() { A.toast(doneMsg || A.t('toast.copied')); }
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); ok(); } catch (e) { A.toast(A.t('toast.copyfail')); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(ok, fallback); } else { fallback(); }
  };
  A.canSpeak = function () { return 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function'; };
  A.speak = function (text) {
    if (!A.canSpeak()) { A.toast(A.t('toast.nospeech')); return; }
    window.speechSynthesis.cancel();
    var u = new window.SpeechSynthesisUtterance(text);
    var lang = A.state.prefs.variety === 'us' ? 'en-US' : 'en-GB';
    u.lang = lang; u.rate = A.state.ui.rate;
    var voices = window.speechSynthesis.getVoices() || [];
    var v = voices.filter(function (x) { return x.lang && x.lang.replace('_', '-').toLowerCase() === lang.toLowerCase(); })[0];
    if (v) u.voice = v; else if (voices.length && !voices.some(function (x) { return /^en/i.test(x.lang); })) { A.toast(A.t('toast.novoice')); }
    window.speechSynthesis.speak(u);
  };
  A.stopSpeak = function () { if (A.canSpeak()) window.speechSynthesis.cancel(); };

  /* ---------- router ---------- */
  function parseRoute() {
    var h = (location.hash || '').replace(/^#\/?/, ''), q = '', qi = h.indexOf('?');
    if (qi >= 0) { q = h.slice(qi + 1); h = h.slice(0, qi); }
    var p = h.split('/').filter(Boolean).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } });
    var r;
    if (!p.length) r = { name: 'home' };
    else if (p[0] === 'm') r = { name: 'module', id: p[1], tab: p[2] || 'overview', sub: p[3] || null, part: p[4] || null };
    else if (p[0] === 'about') r = { name: 'about' };
    else if (p[0] === 'credits') r = { name: 'credits' };
    else r = { name: 'notfound' };
    r.key = p.join('/'); r.query = q;
    return r;
  }
  A.module = function (id) { return A.modules.filter(function (m) { return m.id === id; })[0]; };

  /* ---------- render ---------- */
  var lastFocusKey = null, lastSel = null;
  function captureFocus() {
    var el = document.activeElement;
    lastFocusKey = null; lastSel = null;
    if (el && el.dataset && el.dataset.key) {
      lastFocusKey = el.dataset.key;
      if (typeof el.selectionStart === 'number') lastSel = [el.selectionStart, el.selectionEnd];
    }
  }
  function restoreFocus() {
    if (!lastFocusKey) return;
    var el = document.querySelector('[data-key="' + lastFocusKey.replace(/"/g, '\\"') + '"]');
    if (el) { try { el.focus({ preventScroll: true }); if (lastSel && el.setSelectionRange) el.setSelectionRange(lastSel[0], lastSel[1]); } catch (e) { /* ignore */ } }
  }
  A.render = function (opts) {
    opts = opts || {};
    captureFocus();
    var r = A.state.route, v = A.views[r.name] || A.views.notfound;
    A.state.title = '';
    var html = v(r);
    var main = A.$('#main');
    main.innerHTML = html;
    A.applyPrefs();
    A.renderChrome();
    document.title = (A.state.title ? A.state.title + ' · ' : '') + A.config.name;
    if (opts.nav) {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    } else { restoreFocus(); }
    if (A.afterRender) A.afterRender(opts);
  };
  A.rerender = function () { A.render({}); };

  /* ---------- events ---------- */
  A.acts = {}; A.changes = {}; A.inputs = {};
  function bind() {
    document.addEventListener('click', function (e) {
      var s = A.state.ui.settings;
      var el = e.target.closest ? e.target.closest('[data-act]') : null;
      if (s && !(e.target.closest && (e.target.closest('#settings-panel') || (el && el.dataset.act === 'toggleSettings')))) { A.state.ui.settings = false; A.renderChrome(); }
      if (!el) return;
      var fn = A.acts[el.dataset.act];
      if (fn) fn(el, e);
    });
    document.addEventListener('change', function (e) {
      var el = e.target.closest ? e.target.closest('[data-change]') : null;
      if (el && A.changes[el.dataset.change]) A.changes[el.dataset.change](el, e);
    });
    document.addEventListener('input', function (e) {
      var el = e.target.closest ? e.target.closest('[data-input]') : null;
      if (el && A.inputs[el.dataset.input]) A.inputs[el.dataset.input](el, e);
    });
    document.addEventListener('keydown', function (e) {
      var rb = e.target && e.target.getAttribute && e.target.getAttribute('role') === 'button' && e.target.dataset && e.target.dataset.act;
      if (rb && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.target.click(); return; }
      if (e.key === 'Escape' && A.state.ui.settings) { A.state.ui.settings = false; A.renderChrome(); var b = A.$('[data-act="toggleSettings"]'); if (b) b.focus(); }
    });
    window.addEventListener('hashchange', function () {
      var r = parseRoute();
      if (r.query) { r = consumeQuery(r); }
      A.state.route = r; A.state.view = {}; A.stopSpeak(); A.render({ nav: true });
    });
  }

  /* generic preference actions */
  A.acts.setLang = function (el) { A.setPref('lang', el.dataset.v); A.rerender(); };
  A.acts.setVariety = function (el) { A.setPref('variety', el.dataset.v); A.rerender(); };
  A.acts.setLevel = function (el) { A.setPref('level', +el.dataset.v); A.state.view.label = null; A.state.view.quiz = null; A.rerender(); };
  A.acts.toggleSupport = function () { A.setPref('support', !A.state.prefs.support); A.rerender(); };
  A.acts.sizeUp = function () { A.setPref('size', Math.min(3, A.state.prefs.size + 1)); A.rerender(); };
  A.acts.sizeDown = function () { A.setPref('size', Math.max(0, A.state.prefs.size - 1)); A.rerender(); };
  A.acts.setTheme = function (el) { A.setPref('theme', el.dataset.v); A.rerender(); };
  A.acts.toggleTeacher = function () { A.setPref('teacher', !A.state.prefs.teacher); A.rerender(); };
  A.acts.toggleNb = function () { A.setPref('showNb', !A.state.prefs.showNb); A.rerender(); };
  A.acts.toggleNumbers = function () { A.setPref('numbers', !A.state.prefs.numbers); A.rerender(); };
  A.acts.toggleSettings = function () { A.state.ui.settings = !A.state.ui.settings; A.renderChrome(); if (A.state.ui.settings) { var f = A.$('#settings-panel button'); if (f) f.focus(); } };
  A.acts.resetPrefs = function () { A.resetPrefs(); A.applyPrefs(); A.rerender(); A.toast(A.t('toast.reset')); };
  A.acts.copyLink = function () { A.copy(A.settingsLink(), A.t('toast.linkcopied')); };
  A.acts.skip = function () { var m = A.$('#main'); m.focus(); m.scrollIntoView(); };

  /* settings in a link (#/page?lang=nb&level=1 ...) are applied once, then removed from the address bar */
  function consumeQuery(r) {
    applyQuery(r.query);
    A.savePrefs();
    A.applyPrefs();
    try { history.replaceState(null, '', location.href.split('#')[0] + '#/' + r.key); } catch (e) { /* ignore */ }
    return parseRoute();
  }

  /* ---------- start ---------- */
  A.start = function () {
    loadPrefs();
    var r = parseRoute();
    if (r.query) r = consumeQuery(r);
    A.state.route = r;
    A.applyPrefs();
    bind();
    A.render({ nav: false });
  };
})();
