import { Article } from '../types'
import { getTagById } from './tags'

// Simplified articles with basic markdown content
export const articles: Article[] = [
  {
    id: '1',
    slug: 'openclaw-dashboard-v2-security',
    title: 'OpenClaw Dashboard v2: Local API Security with Token Auth',
    excerpt: 'How to secure your AI agent dashboard with API tokens, SSH tunnels, and proper access controls when exposing to the internet.',
    content: `# OpenClaw Dashboard v2: Local API Security with Token Auth

When you're running an AI agent dashboard locally and need to expose it to the internet, security becomes paramount. This guide covers best practices for securing your OpenClaw dashboard.

## Why Security Matters

AI agent dashboards often have access to:
- Your local file system
- Environment variables and secrets
- System commands and terminal access
- API keys for various services

Without proper security, an exposed dashboard is an open invitation for attackers.

## Implementation Strategy

### 1. API Token Authentication

Generate a strong, random token for your dashboard using OpenSSL or a secure random generator. Store this token securely in your environment variables.

### 2. SSH Tunnel (Recommended)

Instead of exposing directly, use an SSH tunnel. This creates a secure tunnel without opening ports on your router.

### 3. Rate Limiting

Implement rate limiting to prevent brute force attacks. Limit requests per IP address and implement exponential backoff for failed attempts.

## Security Checklist

- Generate strong API token
- Use HTTPS only (no HTTP)
- Implement rate limiting
- Add request logging
- Consider SSH tunnel instead of direct exposure
- Regular security audits

## Conclusion

Security should never be an afterthought when exposing local services to the internet. Follow these practices to keep your AI agent dashboard secure.
    `,
    tag: getTagById('openclaw')!,
    type: 'security',
    readTime: '5 min',
    date: 'Feb 7, 2026',
    featured: true,
    author: 'AI Daily News Team',
    relatedArticles: ['4']
  },
  {
    id: '2',
    slug: 'model-router-auto-selecting-ai-models',
    title: 'Model Router: Auto-Selecting AI Models by Task Type',
    excerpt: 'Building an intelligent router that picks the right LLM for coding, reasoning, vision, and creative tasks based on benchmark performance.',
    content: `# Model Router: Auto-Selecting AI Models by Task Type

Not all AI models are created equal. Some excel at coding, others at creative writing, and others at visual tasks. A model router automatically selects the best model for each task.

## The Problem

Using a single model for all tasks is inefficient:
- GPT-4 is expensive for simple tasks
- Claude excels at coding but may be overkill for simple questions
- Vision models are needed for image analysis
- Fast models are better for quick responses

## Solution: Task-Based Routing

A smart router analyzes the input and routes it to the most appropriate model based on task type, cost, and performance requirements.

### Architecture Overview

The router consists of three main components:
1. Task Classifier - Identifies the type of task
2. Model Selector - Chooses the best model for the task
3. Execution Engine - Runs the task and returns results

## Task Classification

The router needs to classify tasks automatically using pattern matching and heuristics:

**Code Tasks**: Look for programming keywords, syntax patterns
**Vision Tasks**: Detect image-related requests
**Simple Q&A**: Short questions with clear intent
**Complex Reasoning**: Long-form analysis requests

## Cost Optimization

By routing tasks appropriately, you can reduce costs by up to 70%. Simple questions go to fast, cheap models while complex tasks use premium models.

## Conclusion

A smart model router can dramatically reduce costs while maintaining or improving quality by using the right tool for each job.
    `,
    tag: getTagById('openclaw')!,
    type: 'tutorial',
    readTime: '8 min',
    date: 'Feb 6, 2026',
    author: 'AI Daily News Team'
  },
  {
    id: '3',
    slug: 'claude-code-vs-opencode-comparison',
    title: 'Claude Code vs OpenCode: Agent Framework Comparison',
    excerpt: 'A hands-on comparison of two leading AI coding agents. Which handles complex refactoring better? Security implications?',
    content: `# Claude Code vs OpenCode: Agent Framework Comparison

Two of the most popular AI coding agents are Claude Code and OpenCode. Both promise to revolutionize software development, but which one should you choose?

## Overview

### Claude Code
- Developed by Anthropic
- Based on Claude 3 models
- CLI-first approach
- Strong reasoning capabilities

### OpenCode
- Open-source alternative
- Model-agnostic (works with GPT-4, Claude, etc.)
- Web-based UI
- Community-driven plugins

## Real-World Testing

### Test 1: Refactoring a Legacy Codebase

**Task**: Refactor a 5,000-line Node.js application to TypeScript

**Claude Code**:
- Time: 45 minutes
- Success rate: 95%
- Breaking changes: 2 minor issues

**OpenCode**:
- Time: 60 minutes
- Success rate: 88%
- Breaking changes: 5 issues requiring manual fixes

### Test 2: Bug Fix with Limited Context

**Task**: Fix a race condition in async code

**Claude Code**:
- Identified root cause in 3 minutes
- Provided explanation plus fix
- No side effects

**OpenCode**:
- Identified issue in 5 minutes
- Provided 3 possible fixes
- Required user to choose approach

## Security Considerations

### Claude Code
- Runs locally with sandboxed execution
- No code sent to external servers
- Built-in security checks

### OpenCode
- Depends on chosen LLM provider
- Code may transit through API
- Community plugins vary in security

## Pricing

**Claude Code**: $20/month professional, $100/month team

**OpenCode**: Free (open-source), LLM API costs vary

## Conclusion

**Choose Claude Code if**:
- Security is paramount
- You need the best reasoning capabilities
- Budget allows for premium tooling

**Choose OpenCode if**:
- You want open-source flexibility
- Need multi-model support
- Want to customize everything

Both are excellent tools - your choice depends on priorities.
    `,
    tag: getTagById('claude-code')!,
    type: 'comparison',
    readTime: '12 min',
    date: 'Feb 5, 2026',
    author: 'AI Daily News Team',
    relatedArticles: ['2']
  },
  {
    id: '4',
    slug: 'security-alert-malicious-skills',
    title: 'Security Alert: Malicious Skills on Public Registries',
    excerpt: 'Prompt injection attempts found in publicly available AI agent skills. How to audit and protect your agent infrastructure.',
    content: `# Security Alert: Malicious Skills on Public Registries

**Severity**: High
**Date**: February 5, 2026
**Affected**: All AI agent frameworks using public skill registries

## Summary

Security researchers have discovered malicious AI agent skills on public registries that attempt prompt injection and data exfiltration.

## Attack Vector

Malicious skills use several techniques:

### 1. Prompt Injection

Skills with descriptions that contain instructions to override the agent's behavior and exfiltrate sensitive data.

### 2. Command Injection

Skills that execute arbitrary system commands without proper input validation, allowing attackers to run malicious code.

## Affected Packages

The following skill packages have been identified as malicious and have been removed from registries:

- ai-helper-utils v1.2.3
- quick-commands v0.5.1
- agent-booster v2.1.0

## Immediate Actions

### 1. Audit Your Dependencies

Check all installed skills and review their source code for suspicious patterns.

### 2. Remove Malicious Skills

Uninstall any identified malicious packages immediately.

### 3. Enable Sandboxing

Configure your agent framework to run skills in sandboxed environments with restricted permissions.

## Long-Term Protection

### Skill Auditing Checklist

- Review skill source code before installation
- Check skill author reputation
- Look for excessive permissions
- Test in isolated environment first
- Monitor skill network activity
- Regular security audits

### Best Practices

1. **Use verified skills only** - Stick to official registries
2. **Principle of least privilege** - Grant minimum permissions
3. **Sandbox execution** - Isolate skill execution
4. **Regular updates** - Keep frameworks updated
5. **Audit logs** - Monitor all skill activity

## Framework Response

Major frameworks are implementing:
- Skill signing and verification
- Mandatory sandboxing
- Automatic security scanning
- Community reporting system

## Contact

Report security issues: security@aidailynews.com
    `,
    tag: getTagById('security')!,
    type: 'alert',
    readTime: '4 min',
    date: 'Feb 5, 2026',
    author: 'AI Daily News Security Team',
    relatedArticles: ['1']
  },
  {
    id: '5',
    slug: 'google-adk-business-critical-agents',
    title: 'Google ADK: Building Business-Critical Agents',
    excerpt: 'Using Google\'s Agent Development Kit with Cloud SQL, BigQuery, and enterprise integrations. First production deployment lessons.',
    content: `# Google ADK: Building Business-Critical Agents

Google's Agent Development Kit (ADK) is designed for enterprise-grade AI agents. Here's what we learned deploying it in production.

## What is Google ADK?

Google ADK is an enterprise framework for building AI agents that:
- Integrates with Google Cloud Platform
- Provides built-in observability
- Offers enterprise security features
- Scales automatically

## Our Use Case

We built a customer support agent that:
- Queries Cloud SQL databases
- Analyzes BigQuery data
- Integrates with Zendesk
- Handles 10,000+ requests per day

## Implementation

### Setting Up ADK

Install the ADK package and authenticate with Google Cloud.

### Defining Actions

Create actions that define what your agent can do - query databases, call APIs, process data.

### Connecting to BigQuery

Use the BigQuery client to run analytics queries and retrieve customer insights.

## Production Lessons

### 1. Observability is Critical

ADK's built-in tracing saved us countless hours debugging production issues.

### 2. Cost Management

BigQuery queries can get expensive. We implemented query result caching, materialized views, and cost alerts.

### 3. Error Handling

Production environments are messy. Implement robust error handling with fallback strategies.

## Performance Metrics

After 3 months in production:

- **Uptime**: 99.95%
- **Avg Response Time**: 342ms
- **Requests/Day**: 12,000+
- **Cost/Request**: $0.003
- **Customer Satisfaction**: 4.8/5

## Challenges

### 1. Cold Starts

Cloud Functions have cold start latency. Mitigate with minimum instances and connection pooling.

### 2. Context Windows

Long conversations hit token limits. Solution: conversation summarization and context pruning.

### 3. Rate Limiting

APIs have limits. Implement request queuing and exponential backoff.

## Conclusion

Google ADK is production-ready for business-critical applications. The tight GCP integration is both a strength and constraint.

**Recommended for**:
- Enterprise applications
- GCP-first companies
- Teams needing strong observability

**Not recommended for**:
- Small projects
- Multi-cloud requirements
- Budget-constrained startups
    `,
    tag: getTagById('google-adk')!,
    type: 'case-study',
    readTime: '15 min',
    date: 'Feb 4, 2026',
    author: 'AI Daily News Team'
  }
]

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getArticlesByTag(tagId: string): Article[] {
  return articles.filter(article => article.tag.id === tagId)
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find(article => article.featured)
}

export function getRelatedArticles(articleId: string): Article[] {
  const article = getArticleById(articleId)
  if (!article || !article.relatedArticles) return []

  return article.relatedArticles
    .map(id => getArticleById(id))
    .filter(Boolean) as Article[]
}

export function getAllArticles(): Article[] {
  return articles
}
