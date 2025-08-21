import React from 'react'
import ServiceCard from '../service-card'

export const Design = () => {

  const designServices = [
    {
      title: "Logo Design",
      description: "Identitas visual yang memorable",
      price: "$599",
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
      price: "$899/bulan",
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
      price: "$1,999",
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Design Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Identitas visual yang kuat dan konsisten untuk membangun brand yang memorable
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {designServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
