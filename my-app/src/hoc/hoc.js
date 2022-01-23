import React from "react";
import { Navigate } from "react-router-dom";

const hoc = (Component) => {
  return class HocForComponents extends React.PureComponent {
    render() {
      if (this.props.login === null) {
        return <Navigate to="/login"></Navigate>;
      } else {
        return <Component {...this.props} />;
      }
    }
  };
};

export default hoc;
