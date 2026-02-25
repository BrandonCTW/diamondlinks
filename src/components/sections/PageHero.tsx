interface PageHeroProps {
  eyebrow: string
  headline: string
  gradientText?: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  dark?: boolean
}

export default function PageHero({
  eyebrow,
  headline,
  gradientText,
  description,
  primaryCta = { label: 'Get Free Analysis', href: '/request-a-quote/' },
  secondaryCta,
  dark = true,
}: PageHeroProps) {
  return (
    <section className={`relative ${dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} py-20 md:py-28 px-6 overflow-hidden`}>
      {dark && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 80% at 30% 40%, rgba(37,99,235,0.25) 0%, transparent 65%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.18]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right, transparent 49.9%, white 50%)" }}
          />
        </>
      )}

      <div className="relative max-w-4xl mx-auto text-center">
        <div className={`inline-flex items-center gap-2 ${dark ? 'bg-blue-500/10 border-blue-500/25 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'} border text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-blue-400' : 'bg-blue-500'} inline-block`} />
          {eyebrow}
        </div>

        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>
          {headline}{' '}
          {gradientText && (
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {gradientText}
            </span>
          )}
        </h1>

        <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={primaryCta.href}
            className="hero-cta-shimmer inline-flex items-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/35 text-base"
          >
            {primaryCta.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className={`${dark ? 'bg-white/8 border-white/20 text-white hover:bg-white/15' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'} border px-8 py-4 rounded-lg font-semibold transition-colors text-base`}
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
