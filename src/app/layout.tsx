import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chirp | Where every voice gets heard",
  description: "Where every voice gets heard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className="antialiased">
        {children}
      </body>
    </html>
  );
}
