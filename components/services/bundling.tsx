import React from 'react'
import ServiceCard from '../service-card'

export const Bundling = () => {
  const bundlingServices = [
    {
      title: "Paket Perintis",
      description: "Perfect untuk startup dan bisnis baru",
      price: "$1,999",
      features: [
        {
          title: "Landing Page Website",
          description: "Website satu halaman yang menarik dan responsif untuk memperkenalkan bisnis Anda",
        },
        {
          title: "Logo Design Basic",
          description: "Desain logo sederhana dengan 2 konsep pilihan dan file format standar",
        },
        {
          title: "Social Media Setup",
          description: "Pembuatan akun media sosial di 3 platform utama dengan desain profil dasar",
        },
        {
          title: "Content Template",
          description: "10 template konten media sosial yang dapat digunakan untuk posting",
        },
      ],
    },
    {
      title: "Paket Ambisius",
      description: "Solusi lengkap untuk bisnis yang berkembang",
      price: "$3,999",
      popular: true,
      features: [
        {
          title: "Multi-Page Website",
          description: "Website lengkap dengan 5-7 halaman, CMS, dan fitur kontak form",
        },
        {
          title: "Logo Design Premium",
          description: "Desain logo profesional dengan 5 konsep, brand guidelines, dan semua format file",
        },
        {
          title: "Social Media Management",
          description: "Setup lengkap + pengelolaan konten selama 3 bulan di 5 platform",
        },
        {
          title: "SEO Optimization",
          description: "Optimasi SEO on-page dan setup Google Analytics untuk tracking performa",
        },
        {
          title: "Branding Package",
          description: "Color palette, typography guide, dan brand identity guidelines lengkap",
        },
      ],
    },
    {
      title: "Paket Pesugihan",
      description: "Transformasi digital menyeluruh untuk enterprise",
      price: "$7,999",
      features: [
        {
          title: "Custom Web Application",
          description: "Aplikasi web kustom dengan fitur advanced, dashboard admin, dan integrasi API",
        },
        {
          title: "Complete Brand Identity",
          description: "Rebranding lengkap termasuk logo, brand guidelines, dan aplikasi brand di semua media",
        },
        {
          title: "Digital Marketing Suite",
          description: "Strategi digital marketing lengkap dengan content calendar 6 bulan",
        },
        {
          title: "E-commerce Integration",
          description: "Sistem e-commerce lengkap dengan payment gateway dan inventory management",
        },
        {
          title: "Maintenance & Support",
          description: "Support teknis dan maintenance selama 12 bulan penuh",
        },
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Paket Bundling</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solusi lengkap untuk transformasi digital bisnis Anda dengan harga yang lebih hemat
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bundlingServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
