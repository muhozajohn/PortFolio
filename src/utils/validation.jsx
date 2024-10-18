export const validateContactForm = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "Names Required";
  }
  if (!values.message) {
    errors.message = "Message Required";
  }

  return errors;
};
export const validateMeet = (values) => {
  let errors = {};

  if (!values.title) {
    errors.title = "Title Required";
  }
  if (!values.startTime) {
    errors.startTime = "Start Time Required";
  }
  if (!values.startDate) {
    errors.startDate = "Start Date Required";
  }
  if (!values.endTime) {
    errors.endTime = "End Time Required";
  }
  if (!values.endDate) {
    errors.endDate = "End Date Required";
  }

  return errors;
};
