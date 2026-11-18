import { useState, type FormEvent } from 'react';
import { site } from '../../lib/site';
import { GhostButton, PrimaryButton, SectionLabel } from './ui';
import { Icon } from '../os/icons';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactApp() {
  const endpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;

    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="p-6 sm:p-8">
      <SectionLabel>~/contacto</SectionLabel>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Hablemos.</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
        Estoy abierto a oportunidades de desarrollo web y móvil, proyectos freelance y colaboraciones.
        Contame qué tenés en mente.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_210px]">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          {status === 'success' ? (
            <div className="flex min-h-[210px] flex-col items-start justify-center">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-ok/25 bg-ok/10 text-ok">
                <Icon name="mail" size={20} />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">Mensaje encolado.</h3>
              <p className="mt-1 text-sm text-dim">Gracias por escribir. Te respondo a la brevedad.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-aqua"
              >
                Enviar otro →
              </button>
            </div>
          ) : endpoint ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Nombre</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-dim/40 focus:border-aqua/50"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-dim/40 focus:border-aqua/50"
                    placeholder="vos@email.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Mensaje</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-dim/40 focus:border-aqua/50"
                  placeholder="Contame sobre el proyecto, el rol o la idea..."
                />
              </label>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="subject" value="Nuevo mensaje desde SPACECH.OS" />
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-void transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </button>
                <p className="font-mono text-[9px] text-dim/60">Sin cookies. Solo lo necesario para responderte.</p>
              </div>
              {status === 'error' && (
                <p role="alert" className="font-mono text-[10px] text-danger">
                  No se pudo enviar. Probá de nuevo o escribime por GitHub.
                </p>
              )}
            </form>
          ) : (
            <div className="flex min-h-[210px] flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">Canal directo</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">Escribime por GitHub.</h3>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-dim">
                Es la forma más rápida de contactarme mientras termino de configurar el formulario del sitio.
                Respondo a la brevedad.
              </p>
              <div className="mt-4">
                <PrimaryButton href={site.github}>
                  <Icon name="github" size={16} /> Abrir GitHub
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Disponibilidad</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-ok">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" />
              {site.availability}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-dim">Web · Mobile · Freelance</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Ubicación</p>
            <p className="mt-2 text-xs text-ink">{site.location}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-dim">Remoto, con horario de Argentina.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">Redes</p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-xs text-ink transition hover:text-aqua"
            >
              <Icon name="github" size={14} /> {site.githubHandle} ↗
            </a>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="mt-2 flex items-center gap-2 text-xs text-ink transition hover:text-aqua"
              >
                <Icon name="mail" size={14} /> Email
              </a>
            )}
            <div className="mt-4">
              <GhostButton href={site.github} className="w-full px-2 py-2 text-xs">
                Contactar
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
