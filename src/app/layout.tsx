import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_NAME, SITE_NAME_ZH, SITE_DESCRIPTION } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: `${SITE_NAME} | ${SITE_NAME_ZH} - Commercial & Residential Construction`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'construction',
    'commercial building',
    'residential construction',
    'renovation',
    'contractor',
    'building services',
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Commercial & Residential Construction`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
