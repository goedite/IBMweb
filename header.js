/**
 * IBM Company – Header compartido con menú hamburguesa
 * Se incluye en todas las páginas. Detecta el nivel de ruta
 * para generar las URLs relativas correctas.
 */
(function () {
  // ── Detectar si estamos en un subdirectorio ──────────────────────────────
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const base  = depth >= 2 ? '../' : '';   // raíz → ''  |  subdir → '../'

  // ── Página activa (para marcar el ítem del menú) ─────────────────────────
  const path = window.location.pathname;
  const isActive = (href) => {
    const abs = href.replace(/^\.\.\//, '/');
    return path.endsWith(abs) || path.includes(abs.replace('.html', ''));
  };

  // ── Helper para ítem de menú ─────────────────────────────────────────────
  const li = (href, label) => {
    const active = isActive(href)
      ? 'text-primary font-bold bg-stone-50'
      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900';
    return `<a class="block px-4 py-3 text-xs font-label uppercase tracking-widest transition-colors ${active}"
               href="${base}${href}">${label}</a>`;
  };

  // ── Grupos de menú ───────────────────────────────────────────────────────
  const navGroups = [
    {
      label: 'Encimeras',
      items: [
        ['encimera/cocinas.html', 'Cocinas'],
        ['encimera/barra.html',   'Barra'],
        ['encimera/onix.html',    'Ónix'],
        ['encimera/fregadero.html','Fregadero'],
      ]
    },
    {
      label: 'Reformas',
      items: [
        ['reformas/banos.html',    'Baños'],
        ['reformas/escaleras.html','Escaleras'],
        ['reformas/fachada.html',  'Fachada'],
        ['reformas/chimenea.html', 'Chimenea'],
      ]
    },
    {
      label: 'Exterior',
      items: [
        ['exterior/cocinas-exteriores.html','Cocinas Exteriores'],
        ['exterior/chimeneas-gavion.html',  'Chimeneas Gabión'],
      ]
    },
  ];

  // ── Desktop nav ──────────────────────────────────────────────────────────
  const desktopDropdowns = navGroups.map(g => `
    <div class="relative group">
      <a class="text-xs uppercase tracking-widest font-label text-stone-600 hover:text-stone-900 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-amber-700/40"
         href="#">${g.label}</a>
      <div class="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl border border-stone-100 hidden group-hover:block z-50">
        ${g.items.map(([href, lbl]) => li(href, lbl)).join('')}
      </div>
    </div>`).join('');

  const desktopLinks = `
    <a class="text-xs uppercase tracking-widest font-label text-stone-600 hover:text-stone-900 transition-colors" href="${base}herramientas.html">Herramientas</a>
    <a class="text-xs uppercase tracking-widest font-label text-stone-600 hover:text-stone-900 transition-colors" href="${base}contacto.html">Contacto</a>
    <a href="tel:+34666152226" class="hidden lg:flex items-center gap-2 text-xs font-label uppercase tracking-widest text-amber-700 font-bold">
      <span class="material-symbols-outlined" style="font-size:16px">phone</span>666 152 226
    </a>`;

  // ── Mobile nav (acordeón) ────────────────────────────────────────────────
  const mobileGroups = navGroups.map((g, i) => `
    <div class="border-b border-stone-100">
      <button onclick="ibmToggle(${i})"
        class="w-full flex justify-between items-center px-6 py-4 text-xs font-label uppercase tracking-widest text-stone-700 font-semibold">
        ${g.label}
        <span id="ibm-chevron-${i}" class="material-symbols-outlined text-stone-400 transition-transform duration-200" style="font-size:18px">expand_more</span>
      </button>
      <div id="ibm-sub-${i}" class="hidden bg-stone-50">
        ${g.items.map(([href, lbl]) => `
          <a class="block px-8 py-3 text-xs font-label uppercase tracking-widest text-stone-600 hover:text-primary transition-colors"
             href="${base}${href}">${lbl}</a>`).join('')}
      </div>
    </div>`).join('');

  const mobileDirectLinks = `
    <a class="block px-6 py-4 text-xs font-label uppercase tracking-widest text-stone-700 border-b border-stone-100 hover:text-primary transition-colors"
       href="${base}herramientas.html">Herramientas</a>
    <a class="block px-6 py-4 text-xs font-label uppercase tracking-widest text-stone-700 border-b border-stone-100 hover:text-primary transition-colors"
       href="${base}contacto.html">Contacto</a>
    <div class="px-6 py-5">
      <a href="tel:+34666152226"
         class="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white text-xs font-label uppercase tracking-widest font-semibold">
        <span class="material-symbols-outlined" style="font-size:18px">phone</span>
        666 152 226 — Llamar ahora
      </a>
    </div>`;

  // ── HTML completo del header ─────────────────────────────────────────────
  const html = `
<header id="ibm-header"
  class="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-8 py-4 md:py-5 bg-stone-50/95 backdrop-blur-xl z-50 shadow-[0_4px_24px_rgba(29,27,22,0.06)]">

  <!-- Logo -->
  <div class="flex items-center gap-3">
    <span class="material-symbols-outlined text-amber-700" style="font-size:26px">home_repair_service</span>
    <div class="flex flex-col leading-tight">
      <a href="${base}index.html"
         class="text-lg md:text-xl font-serif font-bold text-stone-900 tracking-tight hover:text-amber-700 transition-colors">IBM Company</a>
      <span class="text-[8px] md:text-[9px] font-label uppercase tracking-[0.18em] text-amber-700">Invest · Build · Multiply</span>
    </div>
  </div>

  <!-- Desktop nav -->
  <nav class="hidden md:flex gap-6 lg:gap-8 items-center">
    ${desktopDropdowns}
    ${desktopLinks}
  </nav>

  <!-- Desktop CTA -->
  <a href="${base}contacto.html"
     class="hidden md:block px-5 py-2.5 bg-primary text-white text-xs uppercase tracking-widest font-label hover:opacity-90 transition-opacity font-semibold">
    Pide Presupuesto
  </a>

  <!-- Hamburger button (mobile only) -->
  <button id="ibm-menu-btn" onclick="ibmMenuToggle()"
    class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-[60]"
    aria-label="Abrir menú" aria-expanded="false">
    <span id="ibm-bar1" class="block w-6 h-[2px] bg-stone-800 transition-all duration-300 origin-center"></span>
    <span id="ibm-bar2" class="block w-6 h-[2px] bg-stone-800 transition-all duration-300"></span>
    <span id="ibm-bar3" class="block w-6 h-[2px] bg-stone-800 transition-all duration-300 origin-center"></span>
  </button>
</header>

<!-- Mobile menu drawer -->
<div id="ibm-mobile-menu"
  class="fixed inset-0 z-40 flex flex-col pt-20 bg-white transform -translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto md:hidden">
  ${mobileGroups}
  ${mobileDirectLinks}
</div>

<!-- Overlay -->
<div id="ibm-overlay"
  class="fixed inset-0 z-30 bg-black/40 hidden md:hidden"
  onclick="ibmMenuToggle()"></div>`;

  // ── Inyectar en el DOM ───────────────────────────────────────────────────
  const container = document.getElementById('ibm-nav-root');
  if (container) {
    container.innerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  // ── Lógica hamburguesa ───────────────────────────────────────────────────
  window.ibmMenuToggle = function () {
    const menu    = document.getElementById('ibm-mobile-menu');
    const overlay = document.getElementById('ibm-overlay');
    const btn     = document.getElementById('ibm-menu-btn');
    const bar1    = document.getElementById('ibm-bar1');
    const bar2    = document.getElementById('ibm-bar2');
    const bar3    = document.getElementById('ibm-bar3');
    const open    = !menu.classList.contains('-translate-x-full');

    if (open) {
      menu.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
      btn.setAttribute('aria-expanded', 'false');
      bar1.style.transform = '';
      bar2.style.opacity   = '1';
      bar3.style.transform = '';
    } else {
      menu.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', 'true');
      bar1.style.transform = 'translateY(7px) rotate(45deg)';
      bar2.style.opacity   = '0';
      bar3.style.transform = 'translateY(-7px) rotate(-45deg)';
    }
  };

  // ── Acordeón de submenús en móvil ────────────────────────────────────────
  window.ibmToggle = function (i) {
    const sub     = document.getElementById(`ibm-sub-${i}`);
    const chevron = document.getElementById(`ibm-chevron-${i}`);
    const isOpen  = !sub.classList.contains('hidden');
    // Cerrar todos
    navGroups.forEach((_, j) => {
      document.getElementById(`ibm-sub-${j}`)?.classList.add('hidden');
      const c = document.getElementById(`ibm-chevron-${j}`);
      if (c) c.style.transform = '';
    });
    // Abrir el clickado si estaba cerrado
    if (!isOpen) {
      sub.classList.remove('hidden');
      chevron.style.transform = 'rotate(180deg)';
    }
  };

  // ── Cerrar menú al cambiar tamaño a desktop ───────────────────────────────
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      const menu = document.getElementById('ibm-mobile-menu');
      const overlay = document.getElementById('ibm-overlay');
      if (menu && !menu.classList.contains('-translate-x-full')) {
        menu.classList.add('-translate-x-full');
        overlay?.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });
})();
