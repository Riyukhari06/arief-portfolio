type Project = {
  title: string
  category: string
  description: string
  stack: string[]
  href: string
  cta: string
}

const PROJECTS: Project[] = [
  {
    title: "D'Bikin Aja",
    category: 'Web Agency · UI/UX staff',
    description:
      'A small studio built with campus friends, providing web design and development for local clients — from landing pages to full company profile sites.',
    stack: ['React', 'TailwindCSS', 'Figma', 'Vite'],
    href: '#',
    cta: 'View Project',
  },
  {
    title: 'SAKU',
    category: 'Fintech · Edge Architecture',
    description:
      'A financial app for Indonesian SMEs, built on an edge-computing stack — Cloudflare Workers for compute, D1 for relational data, KV for fast lookups, and R2 for storage.',
    stack: ['Cloudflare Workers', 'D1', 'KV', 'R2'],
    href: '#',
    cta: 'View Project',
  },
  {
    title: 'Neura & AidChain',
    category: 'AI & Blockchain · Prototype',
    description:
      'Prototype designs built for competition submissions, exploring how AI-driven decisioning and blockchain-based aid distribution could integrate into a single product experience.',
    stack: ['Figma', 'Prototyping', 'Blockchain', 'AI'],
    href: '#',
    cta: 'View Project',
  },
  {
    title: 'Smart Aquaponic',
    category: 'Community System · Cileles, Jatinangor',
    description:
      'Operational timeline and system design for a community-run smart aquaponics program, coordinated as part of a PPK Ormawa initiative in Cileles, Jatinangor.',
    stack: ['Systems Design', 'IoT Concepts', 'Community Ops'],
    href: '#',
    cta: 'View Project',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-indigo-600">
        {project.category}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-indigo-50 px-3 py-1 font-mono text-[11px] text-indigo-700"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.href}
        className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors group-hover:text-indigo-600"
      >
        {project.cta}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-kicker mb-4">Projects &amp; Experience</p>
          <h2 className="section-heading">Selected work</h2>
          <p className="mt-4 text-base leading-relaxed text-graphite sm:text-lg">
            A mix of client work, competition prototypes, and community
            systems — spanning agency projects, edge-native fintech, and
            campus-organized initiatives.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
