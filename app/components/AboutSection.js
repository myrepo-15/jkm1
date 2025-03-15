import Link from 'next/link'
import { Check } from 'lucide-react'

export default function AboutSection() {
  const features = [
    "High-quality equipment from trusted manufacturers",
    "Flexible rental periods to suit your project timeline",
    "Comprehensive maintenance and support services",
    "Expert technical consultation and assistance",
    "Safety training and certifications for operators",
    "Prompt delivery and installation services"
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose PowerLift Rentals?</h2>
            <p className="text-gray-600 mb-8">
              With over 15 years of experience in the construction equipment rental industry, PowerLift Rentals has established itself as a trusted partner for contractors, builders, and developers across the region. Our commitment to quality, reliability, and customer satisfaction sets us apart from the competition.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-orange-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gray-300" /> {/* Placeholder for actual image */}
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-500 rounded-lg hidden md:block" style={{ zIndex: -1 }} />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gray-200 rounded-lg hidden md:block" style={{ zIndex: -1 }} />
          </div>
        </div>
      </div>
    </section>
  )
}