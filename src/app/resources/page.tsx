'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'

type ContentType = 'all' | 'case-study' | 'research' | 'guide'

interface ResourceItem {
  type: 'case-study' | 'research' | 'guide'
  title: string
  description: string
  industry?: string
  comingSoon: boolean
  href?: string
}

const typeLabels: Record<ContentType, string> = {
  all: 'All',
  'case-study': 'Case Studies',
  research: 'Research',
  guide: 'Guides',
}

const typeBadgeStyles: Record<string, string> = {
  'case-study': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  research: 'bg-violet-50 text-violet-700 border-violet-100',
  guide: 'bg-amber-50 text-amber-700 border-amber-100',
}

const typeIcons: Record<string, string> = {
  'case-study':
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  research:
    'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  guide:
    'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
}

const resources: ResourceItem[] = [
  {
    type: 'case-study',
    title: 'Keyfactor: 1,025% Organic Traffic Growth',
    description:
      'A cybersecurity leader went from 2,200 to 25,100 monthly visits through strategic SEO, growing top-10 keyword positions from 269 to 1,700.',
    industry: 'Cybersecurity',
    comingSoon: false,
    href: '/case-studies/keyfactor/',
  },
  {
    type: 'case-study',
    title: 'Fireworks.ai: 1,100% Traffic Surge for AI SaaS',
    description:
      'An AI production workflow company grew from 416 to 4,500 monthly visits, with organic keywords exploding from 221 to 4,500.',
    industry: 'SaaS / AI',
    comingSoon: false,
    href: '/case-studies/fireworks-ai/',
  },
  {
    type: 'case-study',
    title: 'Mountain View Retreat: From Crisis to Growth',
    description:
      'A struggling rehab center on the brink of closure gained 118,000+ impressions, 620+ clicks, and 3 new admissions in the first week of tracking.',
    industry: 'Healthcare',
    comingSoon: false,
    href: '/case-studies/mountain-view-retreat/',
  },
  {
    type: 'case-study',
    title: 'Abita View: 60% to 98% Occupancy',
    description:
      'A post-COVID apartment complex went from 60% to 98% occupancy through local SEO, with 206% increase in organic traffic.',
    industry: 'Real Estate',
    comingSoon: false,
    href: '/case-studies/abita-view/',
  },
  {
    type: 'case-study',
    title: 'ALV Flooring: #1 Rankings in 26 Days',
    description:
      'A family-owned flooring company outranked Home Depot locally, with a 217% keyword increase and 333% jump in sales calls.',
    industry: 'Local Business',
    comingSoon: false,
    href: '/case-studies/alv-flooring/',
  },
  {
    type: 'case-study',
    title: 'Profisee: 430% Organic Traffic Growth',
    description:
      'A data management leader grew from 2,100 to 10,100 monthly visits with domain rating climbing from 41 to 58.',
    industry: 'Data Management',
    comingSoon: false,
    href: '/case-studies/profisee/',
  },
  {
    type: 'case-study',
    title: 'Mannington Commercial: Enterprise SEO at Scale',
    description:
      'A leading commercial flooring provider grew traffic from 11,800 to 17,300 monthly visits with referring domains nearly tripling.',
    industry: 'Commercial Flooring',
    comingSoon: false,
    href: '/case-studies/mannington-commercial/',
  },
  {
    type: 'case-study',
    title: 'Flight Providers: 1,600% Keyword Growth',
    description:
      'A skydiving company went from 2 to 32 ranking keywords in under 4 months, with bookings increasing as early as December 2024.',
    industry: 'Adventure Tourism',
    comingSoon: false,
    href: '/case-studies/flight-providers/',
  },
  {
    type: 'case-study',
    title: 'Inspect & Track: SaaS Visibility Boost',
    description:
      'An asset tracking software company grew organic traffic from 669 to 1,200 monthly visits with referring domains more than doubling.',
    industry: 'SaaS',
    comingSoon: false,
    href: '/case-studies/inspect-and-track/',
  },
  {
    type: 'guide',
    title: 'Human Insight Meets AI: The Future of Content',
    description:
      'Why pure AI content fails and how blending human editorial expertise with AI tools creates better SEO outcomes.',
    comingSoon: false,
    href: '/resources/blog/human-insight-ai-content/',
  },
  {
    type: 'guide',
    title: 'White Label SEO Partnerships: A Guide for Agencies',
    description:
      'Scaling an agency with white-label SEO lets you offer enterprise-grade search optimization without building an in-house team.',
    comingSoon: false,
    href: '/resources/blog/white-label-seo-partnerships/',
  },
  {
    type: 'guide',
    title: 'Cutting Through the Internet Red Tape',
    description:
      'Navigating online reputation challenges means dealing with platform policies, legal gray areas, and bureaucratic removal processes.',
    comingSoon: false,
    href: '/resources/blog/cutting-through-internet-red-tape/',
  },
]

const filterTypes: ContentType[] = ['all', 'case-study', 'research', 'guide']

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all')

  const filtered =
    activeFilter === 'all'
      ? resources
      : resources.filter((r) => r.type === activeFilter)

  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Resources"
        headline="Expertise You Can"
        gradientText="Verify"
        description="Case studies, original research, and actionable guides from the team that's managed reputations across every major industry."
        primaryCta={{ label: 'Get a Quote', href: '/request-a-quote/' }}
        secondaryCta={{ label: 'Ask DiamondLinks', href: '/ask/' }}
        dark={true}
      />

      {/* Filter + Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === type
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {typeLabels[type]}
                <span
                  className={`inline-flex items-center justify-center min-w-[20px] ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                    activeFilter === type
                      ? 'bg-white/20 text-gray-300'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {type === 'all'
                    ? resources.length
                    : resources.filter((r) => r.type === type).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const CardTag = item.href ? 'a' : 'div'
              return (
                <CardTag
                  key={item.title}
                  {...(item.href ? { href: item.href } : {})}
                  className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-7 flex flex-col ${item.href ? 'cursor-pointer' : ''}`}
                >
                  {/* Type badge + industry */}
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeBadgeStyles[item.type]}`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={typeIcons[item.type]}
                        />
                      </svg>
                      {typeLabels[item.type as ContentType]}
                    </span>
                    {item.industry && (
                      <span className="text-xs text-gray-400 font-medium">
                        {item.industry}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>

                  {/* CTA or Coming soon */}
                  {item.comingSoon ? (
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                      </span>
                      Coming Soon
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                      Read More
                      <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </CardTag>
              )
            })}
          </div>

          {/* CTA strip */}
          <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Ready to see results like these?
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Every case study started with a conversation. Get a free SEO audit and discover what&apos;s possible for your business.
            </p>
            <a
              href="/free-seo-audit/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
            >
              Get Free SEO Audit
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/ask/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Ask DiamondLinks
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get expert answers to your reputation and SEO questions.
              </p>
            </a>

            <a
              href="/cost-of-orm/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Cost of ORM
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Understand what reputation management costs and what drives
                pricing.
              </p>
            </a>

            <a
              href="/free-orm-scan/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Free Analysis
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get a confidential reputation analysis with actionable
                recommendations.
              </p>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </ScrollReveal>
  )
}
