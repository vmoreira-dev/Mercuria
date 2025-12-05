import "./globals.css";

export const metadata = {
  title: "Mercuria",
  description: "Frosted UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
