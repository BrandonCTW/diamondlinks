import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'
import { testimonials } from '@/data/company'

export const metadata: Metadata = {
  title: 'Case Studies | DiamondLinks',
  description:
    'Explore real client results from DiamondLinks. See how our SEO, ORM, and white label campaigns delivered measurable outcomes across SaaS, healthcare, real estate, and local business.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/' },
  openGraph: {
    title: 'Case Studies | DiamondLinks',
    description:
      'Explore real client results from DiamondLinks. See how our SEO, ORM, and white label campaigns delivered measurable outcomes across SaaS, healthcare, real estate, and local business.',
    url: 'https://diamondlinks.com/case-studies/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
  ],
}

const caseStudies = [
  {
    slug: 'keyfactor',
    title: 'Keyfactor: 1,025% Organic Traffic Growth',
    industry: 'Cybersecurity',
    stat: '+1,025%',
    statLabel: 'Organic Traffic',
    excerpt: 'A cybersecurity leader went from 2,200 to 25,100 monthly visits through strategic SEO, growing top-10 keyword positions from 269 to 1,700.',
    accent: 'from-blue-500 to-blue-400',
    border: 'hover:border-blue-200',
  },
  {
    slug: 'fireworks-ai',
    title: 'Fireworks.ai: 1,100% Traffic Surge for AI SaaS',
    industry: 'SaaS / AI',
    stat: '+1,100%',
    statLabel: 'Organic Traffic',
    excerpt: 'An AI production workflow company grew from 416 to 4,500 monthly visits, with organic keywords exploding from 221 to 4,500.',
    accent: 'from-indigo-500 to-indigo-400',
    border: 'hover:border-indigo-200',
  },
  {
    slug: 'mountain-view-retreat',
    title: 'Mountain View Retreat: From Crisis to Growth',
    industry: 'Healthcare',
    stat: '118K+',
    statLabel: 'Impressions',
    excerpt: 'A struggling rehab center on the brink of closure gained 118,000+ impressions, 620+ clicks, and 3 new admissions in the first week of tracking.',
    accent: 'from-emerald-500 to-emerald-400',
    border: 'hover:border-emerald-200',
  },
  {
    slug: 'abita-view',
    title: 'Abita View: 60% to 98% Occupancy',
    industry: 'Real Estate',
    stat: '98%',
    statLabel: 'Occupancy',
    excerpt: 'A post-COVID apartment complex went from 60% to 98% occupancy through local SEO, with 206% increase in organic traffic.',
    accent: 'from-violet-500 to-violet-400',
    border: 'hover:border-violet-200',
  },
  {
    slug: 'alv-flooring',
    title: 'ALV Flooring: #1 Rankings in 26 Days',
    industry: 'Local Business',
    stat: '#1',
    statLabel: 'In 26 Days',
    excerpt: 'A family-owned flooring company outranked Home Depot locally, with a 217% keyword increase and 333% jump in sales calls.',
    accent: 'from-blue-500 to-indigo-500',
    border: 'hover:border-blue-200',
  },
  {
    slug: 'profisee',
    title: 'Profisee: 430% Organic Traffic Growth',
    industry: 'Data Management',
    stat: '+430%',
    statLabel: 'Organic Traffic',
    excerpt: 'A data management leader grew from 2,100 to 10,100 monthly visits with domain rating climbing from 41 to 58.',
    accent: 'from-indigo-500 to-violet-500',
    border: 'hover:border-indigo-200',
  },
  {
    slug: 'mannington-commercial',
    title: 'Mannington Commercial: Enterprise SEO at Scale',
    industry: 'Commercial Flooring',
    stat: '+47%',
    statLabel: 'Organic Traffic',
    excerpt: 'A leading commercial flooring provider grew traffic from 11,800 to 17,300 monthly visits with referring domains nearly tripling.',
    accent: 'from-emerald-500 to-blue-500',
    border: 'hover:border-emerald-200',
  },
  {
    slug: 'flight-providers',
    title: 'Flight Providers: 1,600% Keyword Growth',
    industry: 'Adventure Tourism',
    stat: '+1,600%',
    statLabel: 'Keywords',
    excerpt: 'A skydiving company went from 2 to 32 ranking keywords in under 4 months, with bookings increasing as early as December 2024.',
    accent: 'from-violet-500 to-blue-500',
    border: 'hover:border-violet-200',
  },
  {
    slug: 'inspect-and-track',
    title: 'Inspect & Track: SaaS Visibility Boost',
    industry: 'SaaS',
    stat: '+80%',
    statLabel: 'Organic Traffic',
    excerpt: 'An asset tracking software company grew organic traffic from 669 to 1,200 monthly visits with referring domains more than doubling.',
    accent: 'from-blue-500 to-emerald-500',
    border: 'hover:border-blue-200',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollReveal>
        <PageHero
          eyebrow="Case Studies"
          headline="Real Clients."
          gradientText="Real Results."
          description="A proven track record of measurable outcomes. See how DiamondLinks has helped businesses across SaaS, healthcare, real estate, and local markets transform their search presence."
          primaryCta={{ label: 'Get a Quote', href: '/request-a-quote/' }}
          secondaryCta={{ label: 'View Our Services', href: '/services/' }}
          dark={true}
        />

        {/* Case Study Cards */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="In-Depth Results"
              title="Explore Our Case Studies"
              subtitle="Detailed breakdowns of strategy, execution, and measurable outcomes across every industry we serve."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}/`}
                  className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md ${cs.border} transition-all overflow-hidden flex flex-col`}
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${cs.accent} flex-shrink-0`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <div className="text-right">
                        <p
                          className="text-xl font-black leading-none"
                          style={{
                            background: `linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {cs.stat}
                        </p>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide">{cs.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">{cs.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{cs.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                      Read Case Study
                      <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Cards */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Client Testimonials"
              title="What Our Clients Say"
              subtitle="Every engagement is unique, but the results speak for themselves."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-md hover:border-blue-100 transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic leading-relaxed mb-6 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p
                    className="text-lg font-bold mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {t.result}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900 font-bold">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
