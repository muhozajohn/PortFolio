import { NavLink } from "react-router-dom";
import { Navigation } from "../constraints/Navigation";
import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import Blogs from "./Blogs";
import Contact from "./Contact";

const MainContainer = () => {
  const [activeLink, setActiveLink] = useState("About");

  const renderComponent = () => {
    switch (activeLink) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Works":
        return <Works />;
      case "Blogs":
        return <Blogs />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 ">
      <div className="flex md:justify-end md:items-end w-full ">
        <div className="flex justify-center bg-color-primary-variant w-full md:w-fit p-4 rounded-md ">
          <div className="flex gap-2 md:gap-3 items-center">
            {Navigation.map((links, index) => (
              <NavLink
                key={index}
                onClick={() => setActiveLink(links.title)}
                className={`cursor-pointer  flex items-center hover:text-slate-50 group justify-center flex-col gap-2 md:w-20 p-2 rounded-md ${
                  activeLink === links.title
                    ? "bg-color-primary-variant"
                    : "bg-color-bg-variant hover:bg-color-primary-variant hover:text-slate-50"
                }`}
              >
                <span
                  className={` ${
                    activeLink === links.title ? "text-slate-50" : "hover:text-slate-50 color"
                  } text-lg md:text-2xl font-bold text-color-primary`}
                >
                  {links.icon}
                </span>
                <span
                  className={` ${
                    activeLink === links.title ? "text-slate-50" : "hover:text-slate-50 color"
                  } text-xs text-color-light`}
                >
                  {links.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-color-bg-variant  rounded-md">
        {renderComponent()}
      </div>
    </div>
  );
};

export default MainContainer;
