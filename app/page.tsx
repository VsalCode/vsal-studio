import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Marquee from "@/components/marquee"
import { ArrowRight, Award } from "lucide-react"
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

  const websiteServices = [
    {
      title: "Landing Page",
      description: "Single page website yang powerful",
      price: "$799",
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
      price: "$1,499",
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
      price: "$2,999",
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
      price: "$3,999",
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-space-grotesk text-2xl font-bold text-secondary">DigitalCraft</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#clients" className="text-foreground hover:text-primary transition-colors">
                Clients
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

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
              Join hundreds of satisfied clients who've transformed their digital presence
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
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">About DigitalCraft</Badge>
                <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">
                  We Create Digital Experiences That Matter
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  With over 5 years of experience in digital design and development, we've helped hundreds of businesses
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
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">📦</div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Paket Bundling</h3>
              <p className="text-muted-foreground mb-6">
                Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Website + Logo + Social Media</li>
                <li>• Paket hemat untuk semua kebutuhan</li>
                <li>• Support dan maintenance included</li>
              </ul>
              <Link href="/services#bundling">
                <Button variant="outline" className="w-full bg-transparent">
                  Lihat Paket Bundling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">💻</div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Website Development</h3>
              <p className="text-muted-foreground mb-6">
                Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Landing Page & Static Website</li>
                <li>• E-commerce & POS Web App</li>
                <li>• Custom Web Development</li>
              </ul>
              <Link href="/services#website">
                <Button variant="outline" className="w-full bg-transparent">
                  Lihat Website Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">🎨</div>
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Design Services</h3>
              <p className="text-muted-foreground mb-6">
                Identitas visual yang kuat mulai dari logo design hingga complete branding
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Logo Design & Branding</li>
                <li>• Social Media Content</li>
                <li>• Brand Guidelines & Identity</li>
              </ul>
              <Link href="/services#design">
                <Button variant="outline" className="w-full bg-transparent">
                  Lihat Design Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Lihat Semua Services & Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
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
                "DigitalCraft transformed our online presence completely. The Paket Ambisius was perfect for our growing
                startup. Website yang mereka buat tidak hanya beautiful tapi juga conversion rate kami naik 300%!"
              </p>
              <div className="flex text-primary">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-center mb-6">
                <img src="/professional-marketing-director.png" alt="Michael Chen" className="w-15 h-15 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-secondary">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director, GrowthLab</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Tim DigitalCraft sangat profesional dan responsive. Logo design dan branding package yang mereka buat
                benar-benar mencerminkan nilai perusahaan kami. Highly recommended!"
              </p>
              <div className="flex text-primary">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-center mb-6">
                <img src="/professional-business-woman-founder.png" alt="Amanda Rodriguez" className="w-15 h-15 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-secondary">Amanda Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Founder, EcoFashion Store</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "E-commerce website yang dibuat DigitalCraft sangat user-friendly dan sales kami meningkat drastis.
                Customer support mereka juga excellent, selalu siap membantu kapan saja."
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
                "POS web app yang mereka develop sangat membantu operasional restaurant kami. Inventory management jadi
                lebih mudah dan laporan penjualan real-time sangat berguna untuk decision making."
              </p>
              <div className="flex text-primary">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-center mb-6">
                <img src="/professional-creative-director.png" alt="Lisa Thompson" className="w-15 h-15 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-secondary">Lisa Thompson</h4>
                  <p className="text-sm text-muted-foreground">Creative Director, ArtSpace Gallery</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Social media content management dari DigitalCraft luar biasa! Engagement rate Instagram kami naik 250%
                dan follower bertambah organik. Content mereka selalu on-brand dan engaging."
              </p>
              <div className="flex text-primary">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-center mb-6">
                <img src="/professional-tech-entrepreneur.png" alt="James Wilson" className="w-15 h-15 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-secondary">James Wilson</h4>
                  <p className="text-sm text-muted-foreground">Entrepreneur, InnovateTech</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Paket Pesugihan benar-benar worth it! Custom web application yang mereka buat sesuai banget dengan
                business flow kami. ROI dari investment ini sudah balik dalam 6 bulan pertama."
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
              Let's discuss your project and create something amazing together. Get in touch for a free consultation.
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

      {/* Footer */}
      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-space-grotesk text-2xl font-bold mb-4">DigitalCraft</div>
              <p className="text-accent-foreground/80 mb-4">
                Creating digital experiences that drive results and inspire growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Website Development</li>
                <li>Logo Design</li>
                <li>Social Media</li>
                <li>Bundling Packages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>hello@digitalcraft.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
