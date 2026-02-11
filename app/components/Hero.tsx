import Link from 'next/link'
import { ArrowRight, Bot, Zap, Shield, Terminal, Sparkles } from 'lucide-react'
import { frameworks as frameworksData } from '@/app/lib/data'

const iconMap = {
  openclaw: Bot,
  'claude-code': Terminal,
  opencode: Zap,
  'google-adk': Sparkles,
}

const frameworks = frameworksData.map(fw => ({
  ...fw,
  icon: iconMap[fw.id as keyof typeof iconMap] || Bot
}))

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-gray-900 to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
            Live Coverage of AI Agent Revolution
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              AI Agent Frameworks
            </span>
            <br />
            <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal">
              OpenClaw • Claude Code • ADK
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
            Real use cases, security alerts, and build guides for personal AI assistants. 
            What people are actually building with agent frameworks.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/archive"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Latest Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-medium border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              Build Your First Agent
            </Link>
          </div>
          
          {/* Framework Status Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {frameworks.map((fw) => {
              const Icon = fw.icon
              const colorClasses = {
                blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                green: 'bg-green-500/10 border-green-500/20 text-green-400',
                orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
              }[fw.color]
              
              return (
                <div key={fw.name} className={`p-4 rounded-lg border ${colorClasses}`}>
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium text-white">{fw.name}</div>
                  <div className="text-sm opacity-75">{fw.status}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
