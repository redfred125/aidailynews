import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | AI Daily News',
  description: 'Privacy policy for AI Daily News',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: February 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
            <p className="text-gray-300">
              AI Daily News ("we," "our," or "us") respects your privacy. This Privacy
              Policy explains how we collect, use, and protect your information when you
              visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              Information You Provide
            </h3>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Email address (when subscribing to our newsletter)</li>
              <li>Name (optional, for newsletter personalization)</li>
              <li>Feedback and correspondence you send us</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Automatically Collected Information
            </h3>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>IP address (anonymized)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              How We Use Your Information
            </h2>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Send you our newsletter (if subscribed)</li>
              <li>Improve our website and content</li>
              <li>Analyze usage patterns</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Cookies</h2>
            <p className="text-gray-300">
              We use essential cookies to make our website work properly. We do not use
              tracking or advertising cookies. You can disable cookies in your browser
              settings, but this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Data Sharing</h2>
            <p className="text-gray-300">
              We do not sell, trade, or rent your personal information to third parties.
              We may share information with:
            </p>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>
                Service providers (e.g., email service for newsletters) under strict
                confidentiality agreements
              </li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect
              your data against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Children's Privacy</h2>
            <p className="text-gray-300">
              Our website is not intended for children under 13. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by posting a notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-gray-300">
              For privacy-related questions or to exercise your rights, contact us at:{' '}
              <a href="mailto:privacy@aidailynews.com" className="text-blue-400">
                privacy@aidailynews.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
