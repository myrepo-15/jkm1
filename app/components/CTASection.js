import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Next Project?</h2>
            <p className="text-gray-300 mb-8">
              Contact our team today to discuss your equipment rental needs. We offer customized solutions for projects of all sizes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <span>info@powerliftrentals.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Quick Inquiry</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label htmlFor="equipment" className="block text-sm font-medium text-gray-300 mb-1">
                    Equipment Needed
                  </label>
                  <select
                    id="equipment"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Equipment Type</option>
                    <option value="tower-crane">Tower Crane</option>
                    <option value="material-hoist">Material Hoist</option>
                    <option value="passenger-hoist">Passenger Hoist</option>
                    <option value="suspended-platform">Suspended Platform</option>
                    <option value="excavator">Excavator/Loader</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us about your project requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}