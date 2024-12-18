"use client";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function Banner({ bannerData }) {
  return (
    <Carousel
      autoPlay
      showArrows
      infiniteLoop
      showThumbs={false}
      stopOnHover
      showIndicators={false}
      showStatus={false}
      dynamicHeight
      transitionTime={800}
      animationHandler="fade"
    >
      {bannerData?.map((item, index) => {
        return (
          <div className="relative flex h-fit" key={`bannerImage${index}`}>
            <div className="absolute self-center md:start-[350px] m-5 animate-bounce ease-in-out repeat-1 delay-75 text-left max-w-md rounded text-white bg-gray-950 bg-opacity-70 p-5">
              <h1 className="font-semibold text-lg border-b mb-3">{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <Image
              src={item.img}
              alt={item?.alt}
              className="w-full object-contain"
              sizes="1920px"
              width={0}
              height={0}
              priority={true}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
