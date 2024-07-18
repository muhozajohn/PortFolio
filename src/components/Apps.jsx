import React from "react";
import images from "../constraints/images";
import WorkCard from "./WorkCard";

const Apps = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">

       <WorkCard
        image={images.HovaStore}
        name={`Hovastore-support`}
        type={`#Website #MobileApp`}
        link={`https://hovastore-support.netlify.app/`}
        isExternal={true}
        isButton={true}
      />
    </div>
  );
};

export default Apps;
