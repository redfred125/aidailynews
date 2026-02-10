import { Guide } from '../types'

export const guides: Guide[] = [
  {
    id: '1',
    slug: 'getting-started-openclaw',
    title: 'Getting Started with OpenClaw',
    description: 'Build your first AI agent with OpenClaw in 30 minutes. From installation to your first custom skill.',
    framework: 'OpenClaw',
    difficulty: 'beginner',
    readTime: '30 min',
    lastUpdated: 'Feb 8, 2026',
    content: `
# Getting Started with OpenClaw

Learn how to build your first AI agent with OpenClaw from scratch.

## Prerequisites

- Node.js 18+ installed
- Basic JavaScript knowledge
- OpenAI or Anthropic API key

## Installation

\`\`\`bash
npm install -g openclaw
openclaw init my-first-agent
cd my-first-agent
\`\`\`

## Configuration

Create a \`.env\` file:

\`\`\`bash
OPENAI_API_KEY=your_key_here
OPENCLAW_PORT=3000
\`\`\`

## Your First Agent

Create \`agent.js\`:

\`\`\`javascript
const { Agent } = require('openclaw')

const agent = new Agent({
  name: 'MyFirstAgent',
  model: 'gpt-4',
  skills: ['web-search', 'file-ops']
})

agent.start()
\`\`\`

## Adding Custom Skills

\`\`\`javascript
agent.addSkill({
  name: 'greet',
  description: 'Greet the user',
  handler: async (name) => {
    return \`Hello, \${name}!\`
  }
})
\`\`\`

## Running Your Agent

\`\`\`bash
node agent.js
\`\`\`

Visit \`http://localhost:3000\` to interact with your agent!

## Next Steps

- Explore the [Skills Library](https://openclaw.dev/skills)
- Join the [Community Discord](https://discord.gg/openclaw)
- Read the [Advanced Guide](/guides/advanced-openclaw)
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
    lastUpdated: 'Feb 8, 2026',
    content: `
# Setting Up Claude Code

Get Claude Code up and running in minutes.

## Installation

### macOS

\`\`\`bash
brew install claude-code
\`\`\`

### Linux

\`\`\`bash
curl -fsSL https://claude.ai/install.sh | sh
\`\`\`

### Windows

Download from [claude.ai/code/download](https://claude.ai/code/download)

## Authentication

\`\`\`bash
claude-code auth login
\`\`\`

Follow the browser prompt to authenticate.

## Configuration

Edit \`~/.claude-code/config.json\`:

\`\`\`json
{
  "model": "claude-3-sonnet",
  "editor": "vscode",
  "autoSave": true,
  "securityLevel": "high"
}
\`\`\`

## First Command

\`\`\`bash
claude-code "Create a React component for a login form"
\`\`\`

## IDE Integration

### VS Code

Install the Claude Code extension:

\`\`\`bash
code --install-extension anthropic.claude-code
\`\`\`

### JetBrains

Download from JetBrains Marketplace.

## Tips

- Use \`claude-code --help\` for all commands
- Set up keyboard shortcuts in your IDE
- Enable auto-completion for faster coding

## Troubleshooting

**Issue**: Authentication fails
**Solution**: Clear cache with \`claude-code auth logout\` and try again

**Issue**: Slow responses
**Solution**: Switch to \`claude-3-haiku\` for faster (but less accurate) responses
    `
  },
  {
    id: '3',
    slug: 'advanced-agent-patterns',
    title: 'Advanced Agent Patterns',
    description: 'Learn advanced patterns for building robust, production-ready AI agents.',
    framework: 'All Frameworks',
    difficulty: 'advanced',
    readTime: '45 min',
    lastUpdated: 'Feb 7, 2026',
    content: `
# Advanced Agent Patterns

Master advanced techniques for building production-ready AI agents.

## Pattern 1: Chain of Thought

Break complex tasks into reasoning steps:

\`\`\`javascript
async function chainOfThought(problem) {
  const steps = await agent.think({
    task: problem,
    strategy: 'break-down'
  })

  const results = []
  for (const step of steps) {
    const result = await agent.execute(step)
    results.push(result)
  }

  return agent.synthesize(results)
}
\`\`\`

## Pattern 2: Self-Correction

Let agents verify and fix their own outputs:

\`\`\`javascript
async function selfCorrect(task) {
  let attempts = 0
  let result = await agent.execute(task)

  while (attempts < 3) {
    const verification = await agent.verify(result)

    if (verification.correct) {
      return result
    }

    result = await agent.fix(result, verification.issues)
    attempts++
  }

  throw new Error('Failed after 3 attempts')
}
\`\`\`

## Pattern 3: Multi-Agent Collaboration

\`\`\`javascript
const researcher = new Agent({ role: 'researcher' })
const coder = new Agent({ role: 'coder' })
const reviewer = new Agent({ role: 'reviewer' })

async function collaborate(task) {
  const research = await researcher.execute(task)
  const code = await coder.execute(research)
  const review = await reviewer.execute(code)

  if (review.approved) {
    return code
  } else {
    return coder.execute({ code, feedback: review })
  }
}
\`\`\`

## Pattern 4: Memory Management

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
      // Move to long-term memory
      const old = this.shortTerm.shift()
      await this.longTerm.store(old)
    }
  }

  async recall(query) {
    // Search both memories
    const recent = this.shortTerm.filter(matches(query))
    const relevant = await this.longTerm.query(query)

    return [...recent, ...relevant]
  }
}
\`\`\`

## Pattern 5: Fallback Strategies

\`\`\`javascript
async function withFallback(task, strategies) {
  for (const strategy of strategies) {
    try {
      return await strategy.execute(task)
    } catch (error) {
      console.log(\`Strategy \${strategy.name} failed, trying next...\`)
    }
  }

  throw new Error('All strategies failed')
}

// Usage
await withFallback(task, [
  new GPT4Strategy(),
  new ClaudeStrategy(),
  new FallbackHumanStrategy()
])
\`\`\`

## Best Practices

1. **Always validate inputs** - Agents can be unpredictable
2. **Implement timeouts** - Prevent infinite loops
3. **Log everything** - Debugging agents is hard
4. **Test extensively** - Unit test your agent behaviors
5. **Monitor in production** - Watch for drift and failures

## Conclusion

These patterns form the foundation of robust AI agent systems. Combine them to build sophisticated, reliable agents.
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
