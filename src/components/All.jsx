import React from "react";
import WorkCard from "./WorkCard";
import images from "../constraints/images";
const All = () => {
  return (
    <div className="w-full gap-5 space-y-5  columns-1 md:columns-2 lg:columns-3 xl:columns-3 ">
      <WorkCard
        image={images.paints}
        name={`Arts Finder And Exhibition`}
        type={`#Website`}
      />
      <WorkCard
        image={images.paints}
        name={`Hovastore-support`}
        type={`#Website #MobileApp`}
      />
      <WorkCard
        image={images.paints}
        name={`Women progress family`}
        type={`#Website`}
      />
      <WorkCard
        image={images.paints}
        name={`UnivEase`}
        type={`#Website`}
      />
      <WorkCard
        image={images.paints}
        name={`Bissfulsmoothies`}
        type={`#Website`}
      />
      <WorkCard
        image={images.paints}
        name={`Picking Doctor`}
        type={`#Website`}
      />
    </div>
  );
};

export default All;
