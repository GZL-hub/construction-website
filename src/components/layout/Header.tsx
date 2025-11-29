'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { SITE_NAME, SITE_NAME_ZH } from '@/lib/constants'
import { Menu, X } from 'lucide-react'

/**
 * Main header component with logo, navigation, and mobile menu
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-800 text-white md:h-12 md:w-12">
              <span className="font-oswald font-bold text-lg md:text-xl">900</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-zh text-xs font-bold tracking-widest text-primary-800 md:text-sm">
                {SITE_NAME_ZH}
              </span>
              <span className="text-xs font-bold uppercase leading-tight text-black md:text-sm">
                {SITE_NAME}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 hover:text-primary-700 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  )
}
