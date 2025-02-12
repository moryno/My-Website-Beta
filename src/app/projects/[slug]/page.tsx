import { projectsData } from '@/utils/data/projects-data';
import { ProjectDataType } from '../page';
import SinglePage from './SinglePage';
import { ParamsType } from '@/app/blogs/[slug]/page';


const page = async ({ params }: { params : ParamsType }) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
      const project = projectsData.find((project: ProjectDataType) => project.id === decodedSlug);

      if (!project) {
        return <div>Project not found</div>;
      }

  return (
    <>
     <SinglePage project={project} />
    </>
  )
}

export default page