import { useInView } from '../hooks/useInView'

const groups = [
  {
    icon: '⬡',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    icon: '◈',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: '◎',
    title: 'Scientific Python',
    tags: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  {
    icon: '⚛',
    title: 'Nuclear & Simulation',
    tags: ['Monte Carlo', 'OpenMC', 'MCNP', 'SERPENT', 'Reactor Physics', 'Neutronics'],
  },
  {
    icon: '◻',
    title: 'Infrastructure & APIs',
    tags: ['AWS', 'Docker', 'Vercel', 'REST', 'GraphQL', 'GitHub Actions'],
  },
  {
    icon: '◐',
    title: 'Human Languages',
    tags: ['English', 'Turkish', 'Russian', 'German (basic)'],
  },
]

export default function Skills() {
  const header = useInView()
  const grid = useInView(0.08)

  return (
    <section id="skills">
      <div className="divider" />
      <div style={{ paddingTop: '100px' }}>

        <div ref={header.ref}>
          <p className={`section-label fade-up ${header.inView ? 'in-view' : ''}`}>
            02 — Skills
          </p>
          <h2 className={`section-title fade-up ${header.inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '80ms' }}>
            Tech stack
          </h2>
          <p className={`section-desc fade-up ${header.inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '160ms' }}>
            From neutron transport to React components — tools I use to solve real problems.
          </p>
        </div>

        <div className="skills-grid" ref={grid.ref}>
          {groups.map(({ icon, title, tags }, i) => (
            <div key={title}
              className={`skill-group fade-up ${grid.inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 75}ms` }}>
              <div className="skill-group-icon">{icon}</div>
              <div className="skill-group-title">{title}</div>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
