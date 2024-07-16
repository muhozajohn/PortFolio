import React from "react";
import WorkCard from "./WorkCard";
import images from "../constraints/images";
const All = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
      <WorkCard
        image={images.music}
        name={`Music Diffusion`}
        type={`#Website`}
        link={`https://musicdiffusion.netlify.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.artFinder}
        name={`Arts Finder And Exhibition`}
        type={`#Website`}
        link={`https://artfinderandexhibition.netlify.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.shaka}
        name={`shaka`}
        type={`#Website`}
        link={`https://www.shaka.rw/`}
        isExternal={true}
      />
      <WorkCard
        image={images.HovaStore}
        name={`Hovastore-support`}
        type={`#Website #MobileApp`}
        link={`https://hovastore-support.netlify.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.wpf}
        name={`Women progress family`}
        type={`#Website`}
        link={`https://womenprogressfamily.netlify.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.univeEase}
        name={`UnivEase`}
        type={`#Website`}
        link={`https://univease.netlify.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.Bissfulsmoothies}
        name={`Bissfulsmoothies`}
        type={`#Website`}
        link={`https://blissfulsmoothies.vercel.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.picDoctor}
        name={`Picking Doctor`}
        type={`#Website`}
        link={`https://pickdoctor.vercel.app/`}
        isExternal={true}
      />
      <WorkCard
        image={images.deals}
        name={`Saint Blog`}
        link={`https://saintdeals.vercel.app/`}
        isExternal={true}
        type={`#Website`}
      />
    </div>
  );
};

export default All;
