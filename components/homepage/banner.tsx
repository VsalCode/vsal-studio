"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const Banner = () => {

  const handleWhatsApp = () => {
    const phoneNumber = "6281399090477"
    const message = "Halo, saya ingin memulai project dengan tim Anda"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInstagram = () => {
    window.open('https://instagram.com/vsal.io', '_blank')
  }

  return (
    <section id="home" className="py-6 sm:py-20 bg-gradient-to-br from-background to-muted">
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
            {/* href whatsapp */}
            <Button
              onClick={handleWhatsApp}
              size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* href instagram */}
            <Button
              onClick={handleInstagram}
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
  )
}