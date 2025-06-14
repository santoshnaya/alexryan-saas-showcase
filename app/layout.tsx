import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://alexryan-saas-showcase.vercel.app'),
  title: 'Alex Ryan - Creative Design Studio',
  description: 'Communication designer consistently building memorable and influential brands.',
  keywords: 'design, branding, web design, motion graphics, creative agency',
  authors: [{ name: 'Alex Ryan' }],
  openGraph: {
    title: 'Alex Ryan - Creative Design Studio',
    description: 'Communication designer consistently building memorable and influential brands.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 