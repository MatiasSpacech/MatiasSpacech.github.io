# SPACECH.OS — Plan de producto y diseño

> Portfolio de **Matias Spacech** · Desarrollador Web · Egresado de TUDAI
> Concepto: el sitio no se navega, **se usa**. Una notebook imaginaria que arranca con un sistema operativo propio.

---

## Ficha rápida

| | |
|---|---|
| **Nombre del producto** | SPACECH.OS |
| **Versión de lanzamiento** | v2.6 “Tandil” |
| **Formato** | Sitio de una sola experiencia con rutas por aplicación (desktop + mobile launcher) |
| **Idioma** | Español rioplatense, tono técnico y cercano |
| **Objetivo principal** | Que un reclutador entienda quién es Matias y descargue el CV en menos de 15 segundos |
| **Objetivo secundario** | Que un dev o cliente se quede explorando y recuerde el sitio |
| **Stack recomendado** | Astro (última estable) + islas de React + TypeScript + Tailwind CSS 4 + Motion + MDX |
| **Deploy** | GitHub Pages (estático) vía GitHub Actions |
| **URL provisoria** | `https://matiasspacech.github.io/` — repo `MatiasSpacech.github.io` (opción A, elegida) |
| **Dominio futuro** | `spacech.dev` (alternativas: `spacechos.com`, `matias.space`); migración opcional |

**North star:** impacto visual sin sacrificar claridad. El sistema operativo es la envoltura; el contenido y la contratación son el producto.

---

## 1. Concepto creativo

### La idea

El visitante llega a una pantalla de arranque, ve logs de sistema que hablan de Matias y, en menos de dos segundos, aterriza en un escritorio funcional: fondo espacial, barra de menú, iconos, dock y una ventana abierta con su presentación.

No es una imagen estática de un escritorio. Es un **sistema operativo de verdad**: las ventanas se abren, se arrastran, se minimizan; hay una terminal con comandos; hay un buscador global; hay un menú de inicio. Cada app es una sección del portfolio.

### Por qué funciona

- **Diferenciación inmediata.** El 90% de los portfolios son scroll vertical. Este se recuerda.
- **Demuestra habilidades, no las declara.** Un window manager, una paleta de comandos y una terminal son prueba de front-end, estado, accesibilidad e interacción.
- **Encaja con el nombre.** *Spacech* + espacio + sistema operativo: la marca y el concepto se potencian.
- **Escalable.** Cada proyecto nuevo puede ser una app, un archivo o un comando más.

### Lo que NO es

- No es un clon de macOS. Los controles de ventana son propios (monocromos, geométricos), la paleta es aurora/cian-violeta y la personalidad es argentina y técnica.
- No es una intro larga que bloquea el contenido. El boot dura menos de 2 segundos, se puede saltar y solo aparece una vez por sesión.
- No es una experiencia exclusivamente visual. Tiene modo simple, navegación por teclado y contenido indexable.

### Nombre y branding

- Logo: `▲ spacech` con un triángulo/chevron que funciona como “prompt” y como nave espacial.
- Wordmark: **SPACECH.OS**, en Space Grotesk con tracking cerrado.
- Bajada oficial: *“Desarrollador web. Egresado de TUDAI. Construyo interfaces que se sienten como sistemas vivos.”*
- Versión de sistema: `v2.6 “Tandil”` (guiño a la sede de la carrera; confirmar si se quiere usar).

---

## 2. Objetivos, público y métricas

### Público

1. **Reclutadores técnicos y líderes de equipo** (prioridad): quieren ver stack, proyectos y CV rápido.
2. **Reclutadores de RRHH / no técnicos**: necesitan entender el perfil sin perderse en el juego.
3. **Clientes freelance**: buscan confianza, estética y claridad de servicios.
4. **Colegas y comunidad**: son quienes comparten el sitio.

### Métricas de éxito del sitio

| Métrica | Meta |
|---|---|
| Tiempo hasta el CV | ≤ 15 s y ≤ 2 clics desde el escritorio |
| Tiempo hasta contacto | ≤ 20 s y ≤ 2 clics |
| LCP en 4G | < 2,5 s |
| Lighthouse mobile | Performance ≥ 90 · A11y 100 · SEO 100 |
| Peso inicial de JS | ≤ 170 KB gzip |
| Sesión media | > 90 s (señal de exploración) |
| Rebote | < 55% |
| Conversiones | Descargas de CV y clics en contacto medidos como eventos |

### Tensión central a resolver

**Espectáculo vs. usabilidad.** Se resuelve con tres decisiones no negociables:

1. Un botón **“Modo simple”** siempre visible en la barra de menú, que abre una versión convencional de una columna con todo el contenido.
2. CTAs persistentes en la barra superior: **CV** y **Contacto**.
3. La ventana **Inicio** se abre por defecto con nombre, rol, propuesta y proyectos destacados. Nadie tiene que descubrir nada para entender quién es.

---

## 3. Principios de diseño

1. **Sistema, no decorado.** Todo se comporta como un SO coherente: ventanas, foco, z-index, atajos, menús, estados. Si una ventana se abre, se puede cerrar.
2. **Oscuro con luz intencional.** Base casi negra, superficies de vidrio, un solo degradé aurora como firma. El color se usa para guiar, no para gritar.
3. **Tipografía con carácter.** Space Grotesk para display, Inter para lectura, JetBrains Mono para metadata y terminal.
4. **Movimiento con propósito.** Cada animación explica un cambio de estado. Nada rebota porque sí.
5. **Accesible por defecto.** Teclado, foco visible, contraste AA, movimiento reducido y modo simple. La accesibilidad también es una demostración de oficio.
6. **Rápido es parte del diseño.** El wallpaper es CSS/canvas, no un video de 8 MB. La primera impresión tiene que ser instantánea.
7. **Un guiño, no diez.** Los easter eggs se esconden; no compiten con el contenido.

