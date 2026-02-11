import Link from 'next/link'
import { Bot, Github, Twitter, Rss } from 'lucide-react'

const footerLinks = {
  Frameworks: [
    { name: 'OpenClaw', href: '/tag/openclaw' },
    { name: 'Claude Code', href: '/tag/claude-code' },
    { name: 'OpenCode', href: '/tag/opencode' },
    { name: 'Google ADK', href: '/tag/google-adk' },
  ],
  Resources: [
    { name: 'Build Guides', href: '/guides' },
    { name: 'Security Alerts', href: '/security' },
    { name: 'API Docs', href: '/api-docs' },
    { name: 'RSS Feed', href: '/rss.xml' },
  ],
  About: [
    { name: 'About AI Daily News', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">AI Daily News</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Daily coverage of AI agent frameworks and personal assistants.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/your-username/aidailynews" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/aidailynews" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="/rss.xml" className="text-gray-400 hover:text-white transition-colors">
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 AI Daily News. Built with OpenClaw.</p>
        </div>
      </div>
    </footer>
  )
}
