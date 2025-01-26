import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Project = () => {
  return (
    <Link href={"/"} className="bg-[#F8F9FA] w-full md:w-[32%] shadow-xl rounded-lg overflow-hidden">
        <Image src="/placeholder.png" alt="" width={200} height={250} className='w-full h-[30vh]' />
        <div className='px-3 pt-2 pb-5'>
        <h1 className="text-2xl font-bold tracking-tighter">Interview Svelte&apos;s Rich harris</h1>
       <div className="flex flex-col">
       <p className="my-2 text-base leading-8 text-ellipsis line-clamp-3">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM content.</p>
       <span className="self-end flex items-center gap-2 hover:gap-5 mt-4">Read More <FaArrowRightLong /></span>
        </div>
        </div>

</Link>
  )
}

export default Project