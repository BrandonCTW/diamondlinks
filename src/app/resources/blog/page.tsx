import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Blog | DiamondLinks',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        headline="ORM & SEO"
        gradientText="Insights"
        description="Expert perspectives on online reputation management, SEO strategy, and protecting your brand online."
        dark={true}
      />

      {/* Coming Soon */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We&apos;re working on bringing you expert insights on online reputation management and SEO. In the meantime, check out our resources or get a free analysis.
          </p>

          {/* Link Cards */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto">
            <a
              href="/ask/"
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200 text-left"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Ask DiamondLinks</h3>
              <p className="text-gray-500 text-sm">Get expert answers to your reputation questions.</p>
            </a>

            <a
              href="/request-a-quote/"
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200 text-left"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Free Analysis</h3>
              <p className="text-gray-500 text-sm">Get a confidential reputation analysis.</p>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
