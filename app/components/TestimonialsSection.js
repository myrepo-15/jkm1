            'use client'

            import { useState, useEffect } from 'react'
            import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

            export default function TestimonialsSection() {
              const testimonials = [
                {
                  name: "John Doe",
                  position: "Project Manager, ABC Construction",
                  testimonial: "PowerLift Rentals provided us with top-quality tower cranes for our high-rise project. Their equipment was well-maintained and their support team was always available when we needed them.",
                  rating: 5
                },
                {
                  name: "Jane Smith",
                  position: "Site Engineer, XYZ Developers",
                  testimonial: "We've been using PowerLift's material hoists for all our projects over the past 3 years. Their equipment is reliable and their service is outstanding. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Michael Johnson",
                  position: "Construction Director, Skyline Builders",
                  testimonial: "When we needed specialized equipment for our challenging project, PowerLift came through with exactly what we needed. Their expertise and equipment quality helped us complete the project ahead of schedule.",
                  rating: 4
                }
              ]

              const [currentTestimonial, setCurrentTestimonial] = useState(0)

              const nextTestimonial = () => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
              }

              const prevTestimonial = () => {
                setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }

              useEffect(() => {
                const interval = setInterval(() => {
                  nextTestimonial()
                }, 8000)
                return () => clearInterval(interval)
              }, [])

              return (
                <section className="section-padding bg-orange-500 text-white">
                  <div className="container-custom">
                    <div className="section-title">
                      <h2 className="text-white after:bg-white">What Our Clients Say</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                      <div className="relative overflow-hidden">
                        <div 
                          className="transition-transform duration-500 ease-in-out flex"
                          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                        >
                          {testimonials.map((testimonial, index) => (
                            <div key={index} className="min-w-full">
                              <div className="text-center px-4 md:px-12">
                                <div className="flex justify-center mb-4">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-6 h-6 ${i < testimonial.rating ? 'fill-white text-white' : 'text-white opacity-50'}`} 
                                    />
                                  ))}
                                </div>
                                <p className="text-lg md:text-xl mb-6 italic">"{testimonial.testimonial}"</p>
                                <p className="font-bold text-lg">{testimonial.name}</p>
                                <p className="text-white text-opacity-80">{testimonial.position}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={prevTestimonial} 
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={nextTestimonial} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="flex justify-center mt-8 space-x-2">
                                  {testimonials.map((_, index) => (
                                    <button 
                                      key={index}
                                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentTestimonial === index ? 'bg-white' : 'bg-white bg-opacity-40'
                                      }`}
                                      onClick={() => setCurrentTestimonial(index)}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </section>
                        )
                      }