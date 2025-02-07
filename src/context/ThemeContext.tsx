"use client";

import { createContext, ReactNode, useEffect, useState } from "react";


type contextType = {
    theme: string;
    toggle: () => void;
}
const defaultContext: contextType = {
    theme: "dark",
    toggle: () => {}
}

export const ThemeContext = createContext<contextType>(defaultContext);

const getTheme = () => {
    if(typeof window !== undefined){
    const value = localStorage.getItem("theme") 
    return value || "dark"
    }
    return "dark";

}

export const ThemeContextProvider = ({ children } : { children: ReactNode}) => {
    const [theme, setTheme] = useState(() => getTheme());

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);

        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);

    }, [theme])
    
    return <ThemeContext.Provider value={{ theme, toggle }}>{ children }</ThemeContext.Provider>
}