import Link from 'next/link';
import { Bot, ArrowLeft, AlertTriangle, Shield, Clock } from 'lucide-react';

export const metadata = {
  title: 'Security Alerts | AI Daily News',
  description: 'Security vulnerabilities and best practices for AI agent frameworks.',
};

const alerts = [
  {
    id: 'SEC-2026-001',
    title: 'OpenClaw Improper Configuration Risk',
    severity: 'High',
    date: 'Feb 5, 2026',
    summary: 'Chinese authorities warn that improperly configured OpenClaw instances can expose users to cyberattacks and data breaches.',
    article: 2,
  },
  {
    id: 'SEC-2026-002',
    title: 'Prompt Injection in Public Skills Registry',
    severity: 'Medium',
    date: 'Feb 3, 2026',
    summary: 'Multiple skills on public registries found to contain prompt injection attempts. Audit your installed skills.',
    article: null,
  },
  {
    id: 'SEC-2026-003',
    title: 'API Key Exposure in Logs',
    severity: 'High',
    date: 'Feb 1, 2026',
    summary: 'Some AI agent frameworks log API keys in plaintext. Verify your logging configuration.',
    article: null,
  },
];

const severityColors: Record<string, string> = {
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  High: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export default function SecurityPage() {
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
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="w-8 h-8 text-red-400" />
          <h1 className="text-4xl font-bold text-white">Security Alerts</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          Critical security information for AI agent frameworks. 
          We monitor vulnerabilities so you don't have to.
        </p>

        <div className="grid gap-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <span className="text-gray-500 font-mono text-sm">{alert.id}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${severityColors[alert.severity]}`}>
                    <AlertTriangle className="w-3 h-3 inline mr-1" />
                    {alert.severity}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {alert.date}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-2">
                {alert.title}
              </h2>
              <p className="text-gray-400 mb-4">{alert.summary}</p>
              
              {alert.article && (
                <Link 
                  href={`/article/${alert.article}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Read Full Report →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Security Best Practices</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Run AI agents in isolated environments (VMs or containers)</span>
            </li>
            <li className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Use API keys with minimal required permissions</span>
            </li>
            <li className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Regularly audit installed skills and their permissions</span>
            </li>
            <li className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Monitor network traffic for unexpected outbound connections</span>
            </li>
            <li className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Keep agent software updated with security patches</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Found a vulnerability? Report it securely to{' '}
            <a href="mailto:security@aidailynews.org" className="text-blue-400 hover:text-blue-300">
              security@aidailynews.org
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
