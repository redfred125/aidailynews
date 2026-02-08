import Link from 'next/link';
import { Bot, ArrowLeft, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact AI Daily News',
  description: 'Get in touch with the AI Daily News team.',
};

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-6">
              Have a tip, suggestion, or want to contribute? We'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium">Editorial</h3>
                <a href="mailto:editor@aidailynews.org" className="text-blue-400 hover:text-blue-300">
                  editor@aidailynews.org
                </a>
              </div>
              <div>
                <h3 className="text-white font-medium">Security Tips</h3>
                <a href="mailto:security@aidailynews.org" className="text-blue-400 hover:text-blue-300">
                  security@aidailynews.org
                </a>
              </div>
              <div>
                <h3 className="text-white font-medium">Advertising</h3>
                <a href="mailto:ads@aidailynews.org" className="text-blue-400 hover:text-blue-300">
                  ads@aidailynews.org
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
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
