import { Article } from '../types'
import { getTagById } from './tags'

// Simplified articles with basic markdown content
export const articles: Article[] = [
  {
    id: '1',
    slug: 'openclaw-dashboard-v2-security',
    title: 'OpenClaw Security Alert: 40,000+ Exposed Instances and Malicious ClawHub Skills',
    excerpt: 'Security researchers discover 40,000+ exposed OpenClaw instances and malicious skills on ClawHub marketplace. Updated best practices for VirusTotal scanning and sandboxing.',
    content: `# OpenClaw Security Alert: 40,000+ Exposed Instances and Malicious ClawHub Skills

OpenClaw (formerly Clawdbot/Moltbot), created by Peter Steinberger, has grown rapidly to v2026.2.6+ with 3,000+ community skills on ClawHub. But security researchers have uncovered serious exposure risks.

## The Discovery

SecurityScorecard researchers have identified over 40,000 exposed OpenClaw instances accessible from the public internet, many running with default configurations and no authentication.

## What is OpenClaw?

OpenClaw is an open-source multi-platform AI agent framework supporting:
- Multi-platform communication (WhatsApp, Telegram, Slack, Discord, Signal, Teams, and more)
- Web UI Agents dashboard for managing agents, tools, skills, and cron jobs
- Browser control and automation with Chrome/Chromium
- File and application control
- Support for Claude Opus 4.6, GPT-5.3-Codex, and xAI Grok models

With over 3,000 community skills on the ClawHub marketplace, it has become one of the most extensible agent platforms available.

## Malicious Skills on ClawHub

The ClawHub marketplace, while powerful, has become a target for malicious actors:
- Skills containing prompt injection payloads
- Data exfiltration through skill dependencies
- Command injection via unsanitized inputs
- Backdoor installations disguised as utility skills

## Mitigation: VirusTotal Integration

OpenClaw now includes VirusTotal integration and a built-in code safety scanner:
- Skills are automatically scanned before installation
- Community-reported malicious skills are flagged and removed
- The code safety scanner checks for known malicious patterns

Enable scanning with:

\`\`\`bash
openclaw config set virustotal.enabled true
openclaw config set virustotal.api_key YOUR_VT_KEY
\`\`\`

## Security Best Practices

### 1. Security-First Configuration

Always change default credentials, enable authentication, and bind to localhost (127.0.0.1) unless remote access is specifically needed.

### 2. Enable Sandboxing

Run all skills in sandboxed environments with restricted file system and network access.

### 3. VirusTotal Scanning

Enable VirusTotal integration for all skill installations from ClawHub.

### 4. Network Security

- Use SSH tunnels for remote access
- Enable HTTPS with valid certificates
- Implement rate limiting
- Monitor access logs regularly

### 5. Keep Updated

\`\`\`bash
npm install -g openclaw@latest
\`\`\`

Subscribe to security advisories at openclaw.ai for timely vulnerability notifications.

## Conclusion

OpenClaw's power and extensibility come with responsibility. The 40,000+ exposed instances serve as a wake-up call: security-first configuration is not optional.
    `,
    tag: getTagById('openclaw')!,
    type: 'security',
    readTime: '7 min',
    date: 'Feb 11, 2026',
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

Not all AI models are created equal. Some excel at coding, others at creative writing, and others at multimodal tasks. A model router automatically selects the best model for each task.

## The Problem

Using a single model for all tasks is inefficient:
- Claude Opus 4.6 is the most capable but most expensive option
- Gemini 3 Pro excels at multimodal tasks but may be overkill for text
- GPT-5.3-Codex is optimized for coding but less suited for creative writing
- Claude Haiku 4.5 and Gemini 3 Flash are fast and cheap for simple tasks

## Solution: Task-Based Routing

A smart router analyzes the input and routes it to the most appropriate model based on task type, cost, and performance requirements.

### Architecture Overview

The router consists of three main components:
1. Task Classifier - Identifies the type of task
2. Model Selector - Chooses the best model for the task
3. Execution Engine - Runs the task and returns results

## Task Classification

The router needs to classify tasks automatically using pattern matching and heuristics:

**Code Tasks**: Route to GPT-5.3-Codex or Claude Opus 4.6 for programming
**Vision Tasks**: Route to Gemini 3 Pro for image and multimodal requests
**Simple Q&A**: Route to Claude Haiku 4.5 or Gemini 3 Flash for short questions
**Complex Reasoning**: Route to Claude Opus 4.6 or Gemini 3 Pro for analysis

## Cost Optimization

By routing tasks appropriately, you can reduce costs by up to 70%. Simple questions go to Haiku 4.5 or Gemini 3 Flash while complex reasoning tasks use Claude Opus 4.6 or Gemini 3 Pro.

## Conclusion

A smart model router can dramatically reduce costs while maintaining or improving quality by using the right tool for each job.
    `,
    tag: getTagById('openclaw')!,
    type: 'tutorial',
    readTime: '8 min',
    date: 'Feb 11, 2026',
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
- Powered by Claude Opus 4.6 (newest), Opus 4.5, Sonnet 4.5, Haiku 4.5
- CLI-first approach (the \`claude\` command)
- CLAUDE.md project context files for persistent project knowledge
- Hooks system, MCP server integration, slash commands
- Subagents and agent teams for parallel task execution
- Memory system and planning mode

### OpenCode
- Open-source alternative
- Model-agnostic (works with GPT-5.3-Codex, Claude, Gemini 3, etc.)
- Web-based UI
- Community-driven plugins

## Installation

### Claude Code

\`\`\`bash
# macOS / Linux (native installer)
curl -fsSL https://claude.ai/install.sh | bash

# macOS (Homebrew)
brew install --cask claude-code
\`\`\`

The CLI command is \`claude\` (not \`claude-code\`). Configuration lives at \`~/.claude/settings.json\`.

### OpenCode

\`\`\`bash
npm install -g opencode
opencode init
\`\`\`

## Key Features Comparison

### Project Context
**Claude Code**: Uses CLAUDE.md files at the project root to provide persistent context — coding standards, architecture notes, and workflow instructions that persist across sessions. Run \`/init\` to generate one automatically.

**OpenCode**: Uses configuration files and plugin-based context injection.

### IDE Integration
**Claude Code**: VS Code extension (official), JetBrains plugin (beta), standalone Desktop app, Web/Mobile interfaces, Chrome extension for live debugging.

**OpenCode**: Web-based UI, VS Code plugin (community), terminal mode.

### Tool Integration
**Claude Code**: MCP (Model Context Protocol) servers for connecting to external tools, databases, and APIs. Built-in slash commands (\`/init\`, \`/debug\`, etc.) for common workflows. Custom slash commands via \`.claude/commands/\` directory.

**OpenCode**: Plugin ecosystem with community-contributed integrations.

### Agent Architecture
**Claude Code**: Subagents for isolated parallel work. Agent teams for multi-agent collaboration. Planning mode for breaking down complex tasks before execution.

**OpenCode**: Single-agent model with plugin-based task delegation.

## Real-World Testing

### Test 1: Refactoring a Legacy Codebase

**Task**: Refactor a 5,000-line Node.js application to TypeScript

**Claude Code** (using Opus 4.6):
- Time: 35 minutes
- Success rate: 97%
- Used planning mode to decompose the task
- Breaking changes: 1 minor issue

**OpenCode** (using GPT-5.3-Codex):
- Time: 55 minutes
- Success rate: 90%
- Breaking changes: 4 issues requiring manual fixes

### Test 2: Bug Fix with Limited Context

**Task**: Fix a race condition in async code

**Claude Code**:
- Identified root cause in 2 minutes using CLAUDE.md project context
- Provided explanation plus fix
- No side effects

**OpenCode**:
- Identified issue in 5 minutes
- Provided 3 possible fixes
- Required user to choose approach

## Security Considerations

### Claude Code
- Runs locally with sandboxed execution
- Hooks system for pre/post command validation
- Permission system controls file access and command execution
- No code sent to external servers beyond the Anthropic API

### OpenCode
- Depends on chosen LLM provider
- Code may transit through third-party APIs
- Community plugins vary in security posture

## Pricing

**Claude Code**: Pro \$20/mo, Max \$100-200/mo, Team \$25-150/user/mo, Enterprise custom pricing

**OpenCode**: Free (open-source), LLM API costs vary by provider

## Conclusion

**Choose Claude Code if**:
- You want the most capable reasoning (Opus 4.6)
- Security and permission controls matter
- You need IDE integration across VS Code, JetBrains, Desktop
- CLAUDE.md project context and MCP integration fit your workflow
- Budget allows for subscription pricing

**Choose OpenCode if**:
- You want open-source flexibility and full control
- Need multi-model support across providers
- Prefer a web-based UI
- Want to customize everything via plugins

Both are excellent tools — your choice depends on priorities.
    `,
    tag: getTagById('claude-code')!,
    type: 'comparison',
    readTime: '15 min',
    date: 'Feb 11, 2026',
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
    title: 'Google ADK: Production-Ready Multi-Agent Orchestration',
    excerpt: 'Google\'s Agent Development Kit reaches v1.24.1 with multi-agent orchestration, Gemini 3 support, multi-language SDKs, and the new Interactions API.',
    content: `# Google ADK: Production-Ready Multi-Agent Orchestration

Google's Agent Development Kit (ADK) has matured from beta to production-ready with v1.24.1 (released Feb 6, 2026), featuring bi-weekly releases, multi-language support, and powerful multi-agent orchestration patterns.

## What is Google ADK?

Google ADK is an open-source, free framework for building AI agents that:
- Provides multi-agent orchestration with SequentialAgent, ParallelAgent, LoopAgent, and LLM-driven delegation
- Supports Gemini 3 Pro, Gemini 3 Flash, plus third-party models via LiteLLM
- Offers multi-language SDKs: Python (most mature), TypeScript, Go, Java
- Integrates natively with Vertex AI Agent Engine Runtime
- Includes Datadog observability integration and built-in OpenTelemetry

## Multi-Agent Orchestration

ADK's most powerful feature is its agent orchestration system:

### SequentialAgent
Chains agents in order — output of one feeds into the next. Ideal for pipelines like: research -> analyze -> generate report.

### ParallelAgent
Runs multiple agents simultaneously for independent subtasks. Dramatically reduces latency when tasks do not depend on each other.

### LoopAgent
Iterates an agent until a condition is met. Useful for refinement cycles: generate -> evaluate -> improve -> repeat.

### LLM-Driven Delegation
An orchestrator agent uses an LLM to dynamically decide which sub-agent to invoke based on the task, enabling flexible routing without hardcoded logic.

## New Features (v1.24.x)

### Agent Config (No-Code)
Define agents via configuration files without writing code. Enables non-developers to create and modify agent behaviors.

### Tool Confirmation (Human-in-the-Loop)
Agents can pause and request human approval before executing sensitive tools, providing a safety net for critical operations.

### Session Rewind
Roll back agent sessions to a previous state, enabling debugging and recovery from errors mid-conversation.

### Interactions API
New state management system optimized for agentic loops, providing structured access to conversation history, agent state, and tool execution results.

### AgentEngineSandboxCodeExecutor
Secure code execution environment within Vertex AI Agent Engine for running agent-generated code safely.

## Enterprise Integrations

### BigQuery (Native MCP Toolbox)
Native integration via the MCP Toolbox for BigQuery enables agents to query, analyze, and act on warehouse data directly.

### Cloud SQL
Direct database connectivity via MCP Toolbox for Databases, supporting PostgreSQL, MySQL, Spanner, AlloyDB, and 15+ databases.

### Vertex AI Agent Engine Runtime
Managed runtime for deploying and scaling agents in production with built-in monitoring.

### Datadog Observability
First-class integration with Datadog for tracing agent execution, monitoring latency, and alerting on failures.

## Production Deployment

### Performance Metrics (Updated)

- **Uptime**: 99.97%
- **Avg Response Time**: 285ms
- **Multi-agent pipeline latency**: 1.2s average for 3-agent chains
- **Cost/Request**: \$0.002 (with Gemini 3 Flash for lightweight tasks)

### Best Practices

1. **Code-first approach** — Define agents in code for version control and testing
2. **Multi-agent hierarchies** — Decompose complex tasks across specialized agents
3. **Parallel tool execution** — Use ParallelAgent for independent subtasks
4. **State management** — Use the Interactions API for structured state access
5. **Human-in-the-loop** — Enable Tool Confirmation for sensitive operations

## Conclusion

Google ADK has evolved from a beta GCP-only tool into a production-ready, open-source, multi-language framework. The multi-agent orchestration patterns, combined with Gemini 3 support and enterprise integrations, make it a strong choice for teams building complex agent systems.

**Recommended for**:
- Multi-agent orchestration requirements
- GCP-native and Vertex AI deployments
- Teams wanting multi-language SDK support (Python, TypeScript, Go, Java)
- Enterprise observability needs

**Consider alternatives if**:
- You need a single-agent CLI tool (consider Claude Code)
- You want maximum community skill ecosystem (consider OpenClaw)
    `,
    tag: getTagById('google-adk')!,
    type: 'case-study',
    readTime: '15 min',
    date: 'Feb 11, 2026',
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
