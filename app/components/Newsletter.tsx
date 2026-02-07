'use client'

import { useState } from 'react'
import { Send, Bot } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/20">
      <div className="flex items-center space-x-2 mb-4">
        <Bot className="w-5 h-5 text-blue-400" />
        <h3 className="font-bold text-white">AI Agent Daily</h3>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">
        Get the latest on OpenClaw, Claude Code, and agent frameworks. 
        Real use cases, security alerts, and build guides.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          <Send className="w-4 h-4 mr-2" />
          Subscribe
        </button>
      </form>
      
      {status === 'success' && (
        <p className="text-green-400 text-sm mt-3 text-center">✓ Subscribed!</p>
      )}
      
      <p className="text-gray-500 text-xs mt-4 text-center">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
