"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const Banner = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "6281399090477"
    const message = "Halo, saya ingin memulai project dengan tim Anda"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/vsal.io", "_blank")
  }

  return (
    <section id="home" className="relative py-6 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 animate-pulse"></div>

      {/* Pattern elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-bounce delay-1000"></div>

        {/* Diagonal lines pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            Digital Solutions That Work
          </Badge>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your
            <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text block">
              Digital Presence
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            bantu bisnis kamu tampil lebih standout lewat website yang menarik, identitas brand yang kuat, dan konten sosial media yang engage audiens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={handleInstagram}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
