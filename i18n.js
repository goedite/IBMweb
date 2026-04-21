/**
 * IBM Company — Motor i18n
 * Soporta: ES · EN · DE · NL
 * 1º Prioridad: elección guardada en localStorage
 * 2º Prioridad: idioma del navegador
 * 3º Fallback: español
 */
(function () {
  var SUPPORTED   = ['es', 'en', 'de', 'nl', 'ru'];
  var DEFAULT     = 'es';
  var STORAGE_KEY = 'ibm-lang';

  /* ── Detectar idioma ─────────────────────────────────── */
  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT;
  }

  /* ── Ruta base (raíz o subdirectorio) ────────────────── */
  function basePath() {
    var depth = (window.location.pathname.match(/\//g) || []).length - 1;
    return depth >= 1 ? '../' : '';
  }

  /* ── Aplicar traducciones al DOM ─────────────────────── */
  function applyTranslations(t, lang) {
    /* <html lang> */
    document.documentElement.lang = lang;

    /* <title> */
    if (t.__title) document.title = t.__title;

    /* <meta name="description"> */
    var md = document.querySelector('meta[name="description"]');
    if (md && t.__metaDesc) md.setAttribute('content', t.__metaDesc);

    /* <meta property="og:title"> */
    var ot = document.querySelector('meta[property="og:title"]');
    if (ot && t.__ogTitle) ot.setAttribute('content', t.__ogTitle);

    /* <meta property="og:description"> */
    var od = document.querySelector('meta[property="og:description"]');
    if (od && t.__ogDesc) od.setAttribute('content', t.__ogDesc);

    /* [data-i18n] → textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });

    /* [data-i18n-html] → innerHTML (para contenido con etiquetas HTML) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });

    /* Botones de idioma — resaltar el activo */
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.style.color      = isActive ? '#C9A96E' : '';
      btn.style.fontWeight = isActive ? '700' : '400';
    });

    window.ibmLang = lang;
  }

  /* ── Cargar JSON y aplicar ───────────────────────────── */
  function loadLang(lang) {
    var base = basePath();
    var url  = base + 'locales/' + lang + '.json';
    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (t) {
        applyTranslations(t, lang);
      })
      .catch(function () {
        /* Fallback a español si el JSON falla */
        if (lang !== DEFAULT) loadLang(DEFAULT);
      });
  }

  /* ── API pública ─────────────────────────────────────── */
  window.ibmSetLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    loadLang(lang);
  };

  /* ── Inicializar ─────────────────────────────────────── */
  var lang = detectLang();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { loadLang(lang); });
  } else {
    loadLang(lang);
  }
})();
