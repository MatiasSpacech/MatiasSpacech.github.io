import { APPS, type AppId } from '../../lib/apps';
import { site } from '../../lib/site';
import { Icon, Logo } from './icons';

const NAV: AppId[] = ['inicio', 'proyectos', 'sobre-mi', 'skills', 'contacto'];

export default function MenuBar({
  now,
  onOpen,
  onOpenPalette,
}: {
  now: Date | null;
  onOpen: (id: AppId) => void;
  onOpenPalette: () => void;
}) {
  const time = now
    ? new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(now)
    : '--:--';
  const date = now
    ? new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: '2-digit', month: 'short' })
        .format(now)
        .replace(/\./g, '')
    : '';

  return (
    <header className="relative z-40 flex h-10 shrink-0 items-center justify-between border-b border-white/10 bg-black/25 px-3 backdrop-blur-xl sm:px-4">
      <div className="flex min-w-0 items-center gap-1 sm:gap-3">
        <button
          type="button"
          onClick={() => onOpen('inicio')}
          className="flex items-center gap-2 rounded-md px-1 py-1 transition hover:bg-white/[0.06]"
          aria-label="spacech.os — ir al inicio"
        >
          <Logo size={16} />
          <span className="font-display text-[12px] font-semibold tracking-tight">spacech.os</span>
        </button>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Aplicaciones">
          {NAV.map((id) => {
            const app = APPS.find((item) => item.id === id);
            if (!app) return null;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onOpen(id)}
                className="rounded-md px-2 py-1 text-[11px] text-dim transition hover:bg-white/[0.06] hover:text-ink"
              >
                {app.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={onOpenPalette}
          className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-dim transition hover:border-white/20 hover:text-ink sm:flex"
          title="Buscar (Ctrl/Cmd + K)"
        >
          <Icon name="search" size={12} />
          <span>Buscar</span>
          <kbd className="rounded border border-white/10 bg-black/20 px-1 py-0.5 font-mono text-[8px] text-dim">
            ⌘K
          </kbd>
        </button>

        <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-dim lg:flex">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" />
          {site.availability}
        </span>

        <div className="text-right font-mono leading-none">
          <p className="text-[11px] tracking-wide text-ink" suppressHydrationWarning>
            {time}
          </p>
          <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-dim" suppressHydrationWarning>
            {date}
          </p>
        </div>
      </div>
    </header>
  );
}
