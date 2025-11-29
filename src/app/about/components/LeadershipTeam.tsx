import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function LeadershipTeam() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4">Leadership Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((member) => (
            <div key={member} className="group text-center">
              <div className="mb-6 overflow-hidden rounded-2xl bg-gray-100">
                <div className="aspect-square">
                  <Image
                    src={`/images/team/member-${member}.jpg`}
                    alt={`Team Member ${member}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-gray-900">Lorem Ipsum</h3>
              <p className="mb-3 text-primary-600 font-medium">Position Title</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}