import { useId, type SVGProps } from 'react';
import type { Accent, AppMeta, IconName } from '../../lib/apps';

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
    focusable: false,
    ...rest,
  };

  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      );
    case 'folder':
      return (
        <svg {...common}>
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <path d="M3 10h18" />
        </svg>
      );
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M4.8 20c.6-3.6 3.2-5.5 7.2-5.5s6.6 1.9 7.2 5.5" />
        </svg>
      );
    case 'chip':
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21" />
          <path d="M10.5 10.5h3v3h-3z" />
        </svg>
      );
    case 'timeline':
      return (
        <svg {...common}>
          <path d="M6 3v18" />
          <circle cx="6" cy="6.5" r="1.6" />
          <circle cx="6" cy="12" r="1.6" />
          <circle cx="6" cy="17.5" r="1.6" />
          <path d="M10 6.5h9M10 12h6.5M10 17.5h8" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <path d="M6 3h7l5 5v13H6z" />
          <path d="M13 3v5h5" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'terminal':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="m7 9 3 3-3 3M12.5 16H17" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2.1c-3.1.7-3.8-1.4-3.8-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.2a10.9 10.9 0 0 1 5.7 0c2.2-1.5 3.1-1.2 3.1-1.2.6 1.5.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.4-2.7 5.3-5.2 5.6.4.3.8 1 .8 2.1v3.2c0 .3.2.6.8.5a11.3 11.3 0 0 0-3.7-22Z" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 4.5 4.5" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...common}>
          <path d="M20 11a8 8 0 1 0-2.2 6.4" />
          <path d="M20 5v6h-6" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...common}>
          <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9z" />
          <path d="M19 16.5v3M17.5 18h3M5 3.5v2M4 4.5h2" />
        </svg>
      );
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v11" />
          <path d="m8 10.5 4 4 4-4" />
          <path d="M4 17v3h16v-3" />
        </svg>
      );
    case 'print':
      return (
        <svg {...common}>
          <path d="M7 8V3h10v5" />
          <rect x="4" y="8" width="16" height="9" rx="2" />
          <path d="M7 14h10v7H7z" />
          <path d="M17 11.5h.01" />
        </svg>
      );
    case 'external':
      return (
        <svg {...common}>
          <path d="M14 4h6v6" />
          <path d="M20 4 10 14" />
          <path d="M20 14v5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19V6a1.5 1.5 0 0 1 1.5-1.5H10" />
        </svg>
      );
    default:
      return null;
  }
}

const ACCENT_STYLES: Record<Accent, string> = {
  aqua: 'border-aqua/20 bg-aqua/10 text-aqua shadow-[0_0_30px_-14px_rgba(78,225,208,0.9)]',
  violet:
    'border-violet/25 bg-violet/10 text-violet shadow-[0_0_30px_-14px_rgba(124,92,255,0.9)]',
  magenta:
    'border-magenta/20 bg-magenta/10 text-magenta shadow-[0_0_30px_-14px_rgba(255,90,200,0.8)]',
  amber: 'border-warn/20 bg-warn/10 text-warn shadow-[0_0_30px_-14px_rgba(255,200,87,0.8)]',
};

export function AppGlyph({
  app,
  size = 'md',
  className = '',
}: {
  app: AppMeta;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const box = size === 'lg' ? 'h-14 w-14 rounded-2xl' : size === 'sm' ? 'h-9 w-9 rounded-lg' : 'h-11 w-11 rounded-xl';
  const glyph = size === 'lg' ? 26 : size === 'sm' ? 17 : 21;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border ${box} ${ACCENT_STYLES[app.accent]} ${className}`}
    >
      <Icon name={app.icon} size={glyph} />
    </span>
  );
}

export function Logo({ className = '', size = 24 }: { className?: string; size?: number }) {
  const rawId = useId();
  const id = `logo-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="5" y1="5" x2="27" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4EE1D0" />
          <stop offset="0.55" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#FF5AC8" />
        </linearGradient>
      </defs>
      <path d="M16 3 30 28H2L16 3Z" fill={`url(#${id})`} fillOpacity="0.95" />
      <path d="M16 11 23 24H9L16 11Z" fill="#05060A" />
      <circle cx="16" cy="19.4" r="1.5" fill="#EAEEF7" />
    </svg>
  );
}
