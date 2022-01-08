import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {  thunkLogin } from "../../reducers/login";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.thunkLogin();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  state: state,
});

export default connect(mapStateToProps, {  thunkLogin })(
  HeaderContainer
);
