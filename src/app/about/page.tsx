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
        className="flex mt-5 flex-col lg:flex-row gap-16"
      >
        <div className="w-full lg:w-5/12">
          <motion.div className="h-[540px] relative" variants={imageAnimation}>
            <Image
              src="/me-bg.png"
              alt="This is maurice profile"
              priority
              fill
              className="object-cover w-[150px] md:w-[200px] lg:w-[245px] rounded-full"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-7/12 flex flex-col gap-5">
          <AnimatedWords title="Who am I?" style={"text-xl text-greenDark"} />
          <AnimatedTitle
            text={`I'm Maurice Nganga, a Frontend Developer.`}
            wordSpace="mr-[0.25em]"
            charSpace="-mr-[0.01em]"
            className="text-2xl tracking-wide"
          />

          <AnimatedBody
            text={`I am a software developer based in Nairobi, Kenya, specializing in creating amazing solutions for web applications. I help transform visions and ideas into meaningful and useful software products that make a real impact.`}
          />
          <AnimatedBody
            text={`Currently, I'm helping to build and shape meaningful human-centric innovations at Smart Applications International, simplifying access to healthcare and empowering people to make informed decisions about their wellbeing.`}
          />
          <AnimatedBody
            text={
              "Beyond my professional work, I build side projects to explore new technologies and share my learnings with others. I also write blogs on Medium, focusing on creative coding and fun ways to build for the web."
            }
          />
          <AnimatedBody
            text={
              "Proficient in JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Node.js and more. I bring strong problem-solving skills, a keen eye for user experience, collaboration, and project management capabilities."
            }
          />
          <AnimatedBody
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
      <section className="mt-10">
        <AnimatedWords
          title={"My Experience"}
          style={"text-4xl font-bold tracking-tighter"}
        />
        <Experience />
      </section>
      <section className="mt-10">
        <AnimatedWords
          title={"My Journey"}
          style={"text-4xl font-bold tracking-tighter"}
        />
        <Journey />
      </section>
      </motion.section>
    </>
  );
};

export default page;
