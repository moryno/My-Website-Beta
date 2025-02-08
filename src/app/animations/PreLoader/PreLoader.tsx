"use client";

import { useEffect } from "react";
import {preLoaderAnim  } from "./loader.js"
import "./preloader.css"

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, []);

  return (
    <div className="preloader">
        <div className="texts-container opacity-0 w-[500px] flex h-60 items-center justify-center gap-[5px] overflow-hidden text-sm font-semibold sm:gap-[10px] sm:text-base md:text-lg lg:text-xl">
            <span>Developer.</span>
            <span>Writer.</span>
            <span>Mentor.</span>
            <div className="sub hidden" />
        </div>
    </div>
  )
}

export default PreLoader