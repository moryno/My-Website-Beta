import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project';

const page = () => {
  return (
    <>
        <PageTitle title='Useless is not worthless' subTitle='Here&apos;s a collection of side projects. Most of them don&apos;t have any other purpose than exploring the field of human-computer interaction using web technologies.' />
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