import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Blog Posts",
    description: "Browse the blog post I wrote from experiment, research and opinion.",
  };
  
  
export default function BlogLayout({ children }: { children: ReactNode }){
    return <main className="w-full md:w-[95%] 3xl:w-[80%] mx-auto">
        <Header />
        { children }
        <Footer />
    </main>
}