"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { demoItems } from "@/data/whyUs-data";
import { IoCheckmarkDone } from "react-icons/io5";

export const WhyUs = () => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.12,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.12 + 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="flex justify-center items-center mt-12 ">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto font-montserrat">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl mb-6 font-semibold text-white"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            Discover why leading businesses trust us to transform their digital
            presence and drive meaningful growth.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/50 to-transparent hidden md:block" />

          {demoItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-32 relative font-nunito"
            >
              {idx % 2 === 0 ? (
                <>
                  {/* Card */}
                  <motion.div
                    variants={cardVariants}
                    custom={idx}
                    className="flex justify-end md:pr-8"
                  >
                    <div
                      className="max-w-md w-full rounded-2xl border border-primary/50 shadow-xl bg-black/40 text-white  transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-lg  flex items-center justify-center bg-secondary dark:bg-secondary text-primary dark:text-primary">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <p className=" leading-relaxed opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    variants={imageVariants}
                    custom={idx}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <motion.div
                    variants={imageVariants}
                    custom={idx}
                    className="relative rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    variants={cardVariants}
                    custom={idx}
                    className="flex justify-start md:pl-8 order-1 md:order-2"
                  >
                    <div
                      className="max-w-md w-full rounded-2xl border border-primary/50 shadow-xl bg-black/40 text-white  transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-lg  flex items-center justify-center bg-secondary dark:bg-secondary text-primary dark:text-primary">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <p className="opacity-70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}

              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.25 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 hidden md:flex"
              >
                <div className="w-11 h-11 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center shadow-lg">
                  <IoCheckmarkDone className="text-primary-foreground text-2xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
