import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Maurice Nganga",
    description: "This is an about page for Maurice Nganga. His journey so far from retail Manager and Cashier to Software Developer.",
  };
  

export default function AboutLayout({ children }: { children: ReactNode }){
    return <main className="w-full md:w-[95%] xl:w-[90%] 2xl:w-[75%] 3xl:w-[70%] mx-auto">
        <Header />
        { children }
        <Footer />
    </main>
}