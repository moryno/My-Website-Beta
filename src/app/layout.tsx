import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Maurice Nganga Porfolio Website",
  description: "Next JS Development",
  category: "technology"
};

type RootLayoutProps = {
  children : ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeContextProvider>
          <ThemeProvider>
            <main className="w-full antialiased">
            {children}
            </main>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
