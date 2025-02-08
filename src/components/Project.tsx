"use client"

import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Project = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link href={"/"} className={`${theme === "dark" ? "bg-cardDark" : "bg-cardLight"} w-full md:w-[48%] xl:w-[32%] shadow-xl rounded-lg overflow-hidden group`}>
        <Image src="/placeholder.png" priority alt="this is product cover" width={200} height={250} className='w-full h-[30vh] object-cover' />
        <div className='px-3 pt-2 pb-5'>
        <h1 className="text-3xl font-bold tracking-tight">Interviewin Svelte&apos;s</h1>
        <div className='w-full flex flex-wrap gap-2 my-2'>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>TypeScript</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>React</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Tailwind</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Nodejs</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>MongoDB</span>
          </div>
       <div className="flex flex-col my-2">
       <p className="text-base tracking-wide leading-8 text-ellipsis line-clamp-3">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM content.</p>
       <span className="font-medium flex items-center justify-end transition-colors duration-200 group-hover:text-greenDark mt-8"><span>Read More</span> <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" /></span>
       </div>
        </div>

</Link>
  )
}

export default Project