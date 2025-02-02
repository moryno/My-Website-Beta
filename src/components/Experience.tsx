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
            <div className="w-full lg:w-1/4"
                // whileInView={{ opacity: 1, x: 0 }}
                // initial={{ opacity: 0, x: -100 }}
                // transition={{ duration: 1 }}
            >
                <p className="mb-2 text-sm text-stone-400">
                    {experience.year}
                </p>
            </div>
            <div 
            //    whileInView={{ opacity: 1, x: 0 }}
            //    initial={{ opacity: 0, x: 100 }}
            //    transition={{ duration: 1 }}
               className="w-full max-w-3xl">
                <h3 className="mb-2 font-semibold">
                    {experience.role} -{" "}
                    <span className="text-sm text-stone-500">
                        {experience.company}
                    </span>
                </h3>
                <p className="mb-4 text-stone-400">
                    {experience.description}
                </p>
                {experience.technologies.map((tech: string, index: number) => (
                    <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" key={index}>
                        { tech }
                    </span>
                ))}
            </div>
        </div>              
    ))}
</div>
  )
}

export default Experience