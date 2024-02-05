const errorHandler = (error) => {
    const errorMessages = Object.keys(error.response.data).map((field) => {
    //   const fieldErrors = error.response?.data[field];
  
      let stringError = `${field} - ${
        typeof error.response?.data[field] === "string"
          ? error.response?.data[field]
          : error.response?.data[field].join(", ")
      }`;
      return stringError;
    });
    const errorMessageString = errorMessages.join(", ");
    return errorMessageString;
  };
  
  export default errorHandler;