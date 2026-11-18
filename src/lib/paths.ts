const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefija una ruta con el base de Astro (vacío en este sitio). */
export function withBase(path = '/'): string {
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export const SITE_URL = 'https://matiasspacech.github.io';

export function absoluteUrl(path = '/'): string {
  return new URL(withBase(path), SITE_URL).toString();
}
