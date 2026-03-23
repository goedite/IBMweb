# DIRECTRICES DE MODIFICACIÓN — Plantilla Web IBM Company

**Dominio:** https://www.ibm-company.es/  
**Plantilla base:** MARMORIS (HTML/Tailwind)  
**IDE:** Google Antigravity  
**Fecha:** Marzo 2026

---

## CONTEXTO IMPORTANTE — LEER ANTES DE TOCAR NADA

IBM Company es una empresa **sencilla y competitiva** de corte de mármol y reformas integrales en la zona de Gandía, Costa Blanca. **NO es un taller de alta tecnología.**

**Lo que SÍ tenemos:**
- Máquina de corte a disco semiautomática (sierra de puente grande)
- Experiencia y oficio en corte de mármol, granito y porcelánico
- Servicio de reforma integral de baños y cocinas
- Cobertura: Gandía, Denia, Jávea, Oliva, Benissa y alrededores
- Precios competitivos y trato directo

**Lo que NO tenemos (ELIMINAR toda referencia):**
- ❌ Waterjet / chorro de agua
- ❌ CNC de 5 ejes
- ❌ Escáner de bloques / fotogrametría
- ❌ Tecnología italiana Breton
- ❌ Bookmatching digital
- ❌ Tolerancia 0.1mm
- ❌ Archivos BIM/CAD/DXF/DWG
- ❌ Realidad Aumentada
- ❌ Visualizador 3D

**El tono de la web NO es "ingeniería de precisión". Es: artesanía, servicio cercano, precio justo, trabajo bien hecho.**

---

## 1. HEADER — `<header>`

### Cambiar:
| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Logo/Nombre | `MARMORIS` | `IBM Company` o logo propio si existe |
| Subtexto icono | `architecture` (icono Material) | Mantener o cambiar a `home_repair_service` |
| Nav enlace 1 | `Corte Técnico` | `Encimeras` |
| Nav enlace 2 | `Materiales` | `Reformas` (desplegable: Baños / Cocinas) |
| Nav enlace 3 | `Proyectos` | `Proyectos` (mantener) |
| Añadir nav | — | `Contacto` |
| Botón derecha | `B2B Technical` | `Pide Presupuesto` |

### Añadir:
- **Teléfono clickable** visible en desktop, icono en móvil: `<a href="tel:+34XXXXXXXXX">`
- **WhatsApp flotante** (fijo abajo-derecha, fuera del header): botón verde siempre visible

---

## 2. HERO — `<section>` primera (grid 12 columnas)

### Cambiar textos:

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Tag superior `<p>` | "Ingeniería en Piedra Natural" | **"Mármol · Reformas · Costa Blanca"** |
| `<h1>` | "Precisión & Materia Prima" | **"Tu marmolista de confianza en Gandía"** |
| Párrafo | Texto sobre CNC 5 ejes y geometrías imposibles | **"Corte de mármol, granito y porcelánico a medida. Reformas integrales de baños y cocinas con trato directo y precios competitivos. Desde Gandía hasta Alicante."** |

### Badge negro (esquina inferior imagen):
| Actual | Nuevo |
|--------|-------|
| "0.1mm — Tolerancia máxima en despiece técnico para proyectos B2B" | **"Presupuesto en 24h" + "Medición gratuita en tu obra. Gandía, Denia, Jávea y toda la Costa Blanca."** |

### Añadir debajo del párrafo:
```html
<!-- Dos botones CTA que NO existen en la plantilla -->
<div class="flex gap-4 mt-8">
  <a href="/contacto" class="px-8 py-4 bg-primary text-on-primary text-xs uppercase tracking-widest">
    Pide Presupuesto
  </a>
  <a href="/proyectos" class="px-8 py-4 border border-primary text-primary text-xs uppercase tracking-widest">
    Ver Proyectos
  </a>
</div>
```

### Imagen:
- Cambiar la foto de CNC por: **foto real del taller / de una encimera terminada / de una reforma acabada**
- NO usar fotos de stock de maquinaria industrial avanzada

