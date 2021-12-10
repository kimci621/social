import Aside from "./Aside";
import { connect } from "react-redux";

const updateFriendsType = () => {
  return { type: "SET-USERS" };
};

const mapStateToProps = (state) => {
  return {
    friendsData: state.asideComponent.friendsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newFriendUpdate: () => {
      dispatch(updateFriendsType());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
