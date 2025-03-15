import HeroSection from './components/HeroSection'
import EquipmentCategories from './components/EquipmentCategories'
import FeaturedEquipment from './components/FeaturedEquipment'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EquipmentCategories />
      <FeaturedEquipment />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}