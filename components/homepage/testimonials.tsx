import React from 'react'
import { Badge } from '../ui/badge'

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Client Testimonials</Badge>
          <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dengarkan langsung dari klien yang telah merasakan transformasi digital bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img src="/professional-ceo-woman.png" alt="Sarah Johnson" className="w-15 h-15 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-secondary">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">CEO, TechStartup Inc.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vsal Studio transformed our online presence completely. The Paket Ambisius was perfect for our growing
              startup. Website yang mereka buat tidak hanya beautiful tapi juga conversion rate kami naik 300%!
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img
                src="/professional-marketing-director.png"
                alt="Michael Chen"
                className="w-15 h-15 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-secondary">Michael Chen</h4>
                <p className="text-sm text-muted-foreground">Marketing Director, GrowthLab</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tim Vsal Studio sangat profesional dan responsive. Logo design dan branding package yang mereka buat
              benar-benar mencerminkan nilai perusahaan kami. Highly recommended!
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img
                src="/professional-business-woman-founder.png"
                alt="Amanda Rodriguez"
                className="w-15 h-15 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-secondary">Amanda Rodriguez</h4>
                <p className="text-sm text-muted-foreground">Founder, EcoFashion Store</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              E-commerce website yang dibuat Vsal Studio sangat user-friendly dan sales kami meningkat drastis.
              Customer support mereka juga excellent, selalu siap membantu kapan saja.
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img src="/professional-restaurant-owner.png" alt="David Kim" className="w-15 h-15 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-secondary">David Kim</h4>
                <p className="text-sm text-muted-foreground">Owner, Kimchi House Restaurant</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              POS web app yang mereka develop sangat membantu operasional restaurant kami. Inventory management jadi
              lebih mudah dan laporan penjualan real-time sangat berguna untuk decision making.
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img
                src="/professional-creative-director.png"
                alt="Lisa Thompson"
                className="w-15 h-15 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-secondary">Lisa Thompson</h4>
                <p className="text-sm text-muted-foreground">Creative Director, ArtSpace Gallery</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media content management dari Vsal Studio luar biasa! Engagement rate Instagram kami naik 250%
              dan follower bertambah organik. Content mereka selalu on-brand dan engaging.
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <img
                src="/professional-tech-entrepreneur.png"
                alt="James Wilson"
                className="w-15 h-15 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-secondary">James Wilson</h4>
                <p className="text-sm text-muted-foreground">Entrepreneur, InnovateTech</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Paket Pesugihan benar-benar worth it! Custom web application yang mereka buat sesuai banget dengan
              business flow kami. ROI dari investment ini sudah balik dalam 6 bulan pertama.
            </p>
            <div className="flex text-primary">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
