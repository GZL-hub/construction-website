import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Droplets, Construction } from 'lucide-react'
import { Icon } from 'lucide-react'
import { faucet } from '@lucide/lab'

const Faucet = (props: any) => <Icon iconNode={faucet} {...props} />

const services = [
  {
    icon: Faucet,
    title: 'Sewerage Services',
    description:
      'End-to-end design, build, and upgrade of Sewerage Treatment Plants (STP), Network Pumping Stations, and mechanized systems with Extended Aeration technology.',
  },
  {
    icon: Droplets,
    title: 'Water Supply Services',
    description:
      'Reservoir refurbishment, elevated water tank construction, distribution system improvements, and sludge treatment facility upgrades.',
  },
  {
    icon: Construction,
    title: 'Infrastructure & Civil Works',
    description:
      'Comprehensive infrastructure construction for mixed developments and industrial parks, including earthworks, drainage systems, and associated civil engineering works.',
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
            Specialized water and sewerage solutions with over 25 years of expertise in design, construction, and infrastructure development.
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
