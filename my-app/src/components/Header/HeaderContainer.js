import React, { useEffect } from "react";

import Header from "./Header";
import { connect } from "react-redux";
import { thunkLogin, thunkLogOut } from "../../reducers/login";
import { useLocation, useNavigate } from "react-router-dom";
import { getLoginText } from "../../selectors/selectors";

function HeaderContainer(props) {
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    props.thunkLogin();
    setTimeout(() => {
      ////доработать!refactor
      navigate(`${location.pathname}`);
    }, 100);
  }, []); //eslint-disable-line

  return <Header {...props} />;
}

const mapStateToProps = (state) => ({
  login: getLoginText(state),
  state: state,
});

export default connect(mapStateToProps, {
  thunkLogin,
  thunkLogOut,
})(HeaderContainer);
