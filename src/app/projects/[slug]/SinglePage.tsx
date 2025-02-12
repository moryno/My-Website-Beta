"use client";

import BackButton from '@/components/BackButton'
import ProductImages from '@/components/ProductImages'
import React from 'react'
import { ProjectDataType } from '../page';
import AnimatedWords from '@/app/animations/AnimatedWords';
import AnimatedTitle from '@/app/animations/AnimatedTitle';
import Content from '@/app/blogs/[slug]/Content';
import Link from 'next/link';

const SinglePage = ({ project } : { project : ProjectDataType }) => {
  return (
    <>
    <section className="flex flex-col lg:flex-row gap-5 lg:gap-16">
       <section className="w-full lg:w-1/2 h-max lg:sticky lg:top-5">
       <ProductImages images={ project.images } />
       <hr className="mt-10" />
       <div className="mt-2">
        <p>Technologies:</p>
        <div className='w-full flex flex-wrap gap-2 my-2'>
           {
                    project.technologies.map((tech, i) => (
                      <span key={i} className={`w-fit px-2 py-[6px] bg-greenLight text-dark rounded-sm`}>
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
          <div className="flex items-center gap-5 mt-5">
        <Link  href={project.githubLink}
              role="link"
              target="_blank"
              rel="noopener nonreferrer"
              aria-label="Project Repo Link"
             className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">GitHub</Link>
        {project.demoLink &&
        <Link 
        href={project.demoLink}
              role="link"
              target="_blank"
              rel="noopener nonreferrer"
              aria-label="Project Demo Link"
        className="underline underline-offset-8 hover:decoration-4 cursor-pointer decoration-[#73C606] font-normal">Demo Link</Link>
        }
      </div>
       </div>
       </section>
       <section className="w-full lg:w-1/2 flex flex-col gap-6">
       <AnimatedWords
            title={project.title}
            style={"text-4xl font-medium"}
          />
       <Content content={project.content} />
      
       </section>
    </section>
       <div className='flex justify-end mt-5'>
       <BackButton />
       </div>
      
    </>
  )
}

export default SinglePage