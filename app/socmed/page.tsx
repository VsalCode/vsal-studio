import { CTA } from "@/components/cta";
import { BannerService } from "@/components/services/banner";
import { PricePlan } from "@/components/services/price-plan";
import { WhyUs } from "@/components/services/why-us";
import { SocmedServices, whyUsSocmed } from "@/data/services/socmed";
import React from "react";

const SocmedPage = () => {
  return (
    <main className="bg-black">
      <BannerService
        badgeText="Layanan Social Media Management"
        heading="Kelola Sosial Media Secara Profesional & Konsisten"
        description="Bangun kehadiran digital yang kuat dengan konten berkualitas, desain visual estetik, copywriting yang menarik, dan strategi yang terukur untuk perkembangan bisnis Anda."
        buttonText="Mulai Sekarang"
        imageURL="https://i.pinimg.com/736x/ae/e9/0a/aee90ac606ac68910e12cb274fbe5870.jpg"
      />

      <PricePlan
        id="socmed"
        title="Paket Social Media Management"
        subtitle="Pilih paket yang paling sesuai untuk kebutuhan bisnis Anda. Semua paket dirancang untuk membantu brand Anda tampil konsisten dan menarik."
        services={SocmedServices}
      />

      <WhyUs
        title="Mengapa Memilih VSAL Studio?"
        subtitle="Kami bukan hanya membuat konten — kami membangun strategi, visual, dan komunikasi yang membuat audiens lebih terhubung dengan brand Anda."
        items={whyUsSocmed}
      />

      <CTA />
    </main>
  );
};

export default SocmedPage;
