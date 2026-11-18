import { PROJECTS, type AppId } from '../../lib/apps';
import { site, STACK } from '../../lib/site';
import { withBase } from '../../lib/paths';
import {
  accentBorder,
  accentText,
  Chip,
  ExternalLink,
  GhostButton,
  PrimaryButton,
} from './ui';

export default function HomeApp({ onNavigate }: { onNavigate: (id: AppId) => void }) {
  const featured = PROJECTS.slice(0, 3);

  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-ok/20 bg-ok/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ok">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" />
            {site.availability}
          </p>

          <p className="mt-6 font-mono text-[11px] text-dim">
            <span className="text-aqua">matias@spacech.os</span>:<span className="text-violet">~</span>${' '}
            whoami
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl">
            Matias <span className="text-gradient">Spacech</span>
          </h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
            Desarrollador Web · Egresado de TUDAI
          </p>
        </div>

        <div className="hidden shrink-0 sm:block">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-aqua/25 via-violet/15 to-magenta/20 blur-xl" />
            <img
              src={withBase(site.avatar)}
              alt="Matias Spacech"
              width="460"
              height="460"
              className="relative h-24 w-24 rounded-2xl border border-white/15 object-cover"
            />
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-dim">
        Convierto ideas en interfaces rápidas, accesibles y con personalidad. Me formé en <span className="text-ink">TUDAI</span>{' '}
        (UNICEN) y construyo aplicaciones web y móviles de punta a punta.
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {STACK.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <PrimaryButton onClick={() => onNavigate('proyectos')}>Ver proyectos</PrimaryButton>
        <GhostButton onClick={() => onNavigate('contacto')}>Hablemos</GhostButton>
        <GhostButton onClick={() => onNavigate('cv')}>CV</GhostButton>
      </div>

      <div className="mt-7">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">Proyectos destacados</h2>
          <button
            type="button"
            onClick={() => onNavigate('proyectos')}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition hover:text-ink"
          >
            Ver todos →
          </button>
        </div>

        <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
          {featured.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => onNavigate('proyectos')}
              className={`group flex min-h-[140px] flex-col rounded-xl border bg-white/[0.025] p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/[0.055] ${accentBorder[project.accent]}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-dim">0{index + 1}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${project.accent === 'aqua' ? 'bg-aqua' : project.accent === 'violet' ? 'bg-violet' : 'bg-magenta'}`} />
              </div>
              <h3 className="mt-3 font-display text-[15px] font-semibold leading-snug text-ink">
                {project.name}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-dim">{project.tagline}</p>
              <span className={`mt-auto pt-3 font-mono text-[10px] uppercase tracking-[0.1em] ${accentText[project.accent]}`}>
                {project.kind}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3">
        <p className="font-mono text-[10px] text-dim">
          <span className="text-ok">●</span> sistema estable · v2.6 “Tandil”
        </p>
        <ExternalLink href={site.github}>github.com/MatiasSpacech</ExternalLink>
      </div>
    </div>
  );
}
