import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Marquee from "@/components/marquee"
import { ArrowRight, Package, Globe, Palette, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const clients = [
    { name: "TechCorp", logo: "/abstract-tech-logo.png" },
    { name: "StartupX", logo: "/abstract-startup-logo.png" },
    { name: "InnovateCo", logo: "/innovation-company-logo.png" },
    { name: "GrowthLab", logo: "/growth-lab-logo.png" },
    { name: "FutureTech", logo: "/future-tech-logo.png" },
    { name: "DigitalPro", logo: "/digital-pro-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Digital Solutions That Work</Badge>
            <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6">
              Transform Your
              <span className="text-primary block">Digital Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We create stunning websites, memorable brands, and engaging social media content that drives real results
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section id="clients" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-4">Trusted by Leading Brands</h2>
            <p className="text-muted-foreground">
              Join hundreds of satisfied clients who ve transformed their digital presence
            </p>
          </div>
          <Marquee pauseOnHover className="[--duration:30s]">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center mx-8">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">About Vsal Studio</Badge>
                <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">
                  We Create Digital Experiences That Matter
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  With over 5 years of experience in digital design and development, we ve helped hundreds of businesses
                  establish their online presence and grow their digital footprint.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our team combines creative vision with technical expertise to deliver solutions that not only look
                  great but also drive real business results.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/digital-agency-team.png" alt="Our team at work" className="rounded-lg shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <Award className="h-8 w-8 mb-2" />
                  <div className="font-semibold">Award Winning</div>
                  <div className="text-sm opacity-90">Design Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Complete Digital Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dari website development hingga branding lengkap, kami menyediakan semua yang Anda butuhkan untuk sukses
              digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                <Package className="h-12 w-12" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Paket Bundling</h3>
              <p className="text-muted-foreground mb-6">
                Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Website + Logo + Social Media
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Paket hemat untuk semua kebutuhan
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Support dan maintenance included
                </li>
              </ul>
              <Link href="/services#bundling">
                <Button variant="outline" className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground group">
                  Lihat Paket Bundling
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Website Development</h3>
              <p className="text-muted-foreground mb-6">
                Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Landing Page & Static Website
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  E-commerce & POS Web App
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Custom Web Development
                </li>
              </ul>
              <Link href="/services#website">
                <Button variant="outline" className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground group">
                  Lihat Website Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                <Palette className="h-12 w-12" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Design Services</h3>
              <p className="text-muted-foreground mb-6">
                Identitas visual yang kuat mulai dari logo design hingga complete branding
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Logo Design & Branding
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Social Media Content
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Brand Guidelines & Identity
                </li>
              </ul>
              <Link href="/services#design">
                <Button variant="outline" className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground group">
                  Lihat Design Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

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

      {/* Testimonials */}
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-grotesk text-4xl font-bold text-secondary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let s discuss your project and create something amazing together. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
