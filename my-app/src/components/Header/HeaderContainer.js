import React, { useEffect } from "react";
import { isFetching } from "../../reducers/isFetching";
import loader from "../../assets/loader.svg";
import Header from "./Header";
import { connect } from "react-redux";
import { thunkLogin, thunkLogOut, getOwnId } from "../../reducers/login";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLoginTextReSelect,
  getIsFetchingStatusReSelect,
} from "../../selectors/selectors";
import {
  setUserIdInProfilePage,
  saveOwnId,
} from "../../reducers/updateProfile";

function HeaderContainer(props) {
  let location = useLocation(),
    navigate = useNavigate();

  useEffect(() => {
    getOwnId().then((res) => {
      if (res) {
        props.setUserIdInProfilePage(res.id);
        props.saveOwnId(res.id);
      }
    }); // set own user to render profile page

    props.thunkLogin();
    if (props.login !== null) {
      navigate(`${location.pathname}`);
    }
    setTimeout(() => {
      navigate(`${location.pathname}`);
    }, 100); // доработать редирект после полного рендера profile page
  }, []); //eslint-disable-line

  return (
    <>
      {/* loader on page updating  */}
      {props.isFetchingState ? (
        <img src={loader} alt="spinner" className="loader"></img>
      ) : null}
      {/* header */}
      <Header {...props} />
    </>
  );
}

const mapStateToProps = (state) => ({
  login: getLoginTextReSelect(state),
  isFetchingState: getIsFetchingStatusReSelect(state),
  savedOwnId: state.profileUpdateReducer.savedOwnId,
  state: state,
});

export default connect(mapStateToProps, {
  thunkLogin,
  thunkLogOut,
  isFetching,
  setUserIdInProfilePage,
  saveOwnId,
})(HeaderContainer);
