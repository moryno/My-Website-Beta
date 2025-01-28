import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Journey from "@/components/Journey";
import Image from "next/image";

export const metadata = {
    title: "Maurice Nganga",
    description: "This is an about page for Maurice Nganga. His journey so far from retail Manager and Cashier to Software Developer.",
  };
  

const page = () => {
  return (
    <>
    <Header />
    <main>
    <h1 className="text-[80px] font-bold">About</h1>
    <section className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-5/12 h-max">
        <div className="h-[500px] relative">
                <Image
                  src="/me-bg.png"
                  alt="This is maurice profile"
                  fill
                  sizes="50vw"
                  className="object-cover rounded-md"
                />
                </div></div>
                <div className="w-full lg:w-7/12 flex flex-col gap-6">
                <h1 className="text-xl">Who am I?</h1>
                <h1 className="text-2xl font-semibold">
              I&apos;m Maurice Nganga, a Frontend Developer
            </h1>
            <p className="text-slate-600 py-5">
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

            <div className="flex gap-5 mt-3">
              <button className="font-semibold py-2 px-3 w-fit cursor-pointer rounded-3xl">
                <a href={"/"} download>
                  Download resume
                </a>
              </button>
            </div>
            </div>

    </section>
    <section className="mt-5">
    <h1 className="text-2xl font-bold">My Experience</h1>
    <Experience />
    </section>
    <section className="mt-5">
    <h1 className="text-2xl font-bold">My Journey</h1>
    <Journey />
    </section>
    </main>
    <Footer />
    </>
  )
}

export default page