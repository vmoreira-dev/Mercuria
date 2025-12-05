export const metadata = {
  title: "Mercuria",
  description: "Frosted UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* TAILWIND CDN — no install required */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Custom Tailwind config */}
        <script>
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: "#ffffff"
                  }
                }
              }
            }
          `}
        </script>
      </head>

      <body className="bg-[#050814] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
