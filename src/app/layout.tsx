import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Maurice Nganga Porfolio Website",
  description: "Next JS Development",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeContextProvider>
          <ThemeProvider>
            <main className="w-full">
            {children}
            </main>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
