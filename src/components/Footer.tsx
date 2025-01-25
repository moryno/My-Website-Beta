import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <section className="flex items-center justify-between mt-10 py-5 border-t-[1px] border-gray-100">
        <article className="flex items-center gap-5">
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">about</span>
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">blogs</span>
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">projects</span>
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">contact</span>
        </article>
        <article className="flex items-center text-sm">
        <FaRegCopyright size={10} /><span>{ year }, Maurice Nganga. All rights reserved.</span>
        </article>
    </section>
  )
}

export default Footer