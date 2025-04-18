// app/layout.tsx

import { Header } from '@/src/components/Header'
import { Toaster } from 'react-hot-toast';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bills Manager',
  description: 'Manage your invoices efficiently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
