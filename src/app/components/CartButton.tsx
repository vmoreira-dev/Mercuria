// src/components/CartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { totalItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="
        relative flex items-center gap-2
        rounded-full px-4 py-2
        bg-white/15 hover:bg-white/25
        backdrop-blur-xl
        text-sm text-white
        transition
      "
    >
      <span>Bag</span>
      {totalItems > 0 && (
        <span
          className="
            inline-flex items-center justify-center
            min-w-[1.5rem] h-6
            rounded-full
            bg-black/70
            text-xs
          "
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}
