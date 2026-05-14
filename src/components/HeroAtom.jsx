export default function HeroAtom() {
  return (
    <div className="hero-atom" aria-hidden="true">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* glow filter for electrons + nucleus */}
          <filter id="atom-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* soft glow for nucleus halos */}
          <filter id="halo-blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* nucleus radial gradient */}
          <radialGradient id="nucleus-grad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </radialGradient>

          {/*
            Electron motion paths — rotated ellipses centered at (250,250).
            rx=185, ry=65. Apex points computed from rotation angle:
              apex = (250 + 185·cos θ, 250 + 185·sin θ)
              opposite = (250 − 185·cos θ, 250 − 185·sin θ)
          */}
          {/* orbit 0° */}
          <path id="ep0"
            d="M 435,250 A 185,65 0 1,0 65,250 A 185,65 0 1,0 435,250" />
          {/* orbit 60°: apex=(342.5,410.2) opposite=(157.5,89.8) */}
          <path id="ep60"
            d="M 342.5,410.2 A 185,65 60 1,0 157.5,89.8 A 185,65 60 1,0 342.5,410.2" />
          {/* orbit 120°: apex=(157.5,410.2) opposite=(342.5,89.8) */}
          <path id="ep120"
            d="M 157.5,410.2 A 185,65 120 1,0 342.5,89.8 A 185,65 120 1,0 157.5,410.2" />
        </defs>

        {/* ── orbital rings ── */}
        <ellipse cx="250" cy="250" rx="185" ry="65"
          stroke="currentColor" strokeWidth="0.8" />
        <ellipse cx="250" cy="250" rx="185" ry="65"
          stroke="currentColor" strokeWidth="0.8"
          transform="rotate(60,250,250)" />
        <ellipse cx="250" cy="250" rx="185" ry="65"
          stroke="currentColor" strokeWidth="0.8"
          transform="rotate(120,250,250)" />

        {/* ── nucleus ── */}
        {/* outer energy halo */}
        <circle cx="250" cy="250" r="38" fill="currentColor" opacity="0.05" filter="url(#halo-blur)" />
        <circle cx="250" cy="250" r="26" fill="currentColor" opacity="0.08" filter="url(#halo-blur)" />
        {/* hard glow ring */}
        <circle cx="250" cy="250" r="22" fill="currentColor" opacity="0.06" />
        <circle cx="250" cy="250" r="15" fill="currentColor" opacity="0.12" />
        {/* core */}
        <circle cx="250" cy="250" r="10"
          fill="url(#nucleus-grad)"
          filter="url(#atom-glow)" />
        {/* proton / neutron cluster dots */}
        <circle cx="246" cy="247" r="3"   fill="currentColor" opacity="0.65" />
        <circle cx="255" cy="252" r="2.5" fill="currentColor" opacity="0.5"  />
        <circle cx="250" cy="243" r="2.5" fill="currentColor" opacity="0.55" />
        <circle cx="244" cy="255" r="2"   fill="currentColor" opacity="0.45" />
        <circle cx="257" cy="245" r="2"   fill="currentColor" opacity="0.4"  />

        {/* ── electrons — each follows its geometric orbit ── */}
        <circle r="5" fill="currentColor" filter="url(#atom-glow)">
          <animateMotion dur="3.4s" repeatCount="indefinite">
            <mpath href="#ep0" />
          </animateMotion>
        </circle>

        <circle r="5" fill="currentColor" filter="url(#atom-glow)">
          <animateMotion dur="5.1s" repeatCount="indefinite">
            <mpath href="#ep60" />
          </animateMotion>
        </circle>

        <circle r="5" fill="currentColor" filter="url(#atom-glow)">
          <animateMotion dur="7.3s" repeatCount="indefinite">
            <mpath href="#ep120" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  )
}
