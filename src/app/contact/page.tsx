import Socials from "@/components/Socials"
import { TbMailForward } from "react-icons/tb"

const page = () => {
  return (
    <section className="mt-10 mb-32">
    <h1 className="text-[clamp(2.59rem,2.22rem+1.87vw,3.55rem)] font-extrabold mb-10">Let&apos;s Work Together</h1>
     <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-10">
        <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold tracking-tighter">Let&apos;s Talk</h1>
            <p className="text-balance leading-relaxed xl:leading-10 text-lg">I&apos;d love to hear from you no matter what. I am open to employment opportunities, collaborative projects, and more. I am excited to meet new people in the space and grow as a developer.</p>
            <h2 className="text-5xl font-bold tracking-tighter">Connect with me</h2>
            <p className="leading-relaxed xl:leading-10 text-lg">Feel fee to connect with me on any the platforms below!</p>
            <Socials />
        </div>
        <div>
        <form
                            // ref={formRef}
                            // onSubmit={handleSubmit}
                            className="flex flex-col gap-4 mt-5"
                            >
                            <input
                                className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="text"
                                name="user_name"
                                placeholder="Full Name"
                                maxLength={100}
                                required
                            />
                            <input
                                 className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                maxLength={100}
                                required
                            />

                            <input
                                 className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="text"
                                name="user_subject"
                                placeholder="Subject"
                                maxLength={100}
                                required
                            />
                            <textarea
                                className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                // cols={30}
                                name="message"
                                rows={3}
                                placeholder="Message..."
                                maxLength={500}
                                required
                            ></textarea>
                       
      
                            <button className="px-3 w-max text-xs md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm
                                font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200
                                ease-out md:font-semibold flex self-end items-center gap-1 hover:gap-3">
                                <span>Contact Me</span>
                                <TbMailForward size={16} />
                            </button>

                     
                            {/* {success && (
                                <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
                                Mail sent. Thank you.
                                </span>
                            )} */}
                        </form>
        </div>
     </section>
    </section>
  )
}

export default page