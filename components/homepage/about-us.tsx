import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">About Vsal Studio</Badge>
              <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
                We Create Digital Experiences That Matter
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Berbekal pengalaman lebih dari 3 tahun, kami sudah dipercaya ratusan bisnis untuk membangun kehadiran digital dan memperluas jangkauan mereka.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Setiap solusi yang kami buat lahir dari kombinasi kreativitas dan keahlian teknis, sehingga hasilnya bukan cuma bagus dilihat, tapi juga berdampak nyata untuk pertumbuhan bisnis.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-white/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our team at work" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

