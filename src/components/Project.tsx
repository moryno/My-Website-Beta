import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Project = () => {
  return (
    <Link href={"/"} className="bg-[#F8F9FA] w-full md:w-[32%] shadow-xl rounded-lg overflow-hidden">
        <Image src="/placeholder.png" alt="this is product cover" width={200} height={250} className='w-full h-[30vh] object-cover' />
        <div className='px-3 pt-2 pb-5'>
        <h1 className="text-2xl font-bold tracking-tighter">Interview Svelte&apos;s Rich harris</h1>
        <div className='w-full flex flex-wrap gap-2 my-2'>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>TypeScript</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>React</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Tailwind</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Nodejs</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>MongoDB</span>
          </div>
       <div className="flex flex-col my-2">
       <p className="text-base leading-8 text-ellipsis line-clamp-2">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM content.</p>
       <span className="self-end flex items-center gap-2 hover:gap-5 mt-4">Read More <FaArrowRightLong /></span>
        </div>
        </div>

</Link>
  )
}

export default Project