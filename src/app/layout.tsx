import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./ui/homescreen/[nav]/page";
import Footer from "./ui/homescreen/[footer]/page";



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
        
      <body className="bg-white">
        
        <div className="w-max bg-white">
        <header>
          <Nav/>
         </header>

        {children}
        
        <footer>
         <Footer/>
        </footer>
        </div>
       

     
      </body>
    </html>
  );
}
