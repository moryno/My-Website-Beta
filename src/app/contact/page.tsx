"use client";

import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import Socials from "@/components/Socials";
import AnimatedWords from "../animations/AnimatedWords";
import AnimatedBody from "../animations/AnimatedBody";
import ContactForm from "@/components/ContactForm";


const page = () => {
   

  return (
    <motion.section initial="initial" animate="animate" className="mt-10 mb-32">
      <PageTitle title={"Let's Work Together"} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-10">
        <div className="flex flex-col gap-5">
          <AnimatedWords
            title={"Let's Talk"}
            style={"text-3xl md:text-5xl font-bold tracking-tighter"}
          />
          <AnimatedBody
            text={`I'd love to hear from you no matter what. I am open to
            employment opportunities, collaborative projects, and more. I am
            excited to meet new people in the space and grow as a developer.`}
            className={"text-balance leading-8 xl:leading-10 text-base xl:text-lg"}
          />
          <AnimatedWords
            title={"Connect with me"}
            style={"text-3xl md:text-5xl font-bold tracking-tighter"}
          />
          <AnimatedBody
            text={`Feel fee to connect with me on any the platforms below!`}
            className={"leading-8 xl:leading-10 text-base xl:text-lg"}
          />
          <Socials />
        </div>
        <motion.div  
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}>
          <ContactForm />
        </motion.div>
      </section>
    </motion.section>
  );
};

export default page;
