import FindUsers from "./FindUsers";
import { connect } from "react-redux";

const followType = (id) => {
  return { type: "FOLLOW", id: id};
};
const unFollowType = () => {
  return { type: "UNFOLLOW" };
};
const showMoreType = () => {
  return { type: "SHOWMORE" };
};
const setUsersType = () => {
  return { type: "SET-USERS" };
};

const mapStateToProps = (state) => {
  return {
    users: state.newFriends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followType(id));
    },
    unFollow: () => {
      dispatch(unFollowType());
    },
    showMore: () => {
      dispatch(showMoreType());
    },
    setUsers: () => {
      dispatch(setUsersType());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
