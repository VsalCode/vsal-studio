import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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

      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <br />
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-secondary mb-6">
              Complete Digital
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Dari startup hingga enterprise, kami
              punya solusinya.
            </p>
          </div>
        </div>
      </section>

      {/* Bundling Services */}
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

      {/* Website Development */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">Website Development</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Website profesional yang sesuai dengan kebutuhan dan skala bisnis Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {websiteServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-grotesk text-4xl font-bold text-secondary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk menentukan paket yang paling sesuai dengan kebutuhan bisnis Anda.
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
              <div className="font-space-grotesk text-2xl font-bold mb-4">Vsal Studio</div>
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
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/portfolio">Our Work</Link>
                </li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>hello@gmail.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 Vsal Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
