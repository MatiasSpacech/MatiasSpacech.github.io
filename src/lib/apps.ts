export type AppId =
  | 'inicio'
  | 'proyectos'
  | 'sobre-mi'
  | 'skills'
  | 'experiencia'
  | 'cv'
  | 'contacto'
  | 'terminal';

export type IconName =
  | 'home'
  | 'folder'
  | 'user'
  | 'chip'
  | 'timeline'
  | 'document'
  | 'mail'
  | 'terminal'
  | 'github'
  | 'search'
  | 'arrow'
  | 'refresh'
  | 'sparkles'
  | 'download'
  | 'print'
  | 'external';

export type Accent = 'aqua' | 'violet' | 'magenta' | 'amber';

export type AppMeta = {
  id: AppId;
  label: string;
  title: string;
  icon: IconName;
  accent: Accent;
};

export const APPS: AppMeta[] = [
  { id: 'inicio', label: 'Inicio', title: 'Inicio', icon: 'home', accent: 'aqua' },
  { id: 'proyectos', label: 'Proyectos', title: 'Proyectos', icon: 'folder', accent: 'violet' },
  { id: 'sobre-mi', label: 'Sobre mí', title: 'Sobre mí', icon: 'user', accent: 'aqua' },
  { id: 'skills', label: 'Skills', title: 'Skills', icon: 'chip', accent: 'magenta' },
  { id: 'experiencia', label: 'Trayectoria', title: 'Trayectoria', icon: 'timeline', accent: 'amber' },
  { id: 'cv', label: 'CV', title: 'Curriculum', icon: 'document', accent: 'aqua' },
  { id: 'contacto', label: 'Contacto', title: 'Contacto', icon: 'mail', accent: 'violet' },
  { id: 'terminal', label: 'Terminal', title: 'Terminal', icon: 'terminal', accent: 'amber' },
];

export const APP_BY_ID = Object.fromEntries(APPS.map((app) => [app.id, app])) as Record<
  AppId,
  AppMeta
>;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  year: string;
  kind: string;
  accent: Accent;
};

export const PROJECTS: Project[] = [
  {
    slug: 'truco-multijugador-lan',
    name: 'Truco Multijugador LAN',
    tagline: 'Truco argentino multijugador, sin internet ni cuentas.',
    description:
      'Una app Android que actúa como servidor y clientes web que se conectan por red local. La partida vive en el dispositivo: no hay nube, no hay registro, no hay dependencia de terceros.',
    stack: ['Kotlin', 'Android', 'TypeScript'],
    repo: 'https://github.com/MatiasSpacech/Truco-Multijugador-Lan',
    year: '2026',
    kind: 'Mobile + Web',
    accent: 'aqua',
  },
  {
    slug: 'vetapp',
    name: 'VetApp',
    tagline: 'Gestión veterinaria local-first.',
    description:
      'Aplicación Android para gestionar pacientes y consultas con Jetpack Compose, Room y Supabase. Pensada para funcionar con datos locales y sincronizar cuando hace falta.',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Supabase'],
    repo: 'https://github.com/MatiasSpacech/VetApp',
    year: '2026',
    kind: 'Android',
    accent: 'violet',
  },
  {
    slug: 'notasmd',
    name: 'NotasMD',
    tagline: 'Notas en Markdown que viven en tu disco.',
    description:
      'Aplicación web de notas en Markdown con frontmatter YAML. Sin base de datos ni cuentas: cada nota es un archivo que podés abrir, copiar y respaldar con cualquier herramienta.',
    stack: ['TypeScript', 'Markdown', 'YAML'],
    repo: 'https://github.com/MatiasSpacech/NotasMD',
    year: '2026',
    kind: 'Web',
    accent: 'magenta',
  },
  {
    slug: 'angular-seminario',
    name: 'Angular Seminario',
    tagline: 'Una aplicación web completa con Angular.',
    description:
      'Trabajo final del seminario de Angular: componentes, rutas, servicios y consumo de datos para construir una aplicación web de punta a punta.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    repo: 'https://github.com/MatiasSpacech/Angular-Seminario-TP-Final',
    year: '2025',
    kind: 'Web',
    accent: 'amber',
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS'],
  },
  {
    label: 'Mobile',
    items: ['Kotlin', 'Android', 'Jetpack Compose', 'Room'],
  },
  {
    label: 'Backend & datos',
    items: ['PHP', 'REST APIs', 'SQL', 'PL/pgSQL', 'Supabase'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Linux', 'Markdown', 'Astro'],
  },
];

export type TimelineItem = {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    title: 'TUDAI · UNICEN',
    subtitle: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas',
    description:
      'Formación de pregrado orientada a programación y al desarrollo de aplicaciones web y móviles. Base de algoritmos, bases de datos, interfaces y arquitectura.',
    tag: 'Formación',
  },
  {
    title: 'Proyectos personales',
    subtitle: 'Truco LAN · VetApp · NotasMD',
    description:
      'Diseño y desarrollo de aplicaciones completas: Android, web, datos locales, sincronización y experiencias de uso. El portfolio que estás viendo también es uno de ellos.',
    tag: 'Práctica',
  },
  {
    title: 'Seminario de Angular',
    subtitle: 'Aplicación web con Angular',
    description:
      'Trabajo final orientado a componentes, rutas, servicios y consumo de datos con el framework Angular.',
    tag: 'Formación',
  },
];
