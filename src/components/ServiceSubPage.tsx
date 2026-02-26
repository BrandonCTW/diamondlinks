import { SubPageData } from '@/data/services'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CtaBanner from '@/components/sections/CtaBanner'
import ConversionStrip from '@/components/sections/ConversionStrip'
import FaqAccordion from '@/components/FaqAccordion'

export default function ServiceSubPage({ data }: { data: SubPageData }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={data.title}
        headline={data.headline}
        gradientText={data.gradientText}
        description={data.description}
        primaryCta={{ label: 'Get Free Analysis', href: '/free-orm-scan/' }}
        secondaryCta={{ label: 'Call 504.233.4365', href: 'tel:504-233-4365' }}
        dark
      />

      {/* What It Is */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Overview"
            title={data.whatItIs.title}
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {data.whatItIs.body}
          </p>

          <ConversionStrip
            headline="Get a free reputation analysis today."
            subtext="See exactly what people find when they search for you."
          />
        </div>
      </section>

      {/* Why It Matters (with stats) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Why It Matters"
            title={data.whyItMatters.title}
            subtitle={data.whyItMatters.body}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {data.whyItMatters.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center"
              >
                <p
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Do It"
            subtitle="A proven, methodical approach that delivers measurable results."
          />
          <FeatureGrid features={data.howWeDoIt} columns={data.howWeDoIt.length === 4 ? 4 : 3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <FaqAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ConversionStrip
            headline="Ready to get started?"
            subtext="Free analysis. No obligation. Real results."
          />
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </>
  )
}
