import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Video Background Placeholder (dark overlay for readability) */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-gray-900">
        {/* Simulated video effect with animated gradient */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          Engineering Malaysia's
          <br />
          Critical Infrastructure
        </h1>
        <p className="mx-auto max-w-3xl text-xl md:text-2xl text-gray-300 font-serif leading-relaxed">
          From centralized treatment plants to national water distribution.
          <br />
          We build the systems that sustain communities.
        </p>
      </div>

      {/* Scroll Down Indicator (no animation) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm font-medium tracking-wide">SCROLL DOWN</span>
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}