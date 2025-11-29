import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import {
  SITE_NAME,
  SITE_NAME_ZH,
  NAV_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from '@/lib/constants'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

/**
 * Footer component with navigation, contact info, and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center space-x-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-800 text-white">
                <span className="font-oswald font-bold text-lg">900</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-zh text-xs font-bold tracking-wide text-primary-800">
                  {SITE_NAME_ZH}
                </span>
                <span className="text-xs font-bold uppercase leading-tight text-black">
                  {SITE_NAME}
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-700">
              Leading water treatment solutions delivering quality projects on time
              and within budget.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-primary-700"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-primary-700"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                className="text-gray-700 transition-colors hover:text-primary-700"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="text-gray-700 transition-colors hover:text-primary-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                className="text-gray-700 transition-colors hover:text-primary-700"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-700">
          <p>
            &copy; {currentYear} {SITE_NAME} © 415984-T.
          </p>
        </div>
      </Container>
    </footer>
  )
}
