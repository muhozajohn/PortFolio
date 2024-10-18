import React, { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

const NavBar = () => {
  const [model, setModal] = useState(false);

  // handle model
  const handleModal = () => {
    setModal(!model);
  };
  return (
    <div className="flex justify-between items-center z-50  md:bg-inherit  min-h-24 ">
      <div className="flex flex-col leading-none">
        <h1 className="text-2xl font-bold text-color-light ">John Muhoza</h1>
        <span className="text-xs text-color-light">Full-Stack Engineer</span>
      </div>
      <CustomButton
        title={`Meet Me`}
        otherStyles={`text-color-light`}
        click={handleModal}
        icon={<MdCalendarMonth className="text-slate-300" />}
      />
      {model && <Modal close={handleModal} />}
    </div>
  );
};

export default NavBar;
