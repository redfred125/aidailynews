import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | AI Daily News',
  description: 'Terms of service for AI Daily News',
}

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: February 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Agreement to Terms
            </h2>
            <p className="text-gray-300">
              By accessing AI Daily News, you agree to be bound by these Terms of
              Service and all applicable laws and regulations. If you do not agree with
              any of these terms, you are prohibited from using this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily view and read the content on AI Daily
              News for personal, non-commercial use only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>
                Attempt to decompile or reverse engineer any software on the website
              </li>
              <li>Remove copyright or proprietary notations from materials</li>
              <li>Transfer materials to another person or mirror on another server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Content Guidelines
            </h2>
            <p className="text-gray-300">
              Our content is provided for informational purposes. While we strive for
              accuracy, we make no warranties about the completeness, reliability, or
              accuracy of this information. Any action you take based on our content is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Security Information
            </h2>
            <p className="text-gray-300">
              Security vulnerabilities and alerts published on AI Daily News are for
              educational and defensive purposes only. You agree not to use this
              information for malicious purposes or unauthorized access to systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Code Examples</h2>
            <p className="text-gray-300">
              Code examples and tutorials are provided "as is" without warranty. Test
              all code in development environments before production use. We are not
              responsible for any issues arising from implementation of our examples.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Intellectual Property
            </h2>
            <p className="text-gray-300">
              The content, organization, graphics, design, and other matters related to
              AI Daily News are protected under applicable copyrights and other
              proprietary laws. Copying, redistribution, or publication of any such
              matters is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              User-Submitted Content
            </h2>
            <p className="text-gray-300">
              If you submit content to us (articles, guides, comments), you grant us a
              non-exclusive, royalty-free, perpetual license to use, modify, and publish
              that content. You represent that you own or have permission to submit such
              content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Links to Third-Party Sites
            </h2>
            <p className="text-gray-300">
              AI Daily News may contain links to third-party websites. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-300">
              In no event shall AI Daily News or its contributors be liable for any
              damages arising out of the use or inability to use the materials on our
              website, even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Modifications to Terms
            </h2>
            <p className="text-gray-300">
              AI Daily News may revise these Terms of Service at any time without
              notice. By using this website, you agree to be bound by the current
              version of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Governing Law</h2>
            <p className="text-gray-300">
              These terms shall be governed by and construed in accordance with the laws
              of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms, contact us at:{' '}
              <a href="mailto:legal@aidailynews.com" className="text-blue-400">
                legal@aidailynews.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
