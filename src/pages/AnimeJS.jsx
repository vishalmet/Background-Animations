// App.js
import React from "react";
import FunctionBasedValues from "../components/FunctionBasedValues";
import Menus from "../components/Menus";
import StaggeringGrid from "../components/StaggeringGrid";
import StaggeringAxisGrid from "../components/StaggeringAxis";
import MorphingAnimation from "../components/Morphing";
import MotionPath from "../components/MotionPath";

const AnimeJS = () => {
  return (
    <div className=" bg-gradient-to-tr from-orange-50 via-orange-50 to-orange-400 min-h-screen bricolage-font">
      <div className="  ">
        <Menus />
      </div>
      <p className=" flex justify-center text-6xl font-extrabold pt-10">
        AnimeJS
      </p>
      <div className="">
        <p className=" flex justify-center text-2xl ">
          Function-Based Values Animation with Anime.js
        </p>

        <div className=" flex items-center mt-[10%]">
          <div className=" ml-10 ">
            <FunctionBasedValues />
          </div>
          <div className="">
            <p className=" text-2xl w-[30%] ml-[45%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-32">
        <p className=" flex justify-center text-2xl ">
          Staggering Grid Animation with Anime.js
        </p>

        <div className=" flex items-center gap-10">
          <div className=" ml-10 ">
            <StaggeringGrid />
          </div>
          <div className="">
            <p className=" text-2xl  w-[60%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>


      <div className=" pt-32">
        <p className=" flex justify-center text-2xl ">
          Staggering Axis Animation with Anime.js
        </p>

        <div className=" flex items-center gap-10">
          <div className=" ml-10 ">
            <StaggeringAxisGrid />
          </div>
          <div className="">
            <p className=" text-2xl  w-[60%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>


      <div className=" pt-32">
        <p className=" flex justify-center text-2xl ">
          Morphing Animation with Anime.js
        </p>

        <div className=" flex items-center gap-10">
          <div className=" ml-10 ">
            <MorphingAnimation />
          </div>
          <div className="">
            <p className=" text-2xl  w-[60%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>


      <div className=" pt-32">
        <p className=" flex justify-center text-2xl ">
          Motionpath Animation with Anime.js
        </p>

        <div className=" flex items-center gap-10">
          <div className=" ml-10 ">
            <MotionPath />
          </div>
          <div className="">
            <p className=" text-2xl  w-[60%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeJS;
