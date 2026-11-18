import { Logo } from './icons';

const LINES = [
  '[ OK ] Montando /dev/curiosidad',
  '[ OK ] Cargando módulo tudai.ko',
  '[ OK ] Iniciando interfaz gráfica',
  '[ OK ] Disponible para trabajar',
];

export default function BootScreen({ onSkip }: { onSkip: () => void }) {
  return (
    <div
      className="boot-screen fixed inset-0 z-[100] overflow-hidden bg-[#03050a]"
      role="dialog"
      aria-label="Iniciando SPACECH.OS"
      aria-live="polite"
    >
      <div className="wallpaper">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="starfield" />
        <div className="grid-lines" />
        <div className="noise" />
        <div className="scanlines" />
      </div>

      <div className="relative flex min-h-dvh items-center justify-center p-5">
        <div className="fade-up w-full max-w-md">
          <div className="mb-8 flex items-center gap-3">
            <Logo size={38} />
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">SPACECH.OS</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">v2.6 “Tandil”</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">boot sequence</span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" /> kernel ok
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {LINES.map((line, index) => (
                <p
                  key={line}
                  className="boot-line font-mono text-[11px] text-dim"
                  style={{ animationDelay: `${index * 160}ms` }}
                >
                  <span className="text-ok">[ OK ]</span> {line.replace('[ OK ] ', '')}
                </p>
              ))}
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="boot-progress h-full w-full rounded-full bg-gradient-to-r from-aqua via-violet to-magenta" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] text-dim">
                iniciando interfaz<span className="blink">_</span>
              </p>
              <button
                type="button"
                onClick={onSkip}
                className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-dim transition hover:border-white/25 hover:text-ink"
              >
                Saltar intro
              </button>
            </div>
          </div>

          <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-dim/60">
            Matias Spacech · desarrollador web · Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
