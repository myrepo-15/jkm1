import Link from 'next/link'
import Image from 'next/image'

export default function EquipmentCategories() {
  const categories = [
    {
      title: "Tower Cranes",
      description: "High-performance tower cranes for efficient material handling at height.",
      image: "/images/tower-crane.jpg",
      href: "/equipment/tower-cranes"
    },
    {
      title: "Material Hoists",
      description: "Reliable material hoists for vertical transportation of construction materials.",
      image: "/images/material-hoist.jpg",
      href: "/equipment/material-hoists"
    },
    {
      title: "Passenger Hoists",
      description: "Safe and efficient passenger hoists for worker transportation on construction sites.",
      image: "/images/passenger-hoist.jpg",
      href: "/equipment/passenger-hoists"
    },
    {
      title: "Suspended Platforms",
      description: "Rope suspended platforms for exterior building work and maintenance.",
      image: "/images/suspended-platform.jpg",
      href: "/equipment/suspended-platforms"
    },
    {
      title: "Excavators & Loaders",
      description: "JCBs, Bobcats, and Backhoe loaders for excavation and material handling.",
      image: "/images/excavator.jpg",
      href: "/equipment/excavators"
    },
    {
      title: "Specialized Equipment",
      description: "Specialized construction equipment for unique project requirements.",
      image: "/images/specialized.jpg",
      href: "/equipment/specialized"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Equipment Categories</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction equipment rentals to meet all your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category, index) => (
            <Link 
              href={category.href} 
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <div className="w-full h-full bg-gray-300" /> {/* Placeholder for actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-orange-500 font-medium">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}