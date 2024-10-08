import React from "react";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <div className=" bg-white flex   md:items-baseline">
      <img src="/assets/puppies.jpg" className="max-w-full fixed " />

      <div className="flex-col space-y-60 fixed ">
        <h1 className=" font-custom text-5xl  md:text-7xl lg:text-8xl text-center px-2 mt-5 bg-gradient-to-b from-[#FFF280]  to-[#7EFF5E] bg-clip-text text-transparent text-stroke-11 text-stroke-custom drop-shadow-3xl drop-shadow-2xl">
          welcome to alabay world
        </h1>
        <div className="font-custom text-center text-xl text-white   md:text-3xl bg-[#181C27] p-3 w-[100vw]">
          where the{" "}
          <span className="bg-gradient-to-b from-[#FFF280]  to-[#FFA800] bg-clip-text text-transparent">
            legendary Central Asian Shepherd Dog
          </span>{" "}
          meets a new-age adventure.{" "}
          <span className="bg-gradient-to-b from-[#FFF280]  to-[#FFA800] bg-clip-text text-transparent">
            Join us
          </span>{" "}
          in celebrating the{" "}
          <span className="bg-gradient-to-b from-[#FFF280]  to-[#FFA800] bg-clip-text text-transparent">
            strength, loyalty,
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-b from-[#FFF280]  to-[#FFA800] bg-clip-text text-transparent">
            heritage
          </span>{" "}
          of the Alabay <br /> breed.
        </div>
      </div>

      <div className="flex-col z-10 mt-[94vh]">
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
