import moment from 'moment';
import { BlogType, getBlogs } from '../page'
import Content from "./Content";
import PageTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';

export type ParamsType = Promise< { slug: string}>;

const page = async ({ params } : { params : ParamsType}) => {
    const blogs = await getBlogs();
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const blog = blogs.find((blog: BlogType) => blog.title === decodedSlug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="min-h-screen">
        <div className="mx-auto md:px-6 md:py-12">
          <PageTitle title={blog.title} />
          <p className="text-sm text-greenDark my-6">
            { moment(blog.published).format("MMM Do, YYYY") }
          </p>
          <Content content={blog.content} />
        </div>
       <BackButton />
    </main>
   
  )
}

export default page