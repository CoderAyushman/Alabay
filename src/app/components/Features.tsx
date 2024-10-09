import React from "react";

const Features = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-24 mb-10 gap-5 text-center overflow-hidden rounded-t-3xl">
      <div className="flex-col  items-center bg-[#FFF280] w-[20vw] h-[350px]">
        <h1 className="text-2xl font-bold text-white drop-shadow-2xl px-7 pt-5">
          community building
        </h1>
        <p className=" font-bold text-xl text-white drop-shadow-2xl">
          and initial lunch
        </p>
        <img src="/assets/dog1.png" alt="" className="max-w-[180px] mx-auto" />
      </div>
      <div className="flex-col  items-center bg-[#41FFFF] w-[20vw] h-[350px]">
        <h1 className="text-2xl font-bold text-white drop-shadow-2xl px-7 pt-5">
          Merchandise
        </h1>
        <p className="pb-7 font-bold text-xl text-white drop-shadow-2xl">
          Store Launch
        </p>
        <img src="/assets/dog2.png" alt="" className="max-w-[180px] mx-auto" />
      </div>
      <div className="flex-col  items-center bg-[#D427FF] w-[20vw] h-[350px]">
        <h1 className="text-2xl font-bold text-white drop-shadow-2xl px-7 pt-5">
          community Events
        </h1>
        <p className=" font-bold text-xl text-white drop-shadow-2xl">
          and contests
        </p>
        <img src="/assets/dog3.png" alt="" className="max-w-[180px] mx-auto" />
      </div>
      <div className="flex-col  items-center bg-[#8F3A3C] w-[20vw] h-[350px]">
        <h1 className="text-2xl font-bold text-white drop-shadow-2xl px-10 pt-5">
          Expansion and New
        </h1>
        <p className=" font-bold text-xl text-white drop-shadow-2xl">
          Features
        </p>
        <img src="/assets/dog4.png" alt="" className="max-w-[180px] mx-auto" />
      </div>
    </div>
  );
};

export default Features;
