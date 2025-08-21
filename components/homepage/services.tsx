import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Badge, Globe, Package, Palette } from 'lucide-react'

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

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari website development hingga branding lengkap, kami menyediakan semua yang Anda butuhkan untuk sukses digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {servicesData.map((service) => {
            const IconComponent = service.icon
            
            return (
              <div 
                key={service.id}
                className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow group "
              >
                {/* Icon */}
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="h-12 w-12" />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.href}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground group"
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