import FindUsers from "./FindUsers";
import { connect } from "react-redux";
import { setUsers, follow, thunkUsersUpdate } from "../../reducers/users";
import { editTotalPages, changeActivePage } from "../../reducers/pagination";
import { isFetching } from "../../reducers/isFetching";
import hoc from "../../hoc/hoc";
import {
  getNewFriendsReSelect,
  getActivePageReSelect,
  getAllPagesReSelect,
  getIsFetchingStatusReSelect,
  getUsersPerPageReSelect,
  getAllUsersPerPageReSelect,
  getIsDisabledStatusReSelect,
  getLoginTextReSelect,
} from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    users: getNewFriendsReSelect(state),
    activePage: getActivePageReSelect(state),
    allPages: getAllPagesReSelect(state),
    isFetchingState: getIsFetchingStatusReSelect(state),
    usersPerPage: getUsersPerPageReSelect(state),
    allUsersPerPage: getAllUsersPerPageReSelect(state),
    isDisabled: getIsDisabledStatusReSelect(state),
    login: getLoginTextReSelect(state),
  };
};

const usersHoc = hoc(FindUsers);
export default connect(mapStateToProps, {
  //mapDispatchToProps
  follow,
  setUsers,
  editTotalPages,
  changeActivePage,
  isFetching,
  thunkUsersUpdate,
})(usersHoc);
