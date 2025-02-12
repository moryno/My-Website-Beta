import { motion } from "framer-motion"
import { experiences } from "@/utils/data/experience"

interface IExperience{
    year: string,
    role: string,
    company: string,
    description: string,
    technologies: string[],
}

const Experience = () => {
  return (
    <div>
    {experiences.map((experience: IExperience,  index: number) => (
        <div key={index} className="my-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
            >
                <p className="mb-2 text-sm">
                    {experience.year}
                </p>
            </motion.div>
            <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
               className="w-full lg:w-3/4">
                <h3 className="mb-2 font-semibold">
                    {experience.role} -{" "}
                    <span className="text-sm">
                        {experience.company}
                    </span>
                </h3>
                <p className="mb-4 opacity-90 text-sm leading-8">
                    {experience.description}
                </p>
                {experience.technologies.map((tech: string, index: number) => (
                    <span className={`mr-2 mb-2 mt-4 rounded bg-cardDark px-2 py-1 text-xs sm:text-sm font-medium text-dark`} key={index}>
                        { tech }
                    </span>
                ))}
            </motion.div>
        </div>              
    ))}
</div>
  )
}

export default Experience