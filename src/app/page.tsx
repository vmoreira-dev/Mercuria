// src/app/page.tsx
"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function Home() {
  const [hero, ...rest] = products;
  const [activeProduct, setActiveProduct] = useState<any>(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      {/* Outer glass panel */}
      <div
        className="
          relative
          max-w-5xl w-full
          bg-white/10 backdrop-blur-2xl
          rounded-3xl
          border border-white/30
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          px-10 py-10
          before:absolute before:inset-0 before:rounded-3xl
          before:border before:border-white/20
          before:pointer-events-none
        "
      >
        {/* HERO ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-4">
          {/* Left: text */}
          <div>
            <div className="w-8 h-[2px] bg-white/70 rounded-full mb-4" />

            <p className="text-xs tracking-[0.25em] text-white/85 mb-4">
              FEATURED PRODUCT
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] mb-2">
              {hero.name}
            </h1>

            <p className="text-lg text-white/90 mb-6">
              ${hero.price}
            </p>

            <button
              onClick={() => setActiveProduct(hero)}
              className="
                inline-flex items-center justify-center
                px-6 py-2.5
                rounded-full
                bg-white text-black
                text-sm font-medium
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                hover:scale-[1.03]
                active:scale-[0.97]
                transition
              "
            >
              View Details
            </button>
          </div>

          {/* Right: hero image — NOW CLICKABLE */}
          <button
            onClick={() => setActiveProduct(hero)}
            className="justify-self-center group"
          >
            <div
              className="
                w-64 h-64 md:w-72 md:h-72
                rounded-3xl
                bg-white/10
                border border-white/30
                flex items-center justify-center
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition
                group-hover:scale-[1.04]
                group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)]
              "
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>

        {/* LOWER PRODUCT STRIP */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {rest.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className="
                group
                relative
                rounded-2xl
                p-6
                text-left
                bg-white/8
                backdrop-blur-xl
                border border-white/15
                shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                transition
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
              "
            >
              <div className="relative w-full h-44 md:h-48 mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-auto
                    object-contain
                    transition
                    group-hover:scale-[1.08]
                    drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)]
                  "
                />
              </div>

              <p className="text-sm text-white mb-1">
                {product.name}
              </p>
              <p className="text-xs text-white/90">
                ${product.price}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* LUXURY PRODUCT MODAL */}
      {activeProduct && (
        <div
          onClick={() => setActiveProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-w-2xl w-full mx-6
              rounded-3xl
              bg-white/12 backdrop-blur-2xl
              border border-white/20
              shadow-[0_40px_120px_rgba(0,0,0,0.6)]
              p-10
            "
          >
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="h-64 object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
                />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] text-white/70 mb-3">
                  PRODUCT DETAILS
                </p>

                <h2 className="text-3xl font-semibold text-white mb-3">
                  {activeProduct.name}
                </h2>

                <p className="text-lg text-white/90 mb-6">
                  ${activeProduct.price}
                </p>

                <button
                  onClick={() => setActiveProduct(null)}
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3
                    rounded-full
                    bg-white text-black
                    text-sm font-medium
                    shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                    hover:scale-[1.05]
                    active:scale-[0.96]
                    transition
                  "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
