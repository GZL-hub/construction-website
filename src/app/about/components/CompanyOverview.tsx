import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function CompanyOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image - Left */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/mainlogo/900grouphoto.jpg"
                alt="Nine Hundred Builders Team"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary-100"></div>
          </div>

          {/* Content - Right */}
          <div>
            <h2 className="mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              We are a CIDB Grade G7 contractor, authorized for unlimited tender capacity in Building, Civil Engineering, and
              Mechanical & Electrical works. Our reputation is built on technical precision, financial stability,
              and an unwavering commitment to delivering complex utility infrastructure on time and within compliance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}