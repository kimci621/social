import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers, thunkUsersUpdate } from "../../reducers/users";
import { getFriendsData } from "../../selectors/selectors";
const mapStateToProps = (state) => {
  return {
    state: state,
    friendsData: getFriendsData(state),
  };
};

export default connect(mapStateToProps, {
  setUsers,
  thunkUsersUpdate,
})(Aside);
