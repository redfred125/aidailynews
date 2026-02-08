import Link from 'next/link';
import { Bot, ArrowLeft, BookOpen, Code, Shield, Terminal, Zap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Local LLM Integration | AI Daily News',
  description: 'Guide on connecting OpenClaw with local language models using Ollama and LM Studio.',
};

export default function LocalLLMIntegration() {
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
          <Code className="w-8 h-8 text-green-400" />
          <h1 className="text-4xl font-bold text-white">Local LLM Integration</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          Connect OpenClaw with local language models using Ollama and LM Studio for privacy and cost savings.
        </p>

        <article className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
          <p className="text-gray-300">
            While cloud-based AI models offer immense power, running them locally provides benefits like enhanced 
            privacy, reduced costs, and faster inference times for certain tasks. This guide shows you how to 
            integrate OpenClaw with popular local LLM solutions like Ollama and LM Studio.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Local LLMs?</h2>
          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Privacy:</strong> Your data never leaves your machine. Ideal for sensitive code or personal information.</li>
            <li><strong className="text-white">Cost Savings:</strong> Eliminates API call fees, especially beneficial for heavy usage.</li>
            <li><strong className="text-white">Speed:</strong> Can offer lower latency once loaded, particularly for non-cloud-optimized models.</li>
            <li><strong className="text-white">Customization:</strong> Allows fine-tuning models for specific tasks and preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Option 1: Using Ollama</h2>
          <p className="text-gray-300">
            Ollama simplifies running large language models locally.
          </p>
          <ol className="text-gray-300 space-y-3">
            <li>
              <strong className="text-white">Install Ollama:</strong> Download and install Ollama from <Link href="https://ollama.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ollama.ai</Link>.
            </li>
            <li>
              <strong className="text-white">Download a Model:</strong> Open your terminal and pull a model, for example, Llama 3:
              <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto my-4"><code>ollama pull llama3</code></pre>
            </li>
            <li>
              <strong className="text-white">Configure OpenClaw:</strong>
              In your OpenClaw configuration (e.g., `openclaw.json` or similar), point OpenClaw's local model setting to your Ollama endpoint. This typically involves setting an environment variable or a config option like:
              <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto my-4"><code>OPENCLAW_LOCAL_LLM_ENDPOINT=http://localhost:11434</code></pre>
              (Check OpenClaw's documentation for the exact configuration method.)
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Option 2: Using LM Studio</h2>
          <p className="text-gray-300">
            LM Studio provides a GUI for downloading and running LLMs locally.
          </p>
          <ol className="text-gray-300 space-y-3">
            <li>
              <strong className="text-white">Install LM Studio:</strong> Download and install LM Studio from <Link href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">lmstudio.ai</Link>.
            </li>
            <li>
              <strong className="text-white">Download a Model:</strong> Use the LM Studio UI to search for and download a model (e.g., Mistral 7B Instruct).
            </li>
            <li>
              <strong className="text-white">Start the Local Server:</strong> In LM Studio, navigate to the "Local Server" tab and start the server. Note the local API endpoint (usually `http://localhost:1234`).
            </li>
            <li>
              <strong className="text-white">Configure OpenClaw:</strong> Similar to Ollama, point OpenClaw's local model setting to the LM Studio server endpoint.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Important Considerations</h2>
          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Hardware Requirements:</strong> Running LLMs locally requires significant RAM and often a capable GPU. Check the model's requirements.</li>
            <li><strong className="text-white">Model Performance:</strong> Local models may not perform as well as top-tier cloud models for all tasks. Experiment to find models that fit your needs.</li>
            <li><strong className="text-white">OpenClaw Documentation:</strong> Always refer to the official OpenClaw documentation for the most up-to-date configuration details for local LLM integration.</li>
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
