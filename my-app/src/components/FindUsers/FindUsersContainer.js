import FindUsers from "./FindUsers";
import { connect } from "react-redux";
import {follow,unFollow,setUsers,editTotalPages,changeActivePage,isFetching} from "../../reducers/reducers";

const mapStateToProps = (state) => {
  return {
    users: state.newFriends,
    activePage: state.pagination.activePage,
    allPages: state.pagination.allPages,
    isFetchingState: state.isFetching,
    usersPerPage: state.pagination.usersPerPage,
  };
};

export default connect(mapStateToProps, {
  //mapDispatchToProps
  follow,
  unFollow,
  setUsers,
  editTotalPages,
  changeActivePage,
  isFetching
})(FindUsers);
