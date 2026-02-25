import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import ConversionStrip from '@/components/sections/ConversionStrip'
import { testimonials } from '@/data/company'

export const metadata: Metadata = {
  title: 'Request a Quote | DiamondLinks',
  description:
    'Get a free, confidential reputation analysis from DiamondLinks. We audit your search results, identify risks, and deliver a custom ORM strategy — no obligation.',
}

function QuoteForm() {
  return (
    <form action="#" method="POST" className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
            placeholder="(504) 233-4365"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-gray-900 text-sm font-semibold mb-1.5">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
          placeholder="https://yoursite.com"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-gray-900 text-sm font-semibold mb-1.5">
          Monthly Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
          defaultValue=""
        >
          <option value="" disabled>Select a range</option>
          <option value="under-1k">Under $1K</option>
          <option value="1k-3k">$1K - $3K</option>
          <option value="3k-5k">$3K - $5K</option>
          <option value="5k-plus">$5K+</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-900 text-sm font-semibold mb-1.5">
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
          placeholder="Describe what you're dealing with and what you'd like to achieve..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base"
      >
        Request My Free Analysis
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </form>
  )
}

export default function RequestAQuotePage() {
  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Free Analysis"
        headline="Get Your Free"
        gradientText="Reputation Analysis"
        description="Find out exactly what people see when they Google your name or business. We'll audit your search results, identify risks, and outline a custom strategy — at no cost and no obligation."
        dark={true}
      />

      {/* Form + Trust Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Free Analysis</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll deliver your personalized reputation audit within 24 hours.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Trust Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Get */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
                <h3 className="text-gray-900 font-bold text-lg mb-5">What You&apos;ll Get</h3>
                <ul className="space-y-4">
                  {[
                    'Comprehensive search results audit',
                    'Risk assessment for negative content',
                    'Custom strategy outline',
                    'No obligation whatsoever',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time + Confidentiality */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-bold text-sm">Response in 24 hrs</p>
                  <p className="text-gray-400 text-xs mt-0.5">Guaranteed</p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-bold text-sm">100% Confidential</p>
                  <p className="text-gray-400 text-xs mt-0.5">Always</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm italic leading-relaxed mb-4">
                  &ldquo;{testimonials[1].quote}&rdquo;
                </blockquote>
                <p className="text-gray-900 font-bold text-sm">{testimonials[1].name}</p>
                <p className="text-gray-500 text-xs">{testimonials[1].title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-4 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ConversionStrip
            headline="Prefer to talk? Call us directly."
            subtext="We're available to discuss your reputation situation by phone."
            ctaLabel="Call 504.233.4365"
            ctaHref="tel:504-233-4365"
          />
        </div>
      </section>
    </ScrollReveal>
  )
}
