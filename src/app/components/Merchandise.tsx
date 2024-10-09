"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Merchandise = () => {
  const frontImg = [
    {
      id: 1,
      src: "/assets/AlabayMerch/black hoodie.png",
    },
    {
      id: 2,
      src: "/assets/AlabayMerch/cap mockup.png",
    },
    {
      id: 3,
      src: "/assets/AlabayMerch/pink tshirt.png",
    },
    {
      id: 4,
      src: "/assets/AlabayMerch/yellow tshirt.png",
    },
  ];
  const backImg = [
    {
      id: 1,
      src: "/assets/AlabayMerch/black hoodie bck.png",
    },
    {
      id: 2,
      src: "/assets/AlabayMerch/blue cap bck.png",
    },
    {
      id: 3,
      src: "/assets/AlabayMerch/pink tee bck.png",
    },
    {
      id: 4,
      src: "/assets/AlabayMerch/yellow tee bck.png",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="flex-col items-center justify-center ">
      <h1 className="font-custom text-[#FFA800] md:text-7xl lg:text-9xl mb-14">
        merchandise
      </h1>
      <div className="flex items-center justify-center ">
        <Carousel plugins={[plugin.current]} className=" max-w-[70vw] z-30">
          <CarouselContent>
            {frontImg.map((value, index) => (
              <>
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden bg-transparent">
                      <img
                        src={backImg[index].src}
                        alt="img"
                        className=" absolute"
                      />
                      <CardContent className="flex items-center justify-center">
                        <img src={value.src} alt="img" className=" z-30 ml-4" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Merchandise;
