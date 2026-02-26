import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | DiamondLinks',
  alternates: { canonical: 'https://diamondlinks.com/terms-of-service/' },
}

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the DiamondLinks website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Services Description</h2>
            <p className="text-gray-600 leading-relaxed">
              DiamondLinks provides online reputation management (ORM) and search engine optimization (SEO) consulting and services. Our services include, but are not limited to, reputation analysis, content strategy, search result optimization, link building, and ongoing reputation monitoring. Specific deliverables and timelines are defined in individual client agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Client Obligations</h2>
            <p className="text-gray-600 leading-relaxed">As a client, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 mt-3">
              <li>Provide accurate and complete information as needed for service delivery</li>
              <li>Respond to communications in a timely manner</li>
              <li>Not use our services for any unlawful or fraudulent purpose</li>
              <li>Not misrepresent the nature of content or information provided to us</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Payment terms, including fees, billing frequency, and accepted payment methods, are outlined in your individual service agreement. Invoices are due upon receipt unless otherwise specified. Late payments may result in suspension of services. We reserve the right to adjust pricing with reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Confidentiality</h2>
            <p className="text-gray-600 leading-relaxed">
              We understand the sensitive nature of reputation management. All client information, strategies, and communications are treated as confidential. We will not disclose your information to third parties without your consent, except as required by law or as necessary to deliver our services through trusted partners bound by confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              DiamondLinks provides services on a best-effort basis. While we work diligently to achieve the results outlined in your service agreement, we cannot guarantee specific search engine rankings, removal of third-party content, or particular outcomes, as these depend on factors outside our control including search engine algorithms and third-party platforms. Our total liability shall not exceed the fees paid for the services in question.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content, strategies, and materials created by DiamondLinks remain our intellectual property until full payment has been received for the applicable services. Upon full payment, content created specifically for your campaign is licensed for your use. Our proprietary methods, processes, and tools remain the property of DiamondLinks.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not require long-term contracts. Either party may terminate services with 30 days written notice. Upon termination, you are responsible for payment of any services rendered through the termination date. We will provide a final report of work completed and transition any applicable assets.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Louisiana, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be resolved in the courts of Orleans Parish, Louisiana.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-3 text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-900">DiamondLinks</p>
              <p>3436 Magazine St #622</p>
              <p>New Orleans, LA 70115</p>
              <p>Phone: 504.233.4365</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
