"use client"

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import xss from "xss";

const Content = ({ content } : { content: string}) => {
    const { theme } = useContext(ThemeContext);

  return (
    <div    
       className={`prose sm:prose-base lg:prose-lg sm:px-0 md:px-0 min-w-full lg:px-0 leading-relaxed ${
        theme === "dark"
          ? "prose-dark bg-dark text-dark"
          : "bg-light text-light"
      }`}
      dangerouslySetInnerHTML={{
        __html: xss(content),
      }}
       />
  )
}

export default Content