/* Home page: a line-art hand with an ink pen writes greetings on a sheet of paper.
   Decorative only (aria-hidden). It can be paused, it stops by itself after a while,
   and it is shown as a still picture when the device asks for reduced motion. */
(function () {
  'use strict';
  var A = window.APP;
  var PHRASES = ['Hi Tom,', 'Dear Diary,', 'Dear Ms Clarke,', 'Yours sincerely,'];
  var X0 = 96, BASE = 138;      // where the writing starts and the baseline of the text
  var AUTO_STOP_MS = 48000;     // stop moving after this long (the button can start it again)

  var HAND =
    '<defs>' +
    '<path id="hw-idx" d="M112,-112 C98,-106 82,-92 68,-66"/>' +
    '<path id="hw-thm" d="M118,-72 C100,-66 80,-58 60,-50"/>' +
    '<path id="hw-f1" d="M128,-62 C124,-48 118,-38 108,-30"/>' +
    '<path id="hw-f2" d="M139,-58 C137,-45 132,-34 124,-26"/>' +
    '<path id="hw-f3" d="M149,-54 C148,-43 145,-33 140,-26"/>' +
    '</defs>' +
    // sleeve: the arm comes in from outside the sheet
    '<path class="hw-sleeve" d="M138,-122 L172,-104 L232,-188 L196,-214 Z"/>' +
    '<path class="hw-cuff" d="M138,-122 L172,-104 L186,-124 L152,-142 Z"/>' +
    // curled fingers (behind the pen)
    '<use href="#hw-f3" class="hw-o" style="stroke-width:15"/><use href="#hw-f3" class="hw-i" style="stroke-width:11"/>' +
    '<use href="#hw-f2" class="hw-o" style="stroke-width:17"/><use href="#hw-f2" class="hw-i" style="stroke-width:13"/>' +
    '<use href="#hw-f1" class="hw-o" style="stroke-width:18"/><use href="#hw-f1" class="hw-i" style="stroke-width:14"/>' +
    // palm
    '<ellipse class="hw-palm" cx="132" cy="-94" rx="33" ry="40" transform="rotate(32 132 -94)"/>' +
    // pen: nib, grip section, barrel, clip
    '<path class="hw-nib" d="M0,0 L21.7,-15.5 L12.7,-23.5 Z"/><path class="hw-slit" d="M0,0 L17.2,-19.5"/>' +
    '<path class="hw-grip" d="M22.5,-14.9 L11.9,-24.1 L29,-43.6 L39.6,-34.4 Z"/>' +
    '<path class="hw-barrel" d="M40.3,-33.7 L28.3,-44.3 L83,-106.6 L95,-96 Z"/>' +
    '<path class="hw-clip" d="M62,-68 L74,-79" />' +
    // thumb and index finger pinch the pen
    '<use href="#hw-thm" class="hw-o" style="stroke-width:19"/><use href="#hw-thm" class="hw-i" style="stroke-width:15"/>' +
    '<use href="#hw-idx" class="hw-o" style="stroke-width:19"/><use href="#hw-idx" class="hw-i" style="stroke-width:15"/>' +
    '<path class="hw-nail" d="M66,-71 C69,-68 72,-66 74,-65"/>';

  A.heroHtml = function () {
    return '<div class="hero-writer" aria-hidden="true"><svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" focusable="false">' +
      '<rect class="hw-sheet" x="8" y="8" width="604" height="234" rx="6"/>' +
      '<g class="hw-rules"><line x1="20" x2="600" y1="94" y2="94"/><line x1="20" x2="600" y1="142" y2="142"/><line x1="20" x2="600" y1="190" y2="190"/><line x1="20" x2="600" y1="46" y2="46"/></g>' +
      '<line class="hw-margin" x1="70" x2="70" y1="14" y2="236"/>' +
      '<clipPath id="hw-clip"><rect id="hw-rect" x="0" y="0" width="0" height="250"/></clipPath>' +
      '<text id="hw-text" class="hw-text" x="' + X0 + '" y="' + BASE + '" clip-path="url(#hw-clip)">' + PHRASES[0] + '</text>' +
      '<g id="hw-hand" transform="translate(' + X0 + ',' + BASE + ')"><g class="hw-art" transform="scale(.8)">' + HAND + '</g></g>' +
      '</svg></div>';
  };

  var token = 0;
  A.heroStart = function () {
    var svg = A.$('.hero-writer svg');
    if (!svg) return;
    var my = ++token;
    var txt = svg.querySelector('#hw-text'), rect = svg.querySelector('#hw-rect'), hand = svg.querySelector('#hw-hand');
    var btn = A.$('[data-act="heroToggle"]');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var st = { i: 0, len: 300, phase: 'write', t: 0, paused: false, total: 0, last: 0, stopped: false };

    function place(x, y, rot) { hand.setAttribute('transform', 'translate(' + x.toFixed(1) + ',' + y.toFixed(1) + ') rotate(' + (rot || 0).toFixed(1) + ')'); }
    function setPhrase(i) {
      txt.textContent = PHRASES[i]; txt.style.opacity = 1;
      st.len = txt.getComputedTextLength ? txt.getComputedTextLength() : 300;
      rect.setAttribute('width', 0);
    }
    function showStill() {
      setPhrase(0); rect.setAttribute('width', X0 + st.len + 12); place(X0 + st.len + 6, BASE - 16, 0);
    }
    function label() {
      if (!btn) return;
      btn.setAttribute('aria-pressed', String(st.paused || st.stopped));
      btn.querySelector('.hero-lbl').textContent = A.t((st.paused || st.stopped) ? 'hero.play' : 'hero.pause');
    }
    A._hero = { seek: function (p) { st.phase = 'write'; var x = X0 + st.len * p; rect.setAttribute('width', x + 6); place(x, BASE + 2, 0); }, st: st };

    function ready() {
      if (my !== token) return;
      if (reduce) { showStill(); if (btn) btn.hidden = true; return; }
      setPhrase(0); place(X0, BASE - 10, 0); label();
      st.last = performance.now();
      requestAnimationFrame(frame);
    }
    function frame(ts) {
      if (my !== token || !document.body.contains(svg)) return;
      var dt = Math.min(ts - st.last, 60); st.last = ts;
      if (!st.paused && !st.stopped && !document.hidden) {
        st.t += dt; st.total += dt;
        if (st.total > AUTO_STOP_MS) { st.stopped = true; label(); }
        step();
      }
      requestAnimationFrame(frame);
    }
    function step() {
      var D = 500 + st.len * 12;
      if (st.phase === 'write') {
        var u = Math.min(1, st.t / D), x = X0 + st.len * u;
        var wob = Math.sin(u * 95) * 3.2 + Math.sin(u * 31) * 1.6;
        rect.setAttribute('width', x + 6);
        place(x, BASE + 2 + wob, -2 + Math.sin(u * 40) * 2);
        if (u >= 1) { st.phase = 'hold'; st.t = 0; }
      } else if (st.phase === 'hold') {
        var h = Math.min(1, st.t / 350);
        place(X0 + st.len + 6 * h, BASE + 2 - 20 * h, 0);
        if (st.t > 1900) { st.phase = 'back'; st.t = 0; }
      } else if (st.phase === 'back') {
        var b = Math.min(1, st.t / 650), e = b * b * (3 - 2 * b);
        place(X0 + st.len * (1 - e) + 6 * (1 - e), BASE - 18 - 0 * e, 0);
        txt.style.opacity = String(1 - e);
        if (b >= 1) { st.i = (st.i + 1) % PHRASES.length; setPhrase(st.i); st.phase = 'write'; st.t = 0; }
      }
    }
    A.acts.heroToggle = function () {
      if (st.stopped) { st.stopped = false; st.total = 0; st.paused = false; }
      else st.paused = !st.paused;
      label();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready); else ready();
  };

  var prev = A.afterRender;
  A.afterRender = function (o) { if (prev) prev(o); if (A.state.route.name === 'home') A.heroStart(); };
})();
