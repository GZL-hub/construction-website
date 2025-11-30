import { Container } from '@/components/ui/Container'

const steps = [
  {
    number: 1,
    title: 'Concept & Compliance',
    description: 'SPAN/MOF alignment',
  },
  {
    number: 2,
    title: 'Engineering Design',
    description: 'ISO 9001 Standards',
  },
  {
    number: 3,
    title: 'Construction & PM',
    description: 'Project Management',
  },
  {
    number: 4,
    title: 'Testing & Commissioning',
    description: 'Quality verification',
  },
  {
    number: 5,
    title: 'Handover to Authority',
    description: 'Final transfer',
  },
]

export function WorkflowProcess() {
  return (
    <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <Container className="relative">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white">
            Design & Build Workflow
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Comprehensive compliance lifecycle management from concept to handover
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 opacity-20"></div>

          <div className="grid md:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl ring-8 ring-primary-500/20">
                    <span className="text-5xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}