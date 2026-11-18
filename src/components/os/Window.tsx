import { useRef, type MouseEvent, type PointerEvent, type ReactNode } from 'react';
import { APP_BY_ID, type AppId } from '../../lib/apps';
import type { Bounds, OSWindow } from '../../lib/windows';
import { Icon } from './icons';

type Props = {
  win: OSWindow;
  active: boolean;
  bounds: Bounds;
  onFocus: (id: AppId) => void;
  onClose: (id: AppId) => void;
  onMinimize: (id: AppId) => void;
  onMaximize: (id: AppId) => void;
  onMove: (id: AppId, x: number, y: number) => void;
  children: ReactNode;
};

export default function Window({
  win,
  active,
  bounds,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onMove,
  children,
}: Props) {
  const app = APP_BY_ID[win.id];
  const drag = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const width = win.maximized ? Math.max(320, bounds.width - 20) : win.w;
  const height = win.maximized ? Math.max(240, bounds.height - 20) : win.h;

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button')) return;

    onFocus(win.id);
    if (win.maximized) return;

    drag.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: win.x,
      originY: win.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const deltaX = event.clientX - drag.current.startX;
    const deltaY = event.clientY - drag.current.startY;
    onMove(win.id, drag.current.originX + deltaX, drag.current.originY + deltaY);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleDoubleClick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest('button')) return;
    onMaximize(win.id);
  }

  return (
    <section
      className={`absolute flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[14px] border bg-[#080b12] window-shadow ${
        active ? 'border-aqua/25 ring-1 ring-aqua/10' : 'border-white/[0.13]'
      } ${win.minimized ? 'hidden' : ''}`}
      style={{
        left: win.maximized ? 10 : win.x,
        top: win.maximized ? 10 : win.y,
        width,
        height,
        zIndex: win.z + 20,
      }}
      role="dialog"
      aria-modal="false"
      aria-label={`Ventana ${app.title}`}
      onPointerDown={() => onFocus(win.id)}
    >
      {active && (
        <div
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-aqua/60 to-transparent"
          aria-hidden="true"
        />
      )}

      <div
        className={`flex h-10 shrink-0 items-center gap-2 border-b border-white/10 pl-3 pr-1.5 ${
          win.maximized ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
        style={{ touchAction: 'none' }}
      >
        <div className="pointer-events-none flex min-w-0 flex-1 items-center gap-2">
          <Icon name={app.icon} size={13} className="shrink-0 text-dim" />
          <span className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
            {app.title}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onClick={() => onMinimize(win.id)}
            aria-label={`Minimizar ${app.title}`}
            title="Minimizar"
            className="grid h-6 w-6 place-items-center rounded-md text-dim transition hover:bg-warn/10 hover:text-warn"
          >
            <span className="h-px w-2.5 bg-current" />
          </button>
          <button
            type="button"
            onClick={() => onMaximize(win.id)}
            aria-label={`${win.maximized ? 'Restaurar' : 'Maximizar'} ${app.title}`}
            title={win.maximized ? 'Restaurar' : 'Maximizar'}
            className="grid h-6 w-6 place-items-center rounded-md text-dim transition hover:bg-ok/10 hover:text-ok"
          >
            {win.maximized ? (
              <span className="relative h-2.5 w-2.5">
                <span className="absolute left-0 top-0 h-2 w-2 border border-current" />
                <span className="absolute bottom-0 right-0 h-2 w-2 border border-current bg-[#080b12]" />
              </span>
            ) : (
              <span className="h-2 w-2 border border-current" />
            )}
          </button>
          <button
            type="button"
            onClick={() => onClose(win.id)}
            aria-label={`Cerrar ${app.title}`}
            title="Cerrar"
            className="grid h-6 w-6 place-items-center rounded-md text-dim transition hover:bg-danger/10 hover:text-danger"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
              <path
                d="M2.5 2.5l7 7M9.5 2.5l-7 7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="os-scroll min-h-0 flex-1 overflow-y-auto">{children}</div>
    </section>
  );
}