---

## 4. La experiencia paso a paso

### Recorrido principal (30 segundos)

1. **Boot (≤ 2 s).** Logo, barra de progreso y logs. Botón “Saltar”.
2. **Escritorio.** Aparece con una animación de ensamblado: wallpaper, barra, iconos, dock.
3. **Ventana Inicio abierta.** “Matias Spacech — Desarrollador Web”. Foto, bio de 3 líneas, chips de stack, 3 proyectos destacados y dos botones: **Ver proyectos** y **Hablemos**.
4. **Exploración.** Abre Proyectos, Sobre mí, Skills o CV desde el dock o con `Ctrl/Cmd + K`.
5. **Contacto.** Se abre una ventana tipo cliente de correo con formulario y links directos.
6. **Salida.** Descarga de CV, copia de email o redes.

### Escritorio (referencia 1440 × 900)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ▲ spacech.os   Archivo  Ver  Ir  Ventana  Ayuda    ● Disponible  18:42 │
│                                                                      │
│   [▣ Inicio]            ╭──────────────────────────────────────╮      │
│   [▤ Proyectos]         │  ● ● ●              Inicio           │      │
│   [◈ Sobre mí]          │                                      │      │
│   [◇ Skills]            │  Matias Spacech                      │      │
│   [▷ Experiencia]       │  Desarrollador Web · TUDAI           │      │
│   [✉ Contacto]          │                                      │      │
│   [⇩ CV.pdf]            │  Bio breve + stack + proyectos       │      │
│                         │  [ Ver proyectos ]  [ Hablemos ]     │      │
│   ┌─ widget ─────────┐  │                                      │      │
│   │ GitHub · Ahora   │  ╰──────────────────────────────────────╯      │
│   └──────────────────┘                                               │
│                                                                      │
│                    ░  ░  ░  dock  ░  ░  ░                            │
└──────────────────────────────────────────────────────────────────────┘
```

### Mobile (launcher, no ventanas diminutas)

```
┌─────────────────────┐
│  18:42   ● ▮▮▮      │
│                     │
│   MATIAS            │
│   SPACECH           │
│   Desarrollador Web │
│   Egresado TUDAI    │
│                     │
│  [ Ver proyectos ]  │
│  [ Contacto ]       │
│                     │
│   ▢     ▢     ▢     │
│  Proy  Sobre  CV    │
│   ▢     ▢     ▢     │
│  Skills Contacto ⋯  │
│                     │
│  ─────────────────  │
└─────────────────────┘
```

En mobile no hay drag & drop. Tocar una app abre una **hoja a pantalla completa** con transición de elemento compartido y un gesto/botón “Inicio”. La identidad de SO se mantiene en la barra de estado, los iconos y la tipografía.

---

## 5. Arquitectura de información

Cada app tiene una ruta real, compartible e indexable.

| App | Ruta | Contenido | Interacciones clave |
|---|---|---|---|
| **Inicio** | `/` | Hero, bio corta, stack, 3 proyectos destacados, CTAs | Abrir apps, descargar CV, copiar email |
| **Proyectos** | `/proyectos` | Grid de proyectos con filtros por stack/tipo | Abrir detalle en ventana apilada |
| **Detalle de proyecto** | `/proyectos/[slug]` | Problema, rol, stack, decisiones, resultado, galería, links | Link a demo y repo, siguiente proyecto |
| **Sobre mí** | `/sobre-mi` | Foto, bio larga, TUDAI, valores, timeline | Descargar CV, contacto |
| **Skills** | `/habilidades` | “Monitor de sistema”: áreas, herramientas y nivel honesto | Filtro por categoría, tooltips |
| **Experiencia** | `/experiencia` | Log/timeline laboral y educativo | Detalle de cada entrada |
| **CV** | `/cv` | Preview del PDF dentro de una ventana “Visor” | Descargar, imprimir, abrir en pestaña |
| **Contacto** | `/contacto` | Cliente de correo con formulario + links | Enviar, copiar email, WhatsApp/LinkedIn/GitHub |
| **Terminal** | `/terminal` | Terminal interactiva con comandos | `help`, `whoami`, `ls`, `neofetch`, `sudo hire-me` |
| **Notas** (opcional v1.1) | `/notas` | Artículos cortos sobre desarrollo | Leer, filtrar |
| **404** | `not-found` | Pantalla azul irónica, con salida al escritorio | Reiniciar / ir al inicio |

### Barra de menú

- **spacech** → Acerca de este portfolio · Modo simple · Tema (Aurora / CRT) · Reiniciar boot.
- **Archivo** → Descargar CV · Copiar email.
- **Ver** → Proyectos · Sobre mí · Skills.
- **Ir** → Inicio · Contacto · Terminal.
- **Ventana** → Cerrar ventana activa · Minimizar todo.
- **Ayuda** → Atajos de teclado · “Probar `sudo hire-me`”.

La barra incluye a la derecha: estado **“● Disponible para trabajar”**, reloj en vivo (hora local) y un indicador de “señal” decorativo.

### Paleta de comandos (`Ctrl/Cmd + K`)

Buscador global con acciones:

- “Ir a Proyectos”, “Abrir CV”, “Contacto”, “Ver skills”.
- “Descargar CV”, “Copiar email”, “Activar modo simple”.
- Búsqueda por nombre de proyecto.
- Navegación 100% con teclado (↑ ↓ Enter Esc).

Es el atajo de usabilidad más importante del sitio: permite usar el SO como un buscador, sin aprender dónde está cada cosa.

---

## 6. Sistema visual

### Dirección de arte

**“Orbital Glass”**: espacio profundo, vidrio, aurora y precisión tipográfica. Un guiño sutil a Nothing OS en los números del reloj y a las terminales retro en el modo CRT. Premium y actual, no caricaturesco.

**Referencias de moodboard:** Arc Browser, Raycast, Linear, Nothing OS, Teenage Engineering, Vercel, Playdate (para el humor).

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--void` | `#05060A` | Fondo base |
| `--deep` | `#0A0D14` | Superficies y ventanas |
| `--panel` | `rgba(255,255,255,0.055)` | Vidrio |
| `--line` | `rgba(255,255,255,0.12)` | Bordes de 1px |
| `--text` | `#EAEEF7` | Texto principal |
| `--text-dim` | `#93A0B8` | Texto secundario (contraste AA) |
| `--cyan` | `#4EE1D0` | Acento primario, foco, links |
| `--violet` | `#7C5CFF` | Acento secundario |
| `--magenta` | `#FF5AC8` | Acento terciario, uso mínimo |
| `--ok` | `#3DDC97` | Disponible, éxito |
| `--warn` | `#FFC857` | Advertencias, badges |
| `--danger` | `#FF5F57` | Cerrar, errores |

