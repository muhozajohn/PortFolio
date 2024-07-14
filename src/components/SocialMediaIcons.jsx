import { SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2">
      <Link
        to="https://www.upwork.com/freelancers/~013681069cf2ad720e?viewMode=1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-color-primary-variant hover:bg-color-primary p-2 rounded-md  group"
      >
        <SiUpwork className="text-color-white hover:text-color-white   font-semibold text-xl color" />
      </Link>
      <Link
        to="https://github.com/muhozajohn"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-color-primary-variant p-2 rounded-md hover:bg-color-primary  hover:text-color-white group "
      >
        <BsGithub className="text-color-white  font-semibold text-xl color" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/muhoza-john-26077824a/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-color-primary-variant hover:bg-color-primary p-2 rounded-md group "
      >
        <FaLinkedinIn className="text-color-white hover:text-color-white  font-semibold text-xl color" />
      </Link>
      <Link
        to="https://www.instagram.com/mjohn_rw"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-color-primary-variant hover:bg-color-primary p-2 rounded-md  group"
      >
        <GrInstagram className="text-color-white hover:text-color-white  font-semibold text-xl color" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
