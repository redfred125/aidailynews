import Link from 'next/link'
import { TrendingUp, Bot, Code, Shield, Sparkles } from 'lucide-react'
import { tags, getArticlesByTag } from '@/app/lib/data'

const iconMap: Record<string, any> = {
  openclaw: Bot,
  'claude-code': Code,
  security: Shield,
  'google-adk': Sparkles,
  opencode: Code,
  'ai-agents': Bot,
}

const topics = tags.map(tag => ({
  name: tag.name,
  slug: tag.slug,
  count: getArticlesByTag(tag.id).length,
  icon: iconMap[tag.id] || Bot,
  color: tag.color
}))

export default function TrendingTopics() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-yellow-400" />
        <h3 className="font-bold text-white">Trending</h3>
      </div>
      
      <div className="space-y-3">
        {topics.map((topic) => {
          const Icon = topic.icon
          return (
            <Link
              key={topic.name}
              href={`/tag/${topic.slug}`}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-750 hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-${topic.color}-500/10 flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 text-${topic.color}-400`} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {topic.name}
                </span>
              </div>
              <span className="text-gray-500 text-sm">{topic.count}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
