import { Tag } from '../types'

export const tags: Tag[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    color: 'blue',
    slug: 'openclaw'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    color: 'purple',
    slug: 'claude-code'
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    color: 'green',
    slug: 'opencode'
  },
  {
    id: 'google-adk',
    name: 'Google ADK',
    color: 'orange',
    slug: 'google-adk'
  },
  {
    id: 'security',
    name: 'Security',
    color: 'red',
    slug: 'security'
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    color: 'yellow',
    slug: 'ai-agents'
  }
]

export function getTagBySlug(slug: string): Tag | undefined {
  return tags.find(tag => tag.slug === slug)
}

export function getTagById(id: string): Tag | undefined {
  return tags.find(tag => tag.id === id)
}
