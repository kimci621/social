import { loginPostThunk, thunkLogin } from "../../reducers/login";
import { connect } from "react-redux";
import React from "react";
import Autorisation from "./Autorisation";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};

class AuthContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Autorisation {...this.props}/>;
  }
}

export default connect(mapStateToProps, {loginPostThunk, thunkLogin})(AuthContainer);