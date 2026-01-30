import type React from "react";
import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const montserrat = Montserrat({
  variable: "--font-montserrat", 
  subsets: ["latin"],
});

const nunito = DM_Sans({
  variable: "--font-nunito",   
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vsal Studio® - Creative Solutions for Your Business",
  description:
    "Professional digital agency offering web development, logo design, social media management, and bundling services.",
  icons: {
    icon: "/logo-vsal.png",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${montserrat.variable} antialiased`}
    >
      <body >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
