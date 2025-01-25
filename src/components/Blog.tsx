import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <Link href={"/"} className="bg-[#F8F9FA] w-full md:w-[48%] shadow-xl rounded-lg p-5">
        <h1 className="text-2xl font-semibold tracking-tighter">Interview Svelte&apos;s Rich harris</h1>
        <p className="mt-1 mb-5 text-sm font-normal">Sun FEB 04 2024</p>
        <div className="flex flex-col">
            <p className="text-lg leading-8 text-ellipsis line-clamp-3">It’s been almost a year since ChatGPT changed everything. Since then, the web has been flooded with content written by large language models (LLMs). Social media is drowning in this boring and generic LLM content.</p>
            <span className="self-end flex items-center gap-2 hover:gap-5 mt-8">Read More <FaArrowRightLong /></span>
        </div>
    </Link>
  )
}

export default Blog