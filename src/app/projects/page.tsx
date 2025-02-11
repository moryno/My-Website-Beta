import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project';
import { projectsData } from "@/utils/data/projects-data"

export type ProjectDataType = {
  id: string;
  title: string;
  description: string;
  content: string;
  technologies: string[];
  images: string[];
  githubLink: string;
  demoLink: string;
};

const page = () => {
  return (
    <>
        <PageTitle title='Useless is not worthless' subTitle='Here&apos;s a collection of side projects. Most of them don&apos;t have any other purpose than exploring the field of interactive web development using web technologies.' />
        <section className='flex gap-5 flex-wrap mt-5'>
          { projectsData.map((project : ProjectDataType) => <Project key={project.id} project={project} />)}
        </section>

</>
  )
}

export default page