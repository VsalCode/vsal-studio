"use client";

import { PortfolioItem, portfolioItems } from "@/data/portfolios";
import React, { useState } from "react";

const PortofolioPage = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <main className="px-6 md:px-16 py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Header */}
        <div className="mb-12 max-w-2xl text-white">
          <h1 className="text-4xl font-bold mb-3">Our Works</h1>
          <p className="opacity-80">
            Selected projects showcasing our creative and digital expertise.
          </p>
        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative">
              <button
                className="absolute top-4 right-4 text-black text-xl"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />

                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-3">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedItem.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default PortofolioPage;
