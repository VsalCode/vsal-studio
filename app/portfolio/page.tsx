import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Instagram } from "lucide-react"
import { HeaderSection } from "@/components/header-section"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "TechStartup Inc. - Complete Rebranding",
      category: "Branding & Website",
      image: "/modern-tech-startup-website.png",
      description:
        "Complete digital transformation including logo design, website development, and social media strategy.",
      tags: ["Branding", "Website", "Logo Design"],
      client: "TechStartup Inc.",
      year: "2024",
    },
    {
      id: 2,
      title: "EcoFashion Store - E-commerce Platform",
      category: "E-commerce",
      image: "/sustainable-fashion-ecommerce.png",
      description:
        "Custom e-commerce platform with sustainable fashion focus, integrated payment system, and inventory management.",
      tags: ["E-commerce", "Custom Development", "UI/UX"],
      client: "EcoFashion Store",
      year: "2024",
    },
    {
      id: 3,
      title: "Kimchi House - POS System",
      category: "Web Application",
      image: "/restaurant-pos-dashboard.png",
      description: "Custom POS web application for restaurant management with real-time inventory and sales reporting.",
      tags: ["POS System", "Dashboard", "Real-time"],
      client: "Kimchi House Restaurant",
      year: "2024",
    },
    {
      id: 4,
      title: "ArtSpace Gallery - Portfolio Website",
      category: "Website",
      image: "/elegant-art-gallery-website.png",
      description: "Elegant portfolio website showcasing art collections with integrated social media management.",
      tags: ["Portfolio", "Gallery", "Social Media"],
      client: "ArtSpace Gallery",
      year: "2023",
    },
    {
      id: 5,
      title: "InnovateTech - Custom Web App",
      category: "Web Application",
      image: "/innovative-tech-web-app.png",
      description: "Enterprise-level custom web application with advanced features and API integrations.",
      tags: ["Custom App", "Enterprise", "API Integration"],
      client: "InnovateTech",
      year: "2023",
    },
    {
      id: 6,
      title: "GrowthLab - Brand Identity",
      category: "Branding",
      image: "/modern-business-brand-identity.png",
      description: "Complete brand identity package including logo, guidelines, and marketing materials.",
      tags: ["Brand Identity", "Logo", "Guidelines"],
      client: "GrowthLab",
      year: "2023",
    },
  ]

  const categories = ["All", "Branding", "Website", "E-commerce", "Web Application"]

  return (
    <div className="min-h-screen bg-background">

      <HeaderSection
      chip="Our Portfolio"
      title1="Our Latest"
      title2="Work"
      desc="Lihat hasil karya terbaik kami dan bagaimana kami membantu klien mencapai tujuan digital mereka"
      />

      {/* Instagram Feed Integration Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-4">Follow Our Journey</h2>
            <p className="text-muted-foreground mb-6">Ikuti perkembangan project terbaru kami di Instagram</p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Instagram className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium text-secondary">@digitalcraft.agency</span>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-8 text-center border border-border">
              <Instagram className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Instagram Feed Integration</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Fitur ini akan menampilkan feed Instagram terbaru dari @digitalcraft.agency secara real-time.
                Integration akan ditambahkan menggunakan Instagram Basic Display API.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Instagram className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="bg-transparent">
                <Instagram className="mr-2 h-4 w-4" />
                Follow @digitalcraft.agency
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client: <span className="font-medium text-secondary">{item.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-12">Portfolio Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Websites Launched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Brands Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Web Applications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Happy Clients</div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Mari diskusikan project Anda dan ciptakan sesuatu yang luar biasa bersama-sama.
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
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
