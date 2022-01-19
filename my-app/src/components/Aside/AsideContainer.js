import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers, thunkUsersUpdate } from "../../reducers/users";
import { getFriendsDataReSelect, getLoginTextReSelect} from "../../selectors/selectors";
const mapStateToProps = (state) => {
  return {
    state: state,
    login: getLoginTextReSelect(state), 
    friendsData: getFriendsDataReSelect(state),
  };
};

export default connect(mapStateToProps, {
  setUsers,
  thunkUsersUpdate,
})(Aside);
