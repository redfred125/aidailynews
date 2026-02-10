import Link from 'next/link'
import { ArrowLeft, Code, Database, Zap } from 'lucide-react'

export const metadata = {
  title: 'API Documentation | AI Daily News',
  description: 'API documentation for AI Daily News',
}

export default function ApiDocsPage() {
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
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">API Documentation</h1>
          </div>
          <p className="text-xl text-gray-400">
            Access AI Daily News content programmatically
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mb-12 p-6 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <h2 className="text-xl font-semibold text-white mb-2">
            API Coming Soon
          </h2>
          <p className="text-gray-300">
            We're working on a public API to provide programmatic access to our content.
            Subscribe to our newsletter to be notified when it launches.
          </p>
        </div>

        {/* Planned Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Planned Features</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Database className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Articles Endpoint
              </h3>
              <p className="text-gray-400 mb-3">
                Access our full article database with filtering and search capabilities.
              </p>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm text-gray-300">
                GET /api/v1/articles
                <br />
                GET /api/v1/articles/:id
                <br />
                GET /api/v1/articles?tag=openclaw
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Guides Endpoint
              </h3>
              <p className="text-gray-400 mb-3">
                Retrieve build guides and tutorials for AI agent frameworks.
              </p>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm text-gray-300">
                GET /api/v1/guides
                <br />
                GET /api/v1/guides/:id
                <br />
                GET /api/v1/guides?framework=claude-code
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Code className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Security Alerts
              </h3>
              <p className="text-gray-400 mb-3">
                Real-time feed of security vulnerabilities and alerts.
              </p>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm text-gray-300">
                GET /api/v1/security/alerts
                <br />
                GET /api/v1/security/alerts/:id
                <br />
                GET /api/v1/security/alerts?severity=critical
              </div>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
          <p className="text-gray-300 mb-4">
            The API will use API key authentication. You'll be able to generate keys
            from your account dashboard.
          </p>
          <div className="bg-gray-800 p-4 rounded border border-gray-700">
            <code className="text-blue-400 font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </div>

        {/* Rate Limits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Planned Rate Limits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="font-semibold text-white mb-2">Free Tier</h3>
              <p className="text-gray-400 text-sm">
                100 requests/hour
                <br />
                1,000 requests/day
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="font-semibold text-white mb-2">Pro Tier</h3>
              <p className="text-gray-400 text-sm">
                1,000 requests/hour
                <br />
                10,000 requests/day
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-2">
            Interested in Early Access?
          </h2>
          <p className="text-gray-300 mb-4">
            We're looking for early adopters to test the API. If you're interested in
            programmatic access to our content, let us know.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Request Early Access
          </Link>
        </div>
      </div>
    </div>
  )
}