---

## 3. SECCIÓN OSCURA — "Capacidades del Taller"

**Esta sección hay que REESCRIBIRLA entera.** El enfoque ya no es tecnología sino servicio.

### Cambiar título:
| Actual | Nuevo |
|--------|-------|
| "Capacidades del Taller" | **"Nuestros Servicios"** |
| "División de Corte Mecanizado" | **"Lo que hacemos por ti"** |

### Los 3 bloques → Cambiar a 4 bloques de servicio:

**Bloque 1 — Corte de mármol a medida**
- Icono: `content_cut` (en vez de `precision_manufacturing`)
- Título: **"Corte a Medida"**
- Texto: **"Cortamos mármol, granito y porcelánico a las medidas exactas de tu proyecto. Encimeras de cocina, mesetas de baño, peldaños, rodapiés y piezas especiales."**
- Pie: ~~"Tecnología Italiana Breton"~~ → **"Sierra de puente profesional"**

**Bloque 2 — Reformas de baños**
- Icono: `shower` (en vez de `layers`)
- Título: **"Reformas de Baños"**
- Texto: **"Reforma integral de tu baño: plato de ducha, alicatado, fontanería, electricidad y acabados. Todo coordinado por un solo equipo. Tu baño nuevo sin complicaciones."**
- Pie: ~~"Certificación Dekton/Neolith"~~ → **"Reforma llave en mano"**

**Bloque 3 — Reformas de cocinas**
- Icono: `countertops` (en vez de `biotech`)
- Título: **"Reformas de Cocinas"**
- Texto: **"Encimera nueva, cambio de distribución, isla central... Fabricamos e instalamos la superficie y coordinamos el resto de la reforma para que no tengas que preocuparte de nada."**
- Pie: ~~"Mapping Fotogramétrico"~~ → **"Fabricación + instalación propia"**

**Bloque 4 — NUEVO (añadir)**
- Icono: `local_shipping`
- Título: **"Medición y Transporte"**
- Texto: **"Vamos a tu obra, tomamos medidas y entregamos las piezas listas para instalar. Cobertura en Gandía, Denia, Jávea, Oliva, Benissa y toda la Costa Blanca."**
- Pie: **"Cobertura Costa Blanca completa"**

---

## 4. SECCIÓN AR/3D — ELIMINAR O REEMPLAZAR

**⚠️ ELIMINAR COMPLETAMENTE las dos cajas de Realidad Aumentada y Visualizador 3D.** No tenemos esa tecnología.

### Reemplazar por: Sección "Antes y Después"

Usar el mismo layout de 2 columnas (`grid grid-cols-2 gap-px`) pero con:

**Columna izquierda — Reforma de baño**
- Foto de antes/después de un baño real
- Título: "De anticuado a Spa en casa"
- Botón: "Ver reforma completa"

**Columna derecha — Reforma de cocina**
- Foto de antes/después de una cocina real
- Título: "Tu cocina, completamente transformada"
- Botón: "Ver reforma completa"

> Si no hay fotos reales todavía: usar placeholder oscuro con texto "Próximamente" y mantener la estructura para llenar después.

---

## 5. GALERÍA DE MATERIALES — Sección Bento Grid

### Mantener el layout. Cambiar:

| Actual | Nuevo |
|--------|-------|
| "Materia Prima Seleccionada" | **"Materiales con los que Trabajamos"** |
| "Calacatta Borghini — Origen: Carrara, Italia" | **Nombre real del mármol + "Disponible para encimeras y baños"** |

### Ajustar los materiales a lo que realmente vendéis:
- Sustituir los mármoles exóticos por los que tenéis en stock habitualmente
- Añadir porcelánicos de gran formato si los trabajáis
- Añadir Silestone / Dekton / Neolith si sois instaladores certificados
- Si no tenéis fotos propias de las tablas, usar las del fabricante con su nombre correcto