- Degradé firma: `linear-gradient(135deg, #4EE1D0 0%, #7C5CFF 55%, #FF5AC8 100%)`. Solo en bordes finos, glows y pequeños detalles; nunca en bloques grandes de texto.
- Modo CRT (easter egg/tema): fondo `#050A06`, fósforo `#5BFF8A`, scanlines al 4%, mono en toda la UI.
- Modo simple: fondo claro `#F7F8FB`, texto `#11141A`, acento `#0E7C6B`. Accesible y familiar.

### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display | **Space Grotesk** 500/700 | Nombre, títulos de ventanas, números grandes |
| UI / texto | **Inter** 400/500 | Párrafos, botones, labels |
| Mono | **JetBrains Mono** 400/500 | Terminal, metadata, versión, reloj, chips |

- Base 15–16 px, line-height 1.6 en párrafos.
- Labels de ventana: mono 11–12 px, uppercase, tracking 0.08em.
- Todos los archivos self-hosted, subset latin + latin-ext. Sin bloqueo de render.

### Componentes

- **Ventana:** radio 14 px, blur 20 px, borde 1 px `--line`, highlight interno superior, sombra `0 30px 80px rgba(0,0,0,.55)`. Título centrado en mono. Controles de ventana propios: cuadrados/diamantes monocromos con hover que revela el color, y `aria-label` en español.
- **Dock:** barra flotante inferior, vidrio, radio 22 px, iconos de 44 px, magnificación suave al hover (solo puntero fino), indicador de app abierta (punto cian).
- **Iconos:** set propio SVG lineal de 24 px, trazo 1,5 px, esquinas redondeadas, duotono cian/violeta. Nada de emojis en la UI principal.
- **Botones:** primario con degradé sutil y texto oscuro; secundario con borde de vidrio. Altura 40–44 px, radio 10 px.
- **Chips de stack:** mono 11 px, fondo `rgba(255,255,255,.06)`, borde 1 px, radio 999 px.
- **Wallpaper:** degradé base + dos orbes difusos animados muy lento + estrellas/partículas en canvas (≤ 60, pausadas fuera de pantalla) + textura de ruido al 3%. Fallback: imagen AVIF estática.
- **Widgets de escritorio:** “Ahora” (disponible/estudiando/construyendo), hora local y mini gráfico de contribuciones de GitHub (datos en build time).

### Microcopy (tono)

- Disponible: **“● Disponible para trabajar”**.
- Botón principal: **“Hablemos”** (no “Contáctame”).
- Terminal: **“Escribí `help` o probá `sudo hire-me`.”**
- Error de formulario: **“Faltó algo. El sistema no puede enviar mensajes incompletos.”**
- 404: **“KERNEL_PANIC — Esta ruta no existe. Pero tu próximo proyecto sí.”**

---

## 7. Movimiento e interacción

| Momento | Animación | Duración |
|---|---|---|
| Boot | Logs tipo máquina de escribir + barra que avanza + fade al escritorio | 1,2–1,8 s (saltable) |
| Ensamblado del escritorio | Wallpaper → barra → iconos en cascada (30 ms) → dock | 500 ms total |
| Abrir ventana | `scale .96 → 1`, opacidad `0 → 1`, blur `6px → 0` | 180 ms |
| Cerrar ventana | `scale 1 → .97`, opacidad a 0 | 120 ms |
| Minimizar | La ventana viaja hacia el dock | 220 ms |
| Hover en dock | `translateY(-6px) scale(1.15)` + vecinos +2 px | 150 ms |
| Spotlight | Gradiente radial que sigue al puntero, 8% de opacidad | Continuo, solo desktop |
| Cambio de app | Transición de elemento compartido (mobile) | 240 ms |

- Easing base: `cubic-bezier(.2,.8,.2,1)`.
- Máximo dos animaciones simultáneas relevantes.
- `prefers-reduced-motion`: sin boot animado, sin parallax, sin spotlight; las ventanas aparecen con fade de 80 ms.
- Nada de audio automático. Si se agrega pack de sonidos, apagado por defecto y con toggle.
- Cursor nativo siempre. El “cursor custom” se limita a un glow de fondo; nunca se reemplaza el puntero.

---

## 8. Detalles de firma (lo que hace que lo recuerden)

Elegir **tres** para el MVP; el resto queda en backlog.

