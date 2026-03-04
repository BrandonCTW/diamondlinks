import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import FaqAccordion from '@/components/FaqAccordion'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Ask DiamondLinks | Get Expert ORM & SEO Answers',
  description:
    'Get expert answers to your online reputation management and SEO questions. DiamondLinks specialists answer the most common questions from business owners, executives, and agencies.',
  alternates: { canonical: 'https://diamondlinks.com/ask/' },
  openGraph: {
    title: 'Ask DiamondLinks | Get Expert ORM & SEO Answers',
    description: 'Get expert answers to your online reputation management and SEO questions. DiamondLinks specialists answer the most common questions from business owners, executives, and agencies.',
    url: 'https://diamondlinks.com/ask/',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does online reputation management take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ORM timelines vary by situation severity and competition level, but most clients see meaningful movement within 90–120 days. Suppressing deeply entrenched results can take 6–12 months. We set honest expectations upfront and report progress monthly.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you remove negative news articles or Google reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, content can't be deleted, but it can be pushed off page one. We create and amplify high-authority positive content that outranks negative results, so the first page reflects your real story. In some cases, legal removal is possible, and we'll advise if it applies.",
      },
    },
    {
      "@type": "Question",
      "name": "What's the difference between ORM and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO focuses on ranking your website higher in search results for target keywords. ORM focuses on controlling what appears when someone searches your name or brand, suppressing damaging content and amplifying positive assets. We often combine both for maximum impact.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer white-label services for agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work behind the scenes so your agency can deliver world-class ORM and SEO results under your brand. Our white-label program includes fully branded deliverables, agency-friendly pricing, and a dedicated account manager.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I know if I need ORM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Search your name or brand name right now. If you see negative news, bad reviews, competitor content, or anything you wouldn't want a client or employer to find, you need ORM. A damaging page-one result can cost more than the investment to fix it.",
      },
    },
    {
      "@type": "Question",
      "name": "What industries do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve clients across healthcare, legal, finance, athletes, SaaS, and marketing agencies, any industry where your online reputation directly impacts business. We've worked with solo executives, national brands, and everything in between.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Ask DiamondLinks", "item": "https://diamondlinks.com/ask/" },
  ],
}

export default function AskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Ask DiamondLinks"
        headline="Have a Question About"
        gradientText="Your Online Reputation?"
        description="Get expert answers to your ORM and SEO questions. Our team has 30+ years of combined experience."
        dark={false}
      />

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Answers to the questions we hear most from prospective clients.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re happy to help. Reach out directly or request a free, confidential analysis of your online reputation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-base shadow-sm"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/free-orm-scan/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors text-base shadow-lg shadow-blue-600/35"
            >
              Get Free Analysis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
