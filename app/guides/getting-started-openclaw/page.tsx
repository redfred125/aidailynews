import Link from 'next/link';
import { Bot, ArrowLeft, BookOpen, Code, Shield, Terminal, Zap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Getting Started with OpenClaw | AI Daily News',
  description: 'Your first steps with OpenClaw: install, configure, and run your first agent.',
};

export default function GettingStartedOpenClaw() {
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
            <Link href="/guides/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <Bot className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl font-bold text-white">Getting Started with OpenClaw</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          Your first steps with OpenClaw: install, configure, and run your first agent on WhatsApp.
        </p>

        <article className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
          <p className="text-gray-300">
            OpenClaw is an exciting open-source AI agent that empowers you to automate tasks and interact 
            with services through messaging platforms like WhatsApp. This guide will walk you through 
            getting OpenClaw up and running on your system.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prerequisites</h2>
          <p className="text-gray-300">Before you begin, ensure you have the following:</p>
          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Node.js:</strong> Version 18.x or higher.</li>
            <li><strong className="text-white">NPM or Yarn:</strong> Package manager for Node.js.</li>
            <li><strong className="text-white">WhatsApp Account:</strong> A personal WhatsApp number to link.</li>
            <li><strong className="text-white">OpenClaw Account (Optional):</strong> For cloud-hosted deployments, though this guide focuses on local setup.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Installation</h2>
          <p className="text-gray-300">
            OpenClaw is typically installed via npm. Open your terminal and run the following command:
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto"><code>npm install -g openclaw</code></pre>
          <p className="text-gray-300 mt-4">
            This global installation ensures the `openclaw` command is available in your environment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 2: Initial Configuration</h2>
          <p className="text-gray-300">
            After installation, you'll need to configure OpenClaw's connection to WhatsApp. This is usually done via a pairing process.
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto"><code>openclaw whatsapp login start</code></pre>
          <p className="text-gray-300 mt-4">
            This command will generate a QR code. Open your WhatsApp application, go to "Linked Devices," and scan the QR code.
          </p>
          <p className="text-gray-300 mt-2">
            Follow the on-screen prompts in your terminal to approve the connection.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Running Your First Agent</h2>
          <p className="text-gray-300">
            Once configured, you can start OpenClaw. For basic interactive use, you might run:
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto"><code>openclaw gateway start</code></pre>
          <p className="text-gray-300 mt-4">
            This starts the OpenClaw gateway, allowing it to listen for commands and process messages.
          </p>
          <p className="text-gray-300 mt-2">
            You can then interact with OpenClaw through your linked WhatsApp number. Try sending a simple command like "Hello" or "What's the current time?".
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Next Steps</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Explore OpenClaw commands and capabilities.</li>
            <li>Read about <Link href="/guides/securing-ai-agent" className="text-blue-400 hover:underline">securing your AI agent</Link>.</li>
            <li>Configure specialized skills to extend OpenClaw's functionality.</li>
          </ul>
        </article>
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
