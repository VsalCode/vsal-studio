"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  features: ServiceFeature[];
  popular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  originalPrice,
  discount,
  features,
  popular = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`w-full max-w-sm mx-auto relative flex flex-col rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg text-white drop-shadow-2xl shadow-black transition-all duration-300 hover:scale-103 ${
        popular ? "ring-1 ring-yellow-400 ring-offset-1 ring-offset-transparent" : ""
      }`}
    >
      {popular && (
        <Badge
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10
             bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 
             text-black font-bold text-sm rounded-full px-4 py-1 shadow-lg"
        >
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="px-6 pt-10 pb-4 text-center">
        <CardTitle className="font-space-grotesk text-xl sm:text-2xl mb-3 text-primary line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70 text-sm leading-relaxed min-h-[2.5rem] flex items-center justify-center">
          {description}
        </CardDescription>
        <div className="mt-6">
          {originalPrice && discount ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg text-white/60 line-through">
                  {originalPrice}
                </span>
                <Badge
                  className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 
                     text-white font-bold text-xs rounded-full px-2 py-1 shadow-lg animate-pulse"
                >
                  -{discount}%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-white">
                {price}
              </div>
            </div>
          ) : (
            <span className="text-3xl font-bold text-white">{price}</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-8 flex-1 flex flex-col">
        <Link
          href="https://wa.me/6281399090477"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6"
        >
          <Button className="w-full bg-primary text-secondary font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-200 h-11 text-sm flex items-center justify-center gap-2 rounded-xl">
            <span>Mulai Sekarang</span> 
            <FiArrowUpRight className="text-lg" />
          </Button>
        </Link>

        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full space-y-1">
            {features.map((feature, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-left hover:text-primary py-3 text-sm">
                  <div className="flex items-center gap-3 pr-2">
                    <FaCheckCircle className="text-base text-primary flex-shrink-0" />
                    <span className="line-clamp-1">{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/85 pl-7 pr-4 pb-3 text-sm leading-relaxed">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}