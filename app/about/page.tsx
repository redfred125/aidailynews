import Link from 'next/link';
import { Bot, ArrowLeft, Mail, Github, Twitter } from 'lucide-react';

export const metadata = {
  title: 'About AI Daily News | AI Agent Frameworks Coverage',
  description: 'We cover AI agent frameworks, personal assistants, and the future of autonomous AI.',
};

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8">About AI Daily News</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-400 mb-8">
            We are the definitive source for AI agent frameworks, personal assistants, and the future of autonomous AI.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            AI agents are transforming how we work, build, and interact with technology. 
            But finding reliable information about OpenClaw, Claude Code, OpenCode, Google ADK, 
            and other frameworks is surprisingly difficult. We're changing that.
          </p>
          <p className="text-gray-300">
            Our goal is simple: be the most useful source of AI agent news for builders and practitioners. 
            No hype. No clickbait. Just what you need to know.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What We Cover</h2>
          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Framework Updates:</strong> New releases, features, and breaking changes</li>
            <li><strong className="text-white">Security Alerts:</strong> Prompt injection risks, vulnerabilities, best practices</li>
            <li><strong className="text-white">Build Guides:</strong> Real tutorials from people actually using these tools</li>
            <li><strong className="text-white">Comparisons:</strong> Head-to-head analysis of competing frameworks</li>
            <li><strong className="text-white">Community:</strong> What people are actually building</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Editorial Standards</h2>
          <p className="text-gray-300">
            We don't publish press releases. Every article is researched, tested where possible, 
            and written for practitioners. If we haven't used a tool, we say so. If something 
            doesn't work as advertised, we report that too.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:editor@aidailynews.org" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              editor@aidailynews.org
            </a>
            <a href="https://github.com/redfred125/aidailynews" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://twitter.com/aidailynews" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5 mr-2" />
              @aidailynews
            </a>
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
