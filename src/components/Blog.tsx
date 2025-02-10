"use client"

import { motion } from "framer-motion"
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link"
import { useContext, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedTitle from "@/app/animations/AnimatedTitle";
import AnimatedBody from "@/app/animations/AnimatedBody";
import { riseWithFade } from "@/app/animations/animations";

const Blog = () => {
   const { theme } = useContext(ThemeContext);
     const ref = useRef<HTMLDivElement>(null);

  return (
    <Link href={"/"} className={`${theme === "dark" ? "bg-cardDark" : "bg-cardLight"} w-full md:w-[48%] shadow-2xl rounded-lg p-5 group`}>
      <motion.div
         ref={ref}
         initial="initial"
         animate="animate" 
      >
        <AnimatedTitle
                   text="Interviewing Svelte&apos;s Rich harris"
                   wordSpace='mr-[0.25em]'
                   charSpace='-mr-[0.01em]'
                   className="text-2xl font-semibold uppercase tracking-tight"
                   />
                      <AnimatedBody
                                   text={"Sun FEB 04 2024"}
                                   wordSpace='mr-[0.25em]'
                                   charSpace='-mr-[0.01em]'
                                   className={`mt-3 mb-5 text-sm font-bold ${theme === "dark" ? "text-greenDark" : "text-greenLight"}`}
                                   />
        <div className="flex flex-col relative">
        <AnimatedBody
                                   text={"It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM contentSocial media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content."}
                                   wordSpace='mr-[0.25em]'
                                   charSpace='-mr-[0.01em]'
                                  className="text-lg font-normal leading-10 tracking-wider text-ellipsis line-clamp-4"
                                   />
    <motion.span variants={riseWithFade} className="font-medium flex items-center justify-end transition-colors duration-200 group-hover:text-greenDark mt-8"><span>Read More</span> <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" /></motion.span>        </div>
      </motion.div>
    </Link>
  )
}

export default Blog