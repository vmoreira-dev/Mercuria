import "./globals.css";
import { CartProvider } from "@/context/CartContext";


export const metadata = {
  title: "Mercuria",
  description: "Frosted UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  className="min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/background.webp')",
  }}
>

  <CartProvider>
    {children}
  </CartProvider>
</body>

    </html>
  );
}
