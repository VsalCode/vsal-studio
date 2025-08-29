"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from '../service-card'

export const Bundling = () => {
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

  const bundlingServices = [
    {
      title: "Paket Perintis",
      description: "Pilihan tepat untuk startup dan bisnis yang baru mulai merintis.",
      price: "Rp 1,5 JT",
      features: [
        {
          title: "Free Konsultasi",
          description: "Diskusikan kebutuhan bisnismu untuk solusi terbaik."
        },
        {
          title: "Basic Logo Design",
          description: "Logo sederhana dengan 2 konsep pilihan dan file format standar."
        },
        {
          title: "20 Desain Feed Instagram",
          description: "Maksimalkan branding dengan 20 desain feed Instagram."
        },
        {
          title: "5 Desain Story Instagram",
          description: "5 desain story untuk memperkuat identitas brand di Instagram."
        },
        {
          title: "Landing Page",
          description: "Website landing page profesional (maksimal 1 halaman)."
        },
        {
          title: "Custom Domain",
          description: "Gratis 1 domain sesuai nama brand bisnismu."
        }
      ]
    },
    {
      title: "Paket Ambisius",
      description: "Solusi lengkap untuk bisnis yang sedang bertumbuh pesat.",
      price: "Rp 2,9 JT",
      popular: true,
      features: [
        {
          title: "Free Konsultasi",
          description: "Diskusikan kebutuhan bisnismu untuk solusi terbaik."
        },
        {
          title: "Logo Design",
          description: "Desain logo eksklusif dengan 2 konsep pilihan dan file format standar."
        },
        {
          title: "30 Desain Feed Instagram",
          description: "Maksimalkan engagement dengan 30 desain feed Instagram."
        },
        {
          title: "12 Desain Story Instagram",
          description: "12 desain story untuk menjaga konsistensi branding."
        },
        {
          title: "Free Template Post",
          description: "Template desain siap pakai untuk posting di sosial media."
        },
        {
          title: "3 Konten Reels/TikTok",
          description: "3 video kreatif untuk Reels atau TikTok."
        },
        {
          title: "Static Website",
          description: "Website statis profesional (hingga 8 halaman)."
        },
        {
          title: "Custom Domain",
          description: "Gratis 1 domain sesuai nama brand bisnismu."
        },
        {
          title: "SEO Friendly Website",
          description: "Optimasi website agar mudah ditemukan di mesin pencari."
        },
        {
          title: "Unlimited Revisi",
          description: "Revisi tanpa batas hingga project selesai."
        },
        {
          title: "1 Tahun Web Maintenance",
          description: "Garansi bantuan teknis jika website bermasalah."
        }
      ]
    },
    {
      title: "Paket Pesugihan",
      description: "Transformasi digital menyeluruh untuk perusahaan dan brand besar.",
      price: "Rp 5 JT",
      features: [
        {
          title: "Free Konsultasi",
          description: "Diskusikan kebutuhan bisnismu untuk strategi terbaik."
        },
        {
          title: "Logo Design + Paten",
          description: "Logo profesional dengan 2 konsep pilihan, berbagai varian file, dan opsi pendaftaran hak paten."
        },
        {
          title: "60 Desain Feed Instagram",
          description: "Tingkatkan visibilitas brand dengan 60 desain feed Instagram."
        },
        {
          title: "24 Desain Story Instagram",
          description: "24 desain story kreatif untuk memperkuat branding."
        },
        {
          title: "Free Template Post",
          description: "Template desain siap pakai untuk sosial media."
        },
        {
          title: "12 Konten Reels/TikTok",
          description: "12 konten video kreatif untuk Reels atau TikTok."
        },
        {
          title: "Dynamic Custom Website",
          description: "Website dinamis yang terintegrasi dengan CMS atau database."
        },
        {
          title: "CMS / Dashboard Admin",
          description: "Kelola konten website dengan mudah melalui CMS/Dashboard."
        },
        {
          title: "Custom Domain",
          description: "Gratis 1 domain sesuai nama brand bisnismu."
        },
        {
          title: "SEO Friendly Website",
          description: "Website dioptimalkan agar mudah ditemukan di Google."
        },
        {
          title: "Company Profile Design",
          description: "Desain company profile profesional untuk klien dan investor."
        },
        {
          title: "Unlimited Revisi",
          description: "Revisi tanpa batas hingga project selesai."
        },
        {
          title: "Free Lifetime Web Maintenance",
          description: "Perawatan website gratis seumur hidup."
        }
      ]
    }
  ]

  return (
    <section id="bundling" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">Paket Bundling</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Solusi lengkap untuk transformasi digital bisnis Anda dengan harga yang lebih hemat
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
              {bundlingServices.map((service, index) => (
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