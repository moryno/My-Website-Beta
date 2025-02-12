"use client"

import AnimatedBody from "@/app/animations/AnimatedBody";
import AnimatedTitle from "@/app/animations/AnimatedTitle"
import { motion } from "framer-motion"
import { useRef } from "react";

type PageTitleProps = {
    title: string;
    subTitle?: string;
    wordSpace?: string;
    charSpace?: string;
}

const PageTitle = ({
    title,
    subTitle
} : PageTitleProps) => {
    const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} initial="inital" animate="animate">
        <AnimatedTitle
                   text={title}
                   wordSpace='mr-[0.25em]'
                   charSpace='-mr-[0.01em]'
                   className="text-[clamp(2.59rem,2.22rem+1.87vw,3.55rem)] font-extrabold tracking-tight"
                   />
            { subTitle && 
            <AnimatedBody text={subTitle} className="text-lg sm:text-xl tracking-tighter leading-8 sm:leading-10" />}
        </motion.div>
  )
}

export default PageTitle