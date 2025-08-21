import React from 'react'
import Marquee from '../marquee'

export const Clients = () => {
  const clients = [
    { name: "ChaTea", logo: "/clients/chatea-01.png" },
    { name: "Lapau Kapau Cafe", logo: "/clients/CPE-09.png" },
    { name: "Delta Store", logo: "/clients/delta-01.png" },
    { name: "Sekolah Trading Indonesia", logo: "/clients/gold-06.png" },
    { name: "Hoshi Group", logo: "/clients/Hoshi-01.png" },
    { name: "Javara Beans", logo: "/clients/javana-01.png" },
    { name: "Pt. Afamec Global Ekspor", logo: "/clients/Logo Horizontal.png" },
    // { name: "Manufacturing Engineering Exploration", logo: "/clients/logo Me-X-02.jpg" },
    { name: "Amsindo", logo: "/clients/Logo utama.png" },
    { name: "Cv. Dwiva Yasa", logo: "/clients/Logo Variasi Merah-14.png" },
    { name: "Persaja", logo: "/clients/Logo vertikal (2).png" },
    { name: "Yayasan Harapan Bangsa Famili", logo: "/clients/Logo YHBF-03.png" },
    { name: "Vieco", logo: "/clients/Logo.png" },
    { name: "Anter Sampah", logo: "/clients/mentahan-07.png" },
    { name: "Rumah Hanum Bakery", logo: "/clients/PNG 1.png" },
    { name: "Litle Project", logo: "/clients/png-01.png" },
    { name: "Guntur Geni Amalia", logo: "/clients/Tanpa Background.png" },
    { name: "Kampoeng Dahar", logo: "/clients/Untitled-2_Artboard 1.png" },
    { name: "K Tivi", logo: "/clients/Untitled-2-02.png" },
    { name: "Xivia", logo: "/clients/xiva-01.png" },
  ]

  return (
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
                className="h-17 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}