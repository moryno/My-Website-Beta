import Blog from '@/components/Blog';
import PageTitle from '@/components/PageTitle';

export type BlogType = {
  author: string;
  content: string;
  created: number;
  link: string;
  title: string
}

export async function getBlogs() {
  const res = await fetch(`https://v1.nocodeapi.com/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}/medium/PHtfQEsSFTiKhnUV`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data || [];
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