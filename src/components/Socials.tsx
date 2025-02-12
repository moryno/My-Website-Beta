"use client";

import { motion } from "framer-motion"
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaBluesky, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { bodyAnimation, staggerChildren } from "@/app/animations/animations";

const Socials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div variants={bodyAnimation} className="flex items-center gap-5">
      <Link href="https://github.com/moryno" target="_blank" rel="noopener nonreferrer"><motion.span variants={staggerChildren}><FaGithub className={`text-base sm:text-lg lg:text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></motion.span></Link>
      <Link href="https://www.linkedin.com/in/mauricenganga/" target="_blank" rel="noopener nonreferrer"><motion.span variants={staggerChildren}><FaLinkedin className={`text-base sm:text-lg lg:text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></motion.span></Link>
      <Link href="https://bsky.app/profile/mauricenganga.bsky.social" target="_blank" rel="noopener nonreferrer"><motion.span variants={staggerChildren}><FaBluesky className={`text-base sm:text-lg lg:text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></motion.span></Link>
      <Link href="https://medium.com/@mauricenganga41" target="_blank" rel="noopener nonreferrer"><motion.span variants={staggerChildren}><FaMedium className={`text-base sm:text-lg lg:text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-3 hover:text-greenDark ${theme === "dark" ? "text-iconDark" : "text-iconLight"}`} /></motion.span></Link>
   
    
    
    
    </motion.div>
  )
}

export default Socials