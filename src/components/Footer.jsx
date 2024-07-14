
import { getCurrentYear } from "../utils/CurrentYear";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-3 rounded-b-md w-full bg-color-primary-variant">
      <p className="text-center text-sm font-medium ">
        &copy; {getCurrentYear()} All Rights Reserved by{" "}
        <span className="text-base">John Muhoza</span>
      </p>
    </div>
  );
};

export default Footer;
