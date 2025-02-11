"use client";

import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedTitle from "@/app/animations/AnimatedTitle";
import AnimatedBody from "@/app/animations/AnimatedBody";
import { riseWithFade } from "@/app/animations/animations";
import { BlogType } from "@/app/blogs/page";
import moment from "moment";
import { extractParagraphs } from "@/helper/common";

const Blog = ({ blog }: { blog: BlogType }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Link
      href={`/blogs/${blog.title}`}
      className={`${
        theme === "dark" ? "bg-cardDark" : "bg-cardLight"
      } w-full md:w-[48%] shadow-2xl rounded-lg p-5 group`}
    >
      <motion.div ref={ref} initial="initial" animate="animate">
        <AnimatedTitle
          text={blog.title}
          wordSpace="mr-[0.25em]"
          charSpace="-mr-[0.01em]"
          className="text-2xl font-semibold uppercase tracking-tight"
        />
        <AnimatedBody
          text={moment(blog.created).format("ddd MMM DD YYYY")}
          wordSpace="mr-[0.25em]"
          charSpace="-mr-[0.01em]"
          className={`mt-3 mb-5 text-sm font-bold ${
            theme === "dark" ? "text-greenDark" : "text-greenLight"
          }`}
        />
        <div className="flex flex-col relative">
          <AnimatedBody
            text={extractParagraphs(blog.content).slice(0, 200) + "..."}
            wordSpace="mr-[0.25em]"
            charSpace="-mr-[0.01em]"
            className="text-lg font-normal leading-10 tracking-wider text-ellipsis line-clamp-4"
          />
        </div>
        <motion.span
          variants={riseWithFade}
          className="font-medium flex items-center justify-end transition-colors duration-200 group-hover:text-greenDark mt-8"
        >
          <span>Read More</span>{" "}
          <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" />
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Blog;
