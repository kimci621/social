import { loginPostThunk, thunkLogin } from "../../reducers/login";
import { thunkProfile } from "../../reducers/updateProfile";
import { connect } from "react-redux";
import React, { memo } from "react";
import Autorisation from "./Autorisation";
import { getLoginTextReSelect } from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    login: getLoginTextReSelect(state),
    captcha: state.loginReducer.captchaUrl,
    savedOwnId: state.profileUpdateReducer.savedOwnId
  };
};

const AuthContainer = memo((props) => {
  return <Autorisation {...props} />;
});

export default connect(mapStateToProps, { loginPostThunk, thunkLogin, thunkProfile})(
  AuthContainer
);
