import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercuria",
  description: "Frosted precision interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#0a0f1c] text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/mercuria_4k.webp"
            alt="background"
            className="h-full w-full object-cover opacity-[0.65]"
          />
        </div>

        {/* Frost layer */}
        <div className="absolute inset-0 -z-10 bg-white/5 backdrop-blur-2xl" />

        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

        {children}
      </body>
    </html>
  );
}
