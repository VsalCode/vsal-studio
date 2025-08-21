"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"


export const Contact = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-6">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu Anda dengan konsultasi gratis dan tanpa
            komitmen.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background rounded-lg p-6 border border-border">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Hubungi kami via WhatsApp</p>
              <Link href="https://wa.me/6281399090477" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-transparent">
                  +62 812-3456-7890
                </Button>
              </Link>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <Instagram className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground mb-4">Follow us di Instagram</p>
              <Link href="https://instagram.com/vsal_studio" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-transparent">
                  @vsalstudio
                </Button>
              </Link>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Kirim pertanyaan detail via email</p>
              <Link href="mailto:studiovsal@gmail.com">
                <Button variant="outline" size="sm" className="bg-transparent">
                  studiovsal@gmail.com
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}