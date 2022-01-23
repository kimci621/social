import React, { useEffect } from "react";

import Header from "./Header";
import { connect } from "react-redux";
import { thunkLogin, thunkLogOut } from "../../reducers/login";
import { useLocation, useNavigate } from "react-router-dom";
import { getLoginTextReSelect } from "../../selectors/selectors";

function HeaderContainer(props) {
  let location = useLocation(),
    navigate = useNavigate();

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
  login: getLoginTextReSelect(state),
  state: state,
});

export default connect(mapStateToProps, {
  thunkLogin,
  thunkLogOut,
})(HeaderContainer);
