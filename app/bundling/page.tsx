import { CTA } from "@/components/cta";
import { BannerService } from "@/components/services/banner";
import { PricePlan } from "@/components/services/price-plan";
import { WhyUs } from "@/components/services/why-us";
import { bundlingServices, whyUsBundling } from "@/data/services/bundling";
import React from "react";

const BundlingPage = () => {
  return (
    <main className="bg-black">
      <BannerService
        badgeText="Paket Bundling"
        heading="Solusi Lengkap All-in-One"
        description="Dapatkan semua layanan digital dalam satu paket hemat. Lebih efisien, lebih murah, dan tanpa ribet!"
        buttonText="Mulai Proyek"
        imageURL="/bundling-banner.jpg"
      />
      <PricePlan
        id="bundling"
        title="Paket Bundling Terbaik"
        subtitle="Pilih paket bundling yang sesuai dengan kebutuhan bisnis Anda. Solusi lengkap untuk transformasi digital perusahaan."
        services={bundlingServices}
      />
      <WhyUs
        title="Mengapa Memilih Paket Bundling dari VSAL Studio?"
        subtitle="Kami memberikan solusi digital terintegrasi yang dirancang khusus untuk membantu bisnis Anda bertransformasi dan unggul di era digital."
        items={whyUsBundling}
      />
      <CTA />
    </main>
  );
};

export default BundlingPage;