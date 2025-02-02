import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Maurice Nganga Contact",
    description: "This is an contact page for Maurice Nganga. Let's talk, if you have a opening, contract at your company or want to collaborate in any project then I'm the right developer for you.",
  };
  
  
export default function ContactLayout({ children }: { children: ReactNode }){
    return <main className="w-full 3xl:w-[80%] mx-auto">
        <Header />
        { children }
        <Footer />
    </main>
}