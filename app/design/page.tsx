import { CTA } from "@/components/cta";
import { BannerService } from "@/components/services/banner";
import { PricePlan } from "@/components/services/price-plan";
import { WhyUs } from "@/components/services/why-us";
import { designServices, whyUsDesign } from "@/data/services/design";
import React from "react";

const DesignPage = () => {
  return (
    <main className="bg-black">
      <BannerService
        badgeText="Layanan Desain"
        heading="Tingkatkan Identitas Bisnis Anda dengan Desain Profesional"
        description="Kami membantu bisnis Anda tampil lebih menonjol dengan desain modern, identitas brand yang kuat, serta strategi visual yang membuat audiens lebih terhubung."
        buttonText="Mulai Proyek"
        imageURL="/design_backdrop.jpg"
      />
      <PricePlan
        id="design"
        title="Paket Harga"
        subtitle="Pilih paket desain yang sesuai dengan kebutuhan bisnis Anda dan wujudkan ide menjadi nyata."
        services={designServices}
      />
      <WhyUs
        title="Mengapa Memilih Layanan Desain dari VSAL Studio?"
        subtitle="Kami memberikan lebih dari sekadar desain — solusi kreatif yang dirancang untuk membantu bisnis Anda berkembang dan bersaing."
        items={whyUsDesign}
      />
      <CTA />
    </main>
  );
};

export default DesignPage;
