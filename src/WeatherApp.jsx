import React from "react";
import { MdFeedback } from "react-icons/md";

export const WeatherApp = () => {
  return (
    <>
      <div className="bg-[#1F4C71] text-white rounded-b-[50px] text-center w-full fixed z-10">
        <div className="text-white flex justify-center">
          <div className="flex items-center">
            <img className="pt-4 w-16" src="src/assets/sun.svg" alt="sunny" />
            <p className="text-5xl mt-3 pl-3">21°</p>
            <p className="text-xl pt-3 pl-6 mt-7">Mostly Sunny</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="bg-[#3C729F] rounded-2xl flex p-3">
            <img src="src/assets/location.svg" alt="location" />
            <p className="pl-2 text-md">Budapest, Hungary</p>
          </div>
          <div className="absolute right-10 top-[105px]">
            <a href="mailto:mikayilqamxar@gmail.com" target="_blank">
              <MdFeedback size={30} />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-7 pb-3">
          <img className="w-7" src="src/assets/dropdown.svg" alt="dropdown" />
        </div>
      </div>
    </>
  );
};
