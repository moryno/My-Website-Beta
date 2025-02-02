import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (

    <>
    <h1 className="text-[80px] font-bold tracking-tight">About</h1>
    <section className="flex mt-5 flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-5/12 h-max">
        <div className="h-[500px] relative">
                <Image
                  src="/me-bg.png"
                  alt="This is maurice profile"
                  fill
                  sizes="50vw"
                  className="object-cover rounded-md"
                />
                </div>
              </div>
                <div className="w-full lg:w-7/12 flex flex-col gap-5">
                <h1 className="text-xl text-textCol">Who am I?</h1>
                <h1 className="text-2xl  tracking-wide">
                I&apos;m <b>Maurice Nganga</b>, a <b>Frontend Developer</b>.
            </h1>
            <p className="text-slate-600">
              I am a software developer based in Nairobi Kenya,and I create
              amazing solutions for Web applications. I help convert a vision
              and an idea into meaningful and useful software products. Having
              the ability to transform requirements into useful software helps
              me prioritize tasks, iterate fast and deliver faster. Take a look
              at my portfolio work and lets see if we can work together on your
              next project.
            </p>
            <p className="text-slate-600">
            Proficient in JavaScript, TypeScript, React, NextJS, Astro, Tailwind CSS, and more, I bring transferable skills in project management, problem-solving, and much more.
            </p>
                <Link className="font-medium text-lg flex items-center transition-colors duration-200 text-textCol group" href={"/"} download>
                  <span>View my resume</span> <FaArrowRightLong className="ml-1 transition-transform duration-200 group-hover:translate-x-2" />
                </Link>

            </div>

    </section>
    <section className="mt-5">
    <h1 className="text-4xl font-bold tracking-tighter">My Experience</h1>
    <Experience />
    </section>
    <section className="mt-5">
    <h1 className="text-4xl font-bold tracking-tighter">My Journey</h1>
    <Journey />
    </section>
    </>
  )
}

export default page