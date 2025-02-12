"use client";

import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import ToggleTheme from "@/components/ToggleTheme";
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
      className="w-full md:w-[90%] lg:w-[80%] mx-auto"
    >
      <section className="p-2 sm:p-5 md:px-0 flex justify-end">
        <ToggleTheme />
      </section>
      <section className="flex mt-10 sm:mt-20">
        <motion.article className="w-full md:w-5/6 xl:w-4/6 p-2 sm:px-5 md:p-0 flex flex-col gap-5">
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
              className="text-3xl sm:text-4xl md:text-6xl font-bold"
            >
              Hey 👋
            </motion.h1>
            <motion.p
              variants={leftChildVariants}
              className="text-base sm:text-lg md:text-xl leading-relaxed xl:leading-10 md:tracking-tighter"
            >
              I&apos;m <b>Maurice Nganga</b>. A <b>Frontend Developer</b>.
              I&apos;m passionate about the web and it&apos;s infinte
              possibilities. I love contributing to{" "}
              <Link
               href={"https://github.com/moryno"}
               role="link"
               target="_blank"
               rel="noopener nonreferrer"
               aria-label="Maurice Nganga GitHub"
               className="underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                open source
              </Link>
              , sharing my developer journey on{" "}
              <Link 
               href={"https://medium.com/@mauricenganga41"}
               role="link"
               target="_blank"
               rel="noopener nonreferrer"
               aria-label="Medium website"
              className="underline underline-offset-8 decoration-1  hover:decoration-2 cursor-pointer decoration-[#73C606]">
                medium
              </Link>{" "}
              and unwinding with some{" "}
              <span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                video games
              </span>
            </motion.p>
            <motion.p
              variants={leftChildVariants}
              className="text-base sm:text-lg md:text-xl leading-relaxed xl:leading-10 tracking-tighter"
            >
              Currently, I&apos;m helping to build and shape meaningful human-centric innovations at{" "}
              <Link
                   href={"https://smartapplicationsgroup.com/"}
                   role="link"
                   target="_blank"
                   rel="noopener nonreferrer"
                   aria-label="Smart Applications company website"
               className="underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-[#73C606]">
                Smart Applications International,
              </Link> 
              {" "}
              simplifying access to healthcare and empowering people to make informed decisions about their wellbeing.
            </motion.p>
            <motion.div
              variants={leftChildVariants}
              className="flex md:items-center gap-2 text-sm text-wrap"
            >
              Previuosly:
              <Link
                   href={"https://anza.cloud/"}
                    role="link"
                    target="_blank"
                    rel="noopener nonreferrer"
                    aria-label="Anza Cloud company website"
               className="underline underline-offset-8  hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                Anza Cloud
              </Link>
              <span className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                Arity Technologies
              </span>
              <Link
                 href={"https://www.intsoftkenya.co.ke/"}
                 role="link"
                 target="_blank"
                 rel="noopener nonreferrer"
                 aria-label="IntSoft Ltd company website"
               className="underline underline-offset-8 hover:decoration-2 cursor-pointer decoration-[#73C606] font-normal">
                IntSoft (K) Ltd
              </Link>
            </motion.div>
          </motion.div>
          <div className="flex my-5 items-center gap-3">
            <Link
              href={"/contact"}
              rel="noopener nonreferrer"
              aria-label="View Contact Page"
            >
              <motion.button
                variants={bodyAnimation}
                className={`px-3 text-xs md:px-6 md:py-3 lg:px-8 lg:py-4 py-3 bg-dark rounded-full ${theme === "dark" ? "border border-[#f8f9fa]" : "border-none"} text-center md:text-sm
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
                className={`flex items-center gap-1 hover:gap-3 bg-light ${theme === "dark" ? "border-none" : "border border-[#0F1F2F]"} rounded-full md:px-6 md:py-3 lg:px-8 lg:py-4 p-3 uppercase md:text-sm text-xs font-medium tracking-wider no-underline transition-all duration-200 ease-out
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
              className="text-sm underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-sm underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="text-sm underline underline-offset-8 decoration-2  hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal"
            >
              Projects
            </Link>
          </motion.div>
        </motion.article>
        <article className="hidden md:block md:w-1/6 xl:w-2/6"></article>
      </section>
    </motion.section>
  );
};

export default Hero;
