import { Container } from '@/components/ui/Container'
import { Hero } from './components/Hero'
import { StickyServiceShowcase } from './components/StickyServiceShowcase'
import { TechnicalPrecision } from './components/TechnicalPrecision'
import { WorkflowProcess } from './components/WorkflowProcess'
import { CallToAction } from './components/CallToAction'

/**
 * Services Page - Premium cinematic layout with sticky scroll showcase
 */
export default function ServicesPage() {
  return (
    <>
      <Hero />

      {/* Section 2: Sticky Split Screen Service Showcase */}
      <section className="bg-white">
        <Container size="xl" className="py-10 md:py-16">
          <StickyServiceShowcase />
        </Container>
      </section>

      <TechnicalPrecision />
      <WorkflowProcess />
      <CallToAction />
    </>
  )
}