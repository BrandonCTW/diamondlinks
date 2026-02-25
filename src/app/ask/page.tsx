import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import FaqAccordion from '@/components/FaqAccordion'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Ask DiamondLinks | Get Expert ORM & SEO Answers',
}

export default function AskPage() {
  return (
    <>
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
              href="/request-a-quote/"
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
