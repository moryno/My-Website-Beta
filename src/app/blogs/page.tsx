import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header'

export const metadata = {
    title: "Blog Posts",
    description: "Browse the blog post I wrote from experiment, research and opinion.",
  };
  

const page = () => {
  return (
    <>
        <Header />
        <main>
            <div>
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <h2 className='text-xl tracking-tighter leading-10'>Write-ups about my projects and research</h2>
            </div>
            <section className='flex gap-5 flex-wrap mt-5'>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            </section>
        </main>
        <Footer />
    </>
  )
}

export default page