import Link from 'next/link';
import { Bot, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | AI Daily News',
  description: 'Terms and conditions for using AI Daily News.',
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">Last updated: February 8, 2026</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-300">
            By accessing AI Daily News, you agree to these terms. If you disagree, please don't use our site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Content</h2>
          <p className="text-gray-300">
            All content on AI Daily News is for informational purposes only. We strive for accuracy but make 
            no guarantees. Always verify critical information independently.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-300">
            Articles and content are © 2026 AI Daily News. You may share excerpts with attribution. 
            Commercial use requires written permission.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Conduct</h2>
          <p className="text-gray-300">Don't use our site to:</p>
          <ul className="text-gray-300 space-y-2">
            <li>Spread malware or conduct attacks</li>
            <li>Scrape content without permission</li>
            <li>Harass other users</li>
            <li>Violate any applicable laws</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-300">
            AI Daily News is not liable for any damages arising from use of our site or reliance on our content.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes</h2>
          <p className="text-gray-300">
            We may update these terms. Continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
          <p className="text-gray-300">
            Questions? Email{' '}
            <a href="mailto:legal@aidailynews.org" className="text-blue-400 hover:text-blue-300">
              legal@aidailynews.org
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
