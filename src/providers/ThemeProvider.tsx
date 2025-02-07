"use client"

import { ReactNode, useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeProvider = ({ children } : { children : ReactNode}) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if(mounted) return (
    <div className={theme}>{ children }</div>
  )
}

export default ThemeProvider