"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from '../service-card'

export const Design = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const designServices = [
    {
      title: "Logo Design",
      description: "Identitas visual yang memorable",
      price: "Rp 249k",
      popular: true,
      features: [
        {
          title: "Brand Research",
          description: "Riset kompetitor dan analisis market untuk positioning yang tepat",
        },
        {
          title: "Multiple Concepts",
          description: "3-5 konsep logo yang berbeda untuk dipilih sesuai preferensi",
        },
        {
          title: "Unlimited Revisions",
          description: "Revisi tanpa batas hingga hasil sesuai dengan ekspektasi Anda",
        },
        {
          title: "Complete File Package",
          description: "Semua format file (PNG, SVG, EPS, PDF) untuk berbagai kebutuhan",
        },
      ],
    },
    {
      title: "Social Media Content",
      description: "Konten engaging untuk semua platform",
      price: "Rp 750k/bulan",
      features: [
        {
          title: "Content Planning",
          description: "Perencanaan konten bulanan dengan tema dan strategi yang konsisten",
        },
        {
          title: "Custom Graphics",
          description: "Desain grafis kustom untuk feed, story, dan berbagai format posting",
        },
        {
          title: "Copywriting",
          description: "Caption yang engaging dan call-to-action yang efektif",
        },
        {
          title: "Scheduling & Posting",
          description: "Penjadwalan dan posting otomatis di semua platform media sosial",
        },
      ],
    },
    {
      title: "Complete Branding",
      description: "Paket branding lengkap untuk identitas bisnis",
      price: "Rp 1.2 JT",
      features: [
        {
          title: "Brand Strategy",
          description: "Pengembangan strategi brand positioning dan brand personality",
        },
        {
          title: "Visual Identity System",
          description: "Logo, color palette, typography, dan elemen visual konsisten",
        },
        {
          title: "Brand Guidelines",
          description: "Panduan lengkap penggunaan brand untuk konsistensi di semua media",
        },
        {
          title: "Marketing Collaterals",
          description: "Desain business card, letterhead, dan material marketing lainnya",
        },
      ],
    },
  ]

  return (
    <section id="design" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Design Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Identitas visual yang kuat dan konsisten untuk membangun brand yang memorable
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
              {designServices.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
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