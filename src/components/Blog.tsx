"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link"
import { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
   const { theme } = useContext(ThemeContext);

  return (
    <Link href={"/"} className={`${theme === "dark" ? "bg-cardDark" : "bg-cardLight"} w-full md:w-[48%] shadow-2xl rounded-lg p-5 group`}>
        <h1 className="text-3xl font-bold tracking-tight">Interviewing Svelte&apos;s Rich harris</h1>
        <p className={`mt-3 mb-5 text-sm font-bold ${theme === "dark" ? "text-greenDark" : "text-greenLight"}`}>Sun FEB 04 2024</p>
        <div className="flex flex-col relative">
            <p className="text-lg font-normal leading-8 tracking-wider text-ellipsis line-clamp-4">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM contentSocial media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content.</p>
            <span className="font-medium flex items-center justify-end transition-colors duration-200 group-hover:text-greenDark mt-8"><span>Read More</span> <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" /></span>
        </div>
    </Link>
  )
}

export default Blog