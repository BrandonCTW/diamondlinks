import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Mountain View Retreat Case Study | DiamondLinks',
  description:
    'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/mountain-view-retreat/' },
  openGraph: {
    title: 'Mountain View Retreat Case Study | DiamondLinks',
    description:
      'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
    url: 'https://diamondlinks.com/case-studies/mountain-view-retreat/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From Crisis to Growth: How DiamondLinks Revived a Struggling Rehab Center',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/mountain-view-retreat/',
  description:
    'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Mountain View Retreat', item: 'https://diamondlinks.com/case-studies/mountain-view-retreat/' },
  ],
}

export default function MountainViewRetreatCaseStudyPage() {
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
              <span className="text-gray-500">Mountain View Retreat</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              From Crisis to Growth: How DiamondLinks Revived a Struggling Rehab Center
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
                When the owner of Mountain View Retreat reached out to DiamondLinks, he was candid: the facility was on the verge of closing. Admissions had dried up, online visibility was virtually nonexistent, and the operational costs of running a drug and alcohol treatment center in New England were compounding by the month. He had tried general marketing approaches before, but nothing moved the needle. The phone simply was not ringing.
              </p>

              <p>
                What followed over the next several weeks was one of the most dramatic turnarounds we have seen in over 15 years of digital marketing work. Within days of launching our campaign, calls started coming in. Within the first week of call tracking, three new patients were admitted. The owner later told us directly that DiamondLinks &ldquo;saved his company.&rdquo;
              </p>

              <p>
                This is the story of how we did it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                Mountain View Retreat is a drug and alcohol treatment center serving patients across New England. The addiction treatment industry is one of the most competitive and heavily regulated verticals in healthcare marketing. Facilities face strict advertising guidelines, intense competition from well-funded national chains, and the inherent sensitivity of marketing services that people often search for in moments of crisis.
              </p>

              <p>
                When Mountain View came to us, the facility was facing a perfect storm of problems. Their website was generating almost no organic traffic. They had no meaningful presence in local search results or Google Maps. Their Google Business Profile was underoptimized and generating minimal engagement. Admissions were unpredictable at best and nonexistent at worst, making it nearly impossible to plan operations or staffing. The owner was running out of runway.
              </p>

              <p>
                Previous marketing efforts had failed to account for the unique dynamics of the addiction treatment space. Generic SEO tactics do not work in healthcare verticals where Google applies heightened scrutiny under its Your Money or Your Life (YMYL) guidelines. Content needs to demonstrate genuine expertise. Local signals need to be exceptionally strong. And the competitive landscape is filled with facilities spending tens of thousands of dollars per month on paid advertising, making organic visibility the only sustainable path for a smaller operator.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We deployed our AI/AEO Boost Strategy, a comprehensive approach that combines AI-enhanced search optimization with Answer Engine Optimization techniques designed to position clients where modern searchers are actually looking. For Mountain View Retreat, this meant a multi-pronged campaign executed with urgency.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">AI-Enhanced SEO Foundation</h3>

              <p>
                We started with an exhaustive competitive keyword analysis using our AI-powered research tools. This was not a surface-level keyword list. We identified the specific search terms that prospective patients and their families were using in New England, mapped the competitive difficulty of each term, and uncovered content gaps that Mountain View&apos;s competitors had left wide open. We then built a structured content strategy around those gaps, prioritizing terms with high intent and achievable ranking potential.
              </p>

              <p>
                Every page on the site was rebuilt with structured schema markup that helps search engines and AI-powered answer engines understand exactly what Mountain View offers, where they are located, and what makes them a credible treatment option. This markup is increasingly critical as Google and other platforms use structured data to generate featured snippets, knowledge panels, and AI-generated search summaries.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Hyper-Localization with AEO</h3>

              <p>
                Addiction treatment is inherently local. Families searching for help are looking for facilities near them, and Google prioritizes local results for these queries. We tailored every element of Mountain View&apos;s on-site content to reinforce geographic relevance: location-specific landing pages, locally optimized meta tags, and content that naturally referenced the communities and regions served by the facility.
              </p>

              <p>
                Their Google Business Profile received a complete overhaul. We optimized every field, built out service categories, added high-quality photos, and established a system for generating and responding to patient reviews. This was not a one-time update; it was a sustained effort to make the profile a living, active representation of the business.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">Map Pack Domination</h3>

              <p>
                Getting into Google&apos;s Local Map Pack, the three-result box that appears at the top of local search results, was a priority. For treatment centers, Map Pack visibility is often the difference between getting calls and being invisible. We built a citation profile across healthcare directories, local business listings, and industry-specific platforms. We implemented a review generation strategy to build social proof, and we created location-based content designed to signal relevance to Google&apos;s local algorithm.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The impact was measurable almost immediately, and the numbers continued to climb week over week.
              </p>

              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 gap-4 py-6">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">118,000+</p>
                  <p className="text-gray-500 text-sm font-medium">Total Impressions</p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">620+</p>
                  <p className="text-gray-500 text-sm font-medium">Organic Clicks</p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">3</p>
                  <p className="text-gray-500 text-sm font-medium">New Admissions in Week One</p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">11</p>
                  <p className="text-gray-500 text-sm font-medium">Tracked Calls Within Days</p>
                </div>
              </div>

              <p>
                When we set up Call Tracking Metrics to give the owner full transparency into inbound leads, 11 tracked calls came in within days of activation. Three of those calls converted to patient admissions in the first week alone. For a facility that had been struggling to fill beds, this was transformative.
              </p>

              <p>
                The traffic breakdown revealed just how effectively the strategy was working across channels. 55% of all traffic was coming through Google My Business, confirming that the Map Pack and local optimization work was driving real visibility. Another 36% came from multi-organic search, meaning the site was capturing clicks across a broad set of treatment-related queries rather than relying on a single keyword or page.
              </p>

              <p>
                These were not vanity metrics. Every impression, click, and call represented a real person or family searching for help with addiction treatment, and Mountain View Retreat was now the facility they were finding first.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                Mountain View Retreat&apos;s story is a powerful reminder that the right digital strategy can fundamentally change the trajectory of a business, even one on the brink of failure. The owner did not need a bigger advertising budget. He did not need a flashy rebrand. He needed a partner who understood the specific dynamics of his industry and could execute a data-driven strategy with precision and speed.
              </p>

              <p>
                The addiction treatment space is unforgiving. Competition is fierce, regulations are strict, and the stakes are as high as they get: every missed call is a person who might not get the help they need. For facilities operating in this environment, generic marketing approaches are not just ineffective. They are dangerous, because every month without results is a month closer to closing the doors.
              </p>

              <p>
                What made the difference for Mountain View was a combination of factors: AI-powered keyword research that found opportunities human analysis would have missed, AEO techniques that positioned the facility where modern searchers actually look, and a relentless focus on local signals that earned Google&apos;s trust. The technology mattered, but it was the strategic thinking behind it that turned a failing business into a growing one.
              </p>

              <p>
                The owner&apos;s words stay with us: DiamondLinks saved his company. That is the standard we hold ourselves to on every engagement. Not incremental improvement, but meaningful, measurable impact that changes outcomes.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Get results like Mountain View Retreat
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                Find out how DiamondLinks can drive real admissions, calls, and revenue for your treatment center or healthcare facility.
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
