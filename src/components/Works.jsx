import { NavLink } from "react-router-dom";
import { Portfolio } from "../constraints/Portfolio";
import Footer from "./Footer";
import { useState } from "react";
import All from "./All";
import Websites from "./Websites";
import Apps from "./Apps";
import UI_UX from "./UI_UX";
const Works = () => {
  const [activeLink, setActiveLink] = useState("All");
  const renderComponent = () => {
    switch (activeLink) {
      case "All":
        return <All />;
      case "Websites":
        return <Websites />;
      case "Apps":
        return <Apps />;
      case "UI/UX Designs":
        return <UI_UX />;
      default:
        return <All />;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:px-12 p-4 md:p-10 ">
        <div className="flex gap-6 items-center ">
          <h1 className="text-xl md:text-2xl font-bold text-slate-300">
            Portfolio
          </h1>
          <div className="p-0.5 w-1/3 bg-slate-300 "></div>
        </div>
        <div className="flex md:justify-end md:items-end w-full ">
          <div className="flex gap-2 md:gap-3 items-center">
            {Portfolio.map((links, index) => (
              <NavLink
                key={index}
                onClick={() => setActiveLink(links.title)}
                className={`cursor-pointer  flex items-center hover:text-slate-50 group justify-center flex-col gap-2  p-2 rounded-md ${
                  activeLink === links.title
                    ? "bg-inherit"
                    : "bg-color-bg-variant hover:bg-color-primary-variant hover:text-slate-50"
                }`}
              >
                <span
                  className={` ${
                    activeLink === links.title
                      ? "text-slate-50"
                      : "hover:text-slate-50 color"
                  } text-xs text-nowrap text-color-light`}
                >
                  {links.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="w-full bg-color-bg-variant  rounded-md">
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
