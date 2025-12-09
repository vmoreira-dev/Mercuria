// src/app/page.tsx
"use client";

import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addItem } = useCart();
  const [hero, ...rest] = products;

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
              onClick={() => addItem(hero)}
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
              Add to Bag
            </button>
          </div>

          {/* Right: hero image */}
          <div className="justify-self-center">
            <div
              className="
                w-64 h-64 md:w-72 md:h-72
                rounded-3xl
                bg-white/10
                border border-white/30
                flex items-center justify-center
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              "
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* LOWER PRODUCT STRIP — FLOATING GLASS + BIGGER IMAGES */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {rest.map((product) => (
            <button
              key={product.id}
              onClick={() => addItem(product)}
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
              {/* BIG FLOATING IMAGE */}
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
    </div>
  );
}
