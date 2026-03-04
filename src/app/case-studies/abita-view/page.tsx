import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Abita View Case Study: 60% to 98% Occupancy with SEO | DiamondLinks',
  description:
    'How DiamondLinks helped Abita View apartments in Louisiana go from 60% to 98% occupancy through local SEO, backlink building, and keyword optimization. A real estate case study.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/abita-view/' },
  openGraph: {
    title: 'Abita View Case Study: 60% to 98% Occupancy with SEO | DiamondLinks',
    description:
      'How DiamondLinks helped Abita View apartments in Louisiana go from 60% to 98% occupancy through local SEO, backlink building, and keyword optimization.',
    url: 'https://diamondlinks.com/case-studies/abita-view/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Abita View: From 60% to 98% Occupancy with Local SEO',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/abita-view/',
  description:
    'How DiamondLinks helped Abita View apartments go from 60% to 98% occupancy through local SEO strategy.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Abita View', item: 'https://diamondlinks.com/case-studies/abita-view/' },
  ],
}

export default function AbitaViewCaseStudyPage() {
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
              <span className="text-gray-500">Abita View</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              From 60% to 98% Occupancy: How Local SEO Transformed Abita View Apartments
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
                When Abita View, a local apartment complex in Louisiana, came to DiamondLinks in March 2024, they were facing a problem that many property managers know too well: empty units. With occupancy sitting at just 60% in the aftermath of COVID, the complex was bleeding revenue and struggling to attract new tenants through traditional advertising. They needed a strategy that would put them in front of the people who were already searching for apartments in their area, and they needed results fast.
              </p>

              <p>
                What followed was a focused, data-driven SEO campaign that took Abita View from a near-crisis occupancy rate to near-full in under a year. This is the story of how we did it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                The post-COVID rental market in Louisiana presented a unique set of difficulties. Tenants who had left during the pandemic were not coming back on their own, and the local competition for renters had intensified as other complexes dropped prices and ramped up paid advertising. Abita View had a solid property, but their online presence was virtually invisible. Their website was not ranking for the local search terms that prospective tenants were actually using, and the domain carried almost no authority in the eyes of search engines.
              </p>

              <p>
                The numbers told the story clearly. A Domain Rating of just 7 meant the site had almost no backlink profile to speak of. Only 12 referring domains were pointing to the site. Organic traffic was minimal, and the keywords they were ranking for were mostly informational rather than transactional. In other words, the few people who did find them online were not the people actively looking to sign a lease.
              </p>

              <p>
                The primary objective was straightforward: convert local search traffic into signed leases. Every decision we made throughout the campaign was oriented around that single goal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We built Abita View&apos;s SEO campaign around four interconnected pillars, each designed to reinforce the others and compound results over time.
              </p>

              <p>
                <strong className="text-gray-900">Keyword optimization focused on local transactional terms.</strong> Rather than chasing high-volume national keywords that would never convert for a single-location apartment complex, we identified and targeted the specific phrases that local renters use when they are ready to act. Terms like &ldquo;apartments for rent in Abita Springs,&rdquo; &ldquo;Abita Springs LA apartments,&rdquo; and &ldquo;pet-friendly apartments near Abita Springs&rdquo; became the foundation of our keyword strategy. These are the searches that signal intent, not curiosity, and they are the queries that turn into tours, applications, and signed leases.
              </p>

              <p>
                <strong className="text-gray-900">On-page SEO and content audits.</strong> We conducted a thorough audit of every page on the Abita View website, restructuring title tags, meta descriptions, header hierarchies, and internal linking to align with our target keywords. We also identified content gaps and created new pages targeting high-intent search queries that the site had no presence for. Every piece of content was written to serve the prospective tenant first, answering their questions, addressing their concerns, and making it easy to take the next step.
              </p>

              <p>
                <strong className="text-gray-900">Backlink improvement from local and real estate domains.</strong> A Domain Rating of 7 was not going to compete, even in a local market. We executed a targeted link-building campaign focused on acquiring backlinks from locally relevant and industry-relevant sources: Louisiana business directories, real estate listing platforms, community resources, and local media. The goal was not just to increase the raw number of links but to build the kind of topical and geographic relevance that search engines reward for local queries.
              </p>

              <p>
                <strong className="text-gray-900">Technical SEO and site speed optimizations.</strong> Fast-loading, mobile-friendly websites rank better, and they convert better. We addressed technical issues including page speed, mobile responsiveness, crawl errors, schema markup, and Core Web Vitals. For an apartment complex where most prospective tenants are searching on their phones, mobile performance was especially critical.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The impact of the campaign was measurable across every metric that matters, but the one that matters most to a property manager is occupancy. And on that front, the results speak for themselves.
              </p>

              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Occupancy Rate</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    60% &rarr; 98%
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
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
                    +206%
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
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
                    7 &rarr; 10
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Referring Domains</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    12 &rarr; 80
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">New Backlinks</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    +152
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Local Keywords</p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    +62%
                  </p>
                </div>
              </div>

              <p>
                <strong className="text-gray-900">Occupancy went from 60% to 98%.</strong> That is the number that changed everything for Abita View. Nearly four out of every ten units that were sitting empty are now filled. For a property manager, that is the difference between operating at a loss and running a profitable, sustainable business. Every other metric on this page contributed to that outcome, but this is the one that paid the bills.
              </p>

              <p>
                <strong className="text-gray-900">Organic traffic increased by 206%.</strong> More than tripling the organic traffic to the site meant that Abita View was consistently appearing in front of prospective tenants who were actively searching for apartments in their area. This was not paid traffic that would disappear the moment the ad budget ran out. This was earned visibility built on a foundation that continues to deliver month after month.
              </p>

              <p>
                <strong className="text-gray-900">Domain Rating climbed from 7 to 10, and referring domains grew from 12 to 80.</strong> A 152-backlink increase from targeted, relevant sources transformed the site&apos;s authority profile. For a local business competing in a specific geographic market, this level of domain authority growth is significant. It means the site now has the credibility to rank for competitive local terms and hold those positions against other properties in the area.
              </p>

              <p>
                <strong className="text-gray-900">Local transactional keywords increased by 62%.</strong> This is where the strategy came full circle. More transactional keywords meant more visibility for the searches that actually convert. When someone types &ldquo;apartments for rent near me&rdquo; in Abita Springs, Louisiana, Abita View now shows up. That visibility is what drives tours, applications, and signed leases.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                The Abita View campaign is a clear demonstration of what happens when SEO strategy is built around a specific business outcome rather than vanity metrics. Every keyword we targeted, every backlink we built, every technical optimization we made was in service of one goal: filling apartments. The occupancy numbers prove that the approach worked.
              </p>

              <p>
                For local businesses, especially those in real estate and property management, the lesson is straightforward. The people who are going to become your customers are already searching for what you offer. The question is whether they find you or your competitor. A focused local SEO campaign that targets transactional intent, builds geographic authority, and delivers a fast, mobile-friendly experience is not just a marketing expense. It is the most efficient path from empty units to signed leases.
              </p>

              <p>
                Abita View went from a post-COVID occupancy crisis to near-full capacity. The foundation we built is not a one-time fix. It is a compounding asset that continues to deliver organic traffic and tenant inquiries every month, without ongoing ad spend.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready to fill your vacancies?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                See how DiamondLinks can drive real business outcomes for your property with a data-driven local SEO strategy.
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
