import { useInView } from '../hooks/useInView'

const stats = [
  { value: '5+', label: 'years coding' },
  { value: '40+', label: 'projects shipped' },
  { value: '3.5', label: 'languages spoken' },
  { value: 'MSc', label: 'nuclear physics' },
]

const paragraphs = [
  <>
    I'm a <strong>nuclear engineer</strong> with an MSc in Nuclear Engineering (Physicists) and
    a long-standing passion for programming. Python has been my primary tool for years
    running <strong>Monte Carlo simulations</strong>, modelling neutron transport, and building
    automated workflows for reactor physics calculations.
  </>,
  <>
    Over time I expanded into fullstack web development, applying the same rigour I bring
    to engineering to every codebase I write. My edge: I can build the <strong>physics model,
    the data pipeline, and the dashboard</strong> that visualises it end to end, without
    switching teams.
  </>,
  <>
    I speak <strong>English, Turkish, Russian</strong>, and enough German to get by which
    means I collaborate comfortably across cultures and time zones. Currently open to freelance
    contracts in web development, scientific tooling, and data-heavy applications.
  </>,
]

export default function About() {
  const header = useInView()
  const text = useInView()
  const statsRef = useInView()

  return (
    <section id="about">
      <div className="divider" />
      <div style={{ paddingTop: '100px' }}>

        <div ref={header.ref}>
          <p className={`section-label fade-up ${header.inView ? 'in-view' : ''}`}>
            01 — About
          </p>
          <h2 className={`section-title fade-up ${header.inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '80ms' }}>
            Engineer first,<br />developer always
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text" ref={text.ref}>
            {paragraphs.map((content, i) => (
              <p key={i}
                className={`fade-up ${text.inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}>
                {content}
              </p>
            ))}
          </div>

          <div className="about-stats" ref={statsRef.ref}>
            {stats.map(({ value, label }, i) => (
              <div key={label}
                className={`stat-cell fade-up ${statsRef.inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
