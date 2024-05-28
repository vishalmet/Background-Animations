import React from "react";
import SolidsBg from "../components/SolidsBg";
import Menus from "../components/Menus";
import CurvyBg from "./CurvyBg";

const AnimatedSolids = () => {
  return (
    <div className="">
      <div
        id="animated-solids"
        className="bg-gradient-to-tr from-blue-500 to-orange-400 h-screen bricolage-font"
      >
        <div className="">
          <Menus />
        </div>
        <div className="">
          <SolidsBg />
        </div>
        <div className=" z-10">
          <p className="text-5xl md:text-6xl lg:text-9xl flex justify-center pt-[25%] md:pt-[22%] lg:pt-[18%] text-white">
            Animated Gradient Solids
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSolids;
