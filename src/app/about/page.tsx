import { Metadata } from 'next'
import { Hero } from './components/Hero'
import { CompanyOverview } from './components/CompanyOverview'
import { MissionVision } from './components/MissionView'
import { Timeline } from './components/Timeline'
import { Certifications } from './components/Certifications'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Nine Hundred Builders SDN BHD - 25+ years of excellence in water and sewerage infrastructure development.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Hero />
      <CompanyOverview />
      <MissionVision />
      <Timeline />
      <Certifications />
    </div>
  )
}