"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import BlurText from "../react-bits/blur-text";
import Aurora from "../react-bits/aurora-background";
import ShinyText from "../react-bits/shinny-text";
import Link from "next/link";

export const Banner = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "6281399090477";
    const message = "Halo, saya ingin memulai project dengan tim Anda";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section
      id="home"
      className="font-nunito flex flex-col justify-center items-center relative py-6 sm:py-20 overflow-hidden  h-screen"
    >
      {/* Plasma background full cover */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#17CCA1", "#293E51", "#17CCA1"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center ">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            Digital Solutions That Work
          </Badge>
          <BlurText
            text="Transform Your Digital Presence"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-montserrat font-semibold block text-center text-4xl md:text-6xl lg:text-7xl text-white mb-6"
          />
          <ShinyText
            text="bantu bisnis kamu tampil lebih standout lewat website yang menarik,
            identitas brand yang kuat, dan konten sosial media yang engage
            audiens.!"
            disabled={false}
            speed={3}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-secondary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href={"/portfolio"}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
