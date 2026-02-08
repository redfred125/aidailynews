import Link from 'next/link';
import { Shield, AlertTriangle, Clock, ArrowLeft, Share2 } from 'lucide-react';

export const metadata = {
  title: 'China Warns of OpenClaw Security Risks | AI Daily News',
  description: 'Chinese authorities warn that OpenClaw AI agent could pose significant security risks when improperly configured.',
  openGraph: {
    title: 'China Warns of OpenClaw Security Risks',
    description: 'Official security advisory on the popular open-source AI agent.',
  },
};

export default function Article2() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="flex items-center space-x-4 mb-6 not-prose">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Security Alert
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              Feb 5, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            China Warns of OpenClaw Security Risks
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            BEIJING — Chinese authorities have issued an official warning about the popular open-source AI agent 
            OpenClaw, citing significant security risks when the software is improperly configured.
          </p>

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8 not-prose">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-400 font-semibold mb-2">Security Advisory</h3>
                <p className="text-gray-300 text-sm">
                  OpenClaw could pose significant security risks when improperly configured and expose users 
                  to cyberattacks and data breaches.
                </p>
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-6">
            <p>
              The warning, issued February 5, 2026, marks the first time a major government has officially 
              addressed the rapidly growing AI agent that has gained millions of users worldwide in just weeks.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Makes OpenClaw Risky</h2>

            <p>
              OpenClaw's power comes from its deep integration with user systems. Unlike cloud-based AI assistants 
              that operate in sandboxed environments, OpenClaw runs locally with broad permissions that can include:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full file system access</li>
              <li>Ability to execute system commands</li>
              <li>Integration with messaging platforms (WhatsApp, Telegram)</li>
              <li>Email and calendar access</li>
              <li>Network access for API calls</li>
            </ul>

            <p>
              This level of access, while enabling powerful automation, creates a significant attack surface. 
              A compromised OpenClaw installation could potentially:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Exfiltrate sensitive documents and data</li>
              <li>Send unauthorized messages from user accounts</li>
              <li>Install additional malware on the host system</li>
              <li>Mine cryptocurrency using system resources</li>
              <li>Establish persistent backdoors for remote access</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Official Recommendations</h2>

            <p>
              While the Chinese advisory stopped short of banning OpenClaw outright, it recommended organizations 
              and individual users take the following precautions:
            </p>

            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong className="text-white">Run in isolated environments:</strong> Use virtual machines or 
                containers to limit system access
              </li>
              <li>
                <strong className="text-white">Audit permissions regularly:</strong> Review what files and 
                systems OpenClaw has access to
              </li>
              <li>
                <strong className="text-white">Monitor network traffic:</strong> Watch for unexpected outbound 
                connections
              </li>
              <li>
                <strong className="text-white">Keep software updated:</strong> Install security patches promptly
              </li>
              <li>
                <strong className="text-white">Use API keys with limited scope:</strong> Restrict what external 
                services can be accessed
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Broader Context</h2>

            <p>
              This warning comes amid broader global concerns about AI agent security. As these tools become more 
              capable, the potential damage from a compromised agent grows exponentially.
            </p>

            <p>
              Security researchers have noted that many users install OpenClaw without fully understanding the 
              permissions they're granting. The convenience of an AI assistant that can "just do things" comes 
              with trade-offs that aren't always immediately apparent.
            </p>

            <blockquote className="border-l-4 border-red-500 pl-6 italic text-gray-400 my-8">
              "The same capabilities that make OpenClaw useful—reading files, sending messages, executing 
              commands—are exactly what make it dangerous if compromised."
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — Cybersecurity analyst, Beijing Institute of Technology
              </footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Users Should Do</h2>

            <p>
              For existing OpenClaw users, the message isn't necessarily to uninstall—it's to secure. Here's 
              a quick security checklist:
            </p>

            <div className="bg-gray-800 rounded-lg p-6 not-prose my-8">
              <h3 className="text-white font-semibold mb-4">OpenClaw Security Checklist</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" readOnly />
                  <span>Running in a VM or isolated environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" readOnly />
                  <span>API keys have minimal required permissions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" readOnly />
                  <span>No sensitive credentials in accessible directories</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" readOnly />
                  <span>Regular audit of agent logs and actions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" readOnly />
                  <span>Firewall rules restricting unexpected outbound traffic</span>
                </li>
              </ul>
            </div>

            <p>
              As AI agents become more prevalent, expect more governments and security organizations to weigh 
              in on their risks and benefits. The OpenClaw warning is likely just the beginning of a broader 
              regulatory conversation.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="text-white font-medium">Security Desk</p>
                <p className="text-gray-500 text-sm">AI agent security analysis</p>
              </div>
            </div>
          </div>
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
