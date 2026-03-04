import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'ALV Flooring Case Study: #1 Rankings in 26 Days | DiamondLinks',
  description:
    'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/alv-flooring/' },
  openGraph: {
    title: 'ALV Flooring Case Study: #1 Rankings in 26 Days | DiamondLinks',
    description:
      'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
    url: 'https://diamondlinks.com/case-studies/alv-flooring/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ALV Flooring: From Invisible to #1 in 26 Days',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/alv-flooring/',
  description:
    'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'ALV Flooring', item: 'https://diamondlinks.com/case-studies/alv-flooring/' },
  ],
}

export default function AlvFlooringCaseStudyPage() {
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
              <span className="text-gray-500">ALV Flooring</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              ALV Flooring: From Invisible to #1 in 26 Days
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

            {/* Overview Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
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
                  26
                </p>
                <p className="text-gray-500 text-sm font-medium">Days to #1</p>
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
                  217%
                </p>
                <p className="text-gray-500 text-sm font-medium">Keyword Growth</p>
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
                  333%
                </p>
                <p className="text-gray-500 text-sm font-medium">More Sales Calls</p>
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
                  47
                </p>
                <p className="text-gray-500 text-sm font-medium">GBP Calls</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                ALV Flooring is a family-owned flooring provider in Smyrna, Tennessee, specializing in residential flooring and contractor-direct sales. They offer everything from laminate and luxury vinyl to waterproof flooring, serving homeowners and contractors across the greater Nashville area.
              </p>

              <p>
                Despite offering competitive pricing and quality products, ALV Flooring was virtually invisible online. The local flooring market is dominated by national retailers with massive marketing budgets, and ALV was struggling to appear in search results for the exact terms their customers were using. They came to DiamondLinks with a clear goal: get found online and start generating leads.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                The flooring industry is one of the most competitive local markets in home improvement. National chains like Home Depot and Lowe&apos;s dominate search results for nearly every flooring-related keyword, backed by enormous domain authority and decades of SEO investment. For a family-owned business in Smyrna, TN, competing against these retailers felt nearly impossible.
              </p>

              <p>
                ALV Flooring&apos;s specific challenges included:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Zero presence in Google&apos;s Map Pack for any flooring-related search term</li>
                <li>No organic rankings for high-intent commercial keywords like &ldquo;flooring contractors,&rdquo; &ldquo;affordable flooring,&rdquo; or &ldquo;waterproof flooring&rdquo;</li>
                <li>A total keyword portfolio of just 15 ranked terms, none on page one</li>
                <li>Minimal call volume from online channels, with virtually all business coming from word-of-mouth referrals</li>
                <li>No visibility in AI-generated search results, an increasingly important channel as Google and other platforms integrate AI overviews</li>
              </ul>

              <p>
                The question was not whether ALV Flooring had a good product. It was whether they could be found by the people actively searching for it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We deployed our LinkLift + AI/AEO Boost strategy, a comprehensive approach that combines strategic link building, AI-enhanced SEO, and Answer Engine Optimization to generate rapid, measurable results. Here is exactly what we did.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Strategic Link Building</h3>

              <p>
                We built a targeted backlink profile from high-authority sites in verticals directly relevant to ALV Flooring&apos;s business. Rather than pursuing generic directory links, we focused on placements from home improvement publications, real estate blogs, contractor networks, and local business directories. Each link was contextually placed within content that reinforced ALV Flooring&apos;s expertise in residential and commercial flooring services. This approach built topical authority quickly, signaling to Google that ALV Flooring was a credible, industry-relevant resource.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">AI-Enhanced SEO</h3>

              <p>
                We used AI-powered tools for keyword discovery, identifying not just the obvious head terms but the long-tail variations and semantic clusters that real buyers use when they are ready to make a purchase. We implemented comprehensive schema markup across the site to help search engines understand ALV Flooring&apos;s services, location, and business attributes at a structured data level. This included LocalBusiness schema, Product schema for flooring types, and FAQ schema targeting common buyer questions.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Hyper-Localization with AEO</h3>

              <p>
                Answer Engine Optimization is about positioning a business to appear in AI-generated responses, not just traditional search results. We optimized ALV Flooring&apos;s content and structured data to directly answer the questions that AI models pull from when generating search summaries. We paired this with thorough Google Business Profile optimization, ensuring every field, category, attribute, and photo was complete and aligned with the target keyword strategy. This dual approach targeted both the Map Pack and the emerging AI-powered search results.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Map Pack Optimization</h3>

              <p>
                We treated the Google Map Pack as its own ranking channel. Beyond GBP optimization, we built local citations, generated review velocity signals, and ensured NAP consistency across every platform. For a local flooring provider, appearing in the Map Pack is often more valuable than organic position one, because it puts the business directly in front of buyers who are ready to call.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The results were not incremental. They were transformational, and they happened fast. Within 26 days of launching the campaign, ALV Flooring went from near-zero visibility to dominating the first page of Google for their most valuable keywords.
              </p>
            </div>

            {/* Results Timeline Table */}
            <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-950 text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Keyword</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Result</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3.5 text-gray-900 font-medium">&ldquo;Flooring Contractors&rdquo;</td>
                    <td className="px-5 py-3.5 text-blue-600 font-bold">#1 Organic + #1 Map Pack</td>
                    <td className="px-5 py-3.5 text-gray-500">Day 18</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="px-5 py-3.5 text-gray-900 font-medium">&ldquo;Affordable Flooring&rdquo;</td>
                    <td className="px-5 py-3.5 text-blue-600 font-bold">#1 Organic</td>
                    <td className="px-5 py-3.5 text-gray-500">Day 19</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3.5 text-gray-900 font-medium">&ldquo;Laminate Flooring&rdquo;</td>
                    <td className="px-5 py-3.5 text-blue-600 font-bold">#2, directly behind Home Depot</td>
                    <td className="px-5 py-3.5 text-gray-500">Day 21</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="px-5 py-3.5 text-gray-900 font-medium">&ldquo;LV Flooring Smyrna TN&rdquo;</td>
                    <td className="px-5 py-3.5 text-blue-600 font-bold">#2 Organic + #1 Map Pack</td>
                    <td className="px-5 py-3.5 text-gray-500">Day 24</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3.5 text-gray-900 font-medium">&ldquo;Waterproof Flooring&rdquo;</td>
                    <td className="px-5 py-3.5 text-blue-600 font-bold">#2, above Home Depot</td>
                    <td className="px-5 py-3.5 text-gray-500">Day 26</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Beyond individual keyword rankings, the overall trajectory was just as impressive. ALV Flooring&apos;s total ranked keyword count increased by 69, jumping from 15 to 84 keywords. That is a 217% increase in keyword visibility in less than a month.
              </p>

              <p>
                The business impact was immediate and measurable. Sales calls increased by 333%, with 47 calls coming directly from the Google Business Profile alone. For a family-owned flooring company, that kind of call volume represents a fundamental shift in how they generate business.
              </p>

              <p>
                Perhaps most notably, ALV Flooring is now appearing in AI-generated search results. When users search &ldquo;wholesale flooring for contractors Nashville TN,&rdquo; ALV Flooring shows up in the AI overview, a channel that did not exist in any meaningful way even a year ago and one that most local businesses have not yet figured out how to appear in.
              </p>
            </div>

            {/* Impact Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-5 my-10">
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
                  69
                </p>
                <p className="text-gray-500 text-sm font-medium">New Keywords Ranked</p>
                <p className="text-gray-400 text-xs mt-1">15 &rarr; 84 total</p>
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
                  333%
                </p>
                <p className="text-gray-500 text-sm font-medium">Increase in Sales Calls</p>
                <p className="text-gray-400 text-xs mt-1">Direct revenue impact</p>
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
                  47
                </p>
                <p className="text-gray-500 text-sm font-medium">Google Business Calls</p>
                <p className="text-gray-400 text-xs mt-1">From GBP optimization</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900">Key Takeaway</h2>

              <p>
                ALV Flooring&apos;s results demonstrate something that many local businesses do not realize: you do not need a massive budget to outrank national retailers. What you need is a precise, multi-channel strategy that attacks the problem from every angle simultaneously. Link building alone would not have produced these results. SEO optimization alone would not have produced these results. It was the combination of strategic backlinks, AI-enhanced SEO, Answer Engine Optimization, and Map Pack optimization working together that created compounding momentum.
              </p>

              <p>
                The speed of these results is also worth noting. Twenty-six days from campaign launch to #1 rankings is not typical for the SEO industry, where timelines of three to six months are standard. The difference is in the approach. By layering multiple ranking signals at once and targeting both traditional and AI-powered search channels, we were able to compress the timeline dramatically.
              </p>

              <p>
                For ALV Flooring, the transformation is about more than rankings. It is about a family-owned business that can now compete on equal footing with Home Depot in their local market. They have a steady stream of inbound calls from qualified buyers. They are visible in every search channel that matters. And they have a foundation that will continue to compound as we build on these early results.
              </p>

              <p>
                If you are a local business competing against national brands and wondering whether SEO can actually move the needle, ALV Flooring is the proof that it can, and faster than you might think.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-12 text-center">
              <h3 className="text-gray-900 font-bold text-xl md:text-2xl mb-3">
                Ready to outrank the competition?
              </h3>
              <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                See how DiamondLinks can deliver page-one rankings and measurable business growth for your company.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
              >
                Get Your Free Analysis
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
