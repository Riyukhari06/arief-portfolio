import { useState, type FormEvent } from 'react'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Riyukhari06',
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arief-riyukhari',
    icon: (
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.15 3.5 3.3 4.36 3.3 5.42c0 1.05.83 1.92 1.92 1.92h.02c1.12 0 1.98-.87 1.98-1.92C7.22 4.36 6.37 3.5 5.25 3.5ZM20.5 20.5H17.1v-6.3c0-1.58-.57-2.66-1.98-2.66-1.08 0-1.72.72-2 1.42-.1.25-.13.6-.13.96v6.58H9.62s.05-10.7 0-11.8h3.38v1.67c.45-.7 1.25-1.68 3.04-1.68 2.22 0 3.88 1.45 3.88 4.56v7.25Z" />
    ),
  },
  {
    label: 'Email',
    href: 'mailto:arief.riyukhari@example.com',
    icon: (
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm0 2.24V18h16V8.24l-8 6-8-6Z" />
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // No backend wired up — opens the user's email client pre-filled.
    // Swap this for a real submission handler (e.g. Formspree, a Worker
    // endpoint, or an API route) when you're ready to go live.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:arief.riyukhari@example.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="section-kicker mb-4">Contact</p>
            <h2 className="section-heading">Let's work together</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-graphite sm:text-lg">
              Open to internships, freelance projects, and collaborations —
              whether it's frontend, full-stack, or a UI/UX pass on something
              you're already building.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    {social.icon}
                  </svg>
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Download Resume
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M12 3v10.59l3.3-3.3 1.4 1.42L12 17.4l-4.7-4.69 1.4-1.42 3.3 3.3V3h2ZM5 19h14v2H5v-2Z" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.15em] text-graphite">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.15em] text-graphite">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.15em] text-graphite">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you building?"
                className="mt-2 w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-indigo-700 sm:w-auto"
            >
              Send Message
            </button>
            {status === 'sent' && (
              <p className="font-mono text-xs text-emerald-600">
                Opening your email client — thanks for reaching out.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="container-page mt-20 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-graphite sm:flex-row">
        <p>© {new Date().getFullYear()} Arief Riyukhari.</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em]">
          Built with React, Vite &amp; TailwindCSS
        </p>
      </div>
    </section>
  )
}
