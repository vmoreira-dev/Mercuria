import "./globals.css";

export const metadata = {
  title: "Mercuria",
  description: "Frosted UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050814] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
