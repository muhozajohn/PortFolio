import Cards from "./Cards";
import { GiThink } from "react-icons/gi";
import Footer from "./Footer";
import { FaCode } from "react-icons/fa";
import { TbDeviceTabletCode } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
const About = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:px-12 p-4 md:p-10 ">
        <div className="flex gap-6 items-center ">
          <h1 className="text-xl md:text-2xl font-bold text-slate-300">
            About
          </h1>
          <div className="p-0.5 w-1/3 bg-slate-300"></div>
        </div>
        <p className="text-base text-color-light">
          I'm a Full-Stack Engineer and UI/UX Designer from Kigali City, Rwanda.
          I have a strong sense of ownership and expertise in both frontend and
          backend technologies. My outstanding communication and teamwork
          abilities enable me to collaborate effectively with diverse teams.
          Passionate about continuous learning, I quickly adapt to new
          technological advancements.
        </p>
        <p className="text-base text-color-light">
          My skills and dedication drive me to create innovative solutions and
          exceptional user experiences.
        </p>
        <div className="mt-2  flex flex-col gap-3">
          <h2 className=" text-lg md:text-xl font-medium text-slate-300">
            What I Do!
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Cards
              about={`about`}
              title="Web Development"
              icon={<FaCode />}
              description="As a passionate and skilled web developer, I specialize in creating dynamic and responsive web applications. My expertise spans across front-end and back-end technologies, allowing me to deliver full-stack solutions that are both functional and visually appealing."
            />
            <Cards
              about={`about`}
              title="App Development"
              icon={<TbDeviceTabletCode />}
              description={`I am a dedicated app developer with a strong background in creating intuitive and efficient mobile applications. My focus is on building apps that provide seamless user experiences across both Android and iOS platforms.`}
            />
            <Cards
              about={`about`}
              title="UI/UX Designer"
              icon={<SiMaterialdesignicons />}
              description={`As a creative and detail-oriented UI/UX designer, I specialize in crafting intuitive and engaging user interfaces that prioritize user experience. My design process involves understanding user needs, creating visually appealing designs, and ensuring seamless interactions across all devices.`}
            />
            <Cards
              about={`about`}
              title="System Analysis"
              icon={<GiThink />}
              description={`As a proficient system analyst, I excel in evaluating and improving complex systems to enhance efficiency, performance, and user satisfaction. My approach involves thorough analysis, clear documentation, and effective communication with stakeholders to deliver optimal solutions.`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
