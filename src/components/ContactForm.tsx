"use client"

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { TbMailForward } from "react-icons/tb";

const ContactForm = () => {
    const { theme } = useContext(ThemeContext);
  return (
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

            <button
              className={`px-3 w-max text-xs md:px-8 py-3 md:py-4 bg-dark rounded-full ${theme === "dark" ? "border border-[#f8f9fa]" : "border-none"}-none text-center md:text-sm
                                font-medium uppercase tracking-wider text-dark no-underline transition-all duration-200
                                ease-out md:font-semibold flex self-end items-center gap-1 hover:gap-3`}
            >
              <span>Contact Me</span>
              <TbMailForward size={16} />
            </button>

            {/* {success && (
                                <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
                                Mail sent. Thank you.
                                </span>
                            )} */}
          </form>
  )
}

export default ContactForm