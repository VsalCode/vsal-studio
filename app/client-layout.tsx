"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-top-button";
import WhatsAppButton from "@/components/wa-button";

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
      <img
        src="/logo-vsal.png"
        alt="Logo"
        className="w-24 h-24 animate-bounce"
      />
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 detik
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </>
  );
}
