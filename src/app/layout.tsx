import type { Metadata } from "next";
import { Inter } from "next/font/google";



import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practise",
  description: "practise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}
     
      </body>
    </html>
  );
}
