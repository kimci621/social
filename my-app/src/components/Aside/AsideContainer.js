import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers, updateUsers } from "../../reducers/users";

const mapStateToProps = (state) => {
  return {
    state: state,
    friendsData: state.usersReducer.friendsData,
  };
};

export default connect(mapStateToProps, { setUsers, updateUsers })(Aside);
