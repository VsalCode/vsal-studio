import { Globe, Package, Palette } from "lucide-react";

export const servicesData = [
  {
    id: "bundling",
    icon: Package,
    title: "Paket Bundling",
    description:
      "Solusi lengkap mulai dari Paket Perintis untuk startup hingga Paket Pesugihan untuk enterprise",
    features: [
      "Website + Logo + Social Media",
      "Paket hemat untuk semua kebutuhan",
      "Support dan maintenance included",
    ],
    buttonText: "Lihat Paket Bundling",
    href: "/services#bundling",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description:
      "Dari landing page sederhana hingga aplikasi web kompleks dengan fitur custom",
    features: [
      "Landing Page & Static Website",
      "E-commerce & POS Web App",
      "Custom Web Development",
    ],
    buttonText: "Lihat Website Services",
    href: "/services#website",
  },
  {
    id: "design",
    icon: Palette,
    title: "Design Services",
    description:
      "Identitas visual yang kuat mulai dari logo design hingga complete branding",
    features: [
      "Logo Design & Branding",
      "Social Media Content",
      "Brand Guidelines & Identity",
    ],
    buttonText: "Lihat Design Services",
    href: "/services#design",
  },
];