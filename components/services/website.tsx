"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from '../service-card'
import { websiteServices } from '@/data/services/website'

export const Website = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(min-width: 1280px)': { slidesToScroll: 4 }
    }
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  

  return (
    <section id="website" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">Website Development</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Website profesional yang sesuai dengan kebutuhan dan skala bisnis Anda
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden pt-4" ref={emblaRef}>
            <div className="flex">
              {websiteServices?.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                  <div className="pr-4">
                    <ServiceCard {...service} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}