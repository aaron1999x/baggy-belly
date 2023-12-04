import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pretzels",
    "Coffee",
    "Cookies",
  ],
  authors: [
    {
      name: "Aaron Tan",
      url: "https://atys.dev",
    },
  ],
  creator: "atys.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <TailwindIndicator/>
      </body>
    </html>
  )
}
