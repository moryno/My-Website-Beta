"use client"

import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"

const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <div onClick={toggle} className={`w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between relative ${theme === "dark" ? "bg-light" : "bg-dark"}`}>
        <Image src="/moon.png" alt="This is moon icon" width={16} height={16} />
        <div className={`absolute w-4 h-4 rounded-full ${theme === "dark" ? "left-1 bg-dark" : "right-1 bg-light"}`} />
        <Image src="/sun.png" alt="This is sun icon" width={16} height={16} />
    </div>
  )
}

export default ToggleTheme