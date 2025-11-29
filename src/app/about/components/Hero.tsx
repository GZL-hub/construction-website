import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <Container>
        <div className="relative">
          <h1 className="mb-6 text-white">About Us</h1>
          <p className="max-w-3xl text-xl text-gray-300 leading-relaxed text-justify">
            Nine Hundred Builders Sdn Bhd is a premier infrastructure contractor specializing in water and sewerage engineering.
            Established on January 6, 1997, we have spent over two decades building the essential systems that power communities
            and sustain development across Malaysia.
          </p>
        </div>
      </Container>
    </section>
  )
}