# SPACECH.OS

Portfolio de **Matias Spacech** empaquetado como un sistema operativo: escritorio, ventanas, dock, terminal y una versión simple para leer sin distracciones.

- **Sitio:** https://matias-spacech.github.io/
- **Repo:** https://github.com/MatiasSpacech/MatiasSpacech.github.io
- **Stack:** Astro 7, React 19, TypeScript, Tailwind CSS 4, GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:4321/`.

```bash
npm run build     # genera dist/
npm run preview   # sirve el build localmente
npm run og        # regenera public/og.png
```

## Estructura

```
src/
  components/
    os/          # escritorio, ventanas, dock, boot, paleta, mobile
    apps/        # contenido de cada aplicación
  layouts/Base.astro
  pages/
    index.astro  # escritorio
    simple.astro # versión accesible de una columna
    cv.astro     # CV imprimible
    404.astro    # BSOD
  lib/           # datos de apps, proyectos, skills, site
  styles/global.css
public/
  avatar.jpg     # avatar de GitHub; reemplazar por foto real
  favicon.svg
  og.png
  .nojekyll
```

## Editar contenido

| Qué | Archivo |
|---|---|
| Nombre, rol, GitHub, disponibilidad | `src/lib/site.ts` |
| Apps, proyectos, skills, trayectoria | `src/lib/apps.ts` |
| Texto de Inicio | `src/components/apps/HomeApp.tsx` |
| Texto de Sobre mí | `src/components/apps/AboutApp.tsx` |
| Versión simple / SEO | `src/pages/simple.astro` |
| CV | `src/pages/cv.astro` |

El avatar actual es el de GitHub. Para el lanzamiento conviene reemplazar `public/avatar.jpg` por una foto profesional (cuadrada, mínimo 800×800).

## Formulario de contacto

La app de Contacto usa [Formspree](https://formspree.io/) si existe `PUBLIC_FORMSPREE_ENDPOINT`.

1. Crear un form en Formspree.
2. Copiar `.env.example` a `.env` y completar el endpoint para desarrollo local.
3. En GitHub, cargarlo como variable de repositorio (`Settings → Secrets and variables → Actions → Variables`) con el nombre `PUBLIC_FORMSPREE_ENDPOINT`. El workflow ya la pasa al build.

Mientras no esté configurado, la app muestra un canal directo a GitHub.

## Deploy en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica en cada push a `main`.

1. Settings → Pages → **Source: GitHub Actions**.
2. Settings → Pages → **Enforce HTTPS**.
3. El sitio se publica en `https://matias-spacech.github.io/`.

El repo es un **user site**: se llama `MatiasSpacech.github.io` y no usa `basePath`. Si algún día se renombra a `portfolio`, hay que agregar `base: '/portfolio'` en `astro.config.mjs` y prefijar todos los links con `withBase()` (ya está preparado en `src/lib/paths.ts`).

## Migrar a un dominio propio

Cuando compres `spacech.dev`:

1. Agregar `public/CNAME` con `spacech.dev`.
2. Cambiar `site` en `astro.config.mjs` a `https://spacech.dev`.
3. Configurar los DNS que indica GitHub (A/AAAA para el apex, CNAME para `www`).
4. Activar Enforce HTTPS y redeployar.

Los links y las OG images se recalculan desde `Astro.site` + `withBase()`.

## Accesibilidad

- La versión `/simple/` es HTML estático, sin ventanas ni JavaScript.
- `/cv/` es imprimible y se puede guardar como PDF.
- Navegación por teclado, foco visible, `aria-label` en controles y respeto por `prefers-reduced-motion`.
- El boot se puede saltar y se oculta automáticamente con JavaScript deshabilitado.

## Próximos pasos

- Reemplazar el avatar por una foto real.
- Completar los casos de estudio de los proyectos.
- Configurar Formspree y el email de contacto.
- Agregar las rutas estáticas por app para SEO (hoy el contenido de las apps vive en el escritorio; `/simple/` y `/cv/` ya son indexables).
- Generar la OG definitiva con la tipografía del sitio.