1. **Boot con contenido real.** Los logs no son genéricos:
   ```
   SPACECH.OS v2.6 — booting kernel...
   [ OK ] Montando /dev/curiosidad
   [ OK ] Cargando módulo tudai.ko
   [ OK ] Iniciando interfaz gráfica
   [ OK ] Disponible para trabajar
   ```
2. **Terminal con personalidad.**

   | Comando | Resultado |
   |---|---|
   | `help` | Lista de comandos |
   | `whoami` | Bio corta + rol |
   | `ls` | Lista apps/proyectos |
   | `open proyectos` | Abre la ventana de Proyectos |
   | `neofetch` | “Specs” de Matias en ASCII: stack, educación, ubicación, estado |
   | `sudo hire-me` | “Permiso concedido. Abriendo cliente de correo…” + abre Contacto |
   | `clear` | Limpia |
   | `rm -rf /` | “Error: este portfolio es de solo lectura 😉” |

   Con historial (↑ ↓), autocompletado con Tab y sugerencias.

3. **Paleta de comandos (`Ctrl/Cmd + K`).** Rápida, accesible y muy “producto”.

4. **Screensaver de inactividad.** A los 60 s sin input, aparece el logo rebotando (estilo DVD) con “MATIAS SPACECH · DISPONIBLE”. Se va con cualquier tecla o movimiento. Solo desktop y sin reduced-motion.

5. **Modo CRT.** Toggle en el menú `spacech` que cambia toda la paleta a fósforo verde con scanlines. Es el easter egg “visible” y demuestra theming real.

6. **Konami code.** Secuencia ↑↑↓↓←→←→BA: las ventanas empiezan a flotar con gravedad y aparece un cartel “MODO ARQUITECTO ACTIVADO”. Se desactiva recargando. Divertido, no invasivo.

7. **404 como BSOD.** Azul, mono, con un botón “Reiniciar sistema” que vuelve al escritorio. Nunca bloquea: siempre hay salida.

8. **“Modo reclutador”.** Acción de la paleta que abre una vista limpia con bio, experiencia, proyectos y botón de CV en una sola pantalla. Es el modo simple con otro nombre, orientado a la conversión.

---

## 9. Responsive y adaptación

| Breakpoint | Comportamiento |
|---|---|
| ≥ 1200 px | Escritorio completo: ventanas libres, dock, widgets, spotlight |
| 768–1199 px | Ventanas con posiciones más acotadas, sin widgets secundarios, dock compacto |
| < 768 px | Launcher mobile: sin drag, apps a pantalla completa, barra de estado, grilla de iconos |
| Puntero grueso | Sin hover dependencies, targets ≥ 44 px, sin magnificación |
| `prefers-reduced-motion` | Sin animaciones de movimiento; todo por opacidad |
| `prefers-reduced-transparency` | Paneles opacos, sin blur |

No se muestran ventanas arrastrables de 200 px en un teléfono. La metáfora se adapta; no se fuerza.

---

## 10. Accesibilidad (parte de la propuesta de valor)

- **Modo simple** en `/simple`, enlazado desde la barra y desde el menú. HTML semántico, una columna, sin ventanas.
- **Teclado:** Tab recorre barra → iconos → dock → ventana activa. Esc cierra. `Ctrl/Cmd + K` abre la paleta. Foco visible con anillo cian de 2 px y offset.
- **Ventanas:** `role="dialog"` con `aria-modal="false"`, `aria-labelledby` al título, botones con `aria-label` (“Cerrar ventana Proyectos”). Anuncio de apertura/cierre con `aria-live="polite"`.
- **Iconos:** siempre con texto visible o `aria-label`; nunca solo color.
- **Contraste:** AA mínimo en todo el texto; los estados no dependen solo del color.
- **Formulario:** labels reales, errores asociados con `aria-describedby`, foco al primer error, honeypot antispam.
- **Contenido sin JS:** `<noscript>` con resumen, proyectos y contacto; el sitio sigue siendo usable.
- **Testing:** axe DevTools + Lighthouse + prueba manual con teclado y lector de pantalla (NVDA o VoiceOver).
- **Sin trampas:** nunca atrapar el foco en una ventana no modal ni desactivar el zoom.

---

## 11. SEO y contenido indexable

El riesgo del concepto es que el contenido quede “escondido” en ventanas. Se resuelve así:

1. **Cada app es una ruta generada en build** (`/proyectos`, `/sobre-mi`, etc.) y su contenido queda en el HTML inicial. La ventana es la presentación; el contenido está en el DOM.
2. La home abre **Inicio** por defecto con el H1 real: “Matias Spacech — Desarrollador Web”.
3. **`/simple`** ofrece todo el contenido en una página convencional, enlazada desde la barra de menú.
4. **JSON-LD `Person`**: nombre, `jobTitle`, `alumniOf` (TUDAI), `sameAs` (GitHub, LinkedIn), `url`.
5. **Metadatos por ruta:** title, description, canonical, Open Graph y Twitter Card. Todas las URLs absolutas incluyen el `base` si el sitio vive en `usuario.github.io/portfolio`.
6. **OG images generadas en build** (1200×630) con estética de ventana del SO, una por proyecto y una general. Se referencian con URL absoluta construida desde `Astro.site` + `withBase()`.
7. `sitemap.xml`, `robots.txt`, favicon e iconos de PWA.
8. **Proyectos con contenido real:** problema, rol, decisiones, stack y resultado. Eso es lo que rankea y lo que convence.

---

## 12. Stack y arquitectura técnica

### Recomendación principal

