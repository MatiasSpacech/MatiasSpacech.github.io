import { site } from '../../lib/site';
import { withBase } from '../../lib/paths';
import { GhostButton, PrimaryButton, SectionLabel } from './ui';
import { Icon } from '../os/icons';

const SECTIONS = ['Perfil', 'Formación', 'Proyectos', 'Herramientas'];

export default function CVApp() {
  return (
    <div className="p-6 sm:p-8">
      <SectionLabel>~/cv</SectionLabel>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Curriculum</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
        La versión web está lista para leer, imprimir o guardar como PDF desde el navegador.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_180px]">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-aqua/20 bg-aqua/10 text-aqua">
              <Icon name="document" size={22} />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Matias Spacech — CV</h3>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                Desarrollador Web · Egresado TUDAI
              </p>
            </div>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-2">
            {SECTIONS.map((section) => (
              <li key={section} className="flex items-center gap-2 text-xs text-dim">
                <span className="h-1 w-1 rounded-full bg-aqua/70" />
                {section}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <PrimaryButton href={withBase('/cv/')}>
              <Icon name="external" size={15} /> Abrir CV
            </PrimaryButton>
            <GhostButton href={withBase('/cv/')}>
              <Icon name="print" size={15} /> Imprimir / PDF
            </GhostButton>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-black/20 p-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Estado</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              Actualizado
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-dim">
              Generado desde el mismo contenido del portfolio. Sin PDF desactualizado dando vueltas.
            </p>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 font-mono text-[10px] text-aqua underline-offset-4 hover:underline"
          >
            Ver GitHub ↗
          </a>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-black/15 p-4">
        <p className="font-mono text-[10px] leading-relaxed text-dim">
          <span className="text-aqua">$</span> abrir cv --web
          <br />
          <span className="text-ok">[ OK ]</span> Se abre en una pestaña nueva. Usá “Imprimir → Guardar como PDF”
          para descargarlo.
        </p>
      </div>
    </div>
  );
}
