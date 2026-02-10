import Link from 'next/link'
import { Clock, Shield, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'
import { getAllArticles } from '@/app/lib/data'

const articles = getAllArticles()

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
            <Link href={`/article/${featured.slug}`}>{featured.title}</Link>
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
                    <Link href={`/article/${article.slug}`}>{article.title}</Link>
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
