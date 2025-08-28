import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Globe, Package, Palette } from 'lucide-react'
import { Badge } from '../ui/badge'

const servicesData = [
  {
    id: 'bundling',
    icon: Package,
    title: 'Paket Bundling',
    description: 'Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise',
    features: [
      'Website + Logo + Social Media',
      'Paket hemat untuk semua kebutuhan',
      'Support dan maintenance included'
    ],
    buttonText: 'Lihat Paket Bundling',
    href: '/services#bundling'
  },
  {
    id: 'website',
    icon: Globe,
    title: 'Website Development',
    description: 'Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom',
    features: [
      'Landing Page & Static Website',
      'E-commerce & POS Web App',
      'Custom Web Development'
    ],
    buttonText: 'Lihat Website Services',
    href: '/services#website'
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design Services',
    description: 'Identitas visual yang kuat mulai dari logo design hingga complete branding',
    features: [
      'Logo Design & Branding',
      'Social Media Content',
      'Brand Guidelines & Identity'
    ],
    buttonText: 'Lihat Design Services',
    href: '/services#design'
  }
]

// warna random untuk icon
const iconColors = [
  "text-blue-500",
  "text-green-500",
  "text-red-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-orange-500",
]

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Dari website development hingga branding lengkap, kami menyediakan semua yang Anda butuhkan untuk sukses digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {servicesData.map((service, idx) => {
            const IconComponent = service.icon
            const colorClass = iconColors[idx % iconColors.length] // biar gak bener2 random di setiap render
            return (
              <div 
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-md border border-white/20 hover:shadow-lg transition-all group"
              >
                {/* Icon dengan lingkaran putih */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className={`h-8 w-8 ${colorClass}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="text-sm text-white/80 space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`mr-2 ${colorClass}`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.href}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-primary hover:text-primary-foreground group"
                  >
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Lihat Semua Services & Pricing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
