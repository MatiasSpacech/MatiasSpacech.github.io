import { APP_BY_ID, APPS, type AppId } from '../../lib/apps';
import { site } from '../../lib/site';
import { withBase } from '../../lib/paths';
import AppContent from '../apps/AppContent';
import { AppGlyph, Icon, Logo } from './icons';

function StatusBar({ now }: { now: Date | null }) {
  const time = now
    ? new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(now)
    : '--:--';

  return (
    <div className="flex items-center justify-between px-1 pb-2 pt-1 font-mono text-[10px] text-ink">
      <span suppressHydrationWarning>{time}</span>
      <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-dim">
        <Logo size={12} /> spacech.os
      </span>
      <span className="flex items-center gap-1" aria-label="Señal y batería">
        <span className="flex items-end gap-[2px]">
          <span className="h-1 w-[2px] rounded-sm bg-ink/80" />
          <span className="h-1.5 w-[2px] rounded-sm bg-ink/80" />
          <span className="h-2 w-[2px] rounded-sm bg-ink/80" />
          <span className="h-2.5 w-[2px] rounded-sm bg-ink/80" />
        </span>
        <span className="ml-1 h-2.5 w-4 rounded-[2px] border border-ink/50 p-[1px]">
          <span className="block h-full w-2/3 rounded-[1px] bg-ok/80" />
        </span>
      </span>
    </div>
  );
}

export default function MobileLauncher({
  activeApp,
  onOpen,
  onBack,
  now,
}: {
  activeApp: AppId | null;
  onOpen: (id: AppId) => void;
  onBack: () => void;
  now: Date | null;
}) {
  const app = activeApp ? APP_BY_ID[activeApp] : null;

  if (app) {
    return (
      <div className="relative flex h-dvh flex-col bg-void">
        <div className="wallpaper">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="starfield" />
          <div className="noise" />
        </div>

        <div className="relative z-10 flex h-dvh flex-col">
          <div className="border-b border-white/10 bg-black/25 px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-xl">
            <StatusBar now={now} />
            <div className="flex items-center justify-between gap-3 py-1.5">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-dim transition hover:text-ink"
              >
                <span aria-hidden="true">←</span> Inicio
              </button>
              <div className="flex min-w-0 items-center gap-1.5">
                <Icon name={app.icon} size={13} className="shrink-0 text-dim" />
                <span className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-dim">{app.title}</span>
              </div>
              <span className="w-[64px]" aria-hidden="true" />
            </div>
          </div>

          <div className="os-scroll flex-1 overflow-y-auto">
            <AppContent appId={app.id} onNavigate={onOpen} />
          </div>

          <div className="flex justify-center pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
            <span className="h-1 w-28 rounded-full bg-white/25" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-dvh overflow-hidden">
      <div className="wallpaper">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="starfield" />
        <div className="grid-lines" />
        <div className="noise" />
      </div>

      <div className="os-scroll relative z-10 flex h-dvh flex-col overflow-y-auto px-5 pb-8 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <StatusBar now={now} />

        <div className="fade-up mt-7 flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-aqua/30 via-violet/20 to-magenta/25 blur-lg" />
            <img
              src={withBase(site.avatar)}
              alt="Matias Spacech"
              width="460"
              height="460"
              className="relative h-16 w-16 rounded-2xl border border-white/15 object-cover"
            />
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">SPACECH.OS v2.6</p>
            <h1 className="mt-1 font-display text-[34px] font-semibold leading-[0.92] tracking-tight">
              Matias <span className="text-gradient">Spacech</span>
            </h1>
            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
              Desarrollador Web · TUDAI
            </p>
          </div>
        </div>

        <p className="mt-4 max-w-md text-[13px] leading-relaxed text-dim">
          Interfaces rápidas, accesibles y con personalidad. Aplicaciones web y móviles de punta a punta.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ok/20 bg-ok/[0.07] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ok">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" /> Disponible
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] text-dim">
            Argentina
          </span>
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => onOpen('proyectos')}
            className="flex-1 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-void transition active:scale-[0.98]"
          >
            Ver proyectos
          </button>
          <button
            type="button"
            onClick={() => onOpen('contacto')}
            className="flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-ink transition active:scale-[0.98]"
          >
            Contacto
          </button>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">Aplicaciones</p>
            <span className="font-mono text-[9px] text-dim/50">{APPS.length}</span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {APPS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpen(item.id)}
                className="group flex min-w-0 flex-col items-center gap-1.5 rounded-2xl px-1 py-2 transition active:scale-95 active:bg-white/[0.05]"
              >
                <AppGlyph app={item} size="md" />
                <span className="max-w-full truncate text-[9px] text-ink/85">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-dim">Modo simple</p>
              <a
                href={withBase('/simple/')}
                className="mt-0.5 inline-flex items-center gap-1 font-mono text-[10px] text-ink"
              >
                Ver versión accesible <span aria-hidden="true">→</span>
              </a>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-dim"
              aria-label="GitHub de Matias"
            >
              <Icon name="github" size={17} />
            </a>
          </div>
          <p className="mt-3 text-center font-mono text-[8px] uppercase tracking-[0.16em] text-dim/50">
            SPACECH.OS · construido en Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
