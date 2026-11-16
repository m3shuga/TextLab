/* Loads the content files listed in content/index.js, then starts the app. */
(function () {
  'use strict';
  var A = window.APP;
  function load(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(true); };
      s.onerror = function () { console.error('Could not load ' + src); A.loadErrors = (A.loadErrors || []).concat(src); resolve(false); };
      document.head.appendChild(s);
    });
  }
  var files = (A.moduleFiles || []).map(function (f) { return 'content/' + f + '.js'; });
  files.reduce(function (p, f) { return p.then(function () { return load(f); }); }, Promise.resolve()).then(function () {
    A.start();
    if (A.loadErrors && A.loadErrors.length) {
      var n = document.createElement('p');
      n.className = 'box note-box'; n.textContent = 'Could not load: ' + A.loadErrors.join(', ');
      document.getElementById('main').prepend(n);
    }
  });
})();
