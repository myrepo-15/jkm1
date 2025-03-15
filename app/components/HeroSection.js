'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Premium Construction Equipment Rentals",
      subtitle: "Power your project with top-quality equipment",
      image: "/images/hero-1.jpg", // These would be added to the public folder
    },
    {
      title: "Tower Cranes & Heavy Machinery",
      subtitle: "Specialized equipment for every construction need",
      image: "/images/hero-2.jpg",
    },
    {
      title: "Expert Support & Maintenance",
      subtitle: "Professional service throughout your rental period",
      image: "/images/hero-3.jpg",
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="mb-4 max-w-4xl">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/equipment" className="btn-primary">
            Explore Equipment
            <ChevronRight className="ml-2" size={20} />
          </Link>
          <Link href="/quote" className="btn-secondary">
            Request Quote
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}