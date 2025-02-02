import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Maurice Projects",
    description: "Browse the projects I designed and developed for experiment, research and opinion.",
  };
  
export default function ProjectLayout({ children }: { children: ReactNode }){
    return <main className="w-full md:w-[95%] 3xl:w-[80%] mx-auto">
        <Header />
        { children }
        <Footer />
    </main>
}