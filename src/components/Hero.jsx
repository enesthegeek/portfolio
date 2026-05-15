import HeroAtom from './HeroAtom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroAtom />

      <div className="hero-status hero-anim" style={{ animationDelay: '100ms' }}>
        <span className="status-dot" />
        Available for freelance work
      </div>

      <p className="hero-greeting hero-anim" style={{ animationDelay: '200ms' }}>
        // Nuclear Engineer · Developer · Polyglot
      </p>

      <h1 className="hero-name hero-anim" style={{ animationDelay: '300ms' }}>
        Enes Soyturk
      </h1>
      <h2 className="hero-role hero-anim" style={{ animationDelay: '400ms' }}>
        Fullstack Developer &amp; Scientific Programmer
      </h2>

      <p className="hero-desc hero-anim" style={{ animationDelay: '500ms' }}>
        Nuclear engineer by training, developer by passion. I build production-ready
        web applications and scientific computing tools — bridging reactor physics,
        Monte Carlo simulations, and modern software engineering.
      </p>

      <div className="hero-actions hero-anim" style={{ animationDelay: '620ms' }}>
        <a href="#projects" className="btn-primary">
          View my work
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#contact" className="btn-secondary">Get in touch</a>
      </div>

      <div className="hero-socials hero-anim" style={{ animationDelay: '760ms' }}>
        <span className="hero-socials-label">find me on</span>
        {[
          { label: 'GitHub', href: 'https://github.com/enesthegeek', icon: '↗' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/enes-soyturk', icon: '↗' },
          { label: 'Twitter', href: 'https://x.com/enesthegeek', icon: '↗' },
        ].map(({ label, href, icon }) => (
          <a key={label} href={href} className="social-link">
            {label} {icon}
          </a>
        ))}
      </div>

      <div className="hero-scroll hero-anim" style={{ animationDelay: '920ms' }}>
        <span className="scroll-line" />
        scroll
      </div>
    </section>
  )
}
