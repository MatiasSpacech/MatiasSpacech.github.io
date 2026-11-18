import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// El sitio vive en la raíz del user site de GitHub Pages.
// Si algún día se mueve a un project site, agregar base: '/repo'.
export default defineConfig({
  site: 'https://matiasspacech.github.io',
  trailingSlash: 'always',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
