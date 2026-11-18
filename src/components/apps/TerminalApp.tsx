import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { APPS, PROJECTS, SKILL_GROUPS, type AppId } from '../../lib/apps';
import { site } from '../../lib/site';

type LineKind = 'input' | 'output' | 'success' | 'error' | 'muted';

type Line = {
  kind: LineKind;
  text: string;
};

const INITIAL_LINES: Line[] = [
  { kind: 'muted', text: 'SPACECH.OS v2.6 “Tandil” — terminal del portfolio' },
  { kind: 'output', text: 'Escribí "help" para ver los comandos disponibles.' },
];

const ALIASES: Record<string, AppId> = {
  inicio: 'inicio',
  home: 'inicio',
  proyectos: 'proyectos',
  projects: 'proyectos',
  'sobre-mi': 'sobre-mi',
  sobre: 'sobre-mi',
  about: 'sobre-mi',
  skills: 'skills',
  experiencia: 'experiencia',
  trayectoria: 'experiencia',
  cv: 'cv',
  contacto: 'contacto',
  contact: 'contacto',
  terminal: 'terminal',
};

const LINE_CLASSES: Record<LineKind, string> = {
  input: 'text-ink',
  output: 'text-dim',
  success: 'text-ok',
  error: 'text-danger',
  muted: 'text-dim/60',
};

const NEOFETCH = [
  '   ▲▲▲        matias@spacech.os',
  '  ▲   ▲       ------------------',
  ' ▲     ▲      OS: SPACECH.OS v2.6 “Tandil”',
  '             Host: Matias Spacech',
  '             Role: Desarrollador Web',
  '             Education: TUDAI · UNICEN',
  '             Stack: TypeScript, Kotlin, Angular, PHP',
  '             Location: Argentina',
  '             Shell: portfolio.sh',
  '             Uptime: siempre aprendiendo',
];

export default function TerminalApp({ onNavigate }: { onNavigate: (id: AppId) => void }) {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const node = outputRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [lines]);

  function push(kind: LineKind, text: string) {
    setLines((current) => [...current, { kind, text }]);
  }

  function execute(raw: string) {
    const command = raw.trim();
    if (!command) return;

    push('input', `matias@spacech.os:~$ ${command}`);

    const [name, ...args] = command.split(/\s+/);
    const arg = args.join(' ').toLowerCase();
    const cmd = name.toLowerCase();

    switch (cmd) {
      case 'help':
        push('output', 'Comandos disponibles:');
        push('output', '  help              esta ayuda');
        push('output', '  whoami            quién está detrás del teclado');
        push('output', '  ls                lista las apps del escritorio');
        push('output', '  open <app>        abre una app (ej: open proyectos)');
        push('output', '  projects          lista los proyectos y sus repos');
        push('output', '  skills            muestra las herramientas');
        push('output', '  neofetch          specs del sistema');
        push('output', '  github            abre mi GitHub');
        push('output', '  date              fecha y hora del sistema');
        push('output', '  echo <texto>      imprime un texto');
        push('output', '  clear             limpia la terminal');
        push('output', '  sudo hire-me      abre el canal de contacto');
        break;

      case 'whoami':
        push('output', 'Matias Spacech — Desarrollador Web.');
        push('output', 'Egresado de TUDAI (UNICEN). Construyo apps web y móviles.');
        break;

      case 'ls':
        push('output', APPS.map((app) => app.id).join('   '));
        break;

      case 'open': {
        const target = ALIASES[arg];
        if (!target) {
          push('error', `open: no existe la app "${arg || '?'}". Probá con: ${APPS.map((app) => app.id).join(', ')}`);
          break;
        }
        push('success', `Abriendo ${target}...`);
        onNavigate(target);
        break;
      }

      case 'projects':
        push('output', `${PROJECTS.length} proyectos cargados:`);
        PROJECTS.forEach((project) => {
          push('output', `  ${project.name} — ${project.stack.join(', ')}`);
          push('muted', `    ${project.repo}`);
        });
        break;

      case 'skills':
        SKILL_GROUPS.forEach((group) => {
          push('output', `${group.label}: ${group.items.join(', ')}`);
        });
        break;

      case 'neofetch':
        NEOFETCH.forEach((line) => push('output', line));
        break;

      case 'github':
        push('success', `Abriendo ${site.github} ...`);
        window.open(site.github, '_blank', 'noopener,noreferrer');
        break;

      case 'date':
        push('output', new Date().toLocaleString('es-AR'));
        break;

      case 'echo':
        push('output', args.join(' ') || '');
        break;

      case 'clear':
        setLines([]);
        return;

      case 'sudo':
        if (arg === 'hire-me' || arg === 'hire me') {
          push('success', 'Permiso concedido. Abriendo el canal de contacto...');
          onNavigate('contacto');
        } else {
          push('error', 'sudo: comando no reconocido. Probá "sudo hire-me".');
        }
        break;

      case 'exit':
        push('success', 'Sesión finalizada. Volviendo al escritorio...');
        onNavigate('inicio');
        break;

      default:
        push('error', `bash: ${name}: command not found. Escribí "help" para ver las opciones.`);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = input.trim();
      if (!value) return;
      execute(value);
      setHistory((current) => [...current, value]);
      setHistoryIndex(-1);
      setInput('');
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (history.length === 0) return;
      const next = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  }

  function runShortcut(command: string) {
    execute(command);
    setHistory((current) => [...current, command]);
    setHistoryIndex(-1);
    inputRef.current?.focus();
  }

  return (
    <div className="flex h-full min-h-[360px] flex-col bg-[#04060b] p-4 font-mono text-[11px] sm:text-xs">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-danger/80" />
          <span className="h-2 w-2 rounded-full bg-warn/80" />
          <span className="h-2 w-2 rounded-full bg-ok/80" />
          <span className="ml-2 text-[9px] uppercase tracking-[0.14em] text-dim">/bin/portfolio</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.14em] text-dim/60">zsh</span>
      </div>

      <div
        ref={outputRef}
        className="os-scroll flex-1 space-y-1 overflow-y-auto pr-1 leading-relaxed"
        aria-live="polite"
      >
        {lines.map((line, index) => (
          <p key={`${index}-${line.text}`} className={`whitespace-pre-wrap break-words ${LINE_CLASSES[line.kind]}`}>
            {line.text || '\u00A0'}
          </p>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
        <span className="shrink-0 text-aqua">matias@spacech.os</span>
        <span className="shrink-0 text-dim">:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Comando de terminal"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="min-w-0 flex-1 bg-transparent text-ink caret-aqua outline-none placeholder:text-dim/40"
          placeholder="help"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {['help', 'neofetch', 'projects', 'sudo hire-me'].map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => runShortcut(command)}
            className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] text-dim transition hover:border-aqua/30 hover:text-aqua"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
