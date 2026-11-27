import { useEffect, useState, type MouseEvent } from 'react'

const ROLES = ['Informatics Student', 'UI/UX Designer', 'Web Developer']

function useTypewriter(words: string[], typingMs = 65, pauseMs = 1400, deletingMs = 35) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingMs)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), pauseMs / 2)
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingMs)
      } else {
        setWordIndex((i: number) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingMs, pauseMs, deletingMs])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  const scrollToProjects = (): void => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-16"
    >
      {/* subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.35] mask-image-[radial-gradient(ellipse_at_top,_black,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: intro copy */}
        <div className="animate-fadeUp">
          <p className="section-kicker mb-5">Portfolio / Bandung, Indonesia</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Arief Riyukhari
          </h1>
          <div className="mt-4 flex h-8 items-center font-mono text-lg text-indigo-600 sm:text-xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-indigo-600" />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
            Building interfaces and systems end-to-end — from Figma frames to
            edge-deployed backends. Currently studying Informatics while
            leading a student cohort and co-running a small web agency on the
            side.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded-full bg-indigo-600 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/30"
            >
              View My Projects
            </button>
            <a
              href="#contact"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-xs uppercase tracking-[0.15em] text-graphite underline decoration-line underline-offset-8 transition-colors hover:text-indigo-600 hover:decoration-indigo-600"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: signature "edge node" status card + avatar placeholder */}
        <div className="relative mx-auto w-full max-w-sm animate-fadeUp [animation-delay:150ms]">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-xl shadow-slate-900/5">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-graphite">
                node--status
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>

            {/* Avatar placeholder */}
            <img
              src={`${import.meta.env.BASE_URL}assets/images/saranio-croped.png`}
              alt="Arief Riyukhari"
              className="my-6 aspect-[4/5] w-full rounded-xl object-cover"
            />

            <dl className="space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <dt className="text-graphite">region</dt>
                <dd className="text-ink">bdg-id</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-graphite">role</dt>
                <dd className="text-ink">Mahasiswa · if24</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-graphite">stack</dt>
                <dd className="text-ink">react · nest · figma</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-graphite">uptime</dt>
                <dd className="text-ink">always shipping</dd>
              </div>
            </dl>
          </div>
          {/* accent chip */}
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-ink px-4 py-3 font-mono text-[11px] text-signal shadow-lg sm:block">
            99ms cold start*
          </div>
        </div>
      </div>
    </section>
  )
}
