import { Container } from '@/components/ui/Container'
import { Target, TrendingUp } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mission */}
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6 inline-flex rounded-xl bg-primary-600 p-4 text-white">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to leverage over two decades of expertise to deliver robust infrastructure solutions. We are committed to maintaining strong partnerships with national utility bodies and developers, ensuring seamless project execution from initial design to final handover, grounded in safety, quality, and trust.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white shadow-lg md:p-10">
            <div className="mb-6 inline-flex rounded-xl bg-white/20 p-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h2 className="mb-6 text-white">Our Vision</h2>
            <p className="text-lg leading-relaxed text-primary-50">
                To stand as Malaysia’s premier infrastructure partner, recognized for engineering excellence in water and sewerage systems. We aspire to build sustainable, utility solutions that help communities, protect the environment, and set the industry benchmark for quality, reliability, and innovation in national development.            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}