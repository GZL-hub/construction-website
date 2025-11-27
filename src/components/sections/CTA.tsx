import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

/**
 * Call-to-action section encouraging visitors to get in touch
 */
export function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-balance text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-primary-100">
            Get in touch with our team today for a free consultation and quote.
            We're here to bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/quote">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-primary-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-primary-100 sm:flex-row sm:gap-8">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
