import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DiamondLinks',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <p className="text-gray-600 leading-relaxed">
              DiamondLinks (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at DiamondLinks.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information that you voluntarily provide to us when you fill out a form on our website, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any additional information you include in a message or inquiry</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 mt-3">
              <li>Respond to your inquiries and requests</li>
              <li>Provide our online reputation management and SEO services</li>
              <li>Communicate with you about your account or our services</li>
              <li>Improve our website and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided those parties agree to keep your information confidential. We may also disclose your information when required by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses cookies and similar technologies to analyze site traffic and understand how visitors interact with our pages. These cookies help us improve our website and your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal information at any time. To exercise these rights, please contact us using the information below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
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
