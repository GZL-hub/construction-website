import type { Metadata } from 'next'
import { Inter, Oswald, Noto_Serif_TC } from 'next/font/google'
import './globals.css'
import { SITE_NAME, SITE_NAME_ZH, SITE_DESCRIPTION } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-oswald',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif-tc',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: `${SITE_NAME} - Water & Sewerage Infrastructure Specialist`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'sewerage treatment plant',
    'STP construction Malaysia',
    'water supply infrastructure',
    'sewerage infrastructure',
    'CIDB G7 contractor',
    'network pumping station',
    'water treatment plant',
    'reservoir refurbishment',
    'pipe jacking Malaysia',
    'civil engineering works',
    'infrastructure development',
    'Air Selangor contractor',
    'Indah Water contractor',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Water & Sewerage Infrastructure Specialist`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Water & Sewerage Infrastructure`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Water & Sewerage Infrastructure Specialist`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${notoSerifTC.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
