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
    id: "headphones",
    name: "Wireless Headphones",
    price: 299,
    image: "/images/headphones.png", // adjust to whatever you use
    description: "Premium wireless over-ear audio.",
  },
  {
    id: "watch",
    name: "Smartwatch",
    price: 199,
    image: "/images/watch.png",
    description: "Health tracking on your wrist.",
  },
  {
    id: "speaker",
    name: "Smart Speaker",
    price: 99,
    image: "/images/speaker.png",
    description: "Voice-controlled home audio.",
  },
  {
    id: "camera",
    name: "Camera",
    price: 899,
    image: "/images/camera.png",
    description: "High-resolution mirrorless system.",
  },
];
