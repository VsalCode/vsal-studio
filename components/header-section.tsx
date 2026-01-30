"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Badge } from "./ui/badge";
import BlurText from "./react-bits/blur-text";
import ShinyText from "./react-bits/shinny-text";
import Image from "next/image";

interface HeaderSectionProps {
  chip: string;
  title1: string;
  title2: string;
  desc: string;
  showBackButton?: boolean;
  backHref?: string;
  backText?: string;
}

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  chip,
  title1,
  title2,
  desc,
  showBackButton = true,
  backHref = "/",
  backText = "Back to Home",
}) => {
  return (
    <section className="relative py-20  text-center h-screen flex flex-col justify-center items-center font-montserrat">

      <Image 
      src={"https://i.pinimg.com/1200x/54/8e/db/548edbf432bfde6e4869f2a0b35320ed.jpg"}
      alt="bg-image"
      fill
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <>
              <Link
                href={backHref}
                className="inline-flex items-center text-white/70 hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backText}
              </Link>
              <br />
            </>
          )}

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            {chip}
          </Badge>
          <br />
          <BlurText
            text={title1}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="block text-center font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat"
          />
          <br />
          <BlurText
            text={title2}
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="block text-center font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-montserrat "
          />
          <ShinyText
            text={desc}
            disabled={false}
            speed={3}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
};
