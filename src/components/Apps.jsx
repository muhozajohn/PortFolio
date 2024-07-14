import React from "react";
import images from "../constraints/images";
import WorkCard from "./WorkCard";

const Apps = () => {
  return (
    <div className="w-full gap-5 space-y-5  columns-1 md:columns-2 lg:columns-3 xl:columns-3 ">
      <WorkCard
        image={images.paints}
        name={`Hovastore-support`}
        type={`#Website #MobileApp`}
      />
      <WorkCard
        image={images.paints}
        name={`PickDoctor`}
        type={`#Website #MobileApp`}
      />
    </div>
  );
};

export default Apps;
