import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Profisee Case Study: 430% Organic Traffic Growth | DiamondLinks',
  description:
    'How DiamondLinks helped Profisee achieve a 430% increase in organic traffic, grow domain rating from 41 to 58, and expand organic keywords from 1,600 to 5,400 through strategic SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/profisee/' },
  openGraph: {
    title: 'Profisee Case Study: 430% Organic Traffic Growth | DiamondLinks',
    description:
      'How DiamondLinks helped Profisee achieve a 430% increase in organic traffic, grow domain rating from 41 to 58, and expand organic keywords from 1,600 to 5,400 through strategic SEO.',
    url: 'https://diamondlinks.com/case-studies/profisee/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Profisee Case Study: 430% Organic Traffic Growth Through Strategic SEO',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/profisee/',
  description:
    'How DiamondLinks helped Profisee achieve a 430% increase in organic traffic, grow domain rating from 41 to 58, and expand organic keywords from 1,600 to 5,400 through strategic SEO.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Profisee', item: 'https://diamondlinks.com/case-studies/profisee/' },
  ],
}

export default function ProfiseeCaseStudyPage() {
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
              <span className="text-gray-500">Profisee</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              How Profisee Achieved 430% Organic Traffic Growth with Strategic SEO
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
                Profisee is a leading company in the data management industry, providing master data management solutions that help enterprises unlock the value of their data. When they came to DiamondLinks in September 2018, they had a solid product and a growing reputation in the market, but their organic search presence was not keeping pace with their ambitions. They needed a partner who could translate their domain expertise into measurable search visibility.
              </p>

              <p>
                This case study details how DiamondLinks developed and executed a comprehensive SEO strategy that transformed Profisee&apos;s organic performance, driving a 430% increase in monthly organic traffic and establishing their website as an authoritative resource in the data management space.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                When our engagement began, Profisee&apos;s organic search metrics reflected a company that had not yet invested heavily in SEO. Their domain rating sat at 41, a respectable but unremarkable score for a technology company competing against well-established players in the data management market. Monthly organic traffic hovered around 2,100 visits, and the site ranked for roughly 1,600 organic keywords, with only 102 of those landing in the top 10 search results.
              </p>

              <p>
                The core challenge was straightforward but demanding: Profisee needed to increase organic keyword rankings and organic traffic to enhance their online presence and amplify business expansion. They were competing against enterprise software companies with deep content libraries and extensive backlink profiles. Breaking through required a disciplined, multi-channel SEO strategy that addressed technical foundations, content gaps, and off-page authority simultaneously.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We built Profisee&apos;s SEO campaign around four interconnected pillars, each designed to reinforce the others and compound results over time.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Keyword Optimization and Competitor Analysis</h3>

              <p>
                We began with an exhaustive competitive analysis of the data management search landscape. This involved mapping the keyword portfolios of Profisee&apos;s top competitors, identifying the terms driving the most qualified traffic in the industry, and pinpointing content gaps where Profisee had expertise but no search visibility. The result was a prioritized keyword roadmap that targeted both high-volume head terms and long-tail queries with strong commercial intent.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">On-Page SEO and Content Strategy</h3>

              <p>
                With our keyword roadmap in hand, we conducted a thorough content audit of the existing Profisee website. We identified pages with untapped ranking potential that could be optimized with improved title tags, meta descriptions, header structure, and internal linking. Beyond optimizing existing content, we developed a publishing calendar of new SEO-optimized pages and articles designed to capture search demand across the full buyer journey, from awareness-stage educational content about data management concepts to consideration-stage comparisons and solution-oriented landing pages.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Backlink Improvement</h3>

              <p>
                Building Profisee&apos;s off-page authority was critical to competing against larger incumbents. We implemented a backlink acquisition strategy focused on earning links from high-authority domains in the technology and enterprise software space. Every link was placed with a natural anchor text mix that reinforced Profisee&apos;s target keyword clusters without triggering over-optimization signals. The goal was not just volume but relevance and quality, building a backlink profile that search engines would recognize as a genuine marker of authority.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Technical SEO and Site Performance</h3>

              <p>
                We conducted regular technical SEO audits throughout the engagement, addressing crawlability issues, fixing broken links and redirect chains, optimizing site speed, and ensuring the site&apos;s architecture made it easy for search engines to discover and index all of Profisee&apos;s content. These technical improvements created the foundation that allowed our content and backlink efforts to deliver their full impact.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The combined impact of these efforts produced results that exceeded expectations across every key metric.
              </p>

              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Domain Rating</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    41 &rarr; 58
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Organic Traffic</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    430% Increase
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Organic Keywords</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    1,600 &rarr; 5,400
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Top 10 Rankings</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    102 &rarr; 649
                  </p>
                </div>
              </div>

              <p>
                Profisee&apos;s domain rating climbed from 41 to 58, reflecting the substantial growth in their site&apos;s authority. The backlink profile expanded by 1,294 new links, and referring domains grew from 360 to over 1,700, nearly a fivefold increase in the number of unique websites linking to Profisee.
              </p>

              <p>
                Organic traffic surged from approximately 2,100 monthly visits to over 10,100, a 430% increase that translated directly into more qualified leads entering Profisee&apos;s sales pipeline. The site&apos;s organic keyword footprint expanded from 1,600 to 5,400 tracked keywords, giving Profisee visibility across a much broader range of search queries relevant to their products and market.
              </p>

              <p>
                Perhaps most importantly, the number of keywords ranking in the top 10 positions grew from 102 to 649. These are the positions that drive the vast majority of organic clicks, and this sixfold increase meant that Profisee was not just appearing in search results but appearing where it mattered most.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                Profisee&apos;s results demonstrate what happens when a technically sound product is paired with a disciplined, data-driven SEO strategy. There was no single tactic responsible for the outcome. The growth was the result of keyword research, content development, backlink building, and technical optimization all working together over a sustained period.
              </p>

              <p>
                For technology companies operating in competitive B2B markets, the lesson is clear: organic search is not a channel you can afford to leave unmanaged. With the right strategy and consistent execution, it becomes one of the most efficient and scalable sources of qualified demand. Profisee&apos;s 430% traffic increase was not a spike. It was a sustained trajectory built on a foundation that continues to compound.
              </p>

              <p>
                At DiamondLinks, we build SEO campaigns designed to deliver exactly this kind of result: measurable, defensible, and compounding over time. If your organic search presence is not keeping pace with your business growth, we should talk.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready for results like Profisee&apos;s?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                Get a free SEO analysis and see how DiamondLinks can drive measurable organic growth for your business.
              </p>
              <Link
                href="/free-seo-audit/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
              >
                Get Free SEO Audit
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
