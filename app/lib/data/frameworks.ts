import { Framework } from '../types'

export const frameworks: Framework[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    status: 'Active',
    color: 'blue',
    description: 'Open-source multi-platform AI agent framework by Peter Steinberger with 3,000+ community skills on ClawHub.',
    website: 'https://openclaw.ai',
    documentation: 'https://docs.openclaw.ai'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    status: 'Active',
    color: 'purple',
    description: 'Anthropic\'s official CLI coding agent powered by Claude Opus 4.6 with CLAUDE.md, hooks, MCP, and IDE integrations.',
    website: 'https://claude.ai/code',
    documentation: 'https://docs.anthropic.com/claude-code'
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    status: 'Growing',
    color: 'green',
    description: 'Model-agnostic open-source coding agent with web-based UI and plugin ecosystem.',
    website: 'https://opencode.dev',
    documentation: 'https://docs.opencode.dev'
  },
  {
    id: 'google-adk',
    name: 'Google ADK',
    status: 'Stable',
    color: 'orange',
    description: 'Google\'s open-source Agent Development Kit with multi-agent orchestration, multi-language support, and Vertex AI integration.',
    website: 'https://cloud.google.com/adk',
    documentation: 'https://cloud.google.com/adk/docs'
  }
]

export function getFrameworkById(id: string): Framework | undefined {
  return frameworks.find(fw => fw.id === id)
}
