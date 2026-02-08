import Link from 'next/link';
import { Bot, ArrowLeft, Clock, Bot as BotIcon, Terminal, Zap, Sparkles, Shield, BookOpen, TrendingUp, Search } from 'lucide-react';

export const metadata = {
  title: 'Archive | AI Daily News',
  description: 'All articles on AI agent frameworks.',
};

const articles = [
  {
    id: 10,
    title: 'Enhancing AI Agent Search Capabilities',
    excerpt: 'Research highlights methods to help AI agents search more effectively within LLMs for optimal results.',
    tag: 'LLM Optimization',
    color: 'red',
    icon: Search,
    readTime: '8 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 9,
    title: 'Moltbook\'s Swarm Intelligence Framework',
    excerpt: 'Exploring Moltbook\'s new framework that enables multiple AI agents to collaborate simultaneously on complex tasks.',
    tag: 'Swarm Intelligence',
    color: 'purple',
    icon: TrendingUp,
    readTime: '6 min',
    date: 'Feb 3, 2026',
  },
  {
    id: 8,
    title: 'AI Agents Replacing Frameworks? The Shifting Landscape of Coding',
    excerpt: 'A deep dive into how AI agents are streamlining development, potentially reducing reliance on traditional coding frameworks.',
    tag: 'AI Coding',
    color: 'green',
    icon: BotIcon,
    readTime: '9 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 7,
    title: 'OpenAI Frontier: Enterprise AI Agent Platform',
    excerpt: 'OpenAI introduces Frontier, a new platform designed for enterprises to build, deploy, and manage AI agents efficiently.',
    tag: 'OpenAI',
    color: 'purple',
    icon: BotIcon,
    readTime: '7 min',
    date: 'Feb 7, 2026',
  },
  {
    id: 6,
    title: 'AI Agent Frameworks Landscape - February 2026',
    excerpt: 'Insights into task orchestration, communication infrastructure, and human-AI interaction protocols shaping the industry.',
    tag: 'Frameworks',
    color: 'blue',
    icon: BookOpen,
    readTime: '10 min',
    date: 'Feb 8, 2026',
  },
  {
    id: 1,
    title: 'OpenClaw: The AI Agent Taking Over WhatsApp',
    excerpt: 'Through several name changes and mounting controversy, OpenClaw has emerged as the most talked-about AI agent of 2026.',
    tag: 'OpenClaw',
    color: 'blue',
    icon: BotIcon,
    readTime: '6 min',
    date: 'Feb 7, 2026',
  },
  {
    id: 2,
    title: 'China Warns of OpenClaw Security Risks',
    excerpt: 'Chinese authorities issue official warning that the popular open-source AI agent could pose significant security risks.',
    tag: 'Security',
    color: 'red',
    icon: Shield,
    readTime: '5 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 3,
    title: 'Claude Code vs Traditional IDEs: Real Developer Workflows',
    excerpt: 'We spent two weeks using Claude Code as our primary development tool. Here\'s what worked and what didn\'t.',
    tag: 'Claude Code',
    color: 'purple',
    icon: Terminal,
    readTime: '8 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 4,
    title: 'OpenCode Emerges as Open-Source Alternative',
    excerpt: 'A community-driven coding agent promises AI-assisted development without vendor lock-in.',
    tag: 'OpenCode',
    color: 'green',
    icon: Zap,
    readTime: '6 min',
    date: 'Feb 4, 2026',
  },
  {
    id: 5,
    title: 'Google ADK: Enterprise AI Agents Made Simple',
    excerpt: 'Google\'s Agent Development Kit brings AI agents to the enterprise with BigQuery integration.',
    tag: 'Google ADK',
    color: 'orange',
    icon: Sparkles,
    readTime: '7 min',
    date: 'Feb 4, 2026',
  },
];

export default function ArchivePage() {
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
        <h1 className="text-4xl font-bold text-white mb-8">All Articles</h1>
        
        <div className="grid gap-6">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <article key={article.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${article.color}-500/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${article.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium bg-${article.color}-500/10 text-${article.color}-400`}>
                        {article.tag}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                      <Link href={`/article/${article.id}`}>{article.title}</Link>
                    </h2>
                    <p className="text-gray-400 mb-3">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime} read
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
