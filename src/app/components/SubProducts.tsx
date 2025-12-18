"use client";

import { useState } from "react";

const products = [
  { id: "watch", title: "Smartwatch", price: "$199", img: "/watch.png" },
  { id: "speaker", title: "Smart Speaker", price: "$99", img: "/speaker.png" },
  { id: "camera", title: "Camera", price: "$899", img: "/camera.png" },
];

export default function SubProducts() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  return (
    <div className="grid grid-cols-3 gap-8 mt-8">
      {products.map((p) => {
        const saved = savedIds.includes(p.id);

        return (
          <div
            key={p.id}
            onClick={() =>
              setSavedIds((prev) =>
                prev.includes(p.id) ? prev : [...prev, p.id]
              )
            }
            className={`
              relative
              cursor-pointer
              rounded-[24px]
              bg-white/10
              backdrop-blur-xl
              p-8
              flex flex-col items-center justify-center
              text-center
              h-[260px]
              transition
              ${
                saved
                  ? "ring-1 ring-white/10"
                  : "border border-white/20"
              }
            `}
          >
            {/* Pulse-once dot */}
            {saved && (
              <span
              className="
                absolute top-3 right-3
                h-2 w-2
                rounded-full
                bg-white
                shadow-[0_0_0_2px_rgba(0,0,0,0.15)]
              "
              style={{ animation: "pulse-once 400ms ease-out" }}
            />

            )}

            <img
              src={p.img}
              alt={p.title}
              className="w-[120px] h-[120px] object-contain mb-4"
            />

            <div className="text-lg font-medium mb-1">{p.title}</div>
            <div className="text-md opacity-80">{p.price}</div>
          </div>
        );
      })}
    </div>
  );
}
