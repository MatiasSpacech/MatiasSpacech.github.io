import { TIMELINE, type AppId } from '../../lib/apps';
import { GhostButton, SectionLabel } from './ui';

const DOT_COLORS = ['bg-aqua', 'bg-violet', 'bg-magenta'];

export default function ExperienceApp({ onNavigate }: { onNavigate: (id: AppId) => void }) {
  return (
    <div className="p-6 sm:p-8">
      <SectionLabel>~/trayectoria</SectionLabel>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Registro de eventos</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
        Formación, proyectos y las cosas que fui aprendiendo en el camino. El log sigue abierto.
      </p>

      <ol className="relative mt-7 space-y-6 border-l border-white/10 pl-6">
        {TIMELINE.map((item, index) => (
          <li key={`${item.title}-${index}`} className="relative">
            <span
              className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-deep ${DOT_COLORS[index % DOT_COLORS.length]}`}
            />
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-dim">
                {item.tag}
              </span>
              <span className="font-mono text-[9px] text-dim/60">evento_{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-0.5 text-xs font-medium text-aqua/90">{item.subtitle}</p>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-dim">{item.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-aqua/[0.07] via-violet/[0.06] to-magenta/[0.06] p-4">
        <div>
          <h3 className="font-display text-sm font-semibold text-ink">¿Sumamos una entrada?</h3>
          <p className="mt-0.5 text-xs text-dim">Estoy abierto a oportunidades y proyectos nuevos.</p>
        </div>
        <GhostButton onClick={() => onNavigate('contacto')}>Hablemos →</GhostButton>
      </div>
    </div>
  );
}
