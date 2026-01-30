"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";

// Warna random untuk icon background
const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-teal-500",
];

export const Services = () => {
  return (
    <section id="services" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 font-montserrat">
          <Badge
            className="
          mb-6
          bg-primary/10 text-primary border-primary/20
        "
          >
            Our Services
          </Badge>

          <h2
            className="
           text-4xl font-semibold mb-6
          text-white
        "
          >
            Complete Digital Solutions
          </h2>

          <p
            className="
          text-lg max-w-2xl mx-auto
          text-gray-600
          text-white/70
        "
          >
            Dari website development hingga branding lengkap, kami menyediakan
            semua yang Anda butuhkan untuk sukses digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 font-nunito">
          {servicesData?.map((service, index) => {
            const IconComponent = service.icon;
            const color = colors[Math.floor(Math.random() * colors.length)];

            return (
              <motion.div
                key={service.id}
                className="
    relative overflow-hidden
    rounded-2xl p-8
    flex flex-col justify-between
    group
    transition-all
    border
    shadow-md hover:shadow-lg
    border-primary/40
    bg-black/40
  "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {/* Background Image */}
                <div
                  className="
      absolute inset-0
      bg-cover bg-center
      scale-100 group-hover:scale-110
      transition-transform duration-700
    "
                  // style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`
        w-14 h-14 flex items-center justify-center
        rounded-xl text-white mb-6 shadow-md
        ${color}
        group-hover:rotate-6 transition-transform
      `}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-gray-700 text-white/80">
                    {service.description}
                  </p>

                  <ul className="text-sm space-y-2 mb-6 text-gray-600 text-white/70">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <Link href={service.href}>
                    <Button
                      className="
          w-full
          font-medium
                    bg-primary text-secondary\
                    hover:bg-white hover:text-secondary
          duration-300
          "
                    >
                      {service.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
