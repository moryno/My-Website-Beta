"use client";

import { motion } from "framer-motion";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedWords from "../animations/AnimatedWords";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { imageAnimation } from "../animations/animations";

const page = () => {
  return (
    <>
      <PageTitle title={"About"} />
      <motion.section
        initial="initial"
        animate="animate"
      >
      <section
        className="flex mt-5 flex-col md:flex-row gap-8 md:gap-4 lg:gap-16"
      >
        <div className="w-full md:w-5/12">
          <motion.div className="h-80 sm:h-[540px] relative" variants={imageAnimation}>
            <Image
              src="/me-bg.png"
              alt="This is maurice profile"
              priority
              fill
              className="object-cover aspect-square w-full h-full md:rounded-full"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col gap-5">
          <AnimatedWords title="Who am I?" style={"text-xl text-greenDark"} />
          <AnimatedTitle
            text={`I'm Maurice Nganga, a Frontend Developer.`}
            wordSpace="mr-[0.25em]"
            charSpace="-mr-[0.01em]"
            className="text-2xl tracking-wide"
          />

          <AnimatedBody
            className="text-sm md:text-base leading-8"
            text={`I help transform visions and ideas into meaningful and useful software products that make a real impact.`}
          />
          <AnimatedBody
            className="text-sm md:text-base leading-8"
            text={`Currently, I'm helping to build and shape meaningful human-centric innovations at Smart Applications International, simplifying access to healthcare and empowering people to make informed decisions about their wellbeing.`}
          />
          <AnimatedBody
            className="text-sm md:text-base leading-8"
            text={
              "Proficient in JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Node.js and more. I bring strong problem-solving skills, a keen eye for user experience, collaboration, and project management capabilities."
            }
          />
          <AnimatedBody
            className="text-sm md:text-base leading-8"
            text={
              "Before web development, I worked as a manager and cashier at a retail shop selling movies and electronics. This experience honed my customer experience, communication, and adaptability skills, which I now integrate into my development work to build intuitive and user-centric applications."
            }
          />
          <Link
            className="font-medium text-lg flex items-center transition-colors duration-200 text-greenDark group hover:underline underline-offset-8"
            href={"./Maurice_Nganga_Resume.pdf"}
            role="button"
            target="_blank"
            rel="noopener nonreferrer"
            aria-label="Download My Resume"
            download
          >
            <span>View my resume</span>{" "}
            <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
      <section className="mt-10 px-2 sm:p-5 md:p-0">
        <AnimatedWords
          title={"My Experience"}
          style={"text-2xl md:text-4xl font-bold tracking-tighter"}
        />
        <Experience />
      </section>
      <section className="mt-10 px-2 sm:p-5 md:p-0">
        <AnimatedWords
          title={"My Journey"}
          style={"text-2xl md:text-4xl font-bold tracking-tighter"}
        />
        <Journey />
      </section>
      </motion.section>
    </>
  );
};

export default page;
