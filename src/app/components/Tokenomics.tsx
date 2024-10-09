import React from "react";

const Tokenomics = () => {
  return (
    <div className="flex-col w-full px-10 bg-gradient-to-b from-[#FFC700] via-[#FFF280]  to-[#FFC700]    items-center justify-center pt-3  shadow-lg skew-custom2    ">
      <h1 className="font-custom text-white md:text-7xl lg:text-9xl pt-32">
        Tokenomics
      </h1>
      <div className="flex justify-center items-center mb-20">
        <div className="flex-col space-y-7 ">
          <div className="bg-[#353535] text-start w-[25vw] px-7 py-2 rounded-2xl">
            <h1 className="text-2xl font-bold text-white  ">LIQUIDITY</h1>
            <h1 className="text-3xl font-bold text-[#FFF280] ">LOCKED</h1>
          </div>
          <div className="bg-[#353535] text-start w-[25vw] px-7 py-2 rounded-2xl">
            <h1 className="text-2xl font-bold text-white  ">CONTRACT</h1>
            <h1 className="text-3xl font-bold text-[#FFF280] ">RENOUNCED</h1>
          </div>
          <div className="bg-[#353535] text-start w-[25vw] px-7 py-2 rounded-2xl">
            <h1 className="text-2xl font-bold text-white  ">TAXES</h1>
            <h1 className="text-3xl font-bold text-[#FFF280] ">0%</h1>
          </div>
        </div>
        <img src="/assets/dog5.png" alt="dog" className="w-[50vw]" />
      </div>
    </div>
  );
};

export default Tokenomics;
