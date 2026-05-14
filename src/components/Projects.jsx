import { useInView } from '../hooks/useInView'

const projects = [
  {
    num: '01',
    type: 'Scientific Tool',
    name: 'NeutronViz — Reactor Physics Dashboard',
    desc: 'Interactive web dashboard for visualising neutron flux distributions, power profiles, and burnup calculations from OpenMC and MCNP outputs. Built for a nuclear research institute.',
    stack: ['React', 'D3.js', 'Python', 'FastAPI', 'OpenMC', 'PostgreSQL'],
    href: '#',
  },
  {
    num: '02',
    type: 'Simulation',
    name: 'MCPy — Monte Carlo Transport Pipeline',
    desc: 'Automated Python pipeline for setting up, running, and post-processing Monte Carlo neutron transport simulations. Reduced manual computation time by 60% for a reactor physics team.',
    stack: ['Python', 'NumPy', 'SciPy', 'OpenMC', 'Docker', 'Pandas'],
    href: '#',
  },
  {
    num: '03',
    type: 'SaaS',
    name: 'Fintrack — Personal Finance Dashboard',
    desc: 'Real-time budget tracking with bank sync, AI-powered spending insights, and automated reports. Built for 10k+ users with a Stripe subscription model.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Plaid API', 'Stripe', 'AWS'],
    href: '#',
  },
  {
    num: '04',
    type: 'Web App',
    name: 'LearningOS — EdTech Course Platform',
    desc: 'Video course platform with adaptive quizzes, progress tracking, and certificates. Supports multiple languages and time zones — built with an international audience in mind.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudflare R2', 'Stripe'],
    href: '#',
  },
]

export default function Projects() {
  const header = useInView()
  const list = useInView(0.08)

  return (
    <section id="projects">
      <div className="divider" />
      <div style={{ paddingTop: '100px' }}>

        <div className={`projects-header fade-up ${header.inView ? 'in-view' : ''}`}
          ref={header.ref}>
          <div>
            <p className="section-label">03 — Projects</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <a href="#contact" className="btn-secondary" style={{ flexShrink: 0 }}>
            Start a project →
          </a>
        </div>

        <div className="projects-list" ref={list.ref}>
          {projects.map((p, i) => (
            <a key={p.num} href={p.href}
              className={`project-card fade-up ${list.inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}>
              <div>
                <div className="project-meta">
                  <span className="project-num">{p.num}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="stack-tag">{t}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow">→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
