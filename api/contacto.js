// api/contacto.js — Vercel Serverless Function
// Recibe POST del formulario y envía email via Resend API

export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Leer API key de env var de Vercel
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY env var');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Extraer campos del body (FormData o JSON)
  let nombre, telefono, email, servicio, localidad, mensaje;
  try {
    if (typeof req.body === 'string') {
      const params = new URLSearchParams(req.body);
      nombre   = params.get('nombre')   || '';
      telefono = params.get('telefono') || '';
      email    = params.get('email')    || '';
      servicio = params.get('servicio') || '';
      localidad = params.get('localidad') || '';
      mensaje  = params.get('mensaje')  || '';
    } else {
      ({ nombre = '', telefono = '', email = '', servicio = '', localidad = '', mensaje = '' } = req.body);
    }
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  // Validación mínima
  if (!nombre || !telefono || !servicio) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  // Construir el email
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1C1C1C; padding: 24px 32px;">
        <h1 style="color: #C9A96E; font-size: 20px; margin: 0; font-family: Georgia, serif;">
          IBM Company — Nueva solicitud de presupuesto
        </h1>
      </div>
      <div style="padding: 32px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px 0; color: #666; width: 140px; font-weight: bold;">Nombre</td>
            <td style="padding: 12px 0; color: #1C1C1C;">${escapeHtml(nombre)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px 0; color: #666; font-weight: bold;">Teléfono</td>
            <td style="padding: 12px 0; color: #1C1C1C;">
              <a href="tel:${escapeHtml(telefono)}" style="color: #C9A96E;">${escapeHtml(telefono)}</a>
            </td>
          </tr>
          ${email ? `
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px 0; color: #666; font-weight: bold;">Email</td>
            <td style="padding: 12px 0; color: #1C1C1C;">
              <a href="mailto:${escapeHtml(email)}" style="color: #C9A96E;">${escapeHtml(email)}</a>
            </td>
          </tr>` : ''}
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px 0; color: #666; font-weight: bold;">Servicio</td>
            <td style="padding: 12px 0; color: #1C1C1C;">${escapeHtml(servicio)}</td>
          </tr>
          ${localidad ? `
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px 0; color: #666; font-weight: bold;">Localidad</td>
            <td style="padding: 12px 0; color: #1C1C1C;">${escapeHtml(localidad)}</td>
          </tr>` : ''}
          ${mensaje ? `
          <tr>
            <td style="padding: 12px 0; color: #666; font-weight: bold; vertical-align: top;">Mensaje</td>
            <td style="padding: 12px 0; color: #1C1C1C; line-height: 1.6;">${escapeHtml(mensaje).replace(/\n/g, '<br/>')}</td>
          </tr>` : ''}
        </table>
      </div>
      <div style="padding: 16px 32px; background: #f9f9f9; font-size: 12px; color: #999;">
        Enviado desde ibm-company.es · ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      </div>
    </div>
  `;

  // Llamar a la API de Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IBM Company Web <onboarding@resend.dev>',
        to: ['investbuildmultiply@gmail.com'],
        reply_to: email || undefined,
        subject: `Nueva solicitud: ${servicio} — ${nombre}`,
        html: htmlBody,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(500).json({ error: 'Error al enviar el email', detail: data });
    }

    return res.status(200).json({ ok: true, id: data.id });

  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: 'Error de red al contactar con Resend' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
