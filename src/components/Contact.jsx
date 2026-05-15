import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="contact">
      <div className="divider" />
      <div className={`contact-wrap fade-up ${inView ? 'in-view' : ''}`} ref={ref}>
        <p className="section-label">05 — Contact</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="section-desc">
          Have a project in mind? I'm available for freelance contracts,
          consulting, and long-term partnerships. Let's talk.
        </p>

        <a href="mailto:enessoyturk06@gmail.com" className="contact-email" target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          enessoyturk06@gmail.com
        </a>

        <p className="contact-or">— or find me on —</p>

        <div className="contact-socials">
          {[
            { label: 'GitHub', href: 'https://github.com/enesthegeek' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/enes-soyturk' },
            { label: 'Twitter / X', href: 'https://x.com/enesthegeek' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="contact-social" target="_blank" rel="noreferrer">
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
