// App.js
import React from "react";
import FunctionBasedValues from "../components/FunctionBasedValues";
import Menus from "../components/Menus";
import StaggeringGrid from "../components/StaggeringGrid";

const AnimeJS = () => {
  return (
    <div className=" bg-gradient-to-tr from-orange-50 via-orange-50 to-orange-400 min-h-screen bricolage-font">
      <div className="  ">
        <Menus />
      </div>
      <p className=" flex justify-center text-6xl font-extrabold pt-10">
        AnimeJS
      </p>
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


      <p className=" flex justify-center text-2xl ">
       Staggering Grid Animation with Anime.js
      </p>

      <div className=" flex items-center mt-[10%]">
        <div className=" ml-10 ">
          <StaggeringGrid />
        </div>
        <div className="">
          <p className=" text-2xl w-[30%] ml-[45%]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeJS;
