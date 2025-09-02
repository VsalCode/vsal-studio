"use client";

import { testimonials } from "@/data/testimonials";
import Marquee from "../marquee";


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
        {testimonials?.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
