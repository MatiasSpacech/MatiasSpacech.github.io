import type { ReactNode } from 'react';
import type { Accent } from '../../lib/apps';

export const accentText: Record<Accent, string> = {
  aqua: 'text-aqua',
  violet: 'text-lilac',
  magenta: 'text-magenta',
  amber: 'text-warn',
};

export const accentBorder: Record<Accent, string> = {
  aqua: 'border-aqua/25',
  violet: 'border-violet/25',
  magenta: 'border-magenta/25',
  amber: 'border-warn/25',
};

export const accentBg: Record<Accent, string> = {
  aqua: 'bg-aqua',
  violet: 'bg-violet',
  magenta: 'bg-magenta',
  amber: 'bg-warn',
};

export function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.18em] text-dim ${className}`}>
      {children}
    </p>
  );
}

export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-dim ${className}`}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-void transition hover:bg-white focus-visible:outline-offset-4 ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  href,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/[0.07] ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-aqua underline-offset-4 transition hover:underline"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
