import type { AppId } from '../../lib/apps';
import { site } from '../../lib/site';
import { withBase } from '../../lib/paths';
import { GhostButton, PrimaryButton, SectionLabel } from './ui';
import { Icon } from '../os/icons';

const VALUES = [
  { title: 'Claridad', text: 'Interfaces que se entienden sin manual y código que otro puede leer.' },
  { title: 'Producto', text: 'Me importa el problema completo, no solo la pantalla bonita.' },
  { title: 'Autonomía', text: 'Datos locales, menos dependencias, herramientas que siguen funcionando.' },
];

export default function AboutApp({ onNavigate }: { onNavigate: (id: AppId) => void }) {
  return (
    <div className="p-6 sm:p-8">
      <SectionLabel>~/sobre-mi</SectionLabel>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
        Hola, soy Matias.
      </h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-[168px_1fr] sm:items-start">
        <div className="relative mx-auto w-40 sm:mx-0">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-aqua/25 via-violet/15 to-magenta/20 blur-xl" />
          <img
            src={withBase(site.avatar)}
            alt="Retrato de Matias Spacech"
            width="460"
            height="460"
            className="relative aspect-square w-full rounded-2xl border border-white/15 object-cover"
          />
          <div className="relative mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-ok/20 bg-ok/[0.06] px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Disponible
          </div>
        </div>

        <div>
          <p className="text-[15px] leading-relaxed text-dim">
            Soy desarrollador web de Argentina. Me formé en <span className="text-ink">TUDAI</span>, la
            Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas de UNICEN. Me interesa la
            intersección entre producto, interfaz y datos: que una aplicación sea linda de usar y también
            sólida por dentro.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-dim">
            Construí desde una app Android que sirve partidas de truco por LAN hasta una aplicación de notas
            que guarda archivos Markdown en tu propio disco. Me gusta entender el problema completo y llevarlo
            a una solución concreta.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <PrimaryButton onClick={() => onNavigate('cv')}>Ver mi CV</PrimaryButton>
            <GhostButton href={site.github}>GitHub</GhostButton>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-aqua">{value.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-dim">{value.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-black/15 p-4">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-violet/20 bg-violet/10 text-violet">
          <Icon name="sparkles" size={16} />
        </span>
        <div>
          <h3 className="font-display text-sm font-semibold text-ink">Formación</h3>
          <p className="mt-1 text-xs leading-relaxed text-dim">
            <span className="text-ink">TUDAI · UNICEN</span> — Tecnicatura Universitaria en Desarrollo de
            Aplicaciones Informáticas. Formación de pregrado orientada a programación y al desarrollo de
            aplicaciones web y móviles.
          </p>
        </div>
      </div>
    </div>
  );
}
