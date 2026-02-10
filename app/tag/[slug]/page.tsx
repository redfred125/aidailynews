import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag as TagIcon } from 'lucide-react'
import { getTagBySlug, getArticlesByTag, tags } from '@/app/lib/data'

// Generate static params for all tags
export async function generateStaticParams() {
  return tags.map((tag) => ({
    slug: tag.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tag = getTagBySlug(params.slug)

  if (!tag) {
    return {
      title: 'Tag Not Found',
    }
  }

  return {
    title: `${tag.name} Articles | AI Daily News`,
    description: `Latest news and articles about ${tag.name}`,
  }
}

export default function TagPage({ params }: { params: { slug: string } }) {
  const tag = getTagBySlug(params.slug)

  if (!tag) {
    notFound()
  }

  const articles = getArticlesByTag(tag.id)

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

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div
              className={`p-3 rounded-lg bg-${tag.color}-500/10 border border-${tag.color}-500/20`}
            >
              <TagIcon className={`w-6 h-6 text-${tag.color}-400`} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{tag.name}</h1>
              <p className="text-gray-400 mt-1">
                {articles.length} {articles.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No articles found for this tag yet.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="article-card group"
              >
                {/* Article Type Badge */}
                {article.featured && (
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded mb-3">
                    FEATURED
                  </div>
                )}

                {/* Meta */}
                <div className="flex items-center space-x-2 mb-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${tag.color}-500/10 text-${tag.color}-400`}
                  >
                    {article.type}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read Time */}
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.readTime} read
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
