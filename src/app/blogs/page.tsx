import Blog from '@/components/Blog';
import PageTitle from '@/components/PageTitle';

const page = () => {
  return (
    <>
            <PageTitle title="Blog Posts" subTitle="Write-ups about my projects and research" />

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