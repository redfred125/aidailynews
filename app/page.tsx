import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import TrendingTopics from './components/TrendingTopics'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Daily News - AI Agent Frameworks, Personal Assistants & Coding Agents</title>
        <meta name="description" content="Daily news on AI agent frameworks: OpenClaw, Claude Code, OpenCode, Google ADK. Real use cases, security alerts, and build guides for personal AI assistants." />
      </Head>
      
      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <main>
          <Hero />
          
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <LatestNews />
              </div>
              
              <aside className="space-y-8">
                <TrendingTopics />
                <Newsletter />
              </aside>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
