'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturedEquipment() {
  const [activeTab, setActiveTab] = useState('cranes')

  const equipment = {
    cranes: [
      {
        name: "Potain MCT 85",
        manufacturer: "Potain",
        description: "Flat top tower crane with 5 ton capacity, perfect for small to medium construction sites.",
        specs: ["Max Capacity: 5 tons", "Max Height: 50m", "Jib Length: 52m"],
        image: "/images/potain-mct-85.jpg",
        href: "/equipment/potain-mct-85"
      },
      {
        name: "Liebherr 150 EC-B",
        manufacturer: "Liebherr",
        description: "Versatile flat-top crane with excellent lifting capacity for mid-sized projects.",
        specs: ["Max Capacity: 8 tons", "Max Height: 63m", "Jib Length: 60m"],
        image: "/images/liebherr-150-ec-b.jpg",
        href: "/equipment/liebherr-150-ec-b"
      },
      {
        name: "Terex CTT 161",
        manufacturer: "Terex",
        description: "High-performance tower crane with exceptional lifting capacity and reach.",
        specs: ["Max Capacity: 10 tons", "Max Height: 68m", "Jib Length: 65m"],
        image: "/images/terex-ctt-161.jpg",
        href: "/equipment/terex-ctt-161"
      }
    ],
    hoists: [
      {
        name: "Alimak SC 45/30",
        manufacturer: "Alimak",
        description: "Reliable construction hoist for personnel and materials with dual cage system.",
        specs: ["Capacity: 2000kg", "Speed: 40m/min", "Max Height: 150m"],
        image: "/images/alimak-sc-45-30.jpg",
        href: "/equipment/alimak-sc-45-30"
      },
      {
        name: "GEDA 500 Z/ZP",
        manufacturer: "GEDA",
        description: "Versatile transport platform for materials and personnel with easy installation.",
        specs: ["Capacity: 500kg", "Speed: 30m/min", "Max Height: 100m"],
        image: "/images/geda-500-z-zp.jpg",
        href: "/equipment/geda-500-z-zp"
      },
      {
        name: "XL Material Hoist",
        manufacturer: "PowerLift",
        description: "Heavy-duty material hoist for efficient vertical transportation on construction sites.",
        specs: ["Capacity: 3000kg", "Speed: 35m/min", "Max Height: 200m"],
        image: "/images/xl-material-hoist.jpg",
        href: "/equipment/xl-material-hoist"
      }
    ],
    platforms: [
      {
        name: "ZLP 630 Suspended Platform",
        manufacturer: "PowerLift",
        description: "Durable suspended platform for exterior building work with advanced safety features.",
        specs: ["Capacity: 630kg", "Platform Length: 6m", "Lifting Speed: 8-10m/min"],
        image: "/images/zlp-630.jpg",
        href: "/equipment/zlp-630"
      },
      {
        name: "ZLP 800 Suspended Platform",
        manufacturer: "PowerLift",
        description: "Heavy-duty suspended platform for demanding facade work with higher capacity.",
        specs: ["Capacity: 800kg", "Platform Length: 7.5m", "Lifting Speed: 8-10m/min"],
        image: "/images/zlp-800.jpg",
        href: "/equipment/zlp-800"
      }
    ],
    excavators: [
      {
        name: "JCB 3DX Backhoe Loader",
        manufacturer: "JCB",
        description: "Versatile backhoe loader for digging, trenching, and material handling.",
        specs: ["Engine Power: 76 HP", "Dig Depth: 4.8m", "Operating Weight: 8000kg"],
        image: "/images/jcb-3dx.jpg",
        href: "/equipment/jcb-3dx"
      },
      {
        name: "Bobcat S650 Skid-Steer Loader",
        manufacturer: "Bobcat",
        description: "Compact skid-steer loader with excellent maneuverability for tight spaces.",
        specs: ["Rated Capacity: 1180kg", "Engine Power: 74 HP", "Operating Weight: 3773kg"],
        image: "/images/bobcat-s650.jpg",
        href: "/equipment/bobcat-s650"
      },
      {
        name: "Komatsu PC210-10 Excavator",
        manufacturer: "Komatsu",
        description: "Powerful hydraulic excavator for large-scale excavation and earthmoving.",
        specs: ["Engine Power: 165 HP", "Bucket Capacity: 1.2m³", "Operating Weight: 21500kg"],
        image: "/images/komatsu-pc210.jpg",
        href: "/equipment/komatsu-pc210"
      }
    ]
  }

  const categories = [
    { id: 'cranes', label: 'Tower Cranes' },
    { id: 'hoists', label: 'Hoists' },
    { id: 'platforms', label: 'Suspended Platforms' },
    { id: 'excavators', label: 'Excavators & Loaders' }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="section-title">
          <h2>Featured Equipment</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse our selection of high-quality construction equipment available for rent.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === category.id 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Equipment cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment[activeTab].map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full overflow-hidden">
                <div className="w-full h-full bg-gray-300" /> {/* Placeholder for actual image */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.manufacturer}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2 mb-4">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">•</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <Link href={item.href} className="btn-primary w-full">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/equipment" className="btn-secondary">
            View All Equipment
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}