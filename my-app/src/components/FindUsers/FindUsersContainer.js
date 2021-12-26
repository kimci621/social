import FindUsers from "./FindUsers";
import { connect } from "react-redux";
import { setUsers, follow, updateUsers } from "../../reducers/users";
import { editTotalPages, changeActivePage } from "../../reducers/pagination";
import { isFetching } from "../../reducers/isFetching";

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.newFriends,
    activePage: state.paginationReducer.activePage,
    allPages: state.paginationReducer.allPages,
    isFetchingState: state.isFetchingReducer.isFetching,
    usersPerPage: state.usersReducer.usersPerPage,
  };
};

export default connect(mapStateToProps, {
  //mapDispatchToProps
  follow,
  setUsers,
  editTotalPages,
  changeActivePage,
  isFetching,
  updateUsers
})(FindUsers);
