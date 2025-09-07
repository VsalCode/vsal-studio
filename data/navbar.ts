import {
  Code,
  Palette,
  Package,
  ChevronDown,
  Home,
  HelpCircle,
  Container,
} from "lucide-react";
import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdMiscellaneousServices  } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { LuPackageOpen } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";

export const desktopNavItems = [
  { 
    name: "Beranda", 
    href: "/", 
    icon: Home, 
    desc: "Kembali ke halaman utama" 
  },
  { 
    name: "Tentang Kami", 
    href: "/#about", 
    icon: IoPeople, 
    desc: "Tak kenal maka tak sayang, kenali kami lebih jauh" 
  },
  {
    name: "Layanan",
    isDropdown: true,
    icon: MdMiscellaneousServices ,
    desc: "Lihat semua layanan yang tersedia di VSAL Studio",
    dropdownItems: [
      {
        name: "Website",
        href: "/website",
        icon: FaCode,
        description: "Solusi pengembangan website, mulai dari landing page, POS sampai e-commerce",
        class: "bg-gradient-to-br from-[#1A2A80] to-[#273F4F] text-primary flex justify-center items-center rounded-lg p-2"
      },
      {
        name: "Desain ",
        href: "/design",
        icon: MdDesignServices,
        description: "Layanan desain kreatif mulai dari branding, logo, dan lain² ",
        class: "bg-gradient-to-br from-[#090040] to-[#640D5F] text-primary flex justify-center items-center rounded-lg p-2"
      },
      {
        name: "Media Sosial",
        href: "/design",
        icon: TiSocialInstagram,
        description: "Pengelolaan dan konten media sosial",
        class: "bg-gradient-to-br from-[#640D5F] to-[#C59560] text-primary flex justify-center items-center rounded-lg p-2"
      },
      {
        name: "Paket Bundling",
        href: "/bundling",
        icon: LuPackageOpen,
        description: "Dapatkan semua layanan lengkap dengan lebih hemat",
        class: "bg-gradient-to-br from-[#98CD00] to-[#064232] text-primary flex justify-center items-center rounded-lg p-2"
      },
    ],
  },
  { 
    name: "FAQ", 
    href: "/faq", 
    icon: HelpCircle, 
    desc: "Punya pertanyaan? Cek pertanyaan yang sering ditanyakan di sini!" 
  },
];

const gradientClasses = [
  "bg-gradient-to-br from-[#1A2A80] to-[#273F4F] text-primary flex justify-center items-center rounded-lg p-2",
  "bg-gradient-to-br from-[#090040] to-[#640D5F] text-primary flex justify-center items-center rounded-lg p-2",
  "bg-gradient-to-br from-[#640D5F] to-[#C59560] text-primary flex justify-center items-center rounded-lg p-2",
  "bg-gradient-to-br from-[#98CD00] to-[#064232] text-primary flex justify-center items-center rounded-lg p-2",
];

export const navigationItems = [
  { 
    name: "Home", 
    href: "/", 
    icon: MdMiscellaneousServices , 
    description: "Back to homepage",
    class: gradientClasses[0],
  },
  {
    name: "Services",
    href: "/services",
    icon: Code,
    description: "Our service offerings",
    class: gradientClasses[1],
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: HelpCircle,
    description: "Frequently asked questions",
    class: gradientClasses[2],
  },
];


export const services = [
  {
    name: "Website Development",
    href: "/website",
    icon: Code,
    description: "Custom web development solutions",
  },
  {
    name: "Design",
    href: "/design",
    icon: Palette,
    description: "Creative design services",
  },
  {
    name: "Paket Bundling",
    href: "/bundling",
    icon: Package,
    description: "Complete service packages",
  },
];
