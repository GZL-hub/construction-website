import { Container } from '@/components/ui/Container'

const timeline = [
  { 
    year: '1997', 
    title: 'Foundation & Formation', 
    description: 'Nine Hundred Builders Sdn Bhd was officially incorporated on January 6th, establishing our roots in civil engineering and structural works for major residential developments.' 
  },
  { 
    year: '2004', 
    title: 'Strategic Diversification', 
    description: 'We pivoted into the specialized utility sector, securing our first major rectification and maintenance contracts with Indah Water Konsortium (IWK), marking the start of our sewerage expertise.' 
  },
  { 
    year: '2015', 
    title: 'ISO Quality Certification', 
    description: 'We achieved a defining standard of excellence by earning the ISO 9001:2015 certification, officially accrediting our "Design and Build" capabilities for Sewerage Treatment Plants.' 
  },
  { 
    year: '2024', 
    title: 'National Infrastructure Expansion', 
    description: 'Cementing our partnership with state utilities, we were awarded critical water distribution projects for Air Selangor, including the RM7.6 million upgrade of the Cheras Low Level Pump House.' 
  },
]

export function Timeline() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a3a5c] py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <Container>
        <div className="relative mb-12 text-center">
          <h2 className="mb-4 text-white">Our Journey</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Over 25 years of excellence in water and sewerage infrastructure development, 
            delivering critical utility solutions across Malaysia.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-500/30 md:left-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
                  {item.year}
                </div>

                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}