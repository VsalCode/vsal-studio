"use client";

import { testimonials } from "@/data/testimonials";
import Marquee from "../marquee";
import { IoMdQuote } from "react-icons/io";
import { Quote } from "lucide-react";

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
    <div
      className="
        relative w-[420px] sm:w-[520px]
        rounded-2xl p-8 mx-4
        border border-primary/50
        shadow-sm
        bg-black/40 text-white/90
        font-nunito
      "
    >
      {/* Quote icon */}
      <div className="absolute -top-5 left-6 text-[3rem] text-primary/80">
        <IoMdQuote />
      </div>

      {/* Quote text */}
      <p className="text-white/90 text-xl leading-snug mb-4">{desc}</p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-6" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden ">
      <div className="text-center mb-14 font-montserrat">
        <h2 className=" text-3xl font-semibold text-white">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-white/60">
          Apa kata mereka setelah mengembangkan digitalisasi bisnis mereka
          bersama vsal studio
        </p>
      </div>

      <Marquee>
        {testimonials?.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
