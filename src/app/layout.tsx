// src/app/layout.tsx
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "Mercuria",
  description: "Frosted UI",
  applicationName: "Mercuria",
  icons: {
    icon: "/favicon-mercuria.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
