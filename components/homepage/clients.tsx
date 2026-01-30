import { clients } from "@/data/clients";
import Marquee from "../marquee";

export const Clients = () => {
  return (
    <section id="clients" className="py-16">
      <div className=" w-full ">
        <div className="text-center mx-4 mb-12 font-montserrat flex flex-col justify-center items\">
          <h2 className=" text-3xl font-semibold text-white mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-500 dark:text-white/70 text-center">
            Bergabung menjadi salah satu bagian dari mereka yang dibantu oleh
            vsal studio untuk mengembangkan digitalisasi bisnis mereka
          </p>
        </div>
        <Marquee
            gap="4rem"
            className="[--duration:30s] group dark:bg-black/50 hover:bg-white/90 duration-600 transition-colors backdrop-blur-2xl drop-shadow-2xl py-7"
        >
          {clients?.map((client, index) => (
            <div key={index} className="flex items-center justify-center mx-3">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="h-16 sm:h-20 w-auto max-w-[120px]  object-contain brightness-9999 group-hover:brightness-50 duration-300 transition-colors grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
