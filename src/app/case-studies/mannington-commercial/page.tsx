import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Case Study: Mannington Commercial SEO Results | DiamondLinks',
  description:
    'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60 through strategic SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/mannington-commercial/' },
  openGraph: {
    title: 'Case Study: Mannington Commercial SEO Results | DiamondLinks',
    description:
      'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60 through strategic SEO.',
    url: 'https://diamondlinks.com/case-studies/mannington-commercial/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: How Mannington Commercial Achieved 47% Organic Traffic Growth',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/mannington-commercial/',
  description:
    'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Mannington Commercial', item: 'https://diamondlinks.com/case-studies/mannington-commercial/' },
  ],
}

export default function ManningtonCommercialCaseStudyPage() {
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
              <span className="text-gray-500">Mannington Commercial</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              How Mannington Commercial Achieved 47% Organic Traffic Growth with Strategic SEO
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
                Mannington Commercial is a leading provider of commercial flooring solutions, serving architects, designers, and facility managers across the United States. With a product portfolio spanning luxury vinyl tile, broadloom carpet, rubber flooring, and hardwood, Mannington has built a reputation for quality and innovation in the commercial flooring space over decades of operation.
              </p>

              <p>
                When Mannington Commercial engaged DiamondLinks in April 2021, they had a strong brand presence offline but recognized a significant opportunity to strengthen their organic search performance. In an industry where architects and specifiers increasingly begin their product research online, ranking visibility was not just a marketing metric &mdash; it was a direct pipeline to new business.
              </p>

              {/* Results Summary Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600">+47%</p>
                  <p className="text-gray-500 text-sm mt-1">Organic Traffic</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600">57 &rarr; 60</p>
                  <p className="text-gray-500 text-sm mt-1">Domain Rating</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600">68K</p>
                  <p className="text-gray-500 text-sm mt-1">Total Backlinks</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600">1,400</p>
                  <p className="text-gray-500 text-sm mt-1">Referring Domains</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                Despite being a well-established brand in the commercial flooring industry, Mannington Commercial faced a common challenge among manufacturers: their online visibility did not reflect the strength of their market position. Organic keyword rankings had plateaued, and organic traffic had settled around 11,800 monthly visits &mdash; respectable, but far below the potential for a company of their caliber and product breadth.
              </p>

              <p>
                The commercial flooring market is intensely competitive online. Major competitors were aggressively investing in content marketing, backlink acquisition, and technical SEO. Mannington needed a comprehensive strategy that would not only close the gap but establish a sustainable competitive advantage in organic search.
              </p>

              <p>
                Specifically, the challenges included stagnant keyword rankings that had not improved in several quarters, a backlink profile that lacked the diversity and authority needed to compete at the top of search results, on-page content that was not fully optimized for the search terms driving purchase intent, and technical issues that were limiting crawl efficiency and page performance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                DiamondLinks developed a multi-pronged SEO strategy tailored to Mannington Commercial&apos;s specific competitive landscape and business objectives. Rather than applying a generic playbook, we conducted deep analysis of the commercial flooring search ecosystem to identify the highest-impact opportunities.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Keyword Optimization &amp; Competitor Analysis</h3>

              <p>
                We began with a thorough competitive analysis, mapping Mannington&apos;s keyword footprint against their top competitors in the commercial flooring space. This analysis revealed significant content gaps &mdash; high-intent search terms where competitors were ranking but Mannington had no presence. We identified clusters of keywords around product categories, installation specifications, and industry applications that represented untapped demand.
              </p>

              <p>
                From this research, we built a prioritized keyword targeting strategy that balanced search volume with competitive difficulty, focusing first on terms where incremental ranking improvements would yield the greatest traffic gains.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">On-Page SEO &amp; Content Enhancement</h3>

              <p>
                Our content team conducted comprehensive audits of Mannington&apos;s existing pages, identifying opportunities to improve title tags, meta descriptions, header structures, and internal linking. We enhanced product pages with richer, more detailed content that addressed the specific questions architects and specifiers were searching for &mdash; performance specifications, installation requirements, sustainability certifications, and application-specific guidance.
              </p>

              <p>
                Each page was optimized to align with search intent while maintaining the authoritative, technical tone that Mannington&apos;s professional audience expects. Content was not simply stuffed with keywords; it was restructured to provide genuine value and answer the queries that drive specification decisions.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Backlink Improvement &amp; Authority Building</h3>

              <p>
                Building Mannington&apos;s backlink profile was a central pillar of the campaign. Starting from a base of approximately 42,500 backlinks across 500 referring domains, we implemented a strategic link acquisition program focused on quality and relevance. We targeted high-authority domains in the architecture, design, construction, and sustainability verticals &mdash; the exact publications and resources that Mannington&apos;s target audience trusts.
              </p>

              <p>
                We maintained a natural anchor text distribution to ensure the backlink profile appeared organic and aligned with Google&apos;s link quality guidelines. Every link earned was from a contextually relevant source, reinforcing Mannington&apos;s topical authority in commercial flooring rather than simply inflating raw link counts.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Technical SEO &amp; Site Performance</h3>

              <p>
                Our technical audit uncovered several opportunities to improve site speed, crawlability, and overall performance. We worked with Mannington&apos;s team to address page load times, optimize image delivery, improve mobile responsiveness, and resolve crawl errors that were preventing search engines from fully indexing their product catalog. These technical improvements created a stronger foundation for the content and link-building efforts to deliver maximum impact.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The campaign delivered measurable, sustained improvement across every key SEO metric. These were not short-term spikes; they reflect compounding gains built over the course of the engagement.
              </p>

              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 my-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Domain Rating: 57 &rarr; 60</p>
                      <p className="text-gray-500 text-sm mt-1">
                        A 3-point increase in Ahrefs Domain Rating reflects meaningful growth in overall site authority. At this level, each point requires exponentially more high-quality backlinks to achieve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.626a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364L4.34 8.374" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Backlinks: 42,500 &rarr; 68,000</p>
                      <p className="text-gray-500 text-sm mt-1">
                        A 60% increase in total backlinks, with referring domains growing from 500 to 1,400 &mdash; a 180% increase in unique linking websites. This diversified backlink profile significantly strengthened Mannington&apos;s search authority.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Organic Traffic: ~11,800 &rarr; 17,300 visits/month</p>
                      <p className="text-gray-500 text-sm mt-1">
                        A 47% increase in monthly organic traffic, translating to approximately 5,500 additional qualified visitors per month &mdash; architects, designers, and facility managers actively researching commercial flooring solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Keyword Rankings: Improved 1&ndash;3 Positions Across the Board</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Broad-based ranking improvements of 1 to 3 positions across targeted keyword clusters. In competitive commercial flooring terms, even a single position improvement can represent a significant increase in click-through rate and qualified traffic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                The Mannington Commercial campaign demonstrates what happens when a strong brand is paired with a disciplined, data-driven SEO strategy. Mannington already had the products, the reputation, and the industry credibility. What they needed was a partner who could translate that offline authority into organic search visibility.
              </p>

              <p>
                By combining competitor-informed keyword targeting, substantive content improvements, strategic authority building through high-quality backlinks, and foundational technical optimizations, DiamondLinks helped Mannington Commercial capture significantly more of the organic search demand in their market.
              </p>

              <p>
                The 180% growth in referring domains is particularly noteworthy. Raw backlink counts matter, but the diversity of unique domains linking to a site is one of the strongest signals of genuine authority. Growing from 500 to 1,400 referring domains did not happen through shortcuts or mass outreach &mdash; it was the result of earning links from relevant, authoritative sources in the architecture, design, and construction ecosystem.
              </p>

              <p>
                For manufacturers and B2B companies operating in competitive verticals, this case study reinforces a fundamental truth: SEO is not a one-time project. It is an ongoing investment in visibility that compounds over time. The gains Mannington achieved were not the result of a single tactic or a quick fix. They were the product of consistent, strategic execution across every dimension of search optimization.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready to grow your organic traffic?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                See how DiamondLinks can build a custom SEO strategy that delivers measurable results for your business.
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
