import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Building2, Home, Wrench, PaintBucket, Hammer, HardHat } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Full-service commercial building solutions for offices, retail spaces, and industrial facilities.',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'Custom home building and residential development with attention to detail and quality craftsmanship.',
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description:
      'Transform existing spaces with our expert renovation and remodeling services.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Finishing',
    description:
      'Professional interior finishing services including drywall, painting, and trim work.',
  },
  {
    icon: Hammer,
    title: 'Project Management',
    description:
      'Comprehensive project management ensuring on-time delivery and budget adherence.',
  },
  {
    icon: HardHat,
    title: 'Design-Build',
    description:
      'Integrated design and construction services for a seamless building experience.',
  },
]

/**
 * Services section showcasing main service offerings
 */
export function Services() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance">Our Services</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-gray-600">
            Comprehensive construction services tailored to meet your unique
            needs and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
