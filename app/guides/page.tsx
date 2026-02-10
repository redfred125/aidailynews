import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react'
import { getAllGuides } from '@/app/lib/data'

export const metadata = {
  title: 'Build Guides | AI Daily News',
  description: 'Step-by-step guides for building with AI agent frameworks',
}

export default function GuidesPage() {
  const guides = getAllGuides()

  const difficultyColors = {
    beginner: 'green',
    intermediate: 'yellow',
    advanced: 'red',
  }

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
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Build Guides</h1>
          </div>
          <p className="text-xl text-gray-400">
            Step-by-step tutorials for building with AI agent frameworks
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const difficultyColor =
              difficultyColors[guide.difficulty as keyof typeof difficultyColors]

            return (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                className="article-card group"
              >
                {/* Framework Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {guide.framework}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-${difficultyColor}-500/10 text-${difficultyColor}-400 border border-${difficultyColor}-500/20`}
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {guide.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {guide.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {guide.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {guide.readTime}
                  </span>
                  <span>Updated {guide.lastUpdated}</span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to contribute a guide?
          </h2>
          <p className="text-gray-400 mb-6">
            Share your knowledge with the AI agent community. We're always looking for
            quality tutorials and real-world case studies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Submit a Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
