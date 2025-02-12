import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Blog Posts",
    description: "Browse the blog post I wrote from experiment, research and opinion.",
  };
  
  
export default function BlogLayout({ children }: { children: ReactNode }){
    return <main className="w-[90%] md:w-[95%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[70%] mx-auto">
        <Header />
        { children }
        <Footer />
    </main>
}