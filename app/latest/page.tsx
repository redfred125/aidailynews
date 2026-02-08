import Link from 'next/link';
import { Bot, ArrowLeft, Clock, Bot as BotIcon, Terminal, Zap, Sparkles, Shield, Search } from 'lucide-react';

export const metadata = {
  title: 'AI Agent Frameworks News - February 2026 | AI Daily News',
  description: 'Latest news and updates on AI agent frameworks and their evolving capabilities.',
  openGraph: {
    title: 'AI Agent Frameworks Landscape - February 2026',
    description: 'Insights into task orchestration, swarm intelligence, and the future of AI agents.',
  },
};

export default function LatestNewsPage() {
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

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Latest AI Agent News</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Updates, insights, and analyses on AI agent frameworks as of February 2026.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 6: AI Agent Frameworks Landscape */}
          <article className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Frameworks</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              <Link href="/article/6">AI Agent Frameworks Landscape - February 2026</Link>
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Insights into task orchestration, communication infrastructure, and human-AI interaction protocols shaping the industry.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              10 min read
            </div>
          </article>

          {/* Article 7: OpenAI Frontier */}
          <article className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group">
            <div className="flex items-center space-x-2 mb-4">
              <BotIcon className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">OpenAI</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              <Link href="/article/7">OpenAI Frontier: Enterprise AI Agent Platform</Link>
            </h2>
            <p className="text-gray-400 mb-4">
              OpenAI introduces Frontier, a new platform designed for enterprises to build, deploy, and manage AI agents efficiently.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              7 min read
            </div>
          </article>

          {/* Article 8: AI Coding Agents */}
          <article className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">AI Coding</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              <Link href="/article/8">AI Agents Replacing Frameworks? The Shifting Landscape of Coding</Link>
            </h2>
            <p className="text-gray-400 mb-4">
              A deep dive into how AI agents are streamlining development, potentially reducing reliance on traditional coding frameworks.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              9 min read
            </div>
          </article>

          {/* Article 9: Moltbook Swarm Intelligence */}
          <article className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUpIcon className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Swarm Intelligence</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              <Link href="/article/9">Moltbook's Swarm Intelligence Framework</Link>
            </h2>
            <p className="text-gray-400 mb-4">
              Exploring Moltbook's new framework that enables multiple AI agents to collaborate simultaneously on complex tasks.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              6 min read
            </div>
          </article>
          
          {/* Article 10: Enhancing AI Agent Search */}
          <article className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-400">LLM Optimization</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              <Link href="/article/10">Enhancing AI Agent Search Capabilities</Link>
            </h2>
            <p className="text-gray-400 mb-4">
              Research highlights methods to help AI agents search more effectively within LLMs for optimal results.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              8 min read
            </div>
          </article>
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
