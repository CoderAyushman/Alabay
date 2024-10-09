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
import { useRouter } from "next/navigation";

const GamePreview = () => {
  const router = useRouter();
  const backImg = [
    {
      id: 1,
      src: "/assets/AlabayGames/alabay guard prev 2 1.png",
      link: "/alabay-guard",
    },
    {
      id: 2,
      src: "/assets/AlabayGames/alabay lost heritage prev 1.png",
      link: "/lost-heritage",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-[70vw] z-30 -mt-64 rounded-3xl  "
      >
        <CarouselContent>
          {backImg.map((value, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="bg-transparent border-0">
                  <CardContent className="flex   justify-center p-0 ">
                    <img
                      src={value.src}
                      alt="img"
                      className="rounded-3xl border-4 border-white"
                    />
                    <button
                      className="bg-purple-600 px-5 py-2 rounded-full z-40 absolute bottom-7 text-white font-bold"
                      onClick={() => {
                        router.push(`${value.link}`);
                      }}
                    >
                      <h1>DISCOVER</h1>
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mr-5">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default GamePreview;
