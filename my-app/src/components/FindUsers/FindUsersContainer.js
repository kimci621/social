import FindUsers from "./FindUsers";
import { connect } from "react-redux";
import {
  setUsers,
  follow,
  thunkUsersUpdate,
} from "../../reducers/users";
import { editTotalPages, changeActivePage } from "../../reducers/pagination";
import { isFetching } from "../../reducers/isFetching";
import hoc from "../../hoc/hoc"

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.newFriends,
    activePage: state.paginationReducer.activePage,
    allPages: state.paginationReducer.allPages,
    isFetchingState: state.isFetchingReducer.isFetching,
    usersPerPage: state.usersReducer.usersPerPage,
    allUsersPerPage: state.usersReducer.allUsersPerPage,
    isDisabled: state.usersReducer.isDisabled,
    login: state.loginReducer.login
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
