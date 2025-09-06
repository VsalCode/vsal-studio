import React from "react";
import { motion } from "framer-motion";
import { demoItems } from "@/data/whyUs-data";

export const WhyUs = () => {

  return (
    <section className="my-20 px-4 sm:px-0">
      <div className="text-center mb-16">
        <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">
          Why Us?
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Apa alasan anda harus memilih VSAL Studio untuk mengembangkan
          digitalisasi bisnis anda?
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700" />

        {demoItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 relative"
          >
            {/* Left column */}
            {idx % 2 === 0 ? (
              <>
                <div className="flex justify-end">
                  <div className="max-w-md bg-[#111]/70 border border-white/10 rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex justify-start">
                  <div className="max-w-md bg-[#111]/70 border border-white/10 rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-[#111]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
