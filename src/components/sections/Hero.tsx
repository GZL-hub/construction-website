'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Award, Shield, CheckCircle2 } from 'lucide-react'
import { SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/constants'

const HERO_IMAGES = [
  '/images/hero/DJI_0028.JPG',
  '/images/hero/DJI_0029.JPG',
  '/images/hero/DJI_0040.JPG',
]

/**
 * Hero section for the landing page with split layout and image carousel
 */
export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      {/* Two Column Layout - Full Width */}
      <div className="relative w-full">
        <div className="flex">
          {/* Left Content - 35% Width */}
          <div className="flex w-full items-center py-16 md:py-24 lg:w-[35%]">
            <Container>
              <div className="flex flex-col justify-center lg:pr-8">
                {/* Tagline/Headline */}
                <h2 className="mb-6 text-white leading-tight">
                  {SITE_TAGLINE}
                </h2>

                {/* Description */}
                <p className="mb-8 text-lg leading-relaxed text-gray-300 text-justify md:text-xl">
                  {SITE_DESCRIPTION}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/about">
                    <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>

          {/* Right Image - 65% Width */}
          <div className="relative hidden min-h-[90vh] lg:block lg:w-[65%]">
            {/* Image Carousel with Sliding Animation */}
            <div className="absolute inset-0 overflow-hidden">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex
                      ? 'translate-x-0 opacity-100'
                      : index < currentImageIndex
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="65vw"
                  />
                  {/* Dark overlay for better badge visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              ))}
            </div>

            {/* Grid Badge Boxes - Full Width at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 z-10">
              {/* 25+ Years Badge - Glass UI */}
              <div className="group backdrop-blur-md bg-white/10 border-r border-white/20 px-6 py-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary-500/20 border border-primary-400/30">
                    <Award className="h-6 w-6 text-primary-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm font-medium text-gray-300">Years Experience</div>
                </div>
              </div>

              {/* CIDB G-7 Badge - Pure Solid Blue */}
              <div className="group bg-primary-700 border-r border-primary-600 px-6 py-8 hover:bg-primary-600 transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/images/cert_logo/CIDB_logo.svg"
                      alt="CIDB Logo"
                      width={64}
                      height={64}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="text-3xl font-bold text-white transform transition-all duration-300 group-hover:scale-105">CIDB G-7</div>
                  <div className="text-sm font-medium text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">Certified</div>
                </div>
              </div>

              {/* ISO Certified Badge - Glass UI */}
              <div className="group relative backdrop-blur-md bg-white/10 px-6 py-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Image
                      src="/images/cert_logo/ISO9001.svg"
                      alt="ISO 9001:2015 Certified"
                      width={64}
                      height={64}
                      className="object-contain brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div className="text-3xl font-bold text-white transform transition-all duration-300 group-hover:scale-105">ISO 9001</div>
                  <div className="text-sm font-medium text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">Certified</div>
                </div>

                {/* Carousel Indicators - Positioned above ISO badge */}
                <div className="absolute -top-16 right-6 flex gap-3">
                  {HERO_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-3 transition-all duration-300 cursor-pointer ${
                        index === currentImageIndex
                          ? 'w-12 bg-white'
                          : 'w-3 bg-white/50 hover:bg-white/75 hover:w-6'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
