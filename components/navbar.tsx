// src/components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { desktopNavItems } from "@/data/navbar";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`
    fixed top-0 right-0 left-0 mx-4 
    md:mx-6 lg:mx-0
    lg:left-1/2 lg:-translate-x-1/2 
    lg:mt-4 mt-2 
    z-50 transition-all duration-300 
    bg-black/70 backdrop-blur-md 
    rounded-full shadow-lg border border-primary/30 
    py-[5px] px-[4px]
    font-nunito
  `}
      >
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center bg-primary/80 rounded-full p-1 ms-[2px] sm:ms-0">
            <img className="w-7" src="/logo-vsal.png" alt="logo vsal studio" />
          </div>

          {/* Tablet & Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-5 lg:space-x-8 text-sm lg:text-base">
            {desktopNavItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-white hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute bg-black top-full mt-4 w-72 lg:w-80 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-primary/30">
                    <div className="p-4 grid gap-3">
                      {item.dropdownItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-dark transition-colors group/item"
                        >
                          <div className={sub.class}>
                            <sub.icon className="h-6 w-6 text-white flex-shrink-0" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white group-hover/item:text-primary transition-colors">
                              {sub.name}
                            </h3>
                            <p className="text-sm text-white/75 mt-1">
                              {sub.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href ?? "/"}
                  className="text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Link
              href="https://wa.me/6281399090477"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/80 text-secondary w-fit rounded-full font-bold text-sm lg:text-base px-3 lg:px-5">
                Kontak
                <MdArrowOutward className="font-bold" />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center me-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-7 h-7" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 p-6 md:hidden flex flex-col"
          >
            {/* Header inside mobile menu */}
            <div className="flex items-center justify-between mb-8">
              <img src="/logo-vsal.png" alt="logo vsal" className="w-8" />
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-4">
              {desktopNavItems.map((item) =>
                item.isDropdown ? (
                  <details key={item.name} className="group">
                    <summary className="flex items-center gap-4 cursor-pointer py-3 px-4 rounded-xl bg-gray-800/50 hover:bg-primary/20 transition-all">
                      <div className="bg-gray-dark border border-white p-2 rounded-xl flex justify-center items-start">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-white font-medium">{item.name}</h2>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                      <ChevronDown className="text-white group-open:rotate-180 transition-transform" />
                    </summary>

                    {/* Dropdown Items */}
                    <div className="mt-3 flex flex-col gap-3 bg-gray-800/40 p-4 rounded-xl">
                      {item.dropdownItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-all"
                        >
                          <div className={sub.class}>
                            <sub.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-white">{sub.name}</h3>
                            <p className="text-sm text-white/70">
                              {sub.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href ?? "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-800/50 hover:bg-primary/20 transition-all"
                  >
                    <div className="bg-gray-dark border border-white p-2 rounded-xl flex justify-center items-center">
                      {item.icon && (
                        <item.icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-white font-medium">{item.name}</h2>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </Link>
                )
              )}
            </div>

            {/* CTA Button at bottom */}
            <div className="mt-6">
              <Link
                href="https://wa.me/6281399090477"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-primary hover:bg-primary/80 text-secondary w-full rounded-full font-bold py-6 text-lg flex items-center justify-center gap-2 shadow-md">
                  Kontak
                  <MdArrowOutward className="w-5 h-5 font-bold" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
