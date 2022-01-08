import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers, thunkUsersUpdate } from "../../reducers/users";
const mapStateToProps = (state) => {
  return {
    state: state,
    friendsData: state.usersReducer.friendsData,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  thunkUsersUpdate,
})(Aside);