| Capa | Elección | Motivo |
|---|---|---|
| Framework | **Astro (última estable) + islas de React** | Salida 100% estática, HTML por ruta, JS solo donde hace falta |
| Lenguaje | **TypeScript** | Seguridad y señal profesional |
| Estilos | **Tailwind CSS 4** + tokens CSS | Velocidad y consistencia |
| Animación | **Motion** (ex Framer Motion) | API declarativa, respeta reduced-motion |
| Estado | **Zustand** dentro de la isla del escritorio | Simple, sin boilerplate |
| Contenido | **Content Collections + MDX** | Casos de estudio versionados |
| UI accesible | **Radix Primitives** (dropdown, dialog, tooltip) | Foco y teclado resueltos |
| Formulario | **Formspree / Web3Forms** (fallback `mailto:`) | GitHub Pages no ejecuta backend |
| OG images | **astro-og-canvas** o script Satori en build | Sin runtime en Pages |
| Analítica | **Umami / Plausible** (sin cookies) | Privacidad y eventos |
| Testing | **Playwright** + axe + Lighthouse CI | Calidad repetible |
| Deploy | **GitHub Pages** vía GitHub Actions | Gratis, estático y suficiente |

### Por qué Astro para GitHub Pages

GitHub Pages solo sirve archivos estáticos: no hay Node, ni Server Actions, ni SSR por request, ni optimización de imágenes en runtime. Eso descarta la principal ventaja de Next.js y convierte a Astro en la opción más natural:

1. **Estática de verdad.** Cada ruta se genera como HTML en build. El contenido de cada app existe en el documento inicial, ideal para SEO y previews.
2. **React solo donde se necesita.** El escritorio, las ventanas, la terminal y la paleta son islas de React; las páginas de proyectos y `/simple` pueden ser HTML/CSS sin JavaScript.
3. **Imágenes y OG en build.** Astro optimiza las capturas con `<Image />` y genera las OG images antes de publicar. No dependemos de un servidor.
4. **Rutas por app sin SPA frágil.** `/proyectos`, `/sobre-mi` y `/proyectos/[slug]` son páginas reales; los deep links y el botón atrás funcionan en Pages.
5. **Deploy simple.** Un workflow de GitHub Actions construye `dist/` y lo publica. Sin plataformas extra ni configuración de servidor.
6. **Performance.** La mayor parte del sitio es HTML estático; el JavaScript se concentra en la experiencia del escritorio.

### Lo que cambia respecto del plan original

| Antes (Next + Vercel) | Ahora (GitHub Pages) |
|---|---|
| Server Actions + Resend | Formspree / Web3Forms o `mailto:` |
| OG images por request | OG images generadas en build |
| `next/image` en runtime | `<Image />` de Astro en build |
| Headers HTTP y previews por PR | No disponibles; se aceptan |
| SSR / ISR | HTML estático generado en build |
| Repo privado sin costo | Pages gratis exige repo público (o plan pago) |

Lo conceptual no cambia: el SO, las ventanas, el diseño, la accesibilidad y el modo simple siguen igual.

### Alternativas para GitHub Pages

| Opción | A favor | En contra | Veredicto |
|---|---|---|---|
| **Astro + islas React** | Estático puro, SEO, imágenes y OG en build, islas selectivas | Navegación entre apps es MPA; con View Transitions se disimula | **Recomendada** |
| **Next.js con `output: 'export'`** | Se mantiene React y el router; HTML por ruta | Pierde Server Actions, image optimization y OG runtime; más peso y configuración | Viable si preferís no salir de Next |
| **Vite + React + prerender** | Simple y rápido de desarrollar | Prerender y OG a mano; fácil terminar en SPA con SEO débil | Solo si priorizás DX y aceptás el costo |
| **SvelteKit con adapter estático** | Bundles chicos, gran performance | Ecosistema más chico y menor señal React | Si ya usás Svelte |
| **Hugo / 11ty + JS vanilla** | Récord de velocidad, cero framework | Window manager desde cero; menos ergonomía | Como ejercicio, no para el MVP |

### Regla de decisión

- **Si el hosting es GitHub Pages:** Astro + islas de React.
- **Si querés quedarte en React/Next:** Next con `output: 'export'` es posible; asumí las pérdidas.
- **Si el repo tiene que ser privado:** GitHub Pages gratis no aplica; usá Cloudflare Pages o Netlify, que además dan previews.
- **Si tu stack real es Vue/Svelte/Angular:** usá ese stack; el portfolio debe mostrar aquello a lo que querés que te contraten.

**Recomendación:** Astro + islas de React, con el escritorio como única isla pesada. Es la opción que mejor aprovecha GitHub Pages sin resignar la experiencia.

### Arquitectura del window manager

- Estado por ventana: `{ id, app, title, x, y, w, h, z, minimized, maximized, route }`.
- Acciones: `open`, `close`, `focus`, `minimize`, `maximize`, `move`, `resize`.
- Arrastre con **Pointer Events** (nada de librerías pesadas), clamping al viewport y respeto de la barra y el dock.
- Z-index incremental al enfocar. Una ventana activa a la vez.
- En mobile, el manager se reemplaza por un **router de hojas**: `open` navega y la app ocupa la pantalla.
- Persistencia opcional en `sessionStorage` para restaurar ventanas al volver, sin romper URLs.

**Clave de performance:** el contenido de cada app es HTML generado en build; la isla del escritorio solo maneja la cáscara interactiva. Terminal, formulario y paleta son islas puntuales que se cargan al abrir la app.

**Variante SPA opcional:** si querés que las ventanas abiertas sobrevivan al cambiar de app, la isla puede manejar la navegación con la History API; cada ruta se sigue generando estática para SEO y deep links. Cuesta 3–5 días extra y duplica parte de la lógica de rutas. Para el MVP recomiendo MPA + View Transitions: más simple, más robusto y suficientemente fluido.

### Estructura de carpetas propuesta

