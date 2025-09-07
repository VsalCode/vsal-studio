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
// import { Check } from "lucide-react"
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
      className={`relative h-full rounded-2xl py-10 border border-white/20 bg-white/10  backdrop-blur-xl shadow-lg group text-white drop-shadow-2xl shadow-black ${
        popular ? "border border-yellow-400" : ""
      }`}
    >
      {popular && (
        <Badge
          className="absolute -top-3 left-1/2 -translate-x-1/2 
             bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 
             text-black font-bold text-base rounded-full px-5 shadow-lg"
        >
          Most Popular
        </Badge>
      )}
      

      <CardHeader className="">
        <CardTitle className="font-space-grotesk text-2xl sm:text-4xl mb-4 text-primary ">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70">
          {description}
        </CardDescription>
        <div className="mt-4">
          {originalPrice && discount ? (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl text-white/60 line-through">
                {originalPrice}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-white">
                  {price}
                </span>
                <Badge
                  className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 
                     text-white font-bold text-sm rounded-full px-3 py-1 shadow-lg animate-pulse"
                >
                  -{discount}%
                </Badge>
              </div>
            </div>
          ) : (
            <span className="text-4xl font-bold">{price}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Link
          href="https://wa.me/6281399090477"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-primary text-secondary font-extrabold hover:bg-primary/90 hover:scale-104 transition-all h-12 sm:text-[1.15rem] text-base flex items-center">
            <span>Mulai Sekarang</span> <FiArrowUpRight className="text-4xl font-extrabold" />
          </Button>
        </Link>
        <Accordion type="single" collapsible className="w-full mt-5">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-xl text-primary" />
                  {feature.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/85 pl-7">
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}