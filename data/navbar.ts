import {
  Code,
  Palette,
  Package,
  ChevronDown,
  Home,
  HelpCircle,
} from "lucide-react";

export const desktopNavItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    isDropdown: true,
    dropdownItems: [
      {
        name: "Website Development",
        href: "/services#website",
        icon: Code,
        description: "Custom web development solutions",
      },
      {
        name: "Design",
        href: "/services#design",
        icon: Palette,
        description: "Creative design services",
      },
      {
        name: "Paket Bundling",
        href: "/services#bundling",
        icon: Package,
        description: "Complete service packages",
      },
    ],
  },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
];

export const navigationItems = [
  { name: "Home", href: "/", icon: Home, description: "Back to homepage" },
  {
    name: "Services",
    href: "/services",
    icon: Code,
    description: "Our service offerings",
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: HelpCircle,
    description: "Frequently asked questions",
  },
];

export const services = [
  {
    name: "Website Development",
    href: "/services#website",
    icon: Code,
    description: "Custom web development solutions",
  },
  {
    name: "Design",
    href: "/services#design",
    icon: Palette,
    description: "Creative design services",
  },
  {
    name: "Paket Bundling",
    href: "/services#bundling",
    icon: Package,
    description: "Complete service packages",
  },
];
