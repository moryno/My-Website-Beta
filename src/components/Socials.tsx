"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaBluesky, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

const Socials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-5">
      <Link href="https://github.com/moryno" target="_blank" rel="noopener nonreferrer"><FaGithub className={`text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></Link>
      <Link href="https://www.linkedin.com/in/mauricenganga/" target="_blank" rel="noopener nonreferrer"><FaLinkedin className={`text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></Link>
      <Link href="https://bsky.app/profile/mauricenganga.bsky.social" target="_blank" rel="noopener nonreferrer"><FaBluesky className={`text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></Link>
      <Link href="https://medium.com/@mauricenganga41" target="_blank" rel="noopener nonreferrer"><FaMedium className={`text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></Link>
   
    
    
    
    </div>
  )
}

export default Socials