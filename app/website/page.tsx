import { CTA } from "@/components/cta";
import { BannerService } from "@/components/services/banner";
import { PricePlan } from "@/components/services/price-plan";
import { WhyUs } from "@/components/services/why-us";
import { websiteServices, whyUsWeb } from "@/data/services/website";
import React from "react";

const WebsitePage = () => {
  return (
    <main className="bg-black">
      <BannerService
        badgeText="Website Development"
        heading="Bangun Website Profesional untuk Bisnis Anda"
        description="Kami membantu bisnis Anda tampil lebih menonjol dengan website modern, identitas brand yang kuat, serta strategi digital yang membuat audiens lebih engage."
        buttonText="Mulai Proyek Anda"
        imageURL="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
      />
      <PricePlan
        id="website"
        title="Pricing Plan"
        subtitle="Tentukan website seperti apa yang ingin kamu kembangkan sesuai dengan kebutuhan mu!"
        services={websiteServices}
      />
      <WhyUs
        title="Kenapa Buat Website di VSAL Studio?"
        subtitle="Kami memberikan lebih dari sekadar website — solusi digital yang dirancang untuk membantu bisnis Anda berkembang."
        items={whyUsWeb}
      />
      <CTA/>
    </main>
  );
};

export default WebsitePage;
