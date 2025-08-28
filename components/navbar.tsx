// src/components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Palette,
  Package,
  ChevronDown,
  Home,
  HelpCircle,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* 1. Data Desktop Navigation (dari array) */
  const desktopNavItems = [
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

  const navigationItems = [
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

  const services = [
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

  return (
    <>
      <div
        className={`fixed sm:mt-7 sm:mx-10 mt-2 rounded-full top-0 right-0 left-0 z-50 transition-all duration-300 `}
      >
        <nav className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg transition-all duration-300 mx-4">
          <div
            className={`mx-auto sm:px-6 px-4 sm:py-3 py-2 `}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  className="sm:w-10 w-9 sm:me-3"
                  src="/logo-vsal.png"
                  alt="logo vsal studio"
                />
                <Link
                  href="/"
                  className="font-sans text-2xl font-bold text-white sm:block hidden"
                >
                  Vsal Studio
                </Link>
              </div>

              {/* Desktop Navigation (render dari array) */}
              <div className="hidden md:flex items-center space-x-8">
                {desktopNavItems.map((item) =>
                  item.isDropdown ? (
                    /* --- Dropdown Services --- */
                    <div key={item.name} className="relative group">
                      <button className="flex items-center text-white hover:text-primary transition-colors">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>

                      <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4 grid gap-3">
                          {item.dropdownItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-start p-3 rounded-lg hover:bg-muted transition-colors group/item"
                            >
                              <sub.icon className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                              <div>
                                <h3 className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                                  {sub.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* --- Link biasa --- */
                    <Link
                      key={item.name}
                      href={item.href ?? "/"}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}

                {/* CTA Button */}
                <Link
                  href="https://wa.me/6281399090477"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-secondary font-semibold w-fit">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Full-screen Menu (kode Anda tetap dipakai) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative h-full bg-background flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 mr-3"
                  src="/logo-vsal.png"
                  alt="logo vsal studio"
                />
                <span className="font-sans text-xl font-bold text-white">
                  Vsal Studio
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Main Navigation */}
              <div className="space-y-2 mb-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-4 rounded-xl hover:bg-muted transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Services Section */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                  Our Services
                </h4>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center p-4 rounded-xl hover:bg-muted transition-all duration-200 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-border">
              <Link
                href="https://wa.me/6281399090477"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-xl font-semibold text-lg">
                  <div className="flex items-center justify-center">
                    <span>Get Started</span>
                    <span className="ml-2 text-lg">→</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
