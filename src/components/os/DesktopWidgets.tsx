import { PROJECTS, type AppId } from '../../lib/apps';
import { site, STACK } from '../../lib/site';
import { Chip } from '../apps/ui';
import { Icon } from './icons';

export default function DesktopWidgets({ onOpen }: { onOpen: (id: AppId) => void }) {
  return (
    <aside className="absolute bottom-5 right-5 z-10 hidden w-[248px] flex-col gap-3 xl:flex" aria-label="Widgets del escritorio">
      <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">Ahora</p>
          <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-ok">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" /> online
          </span>
        </div>
        <p className="mt-3 font-display text-sm font-semibold leading-snug text-ink">
          Construyendo SPACECH.OS
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-dim">
          Portfolio, terminal y pequeños experimentos. Abierto a oportunidades.
        </p>
        <button
          type="button"
          onClick={() => onOpen('contacto')}
          className="mt-3 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-aqua transition hover:text-ink"
        >
          Hablemos <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">Stack principal</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {STACK.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="font-mono text-[9px] text-dim">proyectos</span>
          <span className="font-mono text-[10px] text-ink">{String(PROJECTS.length).padStart(2, '0')}</span>
        </div>
      </div>

      <a
        href={site.github}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl transition hover:border-aqua/25 hover:bg-black/35"
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">GitHub</p>
          <Icon name="github" size={14} className="text-dim transition group-hover:text-aqua" />
        </div>
        <p className="mt-2 font-display text-sm font-semibold text-ink">{site.githubHandle}</p>
        <p className="mt-0.5 text-[11px] text-dim">Código, experimentos y proyectos.</p>
        <span className="mt-3 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-aqua">
          Abrir perfil <span aria-hidden="true">↗</span>
        </span>
      </a>
    </aside>
  );
}
