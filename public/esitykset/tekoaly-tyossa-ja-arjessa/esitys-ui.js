// Esityssivun kehys: koko näyttö (F), idle-häivytys ja mobiilin kääntövihje.
(function () {
  var root = document.documentElement;
  var bar = document.getElementById('eui');
  var fsBtn = document.getElementById('eui-fs');
  var hint = document.getElementById('eui-rotate');

  // deck-stagen muokkauskisko (thumbnailit, drag & drop) ei kuulu julkiselle sivulle.
  // x-import ei välitä no-rail-attribuuttia, joten asetetaan se heti kun dc-runtime luo elementin.
  function noRail() {
    var d = document.querySelector('deck-stage');
    if (d && !d.hasAttribute('no-rail')) d.setAttribute('no-rail', '');
    return !!d;
  }
  if (!noRail()) {
    var mo = new MutationObserver(function () { if (noRail()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }

  function fsElement() { return document.fullscreenElement || document.webkitFullscreenElement; }
  var canFs = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);

  function enterFs() {
    var req = root.requestFullscreen || root.webkitRequestFullscreen;
    var p = req && req.call(root, { navigationUI: 'hide' });
    // Android: lukitaan vaakaan, kun koko näyttö on päällä. iOS/desktop hylkää hiljaa.
    Promise.resolve(p).then(function () {
      if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () {});
    }).catch(function () {});
  }
  function exitFs() {
    var ex = document.exitFullscreen || document.webkitExitFullscreen;
    if (ex) ex.call(document);
  }
  function toggleFs() { fsElement() ? exitFs() : enterFs(); }
  function syncFs() {
    var on = !!fsElement();
    if (on) root.setAttribute('data-eui-fs', ''); else root.removeAttribute('data-eui-fs');
    fsBtn.setAttribute('aria-label', on ? 'Poistu koko näytöstä' : 'Koko näyttö');
    fsBtn.title = on ? 'Poistu koko näytöstä (F)' : 'Koko näyttö (F)';
  }

  if (canFs) {
    fsBtn.hidden = false;
    fsBtn.addEventListener('click', function () { toggleFs(); fsBtn.blur(); });
    document.addEventListener('fullscreenchange', syncFs);
    document.addEventListener('webkitfullscreenchange', syncFs);
    window.addEventListener('keydown', function (e) {
      if ((e.key === 'f' || e.key === 'F') && !e.metaKey && !e.ctrlKey && !e.altKey) toggleFs();
    });
  }

  // Painikkeet näkyvät liikkeen/kosketuksen jälkeen ja häipyvät, kun esitystä katsotaan.
  var timer;
  function show() {
    bar.setAttribute('data-show', '');
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (!bar.matches(':hover') && !bar.contains(document.activeElement)) bar.removeAttribute('data-show');
    }, 3000);
  }
  ['pointermove', 'pointerdown', 'focusin'].forEach(function (t) {
    window.addEventListener(t, show, { passive: true });
  });
  show();

  // Kääntövihje: vain kosketuslaitteella pystyasennossa (CSS hoitaa näkyvyyden), kerran per istunto.
  var KEY = 'eui-rotate-dismissed';
  var dismissed = false;
  try { dismissed = sessionStorage.getItem(KEY) === '1'; } catch (e) {}
  if (!dismissed) {
    hint.hidden = false;
    document.getElementById('eui-rotate-close').addEventListener('click', function (e) {
      e.stopPropagation();
      hint.hidden = true;
      try { sessionStorage.setItem(KEY, '1'); } catch (err) {}
    });
    setTimeout(function () { hint.hidden = true; }, 12000);
  }
})();
