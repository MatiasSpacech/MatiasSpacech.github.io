import { APPS, type AppId } from '../../lib/apps';
import { AppGlyph } from './icons';

export default function DesktopIcons({
  openIds,
  activeId,
  onOpen,
}: {
  openIds: Set<AppId>;
  activeId: AppId | null;
  onOpen: (id: AppId) => void;
}) {
  return (
    <nav
      className="absolute left-4 top-4 z-10 flex flex-col gap-1 sm:left-5 sm:top-5"
      aria-label="Aplicaciones del escritorio"
    >
      {APPS.map((app) => {
        const isOpen = openIds.has(app.id);
        const isActive = activeId === app.id;

        return (
          <button
            key={app.id}
            type="button"
            onClick={() => onOpen(app.id)}
            className={`group relative flex w-[88px] flex-col items-center gap-1.5 rounded-xl px-1 py-2 text-center transition hover:bg-white/[0.055] ${
              isActive ? 'bg-white/[0.035]' : ''
            }`}
            aria-label={`Abrir ${app.label}`}
          >
            <span className="relative">
              <AppGlyph app={app} size="md" />
              {isOpen && (
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-void bg-aqua" />
              )}
            </span>
            <span className="max-w-full truncate text-[10px] font-medium leading-tight text-ink/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {app.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
