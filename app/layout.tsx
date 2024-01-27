import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shipping Containers",
  description: "Stack shipping containers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage: "url('/layered-peaks-haikei.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
