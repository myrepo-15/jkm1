import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PowerLift Rentals</h3>
            <p className="mb-4">
              Your trusted partner for high-quality construction equipment rentals. Powering construction projects since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-orange-500 transition-colors">Equipment</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Equipment</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment/tower-cranes" className="hover:text-orange-500 transition-colors">Tower Cranes</Link>
              </li>
              <li>
                <Link href="/equipment/material-hoists" className="hover:text-orange-500 transition-colors">Material Hoists</Link>
              </li>
              <li>
                <Link href="/equipment/passenger-hoists" className="hover:text-orange-500 transition-colors">Passenger Hoists</Link>
              </li>
              <li>
                <Link href="/equipment/suspended-platforms" className="hover:text-orange-500 transition-colors">Suspended Platforms</Link>
              </li>
              <li>
                <Link href="/equipment/excavators" className="hover:text-orange-500 transition-colors">Excavators & Loaders</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>123 Construction Avenue, Suite 400, San Francisco, CA 94107</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>info@powerliftrentals.com</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} PowerLift Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}