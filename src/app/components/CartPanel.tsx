// src/components/CartPanel.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function CartPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Prevents hydration mismatch
  if (!mounted) return null;

  const {
    items,
    totalItems,
    totalPrice,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* PANEL */}
          <motion.aside
            className="
              fixed right-0 top-0 z-50
              h-full w-full max-w-md
              bg-white/10 backdrop-blur-2xl
              border-l border-white/20
              shadow-[0_0_80px_rgba(0,0,0,0.6)]
              flex flex-col
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/15">
              <div>
                <p className="text-xs tracking-[0.2em] text-white/70">BAG</p>
                <p className="text-sm text-white/90">
                  {totalItems} item{totalItems === 1 ? "" : "s"}
                </p>
              </div>

              <button
                onClick={closeCart}
                className="text-sm text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 && (
                <p className="text-sm text-white/70">Your bag is empty.</p>
              )}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex gap-3
                    bg-white/5 rounded-xl
                    p-3
                    border border-white/10
                  "
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-white">{item.name}</p>
                    <p className="text-xs text-white/60">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          setQuantity(item.id, item.quantity - 1)
                        }
                        className="
                          w-6 h-6 rounded-full
                          bg-white/10 hover:bg-white/20
                          flex items-center justify-center
                          text-xs
                        "
                      >
                        -
                      </button>

                      <span className="text-sm">{item.quantity}</span>

                      <button
                        onClick={() =>
                          setQuantity(item.id, item.quantity + 1)
                        }
                        className="
                          w-6 h-6 rounded-full
                          bg-white/10 hover:bg-white/20
                          flex items-center justify-center
                          text-xs
                        "
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-white/60 hover:text-white/90"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            {items.length > 0 && (
              <div className="border-t border-white/15 px-6 py-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-white/90">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={clearCart}
                    className="
                      flex-1 text-xs
                      bg-white/5 hover:bg-white/10
                      rounded-full py-2
                      text-white/80
                    "
                  >
                    Clear
                  </button>
                  <button
                    className="
                      flex-1 text-xs
                      bg-white text-black
                      rounded-full py-2
                      hover:bg-slate-100
                    "
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
