import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Discuss Your
            <br />
            Infrastructure Requirements?
          </h2>
          <p className="mb-10 text-xl text-gray-600 leading-relaxed">
            Partner with a proven leader in Malaysian infrastructure development.
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button size="lg" className="min-w-[240px]">
                View Our Project Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}