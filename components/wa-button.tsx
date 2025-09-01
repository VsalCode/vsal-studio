"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "6281399090477"; // Ganti dengan nomor WhatsApp tujuan
  const message = "Halo, saya ingin menggunakkan jasa vsal studio!"; // Opsional, bisa dikosongkan
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
