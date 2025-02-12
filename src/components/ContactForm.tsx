"use client";

import { FormEvent, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "@/context/ThemeContext";
import { TbMailForward } from "react-icons/tb";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm(
        // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        // formRef.current!,
        // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        "service_skvzar1",
        "template_2ox9rmi",
        formRef.current!,
        "2zKK-EKLfrPe0NirY"
      )
      .then(
        () => {
          setSuccess(true);
          setIsLoading(false);
          setTimeout(() => setSuccess(false), 5000);
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
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
        name="message"
        rows={3}
        placeholder="Message..."
        maxLength={500}
        required
      ></textarea>

      <button
        className={`w-max text-xs md:px-6 md:py-3 xl:px-8 xl:py-4 p-3 bg-dark rounded-full ${
          theme === "dark" ? "border border-[#f8f9fa]" : "border-none"
        }-none text-center md:text-sm font-medium uppercase tracking-wider text-dark no-underline transition-all duration-200
          ease-out md:font-semibold flex self-end items-center gap-1 hover:gap-3`}
        disabled={isLoading}
      >
        <span>Contact Me</span>
        <TbMailForward size={16} />
      </button>

      {success && (
        <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
          Mail sent. Thank you.
        </span>
      )}
      {error && (
        <span className=" text-red-500 p-3 ring-1 rounded-md ring-red-500 w-fit">
          Failed to send email.
        </span>
      )}
    </form>
  );
};

export default ContactForm;
