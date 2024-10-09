"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const ImgAndVideo = () => {
  let arr = [
    {
      id: 1,
      src: "/assets/dog1.png",
    },
    {
      id: 2,
      src: "/assets/dog2.png",
    },
    {
      id: 3,
      src: "/assets/dog3.png",
    },
    {
      id: 4,
      src: "/assets/dog4.png",
    },
    {
      id: 5,
      src: "/assets/dog5.png",
    },
  ];
  const [isAll, setIsAll] = useState<boolean>(true);
  const [isPhotos, setIsPhotos] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5 my-5">
        <button
          className={`text-xl font-extrabold ${
            isAll ? "text-[#FFA800]" : "text-[#353535]"
          }`}
          onClick={() => {
            setIsAll(true);
            setIsVideo(false);
            setIsPhotos(false);
          }}
        >
          ALL
        </button>
        <button
          className={`text-xl font-extrabold ${
            isPhotos ? "text-[#FFA800]" : "text-[#353535]"
          }`}
          onClick={() => {
            setIsPhotos(true);
            setIsVideo(false);
            setIsAll(false);
          }}
        >
          PHOTOS
        </button>
        <button
          className={`text-xl font-extrabold ${
            isVideo ? "text-[#FFA800]" : "text-[#353535]"
          }`}
          onClick={() => {
            setIsVideo(true);
            setIsAll(false);
            setIsPhotos(false);
          }}
        >
          VIDEOS
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[80vw] px-10 "
      >
        <CarouselContent>
          {isAll && (
            <>
              {arr.map((value, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-[200px] overflow-hidden bg-gray-300">
                      <CardContent className="flex aspect-square justify-center">
                        <img
                          src={value.src}
                          alt="img"
                          className="w-[200px] h-[300px] "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          )}
          {isPhotos &&
            arr.map((value, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className=" h-[200px] overflow-hidden bg-gray-300  ">
                    <CardContent className="flex aspect-square justify-center ">
                      <img
                        src={value.src}
                        alt="img"
                        className="w-[200px] h-[300px] "
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          {isVideo && (
            <>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[200px] overflow-hidden bg-gray-300">
                    <CardContent className="flex aspect-square  ">
                      <video
                        src="/assets/1_mb.mp4"
                        className="h-[200px]"
                        autoPlay={true}
                        loop={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImgAndVideo;
