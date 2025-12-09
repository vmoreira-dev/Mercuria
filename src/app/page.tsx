// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/products";

export default function Home() {
  const [hero, ...rest] = products;
  const [activeProduct, setActiveProduct] = useState<any>(null);

  // ✅ SAVED STATE + PERSISTENCE (KEPT)
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("mercuria:saved");
    if (stored) setSaved(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("mercuria:saved", JSON.stringify(saved));
  }, [saved]);

  const toggleSave = (id: string) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // ✅ HERO PARALLAX (KEPT)
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
      {/* ✅ CLEAN GLASS PANEL — NORMAL COLOR RESTORED */}
      <div
        className="
          relative
          max-w-7xl w-full
          bg-white/10 backdrop-blur-2xl
          rounded-3xl
          border border-white/30
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          px-12 md:px-16 py-12
        "
      >
        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-4">
          <div>
            <p className="text-xs tracking-[0.25em] text-white/80 mb-4">
              FEATURED PRODUCT
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              {hero.name}
            </h1>

            <button
              onClick={() => setActiveProduct(hero)}
              className="
                px-7 py-3
                rounded-full
                bg-white text-black
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                hover:scale-[1.03]
                transition
              "
            >
              View Details
            </button>
          </div>

          <button
            onClick={() => setActiveProduct(hero)}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetParallax}
            className="justify-self-center group"
          >
            <div
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
              }}
              className="
                w-80 h-80
                rounded-3xl
                bg-white/10
                border border-white/30
                flex items-center justify-center
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-transform
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

        {/* ✅ PRODUCT GRID — NORMAL COLOR + DEPTH */}
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
                  className="h-full object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)]"
                />
              </div>

              <p className="text-sm text-white">{product.name}</p>

              {/* ✅ SILENT SAVE DOT — KEPT */}
              {saved.includes(product.id) && (
                <span
                  className="
                    absolute top-3 right-3
                    w-2.5 h-2.5
                    rounded-full
                    bg-white
                    shadow-[0_0_8px_rgba(255,255,255,0.8)]
                  "
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ CLEAN MODAL — NO GLOBAL BLUR WASH */}
      {activeProduct && (
        <div
          onClick={() => setActiveProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
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
                <h2 className="text-4xl font-semibold text-white mb-4">
                  {activeProduct.name}
                </h2>

                {activeProduct.description && (
                  <p className="text-sm text-white/80 mb-6">
                    {activeProduct.description}
                  </p>
                )}

                <p className="text-lg text-white/90 mb-8">
                  ${activeProduct.price}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => toggleSave(activeProduct.id)}
                    className="
                      px-8 py-3
                      rounded-full
                      border border-white/20
                      text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    {saved.includes(activeProduct.id)
                      ? "Remove from Collection"
                      : "Save to Collection"}
                  </button>

                  <button
                    onClick={() => setActiveProduct(null)}
                    className="
                      px-8 py-3
                      rounded-full
                      bg-white text-black
                      shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                      hover:scale-[1.05]
                      transition
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
