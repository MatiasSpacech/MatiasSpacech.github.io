import { useMemo, useState } from 'react';
import { PROJECTS } from '../../lib/apps';
import {
  accentBg,
  accentBorder,
  accentText,
  Chip,
  ExternalLink,
  SectionLabel,
} from './ui';

type Filter = 'todos' | 'web' | 'mobile';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
];

export default function ProjectsApp() {
  const [filter, setFilter] = useState<Filter>('todos');

  const projects = useMemo(() => {
    if (filter === 'todos') return PROJECTS;
    if (filter === 'web') return PROJECTS.filter((project) => project.kind.includes('Web'));
    return PROJECTS.filter((project) => project.kind.includes('Mobile') || project.kind === 'Android');
  }, [filter]);

  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>~/proyectos</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Cosas que construí</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
            Aplicaciones web y móviles, de la idea al deploy. Cada tarjeta linkea al repositorio; los casos de
            estudio completos se están escribiendo.
          </p>
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 bg-black/20 p-1">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition ${
                filter === item.id ? 'bg-white/10 text-ink' : 'text-dim hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative overflow-hidden rounded-xl border bg-white/[0.025] p-5 transition hover:bg-white/[0.045] ${accentBorder[project.accent]}`}
          >
            <div className={`absolute inset-y-0 left-0 w-px ${accentBg[project.accent]} opacity-70`} />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3.5">
                <span className={`mt-0.5 font-mono text-[10px] ${accentText[project.accent]}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{project.name}</h3>
                  <p className="mt-1 text-sm text-dim">{project.tagline}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-dim">
                  {project.kind} · {project.year}
                </span>
              </div>
            </div>

            <p className="mt-3 max-w-2xl pl-7 text-xs leading-relaxed text-dim">{project.description}</p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pl-7">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
              <ExternalLink href={project.repo}>Ver repositorio</ExternalLink>
            </div>
          </article>
        ))}

        {projects.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/15 p-8 text-center">
            <p className="font-mono text-sm text-dim">0 resultados. Ni el kernel encuentra eso.</p>
            <button
              type="button"
              onClick={() => setFilter('todos')}
              className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-aqua"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <p className="mt-5 font-mono text-[10px] leading-relaxed text-dim/70">
        // TODO: caso de estudio con problema, decisiones y resultado. Mientras tanto, el código está en GitHub.
      </p>
    </div>
  );
}
