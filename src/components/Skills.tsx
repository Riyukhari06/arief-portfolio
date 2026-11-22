type SkillGroup = {
  label: string
  items: string[]
}

const GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
  },
  {
    label: 'Backend & Runtime',
    items: ['Node.js', 'NestJS', 'Assembly'],
  },
  {
    label: 'Edge & Infrastructure',
    items: ['Cloudflare Workers', 'D1 / KV / R2', 'Edge Computing'],
  },
  {
    label: 'Design',
    items: ['Figma', 'Design Systems', 'Prototyping'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-mist py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-kicker mb-4">Skills &amp; Tech Stack</p>
          <h2 className="section-heading">Tools I reach for</h2>
          <p className="mt-4 text-base leading-relaxed text-graphite sm:text-lg">
            A stack chosen for shipping fast without giving up control over
            how things run underneath.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.label} className="bg-white p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-indigo-600">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
