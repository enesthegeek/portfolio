import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We align on goals, scope, and success criteria. I ask the right questions early so nothing is ambiguous later.',
  },
  {
    num: '02',
    title: 'Design & Plan',
    desc: 'Architecture decisions, wireframes if needed, tech stack confirmation. A shared blueprint before writing a line of code.',
  },
  {
    num: '03',
    title: 'Build & Iterate',
    desc: 'Weekly deliverables, async updates, and a staging environment from day one. You always know where things stand.',
  },
  {
    num: '04',
    title: 'Ship & Support',
    desc: 'Clean handover with documentation. I stick around for post-launch support and can continue on a retainer.',
  },
]

export default function Process() {
  const header = useInView()
  const grid = useInView(0.1)

  return (
    <section id="process">
      <div className="divider" />
      <div style={{ paddingTop: '100px' }}>

        <div ref={header.ref}>
          <p className={`section-label fade-up ${header.inView ? 'in-view' : ''}`}>
            04 — Process
          </p>
          <h2 className={`section-title fade-up ${header.inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '80ms' }}>
            How I work
          </h2>
          <p className={`section-desc fade-up ${header.inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '160ms' }}>
            A lightweight, transparent process designed to keep projects on track
            and clients in the loop.
          </p>
        </div>

        <div className="process-grid" ref={grid.ref}>
          {steps.map(({ num, title, desc }, i) => (
            <div key={num}
              className={`process-step fade-up ${grid.inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="process-num">{num}</div>
              <div className="process-title">{title}</div>
              <p className="process-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
