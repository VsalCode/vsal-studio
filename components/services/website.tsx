"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from '../service-card'

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

  const websiteServices = [
    {
      title: "Landing Page",
      description: "Single page website yang powerful",
      price: "Rp 599k",
      features: [
        {
          title: "Responsive Design",
          description: "Desain yang sempurna di semua perangkat mobile, tablet, dan desktop",
        },
        {
          title: "Fast Loading",
          description: "Optimasi kecepatan loading dengan teknologi modern dan CDN",
        },
        {
          title: "Contact Form",
          description: "Form kontak terintegrasi dengan notifikasi email otomatis",
        },
        {
          title: "SEO Ready",
          description: "Struktur HTML yang SEO-friendly dan meta tags yang optimal",
        },
      ],
    },
    {
      title: "Static Website",
      description: "Website multi-halaman untuk company profile",
      price: "Rp. 950k",
      popular: true,
      features: [
        {
          title: "Multi-Page Structure",
          description: "5-7 halaman lengkap: Home, About, Services, Portfolio, Contact",
        },
        {
          title: "CMS Integration",
          description: "Content Management System untuk update konten secara mandiri",
        },
        {
          title: "Gallery & Portfolio",
          description: "Showcase produk atau layanan dengan gallery yang menarik",
        },
        {
          title: "Google Analytics",
          description: "Setup tracking dan analytics untuk monitoring traffic website",
        },
      ],
    },
    {
      title: "E-commerce Website",
      description: "Toko online lengkap dengan sistem pembayaran",
      price: "Rp. 3 jt",
      features: [
        {
          title: "Product Catalog",
          description: "Katalog produk lengkap dengan kategori, filter, dan pencarian",
        },
        {
          title: "Shopping Cart",
          description: "Keranjang belanja dengan kalkulasi otomatis ongkir dan pajak",
        },
        {
          title: "Payment Gateway",
          description: "Integrasi dengan berbagai metode pembayaran lokal dan internasional",
        },
        {
          title: "Order Management",
          description: "Dashboard admin untuk mengelola pesanan dan inventory",
        },
      ],
    },
    {
      title: "POS Web App",
      description: "Aplikasi Point of Sale berbasis web",
      price: "Rp. 1.2 JT",
      features: [
        {
          title: "Sales Management",
          description: "Sistem penjualan lengkap dengan barcode scanner dan receipt printer",
        },
        {
          title: "Inventory Control",
          description: "Manajemen stok real-time dengan alert low stock otomatis",
        },
        {
          title: "Reporting Dashboard",
          description: "Laporan penjualan, profit, dan analytics bisnis yang komprehensif",
        },
        {
          title: "Multi-User Access",
          description: "Sistem user dengan role-based access untuk kasir dan admin",
        },
      ],
    },
    {
      title: "Custom Website",
      description: "Website kustom sesuai kebutuhan spesifik",
      price: "Custom Quote",
      features: [
        {
          title: "Requirement Analysis",
          description: "Analisis mendalam kebutuhan bisnis dan technical requirements",
        },
        {
          title: "Custom Features",
          description: "Pengembangan fitur khusus sesuai dengan workflow bisnis Anda",
        },
        {
          title: "API Integration",
          description: "Integrasi dengan sistem existing atau third-party services",
        },
        {
          title: "Scalable Architecture",
          description: "Arsitektur yang dapat berkembang seiring pertumbuhan bisnis",
        },
      ],
    },
  ]

  return (
    <section id="website" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Website Development</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              {websiteServices.map((service, index) => (
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