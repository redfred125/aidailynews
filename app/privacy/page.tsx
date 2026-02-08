import Link from 'next/link';
import { Bot, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | AI Daily News',
  description: 'How we handle your data at AI Daily News.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Daily News
              </span>
            </Link>
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">Last updated: February 8, 2026</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Overview</h2>
          <p className="text-gray-300">
            AI Daily News respects your privacy. This policy explains what data we collect and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Newsletter:</strong> Email address (only if you subscribe)</li>
            <li><strong className="text-white">Analytics:</strong> Anonymous usage data via Google Analytics</li>
            <li><strong className="text-white">Contact:</strong> Information you provide when contacting us</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Data</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Send newsletters (only to subscribers)</li>
            <li>Improve our content and website</li>
            <li>Respond to your inquiries</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What We Don't Do</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Sell your data to third parties</li>
            <li>Share email addresses with advertisers</li>
            <li>Track you across the web</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
          <p className="text-gray-300">
            Questions? Email us at{' '}
            <a href="mailto:privacy@aidailynews.org" className="text-blue-400 hover:text-blue-300">
              privacy@aidailynews.org
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 AI Daily News. Built with OpenClaw.
          </p>
        </div>
      </footer>
    </div>
  );
}
