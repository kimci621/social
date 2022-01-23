import { loginPostThunk, thunkLogin } from "../../reducers/login";
import { connect } from "react-redux";
import React, { memo } from "react";
import Autorisation from "./Autorisation";
import { getLoginTextReSelect } from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    login: getLoginTextReSelect(state),
  };
};

const AuthContainer = memo((props) => {
  return <Autorisation {...props} />;
});

export default connect(mapStateToProps, { loginPostThunk, thunkLogin })(
  AuthContainer
);
