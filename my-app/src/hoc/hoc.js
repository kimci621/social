import React from "react";
import { Navigate } from "react-router-dom";

const hoc = (Component) => {
  return function HocForComponentsa(props) {
    if (props.login === null) {
      return <Navigate to="/login"></Navigate>;
    } else {
      return <Component {...props} />;
    }
  };
};

export default hoc;
