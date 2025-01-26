import Footer from '@/components/Footer';
import  Header  from '@/components/Header'
import Project from '@/components/Project';

export const metadata = {
    title: "Maurice Projects",
    description: "Browse the projects I designed and developed for experiment, research and opinion.",
  };
  

const page = () => {
  return (
    <>
    <Header />
    <main>
        <div>
            <h1 className="text-[80px] font-bold">Useless is not worthless</h1>
            <h2 className='text-xl tracking-tighter leading-10'>Here&apos;s a collection of side projects. Most of them don&apos;t have any other purpose than exploring the field of human-computer interaction using web technologies.</h2>
        </div>
        <section className='flex gap-5 flex-wrap mt-5'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        </section>
    </main>
    <Footer />
</>
  )
}

export default page