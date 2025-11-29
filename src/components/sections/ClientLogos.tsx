'use client'

import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const clients = [
  { name: 'Air Selangor', logo: '/images/client_logo/airselangor.svg' },
  { name: 'Indah Water', logo: '/images/client_logo/indahwater.svg' },
  { name: 'MKH', logo: '/images/client_logo/mkh.svg' },
  { name: 'SP Setia', logo: '/images/client_logo/setia.svg' },
  { name: 'SPAN', logo: '/images/client_logo/span.svg' },
  { name: 'Sunway Group', logo: '/images/client_logo/sunwaygroup.svg' },
  { name: 'Titi Jaya', logo: '/images/client_logo/titijaya.svg' },
]

/**
 * Client logos section with infinite scrolling animation
 */
export function ClientLogos() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4 text-balance text-gray-900">
            Previous Clients
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-gray-600">
            Over the past 25 years, we've successfully delivered water and sewerage infrastructure projects for Malaysia's top developers, national utility providers, and government bodies.
          </p>
        </div>

        {/* Logo Slider Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container - Wrapper for continuous animation */}
          <div className="flex">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8 animate-scroll">
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    width: client.name === 'MKH' ? '120px' : '160px',
                    height: '96px'
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.name === 'MKH' ? 100 : 140}
                      height={80}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8 animate-scroll">
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    width: client.name === 'MKH' ? '120px' : '160px',
                    height: '96px'
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.name === 'MKH' ? 100 : 140}
                      height={80}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
