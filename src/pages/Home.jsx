import MainContainer from "../components/MainContainer";
import Me from "../components/Me";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center w-full text-white mt-48">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        <div className="w-full col-span-1 h-full md:max-h-[85vh]  bg-color-bg-variant p-2 rounded-md">
          <Me />
        </div>
        <div className="w-full col col-span-1 sm:col-span-1 lg:col-span-3">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
