import Blog from '@/components/Blog';

const page = () => {
  return (
    <>
            <div>
                <h1 className="text-[80px] font-bold tracking-tight">Blog Posts</h1>
                <h2 className='text-3xl font-semibold tracking-tight leading-10'>Write-ups about my projects and research</h2>
            </div>
            <section className='flex gap-5 flex-wrap mt-10'>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            </section>

    </>
  )
}

export default page