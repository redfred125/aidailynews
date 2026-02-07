import Link from 'next/link'
import { Clock, Shield, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'

// Placeholder articles - these would come from your content API
const articles = [
  {
    id: 1,
    title: 'OpenClaw Dashboard v2: Local API Security with Token Auth',
    excerpt: 'How to secure your AI agent dashboard with API tokens, SSH tunnels, and proper access controls when exposing to the internet.',
    tag: { name: 'OpenClaw', color: 'blue' },
    type: 'security',
    readTime: '5 min',
    date: 'Feb 7, 2026',
    featured: true,
  },
  {
    id: 2,
    title: 'Model Router: Auto-Selecting AI Models by Task Type',
    excerpt: 'Building an intelligent router that picks the right LLM for coding, reasoning, vision, and creative tasks based on benchmark performance.',
    tag: { name: 'OpenClaw', color: 'blue' },
    type: 'tutorial',
    readTime: '8 min',
    date: 'Feb 6, 2026',
  },
  {
    id: 3,
    title: 'Claude Code vs OpenCode: Agent Framework Comparison',
    excerpt: 'A hands-on comparison of two leading AI coding agents. Which handles complex refactoring better? Security implications?',
    tag: { name: 'Claude Code', color: 'purple' },
    type: 'comparison',
    readTime: '12 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 4,
    title: 'Security Alert: Malicious Skills on Public Registries',
    excerpt: 'Prompt injection attempts found in publicly available AI agent skills. How to audit and protect your agent infrastructure.',
    tag: { name: 'Security', color: 'red' },
    type: 'alert',
    readTime: '4 min',
    date: 'Feb 5, 2026',
  },
  {
    id: 5,
    title: 'Google ADK: Building Business-Critical Agents',
    excerpt: 'Using Google\'s Agent Development Kit with Cloud SQL, BigQuery, and enterprise integrations. First production deployment lessons.',
    tag: { name: 'Google ADK', color: 'orange' },
    type: 'case-study',
    readTime: '15 min',
    date: 'Feb 4, 2026',
  },
]

const typeIcons = {
  security: Shield,
  alert: AlertTriangle,
  tutorial: CheckCircle,
  comparison: ExternalLink,
  'case-study': CheckCircle,
}

export default function LatestNews() {
  const featured = articles.find(a => a.featured)
  const regular = articles.filter(a => !a.featured)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Latest Stories</h2>
        <Link href="/archive" className="text-blue-400 hover:text-blue-300 text-sm">
          View All →
        </Link>
      </div>

      {/* Featured Article */}
      {featured && (
        <article className="article-card mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            FEATURED
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-${featured.tag.color}-500/10 text-${featured.tag.color}-400 border border-${featured.tag.color}-500/20`}>
              {featured.tag.name}
            </span>
            {featured.type === 'security' && (
              <span className="inline-flex items-center text-amber-400 text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Security
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">
            <Link href={`/article/${featured.id}`}>{featured.title}</Link>
          </h3>
          
          <p className="text-gray-400 mb-4">{featured.excerpt}</p>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {featured.readTime}
            </span>
            <span>{featured.date}</span>
          </div>
        </article>
      )}

      {/* Regular Articles */}
      <div className="space-y-4">
        {regular.map((article) => {
          const Icon = typeIcons[article.type as keyof typeof typeIcons] || CheckCircle
          
          return (
            <article key={article.id} className="article-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${article.tag.color}-500/10`}>
                    <Icon className={`w-5 h-5 text-${article.tag.color}-400`} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${article.tag.color}-500/10 text-${article.tag.color}-400`}>
                      {article.tag.name}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                    <Link href={`/article/${article.id}`}>{article.title}</Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime} read
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
