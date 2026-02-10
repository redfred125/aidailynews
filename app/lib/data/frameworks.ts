import { Framework } from '../types'

export const frameworks: Framework[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    status: 'Building',
    color: 'blue',
    description: 'Open-source AI agent framework focused on extensibility and community-driven development.',
    website: 'https://openclaw.dev',
    documentation: 'https://docs.openclaw.dev'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    status: 'Active',
    color: 'purple',
    description: 'Anthropic\'s official coding agent with advanced reasoning and security features.',
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
    status: 'Beta',
    color: 'orange',
    description: 'Google\'s Agent Development Kit for enterprise-grade AI agents with GCP integration.',
    website: 'https://cloud.google.com/adk',
    documentation: 'https://cloud.google.com/adk/docs'
  }
]

export function getFrameworkById(id: string): Framework | undefined {
  return frameworks.find(fw => fw.id === id)
}
