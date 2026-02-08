export async function GET() {
  const articles = [
    {
      title: 'OpenClaw: The AI Agent Taking Over WhatsApp',
      description: 'Through several name changes and mounting controversy, OpenClaw has emerged as the most talked-about AI agent of 2026.',
      link: 'https://aidailynews.org/article/1',
      pubDate: 'Sat, 07 Feb 2026 00:00:00 GMT',
    },
    {
      title: 'China Warns of OpenClaw Security Risks',
      description: 'Chinese authorities issue official warning that the popular open-source AI agent could pose significant security risks.',
      link: 'https://aidailynews.org/article/2',
      pubDate: 'Thu, 05 Feb 2026 00:00:00 GMT',
    },
    {
      title: 'Claude Code vs Traditional IDEs: Real Developer Workflows',
      description: 'We spent two weeks using Claude Code as our primary development tool. Here\'s what worked and what didn\'t.',
      link: 'https://aidailynews.org/article/3',
      pubDate: 'Thu, 05 Feb 2026 00:00:00 GMT',
    },
    {
      title: 'OpenCode Emerges as Open-Source Alternative',
      description: 'A community-driven coding agent promises AI-assisted development without vendor lock-in.',
      link: 'https://aidailynews.org/article/4',
      pubDate: 'Wed, 04 Feb 2026 00:00:00 GMT',
    },
    {
      title: 'Google ADK: Enterprise AI Agents Made Simple',
      description: 'Google\'s Agent Development Kit brings AI agents to the enterprise with BigQuery integration.',
      link: 'https://aidailynews.org/article/5',
      pubDate: 'Wed, 04 Feb 2026 00:00:00 GMT',
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Daily News</title>
    <link>https://aidailynews.org</link>
    <description>Daily coverage of AI agent frameworks: OpenClaw, Claude Code, OpenCode, Google ADK</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://aidailynews.org/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles.map(article => `
    <item>
      <title>${article.title}</title>
      <description>${article.description}</description>
      <link>${article.link}</link>
      <guid>${article.link}</guid>
      <pubDate>${article.pubDate}</pubDate>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
