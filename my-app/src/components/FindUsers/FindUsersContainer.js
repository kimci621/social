import FindUsers from "./FindUsers";
import { connect } from "react-redux";
import { setUsers, follow, thunkUsersUpdate } from "../../reducers/users";
import { editTotalPages, changeActivePage } from "../../reducers/pagination";
import { isFetching } from "../../reducers/isFetching";
import hoc from "../../hoc/hoc";
import {
  getNewFriends,
  getActivePage,
  getAllPages,
  getIsFetchingStatus,
  getUsersPerPage,
  getAllUsersPerPage,
  getIsDisabledStatus,
  getLoginText,
} from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    users: getNewFriends(state),
    activePage: getActivePage(state),
    allPages: getAllPages(state),
    isFetchingState: getIsFetchingStatus(state),
    usersPerPage: getUsersPerPage(state),
    allUsersPerPage: getAllUsersPerPage(state),
    isDisabled: getIsDisabledStatus(state),
    login: getLoginText(state),
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
