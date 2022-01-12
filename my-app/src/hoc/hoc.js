import React from "react";
import { Navigate } from "react-router-dom";

const hoc = (Component) => {
  return class HocForComponents extends React.Component {
    render() {
      if (this.props.login === "login") {
        return <Navigate to="/login"></Navigate>;
      } else {
        return <Component {...this.props} />;
      }
    }
  };
};

export default hoc;
