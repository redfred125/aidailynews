import Link from 'next/link'
import { ArrowLeft, Clock, Filter } from 'lucide-react'
import { getAllArticles, tags } from '@/app/lib/data'

export const metadata = {
  title: 'Archive | AI Daily News',
  description: 'Browse all articles from AI Daily News',
}

export default function ArchivePage() {
  const articles = getAllArticles()

  // Group articles by month
  const articlesByMonth = articles.reduce((acc, article) => {
    const date = new Date(article.date)
    const monthYear = date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })

    if (!acc[monthYear]) {
      acc[monthYear] = []
    }
    acc[monthYear].push(article)
    return acc
  }, {} as Record<string, typeof articles>)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Navigation */}
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
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Article Archive</h1>
          <p className="text-xl text-gray-400">
            Browse all {articles.length} articles from AI Daily News
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Framework
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/archive"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              All Articles
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tag/${tag.slug}`}
                className={`px-4 py-2 rounded-lg bg-${tag.color}-500/10 text-${tag.color}-400 hover:bg-${tag.color}-500/20 transition-colors text-sm font-medium border border-${tag.color}-500/20`}
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Articles by Month */}
        <div className="space-y-12">
          {Object.entries(articlesByMonth).map(([monthYear, monthArticles]) => (
            <section key={monthYear}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                {monthYear}
              </h2>

              <div className="space-y-4">
                {monthArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.slug}`}
                    className="article-card group flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${article.tag.color}-500/10 text-${article.tag.color}-400`}
                        >
                          {article.tag.name}
                        </span>
                        <span className="text-xs text-gray-500">{article.type}</span>
                        {article.featured && (
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                        <span>By {article.author}</span>
                      </div>
                    </div>

                    <div className="md:text-right text-sm text-gray-500">
                      {article.date}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
