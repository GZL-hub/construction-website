import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { ClientLogos } from '@/components/sections/ClientLogos'

/**
 * Homepage - Main landing page
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ClientLogos />
    </>
  )
}
