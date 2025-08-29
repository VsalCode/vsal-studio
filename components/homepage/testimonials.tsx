"use client";

import Marquee from "../marquee";

const testimonials = [
  {
    id: 1,
    name: "Abdul Rozak",
    role: "Founder Sekolah Trading Indonesia",
    img: "/owners/adul.png",
    desc: "Logo dan branding yang dibuat VSAL Studio benar-benar mengangkat value serta kredibilitas brand kami. Kini lebih mudah bagi kami membangun kepercayaan di komunitas trading.",
  },
  {
    id: 2,
    name: "Rosyanti Amina",
    role: "Owner Klinik Armezza Farma",
    img: "/owners/yanti.png",
    desc: "Desain yang diberikan membuat klinik kami tampil lebih profesional dan standout dibanding kompetitor. Klien pun jadi lebih percaya dengan layanan yang kami tawarkan.",
  },
  {
    id: 3,
    name: "Yono",
    role: "Owner Teh Kampoeng",
    img: "/owners/teh.png",
    desc: "VSAL Studio sangat membantu UMKM seperti kami untuk naik kelas. Berkat branding yang rapi, ekspansi bisnis jadi lebih mudah dan diterima oleh pasar baru.",
  },
  {
    id: 4,
    name: "M. Affandy",
    role: "CEO Afamec Global Ekspor",
    img: "/owners/afamec.png",
    desc: "Website dan brand identity yang dikembangkan memberikan kepercayaan lebih kepada klien mancanegara. Hasilnya, kami semakin siap bersaing di pasar global.",
  },
  {
    id: 5,
    name: "Meco Randi",
    role: "Owner Vieco",
    img: "/owners/vieco.png",
    desc: "Sebagai brand baru, kami sempat kesulitan memperkenalkan produk ke pasar. Bersama VSAL Studio, brand Vieco tampil lebih menonjol dan dipercaya oleh audiens yang tepat.",
  },
  {
    id: 5,
    name: "Bebew Pii",
    role: "Owner Terserah Cafe",
    img: "/owners/bebew.png",
    desc: "Owner coffee shop seperti saya pasti  bingung untuk menentukan identitas visual yang tepat dan sesuai market kami tuju, untungnya dibantu VSAL Studio untuk brand identity nya",
  },
];

function TestimonialCard({
  img,
  name,
  role,
  desc,
}: {
  img: string;
  name: string;
  role: string;
  desc: string;
}) {
  return (
   <div className="flex flex-col items-center 
    bg-white/10 rounded-2xl p-6 w-[280px] sm:w-[320px] 
    backdrop-blur-md border border-white/10 
    shadow-lg hover:shadow-xl hover:scale-105
    transition-all duration-300 ease-in-out group mx-2">

  {/* Avatar */}
  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-primary transition-all duration-300">
    <img
      src={img}
      alt={name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Name */}
  <p className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
    {name}
  </p>

  {/* Role */}
  <p className="text-gray-400 text-sm mb-3 group-hover:text-primary/80 transition-colors duration-300">
    {role}
  </p>

  {/* Description */}
  <p className="text-gray-300 text-sm leading-relaxed text-center group-hover:text-gray-100 transition-colors duration-300">
    {desc}
  </p>
</div>

  );
}

export default function Testimonials() {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        {/* <p className="text-gray-400 mt-2">Trusted by businesses everywhere</p> */}
      </div>

      {/* Row 1 → kanan */}
      <Marquee>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
