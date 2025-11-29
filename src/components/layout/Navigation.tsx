'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'

/**
 * Desktop navigation component with elegant corporate styling
 */
export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-2">
      {/* Nav Links */}
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'group relative px-4 py-2 text-base font-semibold transition-all duration-200 ease-out',
              isActive
                ? 'text-primary-700'
                : 'text-gray-800 hover:text-primary-700'
            )}
          >
            {link.label}
            {/* Animated underline */}
            <span
              className={cn(
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-800 transition-all duration-200 ease-out',
                isActive
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
              )}
            />
          </Link>
        )
      })}
    </nav>
  )
}