### Añadir debajo del grid:
```html
<p class="text-center text-sm text-stone-500 mt-8">
  ¿No encuentras lo que buscas? Trabajamos con cualquier material bajo pedido. 
  <a href="/contacto" class="underline text-primary">Consúltanos</a>.
</p>
```

---

## 6. CTA FINAL — Sección "¿Listo para materializar su diseño?"

### Cambiar completamente:

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Icono | `architecture` | `handshake` |
| `<h2>` | "¿Listo para materializar su diseño?" | **"¿Hablamos de tu proyecto?"** |
| Párrafo | "Envíanos tus planos en formato DXF o DWG para una valoración técnica..." | **"Cuéntanos qué necesitas: encimera nueva, reforma de baño, cocina completa... Te damos presupuesto sin compromiso en 24 horas. Medición gratuita en tu domicilio."** |
| Botón principal | "Solicitar Corte Técnico" | **"Pedir Presupuesto Gratis"** |

### Añadir segundo botón (debajo del principal):
```html
<a href="https://wa.me/34XXXXXXXXX?text=Hola,%20me%20gustaría%20un%20presupuesto" 
   class="px-10 py-4 border border-primary text-primary text-sm uppercase tracking-widest mt-4 inline-block">
  Escribir por WhatsApp
</a>
```

### Eliminar:
- `metallic-shimmer` efecto en hover (demasiado premium para el tono que buscamos)

---

## 7. FOOTER — `<footer>`

### Cambiar:

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Nombre | "MARMORIS" | **"IBM Company"** |
| Subtexto | — | **"Invest Build Multiply"** |
| Dirección | "Polígono Industrial Real, Alicante, España" | **Dirección REAL del taller en Gandía** |
| Copyright | "© 2024 MARMORIS Monolith. Gandía — Alicante." | **"© 2026 IBM Company SL — Gandía, Costa Blanca"** |
| "Official Partner of Stone Architectural Group" | **ELIMINAR** (no existe) |

### Columna "BIM Resources" → Renombrar a **"Servicios"**:
- ~~CAD Library~~ → **Encimeras a medida**
- ~~Visualizador~~ → **Reformas de baños**
- ~~Presupuestador~~ → **Reformas de cocinas**

### Columna "Technical Specs" → Renombrar a **"Información"**:
- ~~Antes y Después~~ → **Nuestros proyectos** (enlace a /proyectos)
- ~~Mantenimiento~~ → **Blog** (enlace a /blog)
- Añadir: **Contacto**

### Añadir al footer:
- Teléfono visible: `<a href="tel:+34XXXXXXXXX">XXX XXX XXX</a>`
- Email: `<a href="mailto:info@ibm-company.es">info@ibm-company.es</a>`
- Iconos redes sociales (Instagram mínimo, Facebook si hay)
- Google Maps embebido o enlace a la ubicación

---

## 8. SECCIONES NUEVAS A AÑADIR (no existen en la plantilla)

### 8.1 Barra de confianza (después de sección oscura de servicios)
Fondo claro, 3-4 cifras en fila horizontal:

```
[X] años de experiencia  ·  [X]+ proyectos entregados  ·  Cobertura Costa Blanca completa
```

Estilo: números grandes (font-headline), texto pequeño debajo (font-label uppercase).

### 8.2 Testimonios (después de galería de materiales)
2-3 citas de clientes o profesionales reales:
```
"Texto de la reseña..."
— Nombre, empresa/ubicación
```
Si no hay testimonios aún, sacar de Google Reviews si existen, o dejar estructura preparada.

### 8.3 Logos de marcas (banda horizontal)
Si sois instaladores o distribuidores de alguna marca:
```
Silestone · Dekton · Neolith · Cosentino · [las que correspondan]
```
Logos en gris, fila horizontal, con texto: "Trabajamos con las mejores marcas del mercado"

### 8.4 Preview del Blog (antes del CTA final)
3 cards con:
- Imagen
- Título del artículo
- Extracto de 2 líneas
- Enlace "Leer más"

