import FormField from "./FormField";
import { FaTimes } from "react-icons/fa";
import CustomButton from "./CustomButton";
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
// import Spinner from "./Spinner";
// import { notifyError, notifySuccess } from "../utils/Notification";
import { validateMeet } from "../utils/validation";

const Modal = ({ close }) => {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      startTime: "",
      startDate: "",
      endTime: "",
      endDate: "",
    },
    validate: validateMeet,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="fixed top-0 left-0 w-screen min-h-screen z-50 flex justify-center items-center bg-slate-800/50 backdrop-blur-sm">
      <div className="flex flex-col p-4 xl:p-4 gap-4 justify-start items-start w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] bg-color-bg-variant rounded-3xl duration-300">
        <div className="flex justify-between items-center w-full p-2" onClick={close}>
          <h2 className="text-color-light font-bold">Schedule Meeting with John</h2>
          <span
            className="p-2 bg-color-primary-variant rounded-md cursor-pointer text-color-light"
            onClick={close}
          >
            <FaTimes onClick={close} />
          </span>
        </div>
        <form action="" onSubmit={formik.handleSubmit} className="w-full">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 ">
            <div className="w-full col-span-2">
              <FormField
                label="Title"
                type="input"
                inputType="text"
                placeholder="Title"
                id="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.title}
                </p>
              )}
            </div>
            <div className="w-full">
              <FormField
                label="Start Date"
                type="input"
                inputType="date"
                placeholder="Start Date"
                id="startDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.startDate}
              />
              {formik.touched.startDate && formik.errors.startDate && (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.startDate}
                </p>
              )}
            </div>
            <div className="w-full">
              <FormField
                label="End Date"
                type="input"
                inputType="date"
                placeholder="End Date"
                id="endDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
              />
              {formik.touched.endDate && formik.errors.endDate && (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.endDate}
                </p>
              )}
            </div>
            <div className="w-full">
              <FormField
                label="Start Time"
                type="input"
                inputType="time"
                placeholder="Start Time"
                id="startTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.startTime}
              />
              {formik.touched.startTime && formik.errors.startTime && (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.startTime}
                </p>
              )}
            </div>
            <div className="w-full">
              <FormField
                label="End Time"
                type="input"
                inputType="time"
                placeholder="End Time"
                id="endTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endTime}
              />
              {formik.touched.endTime && formik.errors.endTime && (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.endTime}
                </p>
              )}
            </div>
       
          </div>
          <CustomButton
            click={formik.submitForm}
            title={`Create Event`}
            // title={loading ? <Spinner /> : `Create Event`}
            otherStyles={`!mt-2 !scale-100 !text-color-light !w-full md:!w-1/3 `}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
