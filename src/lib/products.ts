// src/lib/products.ts

export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

export const products: StoreProduct[] = [
  {
    id: "auralis-x",
    name: "Auralis X",
    price: 299,
    image: "/images/headphones.png",
    description: "Flagship over-ear acoustics engineered for spatial clarity and deep isolation.",
  },
  {
    id: "chronos-s",
    name: "Chronos S",
    price: 199,
    image: "/images/watch.png",
    description: "Precision health tracking in a streamlined, performance-first profile.",
  },
  {
    id: "sonis-core",
    name: "Sonis Core",
    price: 99,
    image: "/images/speaker.png",
    description: "Essential atmospheric sound tuned for intelligent everyday environments.",
  },
  {
    id: "spectra-pro",
    name: "Spectra Pro",
    price: 899,
    image: "/images/camera.png",
    description: "Professional-grade mirrorless system built for uncompromising capture.",
  },
];
