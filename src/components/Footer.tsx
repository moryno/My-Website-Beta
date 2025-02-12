import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <section className="flex items-center justify-between mt-10 pt-5 pb-10 border-t-[1px] border-gray-100">
        <article className="flex items-center gap-5">
        <Link href="/about" className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">about</Link>
        <Link href="/blogs" className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">blogs</Link>
        <Link href="/projects" className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">projects</Link>
        <Link href="/contact" className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">contact</Link>
        </article>
        <article className="flex items-center text-sm">
        <FaRegCopyright size={10} /><span>{ year }, Maurice Nganga. All rights reserved.</span>
        </article>
    </section>
  )
}

export default Footer