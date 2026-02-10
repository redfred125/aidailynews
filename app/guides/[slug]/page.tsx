import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Award, BookOpen } from 'lucide-react'
import { getGuideBySlug, getAllGuides } from '@/app/lib/data'
import ReactMarkdown from 'react-markdown'

// Generate static params for all guides
export async function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: `${guide.title} | AI Daily News`,
    description: guide.description,
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  const difficultyColors = {
    beginner: 'green',
    intermediate: 'yellow',
    advanced: 'red',
  }

  const difficultyColor =
    difficultyColors[guide.difficulty as keyof typeof difficultyColors]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/guides"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Guide Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Guide Header */}
        <header className="mb-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <BookOpen className="w-3 h-3 mr-1" />
              {guide.framework}
            </span>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${difficultyColor}-500/10 text-${difficultyColor}-400 border border-${difficultyColor}-500/20`}
            >
              <Award className="w-3 h-3 mr-1" />
              {guide.difficulty}
            </span>
            <span className="text-gray-400 text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {guide.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {guide.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-6">{guide.description}</p>

          {/* Last Updated */}
          <div className="text-sm text-gray-500">
            Last updated: {guide.lastUpdated}
          </div>
        </header>

        {/* Guide Body */}
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
                  <code className="block bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm">
                    {children}
                  </code>
                ),
              pre: ({ children }) => (
                <pre className="bg-gray-800 rounded-lg overflow-hidden mb-4">
                  {children}
                </pre>
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
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <h3 className="text-xl font-bold text-white mb-2">
            Was this guide helpful?
          </h3>
          <p className="text-gray-400 mb-4">
            Let us know your thoughts or ask questions in our community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Give Feedback
          </Link>
        </div>
      </article>
    </div>
  )
}
