import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Marquee from "@/components/marquee"
import { ArrowRight, Award, Globe, Palette, Package } from "lucide-react"
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      image: "/professional-ceo-woman.png",
      content: "Vsal Studio transformed our online presence completely. The Paket Ambisius was perfect for our growing startup. Website yang mereka buat tidak hanya beautiful tapi juga conversion rate kami naik 300%!"
    },
    {
      name: "Michael Chen", 
      role: "Marketing Director, GrowthLab",
      image: "/professional-marketing-director.png",
      content: "Tim Vsal Studio sangat profesional dan responsive. Logo design dan branding package yang mereka buat benar-benar mencerminkan nilai perusahaan kami. Highly recommended!"
    },
    {
      name: "Amanda Rodriguez",
      role: "Founder, EcoFashion Store", 
      image: "/professional-business-woman-founder.png",
      content: "E-commerce website yang dibuat Vsal Studio sangat user-friendly dan sales kami meningkat drastis. Customer support mereka juga excellent, selalu siap membantu kapan saja."
    },
    {
      name: "David Kim",
      role: "Owner, Kimchi House Restaurant",
      image: "/professional-restaurant-owner.png", 
      content: "POS web app yang mereka develop sangat membantu operasional restaurant kami. Inventory management jadi lebih mudah dan laporan penjualan real-time sangat berguna untuk decision making."
    },
    {
      name: "Lisa Thompson",
      role: "Creative Director, ArtSpace Gallery",
      image: "/professional-creative-director.png",
      content: "Social media content management dari Vsal Studio luar biasa! Engagement rate Instagram kami naik 250% dan follower bertambah organik. Content mereka selalu on-brand dan engaging."
    },
    {
      name: "James Wilson", 
      role: "Entrepreneur, InnovateTech",
      image: "/professional-tech-entrepreneur.png",
      content: "Paket Pesugihan benar-benar worth it! Custom web application yang mereka buat sesuai banget dengan business flow kami. ROI dari investment ini sudah balik dalam 6 bulan pertama."
    }
  ]

  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Paket Bundling", 
      description: "Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise",
      features: [
        "Website + Logo + Social Media",
        "Paket hemat untuk semua kebutuhan", 
        "Support dan maintenance included"
      ],
      link: "/services#bundling"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom", 
      features: [
        "Landing Page & Static Website",
        "E-commerce & POS Web App",
        "Custom Web Development"
      ],
      link: "/services#website"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design Services",
      description: "Identitas visual yang kuat mulai dari logo design hingga complete branding",
      features: [
        "Logo Design & Branding", 
        "Social Media Content",
        "Brand Guidelines & Identity"
      ],
      link: "/services#design"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-space-grotesk text-2xl font-bold text-secondary">Vsal Studio</div>
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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Digital Solutions That Work
            </Badge>
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
            <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted-foreground">
              Join hundreds of satisfied clients whove transformed their digital presence
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
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                  About Vsal Studio
                </Badge>
                <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">
                  We Create Digital Experiences That Matter
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  With over 5 years of experience in digital design and development, we helped hundreds of businesses
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
                <img 
                  src="/digital-agency-team.png" 
                  alt="Our team at work" 
                  className="rounded-lg shadow-2xl w-full"
                />
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Lihat {service.title.split(' ')[0]} {service.title.includes('Services') ? 'Services' : service.title.includes('Development') ? 'Services' : 'Bundling'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
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
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Client Testimonials
            </Badge>
            <h2 className="font-space-grotesk text-4xl font-bold text-secondary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dengarkan langsung dari klien yang telah merasakan transformasi digital bersama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-sm border border-border">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {testimonial.content}
                </p>
                <div className="flex text-primary">
                  <span>★★★★★</span>
                </div>
              </div>
            ))}
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
              Lets discuss your project and create something amazing together. Get in touch for a free consultation.
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
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>hello@vsalstudio.com</li>
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