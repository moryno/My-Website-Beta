import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col lg:flex-row gap-16">
       <section className="w-full lg:w-1/2 h-max">
       <ProductImages />
       </section>
       <section className="w-full lg:w-1/2 flex flex-col gap-6">
       <h1 className='text-4xl font-medium'>Hacking cars in JavaScript</h1>
       <p className="text-gray-500">
       Welcome to the world of Redux! If you’re just starting out with state management or seeking clarity on Redux’s role in React applications, fear not — you’re in the perfect spot. I’m no Redux guru myself; I’m simply someone who’s recently grasped the basic structure of Redux and is eager to share the experience with you. In this blog post, we’ll walk through building a straightforward counter app using React, Redux, and NextJS 14. By the time we wrap up, you’ll learn the basic fundamentals of Redux, understand its integration within NextJS projects for scalable solutions, and also get to grips with setting up a project directory that meets industry standards.
       Welcome to the world of Redux! If you’re just starting out with state management or seeking clarity on Redux’s role in React applications, fear not — you’re in the perfect spot. I’m no Redux guru myself; I’m simply someone who’s recently grasped the basic structure of Redux and is eager to share the experience with you. In this blog post, we’ll walk through building a straightforward counter app using React, Redux, and NextJS 14. By the time we wrap up, you’ll learn the basic fundamentals of Redux, understand its integration within NextJS projects for scalable solutions, and also get to grips with setting up a project directory that meets industry standards.
       Welcome to the world of Redux! If you’re just starting out with state management or seeking clarity on Redux’s role in React applications, fear not — you’re in the perfect spot. I’m no Redux guru myself; I’m simply someone who’s recently grasped the basic structure of Redux and is eager to share the experience with you. In this blog post, we’ll walk through building a straightforward counter app using React, Redux, and NextJS 14. By the time we wrap up, you’ll learn the basic fundamentals of Redux, understand its integration within NextJS projects for scalable solutions, and also get to grips with setting up a project directory that meets industry standards.
       
       </p>
       <hr />
       <div>
        <p>Technologies:</p>
        <div className='w-full flex flex-wrap gap-2 my-2'>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>TypeScript</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>React</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Tailwind</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>Nodejs</span>
          <span className='w-fit px-2 py-1 bg-red-100 rounded-sm text-xs font-medium'>MongoDB</span>
          </div>
          <div className="flex items-center gap-5">
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">GitHub</span>
        <span className="underline underline-offset-8 hover:bg-red-100 hover:decoration-4 cursor-pointer decoration-pink-500 font-normal">Website</span>
      </div>
       </div>
       </section>
    </main>
    <Footer />
    </>
  )
}

export default page