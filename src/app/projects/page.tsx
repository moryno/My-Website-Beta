import Project from '@/components/Project';

const page = () => {
  return (
    <>
        <div>
            <h1 className="text-[clamp(2.59rem,2.22rem+1.87vw,3.55rem)] font-extrabold tracking-tight">Useless is not worthless</h1>
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

</>
  )
}

export default page