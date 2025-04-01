import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AIChatButton from './components/AIChatButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurant POS',
  description: 'A modern point of sale system for restaurants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
        <AIChatButton />
      </body>
    </html>
  )
}
