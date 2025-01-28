import Image from "next/image"

const Journey = () => {
  return (
    <section className="flex flex-col gap-5">
      <article className="flex relative h-96">
        <div className="absolute left-0 -top-3 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
          <Image src="/award.jpg" alt="First runners up award" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">1st Runners Up</p>
        </div>
        <div className="absolute left-1/3 top-4 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-1 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
          <Image src="/phot.jpg" alt="Maurice at a meet up" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">At a Code Jam</p>
        </div>
        <div className="absolute right-0 -top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
          <Image src="/community.jpg" alt="Maurice first hackathon" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">Celo Kenya Community</p>
        </div>
      </article>
      <article className="flex relative h-96">
        <div className="absolute left-0 -top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-12 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
       
          <Image src="/me-mentor.jpg" alt="Maurice at Moringa mentorship training" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">Mentorship Cohort 2 Launch!</p>
        </div>
        <div className="absolute left-1/3 top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
          <Image src="/hackathon.jpg" alt="hackathon" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">Inua Sauti DAO Presentation</p>
        </div>
        <div className="absolute right-0 -top-8 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
        <Image src="/taji.jpg" alt="The taji group hackathon" className="w-full rounded-md object-cover h-72" width={300} height={300} />
          <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">1st Runners Up</p>
        </div>
      </article>
    </section>
  )
}

export default Journey