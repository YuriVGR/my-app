import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/nav";

const Comforta = Red_Hat_Display({ subsets: ["latin"] });

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  title: "My Portifolio",
  description: "Made by YuriVGR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${Comforta.className} w-screen h-screen bg-sky-100 dark:bg-slate-900 dark:text-white transition-colors antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
