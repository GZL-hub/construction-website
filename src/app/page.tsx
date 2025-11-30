import { Hero } from '@/components/mainpage/Hero'
import { Services } from '@/components/mainpage/Services'
import { ClientLogos } from '@/components/mainpage/ClientLogos'

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
