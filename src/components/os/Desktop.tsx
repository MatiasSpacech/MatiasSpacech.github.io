import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AppId } from '../../lib/apps';
import type { Bounds, OSWindow } from '../../lib/windows';
import { withBase } from '../../lib/paths';
import AppContent from '../apps/AppContent';
import BootScreen from './BootScreen';
import CommandPalette from './CommandPalette';
import DesktopIcons from './DesktopIcons';
import DesktopWidgets from './DesktopWidgets';
import Dock from './Dock';
import MenuBar from './MenuBar';
import MobileLauncher from './MobileLauncher';
import Window from './Window';

const DEFAULT_BOUNDS: Bounds = { width: 1200, height: 700 };

const WINDOW_DEFAULTS: Record<AppId, { x: number; y: number; w: number; h: number }> = {
  inicio: { x: 176, y: 40, w: 760, h: 620 },
  proyectos: { x: 210, y: 72, w: 800, h: 544 },
  'sobre-mi': { x: 228, y: 62, w: 760, h: 556 },
  skills: { x: 246, y: 76, w: 760, h: 540 },
  experiencia: { x: 238, y: 70, w: 760, h: 548 },
  cv: { x: 258, y: 84, w: 720, h: 510 },
  contacto: { x: 246, y: 62, w: 760, h: 548 },
  terminal: { x: 300, y: 96, w: 680, h: 400 },
};

function fitWindow(win: OSWindow, bounds: Bounds): OSWindow {
  const margin = 12;
  const width = Math.min(win.w, Math.max(320, bounds.width - margin * 2));
  const height = Math.min(win.h, Math.max(240, bounds.height - margin * 2));
  const maxX = Math.max(margin, bounds.width - width - margin);
  const maxY = Math.max(margin, bounds.height - height - margin);

  return {
    ...win,
    w: width,
    h: height,
    x: Math.min(Math.max(margin, win.x), maxX),
    y: Math.min(Math.max(margin, win.y), maxY),
  };
}

