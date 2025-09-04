import React from "react";
import FlowingMenu from "../react-bits/flowing-menu";
import { Award, DollarSign, Users, Briefcase } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

export const WhyUs = () => {
  const demoItems = [
    {
      link: "#",
      text: "3+ Tahun Pengalaman",
      image:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      link: "#",
      text: "Harga yang Kompetitif",
      image:
        "https://images.pexels.com/photos/8463694/pexels-photo-8463694.jpeg",
      icon: <DollarSign className="w-6 h-6 text-primary" />,
    },
    {
      link: "#",
      text: "Dipercaya lebih dari 100+ Klien",
      image:
        "https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      link: "#",
      text: "Layanan Profesional",
      image:
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="my-17 px-4 sm:px-0">
      <div>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">
            Why Us?
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Apa alasan anda harus memilih VSAL Studio untuk mengembangkan
            digitalisasi bisnis anda?
          </p>
        </div>

        {/* Mobile View - Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 md:hidden">
          {demoItems.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="custom-spotlight-card p-6 rounded-2xl bg-[#111]/70 
                 border border-white/10 shadow-lg transition 
                 hover:scale-105 hover:shadow-xl"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col items-center text-center gap-3">
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 
                        rounded-full bg-primary/10 mb-5"
                >
                  {item.icon}
                </div>
                {/* Text */}
                <p className="text-white font-semibold text-lg">{item.text}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Desktop View - Flowing Menu */}
        <div
          className="hidden md:block"
          style={{ height: "600px", position: "relative" }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  );
};