Título de sección: **"Ideas y Consejos"**

---

## 9. META TAGS — Añadir al `<head>`

```html
<title>IBM Company | Marmolista y Reformas en Gandía – Costa Blanca</title>
<meta name="description" content="Corte de mármol a medida, reformas integrales de baños y cocinas en Gandía, Denia y Jávea. Presupuesto sin compromiso. Precios competitivos.">
<meta property="og:title" content="IBM Company — Mármol y Reformas en Costa Blanca">
<meta property="og:description" content="Encimeras, baños y cocinas. Servicio directo y precios competitivos en Gandía y alrededores.">
<meta property="og:url" content="https://www.ibm-company.es/">
<meta property="og:type" content="website">
<link rel="canonical" href="https://www.ibm-company.es/">
```

---

## 10. CAMBIOS EN TAILWIND CONFIG

### Colores a ajustar en `tailwind.config`:
```javascript
// Cambiar el primario para CTAs más visibles
"primary": "#C9A96E",        // Dorado (en vez de #74554B marrón oscuro)
"primary-container": "#8F6D62",  // Hover del dorado
"inverse-surface": "#1C1C1C",   // Más negro (en vez de #33302A turbio)
```

Los demás colores de la plantilla (stone, cream, surface) están bien. Mantener.

### Fuentes: Mantener Newsreader + Manrope. Son buena elección.

---

## 11. TONO DE VOZ — Regla general

Cada vez que escribas texto para la web, pregúntate:

> **"¿Diría esto un marmolista de Gandía hablando con un cliente en su taller?"**

Si suena a catálogo de arquitectura de Milán → **reescribir más sencillo**.

**Ejemplos:**

| ❌ No escribir | ✅ Sí escribir |
|---------------|---------------|
| "Componentes arquitectónicos de alta fidelidad" | "Piezas cortadas a la medida de tu proyecto" |
| "Geometrías imposibles en 3D" | "Cortes rectos, curvos y con huecos para fregadero" |
| "Despiece técnico B2B" | "Preparamos las piezas listas para que tu instalador las coloque" |
| "Activar Cámara AR" | "Mira fotos de nuestros trabajos" |
| "Valoración técnica inmediata por nuestros ingenieros" | "Te damos presupuesto en 24 horas" |
| "Digitalización de vetas" | "Elegimos las mejores tablas para que las vetas queden bonitas" |

---

## 12. ORDEN FINAL DE SECCIONES EN HOME

| # | Sección | Estado en plantilla |
|---|---------|-------------------|
| 1 | Header con teléfono y nav completa | Modificar |
| 2 | Hero con CTA doble | Modificar textos |
| 3 | Servicios (4 bloques: corte, baños, cocinas, transporte) | Reescribir sección oscura |
| 4 | Cifras de confianza | **NUEVO** |
| 5 | Antes/Después (baño + cocina) | **Reemplaza AR/3D** |
| 6 | Materiales (galería bento) | Ajustar nombres |
| 7 | Testimonios | **NUEVO** |
| 8 | Logos marcas | **NUEVO** |
| 9 | Blog preview | **NUEVO** |
| 10 | CTA final con WhatsApp | Modificar textos |
| 11 | Footer completo con datos reales | Modificar |
| 12 | WhatsApp flotante (fijo) | **NUEVO** |

---

## RESUMEN RÁPIDO

**ELIMINAR:** Waterjet, CNC 5 ejes, escáner, fotogrametría, bookmatching, AR, 3D, BIM, CAD, DXF, tolerancia 0.1mm, "ingeniería", metallic-shimmer, MARMORIS como nombre, dirección falsa, partner falso.

**AÑADIR:** Reformas baños, reformas cocinas, WhatsApp, formulario, teléfono, antes/después, testimonios, logos marcas, blog, cifras confianza, SEO local (Gandía/Denia/Jávea en textos).

**CAMBIAR EL TONO:** De "taller de ingeniería premium" a "marmolista competitivo y cercano con servicio integral".
