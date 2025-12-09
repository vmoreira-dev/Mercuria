// src/app/page.tsx
"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function Home() {
  const [hero, ...rest] = products;
  const [activeProduct, setActiveProduct] = useState<any>(null);

  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setParallax({ x, y });
  };

  const resetParallax = () => setParallax({ x: 0, y: 0 });

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      {/* Outer glass panel */}
      <div
        className="
          relative
          max-w-7xl w-full
          bg-white/10 backdrop-blur-2xl
          rounded-3xl
          border border-white/30
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          px-12 md:px-16 py-12
          before:absolute before:inset-0 before:rounded-3xl
          before:border before:border-white/20
          before:pointer-events-none
        "
      >
        {/* HERO ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-4">
          {/* Left: text */}
          <div>
            <div className="w-8 h-[2px] bg-white/70 rounded-full mb-4" />

            <p className="text-xs tracking-[0.25em] text-white/85 mb-4">
              FEATURED PRODUCT
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              {hero.name}
            </h1>

            <button
              onClick={() => setActiveProduct(hero)}
              className="
                inline-flex items-center justify-center
                px-7 py-3
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

          {/* Right: hero image with parallax */}
          <button
            onClick={() => setActiveProduct(hero)}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetParallax}
            className="justify-self-center group perspective-[800px]"
          >
            <div
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
              }}
              className="
                w-72 h-72 md:w-80 md:h-80
                rounded-3xl
                bg-white/10
                border border-white/30
                flex items-center justify-center
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-transform duration-150 ease-out
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

        {/* LOWER PRODUCT STRIP — NO PRICES */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {rest.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className="
                group
                relative
                rounded-2xl
                p-7
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
              <div className="relative w-full h-48 mb-5 flex items-center justify-center">
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

              <p className="text-sm text-white">
                {product.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL — PRICE REVEALED ONLY HERE */}
      {activeProduct && (
        <div
          onClick={() => setActiveProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-w-3xl w-full mx-6
              rounded-3xl
              bg-white/12 backdrop-blur-2xl
              border border-white/20
              shadow-[0_40px_120px_rgba(0,0,0,0.6)]
              p-12
              scale-[0.92] opacity-0
              animate-[modalIn_0.35s_ease-out_forwards]
            "
          >
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="h-72 object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
                />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] text-white/70 mb-3">
                  PRODUCT DETAILS
                </p>

                <h2 className="text-4xl font-semibold text-white mb-4">
                  {activeProduct.name}
                </h2>

                <p className="text-lg text-white/90 mb-8">
                  ${activeProduct.price}
                </p>

                <button
                  onClick={() => setActiveProduct(null)}
                  className="
                    inline-flex items-center justify-center
                    px-9 py-3
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

      <style jsx global>{`
        @keyframes modalIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