```
src/
  layouts/
    Base.astro               # head, fuentes, metadatos
    Desktop.astro            # wallpaper, menú, dock, ClientRouter
  pages/
    index.astro              # escritorio + ventana Inicio
    proyectos/index.astro
    proyectos/[slug].astro
    sobre-mi.astro
    habilidades.astro
    experiencia.astro
    cv.astro
    contacto.astro
    simple.astro
    404.astro
  components/
    os/
      Desktop.tsx            # isla React (client:load)
      BootSequence.tsx
      MenuBar.tsx
      Dock.tsx
      DesktopIcon.tsx
      WindowManager.tsx
      Window.tsx
      CommandPalette.tsx
      Widgets.tsx
      Screensaver.tsx
    apps/
      About.tsx
      Projects.tsx
      ProjectDetail.tsx
      Skills.tsx
      Timeline.tsx
      Contact.tsx
      Terminal.tsx
  content/
    projects/*.mdx
    config.ts
  lib/
    apps.ts
    windows.ts
    terminal.ts
    seo.ts
  styles/tokens.css
public/
  wallpapers/ · icons/ · cv/ · og/
  CNAME (solo cuando haya dominio)
  .nojekyll
astro.config.mjs
```

### Despliegue en GitHub Pages

**Límites que hay que asumir**

- Solo archivos estáticos: sin Node, Server Actions, ISR ni headers personalizados.
- Repo público para Pages gratis (o GitHub Pro/Team para repo privado).
- Límites blandos: 1 GB de sitio y 100 GB/mes de tráfico.
- Sin previews por PR ni redirects del servidor.
- `404.html` para rutas inexistentes; HTTPS automático, también con dominio propio cuando lo haya.

**URL: escenario elegido**

> **Decisión: opción A.** El repo se llama `MatiasSpacech.github.io` y el sitio se publica en `https://matiasspacech.github.io/`, sin subcarpeta ni `base`.

**A. Repo `MatiasSpacech.github.io` (elegido).** GitHub publica en `https://matiasspacech.github.io/`, sin subcarpeta. No hay `base` que configurar y migrar a un dominio propio después es más simple. El nombre del repo coincide con el usuario (`MatiasSpacech`).

**B. Repo `portfolio` (solo si preferís otro nombre).** El sitio quedaría en `https://<usuario>.github.io/portfolio/`; requiere `base: '/portfolio'` y prefijar todos los links internos.

**Configuración de Astro (escenario A)**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://matiasspacech.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), mdx(), sitemap()],
});
```

**Escenario B:** el mismo config, agregando `base: '/portfolio'`.

- No hardcodees rutas internas: usá un helper que respete el `base`.

  ```ts
  // src/lib/paths.ts
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  export const withBase = (path: string) =>
    `${base}/${path.replace(/^\//, '')}`;
  ```

  Usalo en anchors, imágenes de `public/`, canonical y OG. `Astro.site` aporta el origen; `withBase()` aporta la subcarpeta.
- `trailingSlash: 'always'` y links con barra final (`/proyectos/`) evitan redirects en Pages.
- `<ClientRouter />` de Astro para transiciones suaves y `transition:persist` en wallpaper/dock.
- `public/.nojekyll` para que GitHub no procese el sitio con Jekyll.
- No agregues `public/CNAME` hasta comprar el dominio.
- En Settings → Pages, elegir **Source: GitHub Actions** (una sola vez).
- Activar “Enforce HTTPS”.

**Cuando compres el dominio (migración)**

1. Agregá `public/CNAME` con `spacech.dev`.
2. Cambiá `site` a `https://spacech.dev` y `base` a `/` (o eliminá `base`).
3. Configurá los DNS que indica GitHub (A/AAAA para el dominio raíz, CNAME para `www`).
4. Activá “Enforce HTTPS” y volvé a desplegar.
5. Los links y las OG se recalculan solos porque salen de `withBase()` y `Astro.site`.

**Workflow de deploy**

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - uses: actions/configure-pages@v5
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Formulario de contacto**

- Formspree o Web3Forms con endpoint público en `PUBLIC_FORM_*`.
- Honeypot, validación y estado de éxito; fallback visible `mailto:` con tu email actual (cuando compres el dominio, pasás a `hola@spacech.dev`).
- No hay rate limiting propio: confiar en el antispam del servicio y revisar el plan gratuito.

**OG y analítica**

- OG images generadas en build y guardadas en `public/og/`; meta tags con URL absoluta (`Astro.site`).
- Umami Cloud o Plausible: script estático, sin cookies.

**Qué se pierde y cómo se compensa**

| Limitación | Compensación |
|---|---|
| Sin backend | Formspree/Web3Forms; CV y email directos |
| Sin previews | `npm run preview` local y deploy de staging a otro repo/sitio |
| Sin headers | Sitio sin cookies ni datos sensibles; CSP básica por meta si se quiere |
| 1 GB / 100 GB | Imágenes optimizadas en build; el proyecto sobra |
| Repo público | El código del portfolio es una carta de presentación |

### Atajos de teclado

| Atajo | Acción |
|---|---|
| `Ctrl/Cmd + K` | Paleta de comandos |
| `Esc` | Cerrar paleta o ventana activa |
| `Tab` / `Shift + Tab` | Navegar controles |
| `↑` `↓` `Enter` | Navegar paleta / historial de terminal |
| `Ctrl/Cmd + Alt + S` | Modo simple |

No se secuestran atajos del navegador como `Ctrl/Cmd + W` o `Ctrl/Cmd + T`.

---

## 13. Presupuesto de rendimiento

