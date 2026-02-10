// Core types for the AI Daily News site

export interface Tag {
  id: string
  name: string
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow'
  slug: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  tag: Tag
  type: 'security' | 'alert' | 'tutorial' | 'comparison' | 'case-study' | 'news'
  readTime: string
  date: string
  featured?: boolean
  author: string
  relatedArticles?: string[] // Article IDs
}

export interface Guide {
  id: string
  title: string
  slug: string
  description: string
  content: string
  framework: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  readTime: string
  lastUpdated: string
}

export interface Framework {
  id: string
  name: string
  status: string
  color: 'blue' | 'purple' | 'green' | 'orange'
  description: string
  website?: string
  documentation?: string
}
