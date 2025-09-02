import { clients } from "@/data/clients"
import Marquee from "../marquee"

export const Clients = () => {


  return (
    <section id="clients" className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">Trusted by Leading Brands</h2>
          <p className="text-white/70">
            Bergabung menjadi salah satu bagian dari mereka yang dibantu oleh vsal studio untuk mengembangkan digitalisasi bisnis mereka
          </p>
        </div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {clients?.map((client, index) => (
            <div key={index} className="flex items-center justify-center mx-3">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="h-16 sm:h-20 md:h-28 w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[200px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
