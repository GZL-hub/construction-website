import { Container } from '@/components/ui/Container'
import { Settings, PipetteIcon as Pipe, Shield } from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Mechanical & Electrical',
    description: 'Pumping solutions, MSB installation, and telemetry systems ensuring operational excellence.',
  },
  {
    icon: Pipe,
    title: 'Pipe Jacking & Trenchless',
    description: 'Minimizing surface disruption in dense urban environments with advanced techniques.',
  },
  {
    icon: Shield,
    title: 'Operation & Maintenance',
    description: 'Long-term asset management and rectification for IWK facilities and beyond.',
  },
]

export function TechnicalPrecision() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <Container className="relative">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
            Technical Precision
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Specialized expertise in mechanical, electrical, and maintenance systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-300"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-all group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}