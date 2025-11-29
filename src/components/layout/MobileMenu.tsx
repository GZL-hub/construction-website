'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Phone, Mail } from 'lucide-react'

interface MobileMenuProps {
  onClose: () => void
}

/**
 * Mobile menu component with elegant corporate styling
 */
export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <div className="border-t border-gray-200 bg-white shadow-lg md:hidden">
      <nav className="container-custom py-6">
        {/* Nav Links */}
        <div className="space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  'group relative block overflow-hidden rounded-lg px-4 py-3 text-lg font-semibold transition-all duration-200',
                  isActive
                    ? 'bg-gradient-to-r from-primary-50 to-primary-100/50 text-primary-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 hover:text-primary-700'
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Animated border */}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-800 transition-all duration-200',
                    isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-3 border-t border-gray-200 pt-6">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-base font-medium text-gray-700 transition-colors hover:text-primary-700"
          >
            <Phone className="h-5 w-5" />
            {CONTACT_INFO.phone}
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-base font-medium text-gray-700 transition-colors hover:text-primary-700"
          >
            <Mail className="h-5 w-5" />
            {CONTACT_INFO.email}
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link href="/quote" onClick={onClose}>
            <Button fullWidth size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Phone className="h-5 w-5" />
              Get Free Quote
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
