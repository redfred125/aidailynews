import Link from 'next/link'
import { ArrowLeft, Target, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'About | AI Daily News',
  description: 'Learn about AI Daily News and our mission to cover AI agent frameworks',
}

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold text-white mb-6">About AI Daily News</h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-400 mb-8">
            AI Daily News is your trusted source for news, guides, and insights about AI
            agent frameworks.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Target className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                Cover the real stories behind AI agent frameworks - what people are
                actually building, not just hype.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Users className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Our Team</h3>
              <p className="text-gray-400 text-sm">
                Engineers and researchers who've built production AI agents and know the
                challenges firsthand.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Zap className="w-8 h-8 text-orange-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Our Focus</h3>
              <p className="text-gray-400 text-sm">
                OpenClaw, Claude Code, OpenCode, Google ADK - the frameworks defining
                the AI agent revolution.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What We Cover</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Real-world use cases and case studies</li>
            <li>Security alerts and best practices</li>
            <li>Step-by-step build guides and tutorials</li>
            <li>Framework comparisons and benchmarks</li>
            <li>Community news and updates</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why AI Daily News?</h2>
          <p className="text-gray-300">
            The AI agent space is moving fast. Too fast for traditional tech media to
            keep up. We're a specialized publication focused exclusively on the
            frameworks, tools, and techniques that matter to developers building AI
            agents today.
          </p>

          <p className="text-gray-300">
            No fluff. No hype. Just practical insights from people who've been in the
            trenches.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            Have a story to share? Want to contribute a guide? Found a security issue?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mt-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
