import Blog from '@/components/Blog';
import PageTitle from '@/components/PageTitle';
import { getBlogs } from '@/lib/actions';

export type BlogType = {
  author: string;
  content: string;
  created: number;
  link: string;
  title: string
}


const page = async () => {
  const blogs = await getBlogs();
  
  return (
    <>
            <PageTitle title="Blog Posts" subTitle="Write-ups about my projects and research" />
            <section className='flex gap-5 flex-wrap mt-5 sm:mt-10'>
              { blogs.map((blog : BlogType) => <Blog key={blog.title} blog={blog} />)}
            </section>

    </>
  )
}

export default page