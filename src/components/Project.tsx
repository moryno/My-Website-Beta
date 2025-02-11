"use client"

import React, { useContext, useRef } from 'react'

import { motion } from "framer-motion"
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import AnimatedTitle from '@/app/animations/AnimatedTitle'
import AnimatedBody from '@/app/animations/AnimatedBody'
import { riseWithFade } from '@/app/animations/animations'
import { ProjectDataType } from '@/app/projects/page'

const Project = ({ project } : { project : ProjectDataType }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);
  const technologies = ["TypeScript", "React", "Tailwind", "Nodejs", "MongoDB"];

  return (
    <Link href={`/projects/${project.id}`}  className={`${theme === "dark" ? "bg-cardDark" : "bg-cardLight"} w-full md:w-[48%] xl:w-[32%] shadow-xl rounded-lg overflow-hidden group`}>
        <motion.div 
          ref={ref}
          initial="initial"
          animate="animate"
        >
        <Image src={project.images[0] || "/placeholder.png" } priority alt={project.title} width={200} height={250} className='w-full h-[30vh] aspect-square' />
        <div className='px-3 pt-2 pb-5'>
          <AnimatedTitle
           text={project.title}
           wordSpace='mr-[0.25em]'
           charSpace='-mr-[0.01em]'
           className="text-2xl font-semibold uppercase tracking-tight"
           />
        <div className='w-full flex flex-wrap gap-2 my-2'>
          {
           technologies.map((tech, i) => (
            <span key={i} className={`w-fit px-2 py-1 bg-greenLight text-dark rounded-sm`}>
               <AnimatedTitle 
                text={tech}
                wordSpace='mr-[0.25em]'
                charSpace='-mr-[0.01em]'
                className="text-xs font-medium"
             />
            </span>
           ))
          }
          </div>
       <div className="flex flex-col my-2">
        <AnimatedBody
          text={project.description}
          className="text-base tracking-wide leading-8 text-ellipsis line-clamp-3"
         />
       <motion.span variants={riseWithFade} className="font-medium flex items-center justify-end transition-colors duration-200 group-hover:text-greenDark mt-8"><span>Read More</span> <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" /></motion.span>
       </div>
        </div>

        </motion.div>
</Link>
  )
}

export default Project