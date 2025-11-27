'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Phone } from 'lucide-react'

/**
 * Desktop navigation component
 */
export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-1">
      {/* Nav Links */}
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100',
              isActive
                ? 'text-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            )}
          >
            {link.label}
          </Link>
        )
      })}

      {/* CTA Button */}
      <Link href="/quote" className="ml-4">
        <Button size="sm" className="gap-2">
          <Phone className="h-4 w-4" />
          Get Quote
        </Button>
      </Link>
    </nav>
  )
}
