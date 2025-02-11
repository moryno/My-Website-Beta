"use client"

import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter();

  return (
    <div className="flex justify-start">
    <button
      className={`sm:text-sm cursor-pointer bg-greenLight hover:bg-greenDark text-dark font-bold py-2 px-4 rounded flex items-center`}
      onClick={() => router.back()}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
      </svg>{" "}
      &nbsp; Back
    </button>
  </div> 
  )
}

export default BackButton