import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import { Chivo } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";


// Configure Chivo font
const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-chivo",
  display: "swap",
});
 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chivo.variable} ${geistMono.variable}`}>
      <body className={`antialiased flex font-sans h-full `}>
        <aside 
          className="group fixed left-0 top-0 h-full  transition-all duration-300
                               w-[3.8vw] md:hover:w-[13vw]
                   md:hover: z-10 p-4 overflow-hidden
                    md:hover:shadow-[8px_0_40px_0_rgba(0,0,0,0.4)] 
                    hover:backdrop-blur-sm bg-[#1F0954]"
        >
          <div className="flex flex-col space-y-4">
            <SideBar />
          </div>
        </aside>

        {children}
      </body>
    </html>
  );
}