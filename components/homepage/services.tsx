"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Globe, Package, Palette } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: "bundling",
    icon: Package,
    title: "Paket Bundling",
    description:
      "Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise",
    features: [
      "Website + Logo + Social Media",
      "Paket hemat untuk semua kebutuhan",
      "Support dan maintenance included",
    ],
    buttonText: "Lihat Paket Bundling",
    href: "/services#bundling",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description:
      "Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom",
    features: [
      "Landing Page & Static Website",
      "E-commerce & POS Web App",
      "Custom Web Development",
    ],
    buttonText: "Lihat Website Services",
    href: "/services#website",
  },
  {
    id: "design",
    icon: Palette,
    title: "Design Services",
    description:
      "Identitas visual yang kuat mulai dari logo design hingga complete branding",
    features: [
      "Logo Design & Branding",
      "Social Media Content",
      "Brand Guidelines & Identity",
    ],
    buttonText: "Lihat Design Services",
    href: "/services#design",
  },
];

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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Dari website development hingga branding lengkap, kami menyediakan
            semua yang Anda butuhkan untuk sukses digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const color =
              colors[Math.floor(Math.random() * colors.length)];

            return (
              <motion.div
                key={service.id}
                className="rounded-2xl p-8 border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg group"
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
                {/* Icon with random bg */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white mb-6 ${color} shadow-md group-hover:rotate-6 transition-transform`}
                >
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="text-sm text-white/60 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg"
            >
              Lihat Semua Services & Pricing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
