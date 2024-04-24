import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ReactQueryProviders from '@/app/contexts/TanstackQueryContext'
import Header from '@/components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Footy',
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
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </main>
      </body>
    </html>
  )
}
