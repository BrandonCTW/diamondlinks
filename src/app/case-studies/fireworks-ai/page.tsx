import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Case Study: Fireworks.ai — 1,100% Organic Traffic Growth | DiamondLinks',
  description:
    'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500 through strategic SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/fireworks-ai/' },
  openGraph: {
    title: 'Case Study: Fireworks.ai — 1,100% Organic Traffic Growth | DiamondLinks',
    description:
      'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500 through strategic SEO.',
    url: 'https://diamondlinks.com/case-studies/fireworks-ai/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: How Fireworks.ai Achieved 1,100% Organic Traffic Growth',
  author: {
    '@type': 'Person',
    name: 'Brandon Hopkins',
    jobTitle: 'Founder & CEO',
    url: 'https://diamondlinks.com/about/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'DiamondLinks',
    url: 'https://diamondlinks.com/',
  },
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/fireworks-ai/',
  description:
    'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Fireworks.ai', item: 'https://diamondlinks.com/case-studies/fireworks-ai/' },
  ],
}

export default function FireworksAiCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollReveal>
        {/* Article Header */}
        <section className="bg-gray-950 text-white pt-20 pb-16 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 80% at 30% 40%, rgba(37,99,235,0.25) 0%, transparent 65%)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.18]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom right, transparent 49.9%, white 50%)' }}
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies/" className="hover:text-white transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-500">Fireworks.ai</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              How Fireworks.ai Achieved 1,100% Organic Traffic Growth with DiamondLinks
            </h1>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                BH
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Brandon Hopkins</p>
                <p className="text-gray-400 text-sm">Founder &amp; CEO &middot; Mar 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Fireworks.ai is a leading company in the AI production workflow space, providing infrastructure and tools that enable developers to deploy and scale generative AI models with speed and efficiency. Operating in one of the most competitive and fast-evolving sectors in technology, Fireworks.ai needed a search presence that matched the caliber of their product. When they came to DiamondLinks in November 2023, we set out to build exactly that.
              </p>

              <p>
                This case study details how a focused, multi-channel SEO campaign transformed Fireworks.ai&apos;s organic visibility from modest to dominant, delivering a roughly 1,100% increase in organic traffic and more than 20x growth in keyword rankings within the campaign period.
              </p>

              {/* The Challenge */}
              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                When Fireworks.ai engaged DiamondLinks, their organic search performance had significant room for growth. Despite building a strong product in a high-demand market, their website was not capturing the search traffic their brand deserved. The key metrics at the start of the campaign told the story:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Domain Rating:</strong> 45, limiting their ability to compete for high-value keywords against established players in the AI space.</li>
                <li><strong className="text-gray-900">Organic Traffic:</strong> Approximately 416 visits per month, a fraction of what their competitors were capturing.</li>
                <li><strong className="text-gray-900">Organic Keywords:</strong> Only 221 keywords ranking, leaving vast segments of their target audience unreachable through search.</li>
                <li><strong className="text-gray-900">Backlink Profile:</strong> Limited referring domains (286) and a backlink profile that needed significant strengthening to support competitive rankings.</li>
              </ul>

              <p>
                The goal was clear: achieve first-page Google rankings for identified target keywords, grow organic traffic substantially, strengthen domain authority, and build a backlink profile that would sustain long-term competitiveness in the AI SaaS space.
              </p>

              {/* Our Approach */}
              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We designed a comprehensive SEO strategy built on four pillars, each reinforcing the others to create compounding results over time.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Keyword Optimization and Competitor Analysis</h3>

              <p>
                We began with an exhaustive analysis of Fireworks.ai&apos;s competitive landscape. This meant identifying the exact keywords their direct competitors were ranking for, mapping the content gaps where Fireworks.ai had no presence, and prioritizing opportunities based on search volume, ranking difficulty, and business relevance. Rather than chasing vanity keywords, we focused on terms with clear commercial intent that aligned with Fireworks.ai&apos;s product offering and buyer journey.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">On-Page SEO and Content Strategy</h3>

              <p>
                With keyword targets defined, we conducted a thorough content audit of the existing site. We identified pages that were underperforming due to thin content, poor keyword targeting, or suboptimal on-page structure. From there, we developed a content roadmap that included both the optimization of existing pages and the creation of new SEO-optimized content designed to capture traffic across every stage of the funnel. Every piece of content was built with proper heading hierarchy, internal linking, meta optimization, and natural keyword integration.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Backlink Improvement</h3>

              <p>
                A domain rating of 45 was not sufficient to compete in the AI technology space, where many established players carry domain ratings of 70 or higher. We implemented a strategic link-building campaign focused on acquiring backlinks from high-authority, topically relevant domains. We prioritized a natural anchor text mix to maintain a healthy link profile, and targeted referring domains that would send both authority signals and qualified referral traffic. Every link was earned through genuine outreach and high-quality content placement.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Technical SEO and Site Performance</h3>

              <p>
                Alongside content and link building, we ran technical SEO audits to ensure the site&apos;s foundation could support growth. This included identifying and resolving crawl issues, optimizing site speed and Core Web Vitals, improving URL structure and internal linking architecture, and ensuring proper indexation of priority pages. Technical health is often the invisible factor that separates a site that ranks from one that does not, regardless of how strong the content or link profile may be.
              </p>

              {/* The Results */}
              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The impact of the campaign was substantial and measurable across every key performance indicator Fireworks.ai set out to improve.
              </p>
            </div>

            {/* Results Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-5 my-10">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ~1,100%
                </p>
                <p className="text-gray-500 text-sm font-medium">Organic Traffic Growth</p>
                <p className="text-gray-400 text-xs mt-1">416 &rarr; 4,500 visits/mo</p>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  45 &rarr; 56
                </p>
                <p className="text-gray-500 text-sm font-medium">Domain Rating</p>
                <p className="text-gray-400 text-xs mt-1">+11 point increase</p>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  221 &rarr; 4,500
                </p>
                <p className="text-gray-500 text-sm font-medium">Organic Keywords</p>
                <p className="text-gray-400 text-xs mt-1">20x keyword growth</p>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  286 &rarr; 676
                </p>
                <p className="text-gray-500 text-sm font-medium">Referring Domains</p>
                <p className="text-gray-400 text-xs mt-1">+2.1K new backlinks</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                <strong className="text-gray-900">Organic traffic grew from approximately 416 to 4,500 monthly visits</strong>, representing roughly an 1,100% increase. This was not a temporary spike from a single viral piece. It was sustained growth built on a broadening keyword footprint and strengthened domain authority.
              </p>

              <p>
                <strong className="text-gray-900">Domain rating climbed from 45 to 56</strong>, an 11-point improvement that meaningfully expanded the range of competitive keywords Fireworks.ai could realistically target. In the AI technology space, every point of domain rating translates to access to higher-volume, higher-intent search terms.
              </p>

              <p>
                <strong className="text-gray-900">The backlink profile grew by over 2,100 new links</strong>, with referring domains increasing from 286 to 676. This was achieved through strategic, quality-focused link building rather than volume-driven tactics. The emphasis on high-authority, relevant domains ensured that each new link contributed genuine ranking power.
              </p>

              <p>
                <strong className="text-gray-900">Organic keyword rankings expanded from 221 to 4,500</strong>, a more than 20x increase. This dramatic expansion meant Fireworks.ai was now visible across a far wider range of search queries, capturing traffic from informational, navigational, and transactional keywords alike.
              </p>

              {/* Key Takeaway */}
              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                The Fireworks.ai campaign demonstrates what becomes possible when technical excellence, strategic content, and disciplined link building work together over time. There was no single silver bullet. The results came from a coordinated effort across every dimension of SEO, executed consistently and refined based on ongoing performance data.
              </p>

              <p>
                For SaaS companies operating in competitive technology markets, the lesson is straightforward: organic growth at this scale is achievable, but it requires a partner who understands both the technical foundations of SEO and the strategic nuance of competing in high-stakes search landscapes. A domain rating does not climb 11 points by accident. Organic traffic does not grow 1,100% without a deliberate, well-executed plan.
              </p>

              <p>
                At DiamondLinks, we build those plans and deliver those results. Fireworks.ai came to us with a clear goal, and together we turned it into measurable, sustained growth that continues to compound.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready for results like these?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                See how DiamondLinks can drive measurable organic growth for your business with a data-driven SEO strategy tailored to your market.
              </p>
              <Link
                href="/free-seo-audit/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
              >
                Get Your Free SEO Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
