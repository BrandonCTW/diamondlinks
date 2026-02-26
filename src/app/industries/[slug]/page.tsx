import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return { title: 'Industry Not Found | DiamondLinks' }
  }

  const url = `https://diamondlinks.com/industries/${industry.slug}/`
  return {
    title: `${industry.name} Reputation Management | DiamondLinks`,
    description: industry.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${industry.name} Reputation Management | DiamondLinks`,
      description: industry.description,
      url,
    },
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://diamondlinks.com/industries/" },
      { "@type": "ListItem", "position": 3, "name": industry.name, "item": `https://diamondlinks.com/industries/${industry.slug}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <ScrollReveal>
      {/* Hero */}
      <PageHero
        eyebrow={industry.name}
        headline={industry.headline}
        gradientText={industry.gradientText}
        description={industry.description}
        dark={false}
      />

      {/* Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The Challenge"
            title="Why Your Industry Needs ORM"
            subtitle="These are the reputation threats we see most often — and the ones we solve every day."
            eyebrowColor="text-red-600"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {industry.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400" />
                <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mb-4">
                  <svg
                    className="text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ width: 18, height: 18 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{challenge.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Approach"
            title="How We Solve It"
            subtitle={`Tailored ORM and SEO strategies built specifically for ${industry.name.toLowerCase()} professionals.`}
          />

          <FeatureGrid features={industry.solutions} columns={3} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Industry Reputation Stats"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center"
              >
                <p
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #7c3aed 100%)',
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

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title={`${industry.name} ORM Questions`}
            subtitle="Answers to the questions we hear most often from clients in your industry."
          />

          <FaqAccordion faqs={industry.faqs} />

          <ConversionStrip headline="No matter your industry, your reputation matters." />
        </div>
      </section>

      <CtaBanner />
    </ScrollReveal>
    </>
  )
}
