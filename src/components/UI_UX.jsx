import React from "react";
import WorkCard from "./WorkCard";
import images from "../constraints/images";

const UI_UX = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
      <WorkCard
        image={images.HovaStore}
        name={`Hovastore-support`}
        type={`#Website #MobileApp`}
        link={`https://hovastore-support.netlify.app/`}
        isExternal={true}
      />
    </div>
  );
};

export default UI_UX;
