import { validateContactForm } from "../utils/validation";
import CustomButton from "./CustomButton";
import Footer from "./Footer";
import FormField from "./FormField";
import { useFormik } from "formik";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  createContact,
  selectcontactLoading,
  selectcontactError,
} from "../features/contact/contactSlice";
import { notifyError, notifySuccess } from "../utils/Notification";
const Contact = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectcontactLoading);
  const error = useSelector(selectcontactError);

  const formik = useFormik({
    validate: validateContactForm,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const resultAction = await dispatch(createContact(values));
        unwrapResult(resultAction);
        formik.resetForm();
        notifySuccess("Message sent!!")
      } catch (error) {
        notifyError(error)
        console.error("Failed to submit contact form", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
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
            Full-Stack Engineer, UI/UX & Mobile App Design Projects and Partnerships.
            </span>
          </p>

          <form
            action=""
            className="flex  flex-col gap-4 mt-10"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full">
              <FormField
                type={`input`}
                label={`Name`}
                placeholder={`Name`}
                id="name"
                onBlur={formik.handleBlur}
                values={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <div className="w-full">
              <FormField
                type={`input`}
                label={`Email`}
                placeholder={`Email`}
                id="email"
                onBlur={formik.handleBlur}
                values={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="w-full">
              <FormField
                label={`Message`}
                placeholder={`Message`}
                id="message"
                onBlur={formik.handleBlur}
                values={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="text-sm text-color-light font-normal">
                  {formik.errors.message}
                </p>
              ) : null}
            </div>
            {error && (
              <p className="text-sm text-red-500 font-normal">{error}</p>
            )}
            <CustomButton
              click={formik.submitForm}
              title={loading ? <Spinner /> : `Submit`}
              disabled={formik.isSubmitting || loading}
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
