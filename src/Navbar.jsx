import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="h-20 bg-white w-full bottom-6 fixed z-10">
        <div className="w-full bg-[#1F4C71] rounded-t-[25px] text-white block fixed bottom-0">
          <div className="flex justify-around">
            <div>
              <img className="pt-3 w-8" src="src/assets/home.svg" alt="home" />
            </div>

            <div className="bg-[#052E50] rounded-full relative bottom-6 w-16 h-16">
              <img
                className="w-6 absolute left-5 top-4"
                src="src/assets/mic.svg"
                alt="mic"
              />
            </div>

            <div>
              <img
                className="pt-3 w-8"
                src="src/assets/calendar.svg"
                alt="calendar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
