import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function Certifications() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4">Certifications & Accreditations</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our commitment to quality and compliance is backed by Malaysia’s highest industry
            qualifications, authorizing us to undertake infrastructure projects of any scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* CIDB Card */}
          <div className="flex items-center gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-primary-50">
                <Image
                  src="/images/cert_logo/CIDB_logo.svg"
                  alt="CIDB G7 Certified"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">CIDB Grade G7</h3>
              <p className="text-gray-600">
                We hold the highest contractor grade available, authorizing us to tender for and
                execute building, civil engineering, and mechanical works with no limit on contract value.
              </p>
            </div>
          </div>

          {/* ISO Card */}
          <div className="flex items-center gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-blue-50">
                <Image
                  src="/images/cert_logo/ISO9001.svg"
                  alt="ISO 9001:2015 Certified"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Our operations are certified for the Design and Build of Sewerage Treatment Plants, 
                guaranteeing that our processes meet rigorous international benchmarks for quality and safety.
              </p>
            </div>
          </div>

          {/* SPAN Card - Added based on profile */}
          <div className="flex items-center gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-green-50">
                {/* You may need to add this logo asset */}
                <Image
                  src="/images/client_logo/span.svg"
                  alt="SPAN Registered"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">SPAN Registered</h3>
              <p className="text-gray-600">
                Fully licensed by the National Water Services Commission (SPAN) to construct and
                maintain national water supply and sewerage assets of any size.
              </p>
            </div>
          </div>

          {/* MOF Card - Added based on profile */}
          <div className="flex items-center gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-yellow-50">
                {/* You may need to add this logo asset */}
                <Image
                  src="/images/cert_logo/MOF.png"
                  alt="Ministry of Finance Registered"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">MOF Registered</h3>
              <p className="text-gray-600">
                A government-approved supplier registered with the Ministry of Finance, eligible
                to participate in major government tenders and civil engineering procurement.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}