import Link from 'next/link';
import { Bot, ArrowLeft, BookOpen, Code, Shield, Terminal } from 'lucide-react';

export const metadata = {
  title: 'Build Guides | AI Daily News',
  description: 'Step-by-step guides for building with AI agent frameworks.',
};

const guides = [
  {
    title: 'Getting Started with OpenClaw',
    description: 'Install, configure, and deploy your first OpenClaw agent on WhatsApp.',
    level: 'Beginner',
    time: '30 min',
    icon: Bot,
    color: 'blue',
  },
  {
    title: 'Securing Your AI Agent',
    description: 'Best practices for token authentication, SSH tunnels, and access controls.',
    level: 'Intermediate',
    time: '45 min',
    icon: Shield,
    color: 'red',
  },
  {
    title: 'Claude Code Workflow Setup',
    description: 'Configure Claude Code for maximum productivity in your development environment.',
    level: 'Beginner',
    time: '20 min',
    icon: Terminal,
    color: 'purple',
  },
  {
    title: 'Local LLM Integration',
    description: 'Run Ollama with OpenClaw for privacy and cost savings.',
    level: 'Advanced',
    time: '60 min',
    icon: Code,
    color: 'green',
  },
];

export default function GuidesPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Build Guides</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Step-by-step tutorials for building with AI agent frameworks. 
            From your first OpenClaw setup to production deployment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${guide.color}-500/10 flex items-center justify-center group-hover:bg-${guide.color}-500/20 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${guide.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-gray-500">{guide.level}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{guide.time}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{guide.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="text-blue-400 text-sm font-medium flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Guide →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-gray-400 mb-4">
            Have you built something interesting with AI agents? Share your knowledge with the community.
          </p>
          <a href="mailto:guides@aidailynews.org" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            Submit a Guide
          </a>
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
