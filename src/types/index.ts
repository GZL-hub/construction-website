export interface NavLink {
  label: string
  href: string
}

export interface ProjectImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: 'commercial' | 'residential' | 'industrial'
  location: string
  completionDate: string
  client?: string
  images: ProjectImage[]
  mainImage: ProjectImage
  stats?: {
    sqft?: number
    duration?: string
    budget?: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}
