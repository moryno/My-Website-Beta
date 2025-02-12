"use client"

import { useState } from "react";
import Image from "next/image";

import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const ProductImages = ({ images } : { images : string[]}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);


  return (
    <>
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="h-[520px] relative"
    >
      {images.map((item, i) => (
          <SwiperSlide 
            key={i}
             className="relative mt-5 cursor-pointer"
            >
            <Image
              src={item}
              alt="This is a prodcuct cover"
                    fill
                    sizes="70vw"
                    className="aspect-square rounded-md shadow-lg"
            />
          </SwiperSlide>
         
        ))}
    </Swiper>
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Pagination, Thumbs]}
      className="h-36"
    >
           {images.map((item, i) => (
          <SwiperSlide 
            key={i}
             className="relative mt-5 cursor-pointer"
            >
            <Image
              src={item}
              alt="This is product images"
              fill
              sizes="30vw"
              className="aspect-auto rounded-md shadow-lg"
            />
          </SwiperSlide>
         
        ))}
    </Swiper>
  </>
  )
}

export default ProductImages