| Recurso | Límite |
|---|---|
| JS inicial (gzip) | ≤ 150 KB en la isla del escritorio · ≤ 20 KB en páginas de contenido |
| LCP en 4G | < 2,5 s |
| CLS | < 0,05 |
| Fuentes | 3 familias, subset latin/latin-ext, `font-display: swap` |
| Wallpaper | CSS/canvas; poster AVIF < 120 KB |
| Imágenes de proyectos | AVIF/WebP responsivas, < 200 KB cada una |
| Partículas | ≤ 60 desktop · 0 mobile/reduced-motion |
| Dependencias | Sin librerías 3D ni video de fondo |

- Islas selectivas: las páginas de contenido no hidratan React; solo el escritorio y las apps interactivas.
- La terminal, la paleta y el formulario se cargan al abrirse, no en el bundle inicial.
- `<Image />` de Astro para AVIF/WebP en build, con tamaños correctos y `loading="lazy"` fuera del primer viewport.
- Contenido de cada app como HTML generado en build.
- Lighthouse CI en cada push a `main` con umbrales que fallan el deploy.
- Sin cookies de terceros ni cookie banner.

---

## 14. Contenido: checklist y textos base

### Checklist de contenido (bloqueante para lanzar)

- [ ] Bio en 3 versiones: 1 línea, 1 párrafo (80–120 palabras), larga (250–350).
- [ ] Foto profesional 3:4 + recorte para avatar. Fondo limpio, buena luz.
- [ ] 3–6 proyectos. Por cada uno: problema, tu rol, stack, decisiones técnicas, resultado, 2–3 imágenes, demo y repo.
- [ ] Stack real y nivel honesto (sin porcentajes inventados).
- [ ] TUDAI: años, UNICEN/Tandil, proyecto final o hito destacado (confirmar).
- [ ] Experiencia laboral/freelance con fechas y logros concretos.
- [ ] CV en PDF, actualizado, nombrado `Matias-Spacech-CV.pdf`.
- [ ] Email, LinkedIn, GitHub. WhatsApp solo si se quiere.
- [ ] Repo público `MatiasSpacech.github.io` creado (todavía no existe).
- [ ] Testimonios o recomendaciones (opcional, muy recomendable).
- [ ] Email de contacto definido y funcionando (el dominio propio puede esperar).
- [ ] Más adelante: dominio comprado y correo profesional (`hola@spacech.dev`).
- [ ] Imagen OG 1200×630.
- [ ] Confirmar si “Matias” lleva tilde en textos corridos.

### Textos base para el boot

```
SPACECH.OS v2.6 “Tandil” — inicializando...
[ OK ] Montando /dev/curiosidad
[ OK ] Cargando módulo tudai.ko
[ OK ] Iniciando interfaz gráfica
[ OK ] Disponible para trabajar
```

### Textos base para Inicio

> **Matias Spacech**  
> Desarrollador web · Egresado de TUDAI
>
> Convierto ideas en interfaces rápidas, accesibles y con personalidad. Me formé en TUDAI, la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas, y desde entonces construyo aplicaciones web y móviles de punta a punta.
>
> `[ Ver proyectos ]` `[ Hablemos ]`

### Estructura de un caso de estudio

1. **Portada** con imagen, título, año y stack.
2. **El problema** (2–3 párrafos).
3. **Mi rol y el equipo.**
4. **Decisiones técnicas** (la parte que los devs leen).
5. **Resultado** (métricas o aprendizaje concreto).
6. **Galería** (2–3 imágenes con caption).
7. **Links** a demo y repo.
8. **Siguiente proyecto.**

### Estado vacío / errores

- Sin proyectos que coincidan con el filtro: *“0 resultados. Ni el kernel encuentra eso.”* + botón “Limpiar filtros”.
- Formulario enviado: *“Mensaje encolado. Te respondo a la brevedad.”*
- 404: BSOD con “Reiniciar sistema”.

---

## 15. Roadmap

Estimación para trabajo part-time (15–20 h/semana). Si es full-time, comprimir a la mitad.

### Fase 0 — Contenido y decisiones (3–4 días)

- Cerrar bio, proyectos, CV y URL provisoria (el dominio puede esperar).
- Decidir stack final y modo de contacto.
- Moodboard y 3 pantallas clave en Figma (o directamente en código).

**Salida:** contenido aprobado + dirección visual validada.

### Fase 1 — Fundaciones (1 semana)

- Setup Astro + islas de React + TypeScript + Tailwind, tokens y fuentes.
- Workflow de deploy a GitHub Pages desde el día uno (validar `base` si aplica, 404 y URL provisoria).
- Boot sequence, menú, escritorio, dock, iconos.
- Window manager: abrir, cerrar, enfocar, arrastrar, minimizar.
- Layout responsive base y modo simple.

**Salida:** se puede navegar el escritorio con apps placeholder.

### Fase 2 — Contenido real (1 semana)

- Inicio, Proyectos + detalle, Sobre mí, Skills, Experiencia, CV, Contacto.
- Formulario funcionando, descarga de CV, links.
- Mobile launcher y transiciones.

**Salida:** el sitio ya cuenta quién es Matias y permite contactarlo.

### Fase 3 — Firma y pulido (1 semana)

- Paleta de comandos.
- Terminal y comandos.
- Widgets, screensaver, modo CRT, 404.
- OG images generadas en build, metadatos, JSON-LD, sitemap.
- Accesibilidad completa y presupuesto de performance.
- QA cross-browser (Chrome, Firefox, Safari, iOS, Android).

**Salida:** versión candidata a lanzamiento.

### Fase 4 — Lanzamiento (2–3 días)

- Deploy final a GitHub Pages con URL provisoria, analytics y eventos.
- Pruebas con 3–5 personas (2 técnicas, 2 no técnicas): “encontrá el CV”, “abrí un proyecto”, “contactá a Matias”.
- Ajustes finales, anuncio en LinkedIn/GitHub.
- Documentar la migración a dominio propio para cuando se compre.

