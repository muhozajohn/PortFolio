import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className=" bg-color-bg px-6 md:px-28 ">
      <div className="container mx-auto flex flex-col gap-3 min-h-screen ">
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
