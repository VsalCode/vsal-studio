"use client";

import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import BlurText from "../react-bits/blur-text";
import ShinyText from "../react-bits/shinny-text";
import { ArrowRight } from "lucide-react";

interface BannerServiceProps {
  badgeText: string;
  heading: string;
  description: string;
  buttonText: string;
  imageURL: string;
}

export const BannerService: React.FC<BannerServiceProps> = ({
  badgeText,
  heading,
  description,
  buttonText,
  imageURL,
}) => {
  const handleWhatsApp = () => {
    const phoneNumber = "6281399090477";
    const message =
      "Halo, saya tertarik untuk membuat website bersama tim Anda.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative w-full h-[100svh] bg-black">
      {/* Background image */}
      <img
        src={imageURL}
        alt="Website development"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay bawah ke atas */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

      {/* Gradient overlay kiri ke kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

      {/* Content di atas image */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-6 z-10">
        <Badge className="mb-6 text-primary/90 bg-secondary/20 border-primary/30 backdrop-blur-sm">
          {badgeText}
        </Badge>
        <BlurText
          text={heading}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="block text-center font-sans text-4xl md:text-6xl max-w-4xl font-bold text-white mb-6"
        />
        <ShinyText
          text={description}
          disabled={false}
          speed={3}
          className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-secondary font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
