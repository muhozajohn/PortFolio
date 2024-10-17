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