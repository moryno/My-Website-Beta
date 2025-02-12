import moment from 'moment';
import { BlogType, getBlogs } from '../page'
import Content from "./Content";
import PageTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';

const page = async ({ params } : { params : { slug: string}}) => {
    const blogs = await getBlogs();
    const decodedSlug = decodeURIComponent(params.slug);
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