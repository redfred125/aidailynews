import Link from 'next/link'
import { ArrowLeft, Shield, AlertTriangle, CheckCircle } from 'lucide-react'
import { getAllArticles } from '@/app/lib/data'

export const metadata = {
  title: 'Security Alerts | AI Daily News',
  description: 'Latest security alerts and vulnerabilities for AI agent frameworks',
}

export default function SecurityPage() {
  const securityArticles = getAllArticles().filter(
    (article) => article.type === 'security' || article.type === 'alert'
  )

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Security Alerts</h1>
          </div>
          <p className="text-xl text-gray-400">
            Stay informed about security vulnerabilities and best practices for AI agent
            frameworks
          </p>
        </div>

        {/* Alert Banner */}
        <div className="mb-8 p-6 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                Responsible Disclosure
              </h2>
              <p className="text-gray-300 mb-3">
                If you discover a security vulnerability in any AI agent framework,
                please report it responsibly to the framework maintainers first. Do not
                publicly disclose vulnerabilities until patches are available.
              </p>
              <Link
                href="/contact"
                className="text-amber-400 hover:text-amber-300 font-medium"
              >
                Report a vulnerability →
              </Link>
            </div>
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Verify Skills & Plugins
            </h3>
            <p className="text-gray-400 text-sm">
              Always audit third-party skills and plugins before installation. Check
              source code for suspicious patterns.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Use Sandboxing
            </h3>
            <p className="text-gray-400 text-sm">
              Enable sandboxed execution for agent skills to limit filesystem and
              network access.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Regular Updates
            </h3>
            <p className="text-gray-400 text-sm">
              Keep your agent frameworks and dependencies up to date with the latest
              security patches.
            </p>
          </div>
        </div>

        {/* Security Articles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Recent Security Articles</h2>

          {securityArticles.length === 0 ? (
            <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
              <Shield className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No security alerts at this time</p>
            </div>
          ) : (
            <div className="space-y-4">
              {securityArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="article-card group flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        article.type === 'alert'
                          ? 'bg-red-500/10 border border-red-500/20'
                          : 'bg-amber-500/10 border border-amber-500/20'
                      }`}
                    >
                      {article.type === 'alert' ? (
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      ) : (
                        <Shield className="w-6 h-6 text-amber-400" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${article.tag.color}-500/10 text-${article.tag.color}-400`}
                      >
                        {article.tag.name}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <span
                        className={`text-xs font-medium ${
                          article.type === 'alert' ? 'text-red-400' : 'text-amber-400'
                        }`}
                      >
                        {article.type === 'alert' ? 'CRITICAL' : 'SECURITY'}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Resources */}
        <div className="mt-12 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Security Resources
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a href="/guides" className="text-blue-400 hover:text-blue-300">
                Security best practices guide →
              </a>
            </li>
            <li>
              <a href="/contact" className="text-blue-400 hover:text-blue-300">
                Report a vulnerability →
              </a>
            </li>
            <li>
              <a href="/archive" className="text-blue-400 hover:text-blue-300">
                View all security articles →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
