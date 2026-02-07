import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Daily News - Your Source for AI Breakthroughs',
  description: 'Daily curated artificial intelligence news, breakthroughs, and analysis for builders and practitioners.',
  keywords: ['AI news', 'artificial intelligence', 'machine learning', 'GPT', 'OpenAI', 'tech news'],
  authors: [{ name: 'AI Daily News' }],
  openGraph: {
    type: 'website',
    title: 'AI Daily News',
    description: 'Daily curated AI news and breakthroughs',
    siteName: 'AI Daily News',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Daily News',
    description: 'Daily curated AI news and breakthroughs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Daily News',
              url: 'https://aidailynews.org',
              description: 'Daily curated artificial intelligence news',
              publisher: {
                '@type': 'Organization',
                name: 'AI Daily News',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
