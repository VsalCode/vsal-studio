"use client";

import { Banner } from "@/components/homepage/banner";
import { AboutUs } from "@/components/homepage/about-us";
import { Clients } from "@/components/homepage/clients";
import { Services } from "@/components/homepage/services";
// import { Testimonials } from "@/components/homepage/testimonials"
import { CTA } from "@/components/cta";

import { motion } from "framer-motion";
import { fadeInUp, slideLeft, zoomIn } from "@/lib/animations";
import Testimonials from "@/components/homepage/testimonials";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Banner */}
        <motion.section
          variants={fadeInUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Banner />
        </motion.section>

        {/* Testi */}
        <motion.section
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </motion.section>

        {/* About Us */}
        <motion.section
          variants={slideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutUs />
        </motion.section>

        {/* Clients */}
        <motion.section
          variants={zoomIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Clients />
        </motion.section>

        {/* Services */}
        <motion.section
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={zoomIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CTA />
        </motion.section>
      </main>
    </>
  );
}