**Salida:** SPACECH.OS online.

**Total realista:** 4–5 semanas calendario part-time · ~18–25 días de trabajo efectivo.

---

## 16. Riesgos y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| “Lindo pero no se entiende” | Media | Ventana Inicio abierta, CTAs persistentes, modo simple, pruebas con usuarios |
| Scope creep por los easter eggs | Alta | MVP congelado: primero contenido y usabilidad; easter eggs en Fase 3 |
| Mobile incómodo | Media | Launcher de hojas, no ventanas diminutas |
| Performance por el wallpaper | Media | CSS/canvas + poster, presupuesto y Lighthouse CI |
| SEO pobre por el concepto | Media | Rutas estáticas generadas en build, `/simple`, JSON-LD, OG images |
| Accesibilidad del drag & drop | Media | Todo accesible por teclado y por modo simple; drag es opcional |
| Parecer un clon de macOS | Baja | Chrome propio, paleta aurora, copy argentino, terminal y CRT |
| Contenido flojo detrás del show | Media | Checklist bloqueante: sin proyectos reales no se lanza |
| GitHub Pages no ejecuta backend | Alta | Formspree/Web3Forms o `mailto:`; ningún secreto en el cliente |
| Sin previews ni headers propios | Media | `npm run preview` local; staging en Cloudflare Pages si hace falta |
| Repo público para Pages gratis | Media | Aceptarlo (el código suma) o usar Cloudflare Pages con repo privado |
| Base path roto en repo `portfolio` | Media | Centralizar links en `withBase()`; probar `/portfolio/` y 404 antes de publicar |
| Cambio de URL al comprar dominio | Baja | Config centralizada (`site`/`base`) + `withBase()`; agregar CNAME y redeployar |

---

## 17. Analítica y eventos

Medir solo lo necesario, sin cookies:

- `cv_download` (origen: menú, inicio, cv, simple).
- `contact_click` (email, formulario, LinkedIn, GitHub).
- `project_open` (slug).
- `terminal_command` (solo el nombre del comando, sin texto libre).
- `simple_mode_on`.
- `command_palette_open`.
- `theme_change`.
- Scroll/cierre en modo simple y tiempo de sesión.

Revisión mensual: ¿la gente encuentra el CV? ¿explora proyectos? ¿el modo simple se usa más de lo esperado?

---

## 18. Backlog (post-lanzamiento)

- Guestbook / libro de visitas con Supabase.
- “Ahora” con Spotify (opt-in, sin exponer datos).
- Mini-juego en el menú Inicio (Snake o Buscaminas) como easter egg.
- Blog/Notas con MDX.
- Versión en inglés (`/en`).
- Sonidos de UI opcionales (apagados por defecto).
- Window snapping y “escritorios virtuales” decorativos.
- Wallpaper selector (3 variantes).
- PWA instalable con pantalla de arranque propia.
- Estadísticas de visitas como widget del escritorio (agregadas, sin datos personales).

---

## 19. Decisiones abiertas

| Decisión | Opciones | Recomendación |
|---|---|---|
| Stack | Astro + islas React / Next static export / Vite+React | **Astro + islas de React** |
| Hosting | GitHub Pages / Cloudflare Pages / Netlify | **GitHub Pages** (elegido) |
| URL provisoria | Repo `MatiasSpacech.github.io` / repo `portfolio` | **`MatiasSpacech.github.io`** (elegido; sin `base`) |
| Contacto | Formspree / Web3Forms / `mailto` | **Formspree con fallback a `mailto`** |
| OG images | En build / en runtime | **En build** |
| Tema | Solo Aurora / Aurora + CRT + Simple | **Los tres** |
| Terminal | Sí / no | **Sí**, es la firma |
| Blog | Ahora / post-lanzamiento | **Post-lanzamiento** |
| Nombre | SPACECH.OS / Mati.OS / Núcleo | **SPACECH.OS** |
| Dominio | No comprar por ahora / `spacech.dev` / `spacechos.com` | **No por ahora**; migrar a `spacech.dev` más adelante |
| Foto | Estudio / casual / ilustración | **Foto real**: genera confianza |

---

## 20. Definición de terminado (MVP)

- [ ] Boot saltable, ≤ 2 s, una vez por sesión, respeta reduced-motion.
- [ ] Escritorio funcional con barra, iconos, dock y ventanas operables.
- [ ] Inicio, Proyectos, Detalle, Sobre mí, Skills, Experiencia, CV y Contacto con contenido real.
- [ ] Paleta de comandos y terminal funcionando.
- [ ] Responsive completo en 360, 768, 1280, 1440 y 1920 px.
- [ ] Navegación completa por teclado y modo simple.
- [ ] Formulario con validación, antispam y estado de éxito (Formspree/Web3Forms).
- [ ] Deploy automático a GitHub Pages con HTTPS, `.nojekyll`, 404 y URL provisoria (sin CNAME).
- [ ] Links internos y OG funcionan con y sin `base` (`withBase()` + `Astro.site`).
- [ ] Lighthouse mobile ≥ 90 / 100 / 100 / 100 y LCP < 2,5 s.
- [ ] Metadatos, OG images con URL absoluta, sitemap, JSON-LD y 404.
- [ ] Analytics sin cookies y eventos de CV/contacto.
- [ ] Probado en Chrome, Firefox, Safari, iOS y Android.
- [ ] Sin dependencias de servidor: todo funciona como sitio estático.
- [ ] 3 personas completan “encontrar el CV” y “contactar” sin ayuda.

---

*SPACECH.OS — construido en Argentina, corriendo en la web.*
