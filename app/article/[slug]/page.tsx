import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft, Tag as TagIcon } from 'lucide-react'
import { getArticleBySlug, getAllArticles, getRelatedArticles } from '@/app/lib/data'
import ReactMarkdown from 'react-markdown'

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | AI Daily News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: [article.tag.name, article.type],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-8">
          {/* Tags and Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href={`/tag/${article.tag.slug}`}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${article.tag.color}-500/10 text-${article.tag.color}-400 border border-${article.tag.color}-500/20 hover:bg-${article.tag.color}-500/20 transition-colors`}
            >
              <TagIcon className="w-3 h-3 mr-1" />
              {article.tag.name}
            </Link>
            <span className="text-gray-400 text-sm">{article.date}</span>
            <span className="text-gray-400 text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime} read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-400 mb-6">{article.excerpt}</p>

          {/* Author */}
          <div className="flex items-center text-gray-400">
            <span className="text-sm">By {article.author}</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              code: ({ inline, children }: any) =>
                inline ? (
                  <code className="bg-gray-800 text-blue-400 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                ) : (
                  <code className="block bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </code>
                ),
              pre: ({ children }) => (
                <pre className="bg-gray-800 rounded-lg overflow-hidden mb-4">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full divide-y divide-gray-700">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700">{children}</tbody>
              ),
              tr: ({ children }) => <tr>{children}</tr>,
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-300">{children}</td>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/article/${related.slug}`}
                  className="article-card group"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${related.tag.color}-500/10 text-${related.tag.color}-400`}
                    >
                      {related.tag.name}
                    </span>
                    <span className="text-xs text-gray-500">{related.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}
