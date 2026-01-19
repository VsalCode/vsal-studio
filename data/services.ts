import { Globe, Package, Palette } from "lucide-react";

export const servicesData = [
  {
    id: "bundling",
    icon: Package,
    title: "Paket Bundling",
    description:
      "Solusi lengkap untuk membangun brand digital, dari startup hingga bisnis skala enterprise",
    features: [
      "Website, logo, dan social media dalam satu paket",
      "Lebih hemat & terintegrasi",
      "Support dan maintenance berkelanjutan",
    ],
    buttonText: "Lihat Paket Bundling",
    href: "/bundling",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Dev",
    description:
      "Pengembangan website profesional, dari landing page hingga web app dengan fitur custom",
    features: [
      "Landing Page & Company Profile",
      "E-commerce & POS Web App",
      "Custom Web Development",
      "Free Hosting & Domain"
    ],
    buttonText: "Lihat Layanan Website",
    href: "/website",
  },
  {
    id: "socmed",
    icon: Palette,
    title: "Socmed Content",
    description:
      "Konten visual yang konsisten dan menarik untuk memperkuat identitas brand di media sosial",
    features: [
      "Branding & Visual Identity",
      "Konten Instagram & Social Media",
      "Brand Guidelines",
      "Content Calendar",
      "Free Content Creator*"
    ],
    buttonText: "Lihat Layanan Sosial Media",
    href: "/socmed",
  },
];
