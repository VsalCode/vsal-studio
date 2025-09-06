"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ServiceCard from "../service-card"

export interface Feature {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
  price: string
  features: Feature[]
  popular?: boolean   // ⬅️ opsional, biar sesuai data
  [key: string]: any
}

interface PricePlanProps {
  id?: string
  title: string
  subtitle: string
  services: ServiceItem[]
}

export const PricePlan: React.FC<PricePlanProps> = ({
  id = "website",
  title,
  subtitle,
  services,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 1280px)": { slidesToScroll: 4 },
    },
  })

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section id={id} className="pb-15 pt-40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="font-space-grotesk text-4xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Navigation */}
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

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden pt-4" ref={emblaRef}>
            <div className="flex">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                >
                  <div className="pr-4">
                    <ServiceCard {...service} /> {/* ✅ aman */}
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
