'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, CheckCircle2 } from 'lucide-react'

interface Service {
  id: string
  title: string
  badge?: string
  description: string
  features: string[]
  imagePlaceholder: string
}

const services: Service[] = [
  {
    id: 'sewerage',
    title: 'Sewerage Treatment Infrastructure',
    badge: 'ISO 9001 Certified',
    description:
      'Comprehensive sewerage treatment solutions delivering reliable, compliant infrastructure for communities across Malaysia.',
    features: [
      'Design & Build expertise for centralized treatment plants',
      'Extended Aeration technology implementation',
      'Full IWK Compliance and regulatory adherence',
      'Network Pumping Stations and mechanized systems',
    ],
    imagePlaceholder: '/images/services/sewerage-plant.jpg',
  },
  {
    id: 'water',
    title: 'Water Supply & Distribution',
    description:
      'End-to-end water infrastructure solutions ensuring safe, reliable water distribution to communities nationwide.',
    features: [
      'Reservoir Refurbishment and modernization',
      'High-Capacity elevated water tank construction',
      'Air Selangor Partnership projects',
      'Distribution system improvements and upgrades',
    ],
    imagePlaceholder: '/images/services/water-reservoir.jpg',
  },
  {
    id: 'civil',
    title: 'Civil & Infrastructure',
    description:
      'Large-scale site preparation and civil engineering works enabling major development projects.',
    features: [
      'Site Enabling and preparation services',
      'Comprehensive Earthworks and grading',
      'Advanced Drainage system design and installation',
      'Road construction and infrastructure development',
    ],
    imagePlaceholder: '/images/services/civil-works.jpg',
  },
]

export function StickyServiceShowcase() {
  const [activeService, setActiveService] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position at the top third of viewport for earlier detection
      const scrollPosition = window.scrollY + window.innerHeight * 0.3

      // Find which section the user is currently viewing
      let newActiveService = 0

      for (let index = 0; index < sectionRefs.current.length; index++) {
        const ref = sectionRefs.current[index]
        if (ref) {
          const { offsetTop, offsetHeight } = ref
          const sectionMiddle = offsetTop + offsetHeight / 2

          // Switch to this service if we've passed its middle point
          if (scrollPosition >= sectionMiddle) {
            newActiveService = index
          }
        }
      }

      setActiveService(newActiveService)
    }

    // Run on mount to set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - Scrolling Text Content */}
        <div className="lg:pr-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              className="min-h-screen flex items-center py-20"
            >
              <div className="w-full">
                {service.badge && (
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
                    <Award className="h-4 w-4" />
                    {service.badge}
                  </div>
                )}
                <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                  {service.title}
                </h2>
                <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Sticky Image Container */}
        <div className="relative hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-12rem)] flex items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Placeholder background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4 opacity-20">
                        {index === 0 ? '🏗️' : index === 1 ? '💧' : '🚧'}
                      </div>
                      <p className="text-lg opacity-60">
                        Project image: {service.title}
                      </p>
                      <p className="text-sm opacity-40 mt-2">
                        {service.imagePlaceholder}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}