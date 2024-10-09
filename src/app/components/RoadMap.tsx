import React from "react";

const RoadMap = () => {
  return (
    <div className="flex justify-center items-center px-5 -mt-72">
      <div className="flex-col justify-center items-center">
        <p className="font-bold text-[#353535] text-2xl px-10 z-20 mt-10">
          Our journey is just beginning. Explore our roadmap to see the exciting
          milestones and future plans we have in store.
        </p>
        <p className="font-bold text-[#FFA800] text-2xl px-10 mt-5 z-20">
          Join us as we grow and achieve new heights.
        </p>
      </div>
      <img
        src="/assets/road-map-dog.png"
        alt="road-map-dog"
        className="max-w-[50vw] z-20"
      />
    </div>
  );
};

export default RoadMap;
