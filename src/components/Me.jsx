import { images } from "../constraints";
import Adddress from "./Adddress";
import CustomButton from "./CustomButton";
import SocialMediaIcons from "./SocialMediaIcons";
import { MdOutlineFileDownload } from "react-icons/md";

const Me = () => {
  return (
    <div className="w-full relative flex flex-col gap-6 h-full justify-center items-center pb-3  ">
      <div
        className="rounded-2xl w-[253px] md:w-[213px] -mt-32 h-[270px] md:h-[220px] flex justify-center items-center"
        style={{
          background: "linear-gradient(to bottom, #4db5ff, #2c2c6c)",
        }}
      >
        <img
          className="rounded-2xl h-full w-full object-cover"
          src={images.Me}
          alt="Profile"
        />
      </div>

      <div className="flex w-full flex-col gap-2 p-2 ">
        <h1 className="text-2xl text-center text-color-light font-black text-nowrap ">
          John Muhoza
        </h1>
        <p className=" text-sm md:text-base text-color-light font-bold p-2  rounded-md text-center ">
          Full-Stack Engineer, Mobile App
        </p>
        <small className="text-xs text-center -mt-4 text-color-light">
         & UI/UX Designer
        </small>
        <SocialMediaIcons />
        <Adddress />
        <a href={images.cv} download>
          <CustomButton
            otherStyles={`!rounded-3xl !w-full text-color-light hover:!text-color-white `}
            icon={<MdOutlineFileDownload className="text-2xl font-semibold" />}
            title={`DownloadCv`}
          />
        </a>
      </div>
    </div>
  );
};

export default Me;
