const FACTS = [
  { label: 'Based in', value: 'Bandung, Indonesia' },
  { label: 'Studying', value: 'Informatics Engineering' },
  { label: 'Leads', value: 'IF\'24 Cohort ("Lovelace")' },
  { label: 'Lead', value: "Department of Student Resource Development" },
]

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-mist py-24 sm:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-4">About</p>
            <h2 className="section-heading">
              Design and engineering,
              <br className="hidden sm:block" /> handled by the same person.
            </h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-l-2 border-indigo-200 pl-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-graphite">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-graphite sm:text-lg">
            <p>
              I'm Arief Riyukhari — an Informatics Engineering student who
              moves comfortably between designing an interface and shipping
              the backend that powers it. I got into web development through
              wanting my own designs to actually work, not just look good in
              a Figma frame, and that instinct still shapes how I build today.
            </p>
            <p>
              My work spans the full stack: React and TypeScript on the
              frontend, NestJS and Node.js underneath, and increasingly,
              edge-first architecture using Cloudflare Workers, D1, KV, and
              R2 — infrastructure that lets small ideas run at production
              speed without a traditional server bill attached. I like that
              constraint. It forces cleaner design decisions everywhere else.
            </p>
            <p>
              Outside of code, I lead my cohort of 2024 Informatics students
              as class representative and take on coordination work within
              HIMATIF, including campus-to-community programs like PPK
              Ormawa. Alongside campus friends, I also co-run{' '}
              <span className="font-medium text-ink">D'Bikin Aja</span>, a
              small web design and development studio — proof that I can turn
              client briefs into shipped products, not just class projects.
            </p>
            <p>
              What ties all of this together is adaptability: I've picked up
              new stacks under academic deadlines, redesigned interfaces
              mid-project when user feedback demanded it, and switched
              between "designer hat" and "engineer hat" within the same
              afternoon. I'm looking for opportunities that keep asking that
              of me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
