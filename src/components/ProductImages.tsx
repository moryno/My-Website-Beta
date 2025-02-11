"use client"

import Image from "next/image";
import { useState } from "react";


const ProductImages = ({ images } : { images : string[]}) => {
    const [index, setIndex] = useState(0);

  return (
    <div>
        <div className="h-[500px] relative">
        <Image
          src={images[index]}
          alt="This is a prodcuct cover"
          fill
          sizes="50vw"
          className="aspect-square rounded-md shadow-md"
        />
        </div>
        <div className="flex justify-between gap-4 mt-5 overflow-hidden">
        {images.map((item, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-5 cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item}
              alt="This is product images"
              fill
              sizes="30vw"
              className="aspect-auto rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages