import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Inspect & Track Case Study: 98% Backlink Growth & 79% More Traffic | DiamondLinks',
  description:
    'How DiamondLinks helped Inspect&Track, a SaaS leader in asset tracking software, nearly double their backlinks, grow referring domains by 157%, and increase organic traffic by 79% in under two years.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/inspect-and-track/' },
  openGraph: {
    title: 'Inspect & Track Case Study: 98% Backlink Growth & 79% More Traffic | DiamondLinks',
    description:
      'How DiamondLinks helped Inspect&Track nearly double their backlinks, grow referring domains by 157%, and increase organic traffic by 79% in under two years.',
    url: 'https://diamondlinks.com/case-studies/inspect-and-track/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Inspect & Track Case Study: 98% Backlink Growth & 79% More Organic Traffic',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/inspect-and-track/',
  description:
    'How DiamondLinks helped Inspect&Track nearly double their backlinks, grow referring domains by 157%, and increase organic traffic by 79% in under two years.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Inspect & Track', item: 'https://diamondlinks.com/case-studies/inspect-and-track/' },
  ],
}

export default function InspectAndTrackCaseStudyPage() {
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
              <span className="text-gray-500">Inspect &amp; Track</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              How Inspect&amp;Track Nearly Doubled Their Backlinks and Grew Organic Traffic by 79%
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
                Inspect&amp;Track is an industry leader in asset tracking and inspection management software. Their platform helps organizations across multiple sectors manage equipment inspections, maintain compliance records, and streamline asset lifecycle management. As a SaaS company operating in a competitive technology space, Inspect&amp;Track needed a partner who could move the needle on organic visibility and translate that into meaningful business growth.
              </p>

              <p>
                When they came to DiamondLinks in November 2023, they had a solid product and a loyal customer base. What they lacked was the organic search presence to match. Their competitors were outranking them on critical industry terms, and their backlink profile was too thin to compete for the high-intent keywords that drive demo requests and trial signups. They needed a comprehensive SEO strategy that would build lasting authority, not just short-term wins.
              </p>

              {/* Snapshot Card */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-10 my-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Industry</p>
                    <p className="text-gray-900 font-bold text-sm">SaaS / Technology</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Campaign Start</p>
                    <p className="text-gray-900 font-bold text-sm">November 2023</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Focus Area</p>
                    <p className="text-gray-900 font-bold text-sm">SEO &amp; Link Building</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Traffic Growth</p>
                    <p
                      className="font-bold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      +79%
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                Inspect&amp;Track faced a challenge that many SaaS companies encounter as they scale: their product had matured significantly, but their organic search presence had not kept pace. With a Domain Rating of 34 and just 217 backlinks from 93 referring domains, they were being outgunned in the SERPs by competitors who had invested more heavily in content marketing and link acquisition.
              </p>

              <p>
                Their organic traffic hovered around 669 visits per month, a fraction of what their addressable market could support. Key product and feature pages were buried on page two or deeper for the search terms their ideal customers were actively using. Without stronger keyword positions and broader topical coverage, they were leaving significant pipeline on the table.
              </p>

              <p>
                The core challenge was threefold. First, they needed to strengthen their domain authority to compete for more competitive search terms. Second, they needed to identify and fill the content gaps that were allowing competitors to capture traffic on topics Inspect&amp;Track was uniquely qualified to own. Third, they needed to ensure their existing pages were technically optimized and structured to capture maximum search value.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We designed a multi-pronged SEO strategy for Inspect&amp;Track that addressed every layer of their organic growth challenge, from the technical foundation to the content strategy to the off-site authority signals that search engines use to determine ranking eligibility.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Keyword Optimization &amp; Competitor Analysis</h3>

              <p>
                Our first step was a comprehensive audit of Inspect&amp;Track&apos;s keyword landscape compared to their top competitors. We identified the high-value terms they were missing entirely, the terms where they ranked but underperformed, and the emerging search queries in the asset tracking and inspection management space that presented low-competition opportunities. This competitive gap analysis became the foundation for every content and optimization decision that followed.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">On-Page SEO &amp; Content Development</h3>

              <p>
                Armed with our keyword research, we conducted thorough content audits of Inspect&amp;Track&apos;s existing pages. We restructured title tags, meta descriptions, header hierarchies, and internal linking patterns to better align with target keywords and user search intent. Where we found topical gaps, we developed new content assets, including blog posts, feature comparison pages, and use-case guides, that positioned Inspect&amp;Track as a definitive authority in their space.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Backlink Improvement &amp; Authority Building</h3>

              <p>
                Building domain authority was a central priority. We executed a sustained link building campaign focused on acquiring high-quality backlinks from relevant technology publications, SaaS directories, and industry resources. We maintained a natural anchor text distribution throughout the campaign, mixing branded anchors, exact-match keywords, partial-match phrases, and generic anchors to build a link profile that looked organic and trustworthy to search engines.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Technical SEO &amp; Site Performance</h3>

              <p>
                We performed a detailed technical audit covering site speed, crawlability, mobile responsiveness, schema markup, and Core Web Vitals. We resolved indexation issues, improved page load times, and ensured that search engine crawlers could efficiently discover and render every important page on the site. These technical improvements provided the infrastructure for all of the on-page and off-page work to deliver maximum impact.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The cumulative effect of this integrated strategy was substantial, measurable growth across every core SEO metric. Here is how Inspect&amp;Track&apos;s organic presence transformed over the course of the campaign.
              </p>

              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 my-10">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Domain Rating</p>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      +9%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">34</span>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      37
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">A meaningful jump in overall domain authority, reflecting the quality and consistency of backlinks acquired throughout the campaign.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Total Backlinks</p>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      +98%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">217</span>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      430
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">A 98% increase in total backlinks, nearly doubling their link profile with high-quality, relevant placements.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Referring Domains</p>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      +157%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">93</span>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      239
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">A 157% increase in unique referring domains, dramatically broadening the diversity and strength of their link profile.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Organic Traffic</p>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      +79%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">669</span>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      1,200
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">A 79% increase in monthly organic visits, translating directly into more product page views, demo requests, and trial signups.</p>
                </div>
              </div>

              <p>
                Inspect&amp;Track also saw their top 3 keyword positions increase from 39 to 41, meaning more of their target keywords now rank on the first page of Google in the most visible positions. While two additional top-3 rankings may seem incremental, each one represents a high-intent search term where Inspect&amp;Track now captures a disproportionate share of clicks, directly impacting their sales pipeline.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                The Inspect&amp;Track campaign demonstrates what happens when every component of an SEO strategy works in concert. Link building alone does not move the needle if the on-page content is not optimized to convert the authority those links provide. Content alone does not rank if the technical foundation is broken or the domain lacks authority. And none of it matters if the keyword targeting is not aligned with what real customers are searching for.
              </p>

              <p>
                By addressing all four pillars simultaneously, keyword strategy, content development, link acquisition, and technical SEO, we created a compounding effect where each improvement amplified the others. The result was not a single spike in traffic but a sustained upward trajectory in organic visibility, domain authority, and qualified traffic.
              </p>

              <p>
                For SaaS companies operating in competitive verticals, this case study reinforces a critical truth: organic search is not a channel you can afford to treat as an afterthought. It is a long-term growth engine, and the companies that invest in it strategically are the ones that consistently outperform their competitors in the most cost-effective acquisition channel available.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready to grow your organic traffic?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                See how DiamondLinks can build the same kind of sustained, measurable SEO growth for your business.
              </p>
              <Link
                href="/free-seo-audit/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
              >
                Get a Free SEO Audit
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
