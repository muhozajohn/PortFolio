import React, { useState, useEffect } from "react";

const getTailwindScreenSize = (width) => {
  if (width >= 1280) {
    return "xl";
  } else if (width >= 1024) {
    return "lg";
  } else if (width >= 768) {
    return "md";
  } else if (width >= 640) {
    return "sm";
  } else {
    return "xs";
  }
};

const Screen = () => {
  const [screenSize, setScreenSize] = useState(
    getTailwindScreenSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getTailwindScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button className="bg-color-primary-variant text-color-primary p-2 w-fit  rounded-md shadow-md">
      Size: {screenSize}
    </button>
  );
};

export default Screen;
