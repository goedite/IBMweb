/**
 * IBM Company — Cookie Consent Banner
 * Guarda preferencia en localStorage bajo la clave "ibm_cookie_consent"
 * Valores: "all" | "essential"
 */
(function () {
  const STORAGE_KEY = 'ibm_cookie_consent';

  // Si ya eligió, no mostramos nada
  if (localStorage.getItem(STORAGE_KEY)) return;

  // Inyectar estilos del banner
  const style = document.createElement('style');
  style.textContent = `
    #ibm-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: #1C1C1C;
      color: #f6f0e7;
      font-family: 'Manrope', sans-serif;
      font-size: 13px;
      line-height: 1.6;
      padding: 20px 32px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.25);
      animation: slideUp 0.35s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); opacity: 0; }
      to   { transform: translateY(0);   opacity: 1; }
    }
    #ibm-cookie-banner p {
      margin: 0;
      flex: 1;
      min-width: 220px;
      color: rgba(246,240,231,0.80);
    }
    #ibm-cookie-banner a {
      color: #C9A96E;
      text-decoration: underline;
      underline-offset: 3px;
    }
    #ibm-cookie-banner a:hover { color: #e5c98a; }
    .ibm-cookie-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      flex-shrink: 0;
    }
    .ibm-btn-accept {
      background: #C9A96E;
      color: #fff;
      border: none;
      padding: 10px 24px;
      font-family: 'Manrope', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .ibm-btn-accept:hover { opacity: 0.85; }
    .ibm-btn-essential {
      background: transparent;
      color: rgba(246,240,231,0.70);
      border: 1px solid rgba(246,240,231,0.25);
      padding: 10px 20px;
      font-family: 'Manrope', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s;
    }
    .ibm-btn-essential:hover {
      border-color: rgba(246,240,231,0.55);
      color: #f6f0e7;
    }
  `;
  document.head.appendChild(style);

  // Crear el banner
  const banner = document.createElement('div');
  banner.id = 'ibm-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Aviso de cookies');
  banner.innerHTML = `
    <p>
      Usamos <strong>cookies esenciales</strong> para el funcionamiento del sitio y, con tu permiso,
      cookies de análisis para mejorar la experiencia. Más información en nuestra
      <a href="/cookies.html">Política de cookies</a>.
    </p>
    <div class="ibm-cookie-btns">
      <button class="ibm-btn-essential" id="ibm-btn-essential">Solo esenciales</button>
      <button class="ibm-btn-accept"    id="ibm-btn-accept">Aceptar todas</button>
    </div>
  `;
  document.body.appendChild(banner);

  function dismiss(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.style.animation = 'none';
    banner.style.transition = 'opacity 0.3s, transform 0.3s';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(20px)';
    setTimeout(() => banner.remove(), 350);
  }

  document.getElementById('ibm-btn-accept').addEventListener('click', () => dismiss('all'));
  document.getElementById('ibm-btn-essential').addEventListener('click', () => dismiss('essential'));
})();
