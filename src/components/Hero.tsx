"use client";

import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import ToggleTheme from "@/components/ToggleTheme";
// import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import {
  bodyAnimation,
  fromLeftContainerVariants,
  leftChildVariants,
} from "@/app/animations/animations";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="md:w-[90%] lg:w-[80%] mx-auto"
    >
      <section className="py-5 flex justify-end">
        <ToggleTheme />
      </section>
      <section className="flex mt-20">
        <motion.article className="w-full md:w-4/6 flex flex-col gap-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fromLeftContainerVariants}
            className="w-full flex flex-col gap-5"
          >
            {/* <motion.div variants={leftChildVariants}>
              <Image
                src="/logo.png"
                alt="this is the logo of the website"
                width={40}
                height={40}
              />
            </motion.div> */}

            <motion.h1
              variants={leftChildVariants}
              className="text-6xl font-bold"
            >
              Hey 👋
            </motion.h1>
            <motion.p
              variants={leftChildVariants}
              className="text-xl leading-relaxed xl:leading-10 tracking-tighter"
            >
              I&apos;m <b>Maurice Nganga</b>. A <b>Frontend Developer</b>.
              I&apos;m passionate about the web and it&apos;s infinte
              possibilities. I love contributing to{" "}
              <span className=" underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                open source
              </span>
              , sharing my developer journey on{" "}
              <span className=" underline underline-offset-8 decoration-1  hover:decoration-2 cursor-pointer decoration-[#73C606]">
                medium
              </span>{" "}
              and unwinding with some{" "}
              <span className=" underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                video games
              </span>
            </motion.p>
            <motion.p
              variants={leftChildVariants}
              className="text-xl leading-relaxed xl:leading-10 tracking-tighter"
            >
              Currently, I&apos;m helping to build and shape meaningful human-centric innovations at{" "}
              <span className=" underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                Smart Applications International,
              </span> 
              {" "}
              simplifying access to healthcare and empowering people to make informed decisions about their wellbeing.
            </motion.p>
            <motion.p
              variants={leftChildVariants}
              className="flex items-center gap-2 text-sm"
            >
              Previuosly:
              <span className="underline underline-offset-8  hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                Anza Cloud
              </span>
              <span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                Arity Technologies
              </span>
              <span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                IntSoft (K) Ltd
              </span>
            </motion.p>
          </motion.div>

          <div className="flex my-5 items-center gap-3">
            <Link
              href={"/contact"}
              rel="noopener nonreferrer"
              aria-label="View Contact Page"
            >
              <motion.button
                variants={bodyAnimation}
                className={`px-3 text-xs md:px-8 py-3 md:py-4 bg-dark rounded-full ${theme === "dark" ? "border border-[#f8f9fa]" : "border-none"} text-center md:text-sm
                        font-medium uppercase tracking-wider text-dark no-underline transition-all duration-200
                        ease-out md:font-semibold flex items-center gap-1 hover:gap-3`}
              >
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </motion.button>
            </Link>
            <Link
              href={"./Maurice_Nganga_Resume.pdf"}
              role="button"
              target="_blank"
              rel="noopener nonreferrer"
              aria-label="Download My Resume"
              download
            >
              <motion.button
                variants={bodyAnimation}
                className={`flex items-center gap-1 hover:gap-3 bg-light ${theme === "dark" ? "border-none" : "border border-[#0F1F2F]"} rounded-full md:px-8 p-3 md:py-4 uppercase md:text-sm text-xs font-medium tracking-wider no-underline transition-all duration-200 ease-out
                       text-center text-black`}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </motion.button>
            </Link>
          </div>
          <Socials />
          <motion.div
            variants={bodyAnimation}
            className="flex mt-3 items-center gap-5"
          >
            <Link
              href="/about"
              className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              Projects
            </Link>
          </motion.div>
        </motion.article>
        <article className="w-full md:w-2/6"></article>
      </section>
    </motion.section>
  );
};

export default Hero;
