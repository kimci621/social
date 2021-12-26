import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserLoginData } from "../../reducers/login";
import usersApi from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersApi.getAuthStatus().then((res) => {
      this.props.setUserLoginData(res.login);
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  state: state,
});

export default connect(mapStateToProps, { setUserLoginData })(HeaderContainer);
