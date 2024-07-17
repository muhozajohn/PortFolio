import CustomButton from "./CustomButton";
import Footer from "./Footer";
import FormField from "./FormField";

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
        <div className=" bg-inherit shadow-md p-4 rounded-md ">
          <p className="text-base text-color-light ">
            I'm always open to discussing <br />{" "}
            <span className="text-lg font-semibold">
              Full-Stack Development or UI/UX Design Projects and Partnerships.
            </span>
          </p>

          <form action="" className="flex  flex-col gap-4 mt-10">
            <div className="w-full">
              <FormField type={`input`} label={`Name`} placeholder={`Name`} />
            </div>
            <div className="w-full">
              <FormField type={`input`} label={`Email`} placeholder={`Email`} />
            </div>
            <div className="w-full">
              <FormField  label={`Message`} placeholder={`Message`} />
            </div>
            <CustomButton
              title={`Submit`}
              otherStyles={`!w-full !rounded-3xl md:!w-1/3 !text-color-light hover:!text-color-white`}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
