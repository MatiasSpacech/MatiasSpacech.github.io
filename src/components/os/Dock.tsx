import { APPS, type AppId } from '../../lib/apps';
import { site } from '../../lib/site';
import { withBase } from '../../lib/paths';
import { AppGlyph, Icon } from './icons';

export default function Dock({
  openIds,
  activeId,
  onOpen,
}: {
  openIds: Set<AppId>;
  activeId: AppId | null;
  onOpen: (id: AppId) => void;
}) {
  return (
    <div
      className="flex items-end gap-1 rounded-[22px] border border-white/[0.13] bg-[#0b0e15]/70 px-2.5 py-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
      role="toolbar"
      aria-label="Dock de aplicaciones"
    >
      {APPS.map((app) => {
        const isOpen = openIds.has(app.id);

        return (
          <button
            key={app.id}
            type="button"
            onClick={() => onOpen(app.id)}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl transition duration-150 hover:-translate-y-1.5 hover:bg-white/[0.06]"
            aria-label={`Abrir ${app.label}`}
          >
            <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f17]/95 px-2 py-1 font-mono text-[9px] text-ink opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {app.label}
            </span>
            <AppGlyph app={app} size="md" />
            <span
              className={`absolute -bottom-1 h-1 w-1 rounded-full transition ${
                isOpen ? (activeId === app.id ? 'bg-aqua shadow-[0_0_8px_rgba(78,225,208,0.9)]' : 'bg-white/40') : 'bg-transparent'
              }`}
            />
          </button>
        );
      })}

      <span className="mx-1 mb-2 h-8 w-px bg-white/10" aria-hidden="true" />

      <a
        href={site.github}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-dim transition duration-150 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:text-ink"
        aria-label="Abrir GitHub de Matias"
      >
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f17]/95 px-2 py-1 font-mono text-[9px] text-ink opacity-0 shadow-xl transition group-hover:opacity-100">
          GitHub
        </span>
        <Icon name="github" size={21} />
      </a>

      <a
        href={withBase('/simple/')}
        className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-dim transition duration-150 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:text-ink"
        aria-label="Abrir versión simple del portfolio"
      >
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f17]/95 px-2 py-1 font-mono text-[9px] text-ink opacity-0 shadow-xl transition group-hover:opacity-100">
          Modo simple
        </span>
        <Icon name="document" size={20} />
      </a>
    </div>
  );
}
