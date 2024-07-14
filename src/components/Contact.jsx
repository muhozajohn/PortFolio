import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:px-12 p-4 md:p-10 ">
        <div className="flex gap-6 items-center ">
          <h1 className="text-xl md:text-2xl font-bold text-slate-300">
            Contact
          </h1>
          <div className="p-0.5 w-1/3 bg-slate-300"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
