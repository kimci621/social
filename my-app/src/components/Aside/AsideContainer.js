import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers, thunkUsersUpdate } from "../../reducers/users";
import {
  getFriendsDataReSelect,
  getLoginTextReSelect,
  userIdReSelect,
} from "../../selectors/selectors";
import { setUserIdInProfilePage } from "../../reducers/updateProfile";


const mapStateToProps = (state) => {
  return {
    state: state,
    login: getLoginTextReSelect(state),
    friendsData: getFriendsDataReSelect(state),
    userId: userIdReSelect(state),
    savedOwnId: state.profileUpdateReducer.savedOwnId,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  thunkUsersUpdate,
  setUserIdInProfilePage,
})(Aside);
