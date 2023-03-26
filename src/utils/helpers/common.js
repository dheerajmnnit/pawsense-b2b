export const getUserDetails = () => {
  //   const token = localStorage.getItem("authToken");

  //   if (token) {
  //     return jwt.decode(token);
  //   }

  //   return null;

  return {
    name: "John Doe",
    role: "user", //  "ca"
  };
};

export const classNames = (...classes) => {
  return classes.join(" ");
};

export const getErrorMessage = (error, fieldName) => {
  return error?.type === "required"
    ? `${fieldName} is required!`
    : error?.message;
};

export const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );
};
