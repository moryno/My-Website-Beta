import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        <main className="overflow-x-hidden antialiased w-full md:w-[90%] lg:w-[80%] mx-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
