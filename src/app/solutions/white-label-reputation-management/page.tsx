import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'White Label Reputation Management | DiamondLinks',
  description:
    'White label ORM services for agencies. DiamondLinks works behind the scenes so you can deliver world-class reputation management under your own brand.',
}

const features = [
  {
    icon: 'M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88',
    title: 'White Label Delivery',
    description:
      'We are 100% invisible to your clients. No co-branding, no attribution, no client contact — your agency gets full credit for every result.',
  },
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    title: 'Branded Reports',
    description:
      'Every deliverable — monthly reports, strategy docs, and progress updates — carries your logo, your colors, and your agency name.',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    title: 'Dedicated Account Manager',
    description:
      'A single point of contact who knows your clients, your processes, and your expectations. Fast responses, proactive communication, zero handoff friction.',
  },
  {
    icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
    title: 'Agency Pricing',
    description:
      'Volume-friendly pricing built for agencies. Healthy margins on every engagement so ORM becomes a profitable service line — not a loss leader.',
  },
  {
    icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
    title: 'Scalable Operations',
    description:
      'Take on as many ORM clients as you want. Our team scales with your pipeline — no hiring, no training, no capacity bottlenecks on your end.',
  },
  {
    icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
    title: 'Proven Results',
    description:
      'The same methodology that has delivered results for direct clients since 2011 — now executed on behalf of your agency with the same quality and urgency.',
  },
]

const whitelabelProcess = [
  {
    phase: 'Step 1',
    title: 'Partner Onboarding',
    description:
      'Quick setup call to align on your brand guidelines, reporting templates, communication preferences, and client expectations.',
  },
  {
    phase: 'Step 2',
    title: 'Client Intake',
    description:
      'You send us the client brief. We conduct a full search audit and deliver a branded strategy document ready for your client presentation.',
  },
  {
    phase: 'Step 3',
    title: 'Campaign Execution',
    description:
      'Our team executes the full ORM campaign — content creation, link building, suppression — entirely behind the scenes.',
  },
  {
    phase: 'Step 4',
    title: 'Branded Reporting',
    description:
      'Monthly reports delivered in your brand, showing ranking changes, content published, and progress toward goals.',
  },
  {
    phase: 'Ongoing',
    title: 'Scale Together',
    description:
      'Add more clients anytime. Your dedicated account manager ensures quality stays high as your portfolio grows.',
  },
]

const faqs = [
  {
    q: 'Will my clients ever know DiamondLinks is involved?',
    a: 'No. We are completely invisible. All deliverables, reports, and communications carry your branding. We never contact your clients directly and never reveal our involvement.',
  },
  {
    q: 'How does pricing work for white label ORM?',
    a: 'We offer volume-friendly wholesale pricing that gives your agency healthy margins on every engagement. Pricing is based on campaign scope, number of target keywords, and content volume. We provide transparent quotes so you can price your offering confidently.',
  },
  {
    q: 'Do I need ORM experience to offer this to my clients?',
    a: 'No. We handle strategy, execution, and reporting end-to-end. We also provide sales support materials and can help you position ORM as a service offering during the onboarding process.',
  },
  {
    q: 'How fast can you launch a new client campaign?',
    a: 'We can have a new campaign live within 48 hours of receiving the client brief. Our team is structured for fast turnarounds so your clients never wait.',
  },
  {
    q: 'What if I only have one ORM client right now?',
    a: 'That is perfectly fine. There are no minimums. Many of our agency partners started with a single client and scaled over time as they saw the results and client retention benefits.',
  },
  {
    q: 'Can I customize the reports with my own branding?',
    a: 'Absolutely. During onboarding we collect your logo, brand colors, and preferred report format. Every deliverable is fully branded to your agency before you share it with your client.',
  },
]

export default function WhiteLabelReputationManagementPage() {
  return (
    <ScrollReveal>
      <PageHero
        eyebrow="White Label ORM"
        headline="ORM Services"
        gradientText="Under Your Brand"
        description="Offer world-class online reputation management to your clients without building a team. DiamondLinks works 100% behind the scenes — your brand, your client, your credit."
        primaryCta={{ label: 'Become a Partner', href: '/free-orm-scan/' }}
        secondaryCta={{ label: 'See How It Works', href: '#process' }}
      />

      {/* Value Prop */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Built for Agencies"
            title="Add ORM to Your Service Line — Without the Overhead"
            subtitle="Your clients need reputation management. You don't need to hire a team to deliver it."
          />
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Online reputation management is one of the most in-demand services in digital
                marketing — but building an internal ORM team requires specialized expertise,
                content resources, and years of link building relationships.
              </p>
              <p>
                Our white label program lets your agency offer best-in-class ORM without any of
                that overhead. We execute every campaign under your brand, using the same
                methodology that has delivered results for our direct clients since 2011.
              </p>
            </div>
            <div>
              <p className="mb-4">
                From the initial audit to monthly reporting, everything is branded to your agency.
                Your clients will never know we exist. You retain full ownership of the
                relationship while we do the heavy lifting.
              </p>
              <p>
                Whether you have one ORM client or fifty, our operations scale with your pipeline.
                A dedicated account manager ensures quality and communication never slip as you
                grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Callout */}
      <section className="py-14 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100%', label: 'Invisible' },
              { value: 'Branded', label: 'Deliverables' },
              { value: 'Dedicated', label: 'Account Manager' },
              { value: 'Agency', label: 'Friendly Pricing' },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {item.value}
                </p>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What You Get"
            title="Everything Your Agency Needs"
            subtitle="A turnkey white label ORM program designed for agencies that want to deliver results without building a team."
          />
          <FeatureGrid features={features} columns={3} />
          <ConversionStrip
            headline="Ready to add ORM to your agency's offerings?"
            subtext="Schedule a partner call and see how the program works."
            ctaLabel="Become a Partner"
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            title="Simple, Seamless, Scalable"
            subtitle="From partner onboarding to campaign execution — here's how the white label program works."
          />
          <ProcessSteps steps={whitelabelProcess} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our white label reputation management program."
          />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner
        headline="Ready to offer ORM under your brand?"
        subtext="Join our white label program and start delivering world-class reputation management to your clients."
        ctaLabel="Become a Partner"
        ctaHref="/free-orm-scan/"
      />
    </ScrollReveal>
  )
}
