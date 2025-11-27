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
 * Mobile menu component with navigation and contact info
 */
export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <div className="border-t border-gray-200 bg-white md:hidden">
      <nav className="container-custom py-4">
        {/* Nav Links */}
        <div className="space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
          >
            <Phone className="h-4 w-4" />
            {CONTACT_INFO.phone}
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_INFO.email}
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Link href="/quote" onClick={onClose}>
            <Button fullWidth className="gap-2">
              <Phone className="h-4 w-4" />
              Get Free Quote
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
