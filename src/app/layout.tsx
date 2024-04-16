import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Footy',
  description: 'Football Schedule Tracker',
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
          <div>{children}</div>
        </main>
      </body>
    </html>
  )
}
