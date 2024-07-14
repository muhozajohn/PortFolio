import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const Adddress = () => {
  return (
    <div className="  shadow-2xl  bg-inherit rounded-md w-full p-2 mt-5 flex flex-col gap-3 ">
      <div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-primary-variant p-1 rounded-md cursor-pointer group  shadow-xl ">
            <MdOutlinePhoneAndroid className="text-2xl text-color-primary color" />
          </div>
          <div className="flex flex-col gap-1 text-xs leading-none ">
            <span className="text-slate-200 font-semibold">Phone</span>
            <span className="text-slate-300 font-semibold">
              +250 785 161 508
            </span>
          </div>
        </div>
        <div className="bg-color-light  mt-1 p-[0.1px] "> </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-primary-variant group p-1 rounded-md cursor-pointer  shadow-xl ">
            <TfiEmail className="text-2xl  text-color-primary color" />
          </div>
          <div className="flex flex-col gap-1 text-xs leading-none ">
            <span className="text-slate-200 text font-semibold">Email</span>
            <span className="text-slate-300 font-semibold">
              muhozajohn4@gmail.com
            </span>
          </div>
        </div>
        <div className="bg-color-light  mt-1 p-[0.1px] "> </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-primary-variant group p-1 rounded-md cursor-pointer  shadow-xl ">
            <CiLocationOn className="text-2xl  text-color-primary color" />
          </div>
          <div className="flex flex-col gap-1 text-xs leading-none ">
            <span className="text-slate-200 font-semibold">Location</span>
            <span className="text-slate-300 font-semibold">
              Kigali City, Rwanda
            </span>
          </div>
        </div>
        <div className="bg-color-light  mt-1 p-[0.1px] "> </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-primary-variant group p-1 rounded-md cursor-pointer  shadow-xl ">
            <SlCalender className="text-2xl  text-color-primary color" />
          </div>
          <div className="flex flex-col gap-1 text-xs leading-none ">
            <span className="text-slate-200 font-semibold">Birthday</span>
            <span className="text-slate-300 font-semibold">
              Sept 27 , 1999
            </span>
          </div>
        </div>
        <div className="bg-color-light  mt-1 p-[0.1px] "> </div>
      </div>
    </div>
  );
};

export default Adddress;
