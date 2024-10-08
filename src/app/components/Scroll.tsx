"use client";
import React from "react";
import ImgAndVideo from "./ImgAndVideo";
import ProjectVision from "./ProjectVision";
import RoadMap from "./RoadMap";
import Features from "./Features";
import Tokenomics from "./Tokenomics";
import Merchandise from "./Merchandise";
import Games from "./Games";
import GamePreview from "./GamePreview";

const Scroll = () => {
  return (
    <div className=" bg-white mx-10 overflow-visible rounded-t-[40px]">
      <div className="flex-col overflow-visible    bg-gradient-to-b from-[#FFC700] via-[#FFF280]  to-[#FFC700]   rounded-t-[40px] items-center justify-center pt-3  shadow-lg skew-custom1 px-7">
        <div className="mx-auto  max-w-[231px] h-5 bg-[#FFF6A1] rounded-full "></div>
        <div className="flex overflow-visible">
          <img
            src="/assets/jump-dog.png"
            alt="jumping-dog"
            className="max-w-[50vw] h-screen z-20 mt-24 "
          />
          <div className="flex-col text-right space-y-4 mr-5 mt-7">
            <h1 className=" md:text-6xl font-extrabold text-[#F76902]">
              History Of
            </h1>
            <h1 className="font-custom md:text-9xl text-white">alabay</h1>
            <p className="text-[#353535] font-bold text-3xl">
              The Central Asian Shepherd Dog, also known as Alabay, has been a
              guardian of livestock and property for centuries. Originating from
              Central Asia, these dogs are renowned for their courage, strength,
              and loyalty.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ImgAndVideo />
      </div>
      <div className="flex justify-center">
        <ProjectVision />
      </div>
      <div className="flex justify-center">
        <RoadMap />
      </div>
      <div className="flex justify-center">
        <Features />
      </div>
      <div className="flex w-full justify-center">
        <Tokenomics />
      </div>
      <div className="flex w-full justify-center">
        <Merchandise />
      </div>
      <div className="flex w-full justify-center">
        <Games />
      </div>
      <div className="flex w-full justify-center">
        <GamePreview />
      </div>
    </div>
  );
};

export default Scroll;
