import { Guide } from '../types'

export const guides: Guide[] = [
  {
    id: '1',
    slug: 'getting-started-openclaw',
    title: 'Getting Started with OpenClaw',
    description: 'Build your first AI agent with OpenClaw in 30 minutes. From installation via the CLI wizard to your first ClawHub skill.',
    framework: 'OpenClaw',
    difficulty: 'beginner',
    readTime: '30 min',
    lastUpdated: 'Feb 11, 2026',
    content: `
# Getting Started with OpenClaw

Learn how to build your first AI agent with OpenClaw (v2026.2.6+) from scratch.

## Prerequisites

- Node.js 18+ installed
- macOS, Linux, or Windows (WSL2)
- An API key for your preferred LLM (Anthropic, OpenAI, or xAI)

## Installation

Install OpenClaw globally and run the CLI wizard:

\`\`\`bash
npm install -g openclaw@latest
openclaw init my-first-agent
cd my-first-agent
\`\`\`

The CLI wizard will guide you through selecting your platform, LLM provider, and initial configuration.

## Configuration

OpenClaw supports multiple LLM providers. Configure your \`.env\` file:

\`\`\`bash
# Choose your provider
ANTHROPIC_API_KEY=your_key_here    # For Claude Opus 4.6
OPENAI_API_KEY=your_key_here       # For GPT-5.3-Codex
XAI_API_KEY=your_key_here          # For xAI Grok

OPENCLAW_PORT=3000
OPENCLAW_BIND=127.0.0.1            # Security: bind to localhost
\`\`\`

## Your First Agent

Create \`agent.js\`:

\`\`\`javascript
const { Agent } = require('openclaw')

const agent = new Agent({
  name: 'MyFirstAgent',
  model: 'claude-opus-4.6',  // or 'gpt-5.3-codex', 'grok'
  skills: ['web-search', 'file-ops'],
  platforms: ['terminal']     // Can also add 'slack', 'discord', 'telegram'
})

agent.start()
\`\`\`

## Multi-Platform Communication

Connect your agent to multiple platforms:

\`\`\`javascript
const agent = new Agent({
  name: 'MultiPlatformBot',
  model: 'claude-opus-4.6',
  platforms: ['whatsapp', 'telegram', 'slack', 'discord'],
  webui: true  // Enable the Web UI Agents dashboard
})
\`\`\`

## Installing Skills from ClawHub

Browse and install from 3,000+ community skills:

\`\`\`bash
openclaw skill install weather-lookup
openclaw skill install code-runner
openclaw skill install file-manager
\`\`\`

**Security note**: Enable VirusTotal scanning for skill installations:

\`\`\`bash
openclaw config set virustotal.enabled true
openclaw config set virustotal.api_key YOUR_VT_KEY
\`\`\`

## Adding Custom Skills

\`\`\`javascript
agent.addSkill({
  name: 'greet',
  description: 'Greet the user by name',
  handler: async (name) => {
    return \`Hello, \${name}! I'm powered by OpenClaw.\`
  }
})
\`\`\`

## Running Your Agent

\`\`\`bash
node agent.js
\`\`\`

Visit \`http://localhost:3000\` to access the Web UI Agents dashboard.

## Security Best Practices

- Always bind to localhost (127.0.0.1) unless remote access is needed
- Enable VirusTotal scanning for ClawHub skill installations
- Use the built-in code safety scanner
- Run skills in sandboxed environments
- Keep OpenClaw updated: \`npm install -g openclaw@latest\`

## Next Steps

- Explore the [ClawHub Marketplace](https://openclaw.ai/clawhub) for 3,000+ skills
- Read the [Documentation](https://docs.openclaw.ai)
- Set up cron jobs for automated tasks
- Configure browser control for web automation
    `
  },
  {
    id: '2',
    slug: 'claude-code-setup',
    title: 'Setting Up Claude Code',
    description: 'Complete guide to installing and configuring Claude Code for maximum productivity.',
    framework: 'Claude Code',
    difficulty: 'beginner',
    readTime: '20 min',
    lastUpdated: 'Feb 11, 2026',
    content: `
# Setting Up Claude Code

Get Claude Code up and running in minutes. Claude Code is Anthropic's official CLI for Claude, powered by Claude Opus 4.6.

## Installation

### macOS / Linux (Recommended)

\`\`\`bash
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

### macOS (Homebrew)

\`\`\`bash
brew install --cask claude-code
\`\`\`

### Windows

Download from [claude.ai/code/download](https://claude.ai/code/download), or use PowerShell:

\`\`\`powershell
irm https://claude.ai/install.ps1 | iex
\`\`\`

## Authentication

\`\`\`bash
claude auth login
\`\`\`

Follow the browser prompt to authenticate with your Anthropic account.

## Configuration

Edit \`~/.claude/settings.json\`:

\`\`\`json
{
  "model": "claude-opus-4-6",
  "editor": "vscode",
  "autoSave": true,
  "securityLevel": "high"
}
\`\`\`

Available models:
- \`claude-opus-4-6\` — Most capable, best reasoning (newest)
- \`claude-sonnet-4-5\` — Fast and capable balance
- \`claude-haiku-4-5\` — Fastest, most affordable

## First Command

\`\`\`bash
claude "Create a React component for a login form"
\`\`\`

## CLAUDE.md Project Context

Create a \`CLAUDE.md\` file at your project root to give Claude persistent context about your project — coding standards, architecture decisions, key commands. Claude reads this automatically every session.

\`\`\`bash
claude /init
\`\`\`

This generates a starter CLAUDE.md based on your project structure.

## Slash Commands

Use built-in slash commands for common workflows:
- \`/init\` — Initialize CLAUDE.md for a new project
- \`/debug\` — Start a debugging session
- Create custom commands in \`.claude/commands/\` directory

## MCP Server Integration

Connect external tools via MCP (Model Context Protocol):

\`\`\`bash
claude mcp add my-database-tool
\`\`\`

MCP servers let Claude interact with databases, APIs, and external services directly.

## IDE Integration

### VS Code (Official Extension)

Search for "Claude Code" in the VS Code extensions marketplace.

### JetBrains (Beta Plugin)

Available in the JetBrains Marketplace. Supports IntelliJ, WebStorm, PyCharm, and more.

### Desktop App

Standalone desktop application available for macOS, Linux, and Windows.

## Pricing

- **Pro**: \$20/month
- **Max**: \$100-200/month (5x or 20x usage)
- **Team**: \$25-150/user/month
- **Enterprise**: Custom pricing

## Tips

- Use \`claude --help\` for all available commands
- Create CLAUDE.md files for every project for best results
- Use planning mode for complex multi-step tasks
- Leverage slash commands for common workflows
- Use \`claude --continue\` to resume your last session

## Troubleshooting

**Issue**: Authentication fails
**Solution**: Clear cache with \`claude auth logout\` and try again

**Issue**: Slow responses
**Solution**: Switch to \`claude-haiku-4-5\` for faster (but less detailed) responses

**Issue**: Missing project context
**Solution**: Create a CLAUDE.md file at your project root with \`claude /init\`
    `
  },
  {
    id: '3',
    slug: 'advanced-agent-patterns',
    title: 'Advanced Agent Patterns',
    description: 'Learn advanced patterns for building robust, production-ready AI agents with multi-agent orchestration, MCP integration, and ADK patterns.',
    framework: 'All Frameworks',
    difficulty: 'advanced',
    readTime: '45 min',
    lastUpdated: 'Feb 11, 2026',
    content: `
# Advanced Agent Patterns

Master advanced techniques for building production-ready AI agents using modern frameworks like Claude Code, OpenClaw, and Google ADK.

## Pattern 1: Multi-Agent Orchestration (Google ADK)

Google ADK provides built-in orchestration primitives for coordinating multiple agents:

**SequentialAgent**: Chains agents in order — output of one feeds into the next.

**ParallelAgent**: Runs multiple agents simultaneously for independent subtasks.

**LoopAgent**: Iterates an agent until a condition is met or max iterations reached.

**LLM-Driven Delegation**: An orchestrator dynamically decides which sub-agent to invoke based on the task.

These patterns can be combined: a SequentialAgent pipeline where one step uses ParallelAgent for fan-out, followed by a LoopAgent for iterative refinement.

## Pattern 2: MCP Integration (Claude Code)

Claude Code's MCP (Model Context Protocol) enables connecting to external tools — databases, APIs, CI/CD pipelines, and more. Use MCP servers to give your agent direct access to external systems without custom code.

This turns Claude Code into a hub that orchestrates external services directly from the CLI.

## Pattern 3: Self-Correction with Planning

Use planning mode for complex tasks — break down the problem first, then execute each step with verification:

\`\`\`javascript
async function planAndExecute(task) {
  const plan = await agent.plan(task)
  const results = []

  for (const step of plan.steps) {
    const result = await agent.execute(step)
    const verification = await agent.verify(result)

    if (!verification.correct) {
      const fix = await agent.fix(result, verification.issues)
      results.push(fix)
    } else {
      results.push(result)
    }
  }

  return agent.synthesize(results)
}
\`\`\`

## Pattern 4: Skill-Based Architecture (OpenClaw)

OpenClaw's ClawHub marketplace enables modular agent composition with 3,000+ community skills:

\`\`\`javascript
const { Agent } = require('openclaw')

const agent = new Agent({
  name: 'ProductionAgent',
  model: 'claude-opus-4.6',
  skills: ['web-search', 'file-ops', 'browser-control', 'cron-scheduler'],
  platforms: ['slack', 'telegram'],
  sandbox: true  // Run skills in sandboxed environment
})
\`\`\`

Always enable VirusTotal scanning and sandboxing when using community skills.

## Pattern 5: Human-in-the-Loop (Google ADK)

ADK's Tool Confirmation pattern pauses execution and requests human approval before executing sensitive operations. Configure which tools require approval and which can auto-approve, providing a safety net for critical actions like deployments, deletions, or production modifications.

## Pattern 6: Memory Management

\`\`\`javascript
class AgentMemory {
  constructor(maxSize = 10000) {
    this.shortTerm = []
    this.longTerm = new VectorStore()
    this.maxSize = maxSize
  }

  async remember(item) {
    this.shortTerm.push(item)

    if (this.shortTerm.length > this.maxSize) {
      const old = this.shortTerm.shift()
      await this.longTerm.store(old)
    }
  }

  async recall(query) {
    const recent = this.shortTerm.filter(matches(query))
    const relevant = await this.longTerm.query(query)
    return [...recent, ...relevant]
  }
}
\`\`\`

For Google ADK, use the Interactions API for structured state management — access conversation history, agent state, and tool results. Session Rewind lets you roll back to a previous state for debugging.

## Pattern 7: Cost-Optimized Model Routing

Route tasks to the most cost-effective model:

\`\`\`javascript
async function routeTask(task) {
  const taskType = classifyTask(task)

  const routing = {
    'simple-qa': { model: 'claude-haiku-4-5', cost: 'low' },
    'coding': { model: 'gpt-5.3-codex', cost: 'medium' },
    'complex-reasoning': { model: 'claude-opus-4-6', cost: 'high' },
    'multimodal': { model: 'gemini-3-pro', cost: 'medium' },
    'fast-generation': { model: 'gemini-3-flash', cost: 'low' }
  }

  return await execute(task, routing[taskType])
}
\`\`\`

## Best Practices

1. **Use CLAUDE.md for context** — Give coding agents persistent project knowledge
2. **Multi-agent over monolith** — Decompose complex tasks across specialized agents
3. **Always sandbox** — Run untrusted skills and code in isolated environments
4. **Human-in-the-loop for critical ops** — Use ADK's Tool Confirmation pattern
5. **Monitor everything** — Use Datadog or similar for agent observability
6. **Version your agents** — Treat agent configurations as code
7. **Test agent behaviors** — Unit test individual skills and integration test pipelines

## Conclusion

Modern agent frameworks provide powerful primitives for building sophisticated systems. Combine Google ADK's orchestration patterns, Claude Code's MCP integration, and OpenClaw's skill ecosystem to build robust, production-ready agents.
    `
  }
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug)
}

export function getAllGuides(): Guide[] {
  return guides
}

export function getGuidesByFramework(framework: string): Guide[] {
  return guides.filter(guide =>
    guide.framework === framework || guide.framework === 'All Frameworks'
  )
}
