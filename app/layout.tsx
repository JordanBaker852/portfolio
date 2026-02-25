import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { NextFont } from "next/dist/compiled/@next/font";
import Cursor from "@/components/common/Cursor";

const firaCode: NextFont = Fira_Code({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased cursor-none`}>
        <Cursor/> 
        <div className="flex flex-col min-h-dvh bg-[#0F172B] border border-[#314147] rounded-lg fira-code max-w-445 m-auto">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}