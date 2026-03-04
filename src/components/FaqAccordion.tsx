'use client'

import { useState } from 'react'

const defaultFaqs = [
  {
    q: "How long does online reputation management take?",
    a: "ORM timelines vary by situation severity and competition level, but most clients see meaningful movement within 90–120 days. Suppressing deeply entrenched results can take 6–12 months. We set honest expectations upfront and report progress monthly.",
  },
  {
    q: "Can you remove negative news articles or Google reviews?",
    a: "In most cases, content can't be deleted, but it can be pushed off page one. We create and amplify high-authority positive content that outranks negative results, so the first page reflects your real story. In some cases, legal removal is possible, and we'll advise if it applies.",
  },
  {
    q: "What's the difference between ORM and SEO?",
    a: "SEO focuses on ranking your website higher in search results for target keywords. ORM focuses on controlling what appears when someone searches your name or brand, suppressing damaging content and amplifying positive assets. We often combine both for maximum impact.",
  },
  {
    q: "Do you offer white-label services for agencies?",
    a: "Yes. We work behind the scenes so your agency can deliver world-class ORM and SEO results under your brand. Our white-label program includes fully branded deliverables, agency-friendly pricing, and a dedicated account manager.",
  },
  {
    q: "How do I know if I need ORM?",
    a: "Search your name or brand name right now. If you see negative news, bad reviews, competitor content, or anything you wouldn't want a client or employer to find, you need ORM. A damaging page-one result can cost more than the investment to fix it.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve clients across healthcare, legal, finance, athletes, SaaS, and marketing agencies, any industry where your online reputation directly impacts business. We've worked with solo executives, national brands, and everything in between.",
  },
]

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ faqs = defaultFaqs }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="space-y-3">
      {faqs.map(({ q, a }, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={q}
            className={`border rounded-2xl shadow-sm overflow-hidden bg-white transition-all duration-200 ${
              isOpen ? 'shadow-md border-blue-100' : 'border-gray-100'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className={`w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors ${
                isOpen ? 'bg-blue-50/60' : 'hover:bg-gray-50/80'
              }`}
              aria-expanded={isOpen}
            >
              <h3 className="font-semibold text-gray-900 text-base leading-snug pr-2">{q}</h3>
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen
                    ? 'bg-blue-100 border-blue-200'
                    : 'bg-gray-100 border-gray-200'
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {/* Animated height using grid-template-rows trick */}
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="border-t border-blue-100/60 px-7 pb-6 pt-5 bg-blue-50/30">
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
