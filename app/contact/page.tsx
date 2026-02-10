import Link from 'next/link'
import { ArrowLeft, Mail, MessageSquare, Shield, FileText } from 'lucide-react'

export const metadata = {
  title: 'Contact | AI Daily News',
  description: 'Get in touch with AI Daily News',
}

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>

        <p className="text-xl text-gray-400 mb-12">
          Have a question, story, or suggestion? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">General Inquiries</h2>
            <p className="text-gray-400 mb-4">
              Questions about our coverage, partnership opportunities, or general
              feedback.
            </p>
            <a
              href="mailto:hello@aidailynews.com"
              className="text-blue-400 hover:text-blue-300"
            >
              hello@aidailynews.com
            </a>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <Shield className="w-8 h-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Security Issues</h2>
            <p className="text-gray-400 mb-4">
              Report security vulnerabilities in AI agent frameworks. GPG key available.
            </p>
            <a
              href="mailto:security@aidailynews.com"
              className="text-red-400 hover:text-red-300"
            >
              security@aidailynews.com
            </a>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <FileText className="w-8 h-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Submit a Story</h2>
            <p className="text-gray-400 mb-4">
              Share your AI agent use case, project, or tutorial idea with our team.
            </p>
            <a
              href="mailto:submit@aidailynews.com"
              className="text-purple-400 hover:text-purple-300"
            >
              submit@aidailynews.com
            </a>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <MessageSquare className="w-8 h-8 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Editorial</h2>
            <p className="text-gray-400 mb-4">
              Corrections, clarifications, or editorial suggestions for published
              articles.
            </p>
            <a
              href="mailto:editorial@aidailynews.com"
              className="text-green-400 hover:text-green-300"
            >
              editorial@aidailynews.com
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 mb-4">
            Connect with other AI agent developers, share your projects, and stay
            updated on the latest news.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://discord.gg/aidailynews"
              className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Discord Community
            </a>
            <a
              href="https://twitter.com/aidailynews"
              className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/aidailynews"
              className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
