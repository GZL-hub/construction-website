import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Phone } from 'lucide-react'

/**
 * Hero section for the landing page
 */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
            Over 25 Years of Excellence
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-white">
            Building Your Vision Into Reality
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-balance text-lg text-gray-300 md:text-xl">
            Leading commercial and residential construction company delivering
            quality projects on time and within budget. Your trusted partner
            from concept to completion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/quote">
              <Button size="lg" className="gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2 border-white bg-white/10 text-white hover:bg-white/20">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">25+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">50+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
