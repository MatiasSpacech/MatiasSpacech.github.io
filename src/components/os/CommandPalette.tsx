import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { APPS, type AppId, type IconName } from '../../lib/apps';
import { site } from '../../lib/site';
import { withBase } from '../../lib/paths';
import { Icon } from './icons';

type Action = {
  id: string;
  label: string;
  hint: string;
  icon: IconName;
  run: () => void;
};

export default function CommandPalette({
  open,
  onClose,
  onOpenApp,
  onRestartBoot,
}: {
  open: boolean;
  onClose: () => void;
  onOpenApp: (id: AppId) => void;
  onRestartBoot: () => void;
}) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const actions = useMemo<Action[]>(() => {
    const appActions: Action[] = APPS.map((app) => ({
      id: `app-${app.id}`,
      label: app.label,
      hint: 'Abrir aplicación',
      icon: app.icon,
      run: () => onOpenApp(app.id),
    }));

    return [
      ...appActions,
      {
        id: 'simple',
        label: 'Modo simple',
        hint: 'Versión accesible, sin ventanas',
        icon: 'document',
        run: () => window.location.assign(withBase('/simple/')),
      },
      {
        id: 'cv',
        label: 'Abrir CV',
        hint: 'Versión web e imprimible',
        icon: 'document',
        run: () => window.open(withBase('/cv/'), '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'github',
        label: 'GitHub',
        hint: site.githubHandle,
        icon: 'github',
        run: () => window.open(site.github, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'restart',
        label: 'Reiniciar intro',
        hint: 'Volver a ver el boot',
        icon: 'refresh',
        run: onRestartBoot,
      },
    ];
  }, [onOpenApp, onRestartBoot]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return actions;
    return actions.filter((action) =>
      `${action.label} ${action.hint}`.toLowerCase().includes(normalized),
    );
  }, [actions, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setSelected(0);

    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (selected > filtered.length - 1) setSelected(0);
  }, [filtered.length, selected]);

  if (!open) return null;

  function run(action: Action | undefined) {
    if (!action) return;
    onClose();
    action.run();
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (filtered.length) setSelected((current) => (current + 1) % filtered.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (filtered.length) setSelected((current) => (current - 1 + filtered.length) % filtered.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      run(filtered[selected]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  }

  function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab') return;
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>('input, button, a[href]');
    if (!focusables || focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0e16]/95 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de comandos"
        onKeyDown={handlePanelKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Icon name="search" size={17} className="shrink-0 text-dim" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Buscar apps, CV, proyectos..."
            aria-label="Buscar en la paleta de comandos"
            aria-controls="palette-results"
            aria-activedescendant={filtered[selected] ? `palette-${filtered[selected].id}` : undefined}
            autoComplete="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-sm text-ink caret-aqua outline-none placeholder:text-dim/50"
          />
          <kbd className="rounded border border-white/10 bg-black/20 px-1.5 py-1 font-mono text-[9px] text-dim">Esc</kbd>
        </div>

        <div id="palette-results" role="listbox" aria-label="Resultados" className="os-scroll max-h-[340px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center font-mono text-xs text-dim">
              0 resultados. Ni el kernel encuentra eso.
            </p>
          ) : (
            filtered.map((action, index) => (
              <button
                key={action.id}
                id={`palette-${action.id}`}
                type="button"
                role="option"
                aria-selected={index === selected}
                onMouseEnter={() => setSelected(index)}
                onClick={() => run(action)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                  index === selected ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-dim">
                  <Icon name={action.icon} size={15} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-ink">{action.label}</span>
                  <span className="mt-0.5 block truncate font-mono text-[9px] text-dim">{action.hint}</span>
                </span>
                <span className="font-mono text-[9px] text-dim/40">↵</span>
              </button>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[9px] text-dim">
          <span>↑↓ navegar · ↵ abrir · esc cerrar</span>
          <span className="text-dim/50">spacech.os</span>
        </div>
      </div>
    </div>
  );
}
