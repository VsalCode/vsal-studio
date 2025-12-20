"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "../service-card";

export interface Feature {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  features: Feature[];
  popular?: boolean;
}

interface PricePlanProps {
  id?: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}
// Price Plan Component

export const PricePlan: React.FC<PricePlanProps> = ({
  id = "website",
  title,
  subtitle,
  services,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
      "(min-width: 1024px)": { slidesToScroll: 1 },
      "(min-width: 1280px)": { slidesToScroll: 1 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id={id} className="pb-15 pt-40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-4xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-4">
            {subtitle}
          </p>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            💡 Geser ke kiri atau kanan untuk melihat paket lainnya
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`rounded-full p-3 transition-all duration-200 shadow-sm ${
              canScrollPrev
                ? "bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md text-gray-700"
                : "bg-gray-200 border border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className={`rounded-full p-3 transition-all duration-200 shadow-sm ${
              canScrollNext
                ? "bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md text-gray-700"
                : "bg-gray-200 border border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden pt-6 pb-8" ref={emblaRef}>
            <div
              className={`flex gap-6 px-2 ${
                services && services.length <= 3 ? "md:justify-center" : ""
              }`}
            >
              {services?.map((service, index) => (
                <div
                  key={index}
                  className={`min-w-0 ${
                    services.length === 1
                      ? "flex-[0_0_100%] max-w-md mx-auto"
                      : services.length === 2
                      ? "flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] max-w-md"
                      : services.length === 3
                      ? "flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] max-w-md"
                      : "flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] xl:flex-[0_0_calc(25%-18px)]"
                  }`}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
