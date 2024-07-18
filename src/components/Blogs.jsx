import images from "../constraints/images";
import Footer from "./Footer";
import WorkCard from "./WorkCard";

const Blogs = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:px-12 p-4 md:p-10 ">
        {" "}
        <div className="flex gap-6 items-center ">
          <h1 className="text-xl md:text-2xl font-bold text-slate-300">
            Blogs
          </h1>
          <div className="p-0.5 w-1/3 bg-slate-300 "></div>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <WorkCard
            image={images.paints}
            name={`Klab assistant Facilitator`}
            description={`At kLab Rwanda, I served as an Assistant Facilitator and Full Stack Developer. My primary responsibilities included guiding and mentoring aspiring developers, conducting coding workshops, and assisting in the development and deployment of full stack applications.`}
          />
          <WorkCard
            image={images.hova}
            name={`Hova AI`}
            description={`At Hova AI, I worked as a Full Stack Developer where I played a key role in developing and maintaining web applications. My responsibilities included designing and implementing both frontend and backend components, collaborating with cross-functional teams, and ensuring the seamless integration of various technologies.`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
