import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ReactQueryProviders from '@/app/contexts/TanstackQueryContext'
import Header from '@/components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Footy-schedule',
  generator: 'Next.js',
  applicationName: 'Footy-schedule',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'football',
    'soccer',
    'soccer-scores',
    'football-scores',
    '축구',
    '손흥민',
    'epl',
    'pl',
    '챔스 일정',
    '챔스',
    '챔스 결승',
    'cl',
    'son',
    'sonny',
  ],
  openGraph: {
    title: 'Footy-schedule',
    description:
      'Follow your favorite football matches and track live scores with Footy, the football schedule tracker app',
    url: 'https://footy-schedule.vercel.app/',
    siteName: 'Footy',
    images: [{ url: '/images/son.png', width: 256, height: 256, alt: 'son' }],
    locale: 'ko_KR',
    type: 'website',
  },
  description:
    'Follow your favorite football matches and track live scores with Footy, the football schedule tracker app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center gap-5 p-5">
          <ReactQueryProviders>
            {children}
            <Analytics />
          </ReactQueryProviders>
        </main>
      </body>
    </html>
  )
}
