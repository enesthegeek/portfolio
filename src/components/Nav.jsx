import { useState, useEffect } from 'react'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const sections = ['about', 'skills', 'projects', 'contact']

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('')
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = sections.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }) },
      { threshold: 0.35 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={close}>
          <span className="nav-logo-main">enes.dev</span>
          <span className="nav-logo-korean">엔에스</span>
        </a>

        {/* desktop links */}
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s}>
              <a href={`#${s}`} className={active === s ? 'active' : ''}>{s}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact" className="nav-cta desktop-cta">Hire me</a>

          {/* hamburger — mobile only */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={active === s ? 'active' : ''}
                onClick={close}
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary mobile-cta" onClick={close}>
          Hire me
        </a>
      </div>

      {/* backdrop */}
      {open && <div className="mobile-backdrop" onClick={close} />}
    </>
  )
}