export default function Desktop() {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<Bounds>(DEFAULT_BOUNDS);
  const [windows, setWindows] = useState<OSWindow[]>(() => [
    { id: 'inicio', ...WINDOW_DEFAULTS.inicio, z: 2, minimized: false, maximized: false },
  ]);
  const [activeId, setActiveId] = useState<AppId | null>('inicio');
  const [mobileApp, setMobileApp] = useState<AppId | null>(null);
  const [booting, setBooting] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem('spacech:booted', '1');
    } catch {
      // sessionStorage puede no estar disponible; la intro se muestra igual.
    }
    setBooting(false);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let alreadyBooted = false;
    try {
      alreadyBooted = sessionStorage.getItem('spacech:booted') === '1';
    } catch {
      // sin storage, mostramos la intro.
    }

    if (reduceMotion || alreadyBooted) {
      setBooting(false);
      return;
    }

    const timer = window.setTimeout(finishBoot, 1650);
    return () => window.clearTimeout(timer);
  }, [finishBoot]);

  useEffect(() => {
    setNow(new Date());
    const interval = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = workspaceRef.current;
    if (!node) return;

    const update = () => {
      setBounds({ width: node.clientWidth, height: node.clientHeight });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setWindows((current) => current.map((win) => fitWindow(win, bounds)));
  }, [bounds]);

  useEffect(() => {
    if (activeId && !windows.some((win) => win.id === activeId && !win.minimized)) {
      const next = windows
        .filter((win) => !win.minimized)
        .sort((a, b) => b.z - a.z)[0];
      setActiveId(next?.id ?? null);
    }
  }, [windows, activeId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }

      if ((event.metaKey || event.ctrlKey) && event.altKey && event.key.toLowerCase() === 's') {
        event.preventDefault();
        window.location.assign(withBase('/simple/'));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openApp = useCallback(
    (id: AppId) => {
      setWindows((current) => {
        const topZ = current.reduce((max, win) => Math.max(max, win.z), 0);
        const existing = current.find((win) => win.id === id);

        if (existing) {
          return current.map((win) =>
            win.id === id ? { ...win, minimized: false, z: topZ + 1 } : win,
          );
        }

        const nextWindow: OSWindow = {
          id,
          ...WINDOW_DEFAULTS[id],
          z: topZ + 1,
          minimized: false,
          maximized: false,
        };

        return [...current, fitWindow(nextWindow, bounds)];
      });

      setActiveId(id);
      setMobileApp(id);
      setPaletteOpen(false);
    },
    [bounds],
  );

  const focusWindow = useCallback((id: AppId) => {
    setWindows((current) => {
      const topZ = current.reduce((max, win) => Math.max(max, win.z), 0);
      return current.map((win) => (win.id === id ? { ...win, z: topZ + 1 } : win));
    });
    setActiveId(id);
  }, []);

  const closeWindow = useCallback((id: AppId) => {
    setWindows((current) => current.filter((win) => win.id !== id));
    setActiveId((current) => (current === id ? null : current));
    setMobileApp((current) => (current === id ? null : current));
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    setWindows((current) =>
      current.map((win) => (win.id === id ? { ...win, minimized: true } : win)),
    );
    setActiveId((current) => (current === id ? null : current));
  }, []);

  const maximizeWindow = useCallback((id: AppId) => {
    setWindows((current) =>
      current.map((win) => (win.id === id ? { ...win, maximized: !win.maximized } : win)),
    );
    setActiveId(id);
  }, []);

  const moveWindow = useCallback(
    (id: AppId, x: number, y: number) => {
      setWindows((current) =>
        current.map((win) => {
          if (win.id !== id) return win;
          const maxX = Math.max(12, bounds.width - win.w - 12);
          const maxY = Math.max(12, bounds.height - win.h - 12);
          return {
            ...win,
            x: Math.min(Math.max(12, x), maxX),
            y: Math.min(Math.max(12, y), maxY),
          };
        }),
      );
    },
    [bounds],
  );

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  const restartBoot = useCallback(() => {
    try {
      sessionStorage.removeItem('spacech:booted');
    } catch {
      // sin storage, igual mostramos la intro.
    }
    setBooting(true);
    setPaletteOpen(false);
    window.setTimeout(() => {
      try {
        sessionStorage.setItem('spacech:booted', '1');
      } catch {
        // noop
      }
      setBooting(false);
    }, 1650);
  }, []);

  const openIds = useMemo(() => new Set(windows.map((win) => win.id)), [windows]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-void font-sans">
      <a
        href={withBase('/simple/')}
        className="sr-only z-[200] rounded-lg bg-ink px-4 py-2 text-sm font-medium text-void focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir a la versión simple
      </a>

      <div className="wallpaper">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="starfield" />
        <div className="grid-lines" />
        <div className="noise" />
        <div className="scanlines" />
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <p className="absolute -right-6 top-24 font-display text-[14vw] font-bold leading-none tracking-tighter text-white/[0.018]">
            SPACECH
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-dvh flex-col">
        <div className="hidden min-h-0 flex-1 flex-col md:flex">
          <MenuBar now={now} onOpen={openApp} onOpenPalette={() => setPaletteOpen(true)} />

          <div ref={workspaceRef} className="relative isolate min-h-0 flex-1 overflow-hidden">
            <DesktopIcons openIds={openIds} activeId={activeId} onOpen={openApp} />
            <DesktopWidgets onOpen={openApp} />

            {windows.map((win) => (
              <Window
                key={win.id}
                win={win}
                active={activeId === win.id}
                bounds={bounds}
                onFocus={focusWindow}
                onClose={closeWindow}
                onMinimize={minimizeWindow}
                onMaximize={maximizeWindow}
                onMove={moveWindow}
              >
                <AppContent appId={win.id} onNavigate={openApp} />
              </Window>
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void/75 to-transparent" />
          </div>

          <div className="relative z-50 flex h-[78px] shrink-0 items-start justify-center">
            <Dock openIds={openIds} activeId={activeId} onOpen={openApp} />
          </div>
        </div>

        <div className="md:hidden">
          <MobileLauncher
            activeApp={mobileApp}
            onOpen={openApp}
            onBack={() => setMobileApp(null)}
            now={now}
          />
        </div>
      </div>

      {booting && <BootScreen onSkip={finishBoot} />}

      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        onOpenApp={openApp}
        onRestartBoot={restartBoot}
      />
    </div>
  );
}
