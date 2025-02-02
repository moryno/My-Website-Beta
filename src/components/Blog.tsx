import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <Link href={"/"} className="bg-[#F8F9FA] w-full md:w-[48%] shadow-xl rounded-lg p-5">
        <h1 className="text-3xl font-bold tracking-tight">Interviewing Svelte&apos;s Rich harris</h1>
        <p className="mt-3 mb-5 text-sm font-medium text-textCol">Sun FEB 04 2024</p>
        <div className="flex flex-col relative">
            <p className="text-lg font-normal leading-8 tracking-wider text-ellipsis line-clamp-4">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM contentSocial media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content Social media is drowning in this boring and generic LLM content.</p>
            <span className="font-medium flex items-center gap-1 transition-all duration-200 ease-out hover:gap-3 hover:text-textCol mt-8"><span>Read More</span> <FaArrowRightLong /></span>
        </div>
    </Link>
  )
}

export default Blog