import Cards from "./Cards";
import Footer from "./Footer";
import Technology from "./Technology";
import { FaUserGraduate } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";

const Resume = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:px-12 p-4 md:p-10 ">
        <div className="flex gap-6 items-center ">
          <h1 className="text-xl md:text-2xl font-bold text-slate-300">
            Resume
          </h1>
          <div className="p-0.5 w-1/3 bg-slate-300 "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <Cards
              title={`Education`}
              icon={<FaUserGraduate className="text-color-primary"/>}
              education={`Education`}
              styles={`!bg-inherit`}
            />
            <Cards
              startingDate={`2021`}
              endingDate={`2024`}
              level={`Bachelor`}
              dashed={`dash`}
              course={`Business Information Technology`}
              school={`University Of Rwanda`}
            />
            <Cards
              startingDate={`2017`}
              endingDate={`2019`}
              level={`Diplome`}
              dashed={`dash`}
              course={`Software Development`}
              school={`Bulinga TVET School`}
            />
            <Cards
              startingDate={`2014`}
              endingDate={`2016`}
              level={`O level Certificates`}
              dashed={`dash`}
              course={`O level Course`}
              school={`Kagitumba High School`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Cards
              title={`Experience`}
              icon={<FaPeopleCarryBox className="text-color-primary" />}
              education={`Education`}
              styles={`!bg-inherit`}
            />
             <Cards
              startingDate={`March 2024`}
              endingDate={`May 2024`}
              company={`Hova AI`}
              position={`Full Stack`}
              jobType={`Remote`}
              dashed={`dash`}
            />
             <Cards
              startingDate={`December 2021`}
              endingDate={`April 2024`}
              company={`Nova Services Ltd`}
              position={`Software Engineer`}
              jobType={`Rwanda (Hybrid) `}
              dashed={`dash`}
            />
             <Cards
              startingDate={`November 2023`}
              endingDate={`May 2024`}
              company={`Klab Rwanda`}
              position={`Software Engineer - Assistant Facilitator`}
              jobType={`(Hybrid) `}
              dashed={`dash`}
            />
           
          </div>
        </div>
      </div>
      <Technology />
      <Footer />
    </>
  );
};

export default Resume;
