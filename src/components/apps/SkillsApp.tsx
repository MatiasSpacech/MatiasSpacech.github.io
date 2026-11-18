import { SKILL_GROUPS } from '../../lib/apps';
import { Chip, SectionLabel } from './ui';

const GROUP_ACCENTS = ['text-aqua border-aqua/20', 'text-lilac border-violet/20', 'text-magenta border-magenta/20', 'text-warn border-warn/20'];

const PORTFOLIO_STACK = ['Astro', 'React', 'TypeScript', 'Tailwind', 'GitHub Pages'];

export default function SkillsApp() {
  return (
    <div className="p-6 sm:p-8">
      <SectionLabel>~/skills</SectionLabel>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Monitor de sistema</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
        Herramientas que aparecen en proyectos reales. Sin porcentajes inventados: el nivel se mide leyendo
        el código.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <section
            key={group.label}
            className={`rounded-xl border border-white/10 bg-white/[0.025] p-4 ${GROUP_ACCENTS[index]}`}
          >
            <div className="flex items-center justify-between">
              <h3 className={`font-mono text-[10px] uppercase tracking-[0.16em] ${GROUP_ACCENTS[index].split(' ')[0]}`}>
                {group.label}
              </h3>
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                activo
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/15 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Este portfolio</h3>
            <p className="mt-0.5 text-xs text-dim">Construido con las mismas herramientas que muestro.</p>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {PORTFOLIO_STACK.map((item) => (
              <li key={item}>
                <Chip className="border-aqua/15 text-aqua/90">{item}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 font-mono text-[10px] leading-relaxed text-dim/70">
        // Frontend, mobile, backend y tooling: cuatro módulos cargados. Sin benchmarks de fantasía.
      </p>
    </div>
  );
}
