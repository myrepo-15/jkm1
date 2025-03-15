'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">Power<span className="text-gray-800">Lift</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-orange-500 font-medium transition-colors">Home</Link>
            <Link href="/equipment" className="text-gray-800 hover:text-orange-500 font-medium transition-colors">Equipment</Link>
            <Link href="/about" className="text-gray-800 hover:text-orange-500 font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-gray-800 hover:text-orange-500 font-medium transition-colors">Contact</Link>
            <Link href="/quote" className="btn-primary">Get Quote</Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-orange-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/equipment" className="text-gray-800 hover:text-orange-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>Equipment</Link>
              <Link href="/about" className="text-gray-800 hover:text-orange-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-orange-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/quote" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Get Quote</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}