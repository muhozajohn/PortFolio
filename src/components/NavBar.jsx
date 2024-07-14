import React, { useState } from "react";
import { MdModeNight } from "react-icons/md";
import { GoSun } from "react-icons/go";

const NavBar = () => {
  const [isDay, setIsDay] = useState(false);
  const toggleTheme = () => {
    setIsDay(!isDay);
  };
  return (
    <div className="flex justify-between items-center min-h-24 ">
      <div className="flex flex-col leading-none">
        <h1 className="text-2xl font-bold text-color-light ">John Muhoza</h1>
        <span className="text-xs text-color-light">Full-Stack Engineer</span>
      </div>
      <button
        className=" justify-center items-center h-12 w-12 flex text-sm font-medium text-color-light hover:text-color-white bg-color-dark hover:bg-color-primary-variant rounded-full"
        onClick={toggleTheme}
      >
        {isDay ? (
          <GoSun className="cursor-pointer text-2xl text-color-light hover:text-color-white" />
        ) : (
          <MdModeNight className="cursor-pointer text-2xl text-color-light hover:text-color-white" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
