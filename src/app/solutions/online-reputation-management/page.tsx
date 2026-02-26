import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { process, stats } from '@/data/company'

export const metadata: Metadata = {
  title: 'Online Reputation Management | DiamondLinks',
  description:
    'Take control of your search results with DiamondLinks ORM. We suppress negative content, amplify positive stories, and protect your brand — results in 60–120 days.',
}

const features = [
  {
    icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636',
    title: 'Negative Content Suppression',
    description:
      'We push damaging articles, reviews, and search results off page one using authority-driven content strategies and high-quality link building.',
  },
  {
    icon: 'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z',
    title: 'Positive Asset Amplification',
    description:
      'We create and optimize owned media — profiles, press, and content — so the first page of Google reflects your real story and strengths.',
  },
  {
    icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
    title: 'Review Management',
    description:
      'Proactive review strategy that increases positive reviews, monitors sentiment across platforms, and responds to feedback in real time.',
  },
  {
    icon: 'M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z',
    title: 'Crisis ORM Response',
    description:
      'Rapid-response protocols for emerging threats — viral press, social media backlash, or competitor attacks. We stabilize and rebuild fast.',
  },
  {
    icon: 'M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    title: 'Brand Monitoring',
    description:
      'Continuous monitoring of search results, news mentions, and review platforms so you know the moment something changes — before it becomes a crisis.',
  },
  {
    icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
    title: 'Monthly Reporting',
    description:
      'Transparent, data-driven reports every month showing ranking changes, content performance, and progress toward your reputation goals.',
  },
]

const faqs = [
  {
    q: 'How long does online reputation management take?',
    a: 'ORM timelines vary by situation severity and competition level, but most clients see meaningful movement within 60–120 days. Suppressing deeply entrenched results can take 6–12 months. We set honest expectations upfront and report progress monthly.',
  },
  {
    q: 'Can you remove negative news articles or Google reviews?',
    a: "In most cases, content can't be deleted, but it can be pushed off page one. We create and amplify high-authority positive content that outranks negative results, so the first page reflects your real story. In some cases, legal removal is possible, and we'll advise if it applies.",
  },
  {
    q: 'What types of negative content can you suppress?',
    a: 'We suppress negative news articles, bad Google reviews, defamatory blog posts, complaint site listings, court records, and any other harmful content appearing in your branded search results. If it ranks, we can push it down.',
  },
  {
    q: 'How much does online reputation management cost?',
    a: 'Every ORM campaign is custom-built to your situation. Pricing depends on the number of negative results, keyword competition, and the scope of content creation required. We provide transparent pricing after a free analysis — no surprises.',
  },
  {
    q: 'Do I need ORM if I already have good search results?',
    a: "Yes — proactive ORM protects what you've built. Without defensive content in place, a single negative article or viral review can overtake your first page overnight. Proactive ORM is an insurance policy for your brand.",
  },
  {
    q: 'Will I know what you are doing each month?',
    a: 'Absolutely. You receive a detailed monthly report covering ranking changes, new content published, links built, and next steps. We also schedule regular strategy calls so you are always in the loop.',
  },
]

const statCards = [
  { value: stats.timeToResults, label: 'Average Time to Results' },
  { value: stats.rating, label: 'Client Rating' },
  { value: `${stats.combinedExpertise} Years`, label: 'Combined Expertise' },
  { value: stats.launchTurnaround, label: 'Campaign Launch' },
]

export default function OnlineReputationManagementPage() {
  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Online Reputation Management"
        headline="Take Control of"
        gradientText="Your Search Results"
        description="Negative content on page one costs you clients, revenue, and trust. DiamondLinks suppresses what's hurting you and amplifies what should be found — so your brand owns its narrative."
        primaryCta={{ label: 'Get Free Analysis', href: '/free-orm-scan/' }}
        secondaryCta={{ label: 'See Our Process', href: '#process' }}
      />

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Why ORM Matters"
            title="Your Reputation Is Your Most Valuable Asset"
            subtitle="When someone Googles your name or brand, the first page of results shapes their entire perception — often before you ever get to make your case."
          />
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Online Reputation Management is the practice of controlling what appears in search
                results for your name, brand, or business. It combines content creation, strategic
                SEO, link building, and monitoring to ensure the first page of Google tells the
                story you want told.
              </p>
              <p>
                Whether you are dealing with a negative news article, unfair reviews, competitor
                attacks, or outdated information, ORM gives you the tools to fight back and
                reclaim your narrative.
              </p>
            </div>
            <div>
              <p className="mb-4">
                DiamondLinks has been delivering ORM results since 2011. With 30+ years of
                combined expertise, we have suppressed thousands of negative search results for
                executives, brands, and organizations across healthcare, legal, finance, and more.
              </p>
              <p>
                Every campaign is custom-built. No templates, no cookie-cutter playbooks — just a
                proven methodology executed by specialists who live and breathe reputation
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Do"
            title="Comprehensive ORM Services"
            subtitle="A full-spectrum approach to protecting and improving your online reputation."
          />
          <FeatureGrid features={features} columns={3} />
          <ConversionStrip
            headline="Find out what's really showing up in your search results."
            subtext="Our free analysis reveals every risk and opportunity on page one."
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Fix Your Reputation"
            subtitle="A proven, repeatable methodology refined over 15+ years and thousands of campaigns."
          />
          <ProcessSteps steps={process} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Results That Speak for Themselves"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center"
              >
                <p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our online reputation management services."
          />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner
        headline="Ready to take control of your search results?"
        subtext="Get a free, confidential analysis of your online reputation. No commitment required."
        ctaLabel="Get Free Analysis"
        ctaHref="/free-orm-scan/"
      />
    </ScrollReveal>
  )
}
