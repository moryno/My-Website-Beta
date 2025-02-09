import AnimatedBody from "@/app/animations/AnimatedBody";
import Image from "next/image";

const Journey = () => {
  return (
    <section className="mt-20">
      <section className="flex flex-col gap-5 ">
        <article className="flex relative h-96">
          <div className="absolute left-0 -top-3 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/award.jpg"
              alt="First runners up award"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              1st Runners Up
            </p>
          </div>
          <div className="absolute left-1/3 top-4 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-1 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/phot.jpg"
              alt="Maurice at a meet up"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              At a Code Jam
            </p>
          </div>
          <div className="absolute right-0 -top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/community.jpg"
              alt="Maurice first hackathon"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              Celo Kenya Community
            </p>
          </div>
        </article>
        <article className="flex relative h-96">
          <div className="absolute left-0 -top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-12 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/me-mentor.jpg"
              alt="Maurice at Moringa mentorship training"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              Mentorship Cohort 2 Launch!
            </p>
          </div>
          <div className="absolute left-1/3 top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/hackathon.jpg"
              alt="hackathon"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              Inua Sauti DAO Presentation
            </p>
          </div>
          <div className="absolute right-0 -top-8 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/taji.jpg"
              alt="The taji group hackathon"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              1st Runners Up
            </p>
          </div>
        </article>
      </section>
      <section className="py-20 flex flex-col gap-5">
       <AnimatedBody
          text={`As previously mentioned, my first career was as a manager and cashier at a retail shop, a role I held for over six years. I started the shop after being unable to continue my studies in Electrical and Electronics Engineering at Kenyatta University due to financial constraints. During my time at the shop, I played a pivotal role in its expansion, contributing to the launch of an additional electronics and movie stores.`}
         className={"text-lg leading-8"}
          />
          <AnimatedBody
          text={`In late 2020, I decided to start studying programming for a career change. However, this decision came with its own set of challenges. As a self-taught developer, I struggled with the lack of structure and consistency, especially with the uncertainties brought by the COVID-19 pandemic and the high demands of my job. My progress was slow, but I remained determined.`}
         className={"text-lg leading-8"}
          />
          <AnimatedBody
          text={`The breakthrough came when I was awarded a MasterCard Foundation scholarship to study software engineering at Moringa School, an opportunity that gave me the structure, community, and collaborative environment I needed to thrive.`}
         className={"text-lg leading-8"}
          />
          <AnimatedBody
          text={`I participated in dozens of hackathons, with one of the highlights being when my team came in as 1st runners-up at the Celo Foundation and Ushahidi Hackathon. Through these events, I connected with developer communities in Nairobi, which played a huge role in my career growth.`}
         className={"text-lg leading-8"}
          />
          <article className="flex relative h-96 my-20">
          <div className="absolute left-0 -top-3 p-5 bg-white shadow-lg rounded-md w-1/3 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/moringa.jpg"
              alt="Project presentation at Moringa"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              Project Presentation
            </p>
          </div>
          <div className="absolute left-1/3 top-4 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-1 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/meet.jpg"
              alt="Maurice at a meet up"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              At a Meetup
            </p>
          </div>
          <div className="absolute right-0 -top-6 p-5 bg-white shadow-lg rounded-md w-1/3 transform rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10">
            <Image
              src="/present.jpg"
              alt="Maurice first hackathon"
              className="w-full rounded-md object-cover h-72"
              width={300}
              height={300}
            />
            <p className="my-3 p-2 text-lg flex items-center justify-center font-[Papyrus] font-bold">
              Product Pitch
            </p>
          </div>
        </article>
        <AnimatedBody
          text={`My first break as a developer came while I was still at Moringa, I landed an internship at Anza Cloud, my first experience working with a startup on diverse products. Following this, I landed a three-month remote contract with Arity Technologies in India, where I gained valuable experience in a fully remote setting.`}
         className={"text-lg leading-8"}
          />
        <AnimatedBody
          text={`After that, I secured my first full-time role as a Full Stack Developer at IntSoft (K) Limited. Being a fast-paced startup, I had to wear multiple hats working on frontend, backend, and DevOps. This was the most intense and transformative period of my career so far, teaching me the importance of collaboration, rapid development cycles, and adaptability.`}
         className={"text-lg leading-8"}
          />
        <AnimatedBody
          text={`This role was a highlight of my career so far, as it allowed me to learn a wide range of technologies, including C#, .NET, Azure Cloud, Kubernetes, Docker, and Micro Frontend Architecture. It was here that I discovered my passion for blending creativity with programming, as I got to flex my creative muscles through design choices while building robust systems something I’ve always been deeply interested in.`}
         className={"text-lg leading-8"}
          />
        <AnimatedBody
          text={`Looking back, I’m grateful for every twist and turn in my journey. Each experience has shaped me into the developer I am today, and I’m excited to continue growing and making an impact in the tech world.`}
         className={"text-lg leading-8"}
          />
        <AnimatedBody
          text={`In 2024, I decided to give back to the community by taking on a volunteer mentorship role at Moringa School. It’s a three-month program, and I have continued to mentor every cohort since then. What drives me is knowing how challenging and demanding it can be to break into the tech industry. Having experienced the struggles firsthand, I want to offer guidance and support to aspiring developers, helping them navigate their learning journey and career growth.`}
         className={"text-lg leading-8"}
          />
      </section>
    </section>
  );
};

export default Journey;
