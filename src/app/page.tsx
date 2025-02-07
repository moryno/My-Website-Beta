import Socials from "@/components/Socials";
import ToggleTheme from "@/components/ToggleTheme";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function Home() {
  return (
  <section className="md:w-[90%] lg:w-[80%] mx-auto">
    <section className="py-5 flex justify-end"><ToggleTheme /></section>
     <section className="flex mt-20">
    <article className="w-full md:w-4/6 flex flex-col gap-5">
      <Image src="/logo.png" alt="this is the logo of the website" width={40} height={40} />
      <h1 className="text-6xl font-bold">Hey 👋</h1>
      <p className="text-xl leading-relaxed xl:leading-10 tracking-tighter">I&apos;m <b>Maurice Nganga</b>. A <b>Frontend Developer</b>. I&apos;m passionate about the web and it&apos;s infinte possibilities, <span className=" underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">open source</span>, sharing my experiences on <span className=" underline underline-offset-8 decoration-1  hover:decoration-2 cursor-pointer decoration-[#73C606]">medium</span> and playing <span className=" underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606]">video games</span></p>
      <p className="text-xl leading-relaxed xl:leading-10 tracking-tighter">I&apos;m currently helping to build and shaping a decentralized future for the web and internet at <span className=" underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">Smart Applications International</span>.</p>
      <p className="flex items-center gap-2 text-sm">Previuosly:<span className="underline underline-offset-8  hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">Anza Cloud</span><span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">Arity Technologies</span><span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">IntSoft (K) Ltd</span></p>
      <div className="flex mt-5 items-center gap-3"> 
        <Link href={"/contact"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="bg-gradient-to-r from-stone-300 to-stone-600 hover:from-stone-600 hover:to-stone-300
                       rounded-full p-[1px] text-sm text-white mb-10">
                        <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm
                        font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200
                        ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                        <span>Contact Me</span>
                        <RiContactsFill size={16} />
                        </button>
                    </Link>
                    <Link href={""} 
                      role="button"
                      target="_blank"
                      rel="noopener nonreferrer"
                      download
                      className="flex items-center gap-1 hover:gap-3 bg-white border border-black rounded-full md:px-8 p-3 md:py-4 uppercase md:text-sm text-xs font-medium tracking-wider no-underline transition-all duration-200 ease-out
                       text-center text-black mb-10">
                        <span>Get Resume</span>
                        <MdDownload size={16} />
                    </Link></div>
              <Socials />
      <div className="flex mt-3 items-center gap-5">
        <Link href="/about" className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">About</Link>
        <Link href="/blogs" className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">Blogs</Link>
        <Link href="/projects" className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">Projects</Link>
      </div>
    </article>
    <article className="w-full md:w-2/6"></article>
   </section>
  </section>
  );
}
