import React from "react";

const ProjectVision = () => {
  return (
    <div className="flex-col  mt-24 text-center overflow-visible ">
      <h1 className="font-custom text-[#FFA800] md:text-7xl lg:text-9xl mb-14">
        project vision
      </h1>
      <div className="flex-col overflow-visible    bg-gradient-to-b from-[#FFC700] via-[#FFF280]  to-[#FFC700]    items-center justify-center pt-3  shadow-lg skew-custom2 px-7 my-10">
        <img
          src="/assets/dog-group.png"
          alt="dog-group"
          className="max-w-[90vw]"
        />
        <p className="my-10">
          Our mission is to honor the heritage of the Alabay by creating a
          vibrant, loyal, and powerful community. Just as the Alabay protects
          its flock, we aim to build a pack that stands strong together.
        </p>
      </div>
    </div>
  );
};

export default ProjectVision;
